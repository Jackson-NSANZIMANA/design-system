---
file: .lens-knowledge-base/introduction.md
layer: worldview
lensVersion: 12.14.0
answers: "Why Lens exists. The modular design philosophy. The operating principles."
load-when:
  - First session on this codebase (read once for deep understanding)
  - When seeking the reasoning behind a rule
  - When explaining Lens to a new developer
do-not-load-when:
  - Implementing a task (AGENT_PRIMER.md already contains the distilled worldview)
  - Looking up a component API (use components/<Name>.md)
lastValidated: 2026-04-29
---

# Introduction to Lens and design systems

## Lens design system


Lens is the design system that we use to build Loom products. It provides components, tools, and documentation for designers and developers.

## Lens impact

- **Scalability**: by removing, adding, and changing components we can grow our products in many directions.
- **Speed**: we significantly reduce design and development ambiguity by reusing elements.
- **Consistency**: we provide users a consistent user experience and reduce the learning curve.

## Modular design

An easy way to understand design systems is to think about modular design. Any industrially produced object is composed of smaller modules. These modules are easy to replicate, reuse, repair or replace.

Cars are a great example of modular design. There are around 30.000 parts forming a single car. If the car is malfunctioning we can trace back to the part that is failing and replace it instead of buying a new car. We can also evolve and improve the car's functionality over time by changing parts.

## Modularity in digital design

We can translate the modular design technique to digital products. In the digital industry that technique is called design systems. Instead of designing and building the entire product as one piece, we build small individual components that come together to compose the final product.

Apple macOS interface is a great example of a digital product built with a design system. The OSX contains a collection of components that compose features like Finder and Settings.

There is a gap between the components and the final product, we need to understand how to put these pieces together in a meaningful and consistent way. To fill that gap a complete design system provides, not only components but also documentation and tools to facilitate the usage of these.

## Get started designing with Lens

### About Lens

Lens is the design system built for Loom products. By using the system we create a consistent user experience and we shift our focus to bigger design challenges.

Lens supports design with 4 types of elements:

- **Styles**
- **Components**
- **Icons**
- **Illustrations**
- **Patterns**

Lens bridges design and development by providing both the same components and styles. Design handoff becomes a conversation about what predefined patterns to use. Naming for components, styles and measurements is shared as well, so we can express decisions with a shared language, like for example: "Let's use 16px space-medium".

Some of our compositions and interactions are grouped into patterns and reused to create a consistent user experience.

## Styles

Styles are the core of Lens design. These contain the most granular definition of our visual design. Reusing styles reduces ambiguity and results in a consistent design. Lens Components are built with Lens styles, for example, the Button component uses color, radius and typography styles.

## Components

Components are the building blocks of our designs. Because of their simplicity components can be reused to solve many design problems.

## Patterns

Styles and components are highly reusable and can be composed in many ways. Because the composition variations can grow in so many directions, it can result in inconsistent designs that can affect user experience. Patterns solve this problem by grouping compositions and interactions.

# Get started developing with Lens

Lens provides developers tools to build a modular and scalable front-end. Our goal is to write as little CSS as possible and reuse code as much as possible.

> ## ⚠️ Project-Specific Enforcement Rules
>
> This introduction documents what Lens *provides*. The sections below
> describe capabilities that exist in Lens. However, **this project enforces
> a stricter subset**. Before reading, know these project rules:
>
> | Lens capability shown below | This project's rule |
> |---|---|
> | `<div className="p:medium">` | ✅ **Allowed** — wrapper divs with Lens utility classes are permitted |
> | `className="p:medium mr:medium shadow:large"` | ✅ **Allowed** — any class in `mastery-db.json` approvedClasses |
> | `.myClass { padding: var(--lns-space-large); }` | ✅ **Allowed** — for wrappers/ custom elements only. Never on Lens component internals. |
> | `style={{ fontSize: 'var(--lns-fontSize-medium)' }}` | ❌ **Forbidden** — inline styles always forbidden |
> | Gradients via CSS class | ❌ No gradient utility class exists; use `<Container backgroundImage="var(--lns-gradient-ai-primary)">` |
>
> **The linter enforces:**
> - `style={{}}` → always an error
> - `className` not in `mastery-db.json` → always an error
> - Dynamic `className={...}` expressions → always an error
> - `<button>`, `<input>`, `<textarea>`, `<select>`, `<a>` → always an error
>
> **The linter does NOT enforce** (but the coding standard requires):
> - Preferring `<Split>` over `<div className="flex">`
> - Preferring `<Text>` over `<p>` or `<h1>`
> - Using new typography names (`body-md` not `medium`)
>
> The examples below are from the official Lens documentation.
> Read them to understand Lens capabilities.
> Apply the table above to know what is permitted in `src/`.

