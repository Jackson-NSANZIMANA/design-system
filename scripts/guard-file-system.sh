#!/bin/sh
set -e

echo "🔍 Lens file-system guard..."

# 1) Tailwind configs are forbidden
if ls tailwind.config.* 1>/dev/null 2>&1; then
  echo "❌ LENS VIOLATION: tailwind.config.* detected."
  exit 1
fi

# 2) CSS/SASS/LESS forbidden inside src/
FORBIDDEN=$(find src -type f \( -name "*.css" -o -name "*.scss" -o -name "*.sass" -o -name "*.less" -o -name "*.styl" \) 2>/dev/null || true)
if [ -n "$FORBIDDEN" ]; then
  echo "❌ LENS VIOLATION: styling files detected in src/:"
  echo "$FORBIDDEN"
  exit 1
fi

# 3) styled file patterns forbidden
STYLED=$(find src -type f \( -name "*.styled.ts" -o -name "*.styled.tsx" -o -name "*.styles.ts" -o -name "*.styles.tsx" \) 2>/dev/null || true)
if [ -n "$STYLED" ]; then
  echo "❌ LENS VIOLATION: styled* files detected:"
  echo "$STYLED"
  exit 1
fi

echo "✅ File-system guard passed."
