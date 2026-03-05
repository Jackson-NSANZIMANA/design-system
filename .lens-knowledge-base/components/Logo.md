# 13.Logo

## Usage Guidelines

The `Logo` component displays Loom branding with flexible options for different use cases and contexts.

---

## Basic Import & Usage

```tsx
import { Logo } from '@loomhq/lens'
;<Logo brand="product" maxWidth={13} />
```

---

## Key Props

### brand

Choose the appropriate logo style:

- `"product"` – Blue logo for in-app UI (recommended)
- `"marketing"` – For marketing materials, external content, signup and login
- `"attributed"` – When Atlassian attribution is required
- `"ai"` – For AI-related features and content
- `"apptile"` & `"loom"` – Legacy variants (being deprecated)

### variant

Control which part of the logo to show:

- `"combined"` – Full logo with symbol + wordmark (default)
- `"symbol"` – Icon only
- `"wordmark"` – Text only

### maxWidth

Set maximum width in theme units (e.g., `13`, `6`).

---

## Best Practices

- Use `brand="product"` for most in-app interfaces
- Reserve `brand="marketing"` for external-facing content
- Choose appropriate sizes with `maxWidth` to fit your layout
- See New Brands for current recommended options

---

## New Brands

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo brand="product" maxWidth={13} symbolColor="blue" />
  <Logo brand="marketing" maxWidth={13} symbolColor="blue" />
  <Logo brand="attributed" maxWidth={13} symbolColor="blue" />
</Arrange>
```

> Note: The logos above preview our upcoming blue branding on our new variants. Once this color rollout is complete, or if you are included on the feature flag, you won't need to specify the `symbolColor` prop — simply use:
>
> `<Logo brand="product" | "marketing" | "attributed" />`

### Post Rollout / Feature Flag Enabled

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo brand="product" maxWidth={13} />
  <Logo brand="marketing" maxWidth={13} />
  <Logo brand="attributed" maxWidth={13} />
</Arrange>
```

---

## Deprecated Brands

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo brand="apptile" maxWidth={13} />
  <Logo brand="loom" maxWidth={13} />
  <Logo brand="ai" maxWidth={13} />
</Arrange>
```

> Note: Blurple Loom logo variants are being deprecated. Avoid building with these components. Coordinate via `#loom-design-cohesion` Slack channel for proper implementation.

---

## New Variants

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo variant="wordmark" brand="product" maxWidth={13} symbolColor="blue" />
  <Logo variant="symbol" brand="product" maxWidth={6} symbolColor="blue" />
</Arrange>
```

> After rollout, `symbolColor` will no longer be required.

### Post Rollout Implementation

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo variant="wordmark" brand="product" maxWidth={13} />
  <Logo variant="symbol" brand="product" maxWidth={6} />
</Arrange>
```

---

## Deprecated Variants

```tsx
<Arrange gap="xlarge" alignment="center">
  <Logo variant="symbol" maxWidth={8} brand="apptile" />
  <Logo variant="symbol" maxWidth={8} />
  <Logo variant="symbol" maxWidth={8} brand="ai" />
  <Logo variant="wordmark" brand="product" maxWidth={13} />
  <Logo variant="wordmark" maxWidth={13} brand="ai" />
</Arrange>
```

---

### Size

```tsx
<Arrange gap="medium">
  <Logo variant="symbol" maxWidth={12} />
  <Logo variant="symbol" maxWidth={6} />
  <Logo variant="symbol" maxWidth={3} />
</Arrange>
```

---

### Custom ID

> Note: This section currently only affects the AI symbol.

When multiple elements on the same page reference `radialGradient` with the same id, later references may be invalidated. Assign a custom ID to resolve this.

```tsx
<Logo maxWidth={6} variant="symbol" brand="ai" customId="aiPanelLogo" />
```

---

## Custom Colors

Symbol and wordmark colors can be assigned independently using `symbolColor` and `wordmarkColor`.

```tsx
<Arrange gap="xlarge">
  <Logo
    maxWidth={12}
    symbolColor="body"
    wordmarkColor="orange"
    brand="product"
  />
  <Logo
    maxWidth={12}
    symbolColor="body"
    wordmarkColor="orange"
    brand="product"
    variant="wordmark"
  />
  <Logo
    maxWidth={12}
    symbolColor="body"
    wordmarkColor="orange"
    brand="attributed"
  />
</Arrange>
```

---

## Props

| name          | type                                                                      | default      |
| ------------- | ------------------------------------------------------------------------- | ------------ |
| variant       | `'combined' \| 'symbol' \| 'wordmark'`                                    | `'combined'` |
| wordmarkColor | `string`                                                                  | `'body'`     |
| brand         | `'loom' \| 'ai' \| 'apptile' \| 'product' \| 'marketing' \| 'attributed'` | `'product'`  |
| customId      | `string`                                                                  | `''`         |
| maxWidth      | `number \| string`                                                        | —            |
| symbolColor   | `string`                                                                  | —            |

