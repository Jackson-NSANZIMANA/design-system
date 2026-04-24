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

> ⚠️ **Demonstration code only.** The example below uses `style={{}}` inline
> styles to render token values dynamically for documentation purposes.
> This is introspection code — it displays the token system as data.
> **Never use `style={{}}` in production code.**
> Use Lens component props or CSS utility classes instead.


> ⚠️ **Demonstration code only.** The example below uses `style={{}}` inline
> styles to introspect and display the token values dynamically. This pattern
> is used here because it is rendering the token system itself as data.
> **Do NOT use `style={{}}` in production code.** Use Lens component props
> or CSS utility classes instead.

```jsx
// THIS IS DEMONSTRATION/INTROSPECTION CODE ONLY
// Do not replicate the style={{}} pattern in production
<Arrange gap="medium" columns="1fr">
  {Object.entries(spaces).map(([key, value], index) => (
    <Arrange gap="medium" key={index}>
      <Container minWidth="xxlarge">
        <div
          style={{
            fontSize: 'var(--lns-fontSize-small)',    // demo only
            lineHeight: 'var(--lns-space-xsmall)',    // demo only
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

# CSS helpers
- CSS utilities
- CSS variables

---
