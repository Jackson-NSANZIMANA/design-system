
---

### FILE 7: _GOVERNANCE.md — Human ContextOps

```markdown
# _GOVERNANCE.md — ContextOps Protocol
# NOT agent-facing. Human maintainers only.
# This file prevents the system from becoming stale.
# This file prevents CLAUDE.md from growing back to 1,134 lines.

---

## Current State
Lens version:        @loomhq/lens@12.14.0
System validated:    [DATE]
Validated by:        [NAME]
Total context lines: ~450 (down from 1,985)
CLAUDE.md lines:     ~80 (enforced maximum)

---

## The One Rule That Protects This System

CLAUDE.md must never exceed 80 lines.

If someone wants to add content to CLAUDE.md:
  → Identify which file that content belongs in
  → Add it there instead
  → Update _ROUTER.md if navigation changes

No net additions to CLAUDE.md. Ever.
This prevents the 1,134-line regression.

---

## When Lens Upgrades — Run This Checklist

□ Run: npm run generate:mastery-db
  Updates: eslint-plugin-lens-compliance/lib/mastery-db.json
  Validates: approved classes match new version

□ Check: New components added?
  → Add to COMPONENT-INDEX.md
  → Create components/[NewName].md
  → Add to QUICK-REFERENCE.md if commonly used
  → Add to LENS_THINKING.md decision trees if it
     changes how agents should think about that category

□ Check: API changes to existing components?
  → Update components/[Name].md
  → Update QUICK-REFERENCE.md if pattern changed
  → Update showcase.md if example is affected
  → Update LENS_THINKING.md decision trees if needed

□ Check: New or changed token names?
  → Update relevant tokens/[file].md
  → Update _ROUTER.md trap table
  → Update LENS_THINKING.md color/typography trees
  → Update showcase.md if examples use old names

□ Check: Deprecated anything?
  → Add to trap table in _ROUTER.md
  → Update LENS_THINKING.md trees
  → Fix any showcase.md examples using deprecated patterns

□ Validate: Run linter against all src/ code
  New errors after version bump = breaking changes

□ Update: this file
  → Lens version number
  → Validation date and name

---

## File Ownership and Review Requirements

| File | Change requires | Reviewer |
|------|----------------|----------|
| CLAUDE.md | PR + team lead review | Team lead |
| LENS_THINKING.md | PR + designer review | Senior eng + designer |
| _ROUTER.md | PR | Any engineer |
| showcase.md | PR + visual review | Engineer + designer |
| components/[Name].md | PR | Engineer who used it |
| tokens/[file].md | Automated + PR | Script + engineer |
| .clinerules | PR | Team lead |
| .windsurfrules | PR | Team lead |
| _GOVERNANCE.md | PR | Team lead |

---

## Known Issues Resolved

| Issue | Status | Fix Applied |
|-------|--------|-------------|
| AGENTS.md referenced but missing | FIXED | .clinerules now references CLAUDE.md |
| .windsurfrules said read styles-full.md | FIXED | Points to _tokens-index.md |
| .windsurfrules said never use className | FIXED | Clarified Lens utilities are allowed |
| showcase.md used deprecated size="small" | FIXED | Updated to size="body-sm" |
| CLAUDE.md contradicted itself on styles-full.md | FIXED | Bottom section removed |
| LENS_SESSION_CONTEXT.md duplicated 3 files | FIXED | Superseded, replaced with pointer |
| Two files named introduction.md | FIXED | guides/introduction.md → pointer |
| No cognitive framework for agents | FIXED | LENS_THINKING.md created |
| No routing mechanism | FIXED | _ROUTER.md created |
| No governance protocol | FIXED | This file created |

---

## What Was Deleted or Superseded

LENS_SESSION_CONTEXT.md → replaced by LENS_THINKING.md + _ROUTER.md
guides/introduction.md → now points to root introduction.md
CLAUDE.md bottom "REFERENCE LOOKUP ORDER" section → deleted (contradicted Rule 0)
CLAUDE.md component mapping tables → deleted (live in COMPONENT-INDEX.md)
CLAUDE.md verified appendix → deleted (lives in MASTER-REFERENCE.md)