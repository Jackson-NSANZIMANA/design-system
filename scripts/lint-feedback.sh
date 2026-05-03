#!/bin/bash
# Lens Lint Feedback Loop
# Usage: ./scripts/lint-feedback.sh src/auth/
# Output: Structured correction context for AI

TARGET="${1:-src}"
echo "Running Lens compliance check on: $TARGET"
echo ""

# Capture output and exit code separately
LINT_JSON=$(pnpm eslint "$TARGET/**/*.{ts,tsx}" --format=json 2>/dev/null)
ESLINT_EXIT=$?

# Strip any non-JSON lines (pnpm warnings etc)
LINT_JSON=$(echo "$LINT_JSON" | sed '/^\[/,$ !d')

# If output is empty the linter itself crashed
if [ -z "$LINT_JSON" ]; then
  echo "❌ LINTER CRASHED — no JSON output produced."
  echo "Run manually to see the error:"
  echo "  pnpm eslint \"$TARGET/**/*.{ts,tsx}\""
  exit 1
fi

ERROR_COUNT=$(echo "$LINT_JSON" | node -e "
const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(chunks.join(''));
    const errors = data.reduce((sum, f) => sum + f.errorCount, 0);
    console.log(errors);
  } catch(e) {
    console.log('PARSE_ERROR');
  }
});
")

if [ "$ERROR_COUNT" = "PARSE_ERROR" ]; then
  echo "❌ LINTER OUTPUT WAS NOT VALID JSON."
  echo "Run manually: pnpm eslint \"$TARGET/**/*.{ts,tsx}\""
  exit 1
fi

if [ "$ERROR_COUNT" = "0" ]; then
  echo "✅ PERFECT — Zero violations. Code is Lens-compliant."
  exit 0
fi

echo "❌ Found $ERROR_COUNT violation(s). Feed this to the AI:"
echo ""
echo "================================================"
echo "CORRECTION CONTEXT"
echo "================================================"
echo ""

echo "$LINT_JSON" | node -e "
const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  const data = JSON.parse(chunks.join(''));
  data.forEach(file => {
    if (file.errorCount === 0) return;
    const rel = file.filePath.replace(process.cwd() + '/', '');
    console.log('FILE: ' + rel);
    file.messages.forEach(msg => {
      console.log('  Line ' + msg.line + ': ' + msg.message);
      console.log('  Rule: ' + msg.ruleId);
      console.log('');
    });
  });
});
"

echo "================================================"
echo "RULES REMINDER:"
echo "- Replace <button> with <Button variant='primary|neutral|...'>"
echo "- Replace <input> with <TextInput>"
echo "- Replace <a href> with <Link href>"
echo "- Remove style={{}} — use Lens props instead"
echo "- Remove custom className — use Lens utility classes only"
echo "================================================"