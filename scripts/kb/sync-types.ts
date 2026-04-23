// scripts/kb/sync-types.ts
import path from "node:path";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

async function rmDir(p: string) {
  if (existsSync(p)) await fs.rm(p, { recursive: true, force: true });
}

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function copyDir(src: string, dest: string) {
  await ensureDir(dest);
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else if (e.isFile()) await fs.copyFile(s, d);
  }
}

function findPackageRoot(fromFile: string): string {
  let dir = path.dirname(fromFile);
  while (true) {
    const candidate = path.join(dir, "package.json");
    if (existsSync(candidate)) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error(`Could not find package.json above: ${fromFile}`);
    }
    dir = parent;
  }
}

async function main() {
  // Resolve Lens entrypoint (allowed by exports)
  const lensEntry = require.resolve("@loomhq/lens");
  const lensRoot = findPackageRoot(lensEntry);

  const lensPkgJsonPath = path.join(lensRoot, "package.json");
  const lensPkgJson = JSON.parse(
    await fs.readFile(lensPkgJsonPath, "utf8"),
  ) as {
    name: string;
    version: string;
    exports?: unknown;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
  };

  const lensTypesDir = path.join(lensRoot, "dist", "types", "src");
  if (!existsSync(lensTypesDir)) {
    throw new Error(`Lens types directory not found: ${lensTypesDir}`);
  }

  const kbRoot = path.join(process.cwd(), ".lens-knowledge-base");
  const kbTypesDir = path.join(kbRoot, "type-declarations");
  const kbMetaPath = path.join(kbRoot, "package-meta.json");

  // 1) Sync types (Lens is source-of-truth)
  await rmDir(kbTypesDir);
  await copyDir(lensTypesDir, kbTypesDir);

  // 2) Sync meta (avoid machine-specific paths)
  const nextMeta = {
    packageName: lensPkgJson.name,
    version: lensPkgJson.version,
    exports: lensPkgJson.exports ?? null,
    dependencies: lensPkgJson.dependencies ?? {},
    peerDependencies: lensPkgJson.peerDependencies ?? {},
  };

  await fs.writeFile(
    kbMetaPath,
    JSON.stringify(nextMeta, null, 2) + "\n",
    "utf8",
  );

  console.log(`Lens root: ${lensRoot}`);
  console.log(`Synced Lens types -> ${kbTypesDir}`);
  console.log(`Updated KB meta -> ${kbMetaPath}`);
  console.log(`Lens version: ${lensPkgJson.version}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
