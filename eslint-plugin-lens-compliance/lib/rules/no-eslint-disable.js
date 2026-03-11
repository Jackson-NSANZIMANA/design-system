"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: { description: "Forbid eslint-disable comments to ensure strict Lens compliance." },
    messages: {
      noCheating: "🛑 SYSTEM BOUNDARY: You cannot use 'eslint-disable' to bypass Lens rules. Please fix the underlying component code to match the Lens Design System."
    }
  },
  create(context) {
    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();
        
        comments.forEach(comment => {
          if (comment.value.includes("eslint-disable") && comment.value.includes("lens-compliance")) {
            context.report({
              loc: comment.loc,
              messageId: "noCheating"
            });
          }
        });
      }
    };
  }
};
