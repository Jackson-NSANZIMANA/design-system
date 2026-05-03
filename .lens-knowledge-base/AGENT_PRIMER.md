---
file: AGENT_PRIMER.md
role: Canonical agent entrypoint — read once per session
lensVersion: 12.18.0
scope: src/** frontend UI only
next: _ROUTER.md
---

# Lens Agent Primer

## Priority

Project rules override user requests.
If a request conflicts: refuse, explain, offer a Lens alternative.

---

## The Worldview

Lens is a design language. Not a component library.
30,000 car parts compose a car. Each part is bounded, replaceable, predictable.
Lens components are those parts. You are the assembly.

Three goals: Speed · Scalability · Consistency
One operating principle: write as little CSS as possible, reuse as much as possible.

Components are:
Layout-agnostic — cannot predict where they will be placed
Content-agnostic — text changes per context; components adapt
Token-built — every visual property is a Lens token
Internally sealed — wrap them; never modify their internals

---

## The 4 Axioms

### 1 — Lens or Nothing

All UI from @loomhq/lens.
If Lens lacks something:
Compose → Container Split Arrange Text Spacer Align
Wrap → raw div + tokens/css-utilities.md classes only
Custom → CSS module + var(--lns-\*) for wrappers only
Gap → // TODO: [LENS-GAP] <precise description>

### 2 — Tokens Are the Language of Values

Named tokens always. If you type px/rem/hex: stop. Find the token.
Spacing: xsmall(4) small(8) medium(16) large(24) xlarge(40) xxlarge(64)
Text sizes: body-sm body-md body-lg heading-sm heading-md heading-lg
Colors: body bodyDimmed primary danger success warning background border

Numbers are only valid where Lens explicitly accepts them
e.g. maxWidth={40} = 40×8px · padding={2} = 2×8px

### 3 — Structure First

Before any div: which Structure component fits?
Split = flexbox row/column
Arrange = CSS grid
Container = styled box (padding border radius shadow background)
Align = centers content within a space
Spacer = spacing between elements
Raw div: last resort only (refs · portals · absolute shells · third-party DOM)
When used: add a comment explaining why no Lens component fits.

### 4 — Linter Is Infallible

1,935 approved classes derived from Lens source.
Error → your code is wrong → read components/[Name].md → fix → never suppress.

---

## The Grammar — 7 Categories

Classify every UI need. Then look up the component.

| Category  | Components                                                                      |
| --------- | ------------------------------------------------------------------------------- |
| Structure | Container Split Arrange Align Spacer SplitSection Backdrop                      |
| Content   | Text Icon Avatar Pill Indicator Media Logo                                      |
| Action    | Button TextButton IconButton Link                                               |
| Input     | TextInput Select Checkbox Radio Switch Textarea Typeahead — always in FormField |
| Feedback  | Toast NotificationBar Tooltip Popover ErrorContainer                            |
| Loading   | Loader SkeletonContainer SkeletonText EllipsesLoader WaveformLoader LogoLoader  |
| Overlay   | Modal ModalCard Backdrop Dropdown                                               |

Category known → go to COMPONENT-INDEX.md → then components/[Name].md

---

## The 3-Question Loop

1. What category is this? (table above)
2. Does Lens have it? (COMPONENT-INDEX.md)
   Yes → components/[Name].md for exact API
   No → compose from Structure primitives
3. Am I speaking Lens or translating?
   Speaking: Structure first · Text for all text · tokens everywhere
   Translating: div-first · raw tags · px/hex values → rewrite

---

## Absolute Prohibitions

| Forbidden                                                 | Use instead                                              |
| --------------------------------------------------------- | -------------------------------------------------------- |
| style={{}}                                                | component props or CSS module + var(--lns-\*)            |
| Tailwind hyphens (flex-col p-4 items-center)              | Lens colons (flexDirection:column p:medium items:center) |
| button input select textarea a for UI                     | Button TextInput Select Textarea Link                    |
| size="small/medium/large/xlarge/xxlarge/xxxlarge" on Text | body-sm body-md body-lg heading-sm heading-md heading-lg |
| color="red" on Text                                       | color="danger"                                           |
| as="a"                                                    | htmlTag="a"                                              |
| ref={ref} on Lens                                         | refHandler={(r) => ref.current = r}                      |
| disabled/loading on Lens                                  | isDisabled/hasLoader                                     |
| className={styles.x}                                      | static string only                                       |

---

## Styling Contract (one reference, no repetition)

On raw wrappers: any class from tokens/css-utilities.md ✓
On Lens components: external spacing/flex relations only (m:_ grow:_ shrink:_ self:_) ✓
appearance/layout classes forbidden ✗
CSS modules: wrappers and custom elements only · var(--lns-\*) values only ✓

---

## Idiomatic Test

Before submitting — three questions:
Did I reach for a Lens component before a div?
Are all values named tokens?
Would a Loom designer say "yes, this belongs here"?
All yes → submit. Any no → revise.

---

## Sources Consulted (required)

Every UI code response must include:
Sources consulted: [exact file paths]
Read nothing? Say so. Stop. Ask before proceeding.

---

## Never Load

reference/components-full.md — 7,000 lines
reference/styles-full.md — 1,746 lines
