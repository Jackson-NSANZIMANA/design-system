# 29.Tooltip

## Usage Guidelines

## Usage

```javascript
import { Tooltip } from '@loomhq/lens'
;<Tooltip content="Non-natively focusable child" placement="topCenter">
  <Text color="orange" fontWeight="bold" isInline>
    Hover or focus me
  </Text>
</Tooltip>
```

---

## Accessibility

Please verify that your component supports the following accessibility features and that none of your modifications remove them.

## Tooltip Should

- Have a **clear trigger** to open:
  - Natively focusable elements (e.g. `<Button type="button">`)
  - Non-natively focusable elements (e.g. `<Text>`)

- Be **renderable and togglable by every input device**
  - mouse
  - keyboard
  - switch devices

- Be **helper UI only**, not a container for critical information.

Ask yourself:

> If the user cannot access the tooltip, are we hiding critical information that could impact billing or product usage?

If yes, render that information elsewhere.

---

## Open Behavior

Tooltip opens:

- On **hover** of the trigger
- On **focus** of the trigger

## Close Behavior

Tooltip closes:

- When hover leaves the trigger
- On **blur** of the trigger

---

## Screenreader Support

Screenreader support is currently **Work In Progress (WIP)**.

In-code comments outline the remaining work with **Linear ticket references**.

If a tooltip contains **focusable elements** such as a `Link` or `Button`, you should:

1. Provide a `tooltipId`
2. Reference it with `aria-describedby`

### Example

```javascript
<Tooltip
  content="The username can be changed later under user settings"
  tooltipId="my-tooltip"
  tabIndex={-1}
>
  <input aria-describedby="my-tooltip" aria-label="Enter A Username" />
</Tooltip>
```

---

## Gotchas

### Focusable children

Define:

```javascript
tabIndex={-1}
```

if your children contain focusable elements.

---

### Conditional rendering

The tooltip **will not render if**:

```javascript
content={null}
```

Use this when conditionally rendering a tooltip.

If the content is **always null**, remove the tooltip entirely.

---

### Nested focus elements

`focus` and `blur` **do not bubble**.

If you nest multiple focusable elements inside a tooltip, you may encounter issues.

Recommendation:

- Wrap the tooltip **around the most precise trigger element**
- Avoid nesting focusable items.

---

## Placement

Available placement options:

- `topLeft`
- `topCenter`
- `topRight`
- `bottomLeft`
- `bottomCenter`
- `bottomRight`
- `leftTop`
- `leftCenter`
- `leftBottom`
- `rightTop`
- `rightCenter`
- `rightBottom`

### Example

```javascript
<Arrange gap="medium" columns="repeat(3, 1fr)">
  {[
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'leftTop',
    'leftCenter',
    'leftBottom',
    'rightTop',
    'rightCenter',
    'rightBottom',
  ].map((placement, index) => (
    <Tooltip content="I'm here" placement={placement} key={index}>
      <Container backgroundColor="overlay" borderSide="all" padding="medium">
        <Text alignment="center">{placement}</Text>
      </Container>
    </Tooltip>
  ))}
</Arrange>
```

---

## Max Width

```javascript
<Tooltip maxWidth={40} content={demoText.medium}>
  <div>trigger</div>
</Tooltip>
```

---

## Trigger Offset

Controls spacing between tooltip and trigger.

```javascript
<Arrange gap="large">
  <Tooltip content="4px" triggerOffset={4}>
    <div>Offset from trigger 4px</div>
  </Tooltip>

  <Tooltip content="32px" triggerOffset={32}>
    <div>Offset from trigger 32px</div>
  </Tooltip>
</Arrange>
```

---

## Keep Open

When `keepOpen` is `true`, the tooltip stays open while hovered.

By default, tooltips remain open when **keyboard focused**.

```javascript
<Tooltip keepOpen content="Hover me and I will stay open">
  <div>Keep my tooltip open</div>
</Tooltip>
```

---

## Disabled Tooltip

When `isDisabled` is `true`, the tooltip will **never display**.

```javascript
;() => {
  const [isDisabled, setDisabled] = React.useState(true)

  return (
    <>
      <Tooltip isDisabled={isDisabled} content="Tooltip is enabled">
        <div>Hover or focus to test the tooltip</div>
      </Tooltip>

      <Button onClick={() => setDisabled((s) => !s)} variant="primary">
        {isDisabled ? 'Enable' : 'Disable'}
      </Button>
    </>
  )
}
```

