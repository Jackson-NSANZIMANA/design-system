"use strict";

const MAPPING = {
  'div': 'Container',
  'span': 'Text (with isInline or htmlTag="span")',
  'p': 'Text (with htmlTag="p")',
  'h1': 'Text (size="heading-lg" htmlTag="h1")',
  'h2': 'Text (size="heading-md" htmlTag="h2")',
  'button': 'Button',
  'input': 'TextInput',
  'textarea': 'Textarea',
  'select': 'Select',
  'a': 'Link',
  'ul': 'List or Arrange (htmlTag="ul")',
  'li': 'ListRow or Arrange (htmlTag="li")'
};

module.exports = {
  meta: {
    type: "problem",
    docs: { description: "Force use of verified Lens primitives" },
    messages: {
      useLens: "❌ LENS VIOLATION: raw '<{{name}}>' detected. Use Lens '<{{replacement}}>' instead. See .lens-knowledge-base/COMPONENT-INDEX.md"
    }
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const name = node.name.name;
        if (MAPPING[name]) {
          context.report({
            node,
            messageId: "useLens",
            data: { name, replacement: MAPPING[name] }
          });
        }
      }
    };
  }
};
