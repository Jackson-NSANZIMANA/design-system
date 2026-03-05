# 40.Spacer

`Spacer` is a utility component used to create consistent spacing between elements in your layout. It works by adding margin around its children and supports responsive values, semantic spacing, and custom CSS measurements.

---

## Usage

```javascript
import { Spacer } from '@loomhq/lens'
;<Spacer bottom="medium">Content</Spacer>
```

---

## Spacing

Use the `left`, `right`, `top`, `bottom`, `x`, `y`, or `all` props to add spacing around components. These props accept three types of values:

### Semantic Spacing Value (Recommended)

```javascript
<Spacer left="small" right="large">
  Content
</Spacer>
```

| Name    | Unit | rem  | px  |
| ------- | ---- | ---- | --- |
| xsmall  | 0.5  | 0.25 | 4   |
| small   | 1    | 0.5  | 8   |
| medium  | 2    | 1    | 16  |
| large   | 3    | 1.5  | 24  |
| xlarge  | 5    | 2.5  | 40  |
| xxlarge | 8    | 4    | 64  |

---

### Number Value

Number values are multiplied by 8px and converted to rems automatically:

```javascript
<Spacer left={1} right={3}>
  Content
</Spacer>
```

- `left={1}` → 8px → 0.5rem
- `right={3}` → 24px → 1.5rem

---

### String Value

Any valid CSS measurement is allowed, e.g., `1rem`, `50%`, `10vw`:

```javascript
<Spacer right="1rem">Content</Spacer>
```

---

## Responsive Props

You can pass an object to specify different spacing at different breakpoints:

```javascript
<Spacer
  bottom={{
    default: 0,
    xsmall: 'small',
    small: 'medium',
    medium: 'xlarge',
    large: 'xxlarge',
  }}
>
  <DemoBox width={12} height={4} />
</Spacer>
```

### Available Breakpoints

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

#### Example

```javascript
<>
  <Spacer
    bottom={{
      default: 0,
      xsmall: 'small',
      small: 'medium',
      medium: 'xlarge',
      large: 'xxlarge',
    }}
  >
    <DemoBox width={12} height={4} />
  </Spacer>
  <Spacer>
    <DemoBox width={12} height={4} />
  </Spacer>
</>
```

---

## Props

| Name     | Type                                | Default | Notes                                       |
| -------- | ----------------------------------- | ------- | ------------------------------------------- |
| all      | ResponsiveType (`string \| number`) | —       | Sets spacing on all sides                   |
| x        | ResponsiveType (`string \| number`) | —       | Sets horizontal spacing (left + right)      |
| y        | ResponsiveType (`string \| number`) | —       | Sets vertical spacing (top + bottom)        |
| left     | ResponsiveType (`string \| number`) | —       | Spacing on the left                         |
| right    | ResponsiveType (`string \| number`) | —       | Spacing on the right                        |
| top      | ResponsiveType (`string \| number`) | —       | Spacing on the top                          |
| bottom   | ResponsiveType (`string \| number`) | —       | Spacing on the bottom                       |
| isInline | boolean                             | false   | Render as `inline-block` instead of `block` |
| children | React.ReactNode                     | —       | Content to render inside the spacer         |

---

## Guidance

- Use `Spacer` for consistent layout spacing instead of custom CSS margins.
- Prefer semantic values for maintainability and alignment with design tokens.
- Use responsive props for spacing adjustments across different screen sizes.
- Combine `x`/`y` or `all` for concise syntax when spacing multiple sides.

