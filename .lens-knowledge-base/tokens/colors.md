# Styles 
# CSS Colors — Lens Design System
> ## ⚠️ Agent Instructions: How To Apply Colors
>
> Reading this file gives you color token names and values.
> To actually USE a color, choose the right tool:
>
> | Situation | Correct tool | Example |
> |---|---|---|
> | Color on a Lens component | Component `color` prop | `<Text color="bodyDimmed">` |
> | Background on a Lens component | Component `backgroundColor` prop | `<Container backgroundColor="backgroundSecondary">` |
> | Text color on a raw `<div>` | Lens utility class | `<div className="c:bodyDimmed">` |
> | Background on a raw `<div>` | Lens utility class | `<div className="bgc:backgroundSecondary">` |
> | Color via CSS variables | Reference only | `color: var(--lns-color-bodyDimmed);` |
> | Gradient via CSS variables | Reference only | `background: var(--lns-gradient-ai-primary);` |
>
> **NEVER:** `style={{ color: 'var(--lns-color-primary)' }}` — inline styles forbidden.
> **NEVER:** `style={{ color: '#1868db' }}` — hardcoded hex values forbidden.
> **ALWAYS:** Prefer semantic colors over greyscale or base colors.
> **ALWAYS:** Semantic colors adapt to light/dark theme automatically.

> **ALWAYS:** Use Lens component props or Lens utility classes.

---

## Color Priority Order

```
1. Semantic colors (body, primary, border, background...)
   → Theme-aware, adapts to light/dark automatically ← ALWAYS PREFER THESE

2. Greyscale colors (grey1 through grey8, white)
   → Static, do not adapt to theme
   → Use only when a specific grey is required by design

3. Base colors (red, blue, teal, orange...)
   → Brand palette, static
   → Use only for specific brand/status applications

4. Hardcoded hex/rgb values
   → FORBIDDEN. Always use a token.
   
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
