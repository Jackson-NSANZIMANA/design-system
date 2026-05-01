---
file: prompts/P7-gap-report.md
role: Session-end governance — knowledge base improvement
---

Gap report — [session or feature name]

Analyze this session completely.
Every finding feeds the knowledge base.
Miss nothing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINDING FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TYPE: [one of five]
  LENS-GAP         Lens has no component for a real UI need
  TRAP-CANDIDATE   A mistake made or nearly made
  API-MISSING      A component .md file lacked needed info
  PATTERN-NEEDED   A composition worth adding to showcase.md
  KNOWLEDGE-GAP    AGENT_PRIMER.md unclear or insufficient

FINDING:   [precise description]
IMPACT:    [what went wrong or nearly wrong]
EVIDENCE:  [src/file:line or exact moment]

GOVERNANCE ACTION:
  File:     [exact .lens-knowledge-base/ path]
  Change:   [what to add/modify/remove — specific enough
             that another engineer acts without asking]
  Priority: CRITICAL / HIGH / MEDIUM / LOW

CRITICAL → linter failure or broken UI
HIGH     → non-idiomatic code that passes linter
MEDIUM   → slows reasoning or creates uncertainty
LOW      → documentation quality only

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SESSION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Type | Count | Highest Priority |
|------|-------|-----------------|
| LENS-GAP | | |
| TRAP-CANDIDATE | | |
| API-MISSING | | |
| PATTERN-NEEDED | | |
| KNOWLEDGE-GAP | | |

Most urgent action: [file + specific change]
Before next session: [what to verify was fixed]
Governance owner: [from _GOVERNANCE.md]