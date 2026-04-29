# LENS_THINKING.md
# The Lens reasoning framework.
# 80 lines. Fixed. Never grows.
# Gives you the grammar. Component files give you the API.

---

## Why This File Exists

AI assistants default to generic React.
div, className, inline styles, raw HTML.
This file overrides that default by giving you
a different way of thinking — Lens grammar.

Read this once. Then think in Lens.
Look up specific APIs in components/[Name].md.

---

## The Lens Grammar — 7 Categories

Every UI element belongs to exactly one category.
Identify the category first. Then find the component.

| Category  | What it does              | Primary components                          |
|-----------|---------------------------|---------------------------------------------|
| STRUCTURE | Arranges elements in space| Container, Split, Arrange, Align, Spacer    |
| CONTENT   | Displays information      | Text, Icon, Avatar, Pill, Indicator, Media  |
| ACTION    | User initiates something  | Button, TextButton, IconButton, Link        |
| INPUT     | User provides data        | TextInput, Select, Checkbox, Radio, Switch, |
|           |                           | Textarea, Typeahead — always in FormField   |
| FEEDBACK  | System communicates state | Toast, NotificationBar, Tooltip, Popover,   |
|           |                           | ErrorContainer                              |
| LOADING   | System is working         | Loader, SkeletonContainer, SkeletonText,    |
|           |                           | EllipsesLoader, WaveformLoader, LogoLoader  |
| OVERLAY   | Appears above content     | Modal, ModalCard, Backdrop, Dropdown        |

When you know the category, you know where to look.
COMPONENT-INDEX.md has every component by category.
components/[Name].md has the exact API.

---

## The 4 Axioms of Lens

These are always true. No exceptions. No edge cases.

### Axiom 1: Lens or Nothing
Every UI element comes from @loomhq/lens.
If Lens lacks it: compose from STRUCTURE primitives.
If primitives cannot: CSS module + var(--lns-*) tokens.
Never: raw HTML for UI, third-party components, inline styles.

### Axiom 2: Tokens Are the Language of Values
Every value — spacing, color, size, radius, shadow —
has a Lens token name.
body-sm not small. danger not red. medium not 16px.
If you are typing a number or a hex value: stop.
Find the token. It exists.

### Axiom 3: Structure Components Are Always Preferred
The grammar always starts with STRUCTURE.
Before writing a div: ask which STRUCTURE component fits.
Split = flexbox. Arrange = grid. Container = styled box.
A raw div is a last resort with a documented reason.

### Axiom 4: The Linter Is Infallible
It knows Lens better than training data does.
Linter error = your code is wrong.
Never suppress it. Read the component file. Fix the code.

---

## The Reasoning Process — 3 Questions

Before writing any UI code, answer these in order:

### Question 1: What category is this?
  Look at the grammar table above.
  Assign every element you need to a category.
  This tells you which component family to look in.

### Question 2: Does a Lens component exist for this?
  Go to COMPONENT-INDEX.md.
  Find the category. Find the component.
  If it exists: use it. Get the API from components/[Name].md.
  If it does not: compose from STRUCTURE primitives.

### Question 3: Am I speaking Lens or translating into it?
  Speaking Lens:    Split, Arrange, Container come first.
                    Text component for all text.
                    Token names for all values.
  Translating:      div with flex classes.
                    p tags with size classes.
                    Numbers where token names should be.
  If translating: stop. Rewrite. Speak Lens directly.

---

## The Composition Rule

Lens components compose like sentences:
  STRUCTURE contains CONTENT and ACTION.
  INPUT lives inside STRUCTURE inside FormField.
  FEEDBACK floats above or beside STRUCTURE.
  OVERLAY contains its own STRUCTURE internally.

A well-composed Lens UI reads like:
  Container → Split → [Content] [Action]
  Not: div → div → [everything mixed together]

---

## When You Are Uncertain

Uncertain which component to use within a category?
  → QUICK-REFERENCE.md for common patterns
  → components/[Name].md for exact API
  → guides/showcase.md for composition examples

Uncertain if a pattern is correct?
  → Ask: would this pass the idiomatic test?
  → Idiomatic: Lens components first, tokens always, no raw HTML
  → Compliant but not idiomatic: raw divs with Lens classes

Uncertain if Lens has something?
  → COMPONENT-INDEX.md is the single source of truth
  → If not there: it does not exist in Lens

Never guess. Never invent. Never assume.
Route to the right file. Read it. Use it exactly.