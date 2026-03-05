#!/bin/bash
LENS_KB_DIR="$(pwd)/.lens-knowledge-base"

node -e '
const fs = require("fs");
const path = require("path");

const iconsDir = path.join(process.cwd(), "node_modules", "@loomhq", "lens", "dist", "esm", "icons");
let iconFiles = [];

if (fs.existsSync(iconsDir)) {
  iconFiles = fs.readdirSync(iconsDir)
    .filter(f => f.endsWith(".js"))
    .map(f => f.replace(".js", ""))
    .sort();
}

// Convert kebab-case filenames to PascalCase Svg names
function toPascalCase(str) {
  return "Svg" + str.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

const inventory = {
  totalIcons: iconFiles.length,
  importPattern: "import SvgName from \"@loomhq/lens/icons/icon-name\"",
  wrapperImport: "import { Icon } from \"@loomhq/lens\"",
  usagePattern: "<Icon icon={<SvgName />} />",
  buttonUsage: "<Button iconBefore={<SvgName />}>Label</Button>",
  icons: iconFiles.map(filename => ({
    filename: filename,
    importPath: "@loomhq/lens/icons/" + filename,
    componentName: toPascalCase(filename),
  })),
};

fs.writeFileSync(
  process.env.LENS_KB_DIR + "/icons-inventory.json",
  JSON.stringify(inventory, null, 2)
);

// Write markdown reference
let md = "# Lens Icon Inventory — " + iconFiles.length + " Icons\\n\\n";
md += "## Import Pattern\\n\\n";
md += "```tsx\\n";
md += "import { Icon } from \"@loomhq/lens\"\\n";
md += "import SvgBell from \"@loomhq/lens/icons/bell\"\\n";
md += "\\n";
md += "<Icon icon={<SvgBell />} />\\n";
md += "<Button iconBefore={<SvgBell />}>Notify</Button>\\n";
md += "```\\n\\n";
md += "## All Available Icons\\n\\n";
md += "| Import Path | Component Name |\\n";
md += "|-------------|---------------|\\n";
inventory.icons.forEach(i => {
  md += "| `@loomhq/lens/icons/" + i.filename + "` | `<" + i.componentName + " />` |\\n";
});

fs.writeFileSync(process.env.LENS_KB_DIR + "/icons-inventory.md", md);

console.log("Saved " + iconFiles.length + " icons to:");
console.log("  " + process.env.LENS_KB_DIR + "/icons-inventory.json");
console.log("  " + process.env.LENS_KB_DIR + "/icons-inventory.md");
'