## Design Philosophy Constraints

These are not syntax rules. These are the qualitative questions
every implementation decision must answer before code is written.
The linter enforces correctness. These enforce quality.

### Predictability Over Cleverness
A Lens implementation is correct when a developer who has never
seen this code can read it and know exactly what it renders.
→ If your solution requires a comment to explain why it works,
  the abstraction is wrong. Simplify.

### Composition Over Configuration  
Before adding a prop, ask: can this be solved by composing
two existing components instead?
→ A growing prop API is a signal that the component boundary
  is in the wrong place.

### Lens Language First
Every time you reach for a raw div, a custom class, or an
inline style, you are leaving the Lens language.
→ The cost is not just a lint error. The cost is that this
  element no longer responds to Lens theme changes, dark mode,
  or design token updates.
→ Staying in Lens language means the entire UI upgrades together.

### The Wrapper Test
When Lens seems too constrained, the answer is almost always
a wrapper — not a modification.
→ Wrap the Lens component. Style the wrapper. Leave the
  component's internals untouched.
→ This is not a workaround. This is the intended pattern.
  See: introduction.md "Wrapping the component" section.

### Why We Reject These Patterns

| Pattern | Why rejected | Lens alternative |
|---|---|---|
| `style={{}}` inline | Breaks theme system, bypasses token contract | Component props or CSS module with var(--lns-*) |
| Tailwind classes | Different token system entirely, creates two sources of truth | Lens colon-syntax utilities |
| Third-party components | Breaks visual consistency, unpredictable with Lens tokens | Compose from Lens primitives |
| Custom CSS on Lens internals | Conflicts with future Lens updates, unpredictable specificity | Wrapper pattern |
| Hardcoded px/hex values | Disconnects from design token system | Named semantic tokens |
| `as` prop | Not the Lens API | `htmlTag` prop |
| `ref` prop | Not the Lens API | `refHandler` function |

## Using components

### Import

Import single or multiple components:

```tsx
// single
import { Button } from '@loomhq/lens'
// multiple
import { Button, Checkbox, Text } from '@loomhq/lens'
```

### Usage

```tsx
const MyComponent = () => (
  <>
    <Text>Text</Text>
    <Checkbox />
    <Button>Button</Button>
  </>
)
```

## Using CSS utility classes

Lens offers atomic CSS classes (or functional CSS), to give developers granular styling options. Each atomic CSS class contains a single declaration (except for few cases). Mixing these classes makes it easy to use Lens styles without writing custom CSS.

An example of an atomic CSS class:

```tsx
// input class
pr:medium
// output declaration
padding-right: var(--lns-space-medium);
```

### Usage

```tsx
<div className="p:medium mr:medium shadow:large">content</div>
```

## Using CSS variables

### Usage

```css
/* Allowed for wrappers/custom elements only. 
   Do not apply to Lens component internals. */
.myClass {
  font-size: var(--lns-fontSize-body-md);
  padding: var(--lns-space-large);
  color: var(--lns-color-primary);
}
```

# Development best practices

### The risk of modifying components with custom styles

### The predictability problem

One of the main benefits of using a predefined component is that it has a predefined style and behavior. This makes the component predictable and much less prone to bugs. As long the component is only modified with the given API props, it will keep its promised style and behavior.

Importing a component and applying custom styles, by `style` property or `class`, can break the component's predictability.

#### An example case

Let's say we import a Button component from the library and apply a `width` style to it. In the future if we add a `width` to the Button in the library it will conflict with the styles we applied in the app.

```tsx
<Button className="customStylesInMyApp">Button</Button>

.buttonFromLibrary {
 width: 100%;
 /* ... */
}
.customStylesInMyApp {
 width: 10rem;
}
```

