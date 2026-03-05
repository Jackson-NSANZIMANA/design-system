# Styles

## Colors/Gradients

All colors are defined with `HSLA` values: `hue` `saturation` `lightness` `alpha`. `HSLA` format is easy to read and easy to modify.

### Semantic colors

Whenever possible use semantic colors instead of Greyscale colors or Base colors.

#### Dynamic

Semantic colors are dynamic and will react to the current theme, for example: the color `body` will dynamically change from `grey8` to `grey1` in dark mode.

#### Semantic

Semantic color names indicate a specific usage. This reduces ambiguity when deciding lightwhich color to use. For example, for borders we can use `border` semantic color.

#### Scalable

Semantic colors are easier to maintain and scale, for example: instead of applying a specific color to the primary button we can use primary semantic color which will adapt if we change our `primary` color value in the future.

# CSS Colors - Lens Design System

## Light Theme

### Primary Colors

| Name          | CSS Variable              | HSLA                         | Hex     |
| ------------- | ------------------------- | ---------------------------- | ------- |
| primary       | --lns-color-primary       | hsla(215.4, 80%, 47.65%, 1)  | #1868db |
| primaryHover  | --lns-color-primaryHover  | hsla(215.9, 79.9%, 41%, 1)   | #1558bc |
| primaryActive | --lns-color-primaryActive | hsla(216.3, 69.2%, 22.9%, 1) | #123263 |

### Body Colors

| Name        | Variable                | HSLA                  | Hex     |
| ----------- | ----------------------- | --------------------- | ------- |
| body        | --lns-color-body        | hsla(228, 6%, 17%, 1) | #292a2e |
| bodyDimmed  | --lns-color-bodyDimmed  | hsla(224, 5%, 44%, 1) | #6b6e76 |
| bodyInverse | --lns-color-bodyInverse | hsla(0, 0%, 100%, 1)  | #ffffff |

### Background Colors

| Name                    | Variable                            | HSLA                          | Hex     |
| ----------------------- | ----------------------------------- | ----------------------------- | ------- |
| background              | --lns-color-background              | hsla(0, 0%, 100%, 1)          | #ffffff |
| backgroundHover         | --lns-color-backgroundHover         | hsla(209, 75.6%, 8%, 0.08)    |         |
| backgroundActive        | --lns-color-backgroundActive        | hsla(225.5, 56.9%, 10%, 0.14) |         |
| backgroundSecondary     | --lns-color-backgroundSecondary     | hsla(0, 0%, 97.25%, 1)        | #f8f8f8 |
| backgroundSecondary2    | --lns-color-backgroundSecondary2    | hsla(0, 0%, 97.25%, 1)        | #f8f8f8 |
| backgroundNeutral       | --lns-color-backgroundNeutral       | hsla(209, 76%, 8%, 0.08)      |         |
| backgroundNeutralHover  | --lns-color-backgroundNeutralHover  | hsla(226, 57%, 1%, 0.14)      |         |
| backgroundNeutralActive | --lns-color-backgroundNeutralActive | hsla(223, 61%, 8%, 0.28)      |         |
| backgroundInverse       | --lns-color-backgroundInverse       | hsla(228, 6%, 17%, 1)         | #292a2e |

### Focus & Overlay

| Name          | Variable                  | HSLA                       | Hex     |
| ------------- | ------------------------- | -------------------------- | ------- |
| focusRing     | --lns-color-focusRing     | hsla(216.1, 81.4%, 60%, 1) | #4688ec |
| overlay       | --lns-color-overlay       | hsla(0, 0%, 100%, 1)       | #ffffff |
| overlayHover  | --lns-color-overlayHover  | hsla(210, 7%, 94.5%, 1)    | #f0f1f2 |
| overlayActive | --lns-color-overlayActive | hsla(225, 6%, 87.5%, 1)    | #dddee1 |

### Borders & Records

| Name         | Variable                 | HSLA                        | Hex     |
| ------------ | ------------------------ | --------------------------- | ------- |
| border       | --lns-color-border       | hsla(225.5, 57%, 10%, 0.14) |         |
| record       | --lns-color-record       | hsla(11, 100%, 62.2%, 1)    | #ff623e |
| recordHover  | --lns-color-recordHover  | hsla(11, 100%, 52.2%, 1)    | #ff380b |
| recordActive | --lns-color-recordActive | hsla(11, 100%, 42.2%, 1)    | #d72700 |

### Dark Theme

#### Primary Colors

| Name          | CSS Variable              | HSLA                         | Hex     |
| ------------- | ------------------------- | ---------------------------- | ------- |
| primary       | --lns-color-primary       | hsla(216.3, 83.2%, 67.3%, 1) | #669df1 |
| primaryHover  | --lns-color-primaryHover  | hsla(216.1, 85.1%, 76.3%, 1) | #8fb8f6 |
| primaryActive | --lns-color-primaryActive | hsla(216.5, 92%, 90.2%, 1)   | #cfe1fd |

#### Body & Background

| Name        | Variable                | HSLA                      | Hex     |
| ----------- | ----------------------- | ------------------------- | ------- |
| body        | --lns-color-body        | hsla(225, 4.3%, 81.6%, 1) | #cecfd2 |
| bodyDimmed  | --lns-color-bodyDimmed  | hsla(217.5, 4%, 60.4%, 1) | #96999e |
| bodyInverse | --lns-color-bodyInverse | hsla(240, 3%, 12.5%, 1)   | #1f1f21 |

| Name                    | Variable                            | HSLA                        | Hex     |
| ----------------------- | ----------------------------------- | --------------------------- | ------- |
| background              | --lns-color-background              | hsla(240, 3%, 12.5%, 1)     | #1f1f21 |
| backgroundHover         | --lns-color-backgroundHover         | hsla(240, 12.6%, 83%, 0.07) |         |
| backgroundActive        | --lns-color-backgroundActive        | hsla(236, 36.6%, 92%, 0.12) |         |
| backgroundSecondary     | --lns-color-backgroundSecondary     | hsla(210, 4%, 9.8%, 1)      | #18191a |
| backgroundNeutral       | --lns-color-backgroundNeutral       | hsla(240, 12.6%, 83%, 0.07) |         |
| backgroundNeutralHover  | --lns-color-backgroundNeutralHover  | hsla(236, 36.6%, 92%, 0.12) |         |
| backgroundNeutralActive | --lns-color-backgroundNeutralActive | hsla(226, 49%, 93%, 0.25)   |         |
| backgroundInverse       | --lns-color-backgroundInverse       | hsla(225, 4.3%, 81.6%, 1)   | #cecfd2 |

#### Focus & Overlay

| Name          | Variable                  | HSLA                         | Hex     |
| ------------- | ------------------------- | ---------------------------- | ------- |
| focusRing     | --lns-color-focusRing     | hsla(216.1, 85.1%, 76.3%, 1) | #8fb8f6 |
| overlay       | --lns-color-overlay       | hsla(225, 4%, 17.6%, 1)      | #2b2c2f |
| overlayHover  | --lns-color-overlayHover  | hsla(225, 4%, 19.61%, 1)     | #303134 |
| overlayActive | --lns-color-overlayActive | hsla(225, 4.69%, 25.1%, 1)   | #3d3f43 |

### Borders & Records

| Name             | Variable                     | HSLA                           | Hex     |
| ---------------- | ---------------------------- | ------------------------------ | ------- |
| backdrop         | --lns-color-backdrop         | hsla(210, 11%, 7%, 0.6)        |         |
| border           | --lns-color-border           | hsla(236, 36.6%, 92%, 0.12)    |         |
| record           | --lns-color-record           | hsla(11, 100%, 62.2%, 1)       | #ff623e |
| recordHover      | --lns-color-recordHover      | hsla(11, 100%, 52.2%, 1)       | #ff380b |
| recordActive     | --lns-color-recordActive     | hsla(11, 100%, 42.2%, 1)       | #d72700 |
| backdropDark     | --lns-color-backdropDark     | hsla(228, 6%, 17%, 0.9)        |         |
| backdropTwilight | --lns-color-backdropTwilight | hsla(216.3, 69.2%, 22.9%, 0.8) |         |

---

## Greyscale Colors

| Name  | CSS Variable      | HSLA                    | Hex     |
| ----- | ----------------- | ----------------------- | ------- |
| grey8 | --lns-color-grey8 | hsla(228, 6%, 17%, 1)   | #292a2e |
| grey7 | --lns-color-grey7 | hsla(223, 6%, 24.5%, 1) | #3b3d42 |
| grey6 | --lns-color-grey6 | hsla(224, 5%, 44%, 1)   | #6b6e76 |
| grey5 | --lns-color-grey5 | hsla(224, 5%, 57%, 1)   | #8c8f97 |
| grey4 | --lns-color-grey4 | hsla(223, 5%, 73%, 1)   | #b7b9be |
| grey3 | --lns-color-grey3 | hsla(225, 6%, 87.5%, 1) | #dddee1 |
| grey2 | --lns-color-grey2 | hsla(210, 7%, 94.5%, 1) | #f0f1f2 |
| grey1 | --lns-color-grey1 | hsla(0, 0%, 97.25%, 1)  | #f8f8f8 |
| white | --lns-color-white | hsla(0, 0%, 100%, 1)    | #ffffff |

