# 33.Waveform Loader

## Usage Guidelines

## Usage

```javascript
import { WaveformLoader } from '@loomhq/lens'
;<WaveformLoader />
```

---

## Speeds

Use **fast** for quick loading tasks such as generating a title.  
Use **slow** for continuous loading tasks  such as for transcript processing.

```javascript
<Arrange gap="medium">
  <WaveformLoader speed="fast" />
  <WaveformLoader speed="slow" />
</Arrange>
```

---

## Color

Use one of the **palette colors**.

```javascript
<WaveformLoader color="ai-primary" />
```

---

## Props

| Name  | Type               | Default    |
| ----- | ------------------ | ---------- |
| size  | literal            | `'medium'` |
| speed | `'fast' \| 'slow'` | `'fast'`   |
| color | string             | `'body'`   |

