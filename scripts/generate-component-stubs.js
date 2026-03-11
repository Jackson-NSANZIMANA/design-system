const fs = require("fs");
const path = require("path");

const KB = path.join(process.cwd(), ".lens-knowledge-base");
const EXPORTS = path.join(KB, "exports-verified.json");
const COMPONENTS_DIR = path.join(KB, "components");
const TYPES_DIR = path.join(KB, "type-declarations");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function listComponentDocNames() {
  if (!fs.existsSync(COMPONENTS_DIR)) return new Set();
  return new Set(
    fs.readdirSync(COMPONENTS_DIR)
      .filter(f => f.endsWith(".md"))
      .map(f => f.replace(/\.md$/, ""))
  );
}

function findTypeDeclForComponent(componentName) {
  // Search type declarations for a file path containing the component name.
  // This is not guessing: it's a filesystem lookup.
  if (!fs.existsSync(TYPES_DIR)) return null;

  const target = componentName.toLowerCase();
  const stack = [TYPES_DIR];
  while (stack.length) {
    const dir = stack.pop();
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (ent.isFile() && ent.name.endsWith(".d.ts")) {
        const rel = path.relative(KB, full).replace(/\\/g, "/");
        if (rel.toLowerCase().includes(target)) return rel;
      }
    }
  }
  return null;
}

// These relationships are already enforced in your linter nesting rules;
// we are reusing the same “known structure” (not guessing).
const PARENT_DOC_HINTS = {
  SplitSection: "Split.md",
  MenuItem: "Menu.md",
  ListRow: "List.md",
  Tab: "Tabs.md",
  IconButtonBox: "IconButton.md",
  ModalCard: "Modal.md",
  SkeletonContainer: "Skeleton.md",
  SkeletonText: "Skeleton.md",
  TooltipBox: "Tooltip.md",
};

function writeStub(name, opts) {
  const outPath = path.join(COMPONENTS_DIR, `${name}.md`);
  if (fs.existsSync(outPath)) return { name, status: "exists" };

  const now = new Date().toISOString();

  let md = `# ${name}\n\n`;
  md += `> **Generated stub** (${now}). This file exists to prevent agents from opening large reference docs and to provide a direct lookup path.\n\n`;
  md += `**Import:** \`import { ${name} } from '@loomhq/lens'\`\n\n`;

  if (opts.parentDoc) {
    md += `## Where to read the documentation\n\n`;
    md += `This export is documented inside:\n\n`;
    md += `- \`.lens-knowledge-base/components/${opts.parentDoc}\`\n\n`;
  }

  if (opts.typeDeclPath) {
    md += `## Type definitions (source of truth)\n\n`;
    md += `- \`.lens-knowledge-base/${opts.typeDeclPath}\`\n\n`;
  } else {
    md += `## Type definitions (source of truth)\n\n`;
    md += `- Check \`.lens-knowledge-base/type-declarations/\` (component type file not auto-located)\n\n`;
  }

  md += `## Notes\n\n`;
  md += `- If this component needs full documentation, extract it from the Lens docs and replace this stub.\n`;
  md += `- Token lookup: \`.lens-knowledge-base/tokens/_tokens-index.md\`\n`;
  md += `- Component lookup: \`.lens-knowledge-base/COMPONENT-INDEX.md\`\n`;

  fs.writeFileSync(outPath, md, "utf8");
  return { name, status: "created", path: outPath };
}

function main() {
  if (!fs.existsSync(EXPORTS)) {
    console.error("Missing exports-verified.json. Expected:", EXPORTS);
    process.exit(1);
  }
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
  }

  const verified = readJson(EXPORTS);

  // Collect all exported components we care about (exclude illustrations by default; they’re usually covered by Illustration.md).
  const exported = new Set([
    ...(verified.layoutComponents || []),
    ...(verified.typographyComponents || []),
    ...(verified.interactiveComponents || []),
    ...(verified.dataDisplayComponents || []),
    ...(verified.feedbackComponents || []),
    ...(verified.formComponents || []),
    ...(verified.loadingComponents || []),
    ...(verified.utilityComponents || []),
  ]);

  const existingDocs = listComponentDocNames();

  const missing = [...exported].filter(name => !existingDocs.has(name));
  missing.sort((a, b) => a.localeCompare(b));

  const results = [];
  for (const name of missing) {
    const parentDoc = PARENT_DOC_HINTS[name] || null;
    const typeDeclPath = findTypeDeclForComponent(name);

    results.push(writeStub(name, { parentDoc, typeDeclPath }));
  }

  const created = results.filter(r => r.status === "created").length;
  const already = results.filter(r => r.status === "exists").length;

  console.log("=== Component Stub Generation ===");
  console.log("Exported (non-illustration) components:", exported.size);
  console.log("Existing docs:", existingDocs.size);
  console.log("Missing docs:", missing.length);
  console.log("Created stubs:", created);
  console.log("Already existed:", already);

  if (created) {
    console.log("\nCreated:");
    results.filter(r => r.status === "created").forEach(r => console.log("  - " + r.name));
  }
}

main();
