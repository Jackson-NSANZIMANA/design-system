const fs = require('fs');
const path = require('path');

const KB = path.join(process.cwd(), '.lens-knowledge-base');
const OUT = path.join(process.cwd(), 'LENS_SESSION_CONTEXT.md');

function read(p) {
  return fs.readFileSync(p, 'utf8');
}

function safeRead(p) {
  return fs.existsSync(p) ? read(p) : '';
}

const quick = safeRead(path.join(KB, 'QUICK-REFERENCE.md'));
const compIndex = safeRead(path.join(KB, 'COMPONENT-INDEX.md'));
const tokensIndex = safeRead(path.join(KB, 'tokens', '_tokens-index.md'));
const exportsVerified = safeRead(path.join(KB, 'exports-verified.json'));

let md = `# Lens Session Context (KB-FIRST)\n\n`;
md += `This file is generated to preload the AI with the correct Lens workflow.\n\n`;

md += `## KB-FIRST LOOKUP ORDER (MANDATORY)\n\n`;
md += `1. .lens-knowledge-base/QUICK-REFERENCE.md\n`;
md += `2. .lens-knowledge-base/COMPONENT-INDEX.md\n`;
md += `3. .lens-knowledge-base/components/<Component>.md\n`;
md += `4. .lens-knowledge-base/tokens/_tokens-index.md → then the correct token file\n`;
md += `5. .lens-knowledge-base/exports-verified.json\n`;
md += `6. Only then: https://lens.loom.dev\n\n`;

md += `---\n\n## QUICK REFERENCE\n\n${quick}\n\n`;
md += `---\n\n## COMPONENT INDEX\n\n${compIndex}\n\n`;
md += `---\n\n## TOKENS INDEX\n\n${tokensIndex}\n\n`;

md += `---\n\n## VERIFIED EXPORTS (JSON)\n\n`;
md += `\`\`\`json\n${exportsVerified}\n\`\`\`\n`;

fs.writeFileSync(OUT, md);
console.log('✅ Generated:', OUT);
