# CLAUDE.md — Lens Design System
# Canonical rule file for all AI tools.
# @loomhq/lens@12.14.0
# This file: ~80 lines. Behavior only. Never grows.
# All knowledge lives in .lens-knowledge-base/

---

## What You Are Building In

This project solves a specific problem:
AI assistants default to generic React patterns.
This codebase forces Lens-first thinking instead.

Lens (@loomhq/lens) is the only UI language here.
Not a preference. Not a guideline. The only option.
Every component, every style, every token: Lens.

---

## Load This Before Writing Any UI Code

**Step 1 — Get the mental model:**
.lens-knowledge-base/guides/LENS_THINKING.md

**Step 2 — Find your component:**
.lens-knowledge-base/COMPONENT-INDEX.md

**Step 3 — Verify the API:**
.lens-knowledge-base/components/[ComponentName].md

**Step 4 — Declare what you read:**
Every response with UI code must include:
Sources consulted: [file paths]
Read nothing? Say so and ask before proceeding.

---

## The Linter Is the Ground Truth

ESLint validates className values against
1,935 classes derived directly from Lens source.

Linter errors: you are wrong, linter is correct.
Fix: read components/[Name].md and fix the code.
Never: eslint-disable, @ts-ignore, modify mastery-db.json

---

## Three Things That Are Always Wrong

### 1. Inline Styles
style={{ anything }}                     ✗ always
style={{ color: 'var(--lns-color-x)' }} ✗ always
→ Use component props or CSS modules with var(--lns-*)

### 2. Tailwind Classes  
Tailwind: hyphens   → flex-col, items-center, p-4  ✗
Lens:     colons    → flexDirection:column, items:center, p:medium ✓
Any class not in tokens/css-utilities.md            ✗

### 3. Raw HTML for UI
<button> <input> <select> <textarea> <a>            ✗
→ Button, TextInput, Select, Textarea, Link         ✓
Raw <div> and <span>: allowed as structural wrappers only.

---

## When Lens Cannot Do It

1. Compose from primitives: Container, Split, Arrange, Text, Spacer
2. Style wrappers with: tokens/css-utilities.md classes
3. Custom CSS: CSS modules only, using var(--lns-*) for all values
4. Mark gaps: // TODO: [LENS-GAP] <describe precisely>
Never invent values outside the Lens token system.

---

## Files Never to Read
reference/components-full.md   7,000 lines — never
reference/styles-full.md       1,746 lines — never

---

## Tool Files
.clinerules     — Cline-specific notes, defers here
.windsurfrules  — Windsurf-specific notes, defers here
Full navigation: .lens-knowledge-base/_ROUTER.md