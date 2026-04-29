// scripts/generate-mastery-db.js
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// ─── 1. LOAD LENS FROM CJS ────────────────────────────────────────────────────

const LENS_CJS = path.resolve(
  __dirname,
  "../node_modules/@loomhq/lens/dist/cjs/index.js",
);

if (!fs.existsSync(LENS_CJS)) {
  console.error("❌ Cannot find Lens CJS build at:", LENS_CJS);
  process.exit(1);
}

const lens = require(LENS_CJS);

// ─── 2. ALL RULE ARRAYS FROM LENS ────────────────────────────────────────────

const RULE_ARRAYS = [
  "colorRules",
  "backgroundColorRules",
  "textSizeRules",
  "fontWeightRules",
  "textVariantRules",
  "textAlignmentRules",
  "shadowRules",
  "radiiRules",
  "marginRules",
  "marginCrossRules",
  "paddingRules",
  "paddingCrossRules",
  "borderRules",
  "displayRules",
  "flexWrapRules",
  "flexDirectionRules",
  "flexItemRules",
  "JustifyContentRules",
  "growRules",
  "shrinkRules",
  "alignSelfRules",
  "overflowRules",
  "positionRules",
  "sidePositionRules",
  "widthRules",
  "minWidthRules",
  "heightRules",
  "ellipsisRules",
  "accessibilityRules",
];

// ─── 3. EXTRACT BASE CLASS NAMES ─────────────────────────────────────────────

function extractClassName(rule) {
  if (
    rule.modifier !== undefined &&
    rule.modifier !== null &&
    rule.modifier !== ""
  ) {
    return `${rule.selector}:${rule.modifier}`;
  }
  return rule.selector;
}

const baseClasses = [];
const missingArrays = [];

for (const arrayName of RULE_ARRAYS) {
  const arr = lens[arrayName];
  if (!Array.isArray(arr)) {
    missingArrays.push(arrayName);
    continue;
  }
  for (const rule of arr) {
    const className = extractClassName(rule);
    if (className && !baseClasses.includes(className))
      baseClasses.push(className);
  }
}

// ─── 4. GENERATE RESPONSIVE VARIANTS ─────────────────────────────────────────

const { shortBreakpoints } = lens;
if (!shortBreakpoints || typeof shortBreakpoints !== "object") {
  console.error("❌ shortBreakpoints not found in Lens export");
  process.exit(1);
}

const breakpointPrefixes = Object.keys(shortBreakpoints);
const responsiveClasses = [];
for (const cls of baseClasses)
  for (const prefix of breakpointPrefixes)
    responsiveClasses.push(`${prefix}-${cls}`);

// ─── 5. COMBINE AND DEDUPLICATE ───────────────────────────────────────────────

const allClasses = [...new Set([...baseClasses, ...responsiveClasses])];

// ─── 6. VALIDATION ────────────────────────────────────────────────────────────

const REQUIRED_BASE = [
  "flex",
  "block",
  "relative",
  "absolute",
  "none",
  "inline",
  "p:medium",
  "m:small",
  "c:primary",
  "bgc:background",
  "text:body-md",
  "text:heading-lg",
  "weight:bold",
  "shadow:medium",
  "border",
  "items:center",
  "justify:spaceBetween",
  "mr:small",
  "ml:auto",
  "mt:medium",
  "mb:large",
  "top:xsmall",
  "overflow:hidden",
  "grow:1",
  "shrink:0",
  "radius:medium",
  "ellipsis",
  "srOnly",
  "flexWrap",
];
const REQUIRED_RESPONSIVE = [
  "sm-flex",
  "md-block",
  "lg-none",
  "xs-c:primary",
  "sm-p:medium",
  "md-text:body-md",
];

const missing = [...REQUIRED_BASE, ...REQUIRED_RESPONSIVE].filter(
  (cls) => !allClasses.includes(cls),
);

// ─── 7. REPORT ────────────────────────────────────────────────────────────────

console.log("\n═══════════════════════════════════════════════════");
console.log("  LENS MASTERY-DB GENERATION REPORT");
console.log("═══════════════════════════════════════════════════");

if (missingArrays.length > 0) {
  console.warn("\n⚠️  Rule arrays not found in Lens export:");
  missingArrays.forEach((n) => console.warn("   -", n));
}

