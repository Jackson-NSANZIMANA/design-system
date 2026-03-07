"use strict";
const fs = require('fs');
const path = require('path');

// Load the Mastery Database
const dbPath = path.join(__dirname, '../mastery-db.json');
let mastery = { approvedClasses: [] };
if (fs.existsSync(dbPath)) {
  mastery = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

module.exports = {
  meta: {
    type: "problem",
    messages: {
      invalidClass: "❌ LENS MASTERY ERROR: '{{name}}' is not a valid Lens utility. Consult .lens-knowledge-base/tokens/_tokens-index.md for the correct class name.",
      noStyleProp: "❌ LENS MASTERY ERROR: Inline 'style' props are forbidden. Use Lens component props or approved utility classes."
    }
  },
  create(context) {
    return {
      JSXAttribute(node) {
        // Check className
        if (node.name.name === "className" && node.value && node.value.type === "Literal") {
          const classes = node.value.value.split(" ");
          classes.forEach(cls => {
            if (cls && !mastery.approvedClasses.includes(cls)) {
              context.report({
                node,
                messageId: "invalidClass",
                data: { name: cls }
              });
            }
          });
        }
        // Check style prop
        if (node.name.name === "style") {
          context.report({ node, messageId: "noStyleProp" });
        }
      }
    };
  }
};
