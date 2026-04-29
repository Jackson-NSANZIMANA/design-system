# _GOVERNANCE.md — ContextOps (Human-only)

## Purpose
Prevent context rot, contradictions, and bloat regression.

## Canonical entrypoint
- .lens-knowledge-base/AGENT_PRIMER.md is canonical.
- Tool shims defer to it: .clinerules, .windsurfrules, CLAUDE.md.

## Hard caps (enforced by docs-verify CI)
- CLAUDE.md ≤ 80 lines
- AGENT_PRIMER.md ≤ 260 lines
- _ROUTER.md ≤ 160 lines

## Version authority
- Lens package version must match:
  - package.json dependency version
  - .lens-knowledge-base/package-meta.json (if present)
  - AGENT_PRIMER.md frontmatter lensVersion

## On Lens version bump (must do)
1) Run: npm run generate:mastery-db
2) Update exports-verified.json and MASTER-REFERENCE.md
3) Update COMPONENT-INDEX.md if components change
4) Update component docs under components/
5) Run docs-verify CI and fix any failing examples
6) Update lastValidated in AGENT_PRIMER.md and _ROUTER.md

## Known high-risk files (copy/paste bias)
- guides/showcase.md
- patterns/*.md
These must remain lint-safe and idiomatic.

## Change policy
- If adding rules: add to AGENT_PRIMER.md or the correct local doc, not CLAUDE.md.
- If adding examples: add to showcase.md or pattern files; they must pass docs-verify.