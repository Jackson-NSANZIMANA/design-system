#!/bin/bash
set -e

# If you intentionally want to edit enforcement/rules, do:
#   ALLOW_ENFORCEMENT_EDIT=1 git commit -m "chore(enforcement): ..."

if [ "$ALLOW_ENFORCEMENT_EDIT" = "1" ]; then
  echo "⚠️  Enforcement edits allowed (ALLOW_ENFORCEMENT_EDIT=1)."
  exit 0
fi

PROTECTED_REGEX='^(eslint\.config\.(mjs|js|cjs)|eslint-plugin-lens-compliance/|\.husky/|\.cursor/rules/|CLAUDE\.md|AGENTS\.md|\.windsurfrules|\.clinerules|\.github/workflows/|scripts/guard-protected-paths\.sh)$'

CHANGED=$(git diff --cached --name-only)

if echo "$CHANGED" | grep -E "$PROTECTED_REGEX" >/dev/null 2>&1; then
  echo ""
  echo "❌ PROTECTED PATHS: You are modifying enforcement/rules files."
  echo "Fix your code instead of weakening enforcement."
  echo ""
  echo "Changed protected files:"
  echo "$CHANGED" | grep -E "$PROTECTED_REGEX" || true
  echo ""
  echo "If intentional, run:"
  echo "  ALLOW_ENFORCEMENT_EDIT=1 git commit -m \"chore(enforcement): ...\""
  echo ""
  exit 1
fi

exit 0
