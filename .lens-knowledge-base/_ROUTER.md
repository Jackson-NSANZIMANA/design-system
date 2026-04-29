# _ROUTER.md — Navigate to Exactly What You Need
# Identify your need. Load that file. Stop there.
# Modeled on _tokens-index.md — the best file in this system.

---

## Find Your File

### Need a component for a UI element?
→ COMPONENT-INDEX.md
→ Then: components/[Name].md for full API
→ Stop when you find it.

### Need syntax and API patterns quickly?
→ QUICK-REFERENCE.md  
→ Then: components/[Name].md if you need full props
→ Stop when you have it.

### Need a className value?
→ tokens/css-utilities.md
→ Confirm class exists there before writing it.
→ Check deprecation list at file top.

### Need a color token name?
→ tokens/colors.md
→ Read "How To Apply Colors" table first.
→ Prefer semantic over greyscale.

### Need spacing, shadow, or radius tokens?
→ tokens/spacing.md for spacing
→ tokens/shape-and-elevation.md for shadow/radius

### Need a CSS variable (--lns-*)?
→ tokens/css-variables.md
→ Read deprecation table first.
→ Gradients: no utility class exists.
  Use: <Container backgroundImage="var(--lns-gradient-...)" />

### Need responsive behavior?
→ tokens/responsive-layout.md
→ Note: DemoBox in examples = use Container instead.

### Need to check if component accepts a ref?
→ MASTER-REFERENCE.md → Forward Ref column

### Have a linter error?
→ Component error: components/[ComponentName].md
→ className error: tokens/css-utilities.md
→ Read error precisely. Read file. Fix code. Never touch linter.

### Building a form?
→ LENS_THINKING.md Form Decision Tree (already loaded)
→ Then: patterns/forms.md for spacing rules
→ Then: components/FormField.md

### Handling errors in UI?
→ LENS_THINKING.md Error Decision Tree (already loaded)
→ Then: patterns/errors.md for pattern selection

### Need composition examples?
→ guides/showcase.md — real Lens composition patterns

### Building a complete feature?
→ 1. COMPONENT-INDEX.md
→ 2. QUICK-REFERENCE.md
→ 3. components/[Name].md for each component
→ 4. tokens/css-utilities.md for className values
→ 5. guides/showcase.md for composition reference

---

## Files That Are Never Loaded
reference/components-full.md    7,000 lines — never
reference/styles-full.md        1,746 lines — never

---

## Common Traps — Verify Before Submitting

| What you might write         | Problem              | Correct                                    |
|------------------------------|----------------------|--------------------------------------------|
| style={{ anything }}         | Always forbidden     | Component prop or CSS module               |
| flex-col, items-center       | Tailwind syntax      | flexDirection:column, items:center         |
| Text size="medium"           | Deprecated           | size="body-md"                             |
| Text color="red"             | Base color not semantic | color="danger"                          |
| Text color="grey6"           | Greyscale not semantic | color="bodyDimmed" if dimmed text       |
| ref={ref} on Lens            | Wrong API            | refHandler={(r) => ref.current = r}        |
| as="a" on Lens               | Wrong API            | htmlTag="a"                                |
| className={styles.x}         | Dynamic — linter error | Static string only                       |
| DemoBox                      | Does not exist       | Container                                  |
| gradient utility class       | Does not exist       | Container backgroundImage prop             |
| div className="flex"         | Not idiomatic        | Split                                      |
| p or h1 tags                 | Raw HTML             | Text htmlTag="p" or htmlTag="h1"           |
| text:small className         | Deprecated           | text:body-sm                               |
| Toast for errors             | Wrong pattern        | ErrorContainer or NotificationBar          |
| Modal for errors             | Wrong pattern        | Inline error or NotificationBar            |