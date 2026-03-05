# 2.Button

## Usage

```jsx
import { Button } from '@loomhq/lens'
;<Button>Button</Button>
```

## Sizes

- **Medium** is the default size and should cover most cases.
- Use **large** size in special cases to highlight the button.
- Use **small** in tight spaces.

## Variants

- **neutral** is the default variant and should cover most cases.
- Use **neutralSecondary** for approved uses only [pending].
- Use **primary** to highlight the most important action.
- Use **record** to indicate a recording action.
- Use **upgrade** to indicate a plan upgrade.
- Use **danger** for destructive actions.
- Use **ai** for actions related to AI.

```jsx
<Split gap="small">
  <Button variant="neutral">Neutral</Button>
  <Button variant="neutralSecondary">Neutral Secondary</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="record">Record</Button>
  <Button variant="upgrade">Upgrade</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="ai">Loom AI</Button>
</Split>
```

## 1. With Icon

### One Icon

```jsx
<Arrange gap="small" columns="1fr">
  <Arrange gap="small">
    <Button iconBefore={<SvgRecord />} size="small">
      Small
    </Button>
    <Button iconAfter={<SvgRecord />} size="small">
      Small
    </Button>
  </Arrange>
  <Arrange gap="small">
    <Button iconBefore={<SvgRecord />}>Medium</Button>
    <Button iconAfter={<SvgRecord />}>Medium</Button>
  </Arrange>
  <Arrange gap="small">
    <Button iconBefore={<SvgRecord />} size="large">
      Large
    </Button>
    <Button iconAfter={<SvgRecord />} size="large">
      Large
    </Button>
  </Arrange>
</Arrange>
```

### Two Icons

When using two icons, reserve **iconAfter** for icons that provide a clear affordance (like arrows or chevrons).

```jsx
<Arrange gap="medium" rows={['auto']} justifyItems="start">
  <Button
    variant="primary"
    iconBefore={<SvgConfluenceNeutral />}
    iconAfter={<SvgExternalLink />}
    size="small"
  >
    Open in Confluence
  </Button>
  <Button iconBefore={<SvgWaveform />} iconAfter={<SvgCollapseReplies />}>
    Hide Waveform
  </Button>
  <Button
    variant="record"
    iconBefore={<SvgRecord />}
    iconAfter={<SvgArrowRight />}
    size="large"
  >
    Record and save
  </Button>
</Arrange>
```

## 2. With Logo

Use the **neutral** variant for buttons with logos.

```jsx
<Arrange gap="small">
  <Button logoSrc={exampleLogo.src}>Button</Button>
  <Button logoSrc={exampleLogo.src} />
</Arrange>
```

## 3. Floating

For buttons floating over content, use **isFloating**. The neutral variant uses solid backgrounds.

```jsx
<Arrange gap="small">
  <Button isFloating>Jump to Latest</Button>
  <Button variant="primary" isFloating>
    Jump to Latest
  </Button>
</Arrange>
```

## 4. With Loader

```jsx
<Button hasLoader>Button</Button>
```

## 5.Width Options

- **auto** (default): inline-flex properties.
- **full**: expands to 100% of parent container.
- **maxContent**: expands to fit content, preventing word wrap and overflow (additional styling may be needed).

## 6.Disabled

```jsx
<Button isDisabled>Can't touch this</Button>
```

### 6.1 Aria Disabled

Use **ariaDisabled** for assistive technologies when the disabled state should be conveyed.

```jsx
<Tooltip content="Upgrade to premium to access this feature" tabIndex={-1}>
  <Button isDisabled ariaDisabled>
    Premium button
  </Button>
</Tooltip>
```

## 7.RefHandler

Pass a function to **refHandler** to access the button's ref.

```jsx
const ref = useRef()

const refHandler = (newRef) => {
  ref.current = newRef
  console.log('Assigned ref to button', { newRef })
}

return (
  <>
    <Button refHandler={refHandler}>A button with ref value</Button>
  </>
)
```

## 8.HTML Tag

Change the wrapper HTML tag with **htmlTag**. Use **download** to specify resources for download.

```jsx
<Arrange gap="small">
  <Button>Rendering {'<button>'} tag</Button>
  <Button htmlTag="a">Rendering {'<a>'} tag</Button>
  <Button
    htmlTag="a"
    download="thumbnail.png"
    aria-label="Download thumbnail (PNG, 200kb)"
  >
    Download thumbnail
  </Button>
</Arrange>
```

## 9.UFO Press Tracing

Use **interactionName** to trace press events within UFO.

```jsx
<Button interactionName="press-tracing-button">I'm using Press Tracing!</Button>
```

## Props

| Name            | Type                                                                                                       | Default     | Description                            |
| --------------- | ---------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| size            | `'small' \| 'medium' \| 'large'`                                                                           | `'medium'`  | Size of the button                     |
| variant         | `'neutral' \| 'neutralSecondary' \| 'primary' \| 'secondary' \| 'record' \| 'upgrade' \| 'danger' \| 'ai'` | `'neutral'` | Variant style of the button            |
| width           | `'auto' \| 'full' \| 'maxContent'`                                                                         | `'auto'`    | Width of the button                    |
| iconPosition    | `'left' \| 'right'`                                                                                        | `'left'`    | Position of icons                      |
| htmlTag         | `'button' \| 'a'`                                                                                          | `'button'`  | HTML element to render as              |
| children        | `React.ReactNode`                                                                                          | —           | Child nodes or content                 |
| isDisabled      | `boolean`                                                                                                  | —           | Disabled state                         |
| ariaDisabled    | `boolean`                                                                                                  | —           | ARIA disabled state for assistive tech |
| hasFullWidth    | `boolean`                                                                                                  | —           | Whether button takes full width        |
| icon            | `React.ReactNode`                                                                                          | —           | Icon element                           |
| iconBefore      | `React.ReactNode`                                                                                          | —           | Icon before text                       |
| iconAfter       | `React.ReactNode`                                                                                          | —           | Icon after text                        |
| logoSrc         | `string`                                                                                                   | —           | Logo image source                      |
| onClick         | `React.MouseEventHandler<HTMLButtonElement>`                                                               | —           | Click event handler                    |
| hasLoader       | `boolean`                                                                                                  | —           | Show loader on button                  |
| isFloating      | `boolean`                                                                                                  | —           | Floating over content                  |
| href            | `string`                                                                                                   | —           | URL for link                           |
| download        | `string`                                                                                                   | —           | Download file name or URL              |
| target          | `string`                                                                                                   | —           | Target attribute for links             |
| type            | `string`                                                                                                   | —           | Button type (e.g., submit, button)     |
| refHandler      | `(ref: HTMLButtonElement) => void`                                                                         | —           | Function to handle ref assignment      |
| interactionName | `string`                                                                                                   | —           | Name for press tracing                 |
| className       | `string`                                                                                                   | —           | Additional CSS classes                 |
| style           | `any`                                                                                                      | —           | Inline styles                          |

