"use strict";

module.exports = {
  rules: {
    "enforce-lens-primitives": require("./lib/rules/enforce-lens-primitives"),
    "forbid-styling-props": require("./lib/rules/forbid-styling-props"),
    "component-mastery": require("./lib/rules/component-mastery"),
    "no-eslint-disable": require("./lib/rules/no-eslint-disable")
  }
};
