# _GOVERNANCE.md — ContextOps (Human only)

## Current State
Lens:       @loomhq/lens@12.14.0
Validated:  2026-04-29
Owner:      [name]

## Hard Caps (CI enforced)

| File | Max lines |
|------|-----------|
| CLAUDE.md | 25 |
| AGENT_PRIMER.md | 180 |
| _ROUTER.md | 80 |
| .clinerules | 40 |
| .windsurfrules | 40 |
| LENS_SESSION_CONTEXT.md | 10 |
| prompts/README.md | 30 |
| prompts/P*.md | uncapped — consumed by humans not agents |
Rule: if someone wants to add to CLAUDE.md or AGENT_PRIMER.md,
they must identify which specific file the content belongs in instead.
No net additions. Delegate to the right file.

## Single Source of Truth
AGENT_PRIMER.md is canonical.
Tool files defer to it and add tool-specific notes only.
Never maintain the same rule in more than one file.

## On Lens Version Bump

1. npm run generate:mastery-db
2. Update exports-verified.json and MASTER-REFERENCE.md
3. Update COMPONENT-INDEX.md (new/removed components)
4. Create/archive components/[Name].md as needed
5. Update token files if token names changed
6. Update _ROUTER.md trap table if APIs deprecated
7. Run: node scripts/docs-verify.mjs — fix all failures
8. Update lensVersion in AGENT_PRIMER.md and _ROUTER.md
9. Update this file (version + date + owner)

## File Ownership

| File | Reviewer |
|------|----------|
| AGENT_PRIMER.md | Team lead |
| CLAUDE.md | Team lead |
| _ROUTER.md | Any engineer |
| .clinerules .windsurfrules | Team lead |
| components/[Name].md | Feature engineer |
| guides/showcase.md | Engineer + designer |
| patterns/*.md | Engineer + designer |
| tokens/*.md | Script output + engineer |
| ../prompts/*.md | Team lead + Engineer |

## High-Risk Files (CI strict mode)
guides/showcase.md · patterns/forms.md · patterns/errors.md · QUICK-REFERENCE.md
These are copied by agents. Every code fence must pass docs-verify.

## Known Issues Resolved
AGENTS.md missing reference → fixed (.clinerules now points to AGENT_PRIMER.md)
windsurfrules className ban → fixed (corrected in .windsurfrules)
windsurfrules styles-full.md pointer → fixed (removed)
showcase deprecated sizes → fixed (body-sm etc)
showcase hasFullWidth → fixed (width="full")
showcase color="teal" → fixed (color="success")
CLAUDE.md 1,134 lines → fixed (25-line shim)
LENS_SESSION_CONTEXT.md duplicate → fixed (5-line pointer)
guides/introduction.md duplicate → redirect to root introduction.md
## Prompt System

Prompts live in .lens-knowledge-base/prompts/
Versioned with the knowledge base.

On Lens version bump:
  Review P2 — QUICK-REFERENCE.md setup code reference
  Review P4 — prohibition scan for deprecated APIs
  Review P5 — trap routing for removed patterns

Owner: Team lead
Trigger: Any Lens version bump