"use strict";

/**
 * Lens docs show raw wrapper HTML (e.g. <div> inside ListRow, Dropdown triggers).
 * We forbid only HTML elements that Lens replaces as interactive primitives.
 */
const FORBIDDEN_HTML = {
  button: "Button",
  input: "TextInput",
  textarea: "Textarea",
  select: "Select",
  a: "Link",
};

module.exports = {
  meta: {
    type: "problem",
    messages: {
      forbidden: "❌ LENS VIOLATION: raw '<{{name}}>' detected. Use Lens '<{{replacement}}>' instead. See .lens-knowledge-base/COMPONENT-INDEX.md",
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const name = node.name.type === "JSXIdentifier" ? node.name.name : null;
        if (!name) return;

        const replacement = FORBIDDEN_HTML[name];
        if (replacement) {
          context.report({
            node,
            messageId: "forbidden",
            data: { name, replacement },
          });
        }
      },
    };
  },
};
