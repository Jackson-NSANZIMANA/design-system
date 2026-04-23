# CSS Variables

> ⚠️ **Agent instructions:** This file lists ALL CSS variables including
> deprecated ones. Deprecated variables are marked with `[DEPRECATED]`.
> Do NOT use deprecated variables in new code. Use the current equivalent.
>
> ⚠️ **Usage rule:** CSS variables are for use ONLY inside `.module.css` files.
> NEVER use `var(--lns-*)` inside `style={{}}` inline styles in React.
> Inline styles are forbidden. CSS modules are the correct container.

## Usage Example

```css
/* ✅ CORRECT — inside a .module.css file */
.myClass {
  font-size: var(--lns-fontSize-body-md);
  line-height: var(--lns-lineHeight-body-md);
  box-shadow: var(--lns-shadow-medium);
  padding: var(--lns-space-large);
  color: var(--lns-color-primary);
}
```

```tsx
/* ❌ FORBIDDEN — never use var(--lns-*) inside style={{}} */
<div style={{ fontSize: 'var(--lns-fontSize-body-md)' }}>
```

---

## Spacing

- `--lns-space-xsmall`
- `--lns-space-small`
- `--lns-space-medium`
- `--lns-space-large`
- `--lns-space-xlarge`
- `--lns-space-xxlarge`

---

## Text Size

> ⚠️ Both deprecated and current variable names are listed.
> Always use the **current** name (right column).

| Deprecated [DO NOT USE] | Current [USE THIS] |
|---|---|
| `--lns-fontSize-small` | `--lns-fontSize-body-sm` |
| `--lns-lineHeight-small` | `--lns-lineHeight-body-sm` |
| `--lns-letterSpacing-small` | `--lns-letterSpacing-body-sm` |
| `--lns-fontSize-medium` | `--lns-fontSize-body-md` |
| `--lns-lineHeight-medium` | `--lns-lineHeight-body-md` |
| `--lns-letterSpacing-medium` | `--lns-letterSpacing-body-md` |
| `--lns-fontSize-large` | `--lns-fontSize-body-lg` |
| `--lns-lineHeight-large` | `--lns-lineHeight-body-lg` |
| `--lns-letterSpacing-large` | `--lns-letterSpacing-body-lg` |
| `--lns-fontSize-xlarge` | `--lns-fontSize-heading-sm` |
| `--lns-lineHeight-xlarge` | `--lns-lineHeight-heading-sm` |
| `--lns-letterSpacing-xlarge` | `--lns-letterSpacing-heading-sm` |
| `--lns-fontSize-xxlarge` | `--lns-fontSize-heading-md` |
| `--lns-lineHeight-xxlarge` | `--lns-lineHeight-heading-md` |
| `--lns-letterSpacing-xxlarge` | `--lns-letterSpacing-heading-md` |
| `---lns-fontSize-xxxlarge` ⚠️ TYPO | `--lns-fontSize-heading-lg` |
| `--lns-lineHeight-xxxlarge` | `--lns-lineHeight-heading-lg` |
| `--lns-letterSpacing-xxxlarge` | `--lns-letterSpacing-heading-lg` |

**Current variables only (copy-safe list):**
```
--lns-fontSize-body-sm
--lns-lineHeight-body-sm
--lns-letterSpacing-body-sm
--lns-fontSize-body-md
--lns-lineHeight-body-md
--lns-letterSpacing-body-md
--lns-fontSize-body-lg
--lns-lineHeight-body-lg
--lns-letterSpacing-body-lg
--lns-fontSize-heading-sm
--lns-lineHeight-heading-sm
--lns-letterSpacing-heading-sm
--lns-fontSize-heading-md
--lns-lineHeight-heading-md
--lns-letterSpacing-heading-md
--lns-fontSize-heading-lg
--lns-lineHeight-heading-lg
--lns-letterSpacing-heading-lg
```

---

## Font Weight

- `--lns-fontWeight-book` ← [being renamed to regular, functionally equivalent]
- `--lns-fontWeight-regular`
- `--lns-fontWeight-medium`
- `--lns-fontWeight-bold`

---

## Font Setting

- `--lns-fontSetting-normal`
- `--lns-fontSetting-tnum`

---

## Radius

> Both numeric and semantic names exist. Prefer numeric for precision,
> semantic when the component's size determines the appropriate radius.

```
--lns-radius-none
--lns-radius-50
--lns-radius-100
--lns-radius-150
--lns-radius-175
--lns-radius-200
--lns-radius-250
--lns-radius-300
--lns-radius-round
--lns-radius-medium
--lns-radius-large
--lns-radius-xlarge
--lns-radius-full
```

---

## Shadow

- `--lns-shadow-small`
- `--lns-shadow-medium`
- `--lns-shadow-large`

---

## Gradients

> ⚠️ Gradients have NO utility class equivalent in css-utilities.md.
> The ONLY way to apply a gradient is via a CSS module.
> NEVER use gradient variables inside style={{}}.

```css
/* ✅ CORRECT — CSS module only */
.aiContainer {
  background: var(--lns-gradient-ai-primary);
}

.aiBackground {
  background: var(--lns-gradient-ai-secondary);
}
```

```tsx
/* ❌ FORBIDDEN */
<div style={{ background: 'var(--lns-gradient-ai-primary)' }}>
```

Available gradient variables:
- `--lns-gradient-ai-primary`
- `--lns-gradient-ai-secondary`

---

## Form Field

These variables are used internally by Lens form components.
Do not use them in custom components — use `<TextInput>`,
`<Select>`, `<Textarea>` and their props instead.

```
--lns-formFieldBorderWidth
--lns-formFieldBorderWidthFocus
--lns-formFieldHeight
--lns-formFieldRadius
--lns-formFieldHorizontalPadding
--lns-formFieldBorderShadow
--lns-formFieldBorderShadowFocus
--lns-formFieldBorderShadowError
```