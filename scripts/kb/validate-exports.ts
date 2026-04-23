import path from "node:path";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";

const KB_ROOT = path.join(process.cwd(), ".lens-knowledge-base");
const EXPORTS_INVENTORY = path.join(KB_ROOT, "exports-inventory.json");
const COMPONENT_INDEX = path.join(KB_ROOT, "COMPONENT-INDEX.md");
const COMPONENTS_DIR = path.join(KB_ROOT, "components");

function isPascalCase(name: string) {
  return /^[A-Z][A-Za-z0-9]*$/.test(name);
}

function collectStringsDeep(value: unknown, out: Set<string>) {
  if (typeof value === "string") out.add(value);
  else if (Array.isArray(value)) for (const v of value) collectStringsDeep(v, out);
  else if (value && typeof value === "object") {
    for (const v of Object.values(value as Record<string, unknown>)) collectStringsDeep(v, out);
  }
}

async function main() {
  if (!existsSync(EXPORTS_INVENTORY)) {
    throw new Error(`Missing exports inventory: ${EXPORTS_INVENTORY}`);
  }
  if (!existsSync(COMPONENT_INDEX)) {
    throw new Error(`Missing component index: ${COMPONENT_INDEX}`);
  }
  if (!existsSync(COMPONENTS_DIR)) {
    throw new Error(`Missing components dir: ${COMPONENTS_DIR}`);
  }

  const raw = JSON.parse(await fs.readFile(EXPORTS_INVENTORY, "utf8")) as unknown;
  const strings = new Set<string>();
  collectStringsDeep(raw, strings);

  // Candidate exported components: PascalCase, not obviously types-only.
  // (We can refine later if your inventory includes non-component exports.)
  const exportedComponentNames = [...strings]
    .map((s) => s.trim())
    .filter((s) => isPascalCase(s))
    .filter((s) => !s.endsWith("Props") && !s.endsWith("Context") && !s.endsWith("Provider"))
    .sort();

  const indexText = await fs.readFile(COMPONENT_INDEX, "utf8");

  const missingDocs: string[] = [];
  const missingIndex: string[] = [];

  for (const name of exportedComponentNames) {
    const docPath = path.join(COMPONENTS_DIR, `${name}.md`);
    const docExists = existsSync(docPath);
    if (!docExists) missingDocs.push(name);

    // Only require index entry if doc exists (prevents double-noise)
    if (docExists) {
      const expectedLink = `(components/${name}.md)`;
      if (!indexText.includes(expectedLink)) missingIndex.push(name);
    }
  }

  const errors: string[] = [];
  if (missingDocs.length) {
    errors.push(
      `Missing component docs for exported names:\n` + missingDocs.map((n) => `- ${n}`).join("\n")
    );
  }
  if (missingIndex.length) {
    errors.push(
      `Docs exist but are not listed in COMPONENT-INDEX.md:\n` +
        missingIndex.map((n) => `- ${n}`).join("\n")
    );
  }

  if (errors.length) {
    console.error("❌ Export coverage validation failed:\n");
    for (const e of errors) console.error(e + "\n");
    process.exit(1);
  }

  console.log(
    `✅ Export coverage validation passed (checked ${exportedComponentNames.length} exported candidate(s))`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});