---

## Base Colors

| Name          | CSS Variable              | HSLA                         | Hex     |
| ------------- | ------------------------- | ---------------------------- | ------- |
| red           | --lns-color-red           | hsla(4, 64%, 48%, 1)         | #c9372c |
| redDark       | --lns-color-redDark       | hsla(4, 56%, 23%, 1)         | #5b1e1a |
| blurpleLight  | --lns-color-blurpleLight  | hsla(214.3, 91.3%, 95.5%, 1) | #e9f2fe |
| blurpleMedium | --lns-color-blurpleMedium | hsla(216.5, 92%, 90.2%, 1)   | #cfe1fd |
| blurple       | --lns-color-blurple       | hsla(215.4, 80%, 47.65%, 1)  | #1868db |
| blurpleDark   | --lns-color-blurpleDark   | hsla(215.9, 79.9%, 41%, 1)   | #1558bc |
| blurpleStrong | --lns-color-blurpleStrong | hsla(216.3, 69.2%, 22.9%, 1) | #123263 |
| offWhite      | --lns-color-offWhite      | hsla(0, 0%, 97.25%, 1)       | #f8f8f8 |
| blueLight     | --lns-color-blueLight     | hsla(216.5, 92%, 90.2%, 1)   | #cfe1fd |
| blue          | --lns-color-blue          | hsla(215.4, 80%, 47.65%, 1)  | #1868db |
| blueDark      | --lns-color-blueDark      | hsla(216.3, 69.2%, 23%, 1)   | #123263 |
| magentaLight  | --lns-color-magentaLight  | hsla(323, 92%, 90%, 1)       | #fdceeb |
| magenta       | --lns-color-magenta       | hsla(323, 42%, 48%, 1)       | #ae4786 |
| magentaDark   | --lns-color-magentaDark   | hsla(324, 37%, 23%, 1)       | #50253f |
| orangeLight   | --lns-color-orangeLight   | hsla(4, 100%, 91.2%, 1)      | #ffd5d2 |
| orange        | --lns-color-orange        | hsla(11, 100%, 62.2%, 1)     | #ff623e |
| orangeDark    | --lns-color-orangeDark    | hsla(10.9, 100%, 42.2%, 1)   | #d72700 |
| tealLight     | --lns-color-tealLight     | hsla(155, 70%, 84%, 1)       | #baf3db |
| teal          | --lns-color-teal          | hsla(155, 62%, 32%, 1)       | #1f845a |
| tealDark      | --lns-color-tealDark      | hsla(155, 55%, 19%, 1)       | #164b35 |
| yellowLight   | --lns-color-yellowLight   | hsla(43, 93%, 82%, 1)        | #fce4a6 |
| yellow        | --lns-color-yellow        | hsla(45.5, 96%, 57%, 1)      | #fbc828 |
| yellowDark    | --lns-color-yellowDark    | hsla(39.8, 100%, 49.4%, 1)   | #fca700 |

---

## Gradients

