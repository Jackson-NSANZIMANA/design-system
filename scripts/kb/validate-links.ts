// scripts/kb/validate-links.ts
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";

interface BrokenLink {
  file: string;
  line: number;
  target: string;
  reason: string;
}

function findMarkdownFiles(root: string): string[] {
  return globSync("**/*.md", {
    cwd: root,
    absolute: true,
    ignore: ["node_modules/**", ".git/**"],
  });
}

function extractLinks(content: string): Array<{ line: number; target: string; raw: string }> {
  const links: Array<{ line: number; target: string; raw: string }> = [];
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Match [text](url)
    const mdLinkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = mdLinkRegex.exec(line)) !== null) {
      const target = match[2];
      // Skip external URLs and anchors
      if (target.startsWith("http://") || target.startsWith("https://") || target.startsWith("#")) {
        continue;
      }
      links.push({ line: lineNum, target, raw: match[0] });
    }

    // Match <url> style links
    const angleLinkRegex = /<([^>]+\.md[^>]*)>/g;
    while ((match = angleLinkRegex.exec(line)) !== null) {
      links.push({ line: lineNum, target: match[1], raw: match[0] });
    }
  }

  return links;
}

function resolveLink(fromFile: string, target: string): { exists: boolean; resolvedPath: string } {
  const fromDir = path.dirname(fromFile);
  const resolved = path.resolve(fromDir, target);
  return {
    exists: fs.existsSync(resolved),
    resolvedPath: resolved,
  };
}

function validateAllLinks(root: string): { broken: BrokenLink[]; checked: number } {
  const files = findMarkdownFiles(root);
  const broken: BrokenLink[] = [];
  let totalLinks = 0;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const links = extractLinks(content);

    for (const link of links) {
      totalLinks++;
      const { exists } = resolveLink(file, link.target);
      if (!exists) {
        broken.push({
          file: path.relative(process.cwd(), file),
          line: link.line,
          target: link.target,
          reason: `Target file not found: ${link.target}`,
        });
      }
    }
  }

  return { broken, checked: totalLinks };
}

function main() {
  const kbRoot = path.join(process.cwd(), ".lens-knowledge-base");

  if (!fs.existsSync(kbRoot)) {
    console.error("Error: .lens-knowledge-base directory not found");
    process.exit(1);
  }

  const { broken, checked } = validateAllLinks(kbRoot);

  if (broken.length > 0) {
    console.error(`\n❌ Found ${broken.length} broken link(s):\n`);
    for (const b of broken) {
      console.error(`  ${b.file}:${b.line}`);
      console.error(`    → ${b.target}`);
      console.error(`    ${b.reason}\n`);
    }
    process.exit(1);
  }

  console.log(`✅ All ${checked} links valid`);
  process.exit(0);
}

main();