# 15.Modal

## Usage Guidelines

---

## Basic Usage

```tsx
import { Modal } from '@loomhq/lens'
;<Modal title="Title">Content</Modal>
```

---

## Accessibility

Please verify that your implementation supports the following accessibility features and that no modifications negate them.

## Modal Should:

- Be focusable and togglable (open/close) by every input device (mouse, keyboard, switch, etc.)
- Have a clear trigger to open (e.g. `<Button type="button" />`)
- Have a clear trigger to close (X button is provided by default)
- Prevent background body scroll when open
- Default `ariaModal` is `true`, limiting navigation to modal content

> If you set `ariaModal={false}`, understand the accessibility implications.

---

## Keyboard Navigability

When Modal is open:

- **Autofocus** → Focus shifts to first focusable element (usually close button)
- **Tab / Shift + Tab** → Navigate within modal
- **Esc** → Close modal
- **Trap Focus** → Focus loops within modal
- **Return Focus** → Focus returns to trigger element on close

---

## Modal with All Elements

```tsx
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
        Open Modal
      </Button>

      <Modal
        mainButton={<Button variant="primary">Confirm</Button>}
        secondaryButton={<Button>Cancel</Button>}
        alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
        title={demoText.short}
        isOpen={isOpen}
        onCloseClick={() => setIsOpen(!isOpen)}
      >
        {demoText.medium}
      </Modal>
    </>
  )
}
```

---

## With Dividers

```tsx
<Modal
  hasDividers
  mainButton={<Button variant="primary">Confirm</Button>}
  secondaryButton={<Button>Cancel</Button>}
  alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
  title={demoText.short}
  isOpen={isOpen}
  onCloseClick={() => setIsOpen(!isOpen)}
>
  {demoText.alphabet.map((letter, index) => (
    <Container
      paddingTop="small"
      paddingBottom="small"
      borderSide="bottom"
      key={index}
    >
      {letter}
    </Container>
  ))}
</Modal>
```

---

## With Custom Max Height

```tsx
<Modal
  maxHeight="80vh"
  hasDividers
  mainButton={<Button variant="primary">Confirm</Button>}
  secondaryButton={<Button>Cancel</Button>}
  alternativeButton={<TextButton icon={<SvgAdd />}>Add</TextButton>}
  title={demoText.short}
  isOpen={isOpen}
  onCloseClick={() => setIsOpen(!isOpen)}
>
  {...content}
</Modal>
```

---

## Bottom Alignment (Best for Mobile)

```tsx
<Modal
  placement="bottom"
  maxWidth="unset"
  isOpen={isOpen}
  onCloseClick={() => setIsOpen(!isOpen)}
>
  <Container maxWidth={60} width="100%" marginX="auto">
    {...content}
  </Container>
</Modal>
```

---

## Custom Modal with Bottom Drawer (Scrollable Section)

```tsx
<Backdrop isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
  <ModalCard
    onCloseClick={() => setIsOpen(!isOpen)}
    isOpen={isOpen}
    maxWidth={72}
  >
    <Arrange rows={['1fr', 'auto']}>
      <Container overflow="auto" maxHeight="100%" padding="xlarge">
        <Text size="large">{demoText.veryLong}</Text>
      </Container>

      <Container backgroundColor="highlight" padding="xlarge">
        {demoText.medium}
      </Container>
    </Arrange>
  </ModalCard>
</Backdrop>
```

---

## Modal with No Close X Button (Use Sparingly)

⚠️ Only for mandatory blocking flows.

```tsx
<ModalCard
  onCloseClick={() => setIsOpen(!isOpen)}
  isOpen={isOpen}
  maxWidth={72}
  removeClose={true}
>
  <Container padding="xlarge">
    <Text size="large">Mandatory blocking flow content.</Text>
  </Container>

  <Container backgroundColor="highlight" padding="xlarge">
    {showLoader && <Loader />}
    {!showLoader && (
      <Button variant="primary" width="full" onClick={() => setIsOpen(false)}>
        Close
      </Button>
    )}
  </Container>
</ModalCard>
```

> You MUST always provide a way for users to proceed or close the modal.

---

## Controlling Initial Focus

By default, focus moves to the first focusable element.

## Disable Auto Focus (Use Sparingly)

```tsx
<Modal
  initialFocus={false}
  title="Seasonal Launch"
  isOpen={isOpen}
  onCloseClick={() => setIsOpen(!isOpen)}
>
  <Text>Modal opens without auto focusing the close button.</Text>
</Modal>
```

---

## Focus Specific Element

```tsx
const inputRef = React.useRef(null)

<Modal
  initialFocus={() => inputRef.current}
  title="Enter your information"
  isOpen={isOpen}
  onCloseClick={() => setIsOpen(!isOpen)}
>
  <TextInput
    ref={inputRef}
    placeholder="Start typing here..."
    label="Name"
  />
</Modal>
```

---

## Props

| Name         | Type                                                                                                                             | Default     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| maxHeight    | `string`                                                                                                                         | `'70vh'`    |
| maxWidth     | `number \| string`                                                                                                               | `60`        |
| placement    | `string`                                                                                                                         | `'center'`  |
| zIndex       | `number`                                                                                                                         | `1000`      |
| ariaModal    | `boolean`                                                                                                                        | `true`      |
| initialFocus | `HTMLElement \| SVGElement \| string \| (() => HTMLElement \| SVGElement \| string \| false \| undefined) \| false \| undefined` | `undefined` |

---

## ModalCard

| Name          | Type                                                                                                                             | Default     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| maxWidth      | `number \| string`                                                                                                               | `60`        |
| maxHeight     | `string`                                                                                                                         | `'70vh'`    |
| placement     | `string`                                                                                                                         | `'center'`  |
| closeOnEscape | `boolean`                                                                                                                        | `true`      |
| initialFocus  | `HTMLElement \| SVGElement \| string \| (() => HTMLElement \| SVGElement \| string \| false \| undefined) \| false \| undefined` | `undefined` |

