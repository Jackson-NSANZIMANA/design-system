#!/bin/bash
LENS_KB_DIR="$(pwd)/.lens-knowledge-base"

node -e '
const fs = require("fs");
const path = require("path");

const iconsDir = path.join(process.cwd(), "node_modules", "@loomhq", "lens", "dist", "esm", "icons");
const iconFiles = fs.readdirSync(iconsDir)
  .filter(f => f.endsWith(".js"))
  .map(f => f.replace(".js", ""))
  .sort();

function toPascalCase(str) {
  return "Svg" + str.split("-").map(function(p) {
    return p.charAt(0).toUpperCase() + p.slice(1);
  }).join("");
}

var md = "# Lens Icon Inventory — " + iconFiles.length + " Icons\n\n";
md += "## Import Pattern\n\n";
md += "```tsx\n";
md += "import { Icon } from \"@loomhq/lens\"\n";
md += "import SvgBell from \"@loomhq/lens/icons/bell\"\n";
md += "\n";
md += "<Icon icon={<SvgBell />} />\n";
md += "<Button iconBefore={<SvgBell />}>Notify</Button>\n";
md += "```\n\n";
md += "## All Available Icons\n\n";
md += "| Import Path | Component Name |\n";
md += "|-------------|---------------|\n";
iconFiles.forEach(function(f) {
  md += "| @loomhq/lens/icons/" + f + " | " + toPascalCase(f) + " |\n";
});

var outPath = process.argv[1] + "/icons-inventory.md";
fs.writeFileSync(outPath, md);
console.log("Written " + iconFiles.length + " icons to " + outPath);
console.log("File size: " + md.length + " chars, " + md.split("\n").length + " lines");
' "$LENS_KB_DIR"
