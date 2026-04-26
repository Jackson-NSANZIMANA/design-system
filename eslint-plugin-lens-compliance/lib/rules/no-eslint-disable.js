"use strict";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Forbid all eslint-disable comments. Fix the code or escalate via // TODO: [LENS-GAP]."
    },
    messages: {
      noCheating: "🛑 SYSTEM BOUNDARY: eslint-disable is forbidden. Fix the code to comply, or mark with // TODO: [LENS-GAP] <description> if Lens lacks the capability."
    }
  },
  create(context) {
    return {
      Program() {
        const sourceCode = context.sourceCode ?? context.getSourceCode();
        const comments = sourceCode.getAllComments();
        comments.forEach(comment => {
          if (/eslint-disable/.test(comment.value)) {
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
