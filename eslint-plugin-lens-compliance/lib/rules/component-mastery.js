"use strict";
const fs = require("fs");
const path = require("path");

// 1. Load the Mastery Database we just created
const dbPath = path.join(__dirname, "../component-mastery-db.json");
let db = { components: {}, nesting: {}, responsive: { keys: [] } };

if (fs.existsSync(dbPath)) {
  db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce Lens Design System constraints derived from Type Definitions",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      invalidPropValue:
        "❌ LENS MASTERY: Component '<{{comp}}>' prop '{{prop}}' cannot be '{{val}}'. Valid values: {{valid}}.",
      missingRequired:
        "❌ LENS MASTERY: Component '<{{comp}}>' is missing required prop: '{{prop}}' (A11y/Logic Requirement).",
      invalidNesting:
        "❌ LENS MASTERY: '<{{child}}>' must be a direct child of '<{{parent}}>'.",
      invalidResponsive:
        "❌ LENS MASTERY: Responsive object key '{{key}}' is invalid. Use: default, xsmall, small, medium, or large.",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        const compName = node.name.name;
        const config = db.components[compName];
        const nesting = db.nesting[compName];

        // --- CHECK 1: Hierarchy / Nesting ---
        if (nesting) {
          const ancestors = context
            .getSourceCode()
            .getAncestors(node)
            .reverse();
          const parent = ancestors.find((a) => a.type === "JSXElement");

          // If no parent found, or parent name doesn't match requirement
          if (
            !parent ||
            parent.openingElement.name.name !== nesting.mustBeInside
          ) {
            context.report({
              node,
              messageId: "invalidNesting",
              data: { child: compName, parent: nesting.mustBeInside },
            });
          }
        }

        // If we don't have rules for this component, stop here.
        if (!config) return;

        // --- CHECK 2: Required Props ---
        if (config.required) {
          config.required.forEach((req) => {
            const hasProp = node.attributes.some(
              (attr) => attr.name && attr.name.name === req,
            );
            if (!hasProp) {
              context.report({
                node,
                messageId: "missingRequired",
                data: { comp: compName, prop: req },
              });
            }
          });
        }

        // --- CHECK 3: Prop Values (The Enum Check) ---
        node.attributes.forEach((attr) => {
          if (!attr.name) return;
          const propName = attr.name.name;
          const propValidValues = config.props ? config.props[propName] : null;

          // A. Check Literal Values (e.g. size="small")
          // A. Check Literal Values (e.g. size="small")
          // Skip validation when all valid values are TypeScript type names.
          // Type names are not string literals — they describe the shape,
          // not the allowed values. Checking them produces false positives.
          const TYPE_PATTERN =
            /^[A-Z]|^(string|number|boolean|object|any|void|never|unknown|React\.)/;
          const isTypeOnly = propValidValues.every((v) => TYPE_PATTERN.test(v));

          if (
            !isTypeOnly &&
            propValidValues &&
            attr.value &&
            attr.value.type === "Literal"
          ) {
            if (!propValidValues.includes(attr.value.value)) {
              context.report({
                node: attr,
                messageId: "invalidPropValue",
                data: {
                  comp: compName,
                  prop: propName,
                  val: attr.value.value,
                  valid: propValidValues.join(", "),
                },
              });
            }
          }

          // B. Check Responsive Objects (e.g. padding={{ default: 'small', mobile: 'medium' }})
          // We catch hallucinations like "mobile", "tablet", "desktop" here.
          if (
            attr.value &&
            attr.value.type === "JSXExpressionContainer" &&
            attr.value.expression.type === "ObjectExpression"
          ) {
            attr.value.expression.properties.forEach((prop) => {
              const key = prop.key.name || prop.key.value;
              // Check if key is in our valid responsive keys list
              if (
                db.responsive &&
                db.responsive.keys &&
                !db.responsive.keys.includes(key)
              ) {
                context.report({
                  node: prop,
                  messageId: "invalidResponsive",
                  data: { key },
                });
              }
            });
          }
        });
      },
    };
  },
};
