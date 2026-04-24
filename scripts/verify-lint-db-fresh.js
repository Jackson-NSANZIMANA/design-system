#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const MASTERY_DB = path.join(ROOT, "eslint-plugin-lens-compliance", "lib", "mastery-db.json");
const COMPONENT_DB = path.join(ROOT, "eslint-plugin-lens-compliance", "lib", "component-mastery-db.json");
const LENS_PKG = path.join(ROOT, "node_modules", "@loomhq", "lens", "package.json");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function checkGeneratedMetadata(name, db, lensVersion) {
  if (!db._generated) fail(`${name} missing _generated metadata.`);
  if (!db._lensVersion) fail(`${name} missing _lensVersion metadata.`);
  if (db._lensVersion !== lensVersion) {
    fail(
      `${name} _lensVersion (${db._lensVersion}) does not match installed Lens (${lensVersion}). Run: pnpm generate:lint-dbs`,
    );
  }
}

function main() {
  if (!fs.existsSync(LENS_PKG)) fail("Cannot verify DB freshness: @loomhq/lens package.json not found.");
  const lensVersion = readJson(LENS_PKG).version;

  if (!fs.existsSync(MASTERY_DB)) fail("mastery-db.json not found.");
  if (!fs.existsSync(COMPONENT_DB)) fail("component-mastery-db.json not found.");

  const masteryDb = readJson(MASTERY_DB);
  const componentDb = readJson(COMPONENT_DB);

  checkGeneratedMetadata("mastery-db.json", masteryDb, lensVersion);
  checkGeneratedMetadata("component-mastery-db.json", componentDb, lensVersion);

  if (!Array.isArray(masteryDb.approvedClasses) || masteryDb.approvedClasses.length === 0) {
    fail("mastery-db.json approvedClasses is empty or invalid.");
  }
  if (!componentDb.components || Object.keys(componentDb.components).length === 0) {
    fail("component-mastery-db.json components is empty or invalid.");
  }
  if (!componentDb.responsive || !Array.isArray(componentDb.responsive.keys)) {
    fail("component-mastery-db.json responsive.keys is missing.");
  }

  console.log("✅ Lint DB freshness check passed.");
}

main();