console.log(`\n📊 Base classes extracted:      ${baseClasses.length}`);
console.log(`📊 Breakpoint prefixes:         ${breakpointPrefixes.join(", ")}`);
console.log(`📊 Responsive variants:         ${responsiveClasses.length}`);
console.log(`📊 Total approved classes:      ${allClasses.length}`);

if (missing.length > 0) {
  console.error("\n❌ VALIDATION FAILED — required classes missing:");
  missing.forEach((cls) => console.error("   -", cls));
  console.error("\nThe mastery-db.json was NOT updated.");
  process.exit(1);
}

console.log("\n✅ All validation checks passed");

// ─── 8. READ OLD DB FOR REGRESSION CHECK ─────────────────────────────────────

const DB_PATH = path.resolve(
  __dirname,
  "../eslint-plugin-lens-compliance/lib/mastery-db.json",
);

let oldClasses = [];
if (fs.existsSync(DB_PATH)) {
  try {
    const oldDb = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    oldClasses = oldDb.approvedClasses || [];
    const removed = oldClasses.filter((cls) => !allClasses.includes(cls));
    if (removed.length > 0) {
      console.warn(
        `\n⚠️  ${removed.length} classes from old db not in new db:`,
      );
      removed.slice(0, 20).forEach((cls) => console.warn("   -", cls));
      if (removed.length > 20)
        console.warn(`   ... and ${removed.length - 20} more`);
      console.warn("   These will no longer be approved after this update.");
    } else {
      console.log("✅ No regression — all old classes preserved in new db");
    }
    console.log(`\n📊 Old db class count: ${oldClasses.length}`);
    console.log(`📊 New db class count: ${allClasses.length}`);
    console.log(
      `📊 Net change:         +${allClasses.length - oldClasses.length}`,
    );
  } catch (e) {
    console.warn("⚠️  Could not read old mastery-db.json:", e.message);
  }
} else {
  console.log("ℹ️  No existing mastery-db.json found — creating fresh");
}

// ─── 9. LENS VERSION ──────────────────────────────────────────────────────────

let lensVersion = "unknown";
try {
  const pkgPath = path.resolve(
    __dirname,
    "../node_modules/@loomhq/lens/package.json",
  );
  lensVersion =
    JSON.parse(fs.readFileSync(pkgPath, "utf8")).version || "unknown";
} catch (e) {
  console.warn("⚠️  Could not read Lens version:", e.message);
}

// ─── 10. CONTENT HASH  ───────────────────────────────────────────────────────
// Hash is derived ONLY from the data that matters (classes + version).
// Timestamps are then set to a fixed epoch so the file is byte-for-byte
// identical on every CI run as long as the data hasn't changed.

const approvedTokens = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
  "primary",
  "body",
  "danger",
];

const dataToHash = JSON.stringify({
  lensVersion,
  approvedClasses: allClasses,
  approvedTokens,
  breakpoints: shortBreakpoints,
});

const contentHash = crypto
  .createHash("sha256")
  .update(dataToHash)
  .digest("hex")
  .slice(0, 16);

// ─── 11. WRITE OUTPUT ─────────────────────────────────────────────────────────
// _generated is stable: it only changes when the content actually changes.

const output = {
  _generated: contentHash,
  _lensVersion: lensVersion,
  _note: [
    "Generated by scripts/generate-mastery-db.js",
    "Source: @loomhq/lens CJS rule arrays (colorRules, marginRules, etc.)",
    "Each rule's selector+modifier combination = one approved class.",
    "Responsive variants generated for all 4 breakpoints: xs, sm, md, lg.",
    "DO NOT edit manually — run 'pnpm generate:mastery-db' to regenerate.",
  ].join(" | "),
  _totalBaseClasses: baseClasses.length,
  _totalResponsiveClasses: responsiveClasses.length,
  _totalApprovedClasses: allClasses.length,
  _breakpoints: shortBreakpoints,
  approvedClasses: allClasses,
  approvedTokens,
  syncedAt: contentHash, // same hash — stays stable
};

const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2), "utf8");

console.log(`\n✅ mastery-db.json written  (hash: ${contentHash})`);
console.log("  ", DB_PATH);
console.log("\n═══════════════════════════════════════════════════\n");
