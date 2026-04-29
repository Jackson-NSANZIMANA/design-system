---
file: .lens-knowledge-base/_ROUTER.md
role: Task router (read once per task)
last-validated: 2026-04-29
---

# Router — Load Exactly What You Need

Find a component
→ COMPONENT-INDEX.md
→ Then: components/[Name].md for full API

Recall syntax quickly
→ QUICK-REFERENCE.md
→ Then: components/[Name].md if you need full props

Write a className
→ tokens/css-utilities.md (confirm class exists; check deprecations)

Pick a token value
→ tokens/colors.md (read “How To Apply” table first)
→ tokens/spacing.md
→ tokens/shape-and-elevation.md
→ tokens/css-variables.md (read deprecations table)
→ tokens/responsive-layout.md (DemoBox not real → use Container)

Check ref support
→ MASTER-REFERENCE.md (Forward Ref column)

Build a form
→ patterns/forms.md → components/FormField.md → components/[Input].md

Handle errors in UI
→ patterns/errors.md

See composition examples
→ guides/showcase.md (examples compile + pass lint)

Have a linter error
→ components/[ComponentName].md if component error
→ tokens/css-utilities.md if className error
→ Read error precisely, fix implementation, never silence linter

Files never to load
- reference/components-full.md — 7000 lines — never
- reference/styles-full.md — 1746 lines — never

Common traps (verify before submitting)
| You might write             | Problem                | Correct                                  |
|----------------------------|------------------------|------------------------------------------|
| style={{ anything }}       | Always forbidden       | Component prop or CSS module + var(--lns-*) |
| flex-col, items-center     | Tailwind syntax        | flexDirection:column, items:center       |
| Text size="medium"         | Deprecated             | size="body-md"                           |
| Text color="red"           | Base color             | color="danger" (semantic)                |
| className={styles.x}       | Dynamic → linter error | Static string only                       |
| as="a" on Lens component   | Wrong API              | htmlTag="a"                              |
| ref={ref} on Lens component| Wrong API              | refHandler={(r) => ref.current = r}      |
| DemoBox                    | Does not exist         | Container                                |
| gradient utility class     | Does not exist         | Container backgroundImage prop           |
| div className="flex"       | Not idiomatic          | Split                                    |
| p/h1 tags                  | Raw HTML               | Text htmlTag="p"/"h1"                    |