| Name         | CSS Variable                | Gradient                                                                                   |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------ |
| ai-primary   | --lns-gradient-ai-primary   | conic-gradient(from 270deg, #0469FF 90deg, #BF63F3 180deg, #FFA900 270deg, #0065FF 360deg) |
| ai-secondary | --lns-gradient-ai-secondary | radial-gradient(138.41% 100% at 100% 100%, #E9F2FE 0%, #FFF 100%)                          |

---

# Typography

---

# Typeface

We use **Atlassian Sans** for all headings and body copy within our product.

### Example

```tsx
<div>
  <Text size="heading-lg">Atlassian Sans</Text>
  <br />
  <Text size="xlarge" fontWeight="bold">
    {demoText.alphabet}
    <br />
    {demoText.alphabet.join('').toLowerCase()}
    <br />
    0123456789
  </Text>
  <br />
  <Text size="xlarge" fontWeight="medium">
    {demoText.alphabet}
    <br />
    {demoText.alphabet.join('').toLowerCase()}
    <br />
    0123456789
  </Text>
  <br />
  <Text size="xlarge">
    {demoText.alphabet}
    <br />
    {demoText.alphabet.join('').toLowerCase()}
    <br />
    0123456789
  </Text>
</div>
```

---

# Sizes

⚠️ Please use the naming from the **first column**.  
We are deprecating the naming from the second column to better align with the Atlassian Design System.

## Size Reference Table

| size       | (deprecated) | font size (rem) | font size (px) | line height | line height (px) | letter spacing (px) |
| ---------- | ------------ | --------------- | -------------- | ----------- | ---------------- | ------------------- |
| body-sm    | small        | 0.75rem         | 12px           | 1.5         | 18px             | normal              |
| body-md    | medium       | 0.875rem        | 14px           | 1.57        | 21px             | normal              |
| body-lg    | large        | 1.125rem        | 18px           | 1.44        | 25px             | -0.2px              |
| heading-sm | xlarge       | 1.5rem          | 24px           | 1.16        | 27px             | -0.2px              |
| heading-md | xxlarge      | 2rem            | 32px           | 1.125       | 36px             | -0.5px              |
| heading-lg | xxxlarge     | 3rem            | 48px           | 1.16        | 55px             | -1.2px              |

### Example

```tsx
<>
  {availableSizes.map((size, index) => (
    <Text size={size} key={index}>
      Size {size}
    </Text>
  ))}
</>
```

---

# Weights

⚠️ _Book_ weight will be renamed to **regular** weight to match Atlassian Design System.

## Weight Reference

| weight  | value |
| ------- | ----- |
| regular | 400   |
| medium  | 500   |
| bold    | 653   |

### Example

```tsx
<>
  {availableFontWeights.map((weight, index) => (
    <Text fontWeight={weight} key={index}>
      Weight {weight}
    </Text>
  ))}
</>
```

---

# Semantic Variants

Most text use cases can be covered by a specific variant.

## Variant Reference

| variant   | size       | font weight | usage                                                                 |
| --------- | ---------- | ----------- | --------------------------------------------------------------------- |
| mainTitle | heading-md | bold        | Used for the main title in a view. Should be used only once per view. |
| title     | body-lg    | bold        | Used for titles.                                                      |
| body      | body-md    | regular     | Used for body text.                                                   |

---

## Variant Examples

### Variant mainTitle — Granularization of Incoming Signals

### Variant title — Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures.

Variant body — The textures generated by Clouds are extremely thick, partly because of the large number of concurrent grains (up to 60), partly because of a built-in allpass diffuser and reverberator, smearing the shortest transient into a wash of noise — giving the illusion of an even larger number of simultaneous grains.

### Code

```tsx
<Arrange columns="1fr" gap="small">
  <Text variant="mainTitle">Variant mainTitle — {demoText.title}</Text>
  <Text variant="title">Variant title — {demoText.medium}</Text>
  <Text variant="body">Variant body — {demoText.long}</Text>
</Arrange>
```

---

# Text Color

- Use **`body`** color as default text color.
- Use **`bodyDimmed`** color to de-emphasize text.

### Code example

```tsx
<>
  <Text>Text with "body" color</Text>
  <Text color="bodyDimmed">Text with "bodyDimmed" color</Text>
</>
```

---

# Line Length

To improve legibility, limit paragraph lines to **50 characters**.

Use CSS `ch` unit:

```jsx
<Container maxWidth="50ch">
  Clouds is focused on the realtime granularization of incoming audio signals,
  and their transformation into amorphous textures.
</Container>
```

### Code example

```tsx
<Arrange columns="1fr" gap="medium">
  {availableSizes.slice(0, 3).map((size, index) => {
    return (
      <Text size={size} key={index}>
        <Container maxWidth="50ch">{demoText.medium}</Container>
      </Text>
    )
  })}
</Arrange>
```

---

# Related Components

- Text

---

# Spacing

---

# Unit

The base unit size is **8px (0.5rem)**.

All spacing values are derived from this base unit.

---

# Semantic Spacing

## Spacing Reference Table

| name    | unit | rem     | px   |
| ------- | ---- | ------- | ---- |
| xsmall  | 0.5  | 0.25rem | 4px  |
| small   | 1    | 0.5rem  | 8px  |
| medium  | 2    | 1rem    | 16px |
| large   | 3    | 1.5rem  | 24px |
| xlarge  | 5    | 2.5rem  | 40px |
| xxlarge | 8    | 4rem    | 64px |

---

## Spacing Tokens

- **`xsmall`**
- **`small`**
- **`medium`**
- **`large`**
- **`xlarge`**
- **`xxlarge`**

---

## Example

```jsx
<Arrange gap="medium" columns="1fr">
  {Object.entries(spaces).map(([key, value], index) => (
    <Arrange gap="medium" key={index}>
      <Container minWidth="xxlarge">
        <div
          style={{
            fontSize: 'var(--lns-fontSize-small)',
            lineHeight: 'var(--lns-space-xsmall)',
          }}
        >
          {key}
        </div>
      </Container>

      <Container width={value} height={value} backgroundColor="primary" />
    </Arrange>
  ))}
</Arrange>
```

---

# How Semantic Spacing Is Generated

### Step 1 — Base Value

`small (8px)` is the initial value.  
It equals the **base unit size (8px)**.

---

### Step 2 — Generating Larger Sizes

Each consecutive size is calculated by summing the previous values.

For example:

```
medium (16px) + large (24px) = xlarge (40px)
```

This cumulative approach creates a natural, progressive spacing scale.

---

### Step 3 — The Exception

`xsmall (4px)` is the only value **not generated** using the formula above.

It is manually defined as:

```
xsmall = half of base unit size (8px ÷ 2 = 4px)
```

This makes it an easy micro-spacing value for fine adjustments.

---

# Related Components

- Spacer
- Arrange
- Split

---

# Shadows

---

# Sizes

Shadows are defined using semantic tokens. Each size corresponds to a predefined box-shadow value based on the base unit (`--lns-unit`, default 8px).

## Shadow Reference Table

| name   | shadow                                                                                       |
| ------ | -------------------------------------------------------------------------------------------- |
| small  | `0 calc(0.5 * var(--lns-unit, 8px)) calc(1.25 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.05)` |
| medium | `0 calc(0.5 * var(--lns-unit, 8px)) calc(1.25 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.1)`  |
| large  | `0 calc(0.75 * var(--lns-unit, 8px)) calc(3 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.1)`    |

---

## Example

```jsx
<Arrange gap="large" columns="repeat(3, 1fr)">
  {Object.entries(shadows).map(([key, value], index) => (
    <Container key={index} paddingTop="100%" shadow={key} radius="medium" />
  ))}
</Arrange>
```

---

# Shadow Philosophy

Shadows are:

- **Unit-based** → derived from the base spacing unit
- **Semantic** → referenced by name, not raw CSS values
- **Consistent** → follow the same visual elevation logic

### small

Subtle elevation. Suitable for cards resting on flat backgrounds.

### medium

Moderate elevation. Ideal for interactive elements like dropdowns or raised containers.

### large

Strong elevation. Best used for overlays, modals, or components requiring clear visual separation.

---

# Implementation Notes

- Shadows use `hsla()` with low opacity for soft depth.
- Calculations reference `var(--lns-unit, 8px)` for scalability.
- Changing the base unit automatically scales shadow proportions.

---

# Related Components

- Container
- Arrange
- Radius

---

# Radii

Radii define the rounded corners used across components.

Lens components include built-in corner radius support. Radii scale with component size — as a component grows larger, its corner radius should increase proportionally.

⚠️ Always use **radius token values** when defining corner roundness for frames, groups, shapes, or containers.

---

# System Foundation

Our system is built around a **base unit of 8px** (`--lns-unit`).

Radius tokens are multiples of this base unit.

The numeric suffix represents the percentage of the base unit:

- `100` → 100% of base unit → **8px**
- `200` → 200% of base unit → **16px**

This creates a predictable and scalable rounding system.

---

# Sizes

## Radius Reference Table

| size  | corner radius (px)                  |
| ----- | ----------------------------------- |
| none  | 0                                   |
| 50    | `calc(0.5 * var(--lns-unit, 8px))`  |
| 100   | `calc(1 * var(--lns-unit, 8px))`    |
| 150   | `calc(1.5 * var(--lns-unit, 8px))`  |
| 175   | `calc(1.75 * var(--lns-unit, 8px))` |
| 200   | `calc(2 * var(--lns-unit, 8px))`    |
| 250   | `calc(2.5 * var(--lns-unit, 8px))`  |
| 300   | `calc(3 * var(--lns-unit, 8px))`    |
| round | `calc(999 * var(--lns-unit, 8px))`  |

---

# Example

```jsx
<>
  <Split gap="large">
    {availableRadii.map((radius) => (
      <Container
        key={radius}
        radius={radius}
        width={16}
        height={16}
        borderSide="all"
        borderColor="grey5"
      />
    ))}
  </Split>
</>
```

---

# Radius Philosophy

### none

Sharp edges. Use for strict layouts or structural elements.

### 50–150

Subtle rounding. Ideal for small components like tags or compact UI elements.

### 175–300

Soft rounding. Suitable for cards, panels, and interactive components.

### round

Fully rounded shapes. Used for pills, avatars, badges, or circular UI elements.

---

# Implementation Notes

- Radii scale automatically if `--lns-unit` changes.
- Use semantic tokens instead of raw pixel values.
- Radius should visually correspond to component size.

---

# Related

- CSS helpers
- CSS utilities
- CSS variables

---

# Lens CSS Utility Classes Documentation

---

## 🎨 Text Color Utilities

Class Declaration

---

## 🎨 Text Color Utilities

| Class Name                   | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `c:red`                      | `color: var(--lns-color-red);`                      |
| `c:redDark`                  | `color: var(--lns-color-redDark);`                  |
| `c:blurpleLight`             | `color: var(--lns-color-blurpleLight);`             |
| `c:blurpleMedium`            | `color: var(--lns-color-blurpleMedium);`            |
| `c:blurple`                  | `color: var(--lns-color-blurple);`                  |
| `c:blurpleDark`              | `color: var(--lns-color-blurpleDark);`              |
| `c:blurpleStrong`            | `color: var(--lns-color-blurpleStrong);`            |
| `c:offWhite`                 | `color: var(--lns-color-offWhite);`                 |
| `c:blueLight`                | `color: var(--lns-color-blueLight);`                |
| `c:blue`                     | `color: var(--lns-color-blue);`                     |
| `c:blueDark`                 | `color: var(--lns-color-blueDark);`                 |
| `c:magentaLight`             | `color: var(--lns-color-magentaLight);`             |
| `c:magenta`                  | `color: var(--lns-color-magenta);`                  |
| `c:magentaDark`              | `color: var(--lns-color-magentaDark);`              |
| `c:orangeLight`              | `color: var(--lns-color-orangeLight);`              |
| `c:orange`                   | `color: var(--lns-color-orange);`                   |
| `c:orangeDark`               | `color: var(--lns-color-orangeDark);`               |
| `c:tealLight`                | `color: var(--lns-color-tealLight);`                |
| `c:teal`                     | `color: var(--lns-color-teal);`                     |
| `c:tealDark`                 | `color: var(--lns-color-tealDark);`                 |
| `c:yellowLight`              | `color: var(--lns-color-yellowLight);`              |
| `c:yellow`                   | `color: var(--lns-color-yellow);`                   |
| `c:yellowDark`               | `color: var(--lns-color-yellowDark);`               |
| `c:grey1`                    | `color: var(--lns-color-grey1);`                    |
| `c:grey2`                    | `color: var(--lns-color-grey2);`                    |
| `c:grey3`                    | `color: var(--lns-color-grey3);`                    |
| `c:grey4`                    | `color: var(--lns-color-grey4);`                    |
| `c:grey5`                    | `color: var(--lns-color-grey5);`                    |
| `c:grey6`                    | `color: var(--lns-color-grey6);`                    |
| `c:grey7`                    | `color: var(--lns-color-grey7);`                    |
| `c:grey8`                    | `color: var(--lns-color-grey8);`                    |
| `c:white`                    | `color: var(--lns-color-white);`                    |
| `c:primary`                  | `color: var(--lns-color-primary);`                  |
| `c:primaryHover`             | `color: var(--lns-color-primaryHover);`             |
| `c:primaryActive`            | `color: var(--lns-color-primaryActive);`            |
| `c:danger`                   | `color: var(--lns-color-danger);`                   |
| `c:success`                  | `color: var(--lns-color-success);`                  |
| `c:warning`                  | `color: var(--lns-color-warning);`                  |
| `c:info`                     | `color: var(--lns-color-info);`                     |
| `c:body`                     | `color: var(--lns-color-body);`                     |
| `c:bodyDimmed`               | `color: var(--lns-color-bodyDimmed);`               |
| `c:bodyInverse`              | `color: var(--lns-color-bodyInverse);`              |
| `c:background`               | `color: var(--lns-color-background);`               |
| `c:backgroundHover`          | `color: var(--lns-color-backgroundHover);`          |
| `c:backgroundActive`         | `color: var(--lns-color-backgroundActive);`         |
| `c:backgroundSecondary`      | `color: var(--lns-color-backgroundSecondary);`      |
| `c:backgroundSecondary2`     | `color: var(--lns-color-backgroundSecondary2);`     |
| `c:backgroundNeutral`        | `color: var(--lns-color-backgroundNeutral);`        |
| `c:backgroundNeutralHover`   | `color: var(--lns-color-backgroundNeutralHover);`   |
| `c:backgroundNeutralActive`  | `color: var(--lns-color-backgroundNeutralActive);`  |
| `c:backgroundInverse`        | `color: var(--lns-color-backgroundInverse);`        |
| `c:focusRing`                | `color: var(--lns-color-focusRing);`                |
| `c:overlay`                  | `color: var(--lns-color-overlay);`                  |
| `c:overlayHover`             | `color: var(--lns-color-overlayHover);`             |
| `c:overlayActive`            | `color: var(--lns-color-overlayActive);`            |
| `c:backdrop`                 | `color: var(--lns-color-backdrop);`                 |
| `c:border`                   | `color: var(--lns-color-border);`                   |
| `c:record`                   | `color: var(--lns-color-record);`                   |
| `c:recordHover`              | `color: var(--lns-color-recordHover);`              |
| `c:recordActive`             | `color: var(--lns-color-recordActive);`             |
| `c:backdropDark`             | `color: var(--lns-color-backdropDark);`             |
| `c:backdropTwilight`         | `color: var(--lns-color-backdropTwilight);`         |
| `c:highlight`                | `color: var(--lns-color-highlight);`                |
| `c:highlightHover`           | `color: var(--lns-color-highlightHover);`           |
| `c:highlightActive`          | `color: var(--lns-color-highlightActive);`          |
| `c:dangerHover`              | `color: var(--lns-color-dangerHover);`              |
| `c:dangerActive`             | `color: var(--lns-color-dangerActive);`             |
| `c:disabledContent`          | `color: var(--lns-color-disabledContent);`          |
| `c:disabledBackground`       | `color: var(--lns-color-disabledBackground);`       |
| `c:formFieldBorder`          | `color: var(--lns-color-formFieldBorder);`          |
| `c:formFieldBackground`      | `color: var(--lns-color-formFieldBackground);`      |
| `c:buttonBorder`             | `color: var(--lns-color-buttonBorder);`             |
| `c:tabBackground`            | `color: var(--lns-color-tabBackground);`            |
| `c:upgrade`                  | `color: var(--lns-color-upgrade);`                  |
| `c:upgradeHover`             | `color: var(--lns-color-upgradeHover);`             |
| `c:upgradeActive`            | `color: var(--lns-color-upgradeActive);`            |
| `c:discoveryBackground`      | `color: var(--lns-color-discoveryBackground);`      |
| `c:discoveryLightBackground` | `color: var(--lns-color-discoveryLightBackground);` |
| `c:discoveryTitle`           | `color: var(--lns-color-discoveryTitle);`           |
| `c:discoveryHighlight`       | `color: var(--lns-color-discoveryHighlight);`       |

---

## 🎨 Background Color Utilities

## Classes

| Class Name                     | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| `bgc:red`                      | `background-color: var(--lns-color-red);`                      |
| `bgc:redDark`                  | `background-color: var(--lns-color-redDark);`                  |
| `bgc:blurpleLight`             | `background-color: var(--lns-color-blurpleLight);`             |
| `bgc:blurpleMedium`            | `background-color: var(--lns-color-blurpleMedium);`            |
| `bgc:blurple`                  | `background-color: var(--lns-color-blurple);`                  |
| `bgc:blurpleDark`              | `background-color: var(--lns-color-blurpleDark);`              |
| `bgc:blurpleStrong`            | `background-color: var(--lns-color-blurpleStrong);`            |
| `bgc:offWhite`                 | `background-color: var(--lns-color-offWhite);`                 |
| `bgc:blueLight`                | `background-color: var(--lns-color-blueLight);`                |
| `bgc:blue`                     | `background-color: var(--lns-color-blue);`                     |
| `bgc:blueDark`                 | `background-color: var(--lns-color-blueDark);`                 |
| `bgc:magentaLight`             | `background-color: var(--lns-color-magentaLight);`             |
| `bgc:magenta`                  | `background-color: var(--lns-color-magenta);`                  |
| `bgc:magentaDark`              | `background-color: var(--lns-color-magentaDark);`              |
| `bgc:orangeLight`              | `background-color: var(--lns-color-orangeLight);`              |
| `bgc:orange`                   | `background-color: var(--lns-color-orange);`                   |
| `bgc:orangeDark`               | `background-color: var(--lns-color-orangeDark);`               |
| `bgc:tealLight`                | `background-color: var(--lns-color-tealLight);`                |
| `bgc:teal`                     | `background-color: var(--lns-color-teal);`                     |
| `bgc:tealDark`                 | `background-color: var(--lns-color-tealDark);`                 |
| `bgc:yellowLight`              | `background-color: var(--lns-color-yellowLight);`              |
| `bgc:yellow`                   | `background-color: var(--lns-color-yellow);`                   |
| `bgc:yellowDark`               | `background-color: var(--lns-color-yellowDark);`               |
| `bgc:grey8`                    | `background-color: var(--lns-color-grey8);`                    |
| `bgc:grey7`                    | `background-color: var(--lns-color-grey7);`                    |
| `bgc:grey6`                    | `background-color: var(--lns-color-grey6);`                    |
| `bgc:grey5`                    | `background-color: var(--lns-color-grey5);`                    |
| `bgc:grey4`                    | `background-color: var(--lns-color-grey4);`                    |
| `bgc:grey3`                    | `background-color: var(--lns-color-grey3);`                    |
| `bgc:grey2`                    | `background-color: var(--lns-color-grey2);`                    |
| `bgc:grey1`                    | `background-color: var(--lns-color-grey1);`                    |
| `bgc:white`                    | `background-color: var(--lns-color-white);`                    |
| `bgc:primary`                  | `background-color: var(--lns-color-primary);`                  |
| `bgc:primaryHover`             | `background-color: var(--lns-color-primaryHover);`             |
| `bgc:primaryActive`            | `background-color: var(--lns-color-primaryActive);`            |
| `bgc:body`                     | `background-color: var(--lns-color-body);`                     |
| `bgc:bodyDimmed`               | `background-color: var(--lns-color-bodyDimmed);`               |
| `bgc:bodyInverse`              | `background-color: var(--lns-color-bodyInverse);`              |
| `bgc:background`               | `background-color: var(--lns-color-background);`               |
| `bgc:backgroundHover`          | `background-color: var(--lns-color-backgroundHover);`          |
| `bgc:backgroundActive`         | `background-color: var(--lns-color-backgroundActive);`         |
| `bgc:backgroundSecondary`      | `background-color: var(--lns-color-backgroundSecondary);`      |
| `bgc:backgroundSecondary2`     | `background-color: var(--lns-color-backgroundSecondary2);`     |
| `bgc:backgroundNeutral`        | `background-color: var(--lns-color-backgroundNeutral);`        |
| `bgc:backgroundNeutralHover`   | `background-color: var(--lns-color-backgroundNeutralHover);`   |
| `bgc:backgroundNeutralActive`  | `background-color: var(--lns-color-backgroundNeutralActive);`  |
| `bgc:backgroundInverse`        | `background-color: var(--lns-color-backgroundInverse);`        |
| `bgc:focusRing`                | `background-color: var(--lns-color-focusRing);`                |
| `bgc:overlay`                  | `background-color: var(--lns-color-overlay);`                  |
| `bgc:overlayHover`             | `background-color: var(--lns-color-overlayHover);`             |
| `bgc:overlayActive`            | `background-color: var(--lns-color-overlayActive);`            |
| `bgc:backdrop`                 | `background-color: var(--lns-color-backdrop);`                 |
| `bgc:border`                   | `background-color: var(--lns-color-border);`                   |
| `bgc:record`                   | `background-color: var(--lns-color-record);`                   |
| `bgc:recordHover`              | `background-color: var(--lns-color-recordHover);`              |
| `bgc:recordActive`             | `background-color: var(--lns-color-recordActive);`             |
| `bgc:backdropDark`             | `background-color: var(--lns-color-backdropDark);`             |
| `bgc:backdropTwilight`         | `background-color: var(--lns-color-backdropTwilight);`         |
| `bgc:highlight`                | `background-color: var(--lns-color-highlight);`                |
| `bgc:highlightHover`           | `background-color: var(--lns-color-highlightHover);`           |
| `bgc:highlightActive`          | `background-color: var(--lns-color-highlightActive);`          |
| `bgc:warning`                  | `background-color: var(--lns-color-warning);`                  |
| `bgc:info`                     | `background-color: var(--lns-color-info);`                     |
| `bgc:success`                  | `background-color: var(--lns-color-success);`                  |
| `bgc:danger`                   | `background-color: var(--lns-color-danger);`                   |
| `bgc:dangerHover`              | `background-color: var(--lns-color-dangerHover);`              |
| `bgc:dangerActive`             | `background-color: var(--lns-color-dangerActive);`             |
| `bgc:disabledContent`          | `background-color: var(--lns-color-disabledContent);`          |
| `bgc:disabledBackground`       | `background-color: var(--lns-color-disabledBackground);`       |
| `bgc:formFieldBorder`          | `background-color: var(--lns-color-formFieldBorder);`          |
| `bgc:formFieldBackground`      | `background-color: var(--lns-color-formFieldBackground);`      |
| `bgc:buttonBorder`             | `background-color: var(--lns-color-buttonBorder);`             |
| `bgc:tabBackground`            | `background-color: var(--lns-color-tabBackground);`            |
| `bgc:upgrade`                  | `background-color: var(--lns-color-upgrade);`                  |
| `bgc:upgradeHover`             | `background-color: var(--lns-color-upgradeHover);`             |
| `bgc:upgradeActive`            | `background-color: var(--lns-color-upgradeActive);`            |
| `bgc:discoveryBackground`      | `background-color: var(--lns-color-discoveryBackground);`      |
| `bgc:discoveryLightBackground` | `background-color: var(--lns-color-discoveryLightBackground);` |
| `bgc:discoveryTitle`           | `background-color: var(--lns-color-discoveryTitle);`           |
| `bgc:discoveryHighlight`       | `background-color: var(--lns-color-discoveryHighlight);`       |

---

## 📝 Typography

# Font Size Declarations

| Class             | Declarations                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `text:small`      | font-size: var(--lns-fontSize-small);<br>line-height: var(--lns-lineHeight-small);<br>letter-spacing: var(--lns-letterSpacing-small);<br>font-weight: var(--lns-fontWeight-regular);             |
| `text:body-sm`    | font-size: var(--lns-fontSize-body-sm);<br>line-height: var(--lns-lineHeight-body-sm);<br>letter-spacing: var(--lns-letterSpacing-body-sm);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:medium`     | font-size: var(--lns-fontSize-medium);<br>line-height: var(--lns-lineHeight-medium);<br>letter-spacing: var(--lns-letterSpacing-medium);<br>font-weight: var(--lns-fontWeight-regular);          |
| `text:body-md`    | font-size: var(--lns-fontSize-body-md);<br>line-height: var(--lns-lineHeight-body-md);<br>letter-spacing: var(--lns-letterSpacing-body-md);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:large`      | font-size: var(--lns-fontSize-large);<br>line-height: var(--lns-lineHeight-large);<br>letter-spacing: var(--lns-letterSpacing-large);<br>font-weight: var(--lns-fontWeight-regular);             |
| `text:body-lg`    | font-size: var(--lns-fontSize-body-lg);<br>line-height: var(--lns-lineHeight-body-lg);<br>letter-spacing: var(--lns-letterSpacing-body-lg);<br>font-weight: var(--lns-fontWeight-regular);       |
| `text:xlarge`     | font-size: var(--lns-fontSize-xlarge);<br>line-height: var(--lns-lineHeight-xlarge);<br>letter-spacing: var(--lns-letterSpacing-xlarge);<br>font-weight: var(--lns-fontWeight-bold);             |
| `text:heading-sm` | font-size: var(--lns-fontSize-heading-sm);<br>line-height: var(--lns-lineHeight-heading-sm);<br>letter-spacing: var(--lns-letterSpacing-heading-sm);<br>font-weight: var(--lns-fontWeight-bold); |
| `text:xxlarge`    | font-size: var(--lns-fontSize-xxlarge);<br>line-height: var(--lns-lineHeight-xxlarge);<br>letter-spacing: var(--lns-letterSpacing-xxlarge);<br>font-weight: var(--lns-fontWeight-bold);          |
| `text:heading-md` | font-size: var(--lns-fontSize-heading-md);<br>line-height: var(--lns-lineHeight-heading-md);<br>letter-spacing: var(--lns-letterSpacing-heading-md);<br>font-weight: var(--lns-fontWeight-bold); |
| `text:xxxlarge`   | font-size: var(--lns-fontSize-xxxlarge);<br>line-height: var(--lns-lineHeight-xxxlarge);<br>letter-spacing: var(--lns-letterSpacing-xxxlarge);<br>font-weight: var(--lns-fontWeight-bold);       |
| `text:heading-lg` | font-size: var(--lns-fontSize-heading-lg);<br>line-height: var(--lns-lineHeight-heading-lg);<br>letter-spacing: var(--lns-letterSpacing-heading-lg);<br>font-weight: var(--lns-fontWeight-bold); |

# Font Weight Declarations

| Class            | Declarations                                |
| ---------------- | ------------------------------------------- |
| `weight:book`    | font-weight: var(--lns-fontWeight-book);    |
| `weight:regular` | font-weight: var(--lns-fontWeight-regular); |
| `weight:medium`  | font-weight: var(--lns-fontWeight-medium);  |
| `weight:bold`    | font-weight: var(--lns-fontWeight-bold);    |

## Variant Class Declarations

| Class          | Declarations                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| text:body      | font-size: var(--lns-fontSize-body-md);<br>line-height: var(--lns-lineHeight-body-md);<br>font-weight: var(--lns-fontWeight-regular);    |
| text:title     | font-size: var(--lns-fontSize-body-lg);<br>line-height: var(--lns-lineHeight-body-lg);<br>font-weight: var(--lns-fontWeight-bold);       |
| text:mainTitle | font-size: var(--lns-fontSize-heading-md);<br>line-height: var(--lns-lineHeight-heading-md);<br>font-weight: var(--lns-fontWeight-bold); |

## Alignment Class Declarations

| Class       | Declarations        |
| ----------- | ------------------- |
| text:left   | text-align: left;   |
| text:right  | text-align: right;  |
| text:center | text-align: center; |

## Shadow Class Declarations

| Class         | Declarations                          |
| ------------- | ------------------------------------- |
| shadow:small  | box-shadow: var(--lns-shadow-small);  |
| shadow:medium | box-shadow: var(--lns-shadow-medium); |
| shadow:large  | box-shadow: var(--lns-shadow-large);  |

## Radius Class Declarations

| Class         | Declarations                             |
| ------------- | ---------------------------------------- |
| radius:50     | border-radius: var(--lns-radius-50);     |
| radius:100    | border-radius: var(--lns-radius-100);    |
| radius:150    | border-radius: var(--lns-radius-150);    |
| radius:175    | border-radius: var(--lns-radius-175);    |
| radius:200    | border-radius: var(--lns-radius-200);    |
| radius:250    | border-radius: var(--lns-radius-250);    |
| radius:300    | border-radius: var(--lns-radius-300);    |
| radius:none   | border-radius: var(--lns-radius-none);   |
| radius:medium | border-radius: var(--lns-radius-medium); |
| radius:large  | border-radius: var(--lns-radius-large);  |
| radius:xlarge | border-radius: var(--lns-radius-xlarge); |
| radius:round  | border-radius: var(--lns-radius-round);  |
| radius:full   | border-radius: var(--lns-radius-full);   |

## Margin Class Declarations

| Class      | Declarations                             |
| ---------- | ---------------------------------------- |
| m:0        | margin: 0;                               |
| m:auto     | margin: auto;                            |
| m:xsmall   | margin: var(--lns-space-xsmall);         |
| m:small    | margin: var(--lns-space-small);          |
| m:medium   | margin: var(--lns-space-medium);         |
| m:large    | margin: var(--lns-space-large);          |
| m:xlarge   | margin: var(--lns-space-xlarge);         |
| m:xxlarge  | margin: var(--lns-space-xxlarge);        |
| mt:0       | margin-top: 0;                           |
| mt:auto    | margin-top: auto;                        |
| mt:xsmall  | margin-top: var(--lns-space-xsmall);     |
| mt:small   | margin-top: var(--lns-space-small);      |
| mt:medium  | margin-top: var(--lns-space-medium);     |
| mt:large   | margin-top: var(--lns-space-large);      |
| mt:xlarge  | margin-top: var(--lns-space-xlarge);     |
| mt:xxlarge | margin-top: var(--lns-space-xxlarge);    |
| mb:0       | margin-bottom: 0;                        |
| mb:auto    | margin-bottom: auto;                     |
| mb:xsmall  | margin-bottom: var(--lns-space-xsmall);  |
| mb:small   | margin-bottom: var(--lns-space-small);   |
| mb:medium  | margin-bottom: var(--lns-space-medium);  |
| mb:large   | margin-bottom: var(--lns-space-large);   |
| mb:xlarge  | margin-bottom: var(--lns-space-xlarge);  |
| mb:xxlarge | margin-bottom: var(--lns-space-xxlarge); |
| ml:0       | margin-left: 0;                          |
| ml:auto    | margin-left: auto;                       |
| ml:xsmall  | margin-left: var(--lns-space-xsmall);    |
| ml:small   | margin-left: var(--lns-space-small);     |
| ml:medium  | margin-left: var(--lns-space-medium);    |
| ml:large   | margin-left: var(--lns-space-large);     |
| ml:xlarge  | margin-left: var(--lns-space-xlarge);    |
| ml:xxlarge | margin-left: var(--lns-space-xxlarge);   |
| mr:0       | margin-right: 0;                         |
| mr:auto    | margin-right: auto;                      |
| mr:xsmall  | margin-right: var(--lns-space-xsmall);   |
| mr:small   | margin-right: var(--lns-space-small);    |
| mr:medium  | margin-right: var(--lns-space-medium);   |
| mr:large   | margin-right: var(--lns-space-large);    |
| mr:xlarge  | margin-right: var(--lns-space-xlarge);   |
| mr:xxlarge | margin-right: var(--lns-space-xxlarge);  |

## Horizontal and Vertical Margin Class Declarations

| Class      | Declarations                                                                   |
| ---------- | ------------------------------------------------------------------------------ |
| mx:0       | margin-left: 0; margin-right: 0;                                               |
| mx:auto    | margin-left: auto; margin-right: auto;                                         |
| mx:xsmall  | margin-left: var(--lns-space-xsmall); margin-right: var(--lns-space-xsmall);   |
| mx:small   | margin-left: var(--lns-space-small); margin-right: var(--lns-space-small);     |
| mx:medium  | margin-left: var(--lns-space-medium); margin-right: var(--lns-space-medium);   |
| mx:large   | margin-left: var(--lns-space-large); margin-right: var(--lns-space-large);     |
| mx:xlarge  | margin-left: var(--lns-space-xlarge); margin-right: var(--lns-space-xlarge);   |
| mx:xxlarge | margin-left: var(--lns-space-xxlarge); margin-right: var(--lns-space-xxlarge); |
| my:0       | margin-top: 0; margin-bottom: 0;                                               |
| my:auto    | margin-top: auto; margin-bottom: auto;                                         |
| my:xsmall  | margin-top: var(--lns-space-xsmall); margin-bottom: var(--lns-space-xsmall);   |
| my:small   | margin-top: var(--lns-space-small); margin-bottom: var(--lns-space-small);     |
| my:medium  | margin-top: var(--lns-space-medium); margin-bottom: var(--lns-space-medium);   |
| my:large   | margin-top: var(--lns-space-large); margin-bottom: var(--lns-space-large);     |
| my:xlarge  | margin-top: var(--lns-space-xlarge); margin-bottom: var(--lns-space-xlarge);   |
| my:xxlarge | margin-top: var(--lns-space-xxlarge); margin-bottom: var(--lns-space-xxlarge); |

## Padding Class Declarations

| Class      | Declarations                              |
| ---------- | ----------------------------------------- |
| p:0        | padding: 0;                               |
| p:xsmall   | padding: var(--lns-space-xsmall);         |
| p:small    | padding: var(--lns-space-small);          |
| p:medium   | padding: var(--lns-space-medium);         |
| p:large    | padding: var(--lns-space-large);          |
| p:xlarge   | padding: var(--lns-space-xlarge);         |
| p:xxlarge  | padding: var(--lns-space-xxlarge);        |
| pt:0       | padding-top: 0;                           |
| pt:xsmall  | padding-top: var(--lns-space-xsmall);     |
| pt:small   | padding-top: var(--lns-space-small);      |
| pt:medium  | padding-top: var(--lns-space-medium);     |
| pt:large   | padding-top: var(--lns-space-large);      |
| pt:xlarge  | padding-top: var(--lns-space-xlarge);     |
| pt:xxlarge | padding-top: var(--lns-space-xxlarge);    |
| pb:0       | padding-bottom: 0;                        |
| pb:xsmall  | padding-bottom: var(--lns-space-xsmall);  |
| pb:small   | padding-bottom: var(--lns-space-small);   |
| pb:medium  | padding-bottom: var(--lns-space-medium);  |
| pb:large   | padding-bottom: var(--lns-space-large);   |
| pb:xlarge  | padding-bottom: var(--lns-space-xlarge);  |
| pb:xxlarge | padding-bottom: var(--lns-space-xxlarge); |
| pl:0       | padding-left: 0;                          |
| pl:xsmall  | padding-left: var(--lns-space-xsmall);    |
| pl:small   | padding-left: var(--lns-space-small);     |
| pl:medium  | padding-left: var(--lns-space-medium);    |
| pl:large   | padding-left: var(--lns-space-large);     |
| pl:xlarge  | padding-left: var(--lns-space-xlarge);    |
| pl:xxlarge | padding-left: var(--lns-space-xxlarge);   |
| pr:0       | padding-right: 0;                         |
| pr:xsmall  | padding-right: var(--lns-space-xsmall);   |
| pr:small   | padding-right: var(--lns-space-small);    |
| pr:medium  | padding-right: var(--lns-space-medium);   |
| pr:large   | padding-right: var(--lns-space-large);    |
| pr:xlarge  | padding-right: var(--lns-space-xlarge);   |
| pr:xxlarge | padding-right: var(--lns-space-xxlarge);  |

## Horizontal and Vertical Padding Class Declarations

| Class      | Declarations                                                                     |
| ---------- | -------------------------------------------------------------------------------- |
| px:0       | padding-left: 0; padding-right: 0;                                               |
| px:xsmall  | padding-left: var(--lns-space-xsmall); padding-right: var(--lns-space-xsmall);   |
| px:small   | padding-left: var(--lns-space-small); padding-right: var(--lns-space-small);     |
| px:medium  | padding-left: var(--lns-space-medium); padding-right: var(--lns-space-medium);   |
| px:large   | padding-left: var(--lns-space-large); padding-right: var(--lns-space-large);     |
| px:xlarge  | padding-left: var(--lns-space-xlarge); padding-right: var(--lns-space-xlarge);   |
| px:xxlarge | padding-left: var(--lns-space-xxlarge); padding-right: var(--lns-space-xxlarge); |
| py:0       | padding-top: 0; padding-bottom: 0;                                               |
| py:xsmall  | padding-top: var(--lns-space-xsmall); padding-bottom: var(--lns-space-xsmall);   |
| py:small   | padding-top: var(--lns-space-small); padding-bottom: var(--lns-space-small);     |
| py:medium  | padding-top: var(--lns-space-medium); padding-bottom: var(--lns-space-medium);   |
| py:large   | padding-top: var(--lns-space-large); padding-bottom: var(--lns-space-large);     |
| py:xlarge  | padding-top: var(--lns-space-xlarge); padding-bottom: var(--lns-space-xlarge);   |
| py:xxlarge | padding-top: var(--lns-space-xxlarge); padding-bottom: var(--lns-space-xxlarge); |

## Width Class Declarations

| Class      | Declarations |
| ---------- | ------------ |
| width:auto | width: auto; |
| width:full | width: 100%; |
| width:0    | width: 0;    |

## Min Width Class Declarations

| Class      | Declarations  |
| ---------- | ------------- |
| minWidth:0 | min-width: 0; |

## Height Class Declarations

| Class       | Declarations  |
| ----------- | ------------- |
| height:auto | height: auto; |
| height:full | height: 100%; |
| height:0    | height: 0;    |

## Border Class Declarations

| Class        | Declarations                                      |
| ------------ | ------------------------------------------------- |
| border       | border: 1px solid var(--lns-color-border);        |
| borderTop    | border-top: 1px solid var(--lns-color-border);    |
| borderBottom | border-bottom: 1px solid var(--lns-color-border); |
| borderLeft   | border-left: 1px solid var(--lns-color-border);   |
| borderRight  | border-right: 1px solid var(--lns-color-border);  |

## Display Class Declarations

| Class       | Declarations           |
| ----------- | ---------------------- |
| inline      | display: inline;       |
| block       | display: block;        |
| flex        | display: flex;         |
| inlineBlock | display: inline-block; |
| inlineFlex  | display: inline-flex;  |
| none        | display: none;         |

## Flex

## Flex Wrap Class Declarations

| Class    | Declarations     |
| -------- | ---------------- |
| flexWrap | flex-wrap: wrap; |

## Flex Direction Class Declarations

| Class                | Declarations            |
| -------------------- | ----------------------- |
| flexDirection:column | flex-direction: column; |
| flexDirection:row    | flex-direction: row;    |

## Flex Item Alignment

| Class           | Declarations             |
| --------------- | ------------------------ |
| items:stretch   | align-items: stretch;    |
| items:center    | align-items: center;     |
| items:baseline  | align-items: baseline;   |
| items:flexStart | align-items: flex-start; |
| items:flexEnd   | align-items: flex-end;   |
| items:selfStart | align-items: self-start; |
| items:selfEnd   | align-items: self-end;   |

## Justify Content Classes

| Class                | Declarations                    |
| -------------------- | ------------------------------- |
| justify:flexStart    | justify-content: flex-start;    |
| justify:flexEnd      | justify-content: flex-end;      |
| justify:center       | justify-content: center;        |
| justify:spaceBetween | justify-content: space-between; |
| justify:spaceAround  | justify-content: space-around;  |
| justify:spaceEvenly  | justify-content: space-evenly;  |

## Flex Grow and Shrink Classes

| Class    | Declarations    |
| -------- | --------------- |
| grow:0   | flex-grow: 0;   |
| grow:1   | flex-grow: 1;   |
| shrink:0 | flex-shrink: 0; |
| shrink:1 | flex-shrink: 1; |

## Align Self Classes

| Class          | Declarations            |
| -------------- | ----------------------- |
| self:auto      | align-self: auto;       |
| self:flexStart | align-self: flex-start; |
| self:flexEnd   | align-self: flex-end;   |
| self:center    | align-self: center;     |
| self:baseline  | align-self: baseline;   |
| self:stretch   | align-self: stretch;    |

## Overflow Classes

| Class           | Declarations      |
| --------------- | ----------------- |
| overflow:hidden | overflow: hidden; |
| overflow:auto   | overflow: auto;   |

## Position Classes

| Class    | Declarations        |
| -------- | ------------------- |
| relative | position: relative; |
| absolute | position: absolute; |
| sticky   | position: sticky;   |
| fixed    | position: fixed;    |

## Sides Classes

| Class          | Declarations                      |
| -------------- | --------------------------------- |
| top:0          | top: 0;                           |
| top:auto       | top: auto;                        |
| top:xsmall     | top: var(--lns-space-xsmall);     |
| top:small      | top: var(--lns-space-small);      |
| top:medium     | top: var(--lns-space-medium);     |
| top:large      | top: var(--lns-space-large);      |
| top:xlarge     | top: var(--lns-space-xlarge);     |
| top:xxlarge    | top: var(--lns-space-xxlarge);    |
| bottom:0       | bottom: 0;                        |
| bottom:auto    | bottom: auto;                     |
| bottom:xsmall  | bottom: var(--lns-space-xsmall);  |
| bottom:small   | bottom: var(--lns-space-small);   |
| bottom:medium  | bottom: var(--lns-space-medium);  |
| bottom:large   | bottom: var(--lns-space-large);   |
| bottom:xlarge  | bottom: var(--lns-space-xlarge);  |
| bottom:xxlarge | bottom: var(--lns-space-xxlarge); |
| left:0         | left: 0;                          |
| left:auto      | left: auto;                       |
| left:xsmall    | left: var(--lns-space-xsmall);    |
| left:small     | left: var(--lns-space-small);     |
| left:medium    | left: var(--lns-space-medium);    |
| left:large     | left: var(--lns-space-large);     |
| left:xlarge    | left: var(--lns-space-xlarge);    |
| left:xxlarge   | left: var(--lns-space-xxlarge);   |
| right:0        | right: 0;                         |
| right:auto     | right: auto;                      |
| right:xsmall   | right: var(--lns-space-xsmall);   |
| right:small    | right: var(--lns-space-small);    |
| right:medium   | right: var(--lns-space-medium);   |
| right:large    | right: var(--lns-space-large);    |
| right:xlarge   | right: var(--lns-space-xlarge);   |
| right:xxlarge  | right: var(--lns-space-xxlarge);  |

## Ellipsis Class

| Class    | Declarations                                                          |
| -------- | --------------------------------------------------------------------- |
| ellipsis | overflow: hidden;<br>text-overflow: ellipsis;<br>white-space: nowrap; |

## Accessibility Class

| Class  | Declarations                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| srOnly | position: absolute;<br>width: 1px;<br>height: 1px;<br>padding: 0;<br>margin: -1px;<br>overflow: hidden;<br>clip: rect(0, 0, 0, 0);<br>white-space: nowrap;<br>border-width: 0; |

# Responsive CSS Utility Classes

Use any of the CSS utility classes with a breakpoint prefix for responsive design.

---

## Structure

`PREFIX-CLASS`

**Examples:**

- `md-c:red`
- `lg-c:primary`
- `sm-mr:medium`
- `md-mr:large`
- `xs-block`
- `sm-flex`

---

## Prefixes and Min Widths

| Prefix | Min Width                  | Description         |
| ------ | -------------------------- | ------------------- |
| `xs-`  | `@media (min-width: 31em)` | Extra small screens |
| `sm-`  | `@media (min-width: 48em)` | Small screens       |
| `md-`  | `@media (min-width: 64em)` | Medium screens      |
| `lg-`  | `@media (min-width: 75em)` | Large screens       |

---

## Usage Example

```html
<div className="mr:medium md-mr:large lg-mr:xlarge">demo</div>
```

## Demo

```tsx
<>
  <div className="mb:medium">
    <div className="block xsm-block sm-none">show on xsmall and smaller</div>
    <div className="none sm-block md-none">show only on small</div>
    <div className="none sm-none md-block lg-none">show only on medium</div>
    <div className="none sm-none md-none lg-block">show on large and up</div>
  </div>

  <div className="c:red xsm-c:red sm-c:grey5 px:xsmall border">
    red on xsmall and smaller
  </div>
  <div className="c:grey5 sm-c:red md-c:grey5 px:xsmall border">
    red only on small
  </div>
  <div className="c:grey5 sm-c:grey5 md-c:red lg-c:grey5 px:xsmall border">
    red only on medium
  </div>
  <div className="c:grey5 sm-c:grey5 md-c:grey5 lg-c:red px:xsmall border">
    red on large and larger
  </div>
</>
```

---

## Examples:

### Layer style

```tsx
<div className="flex">
  <div className="p:medium grow:1 mr:medium shadow:medium radius:medium text:center">
    A
  </div>
  <div className="border p:medium grow:1 c:bodyDimmed radius:medium bgc:backgroundHover text:center">
    B
  </div>
</div>
```

### Typography

```tsx
<>
  <div className="text:mainTitle mb:small">{demoText.title}</div>
  <div className="text:title mb:small">{demoText.medium}</div>
  <div className="text:body">{demoText.long}</div>
</>
```

### Layout

```tsx
<div className="flex items:center">
  <div className="border p:medium">A</div>
  <div className="border p:xlarge ml:small">B</div>
  <div className="border p:medium self:flexEnd mr:small ml:small">C</div>
  <div className="border p:small self:flexStart mr:small ml:small">D</div>
  <div className="border p:medium mr:small ml:small">E</div>
</div>
```

### Positioning

```tsx
<div className="flex">
  <div className="text:center relative width:full border p:large">
    Relative
    <div className="absolute right:0 top:0 border">
      <div className="p:small">Absolute</div>
    </div>
  </div>
</div>
```

### Ellipsis

```tsx
<>
  <div className="flex mb:medium">
    <div className="minWidth:0">
      <div className="p:small grow:1 border ellipsis">{demoText.long}</div>
    </div>
  </div>
  <div className="flex">
    <div className="p:small grow:1 border ellipsis">{demoText.long}</div>
  </div>
</>
```

### With components

```tsx
<div className="p:large shadow:medium radius:large">
  <div className="text:title mb:small">{demoText.medium}</div>
  <div className="text:body mb:large">{demoText.long}</div>
  <div className="flex flexWrap items:center">
    <Button className="mr:small">Cancel</Button>
    <Button variant="primary">Save</Button>
    <TextButton className="ml:auto">Options</TextButton>
  </div>
</div>
```

## 📦 Spacing

### Margin

Supports: `m:*`, `mt:*`, `mb:*`, `ml:*`, `mr:*`, `mx:*`, `my:*`  
Sizes: `0`, `auto`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`

| Class Name  | Description                       |
| ----------- | --------------------------------- |
| `m:0`       | `margin: 0;`                      |
| `m:auto`    | `margin: auto;`                   |
| `m:xsmall`  | `margin: var(--spacing-xsmall);`  |
| `m:small`   | `margin: var(--spacing-small);`   |
| `m:medium`  | `margin: var(--spacing-medium);`  |
| `m:large`   | `margin: var(--spacing-large);`   |
| `m:xlarge`  | `margin: var(--spacing-xlarge);`  |
| `m:xxlarge` | `margin: var(--spacing-xxlarge);` |

And for directional margins:

| Class Name  | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `mt:small`  | `margin-top: var(--spacing-small);`                                      |
| `mb:large`  | `margin-bottom: var(--spacing-large);`                                   |
| `ml:medium` | `margin-left: var(--spacing-medium);`                                    |
| `mr:xlarge` | `margin-right: var(--spacing-xlarge);`                                   |
| `mx:small`  | `margin-left: var(--spacing-small); margin-right: var(--spacing-small);` |
| `my:large`  | `margin-top: var(--spacing-large); margin-bottom: var(--spacing-large);` |

---

### Padding

Supports: `p:*`, `pt:*`, `pb:*`, `pl:*`, `pr:*`, `px:*`, `py:*`  
Sizes: `0`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`

| Class Name  | Description                        |
| ----------- | ---------------------------------- |
| `p:0`       | `padding: 0;`                      |
| `p:xsmall`  | `padding: var(--spacing-xsmall);`  |
| `p:small`   | `padding: var(--spacing-small);`   |
| `p:medium`  | `padding: var(--spacing-medium);`  |
| `p:large`   | `padding: var(--spacing-large);`   |
| `p:xlarge`  | `padding: var(--spacing-xlarge);`  |
| `p:xxlarge` | `padding: var(--spacing-xxlarge);` |

And for directional paddings:

| Class Name  | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `pt:small`  | `padding-top: var(--spacing-small);`                                       |
| `pb:large`  | `padding-bottom: var(--spacing-large);`                                    |
| `pl:medium` | `padding-left: var(--spacing-medium);`                                     |
| `pr:xlarge` | `padding-right: var(--spacing-xlarge);`                                    |
| `px:small`  | `padding-left: var(--spacing-small); padding-right: var(--spacing-small);` |
| `py:large`  | `padding-top: var(--spacing-large); padding-bottom: var(--spacing-large);` |

---

## 📐 Layout

### Display

| Class Name   | Description             |
| ------------ | ----------------------- |
| `block`      | `display: block;`       |
| `inline`     | `display: inline;`      |
| `flex`       | `display: flex;`        |
| `inlineFlex` | `display: inline-flex;` |
| `none`       | `display: none;`        |

---

## 📍 Position

| Class Name | Description           |
| ---------- | --------------------- |
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `sticky`   | `position: sticky;`   |
| `fixed`    | `position: fixed;`    |

---

## 📱 Responsive Breakpoints

| Prefix | Min Width                 | Description              |
| ------ | ------------------------- | ------------------------ |
| `xs-`  | `@media(min-width: 31em)` | Styles at 31em and above |
| `sm-`  | `@media(min-width: 48em)` | Styles at 48em and above |
| `md-`  | `@media(min-width: 64em)` | Styles at 64em and above |
| `lg-`  | `@media(min-width: 75em)` | Styles at 75em and above |

### Usage Example

```html
<div className="mr:medium md-mr:large lg-mr:xlarge">demo</div>
```

Structure:

    PREFIX-CLASS

Example:

    md-c:red
    lg-c:primary
    sm-mr:medium

# CSS Variables

## Usage Example

```css
.myClass {
  font-size: var(--lns-fontSize-medium);
  line-height: var(--lns-lineHeight-medium);
  box-shadow: var(--lns-shadow-medium);
  padding: var(--lns-space-large);
  color: var(--lns-color-primary);
}
```

## Spacing

- `--lns-space-xsmall`
- `--lns-space-small`
- `--lns-space-medium`
- `--lns-space-large`
- `--lns-space-xlarge`
- `--lns-space-xxlarge`

## Text

### Size

- `--lns-fontSize-small`
- `--lns-lineHeight-small`
- `--lns-letterSpacing-small`
- `--lns-fontSize-body-sm`
- `--lns-lineHeight-body-sm`
- `--lns-letterSpacing-body-sm`
- `--lns-fontSize-medium`
- `--lns-lineHeight-medium`
- `--lns-letterSpacing-medium`
- `--lns-fontSize-body-md`
- `--lns-lineHeight-body-md`
- `--lns-letterSpacing-body-md`
- `--lns-fontSize-large`
- `--lns-lineHeight-large`
- `--lns-letterSpacing-large`
- `--lns-fontSize-body-lg`
- `--lns-lineHeight-body-lg`
- `--lns-letterSpacing-body-lg`
- `--lns-fontSize-xlarge`
- `--lns-lineHeight-xlarge`
- `--lns-letterSpacing-xlarge`
- `--lns-fontSize-heading-sm`
- `--lns-lineHeight-heading-sm`
- `--lns-letterSpacing-heading-sm`
- `--lns-fontSize-xxlarge`
- `--lns-lineHeight-xxlarge`
- `--lns-letterSpacing-xxlarge`
- `--lns-fontSize-heading-md`
- `--lns-lineHeight-heading-md`
- `--lns-letterSpacing-heading-md`
- `---lns-fontSize-xxxlarge`
- `--lns-lineHeight-xxxlarge`
- `--lns-letterSpacing-xxxlarge`
- `--lns-fontSize-heading-lg`
- `--lns-lineHeight-heading-lg`
- `--lns-letterSpacing-heading-lg`

## Weight

- `--lns-fontWeight-book`
- `--lns-fontWeight-regular`
- `--lns-fontWeight-medium`
- `--lns-fontWeight-bold`

## Font Setting

- `--lns-fontSetting-normal`
- `--lns-fontSetting-tnum`

## Radius

- `--lns-radius-50`
- `--lns-radius-100`
- `--lns-radius-150`
- `--lns-radius-175`
- `--lns-radius-200`
- `--lns-radius-250`
- `--lns-radius-300`
- `--lns-radius-none`
- `--lns-radius-medium`
- `--lns-radius-large`
- `--lns-radius-xlarge`
- `--lns-radius-round`
- `--lns-radius-full`

## Shadow

- `--lns-shadow-small`
- `--lns-shadow-medium`
- `--lns-shadow-large`

## Form field

- `--lns-formFieldBorderWidth`
- `--lns-formFieldBorderWidthFocus`
- `--lns-formFieldHeight`
- `--lns-formFieldRadius`
- `--lns-formFieldHorizontalPadding`
- `--lns-formFieldBorderShadow`
- `--lns-formFieldBorderShadowFocus`
- `--lns-formFieldBorderShadowError`

## Gradients

- `--lns-gradient-ai-primary`
- `--lns-gradient-ai-secondary`

# Responsive

## Prefer algorithmic layouts

Lens encourages building responsive layouts with less code following the algorithmic layout approach. What does this mean? Let's look at the traditional method and how we can improve it.

---

## The problem with media queries

The traditional approach for building responsive layouts is to write imperative / case-specific rules with media queries. This method requires us to specify the layout behavior manually for specific screen sizes, which results in a design that covers only specific screen sizes while ignoring everything in-between. It also forces us to write more code with multiple adjustments per screen size.

---

## Algorithmic layouts — the browser doing the job for us

## We can give some guidelines to the browser and let it arrange the elements depending on the available space. CSS flexbox and grid accept this type of guidelines. For example, we can tell flexbox to wrap its children when there is not enough horizontal space, or we can tell Grid to fit as many columns as possible in a container.

## Algorithmic layouts with Lens layout components

This approach can be used with Lens layout components, specifically:

- **Arrange** (based on grid)
- **Split** (based on flexbox)

---

## Examples

### Arrange Example

```jsx
<DemoBox>
  <Arrange gap="medium" columns="repeat(auto-fit, minmax(10rem, 1fr))">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

### Split Example

```jsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={20} minWidth={20}>
      <DemoBox padding="xsmall">Column</DemoBox>
    </SplitSection>

    <SplitSection grow={100} basis={40}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```

---

# Responsive Props

Some layout component props accept responsive values. These values are mapped to `min-width` breakpoints.

This method is preferred when more fine-tuning is needed than the algorithmic layout approach can offer. Check the component's Props section to see which props allow responsive values.

---

## Example: Change `gap` and `columns` based on screen size

```jsx
<DemoBox>
  <Arrange
    gap={{
      default: 'xsmall',
      xsmall: 'small',
      small: 'medium',
      medium: 'large',
      large: 'xlarge',
    }}
    columns={{
      default: '1fr',
      medium: ['2fr', '1fr', '1fr'],
    }}
  >
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Custom Breakpoints

The responsive prop can be used with custom breakpoints:

```jsx
<DemoBox>
  <Arrange
    gap={{
      default: 'xsmall',
      '50em': 'medium', // output: @media(min-width: 50em) {...}
    }}
  >
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

# Responsive Text

Use the Text `sizeMinMax` prop for responsive text sizes.

The size grows from the minimum to maximum value while resizing the browser between the minimum and maximum breakpoints.

## Example

```jsx
<>
  <Text sizeMinMax={['medium', 'xlarge']} fontWeight="bold">
    Resize the window
  </Text>

  <Text sizeMinMax={['small', 'large']}>{demoText.short}</Text>
</>
```

---

# Additional Tools

These tools are useful when modifying props that are not responsive.

⚠️ Keep in mind:

- These tools use JavaScript.
- They re-render nested components.
- In some cases, this might compromise performance.
- Use them when performance is not a concern.

---

## useMedia Hook

```jsx
;() => {
  const buttonSize = useMedia(
    ['(min-width: 1200px)', '(min-width: 1000px)', '(min-width: 800px)'],
    ['large', 'medium', 'small'],
    'small',
  )

  return (
    <Button
      size={buttonSize}
      icon={buttonSize === 'large' && <SvgArrowForward />}
    >
      {buttonSize}
    </Button>
  )
}
```

---

## Media Component

```jsx
<Media
  queries={['(min-width: 1200px)', '(min-width: 1000px)', '(min-width: 800px)']}
  values={['large', 'medium', 'small']}
  defaultValue="small"
>
  {(buttonSize) => (
    <Button
      size={buttonSize}
      icon={buttonSize === 'large' && <SvgArrowForward />}
    >
      {buttonSize}
    </Button>
  )}
</Media>
```
