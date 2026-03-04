#!/bin/bash

# === lens-knowledge-extractor.sh ===
# Purpose: Build a local structured knowledge base from Lens docs

PROJECT_ROOT=$(pwd)
LENS_KB_DIR="$PROJECT_ROOT/.lens-knowledge-base"

mkdir -p "$LENS_KB_DIR"/{components,tokens,patterns,guides,api-reference,examples}

echo "Step 0: Verifying Lens installation..."
bash "$(dirname "$0")/verify-lens-install.sh" || exit 1

echo "=== LENS KNOWLEDGE BASE BUILDER ==="

# Step 1: Extract component inventory from installed package
echo "[1/6] Extracting component inventory from @loomhq/lens..."

node -e "
const fs = require('fs');
const path = require('path');

// Bypass exports restriction by reading package.json directly from node_modules
const pkgJsonPath = path.join(process.cwd(), 'node_modules', '@loomhq', 'lens', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
const lensPath = path.dirname(pkgJsonPath);

const output = {
  packageName: packageJson.name,
  version: packageJson.version,
  exports: Object.keys(packageJson.exports || {}),
  dependencies: packageJson.dependencies,
  peerDependencies: packageJson.peerDependencies,
  lensPath: lensPath,
};

fs.writeFileSync(
  '$LENS_KB_DIR/package-meta.json',
  JSON.stringify(output, null, 2)
);
console.log('Package metadata extracted: ' + packageJson.name + '@' + packageJson.version);
"

if [ $? -ne 0 ]; then
  echo "❌ Step 1 failed. Cannot continue without package metadata."
  exit 1
fi

# Step 2: Extract all exported components/types
echo "[2/6] Extracting all exports..."

node -e "
const fs = require('fs');
const lens = require('@loomhq/lens');

const allExports = Object.keys(lens).sort();
const grouped = {
  components: allExports.filter(e => /^[A-Z]/.test(e) && !/^use/.test(e)),
  hooks: allExports.filter(e => /^use[A-Z]/.test(e)),
  utilities: allExports.filter(e => /^[a-z]/.test(e) && !/^use/.test(e)),
  types: allExports.filter(e => /Type$|Props$|Config$/.test(e)),
  total: allExports.length,
};

fs.writeFileSync(
  '$LENS_KB_DIR/exports-inventory.json',
  JSON.stringify(grouped, null, 2)
);

console.log('Found:', {
  components: grouped.components.length,
  hooks: grouped.hooks.length,
  utilities: grouped.utilities.length,
  total: grouped.total,
});
"

if [ $? -ne 0 ]; then
  echo "❌ Step 2 failed."
  exit 1
fi

# Step 3: Extract TypeScript declarations (critical for agent accuracy)
echo "[3/6] Extracting TypeScript declarations..."

node -e "
const fs = require('fs');
const path = require('path');

// Read package.json directly from node_modules (same bypass as Step 1)
const pkgJsonPath = path.join(process.cwd(), 'node_modules', '@loomhq', 'lens', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
const lensPath = path.dirname(pkgJsonPath);

// Find the types entry point
const typesEntry = pkg.types || pkg.typings || '';

if (!typesEntry) {
  console.log('No types/typings field found in package.json');
  console.log('Available fields:', Object.keys(pkg).filter(k => k.includes('type')));
  
  // Try to find .d.ts files anyway
  const distDir = path.join(lensPath, 'dist');
  if (fs.existsSync(distDir)) {
    console.log('dist/ directory exists. Contents:', fs.readdirSync(distDir).slice(0, 20));
    console.log('TYPE_DIR:' + distDir);
  } else {
    // Check for other common type locations
    const candidates = ['types', 'typings', 'lib'];
    for (const dir of candidates) {
      const candidate = path.join(lensPath, dir);
      if (fs.existsSync(candidate)) {
        console.log(dir + '/ directory exists');
        console.log('TYPE_DIR:' + candidate);
        break;
      }
    }
  }
} else {
  const typesDir = path.join(lensPath, path.dirname(typesEntry));
  console.log('Types entry: ' + typesEntry);
  console.log('Types directory: ' + typesDir);
  
  if (fs.existsSync(typesDir)) {
    console.log('TYPE_DIR:' + typesDir);
  } else {
    console.log('Types directory does not exist at: ' + typesDir);
  }
}
" 2>&1 | tee /tmp/lens-types-output.txt

LENS_TYPES_DIR=$(grep "^TYPE_DIR:" /tmp/lens-types-output.txt | sed 's/^TYPE_DIR://')

if [ -n "$LENS_TYPES_DIR" ] && [ -d "$LENS_TYPES_DIR" ]; then
  echo "Copying type declarations from: $LENS_TYPES_DIR"
  mkdir -p "$LENS_KB_DIR/type-declarations"
  
  # Copy only .d.ts files to save space, or the whole dir if small enough
  TOTAL_SIZE=$(du -sm "$LENS_TYPES_DIR" 2>/dev/null | awk '{print $1}')
  if [ "${TOTAL_SIZE:-0}" -gt 50 ]; then
    echo "Directory is ${TOTAL_SIZE}MB — copying only .d.ts files..."
    find "$LENS_TYPES_DIR" -name "*.d.ts" -exec cp --parents {} "$LENS_KB_DIR/type-declarations/" \; 2>/dev/null
  else
    cp -r "$LENS_TYPES_DIR"/* "$LENS_KB_DIR/type-declarations/" 2>/dev/null
  fi
  echo "Type declarations copied."
else
  echo "⚠️  Warning: Could not locate type declarations directory."
  echo "   This is non-critical — agents can still use exports-inventory.json"
fi

rm -f /tmp/lens-types-output.txt

# Step 4: Create documentation manifest
echo "[4/6] Creating documentation manifest..."

# Skip the scraper attempt entirely — it never works
# Go straight to creating the manual manifest

node -e "
const fs = require('fs');

const knownPaths = [
  '/getting-started',
  '/components',
  '/design-tokens',
  '/patterns',
  '/theming',
  '/accessibility',
  '/layout',
  '/typography',
  '/colors',
  '/spacing',
  '/icons',
];

const manifest = {
  baseUrl: 'https://lens.loom.dev',
  paths: knownPaths,
  note: 'MANUALLY populate these files from the documentation site',
  instructions: [
    'Visit each path at lens.loom.dev',
    'Copy the complete content into corresponding .md files',
    'Include all code examples verbatim',
    'Include all prop tables',
    'Include all usage guidelines',
  ]
};

fs.writeFileSync(
  '$LENS_KB_DIR/docs-manifest.json',
  JSON.stringify(manifest, null, 2)
);
console.log('Documentation manifest created.');
"

# Step 5: Generate component prop signatures
echo "[5/6] Generating component prop signatures..."

node -e "
const fs = require('fs');
const lens = require('@loomhq/lens');

const componentDocs = {};
const allExports = Object.keys(lens).filter(e => /^[A-Z]/.test(e));

allExports.forEach(name => {
  const component = lens[name];
  if (component) {
    const subComponents = [];
    try {
      const keys = Object.keys(component);
      keys.forEach(k => {
        if (/^[A-Z]/.test(k)) subComponents.push(k);
      });
    } catch(e) {}

    componentDocs[name] = {
      name,
      isForwardRef: !!(component.render),
      displayName: component.displayName || name,
      hasSubComponents: subComponents,
      type: typeof component,
    };
  }
});

fs.writeFileSync(
  '$LENS_KB_DIR/component-signatures.json',
  JSON.stringify(componentDocs, null, 2)
);
console.log('Documented ' + Object.keys(componentDocs).length + ' components.');
"

if [ $? -ne 0 ]; then
  echo "❌ Step 5 failed."
  exit 1
fi

# Step 6: Build the master reference document
echo "[6/6] Building master reference document..."

node -e "
const fs = require('fs');

// Verify all required files exist before proceeding
const requiredFiles = [
  '$LENS_KB_DIR/exports-inventory.json',
  '$LENS_KB_DIR/component-signatures.json',
  '$LENS_KB_DIR/package-meta.json',
];

for (const f of requiredFiles) {
  if (!fs.existsSync(f)) {
    console.error('Missing required file: ' + f);
    process.exit(1);
  }
}

const inventory = JSON.parse(
  fs.readFileSync('$LENS_KB_DIR/exports-inventory.json', 'utf8')
);
const signatures = JSON.parse(
  fs.readFileSync('$LENS_KB_DIR/component-signatures.json', 'utf8')
);
const meta = JSON.parse(
  fs.readFileSync('$LENS_KB_DIR/package-meta.json', 'utf8')
);

let doc = '# Lens Design System — Master Reference\n\n';
doc += '## Package: ' + meta.packageName + '@' + meta.version + '\n\n';

doc += '## Available Components (' + inventory.components.length + ')\n\n';
doc += '| Component | Sub-Components | Forward Ref |\n';
doc += '|-----------|---------------|-------------|\n';
inventory.components.forEach(c => {
  const sig = signatures[c] || {};
  const subs = (sig.hasSubComponents || []).join(', ') || '—';
  const fref = sig.isForwardRef ? '✓' : '—';
  doc += '| \`' + c + '\` | ' + subs + ' | ' + fref + ' |\n';
});

doc += '\n## Available Hooks (' + inventory.hooks.length + ')\n\n';
inventory.hooks.forEach(h => { doc += '- \`' + h + '\`\n'; });

doc += '\n## Available Utilities (' + inventory.utilities.length + ')\n\n';
inventory.utilities.forEach(u => { doc += '- \`' + u + '\`\n'; });

doc += '\n---\n';
doc += '\n## Quick Reference\n\n';
doc += '- **Docs:** https://lens.loom.dev\n';
doc += '- **Package:** ' + meta.packageName + '\n';
doc += '- **Version:** ' + meta.version + '\n';
doc += '- **Total exports:** ' + inventory.total + '\n';

fs.writeFileSync('$LENS_KB_DIR/MASTER-REFERENCE.md', doc);
console.log('Master reference built successfully.');
"

if [ $? -ne 0 ]; then
  echo "❌ Step 6 failed."
  exit 1
fi

echo ""
echo "=========================================="
echo "  ✅ KNOWLEDGE BASE BUILT SUCCESSFULLY"
echo "=========================================="
echo ""
echo "Location: $LENS_KB_DIR"
echo ""
echo "Generated files:"
ls -la "$LENS_KB_DIR"/*.json "$LENS_KB_DIR"/*.md 2>/dev/null | awk '{print "  " $NF}'
echo ""
echo "MANUAL STEPS REQUIRED:"
echo "  1. Visit https://lens.loom.dev"
echo "  2. For EACH component, save to:"
echo "     $LENS_KB_DIR/components/<ComponentName>.md"
echo "     Include: description, all props, all variants, all code examples"
echo "  3. Save design tokens to: $LENS_KB_DIR/tokens/"
echo "  4. Save pattern guides to: $LENS_KB_DIR/patterns/"