These styles now are in conflict and hard to track or detect visual bugs.

## Locking down iteration

Shared components and styles keep the interface consistent and iterative. For example, we can modify the button style and it will propagate through the product, but buttons that are modified with custom styles can fall out of sync and even break.

## Solutions

There are many cases where components are too constrained and can't cover all of the special cases. This is natural, components are not meant to solve all problems, but the most common ones.

### Wraping the component

In many cases, we need a specific positioning for a component. We can use a wrapper that takes care of the positioning problem. This way the component doesn't need to care where it is.

For example, if we need to position an `IconButton` in a corner:

```tsx
<div className="relative p:xlarge border shadow:medium">
  <div className="absolute top:xsmall right:xsmall">
    <IconButton icon={<SvgClose />} altText="Close" />
  </div>
</div>
```

This solution is using Lens CSS utilities, but we can also achieve the same by applying a custom class to the wrapper `div` and use Lens CSS variables.

### Building a custom element

When Lens primitives cannot cover the need:

1. Build the element using Lens layout components and utility classes first.
2. If still insufficient, scoped custom CSS is allowed for one-off 
   wrappers or custom elements. Use Lens variables (`var(--lns-*)`) 
   for all values.
3. Do not apply custom CSS to Lens component internals.
4. If the pattern repeats, escalate:
  

```tsx
 // TODO: [LENS-GAP] <describe what Lens is missing>
```

## How to compose layouts with Lens

By layout, we refer to the arrangement and spacing of UI elements. A layout can be as simple as buttons arranged in a row or as complex as page divisions.

### Understanding CSS Flexbox and Grid properties

Lens layout tools are built with CSS `flexbox` and `grid` properties. Understanding these properties is helpful when building with Lens.

## Compose with Lens layout components

Layout components are designed to cover most of the common layout cases and reduce repeated custom CSS.

```tsx
<Container
  maxWidth={44}
  borderSide="all"
  padding="medium"
  radius="medium"
  shadow="small"
>
  <Arrange gap="medium" columns={['auto', '1fr', 'auto']}>
    <Avatar letter="T" />
    <Text hasEllipsis>{demoText.long}</Text>
    <Arrange gap="small">
      <Arrange gap="xsmall">
        <Icon color="bodyDimmed" icon={<SvgSmile />} />
        <Text color="bodyDimmed">7</Text>
      </Arrange>
      <Arrange gap="xsmall">
        <Icon color="bodyDimmed" icon={<SvgComment />} />
        <Text color="bodyDimmed">2</Text>
      </Arrange>
    </Arrange>
  </Arrange>
</Container>
```

In this example, we use `Arrange` to solve a simple layout problem: a card with horizontally aligned and spaced-out elements.

### Spacing and dimensions

Layout components have the advantage of custom spacing and dimensions. We can specify properties like width and gap with values like units width={20} or preset spacing gap="small".

```tsx
<Container maxWidth={40} borderSide="all" padding="medium">
  <Arrange gap="small" columns={['1fr', 'auto']} alignItems="end">
    <FormField
      direction="column"
      label="Email"
      labelFor="columnExampleTextInput"
    >
      <TextInput id="columnExampleTextInput" />
    </FormField>
    <Button>Send</Button>
  </Arrange>
</Container>
```

#### When to add custom CSS

Policy 1: prefer Lens layout primitives and Lens utility classes first.
Policy 2: custom CSS is allowed for one-off wrappers and custom elements when Lens primitives are too constrained.
Policy 3: in custom CSS, use Lens variables (`var(--lns-*)`) to stay in Lens language.
If the pattern repeats across features, escalate as a Lens gap.

Don't add custom styles to Lens components.

### When NOT to use Lens to compose layouts

Layouts are one of the most common parts of an interface and each layout has slightly different needs. Because there are so many possible layout combinations, a system can't create patterns that cover all cases. Some layouts are too complex or need a specific behavior. For reference, check CSS `flex` and `grid` properties, just these can generate a huge amount of layout combinations.

In cases where Lens tools are too constraining and more granular control is needed, use scoped custom CSS for wrappers/custom elements with Lens variables, and escalate as a Lens gap when the pattern becomes reusable.
