# _GOVERNANCE.md — ContextOps Protocol (Human-only)

Current state
- Lens version: @loomhq/lens@12.14.0
- System last validated: 2026-04-29
- Validated by: <owner>

One rule that protects this system
- CLAUDE.md ≤ 80 lines. Any additions must move to the correct file.
- CI MUST fail if CLAUDE.md exceeds 80 lines.

When Lens updates — run this checklist
1) Regenerate mastery DB
   - npm run generate:mastery-db
   - Confirms className list is current (eslint-plugin-lens-compliance/lib/mastery-db.json)

2) Verify exports + forward refs
   - Update MASTER-REFERENCE.md component list and Forward Ref column if changed

3) New/changed components
   - Update COMPONENT-INDEX.md
   - Create/patch components/[NewName].md
   - Update QUICK-REFERENCE.md if common pattern changed
   - If reasoning changes, update LENS_THINKING.md (rare)

4) Tokens changed/added/deprecated
   - Update tokens/[file].md
   - Update _ROUTER.md trap table (e.g., deprecated sizes)
   - Scan docs via docs-verify script

5) Showcase and patterns
   - Ensure every code fence compiles + passes ESLint (CI)
   - Fix deprecated patterns immediately

6) Tools in sync
   - .clinerules and .windsurfrules defer to AGENT_PRIMER.md
   - Remove any tool-specific contradictions

7) Update this file (version/date/owner)

Ownership
- AGENT_PRIMER.md: team lead (reviews all edits)
- CLAUDE.md: team lead (hard cap enforcement)
- _ROUTER.md: any engineer (PR review)
- LENS_THINKING.md (if present): senior eng + designer
- COMPONENT-INDEX.md, QUICK-REFERENCE.md, component/token files: feature owner
- showcase.md: engineer + designer review
- CI scripts: platform owner

CI requirements (docs sanity)
- Code fences in .md compile and pass ESLint (docs-verify)
- Deprecated tokens/classes banned by regex scan
- Internal links resolve (no broken references)

Known issues log
- Keep a short table of recent fixed issues (e.g., showcase had size="small" → updated to size="body-sm")