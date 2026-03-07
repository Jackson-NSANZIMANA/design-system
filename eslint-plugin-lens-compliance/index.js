/**
 * @fileoverview LENS DESIGN SYSTEM COMPLIANCE
 * Enforces the use of @loomhq/lens components over raw HTML and custom CSS.
 */
"use strict";

module.exports = {
  rules: {
    // Phase 2 Rules
    "enforce-lens-primitives": require("./lib/rules/enforce-lens-primitives"),
    "forbid-styling-props": require("./lib/rules/forbid-styling-props"),
    
    // NEW Phase 2 Mastery Rule
    "component-mastery": require("./lib/rules/component-mastery")
  },
};
