#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = process.cwd();
const TYPES_DIR = path.join(ROOT, ".lens-knowledge-base", "type-declarations");
const EXPORTS_PATH = path.join(
  ROOT,
  ".lens-knowledge-base",
  "exports-verified.json",
);
const OUTPUT_PATH = path.join(
  ROOT,
  "eslint-plugin-lens-compliance",
  "lib",
  "component-mastery-db.json",
);

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function collectFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectFiles(full, files);
    else if (e.isFile() && e.name.endsWith(".d.ts")) files.push(full);
  }
  return files;
}

function extractTypeAliases(content) {
  const aliases = {};

  // Match: type AliasProps = { ... };
  const typeRe =
    /(?:export\s+)?type\s+([A-Za-z0-9_]+Props)\s*=\s*\{([\s\S]*?)\n\};/g;

  // Match: interface AliasProps [extends ...] { ... }
  // Key changes:
  // 1. Added (?:\s+extends\s+[A-Za-z0-9_]+)? to handle "extends SharedProps"
  // 2. Changed \n} to just } (files may not have newline before closing brace)
  const interfaceRe =
    /(?:export\s+)?interface\s+([A-Za-z0-9_]+Props)(?:\s+extends\s+[A-Za-z0-9_]+)?\s*\{([\s\S]*?)\n\}/g;

  let m;
  while ((m = typeRe.exec(content)) !== null) aliases[m[1]] = m[2];
  while ((m = interfaceRe.exec(content)) !== null) aliases[m[1]] = m[2];

  return aliases;
}

function parsePropType(typeText) {
  let type = typeText.trim();

  // Extract inner type from ResponsiveType<T>
  const responsiveMatch = type.match(/ResponsiveType<([^>]+)>/i);
  if (responsiveMatch && responsiveMatch[1]) {
    type = responsiveMatch[1];
  }

  // Extract all single-quoted literals (handles unions, ResponsiveType, etc.)
  const literals = [...type.matchAll(/'([^']+)'/g)].map((m) => m[1]);

  if (literals.length > 0) {
    return [...new Set(literals)];
  }

  // Primitive and React type markers
  if (/\bboolean\b/.test(type)) return ["boolean"];
  if (/\bnumber\b/.test(type)) return ["number"];
  if (/\bstring\b/.test(type)) return ["string"];
  if (/\bReact\.ReactNode\b/.test(type)) return ["React.ReactNode"];
  if (/\bReact\.[A-Za-z]+Handler\b/.test(type))
    return ["React.ReactEventHandler"];

  // Type aliases (AvatarColor, etc.)
  const trimmed = type.trim();
  if (/^[A-Z]/.test(trimmed)) return [trimmed];

  return [trimmed.replace(/\s+/g, " ")];
}
function parsePropsFromAliasBody(body) {
  const props = {};
  const required = [];
  for (const rawLine of body.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("//")) continue;
    const m = line.match(/^([A-Za-z0-9_]+)(\?)?:\s*(.+);$/);
    if (!m) continue;
    const [, propName, optional, typeText] = m;
    props[propName] = parsePropType(typeText);
    if (!optional && !["children", "className", "style"].includes(propName))
      required.push(propName);
  }
  return { props, required };
}

function getLensVersion() {
  try {
    return (
      readJson(
        path.join(ROOT, "node_modules", "@loomhq", "lens", "package.json"),
      ).version || "unknown"
    );
  } catch {
    return "unknown";
  }
}

function main() {
  if (!fs.existsSync(EXPORTS_PATH)) {
    console.error("❌ Missing exports file:", EXPORTS_PATH);
    process.exit(1);
  }
  if (!fs.existsSync(TYPES_DIR)) {
    console.error("❌ Missing Lens type declarations directory:", TYPES_DIR);
    process.exit(1);
  }

  const exportsVerified = readJson(EXPORTS_PATH);
  const oldDb = fs.existsSync(OUTPUT_PATH)
    ? readJson(OUTPUT_PATH)
    : { components: {}, nesting: {}, responsive: { keys: [] } };

  const componentsFromExports = [
    ...(exportsVerified.layoutComponents || []),
    ...(exportsVerified.typographyComponents || []),
    ...(exportsVerified.interactiveComponents || []),
    ...(exportsVerified.dataDisplayComponents || []),
    ...(exportsVerified.feedbackComponents || []),
    ...(exportsVerified.formComponents || []),
    ...(exportsVerified.loadingComponents || []),
    ...(exportsVerified.utilityComponents || []),
  ];

  const componentSet = new Set(componentsFromExports);
  const aliasMap = {};

  for (const file of collectFiles(TYPES_DIR)) {
    Object.assign(aliasMap, extractTypeAliases(fs.readFileSync(file, "utf8")));
  }

  const components = {};
  const oldComponents = oldDb.components || {};

  for (const comp of componentSet) {
    const existing = oldComponents[comp] || { props: {}, required: [] };
    if (!aliasMap[`${comp}Props`]) {
      components[comp] = existing;
      continue;
    }

    const parsed = parsePropsFromAliasBody(aliasMap[`${comp}Props`]);
    const mergedProps = { ...(existing.props || {}), ...parsed.props };
    const requiredSet = new Set([
      ...(existing.required || []),
      ...parsed.required,
    ]);
    components[comp] = { props: mergedProps, required: [...requiredSet] };
  }

  // ── Content hash — stable as long as data hasn't changed ──────────────────
  const lensVersion = getLensVersion();
  const dataToHash = JSON.stringify({
    lensVersion,
    components,
    nesting: oldDb.nesting || {},
    responsive: oldDb.responsive || { keys: [] },
  });
  const contentHash = crypto
    .createHash("sha256")
    .update(dataToHash)
    .digest("hex")
    .slice(0, 16);

  const output = {
    _generated: contentHash,
    _lensVersion: lensVersion,
    _note:
      "Generated by scripts/generate-component-mastery-db.js from Lens type declarations + exports-verified.json. Do not edit manually.",
    components,
    nesting: oldDb.nesting || {},
    responsive: oldDb.responsive || {
      keys: ["default", "xsmall", "small", "medium", "large"],
    },
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(
    `✅ component-mastery-db.json regenerated  (hash: ${contentHash})`,
  );
  console.log("   - components:", Object.keys(components).length);
  console.log("   - output:", OUTPUT_PATH);
}

main();
