# 39.Popover

`Popover` is a versatile component used to display floating content relative to a trigger element. It can open on click, hover, or programmatically, and supports custom placement, offsets, transitions, and boundary constraints.

---

## Usage

```javascript
import { Popover } from '@loomhq/lens'
;<Popover isOpen placement="rightCenter" content={<div>Popover</div>}>
  Content
</Popover>
```

---

## Placement

`Popover` supports multiple placements relative to the trigger element:

- Top: `topLeft`, `topCenter`, `topRight`
- Bottom: `bottomLeft`, `bottomCenter`, `bottomRight`
- Left: `leftTop`, `leftCenter`, `leftBottom`
- Right: `rightTop`, `rightCenter`, `rightBottom`

```javascript
const [placement, setPlacement] = React.useState({
  value: 'rightCenter',
  title: 'rightCenter',
})
```

---

## Offset

Control the distance between the Popover and its trigger:

```javascript
<Popover
  isOpen
  offset={2} // distance from trigger
  placement="rightCenter"
  content={<DemoBox padding="xsmall">Popover</DemoBox>}
>
  <DemoBox padding="large">Trigger</DemoBox>
</Popover>
```

---

## Open Modes

### Open on Click

```javascript
const [isOpen, setIsOpen] = React.useState(false)
const ref = React.useRef()
useOnClickOutside(ref, () => setIsOpen(false))

<Container width="fit-content">
  <div ref={ref}>
    <Popover
      isOpen={isOpen}
      placement="bottomCenter"
      content={<DemoBox padding="xsmall">Popover</DemoBox>}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>Open Popover</Button>
    </Popover>
  </div>
</Container>
```

### Open on Hover

```javascript
const [isOpen, setIsOpen] = React.useState(false)

<Container width="fit-content">
  <div
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <Popover
      isOpen={isOpen}
      placement="bottomCenter"
      content={<DemoBox padding="xsmall">Popover</DemoBox>}
    >
      Hover me
    </Popover>
  </div>
</Container>
```

---

## Transition

Animate the opening using `transitionDuration` and `transitionDelay`:

```javascript
<Popover
  isOpen={isOpen}
  placement="bottomCenter"
  content={<DemoBox padding="xsmall">Popover</DemoBox>}
  transitionDuration={200}
  transitionDelay={70}
>
  <Button onClick={() => setIsOpen(!isOpen)}>Open Popover</Button>
</Popover>
```

---

## Root ID

Render the Popover into a specific container:

```javascript
<Popover
  rootId="popovers-root"
  isOpen
  placement="rightCenter"
  content={<DemoBox padding="xsmall">Popover</DemoBox>}
>
  <DemoBox padding="large">Trigger</DemoBox>
</Popover>
```

---

## Boundary Element

Limit the Popover’s overflow by specifying a boundary element:

```javascript
const boundaryRef = React.useRef()

<div ref={boundaryRef} style={{ border: '1px solid', maxWidth: 400, height: 120 }}>
  <Popover
    isOpen
    placement="bottomCenter"
    boundaryElement={boundaryRef.current}
    content={<DemoBox padding="small">Popover with boundary</DemoBox>}
  >
    <DemoBox padding="xsmall">Trigger</DemoBox>
  </Popover>
</div>
```

---

## Popover Card Example

```javascript
const [isOpen, setIsOpen] = React.useState(false)
const ref = React.useRef()
useOnClickOutside(ref, () => setIsOpen(false))

<Container width="fit-content">
  <div ref={ref}>
    <Popover
      isOpen={isOpen}
      placement="bottomCenter"
      content={
        <Container
          contentColor="body"
          backgroundColor="overlay"
          borderSide="all"
          radius="medium"
          shadow="medium"
          padding="medium"
          width={38}
        >
          <Arrange gap="small">
            {demoText.short}
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Arrange>
        </Container>
      }
    >
      <Button onClick={() => setIsOpen(!isOpen)}>Open Popover</Button>
    </Popover>
  </div>
</Container>
```

---

## Props

| Name               | Type                | Default       | Notes                                           |
| ------------------ | ------------------- | ------------- | ----------------------------------------------- |
| offset             | number              | 0.5           | Distance from trigger element                   |
| boundaryOffset     | number              | 0.5           | Horizontal/vertical offset relative to boundary |
| zIndex             | number \| string    | 500           | Z-index of Popover                              |
| childrenZIndex     | number              | 1             | Z-index of trigger element                      |
| placement          | string              | `'topCenter'` | Popover placement relative to trigger           |
| boundaryElement    | `'body'` \| Element | `'body'`      | Element to constrain overflow                   |
| transitionDuration | number              | 0             | Duration of opening animation in ms             |
| transitionDelay    | number              | 0             | Delay before opening animation in ms            |
| children           | `React.ReactNode`   |               | Trigger element                                 |
| content            | `React.ReactNode`   |               | Popover content                                 |
| isOpen             | boolean             |               | Controls Popover visibility                     |
| rootId             | string              |               | ID of container to render Popover into          |

---

## Guidance

- Use `Popover` for context menus, tooltips, or extra information.
- Always manage `isOpen` state to control visibility.
- For long content, consider wrapping content in a `Container` with padding and shadow.
- Use `boundaryElement` to prevent Popover from overflowing parent containers.

