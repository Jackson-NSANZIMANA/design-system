# CSS Variables

> ## ⚠️ Agent Instructions
>Inject Lens CSS variables and utilities at app startup using getThemeStylesString + getAllCssVarsString + cssUtilities.
>Do not create or import .css, .scss, or .module.css files in this repo.
> **NEVER** use `var(--lns-*)` inside `style={{}}` inline styles.
> Inline styles are always forbidden. CSS modules are the correct container.
>Prefer Lens component props and Lens utility classes for styling.
>Direct var(--lns-*) usage is allowed only in Lens component props that accept raw CSS strings (for example, Container backgroundImage for gradients).
> This file lists ALL variables including deprecated ones.
> Deprecated variables are marked — do not use them in new code.

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


/* ❌ FORBIDDEN — never use var(--lns-*) inside style={{}} */
<div style={{ fontSize: 'var(--lns-fontSize-body-md)' }}>
<div style={{ color: 'var(--lns-color-primary)' }}>
```

## Spacing

```text

--lns-space-xsmall
--lns-space-small
--lns-space-medium
--lns-space-large
--lns-space-xlarge
--lns-space-xxlarge
```

## Text Size — Deprecation Table

> ⚠️ Both deprecated and current variable names exist in the compiled CSS.
Always use the current column. Never use the deprecated column. **Note:**
 ---lns-fontSize-xxxlarge in older docs has a three-dash typo — never copy it.

|❌ Deprecated — do not use |✅ Current — use this|
|-----|----|
--lns-fontSize-small| --lns-fontSize-body-sm|
--lns-lineHeight-small |--lns-lineHeight-body-sm
--lns-letterSpacing-small| --lns-letterSpacing-body-sm
--lns-fontSize-medium |--lns-fontSize-body-md
--lns-lineHeight-medium |--lns-lineHeight-body-md
--lns-letterSpacing-medium |--lns-letterSpacing-body-md
--lns-fontSize-large |--lns-fontSize-body-lg
--lns-lineHeight-large |--lns-lineHeight-body-lg
--lns-letterSpacing-large |--lns-letterSpacing-body-lg
--lns-fontSize-xlarge |--lns-fontSize-heading-sm
--lns-lineHeight-xlarge |--lns-lineHeight-heading-sm
--lns-letterSpacing-xlarge |--lns-letterSpacing-heading-sm
--lns-fontSize-xxlarge |--lns-fontSize-heading-md
--lns-lineHeight-xxlarge |--lns-lineHeight-heading-md
--lns-letterSpacing-xxlarge| --lns-letterSpacing-heading-md
---lns-fontSize-xxxlarge ⚠️ TYPO (3 dashes) |--lns-fontSize-heading-lg
--lns-lineHeight-xxxlarge |--lns-lineHeight-heading-lg
--lns-letterSpacing-xxxlarge |--lns-letterSpacing-heading-lg

### Current variables — copy-safe list:

```text

--lns-fontSize-body-sm      --lns-lineHeight-body-sm      --lns-letterSpacing-body-sm
--lns-fontSize-body-md      --lns-lineHeight-body-md      --lns-letterSpacing-body-md
--lns-fontSize-body-lg      --lns-lineHeight-body-lg      --lns-letterSpacing-body-lg
--lns-fontSize-heading-sm   --lns-lineHeight-heading-sm   --lns-letterSpacing-heading-sm
--lns-fontSize-heading-md   --lns-lineHeight-heading-md   --lns-letterSpacing-heading-md
--lns-fontSize-heading-lg   --lns-lineHeight-heading-lg   --lns-letterSpacing-heading-lg
```

### Font Weight

```text

--lns-fontWeight-book       (being renamed to regular — functionally equivalent)
--lns-fontWeight-regular
--lns-fontWeight-medium
--lns-fontWeight-bold
```

### Font Setting

```text

--lns-fontSetting-normal
--lns-fontSetting-tnum
```

### Radius

> [!Info]
> Both numeric and semantic names exist.
> Both are valid.
> Prefer semantic for components, numeric for precise layout control.

```text

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

### Shadow

```text

--lns-shadow-small
--lns-shadow-medium
--lns-shadow-large
```

### Gradients

⚠️ Gradients have no utility class in `css-utilities.md`.
The **ONLY** valid way to apply a gradient is via a CSS module.
**NEVER** use gradient variables inside style={{}}.

```tsx
// ✅ CORRECT — Lens prop with CSS variable string
<Container backgroundImage="var(--lns-gradient-ai-primary)" />


// ❌ FORBIDDEN — inline styles always
<div style={{ background: 'var(--lns-gradient-ai-primary)' }} />
```

#### Available:

```text

--lns-gradient-ai-primary
--lns-gradient-ai-secondary
```

### Form Field

"These are used internally by Lens form components.
Do not use in custom components — use `<TextInput>`,` <Select>`,` <Textarea>` instead."

```text

--lns-formFieldBorderWidth
--lns-formFieldBorderWidthFocus
--lns-formFieldHeight
--lns-formFieldRadius
--lns-formFieldHorizontalPadding
--lns-formFieldBorderShadow
--lns-formFieldBorderShadowFocus
--lns-formFieldBorderShadowError
```

### Unit

```text

--lns-unit    (default: 8px — base unit for all spacing calculations)
```
