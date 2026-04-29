#!/usr/bin/env node
"use strict";

/**
 * verify-lint-db-fresh.js
 *
 * Verifies both lint DBs are:
 *   1. Present and valid JSON
 *   2. Built against the currently-installed @loomhq/lens version
 *   3. Internally consistent — _generated is a sha256 of their data payload
 *   4. Structurally complete — required keys, non-empty collections
 *
 * _generated is a content hash (not a wall-clock timestamp) so CI builds
 * are byte-for-byte reproducible when the underlying data has not changed.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = process.cwd();
const MASTERY_PATH = path.join(
  ROOT,
  "eslint-plugin-lens-compliance",
  "lib",
  "mastery-db.json",
);
const COMP_PATH = path.join(
  ROOT,
  "eslint-plugin-lens-compliance",
  "lib",
  "component-mastery-db.json",
);
const LENS_PKG = path.join(
  ROOT,
  "node_modules",
  "@loomhq",
  "lens",
  "package.json",
);

// ── helpers ──────────────────────────────────────────────────────────────────

function readJson(p) {
  if (!fs.existsSync(p)) {
    console.error(`❌ File not found: ${p}`);
    process.exit(1);
  }
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    console.error(`❌ Invalid JSON in: ${p}`);
    process.exit(1);
  }
}

function sha256slice(str) {
  return crypto.createHash("sha256").update(str).digest("hex").slice(0, 16);
}

let allPassed = true;

function fail(msg) {
  console.error("❌", msg);
  allPassed = false;
}

function pass(msg) {
  console.log("✅", msg);
}

function section(title) {
  console.log(`\n── ${title} ${"─".repeat(Math.max(0, 50 - title.length))}`);
}

// ── 0. Resolve installed Lens version (kept from original) ───────────────────

section("Installed Lens version");

if (!fs.existsSync(LENS_PKG)) {
  console.error("❌ Cannot verify DBs: @loomhq/lens package.json not found.");
  console.error("   Run: pnpm install");
  process.exit(1);
}

const installedLensVersion = readJson(LENS_PKG).version;

if (!installedLensVersion) {
  console.error("❌ Could not read version from @loomhq/lens package.json");
  process.exit(1);
}

pass(`@loomhq/lens installed: ${installedLensVersion}`);

// ── 1. mastery-db.json ───────────────────────────────────────────────────────

section("mastery-db.json");

const mastery = readJson(MASTERY_PATH);

// 1a. Required keys present
for (const key of [
  "_generated",
  "_lensVersion",
  "approvedClasses",
  "approvedTokens",
  "_breakpoints",
]) {
  if (mastery[key] === undefined)
    fail(`mastery-db.json — missing key: "${key}"`);
}

// 1b. Lens version matches installed (original check — catches stale DBs after upgrades)
if (mastery._lensVersion && mastery._lensVersion !== installedLensVersion) {
  fail(
    `mastery-db.json — _lensVersion mismatch:\n` +
      `     stored:    ${mastery._lensVersion}\n` +
      `     installed: ${installedLensVersion}\n` +
      `     Fix: pnpm generate:lint-dbs && git add ... && git commit`,
  );
} else if (mastery._lensVersion) {
  pass(
    `mastery-db.json — _lensVersion matches installed (${installedLensVersion})`,
  );
}

// 1c. Non-empty approvedClasses
if (
  !Array.isArray(mastery.approvedClasses) ||
  mastery.approvedClasses.length === 0
) {
  fail("mastery-db.json — approvedClasses is empty or not an array");
} else {
  pass(`mastery-db.json — ${mastery.approvedClasses.length} approved classes`);
}

// 1d. Content hash integrity (new check — catches manual edits or partial writes)
const masteryExpectedHash = sha256slice(
  JSON.stringify({
    lensVersion: mastery._lensVersion,
    approvedClasses: mastery.approvedClasses,
    approvedTokens: mastery.approvedTokens,
    breakpoints: mastery._breakpoints,
  }),
);

if (mastery._generated !== masteryExpectedHash) {
  fail(
    `mastery-db.json — content hash mismatch\n` +
      `     stored:   ${mastery._generated}\n` +
      `     computed: ${masteryExpectedHash}\n` +
      `     The file may have been edited manually or written by an older generator.\n` +
      `     Fix: pnpm generate:lint-dbs && git add ... && git commit`,
  );
} else {
  pass(`mastery-db.json — content hash verified (${masteryExpectedHash})`);
}

// ── 2. component-mastery-db.json ─────────────────────────────────────────────

section("component-mastery-db.json");

const compDb = readJson(COMP_PATH);

// 2a. Required keys present
for (const key of [
  "_generated",
  "_lensVersion",
  "components",
  "nesting",
  "responsive",
]) {
  if (compDb[key] === undefined)
    fail(`component-mastery-db.json — missing key: "${key}"`);
}

// 2b. Lens version matches installed
if (compDb._lensVersion && compDb._lensVersion !== installedLensVersion) {
  fail(
    `component-mastery-db.json — _lensVersion mismatch:\n` +
      `     stored:    ${compDb._lensVersion}\n` +
      `     installed: ${installedLensVersion}\n` +
      `     Fix: pnpm generate:lint-dbs && git add ... && git commit`,
  );
} else if (compDb._lensVersion) {
  pass(
    `component-mastery-db.json — _lensVersion matches installed (${installedLensVersion})`,
  );
}

// 2c. Non-empty components
const compCount = Object.keys(compDb.components || {}).length;
if (compCount === 0) {
  fail(
    "component-mastery-db.json — components object is empty or not an object",
  );
} else {
  pass(`component-mastery-db.json — ${compCount} components`);
}

// 2d. responsive.keys present (original check)
if (!compDb.responsive || !Array.isArray(compDb.responsive.keys)) {
  fail(
    "component-mastery-db.json — responsive.keys is missing or not an array",
  );
} else {
  pass(
    `component-mastery-db.json — responsive.keys: [${compDb.responsive.keys.join(", ")}]`,
  );
}

// 2e. Content hash integrity
const compExpectedHash = sha256slice(
  JSON.stringify({
    lensVersion: compDb._lensVersion,
    components: compDb.components,
    nesting: compDb.nesting,
    responsive: compDb.responsive,
  }),
);

if (compDb._generated !== compExpectedHash) {
  fail(
    `component-mastery-db.json — content hash mismatch\n` +
      `     stored:   ${compDb._generated}\n` +
      `     computed: ${compExpectedHash}\n` +
      `     Fix: pnpm generate:lint-dbs && git add ... && git commit`,
  );
} else {
  pass(
    `component-mastery-db.json — content hash verified (${compExpectedHash})`,
  );
}

// ── Result ────────────────────────────────────────────────────────────────────

console.log("\n" + "─".repeat(52));

if (!allPassed) {
  console.error("💥 Lint DB verification FAILED.");
  console.error("   Run: pnpm generate:lint-dbs");
  console.error(
    "   Then: git add eslint-plugin-lens-compliance/lib/*.json && git commit",
  );
  process.exit(1);
}

console.log("🎉 All lint DBs verified successfully.");
