#!/bin/bash
LENS_KB_DIR="$(pwd)/.lens-knowledge-base"

node -e '
const fs = require("fs");
const lens = require("@loomhq/lens");
const allExports = Object.keys(lens).sort();

const verified = {
  _generated: new Date().toISOString(),
  _lensVersion: "12.18.0",
  _note: "Verified via require(@loomhq/lens) runtime inspection",

  layoutComponents: allExports.filter(e => 
    ["Align", "Arrange", "Backdrop", "Container", "Distribute", "Layout", "Spacer", "Split", "SplitSection"].includes(e)
  ),

  typographyComponents: allExports.filter(e => 
    ["Text"].includes(e)
  ),

  interactiveComponents: allExports.filter(e => 
    ["Button", "Checkbox", "ColorPicker", "Dropdown", "IconButton", "IconButtonBox", "Link", "Menu", "MenuItem", "Modal", "ModalCard", "Radio", "Select", "Switch", "Tab", "Tabs", "TextButton", "TextInput", "Textarea", "Typeahead"].includes(e)
  ),

  dataDisplayComponents: allExports.filter(e => 
    ["Avatar", "Icon", "Indicator", "List", "ListRow", "Logo", "Pill", "SkeletonContainer", "SkeletonText"].includes(e)
  ),

  feedbackComponents: allExports.filter(e => 
    ["ErrorContainer", "NotificationBar", "Popover", "Toast", "Tooltip", "TooltipBox"].includes(e)
  ),

  formComponents: allExports.filter(e => 
    ["FormField"].includes(e)
  ),

  loadingComponents: allExports.filter(e => 
    ["EllipsesLoader", "Loader", "LogoLoader", "WaveformLoader"].includes(e)
  ),

  utilityComponents: allExports.filter(e => 
    ["BaseStyles", "Media"].includes(e)
  ),

  illustrations: allExports.filter(e => /^Illus/.test(e)),

  hooks: allExports.filter(e => /^use[A-Z]/.test(e)),

  utilities: allExports.filter(e => /^[a-z]/.test(e)),

  allComponentNames: allExports.filter(e => /^[A-Z]/.test(e)),
};

fs.writeFileSync(
  process.env.LENS_KB_DIR + "/exports-verified.json",
  JSON.stringify(verified, null, 2)
);

// Summary
console.log("=== VERIFIED LENS EXPORTS ===");
console.log("Layout:      " + verified.layoutComponents.join(", "));
console.log("Typography:  " + verified.typographyComponents.join(", "));
console.log("Interactive: " + verified.interactiveComponents.join(", "));
console.log("Data:        " + verified.dataDisplayComponents.join(", "));
console.log("Feedback:    " + verified.feedbackComponents.join(", "));
console.log("Form:        " + verified.formComponents.join(", "));
console.log("Loading:     " + verified.loadingComponents.join(", "));
console.log("Utility:     " + verified.utilityComponents.join(", "));
console.log("Illustrations: " + verified.illustrations.length);
console.log("Hooks:       " + verified.hooks.join(", "));
console.log("Utilities:   " + verified.utilities.length + " functions");
'
