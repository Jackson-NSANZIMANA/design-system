---
file: LENS_SESSION_CONTEXT.md
layer: SESSION-INIT
purpose: Initialize agent with routing protocol before any task
load-when: Start of every new session or task
do-not-load-when: Never — this is always the entry point
contains: Routing table only. No implementation details.
---

# Lens Session Initialization

You are working on a Lens Design System codebase.
Package: @loomhq/lens@12.14.0

## Your First Action Before Any Task

Identify your task type. Load only what that task needs.

| If you need to...                    | Load this file FIRST              | Then if needed           |
|--------------------------------------|-----------------------------------|--------------------------|
| Find a component for a UI element    | COMPONENT-INDEX.md                | components/<Name>.md     |
| Recall syntax / API patterns         | QUICK-REFERENCE.md                | components/<Name>.md     |
| Understand a styling decision        | tokens/_tokens-index.md           | specific token file      |
| Understand what this project allows  | CLAUDE.md (Rules section)         | introduction.md          |
| Understand why Lens works this way   | introduction.md                   | —                        |
| Check if a component accepts a ref   | MASTER-REFERENCE.md               | components/<Name>.md     |
| Implement a complete feature         | QUICK-REFERENCE.md → COMPONENT-INDEX.md → components/<Name>.md |

## Non-Negotiable Before Writing Any Code

1. Have you identified which Lens component handles this?
   → If not: read COMPONENT-INDEX.md now
2. Have you checked css-utilities.md for any className you plan to write?
   → If not: read it now. Every className must exist in that file.
3. Are you about to use style={{}}?
   → Stop. This is always forbidden. Find the Lens prop or token.
4. Are you about to use a hyphen-separated class?
   → Stop. That is Tailwind. Find the Lens colon-separated equivalent.

## Files You Must Never Read For Implementation

- reference/styles-full.md — 1746 lines, destroys context budget
- reference/components-full.md — 7000 lines, destroys context budget

## Self-Correction Protocol

If you generate code and receive a linter error:
1. The linter is correct. You are not.
2. Read the specific component file: components/<Name>.md
3. Read css-utilities.md if the error is className-related
4. Fix the implementation. Never disable the linter.

→ Full rules: CLAUDE.md
→ Design philosophy: introduction.md
→ What exists: COMPONENT-INDEX.md
→ Syntax patterns: QUICK-REFERENCE.md
→ Ref support: MASTER-REFERENCE.md