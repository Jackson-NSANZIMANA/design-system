---
file: .lens-knowledge-base/_ROUTER.md
role: Task router (load once per task)
lastValidated: 2026-04-29
---

# Router — Load Only What This Task Needs

## Find a component
- Load: COMPONENT-INDEX.md
- Then: components/<Name>.md

## Confirm common syntax / patterns quickly
- Load: QUICK-REFERENCE.md
- Then: components/<Name>.md if needed

## Write/verify a className
- Load: tokens/css-utilities.md
- Rule: every class must exist there

## Pick token values
- Colors: tokens/colors.md
- Typography: tokens/typography.md
- Spacing: tokens/spacing.md
- Radius/shadow: tokens/shape-and-elevation.md
- CSS vars: tokens/css-variables.md
- Responsive: tokens/responsive-layout.md

## Forms
- Load: patterns/forms.md
- Then: components/FormField.md and components/<Input>.md

## Errors / error UX decisions
- Load: patterns/errors.md
- Then: components/ErrorContainer.md or components/NotificationBar.md if needed

## Composition examples
- Load: guides/showcase.md

## Ref support
- Load: MASTER-REFERENCE.md (Forward Ref column)

## Linter error
- Component error → components/<Name>.md
- className error → tokens/css-utilities.md
- Fix code. Never disable linter.

## Never load
- reference/components-full.md
- reference/styles-full.md