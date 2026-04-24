// scripts/generate-mastery-db.js
"use strict";

const fs = require("fs");
const path = require("path");

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
// Every array that contains CSS utility rule objects.
// Each object has { selector, modifier?, declarations[] }

const RULE_ARRAYS = [
  // Colors
  "colorRules",
  "backgroundColorRules",
  // Typography
  "textSizeRules",
  "fontWeightRules",
  "textVariantRules",
  "textAlignmentRules",
  // Shape & elevation
  "shadowRules",
  "radiiRules",
  // Spacing
  "marginRules",
  "marginCrossRules",
  "paddingRules",
  "paddingCrossRules",
  // Borders
  "borderRules",
  // Display
  "displayRules",
  // Flex
  "flexWrapRules",
  "flexDirectionRules",
  "flexItemRules",
  "JustifyContentRules",
  "growRules",
  "shrinkRules",
  "alignSelfRules",
  // Overflow
  "overflowRules",
  // Position
  "positionRules",
  "sidePositionRules",
  // Sizing
  "widthRules",
  "minWidthRules",
  "heightRules",
  // Utility
  "ellipsisRules",
  "accessibilityRules",
];

// ─── 3. EXTRACT BASE CLASS NAMES ─────────────────────────────────────────────

function extractClassName(rule) {
  // Pattern A: has modifier → "selector:modifier"
  if (
    rule.modifier !== undefined &&
    rule.modifier !== null &&
    rule.modifier !== ""
  ) {
    return `${rule.selector}:${rule.modifier}`;
  }
  // Pattern B: no modifier → bare "selector"
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
    if (className && !baseClasses.includes(className)) {
      baseClasses.push(className);
    }
  }
}

// ─── 4. GENERATE RESPONSIVE VARIANTS ─────────────────────────────────────────

const { shortBreakpoints } = lens;

if (!shortBreakpoints || typeof shortBreakpoints !== "object") {
  console.error("❌ shortBreakpoints not found in Lens export");
  process.exit(1);
}

const breakpointPrefixes = Object.keys(shortBreakpoints); // ["xs", "sm", "md", "lg"]

const responsiveClasses = [];

for (const cls of baseClasses) {
  for (const prefix of breakpointPrefixes) {
    responsiveClasses.push(`${prefix}-${cls}`);
  }
}

// ─── 5. COMBINE AND DEDUPLICATE ───────────────────────────────────────────────

const allClasses = [...new Set([...baseClasses, ...responsiveClasses])];

// ─── 6. VALIDATION ────────────────────────────────────────────────────────────

const REQUIRED_BASE = [
  // Must exist — if any are missing the extraction logic is broken
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

const allRequired = [...REQUIRED_BASE, ...REQUIRED_RESPONSIVE];
const missing = allRequired.filter((cls) => !allClasses.includes(cls));

// ─── 7. REPORT ────────────────────────────────────────────────────────────────

console.log("\n═══════════════════════════════════════════════════");
console.log("  LENS MASTERY-DB GENERATION REPORT");
console.log("═══════════════════════════════════════════════════");

if (missingArrays.length > 0) {
  console.warn("\n⚠️  Rule arrays not found in Lens export:");
  missingArrays.forEach((name) => console.warn("   -", name));
}

console.log(`\n📊 Base classes extracted:      ${baseClasses.length}`);
console.log(`📊 Breakpoint prefixes:         ${breakpointPrefixes.join(", ")}`);
console.log(`📊 Responsive variants:         ${responsiveClasses.length}`);
console.log(`📊 Total approved classes:      ${allClasses.length}`);

if (missing.length > 0) {
  console.error("\n❌ VALIDATION FAILED — required classes missing:");
  missing.forEach((cls) => console.error("   -", cls));
  console.error("\nThe mastery-db.json was NOT updated.");
  console.error("Fix the extraction logic and try again.");
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

    const removedClasses = oldClasses.filter(
      (cls) => !allClasses.includes(cls),
    );

    if (removedClasses.length > 0) {
      console.warn(
        `\n⚠️  ${removedClasses.length} classes from old db not in new db:`,
      );
      removedClasses.slice(0, 20).forEach((cls) => console.warn("   -", cls));
      if (removedClasses.length > 20) {
        console.warn(`   ... and ${removedClasses.length - 20} more`);
      }
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

// ─── 9. READ LENS VERSION ─────────────────────────────────────────────────────

let lensVersion = "unknown";
try {
  const pkgPath = path.resolve(
    __dirname,
    "../node_modules/@loomhq/lens/package.json",
  );
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  lensVersion = pkg.version;
} catch (e) {
  console.warn("⚠️  Could not read Lens version:", e.message);
}

// ─── 10. WRITE OUTPUT ─────────────────────────────────────────────────────────

const output = {
  _generated: new Date().toISOString(),
  _lensVersion: lensVersion,
  _note: [
    "Generated by scripts/generate-mastery-db.js",
    "Source: @loomhq/lens CJS rule arrays (colorRules, marginRules, etc.)",
    "Each rule's selector+modifier combination = one approved class.",
    "Responsive variants generated for all 4 breakpoints: xs, sm, md, lg.",
    "DO NOT edit manually — run 'node scripts/generate-mastery-db.js' to regenerate.",
  ].join(" | "),
  _totalBaseClasses: baseClasses.length,
  _totalResponsiveClasses: responsiveClasses.length,
  _totalApprovedClasses: allClasses.length,
  _breakpoints: shortBreakpoints,
  approvedClasses: allClasses,
  approvedTokens: [
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "primary",
    "body",
    "danger",
  ],
  syncedAt: new Date().toISOString(),
};

// Ensure output directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

fs.writeFileSync(DB_PATH, JSON.stringify(output, null, 2), "utf8");

console.log("\n✅ mastery-db.json written to:");
console.log("  ", DB_PATH);
console.log("\n═══════════════════════════════════════════════════\n");
