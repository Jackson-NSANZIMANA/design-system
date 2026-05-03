---
file: _ROUTER.md
role: Task router — one task one file — stop when found
lensVersion: 12.18.0
---

# Router

## Load exactly one file per need. Stop when you have what you need.

| Task                     | Load                                             |
| ------------------------ | ------------------------------------------------ |
| Find a component         | COMPONENT-INDEX.md → then components/[Name].md   |
| Common syntax patterns   | QUICK-REFERENCE.md                               |
| Verify a className       | tokens/css-utilities.md                          |
| Color tokens             | tokens/colors.md                                 |
| Spacing tokens           | tokens/spacing.md                                |
| Radius and shadow tokens | tokens/shape-and-elevation.md                    |
| CSS variables --lns-\*   | tokens/css-variables.md                          |
| Responsive behavior      | tokens/responsive-layout.md                      |
| Ref support check        | MASTER-REFERENCE.md (Forward Ref column)         |
| Form composition         | patterns/forms.md → components/FormField.md      |
| Error patterns           | patterns/errors.md                               |
| Composition reference    | guides/showcase.md                               |
| Linter error (component) | components/[ComponentName].md                    |
| Linter error (className) | tokens/css-utilities.md                          |
| Deeper WHY               | introduction.md → guides/component-definition.md |
| Responsive layout        | tokens/responsive-layout.md                      |
| Font initialization      | guides/fonts.md                                  |

Never load:
reference/components-full.md 7,000 lines
reference/styles-full.md 1,746 lines

## Common Traps

| You wrote                                     | Problem                                                                         | Correct                                                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| style={{}}                                    | Always forbidden                                                                | Component prop or CSS module                                                                          |
| flex-col items-center p-4                     | Tailwind                                                                        | flexDirection:column items:center p:medium                                                            |
| Text size="small/medium/large"                | Deprecated                                                                      | body-sm body-md body-lg                                                                               |
| Text size="xlarge/xxlarge/xxxlarge"           | Deprecated                                                                      | heading-sm heading-md heading-lg                                                                      |
| Text color="red"                              | Base color                                                                      | color="danger"                                                                                        |
| ref={ref}                                     | Wrong API                                                                       | refHandler={(r) => ref.current = r}                                                                   |
| as="a"                                        | Wrong API                                                                       | htmlTag="a"                                                                                           |
| className={styles.x}                          | Dynamic                                                                         | static string only                                                                                    |
| DemoBox                                       | Does not exist                                                                  | Container                                                                                             |
| gradient className                            | Does not exist                                                                  | Container backgroundImage prop                                                                        |
| div className="flex"                          | Not idiomatic                                                                   | Split                                                                                                 |
| p h1 h2 for content                           | Raw HTML                                                                        | Text htmlTag="p/h1/h2"                                                                                |
| Toast for errors                              | Wrong pattern                                                                   | ErrorContainer or NotificationBar                                                                     |
| Modal for errors                              | Wrong pattern                                                                   | ErrorContainer or NotificationBar                                                                     |
| hasFullWidth                                  | Deprecated                                                                      | width="full"                                                                                          |
| color="teal/grey6" for semantic need          | Base color                                                                      | success/bodyDimmed                                                                                    |
| import SvgBell from '@loomhq/lens/icons/bell' | Default import — removed in 12.18.0                                             | import { SvgBell } from '@loomhq/lens/icons/bell'                                                     |
| Split alignItems="center" or "flex-start"     | CSS value                                                                       | alignItems="start" — only valid value                                                                 |
| Split wrap="wrap"                             | CSS value                                                                       | wrap="nowrap" — only valid value                                                                      |
| SplitSection inside any wrapper inside Split  | Nesting violation                                                               | SplitSection must be direct child of Split                                                            |
| Running next lint for Lens compliance         | Checks React rules only                                                         | pnpm eslint pnpm eslint "src/**/*.{ts,tsx}" from design-system root                                              |