---

## Inline vs Block

```javascript
<>
  <Tooltip isInline content="Content">
    <Container borderSide="all" borderColor="red">
      Wrap children with display: inline-block
    </Container>
  </Tooltip>

  <Tooltip isInline={false} content="Content">
    <Container borderSide="all" borderColor="red">
      Wrap children with display: block
    </Container>
  </Tooltip>
</>
```

---

## Delay

Controls delay before showing tooltip on hover.

Focus behavior **always shows immediately**.

```javascript
<Arrange gap="medium">
  <Tooltip content="Content">
    <Container backgroundColor="overlay" borderSide="all" padding="medium">
      <Text alignment="center">Immediate (default)</Text>
    </Container>
  </Tooltip>

  <Tooltip content="Content" delay="long">
    <Container backgroundColor="overlay" borderSide="all" padding="medium">
      <Text alignment="center">Long Delay (800ms)</Text>
    </Container>
  </Tooltip>
</Arrange>
```

---

## Tooltip With Keyboard Shortcut

```javascript
<Arrange gap="small">
  <Tooltip content="Play" shortcut={['K']} tabIndex={-1}>
    <IconButton altText="Play" icon={<SvgPlay />} />
  </Tooltip>

  <Tooltip content="New" shortcut={['⌘', 'N']} tabIndex={-1}>
    <IconButton altText="New" icon={<SvgAdd />} />
  </Tooltip>

  <Tooltip content="Transcript" shortcut={['shift', 'T']} tabIndex={-1}>
    <IconButton altText="Transcript" icon={<SvgNotes />} />
  </Tooltip>
</Arrange>
```

---

## ARIA Live Regions

Use when tooltip content should be **read by screen readers**.

`aria-live` is set to **polite** because tooltip information is non-critical.

```javascript
<Tooltip
  content="See how Loom can save you time at work."
  tabIndex={-1}
  ariaLive={true}
>
  <IconButton altText="More information" icon={<SvgInfo />} />
</Tooltip>
```

---

## Container

Specify where the tooltip is rendered in the DOM.

Useful when working with **Shadow DOM**.

```javascript
<Tooltip
  content="Content"
  container={() => document.querySelector('#renderContainer')}
>
  Trigger
</Tooltip>
```

---

## TooltipBox

`Tooltip` internally uses `TooltipBox`.

Use it if you need to **build custom tooltip behavior**.

```javascript
<TooltipBox maxWidth={30}>TooltipBox content</TooltipBox>
```

---

## Examples

## IconButton with Tooltip (Natively Focusable Child)

To prevent nested tabbing issues, assign:

```javascript
tabIndex={-1}
```

```javascript
<>
  <Tooltip tabIndex={-1} content="Delete">
    <IconButton icon={<SvgTrash />} altText="Trash" />
  </Tooltip>

  <Tooltip tabIndex={-1} content="Add">
    <IconButton icon={<SvgAdd />} altText="Add" />
  </Tooltip>

  <Tooltip tabIndex={-1} content="Close">
    <IconButton icon={<SvgClose />} altText="Close" />
  </Tooltip>
</>
```

---

## Props

## Tooltip

| Name          | Type                              | Default   |
| ------------- | --------------------------------- | --------- |
| ariaLive      | boolean                           | false     |
| placement     | placement options                 | topCenter |
| keepOpen      | boolean                           | true      |
| triggerOffset | number                            | 4         |
| maxWidth      | Size \| []                        | 26        |
| isInline      | boolean                           | true      |
| tabIndex      | number                            | 0         |
| zIndex        | number                            | 1100      |
| verticalAlign | string                            | middle    |
| delay         | `'immediate' \| 'long'`           | immediate |
| children      | React.ReactNode                   | —         |
| container     | HTMLElement \| function \| string | —         |
| content       | React.ReactNode                   | —         |
| shortcut      | string[]                          | —         |
| isDisabled    | boolean                           | —         |
| tooltipId     | string                            | —         |

---

## TooltipBox

| Name         | Type                    | Default |
| ------------ | ----------------------- | ------- |
| children     | React.ReactNode         | —       |
| maxWidth     | Size \| []              | —       |
| onMouseEnter | React.ReactEventHandler | —       |
| onMouseLeave | React.ReactEventHandler | —       |
| layerProps   | any                     | —       |
| zIndex       | number                  | —       |

