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
- ## Radius

# Radii

Radii are the rounded corners in components. Lens components have built-in corner radius. Radii ties closely to the size of the component — as size increases, the radius value should too. Please adhere to using the radius token values for defining the corner roundness of a design element, such as frames, groups, or shapes.

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

Our system is built around a base unit of 8px. The 8px base unit also forms the basis of our token names. Every token is a multiple of the base unit with the number suffix representing the percentage of the base unit.

For example:

100 is 100% of the size of the base unit, therefore represents 8px.

200 is 200% of the size of the base unit, therefore represents 16px.

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
