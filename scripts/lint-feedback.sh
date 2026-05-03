#!/bin/bash
# Lens Lint Feedback Loop
# Usage: ./scripts/lint-feedback.sh src/auth/
# Output: Structured correction context for AI

TARGET="${1:-src}"

echo "Running Lens compliance check on: $TARGET"
echo ""

LINT_OUTPUT=$(pnpm eslint "$TARGET/**/*.{ts,tsx}" --format=json 2>/dev/null | grep -v "^WARN" | grep -v "^$")

ERROR_COUNT=$(echo "$LINT_OUTPUT" | node -e "
const data = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
const errors = data.reduce((sum, f) => sum + f.errorCount, 0);
console.log(errors);
")

if [ "$ERROR_COUNT" = "0" ]; then
  echo "✅ PERFECT — Zero violations. Code is Lens-compliant."
  exit 0
fi

echo "❌ Found $ERROR_COUNT violation(s). Feed this correction context to the AI:"
echo ""
echo "================================================"
echo "CORRECTION CONTEXT — Paste this back to the AI:"
echo "================================================"
echo ""
echo "Your generated code has $ERROR_COUNT Lens compliance violations."
echo "Fix each one before proceeding:"
echo ""

echo "$LINT_OUTPUT" | node -e "
const data = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
data.forEach(file => {
  if (file.errorCount === 0) return;
  const relativePath = file.filePath.replace(process.cwd() + '/', '');
  console.log('FILE: ' + relativePath);
  file.messages.forEach(msg => {
    console.log('  Line ' + msg.line + ': ' + msg.message);
    console.log('  Rule: ' + msg.ruleId);
    console.log('');
  });
});
"

echo "================================================"
echo "RULES REMINDER:"
echo "- Replace <button> with <Button variant='primary|neutral|...'>"
echo "- Replace <input> with <TextInput>"
echo "- Replace <a href> with <Link href>"
echo "- Remove all style={{}} — use Lens props instead"
echo "- Remove all custom className — use Lens utility classes only"
echo "================================================"
