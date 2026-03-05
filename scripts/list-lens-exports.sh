#!/bin/bash
node -e '
const lens = require("@loomhq/lens");
const exports = Object.keys(lens).sort();

const components = exports.filter(e => /^[A-Z]/.test(e));
const hooks = exports.filter(e => /^use[A-Z]/.test(e));
const utilities = exports.filter(e => /^[a-z]/.test(e) && !/^use/.test(e));

console.log("=== ALL COMPONENTS (" + components.length + ") ===");
components.forEach(c => console.log("  " + c));

console.log("");
console.log("=== HOOKS (" + hooks.length + ") ===");
hooks.forEach(h => console.log("  " + h));

console.log("");
console.log("=== UTILITIES (first 40 of " + utilities.length + ") ===");
utilities.slice(0, 40).forEach(u => console.log("  " + u));

console.log("");
console.log("=== ICON SUBPATH CHECK ===");
const fs = require("fs");
const path = require("path");
const iconsDir = path.join(process.cwd(), "node_modules", "@loomhq", "lens", "dist", "esm", "icons");
if (fs.existsSync(iconsDir)) {
  const iconFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith(".js"));
  console.log("Icons in subpath: " + iconFiles.length);
  console.log("First 20:", iconFiles.slice(0, 20).map(f => f.replace(".js", "")));
} else {
  const cjsDir = path.join(process.cwd(), "node_modules", "@loomhq", "lens", "dist", "cjs", "icons");
  if (fs.existsSync(cjsDir)) {
    const iconFiles = fs.readdirSync(cjsDir).filter(f => f.endsWith(".js"));
    console.log("Icons in CJS subpath: " + iconFiles.length);
    console.log("First 20:", iconFiles.slice(0, 20).map(f => f.replace(".js", "")));
  } else {
    console.log("No icons subpath directory found");
  }
}
'
