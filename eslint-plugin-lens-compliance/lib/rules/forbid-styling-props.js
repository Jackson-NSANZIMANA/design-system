"use strict";
const fs = require("fs");
const path = require("path");

const whitelistPath = path.join(__dirname, "../mastery-db.json");
let approved = { approvedClasses: [] };

if (fs.existsSync(whitelistPath)) {
  approved = JSON.parse(fs.readFileSync(whitelistPath, "utf8"));
}

function isStringLiteral(node) {
  return node && (node.type === "Literal" || node.type === "StringLiteral");
}

module.exports = {
  meta: {
    type: "problem",
    messages: {
      noStyle: "❌ LENS VIOLATION: inline style={} is forbidden. Use Lens props or tokens. See .lens-knowledge-base/tokens/_tokens-index.md",
      badClassName: "❌ LENS VIOLATION: class '{{name}}' is not a Lens utility class. Use only Lens utilities from .lens-knowledge-base/tokens/css-utilities.md",
      dynamicClassName: "❌ LENS VIOLATION: className must be a static string of Lens utility classes (no dynamic expressions).",
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const attr = node.name && node.name.name;

        // Forbid style always
        if (attr === "style") {
          context.report({ node, messageId: "noStyle" });
          return;
        }

        if (attr !== "className") return;
        if (!node.value) return;

        // className="..."
        if (isStringLiteral(node.value)) {
          const raw = node.value.value || "";
          const classes = raw.split(/\s+/).filter(Boolean);

          for (const cls of classes) {
            if (!approved.approvedClasses.includes(cls)) {
              context.report({
                node,
                messageId: "badClassName",
                data: { name: cls },
              });
              return;
            }
          }
          return;
        }

        // className={...} dynamic -> forbidden (keeps system deterministic for agents)
        context.report({ node, messageId: "dynamicClassName" });
      },
    };
  },
};
