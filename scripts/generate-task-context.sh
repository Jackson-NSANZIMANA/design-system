#!/bin/bash
# Dynamic Context Injection for Lens Design System
# Usage: ./scripts/generate-task-context.sh "description of UI task"
# Output: .lens-knowledge-base/TASK-CONTEXT.md

TASK="$1"
OUTPUT=".lens-knowledge-base/TASK-CONTEXT.md"

if [ -z "$TASK" ]; then
  echo "Usage: $0 'description of UI task'"
  exit 1
fi

echo "Generating focused context for: $TASK"

cat > "$OUTPUT" << EOF
# Task-Specific Context: $TASK
# Generated: $(date -u +"%Y-%m-%dT%H:%M:%SZ")
# Lens version: $(node -e "const p=require('./.lens-knowledge-base/package-meta.json'); console.log(p.version)")

## Your Task
Build: $TASK

## Design Philosophy (Read First)
$(cat .lens-knowledge-base/DESIGN-PHILOSOPHY.md 2>/dev/null | head -60)

## Core Rules (Non-Negotiable)
- Never use raw HTML: <button> <input> <a> <select> <textarea>
- Never use inline style={{}}
- Never use className with custom values
- Import ONLY from '@loomhq/lens'

## Available Components for This Task
$(cat .lens-knowledge-base/QUICK-REFERENCE.md)

## Component Index (Full List)
$(cat .lens-knowledge-base/COMPONENT-INDEX.md)

## Verification
After generating code, the developer will run:
  pnpm eslint 'src/**/*.{ts,tsx}' --max-warnings=0

Any errors will be fed back to you for correction.
EOF

echo "Context written to: $OUTPUT"
echo "Lines: $(wc -l < $OUTPUT)"
