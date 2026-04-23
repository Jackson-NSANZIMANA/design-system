import path from "node:path";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";

const KB_ROOT = path.join(process.cwd(), ".lens-knowledge-base");
const SIGNATURES_PATH = path.join(KB_ROOT, "component-signatures.json");
const COMPONENT_INDEX_PATH = path.join(KB_ROOT, "COMPONENT-INDEX.md");
const COMPONENTS_DIR = path.join(KB_ROOT, "components");

const FAMILY_COVERAGE: Array<{ pattern: RegExp; coveredByDoc: string }> = [
  // Lens exports many illustrations as separate symbols; we consider them covered by Illustration.md
  { pattern: /^Illustration[A-Z]/, coveredByDoc: "Illustration.md" },
  // Upstream typo exists in your signatures: "Illutration..."
  { pattern: /^Illutration[A-Z]/, coveredByDoc: "Illustration.md" },
];

const IGNORE_SIGNATURES: RegExp[] = [
  /Rules$/, // e.g. JustifyContentRules (not a UI component doc)
];

function indexComponentNames(indexText: string): string[] {
  // Extract component doc links of the form (components/Foo.md)
  const re = /\(components\/([A-Za-z0-9]+)\.md\)/g;
  const names = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(indexText)) !== null) names.add(m[1]);
  return [...names].sort();
}

async function listDocs(): Promise<Set<string>> {
  const entries = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true });
  const out = new Set<string>();
  for (const e of entries) {
    if (!e.isFile()) continue;
    if (!e.name.endsWith(".md")) continue;
    out.add(e.name.replace(/\.md$/, ""));
  }
  return out;
}

function isFamilyCovered(name: string): string | null {
  for (const rule of FAMILY_COVERAGE) {
    if (rule.pattern.test(name)) return rule.coveredByDoc;
  }
  return null;
}

function isIgnored(name: string): boolean {
  return IGNORE_SIGNATURES.some((re) => re.test(name));
}

async function main() {
  if (!existsSync(SIGNATURES_PATH))
    throw new Error(`Missing ${SIGNATURES_PATH}`);
  if (!existsSync(COMPONENT_INDEX_PATH))
    throw new Error(`Missing ${COMPONENT_INDEX_PATH}`);
  if (!existsSync(COMPONENTS_DIR)) throw new Error(`Missing ${COMPONENTS_DIR}`);

  const signatures = JSON.parse(
    await fs.readFile(SIGNATURES_PATH, "utf8"),
  ) as Record<string, unknown>;
  const signatureNames = Object.keys(signatures).sort();

  const indexText = await fs.readFile(COMPONENT_INDEX_PATH, "utf8");
  const indexedNames = indexComponentNames(indexText);

  const docs = await listDocs();

  const errors: string[] = [];

  // A) Index must reference real docs, and those docs must be real exported components
  for (const name of indexedNames) {
    const docPath = path.join(COMPONENTS_DIR, `${name}.md`);
    if (!existsSync(docPath)) {
      errors.push(`Index points to missing doc: components/${name}.md`);
      continue;
    }
    if (!(name in signatures)) {
      errors.push(
        `Index includes "${name}" but it is not present in component-signatures.json`,
      );
    }
  }

  // B) Every signature entry must be covered by docs OR family-coverage OR ignored
  // (This ensures you don’t silently lose doc coverage as Lens evolves.)
  for (const name of signatureNames) {
    if (docs.has(name)) continue;

    const familyDoc = isFamilyCovered(name);
    if (familyDoc) {
      if (!docs.has(familyDoc.replace(/\.md$/, ""))) {
        errors.push(
          `Signature "${name}" is family-covered by ${familyDoc}, but ${familyDoc} doc is missing in components/`,
        );
      }
      continue;
    }

    if (isIgnored(name)) continue;

    errors.push(`Missing component doc for exported signature: ${name}`);
  }

  if (errors.length) {
    console.error(
      `❌ Component coverage validation failed (${errors.length} issue(s)):\n`,
    );
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }

  console.log(
    `✅ Component coverage passed (${signatureNames.length} signature(s) checked)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
