# 31.LogoLoader

## Usage Guidelines

### Purpose

Create a **branded loading moment** using the Loom logo.

For example, this component is used in `<RecordedByLoom>` at the end of certain videos.

⚠️ **Use sparingly.**  
If you need a general-purpose loading indicator, use **`<Loader>`** instead.

---

## Usage

```javascript
import { LogoLoader } from '@loomhq/lens'
;<LogoLoader />
```

---

## Animation

By default, the animation runs **indefinitely**.

If the animation should run **only once**, set `animation-iteration-count` to `1`.

```javascript
<>
  <LogoLoader animation="spin 2s 1 steps(49) forwards .5s" />
  <LogoLoader animation="spin 2s 1 steps(43) forwards" brand="ai" />
</>
```

---

## Brand

You can switch between **Loom branding** and **AI branding**.

```javascript
<>
  <LogoLoader animation="spin 2s infinite steps(49) forwards" />
  <LogoLoader animation="spin 2s infinite steps(43) alternate" brand="ai" />
</>
```

---

## Size

```javascript
<LogoLoader animation="spin 2s infinite steps(49) forwards" size="small" />
```

---

## Props

| Name      | Type                  | Default                                 |
| --------- | --------------------- | --------------------------------------- |
| animation | string                | `'spin 2s infinite steps(49) forwards'` |
| brand     | `'loom' \| 'ai'`      | `'loom'`                                |
| size      | `'small' \| 'medium'` | `'medium'`                              |

---

