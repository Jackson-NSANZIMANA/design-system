import path from "node:path";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";

import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

const KB_ROOT = path.join(process.cwd(), ".lens-knowledge-base");

type MdLink = {
  file: string;
  url: string;
  line?: number;
  column?: number;
};

async function listMarkdownFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // still traverse dot dirs? you said validate all links, but KB has no dot dirs besides root
      if (e.name === "node_modules") continue;
      out.push(...(await listMarkdownFiles(full)));
    } else if (e.isFile() && e.name.endsWith(".md")) {
      out.push(full);
    }
  }
  return out;
}

function isExternal(url: string) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  );
}

function stripAnchor(url: string) {
  const i = url.indexOf("#");
  return i === -1 ? url : url.slice(0, i);
}

function resolveLink(fromFile: string, rawUrl: string) {
  const cleaned = stripAnchor(rawUrl).trim();

  // Empty link "(#foo)" resolves to same file; we only check file existence here
  if (cleaned === "" || cleaned.startsWith("#")) return null;

  // Ignore external
  if (isExternal(cleaned)) return null;

  // Absolute filesystem paths are almost always wrong in docs; treat as invalid
  if (cleaned.startsWith("/")) return { kind: "invalid-absolute", target: cleaned };

  // Resolve relative to current file location
  const target = path.resolve(path.dirname(fromFile), cleaned);
  return { kind: "local", target, raw: cleaned };
}

async function extractLinks(file: string): Promise<MdLink[]> {
  const content = await fs.readFile(file, "utf8");

  const tree = unified().use(remarkParse).parse(content);

  const links: MdLink[] = [];

  // markdown links: [text](url)
  visit(tree, "link", (node: any) => {
    links.push({
      file,
      url: String(node.url ?? ""),
      line: node.position?.start?.line,
      column: node.position?.start?.column,
    });
  });

  // images: ![alt](url)
  visit(tree, "image", (node: any) => {
    links.push({
      file,
      url: String(node.url ?? ""),
      line: node.position?.start?.line,
      column: node.position?.start?.column,
    });
  });

  return links;
}

async function main() {
  if (!existsSync(KB_ROOT)) {
    throw new Error(`KB root not found: ${KB_ROOT}`);
  }

  const files = await listMarkdownFiles(KB_ROOT);
  const errors: string[] = [];

  for (const file of files) {
    const links = await extractLinks(file);

    for (const l of links) {
      const resolved = resolveLink(file, l.url);
      if (!resolved) continue;

      if (resolved.kind === "invalid-absolute") {
        const rel = path.relative(KB_ROOT, file);
        errors.push(
          `[${rel}:${l.line ?? "?"}:${l.column ?? "?"}] Invalid absolute link: (${l.url})`
        );
        continue;
      }

      if (!existsSync(resolved.target)) {
        const rel = path.relative(KB_ROOT, file);
        // show link as authored, not stripped version
        errors.push(
          `[${rel}:${l.line ?? "?"}:${l.column ?? "?"}] Broken link: (${l.url}) -> ${resolved.target}`
        );
      }
    }
  }

  if (errors.length) {
    console.error(`❌ KB link validation failed (${errors.length} issue(s)):\n`);
    for (const e of errors) console.error(e);
    process.exit(1);
  }

  console.log(`✅ KB link validation passed (${files.length} markdown file(s) checked)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});