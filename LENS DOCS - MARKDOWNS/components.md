# Component definition

Before adding a new component to the design system consider the definition of the component.

- **Components are widely used.** When adding a new component make sure it's used across designs or it will be in the future.

- **A component should solve as few problems as possible.** The simplicity of a component makes it reusable and easy to maintain. Each component owns a specific problem and because of that we can easily test and find issues.

- **Components should be constructed with the system variables.** The system variables (or styles) contain rules about variables like typography and color that result in a specific visual language. System variables tie components together visually and make them feel like part of the same family.

- **Components are layout agnostic.** A component can't predict where it will be used so it should be flexible to adapt to different layouts.

- **Components are content agnostic.** Some components contain text and it can be different depending on the context. These components also can be translated into other languages.

## Designing custom elements

Sometimes components don't fit a specific use case and a custom element is needed. You can design custom UI elements that are not in the components library but still follow the Lens design language.

## How to design a custom UI element

- Use Lens styles to define typography, color and layer styles like border radii and shadows.

- Use Lens spacing rules to space out elements. If possible, use one of the predefined spacing values, if not, use a value divisible by 8px.

### Example case

In this example, we need to design an integration card. We can use Lens text sizes and colors to define the typography. For the card, we can use Lens border-radius and shadow styles. In this case, all spacing can be solved with Lens predefined spacing rules.

The result is a one-off element for a specific use case but it feels like part of Lens design language.

## Components list :

# 1.Avatar

## Usage

```js
import { Avatar } from '@loomhq/lens'
;<Avatar letter="A" />
```

## Sizes

```tsx
<Arrange gap="small">
  <Avatar imageSrc={exampleAvatarLogo.src} size={4} />
  <Avatar imageSrc={exampleAvatarLogo.src} size={7} />
  <Avatar letter="A" size={4} />
  <Avatar letter="A" size={7} />
</Arrange>
```

### With an image

```js
<Arrange gap="small">
  <Avatar imageSrc={exampleAvatarLogo.src} />
  <Avatar imageSrc={exampleAvatarLogoAlt.src} />
  <Avatar imageSrc={exampleAvatarPerson.src} />
</Arrange>
```

### With letter

```js
<Arrange gap="small">
  <Avatar letter="A" />
  <Avatar letter="B" />
  <Avatar letter="C" />
</Arrange>
```

### With children

```js
<Avatar>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="128" height="128" fill="white" />
    <rect width="128" height="128" fill="black" />
    <rect x="12" y="12" width="104" height="104" fill="white" />
    <rect x="40" y="40" width="48" height="48" rx="24" fill="black" />
  </svg>
</Avatar>
```

### With alternative text

If the avatar is not purely decorative, add an image text alternative for accessibility reasons.

```jsx
<Arrange gap="small">
  <Avatar altText={demoText.name} imageSrc={exampleAvatarPerson.src} />
  <Avatar altText={demoText.name} letter="S" />
</Arrange>
```

### Theme Color

Add a color combination for your Avatar

```jsx
<Arrange gap="small">
  <Avatar letter="A" />
  <Avatar themeColor="orange" letter="B" />
</Arrange>
```

## Props

| Props              | Type                                  | Default |
| ------------------ | ------------------------------------- | ------- |
| altText            | string                                | ''      |
| size               | string / number                       | 4       |
| themeColor         | 'orange' / 'blue' / 'yellow' / 'teal' | 'blue'  |
| letter             | string                                |         |
| imageSrc           | string                                |         |
| children           | React.ReactNode                       |         |
| height             | number                                |         |
| width              | number                                |         |
| hasBackgroundColor | boolean                               |         |
| backgroundColor    | string                                |         |

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

# 3.Checkbox

## Usage

```tsx
import { Checkbox } from '@loomhq/lens'
;<Checkbox />
```

## States

- Use **isChecked** to check the checkbox.
- Use **isDisabled** to disable the checkbox.
- Use **isIndeterminate** for indeterminate checkbox.

## Example

```jsx
<Arrange gap="medium">
  <Checkbox />
  <Checkbox isChecked onChange={() => console.log()} />
  <Checkbox isIndeterminate onChange={() => console.log()} />
  <Checkbox isDisabled />
  <Checkbox isDisabled isChecked />
  <Checkbox isDisabled isIndeterminate />
</Arrange>
```

## With label

```jsx
<FormField direction="row" label="Choose me" labelFor="exampleCheckboxId">
  <Checkbox id="exampleCheckboxId" />
</FormField>
```

## Forwarding refs

Use the **ref** prop to access the DOM node.

```jsx
;() => {
  const ref = useRef(null)
  const onClick = () => (ref.current.checked = true)
  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onClick}>Toggle</Button>
      </Spacer>
      <Checkbox ref={ref} />
    </>
  )
}
```

## Props

| Name            | Type                        | Default |
| --------------- | --------------------------- | ------- |
| isChecked       | `'boolean'`                 |         |
| isIndeterminate | `'boolean'`                 |         |
| isDisabled      | `'boolean'`                 |         |
| onFocus         | `'React.ReactEventHandler'` |         |
| onChange        | `'React.ReactEventHandler'` |         |
| onBlur          | `'React.ReactEventHandler'` |         |

# 4.ColorPicker

## Usage

```jsx
import { ColorPicker } from '@loomhq/lens'
;<ColorPicker onChange={func} />
```

## Using onChange

```jsx
;() => {
  const [color, setColor] = React.useState('#ffffff')
  return (
    <>
      {color}
      <ColorPicker onChange={(color) => setColor(color)} />
    </>
  )
}
```

## With default color

```jsx
;() => {
  const [color, setColor] = React.useState('#c7c6f9')
  return (
    <ColorPicker onChange={(color) => setColor(color)} defaultColor={color} />
  )
}
```

## With confirm button

```jsx
;() => {
  const [tempColor, setTempColor] = React.useState('#ffffff')
  const [finalColor, setFinalColor] = React.useState('#ffffff')
  return (
    <>
      Temp color: {tempColor}
      <br />
      Final color: {finalColor}
      <ColorPicker
        onChange={(color) => setTempColor(color)}
        confirmButton={
          <Button
            variant="primary"
            size="small"
            width="full"
            onClick={() => setFinalColor(tempColor)}
          >
            Use this color
          </Button>
        }
      />
    </>
  )
}
```

## With swatches

```jsx
;() => {
  const [color, setColor] = React.useState('#ffffff')
  const swatchesArray = [
    'var(--lns-color-orange)',
    'var(--lns-color-teal)',
    'var(--lns-color-yellow)',
    'var(--lns-color-blue)',
    'var(--lns-color-offWhite)',
    'var(--lns-color-grey6)',
    'var(--lns-color-white)',
  ]
  return (
    <ColorPicker
      onChange={(color) => setColor(color)}
      swatches={swatchesArray}
    />
  )
}
```

## With popover

Combine with **Popover** component to position ColorPicker as an overlay.

```jsx
;() => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <Container width="max-content">
      <Popover
        isOpen={isOpen}
        placement="bottomCenter"
        content={<ColorPicker onChange={(color) => color} />}
      >
        <Button onClick={() => setOpen(!isOpen)}>Trigger</Button>
      </Popover>
    </Container>
  )
}
```

## Props

| Name          | Type                                | Default     |
| ------------- | ----------------------------------- | ----------- |
| defaultColor  | `'string'`                          | `'#ffffff'` |
| confirmButton | `'React.ReactNode'`                 |             |
| swatches      | `'string[]' `                       |             |
| onChange      | `'(selectedColor: string) => void'` |             |

# 5.Dropdown

## Import

```tsx
import { Dropdown } from '@loomhq/lens'
```

---

## Usage

```tsx
<Dropdown
  triggerCallback={(buttonProps) => (
    <div tabIndex="0" {...buttonProps}>
      Simple trigger
    </div>
  )}
  options={[
    {
      title: 'Share',
      icon: <SvgShare />,
      onClick: () => {},
      disabled: false,
    },
  ]}
/>
```

---

## ARIA Menu Name

Screen readers should accurately 'read' the text contents of the custom node you return from the callback you pass to `trigger` as the label for the Dropdown element. However, you can explicitly pass a label string to `ariaMenuName` to explicitly label the element in case screen readers are not behaving as expected.

```tsx
<Dropdown
  ariaMenuName="Button with label override"
  triggerCallback={(buttonProps) => (
    <Arrange tabIndex="0" {...buttonProps}>
      <Text fontWeight="bold">This label is invisible to screen readers</Text>
      <Icon icon={<SvgChevronDown />} />
    </Arrange>
  )}
  options={[
    { title: 'Share' },
    { title: 'Archive' },
    { title: 'Disabled', disabled: true },
  ]}
/>
```

---

## Trigger

### triggerCallback

AA callback function that returns a custom node. The Dropdown component will pass the necessary ARIA attributes to allow screen readers to properly 'read' the custom node returned by your callback.

Providing this prop will override any custom node passed to `trigger`.

### trigger (deprecated - use triggerCallback instead)

Trigger can be any custom node. If the `trigger` is not a button make sure to add a tabindex attribute to it.

Note on deprecation: This approach is not a11y compliant, as screen readers cannot properly 'read' the dropdown options. Using a screen reader, you can test the buttons below. Only the first should have its menu items read.

```tsx
<Arrange gap="large">
  <Dropdown
    triggerCallback={(buttonProps) => {
      return (
        <Arrange tabIndex="0" {...buttonProps}>
          <Text fontWeight="bold">ARIA compliant trigger</Text>
          <Icon icon={<SvgChevronDown />} />
        </Arrange>
      )
    }}
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
  <Dropdown
    trigger={<div tabIndex="0">Simple trigger</div>}
    options={[
      { title: 'Share', onClick: () => alert('hi') },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
  <Dropdown
    trigger={
      <Arrange tabIndex="0">
        <Text fontWeight="bold">Trigger with icon</Text>
        <Icon icon={<SvgChevronDown />} />
      </Arrange>
    }
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
  <Dropdown
    trigger={<Button>Button trigger</Button>}
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
  <Dropdown
    trigger={<IconButton altText="dropdown" icon={<SvgChevronDown />} />}
    options={[
      { title: 'Share' },
      { title: 'Archive' },
      { title: 'Disabled', disabled: true },
    ]}
  />
</Arrange>
```

---

## Menu Position

Menu can be positoned on the left or right side relative to the trigger.

```tsx
<Arrange gap="medium" columns={['1fr', '1fr']}>
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on left</Button>
    )}
    menuPosition="left"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on right</Button>
    )}
    menuPosition="right"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on top left</Button>
    )}
    menuPosition="topLeft"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on top right</Button>
    )}
    menuPosition="topRight"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on left side</Button>
    )}
    triggerOffset={8}
    menuPosition="leftSide"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Trigger on right side</Button>
    )}
    triggerOffset={-78}
    menuPosition="rightSide"
    options={[{ title: 'Share' }, { title: 'Archive' }]}
  />
</Arrange>
```

---

### With Icons

```tsx
<Dropdown
  triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
  options={[
    { title: 'Share', icon: <SvgShare /> },
    { title: 'Archive', icon: <SvgArchive /> },
    { title: 'Disabled', icon: <SvgTrash />, disabled: true },
  ]}
/>
```

---

### With Divider

```tsx
<Dropdown
  triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
  options={[
    { title: 'Share' },
    { title: 'Archive' },
    { title: 'Download', hasDivider: true },
  ]}
/>
```

---

## Menu Size

### Min / Max Width

```tsx
<Dropdown
  triggerCallback={buttonProps => <Button {...buttonProps}>With min width</Button>}
  menuMinWidth={10}
  options={[
    { title: 'A' },
    { title: 'B' },
    { title: 'C' },
  ]}
/>

<Dropdown
  triggerCallback={buttonProps => <Button {...buttonProps}>With max width</Button>}
  menuMaxWidth={56}
  options={[
    { title: 'Long option text' },
    { title: 'Short' },
  ]}
/>
```

---

### Max Height

```tsx
<Dropdown
  menuMaxHeight={24}
  triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
  options={[{ title: 'First' }, { title: 'Second' }]}
/>
```

---

## Container

Specify where the dropdown renders in the DOM. this is especially useful when working with Shadow DOM.

```tsx
<Dropdown
  container={() => document.querySelector('#renderContainer')}
  triggerCallback={(buttonProps) => <Button {...buttonProps}>Trigger</Button>}
  options={[{ title: 'A' }, { title: 'B' }, { title: 'C' }]}
/>
```

---

## Search

For dropdowns with many options that make it difficult to find the intended value, a search input can be added. By default, the option values are filtered on the inputted value using a loose `includes` pattern.

### With string options

```tsx
<Arrange gap="large">
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Contains Search</Button>
    )}
    menuMaxHeight={42}
    options={[
      { title: 'A' },
      { title: 'B' },
      { title: 'AB' },
      { title: 'BA' },
      { title: 'Aa' },
      { title: 'AA' },
      { title: 'Bb' },
      { title: 'BB' },
      { title: 'ABC' },
      { title: 'ACB' },
      { title: 'BAC' },
      { title: 'BCA' },
      { title: 'CAB' },
      { title: 'CBA' },
      { title: 'a' },
      { title: 'b' },
    ]}
    search={{
      searchPlaceholder: 'Search with includes...',
      searchType: 'contains',
    }}
  />
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Starts With Search</Button>
    )}
    menuMaxHeight={42}
    options={[
      { title: 'A' },
      { title: 'B' },
      { title: 'AB' },
      { title: 'BA' },
      { title: 'Aa' },
      { title: 'AA' },
      { title: 'Bb' },
      { title: 'BB' },
      { title: 'ABC' },
      { title: 'ACB' },
      { title: 'BAC' },
      { title: 'BCA' },
      { title: 'CAB' },
      { title: 'CBA' },
      { title: 'a' },
      { title: 'b' },
    ]}
    search={{
      searchPlaceholder: 'Search with starts with...',
      searchType: 'startsWith',
    }}
  />
</Arrange>
```

### With ReactElement options

For options that implement a `ReactElement` as the `title` of the `options` property, the element properties must be joined with `React.PropsWithChildren` or have the `children` property. Furthermore, the searchable value of the element **must** be included as a child of the element to ensure its value can be parsed.

```tsx
<Arrange gap="large">
  <Dropdown
    triggerCallback={(buttonProps) => (
      <Button {...buttonProps}>Element Search</Button>
    )}
    menuMaxHeight={42}
    options={[
      { title: <div>A</div> },
      { title: <div>B</div> },
      { title: <div>AB</div> },
      { title: <div>BA</div> },
      { title: <div>Aa</div> },
      { title: <div>AA</div> },
      { title: <div>Bb</div> },
      { title: <div>BB</div> },
      { title: <div>ABC</div> },
      { title: <div>ACB</div> },
      { title: <div>BAC</div> },
      { title: <div>BCA</div> },
      { title: <div>CAB</div> },
      { title: <div>CBA</div> },
      { title: <div>a</div> },
      { title: <div>b</div> },
    ]}
    search={{
      searchPlaceholder: 'Search with element options...',
    }}
  />
</Arrange>
```

---

## onOuterClick callback

```tsx
<Dropdown
  triggerCallback={(buttonProps) => (
    <Button {...buttonProps}>console.log on change</Button>
  )}
  onOuterClick={() => console.log('onOuterClick')}
  options={[{ title: 'A' }, { title: 'B' }]}
/>
```

---

---

## onOpenChange callback

Callback that provides the `isOpen` value when dropdown opens or closes

```tsx
<Dropdown
  triggerCallback={(buttonProps) => (
    <Button {...buttonProps}>console.log on change</Button>
  )}
  onOpenChange={(newState) => console.log(newState)}
  options={[{ title: 'A' }, { title: 'B' }]}
/>
```

---

## Props

| Name          | Type                                                                        | Default  |
| ------------- | --------------------------------------------------------------------------- | -------- |
| menuPosition  | `'left' \| 'right' \| 'topRight' \| 'topLeft' \| 'leftSide' \| 'rightSide'` | `'left'` |
| menuZIndex    | `number`                                                                    | `1100`   |
| menuMinWidth  | `number \| string`                                                          | `24`     |
| menuMaxWidth  | `number \| string`                                                          | `48`     |
| triggerOffset | `number`                                                                    | `0`      |
| ariaMenuName  | `string`                                                                    | —        |
| options       | `OptionsObject[]`                                                           | —        |
| isOpen        | `boolean`                                                                   | —        |
| menuMaxHeight | `number \| string`                                                          | —        |
| container     | `HTMLElement \| (() => HTMLElement) \| string`                              | —        |
| onOuterClick  | `() => void`                                                                | —        |
| onOpenChange  | `(isOpen: boolean) => void`                                                 | —        |
| search        | `{ searchPlaceholder: string; searchType?: 'contains' \| 'startsWith' }`    | —        |
| role          | `React.AriaRole`                                                            | —        |
| menuItemRole  | `React.AriaRole`                                                            | —        |

# 6.FormField

Usage  
 Guidelines  
 Example label

---

## Usage

```tsx
import { FormField, TextInput } from '@loomhq/lens'
;<FormField label="Name" labelFor="name" errorMessage="Some error message">
  <TextInput id="name" />
</FormField>
```

---

## Direction

Use `direction="row"` for Checkbox, Radio, and Switch.

For a full-width pattern where the label comes first, use `direction="row-reverse"`. Common pattern for toggling settings.

```tsx
<form>
  <FormField
    direction="column"
    label="Column example"
    labelFor="columnExampleTextInput"
  >
    <TextInput id="columnExampleTextInput" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleCheckbox">
    <Checkbox id="rowExampleCheckbox" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleRadio">
    <Radio id="rowExampleRadio" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleSwitch">
    <Switch id="rowExampleSwitch" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField
    direction="row-reverse"
    label="Full-width row example"
    labelFor="rowExampleSwitchReverse"
  >
    <Switch id="rowExampleSwitchReverse" />
  </FormField>
</form>
```

```tsx
<form>
  <FormField
    direction="column"
    label="Column example"
    labelFor="columnExampleTextInput"
  >
    <TextInput id="columnExampleTextInput" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleCheckbox">
    <Checkbox id="rowExampleCheckbox" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleRadio">
    <Radio id="rowExampleRadio" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Row example" labelFor="rowExampleSwitch">
    <Switch id="rowExampleSwitch" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField
    direction="row-reverse"
    label="Full-width row example"
    labelFor="rowExampleSwitchReverse"
  >
    <Switch id="rowExampleSwitchReverse" />
  </FormField>
</form>
```

---

## With error

```tsx
<form>
  <FormField
    label="Error example"
    labelFor="errorExample"
    errorMessage="Some error message"
  >
    <TextInput id="errorExample" hasError />
  </FormField>
</form>
```

```tsx
<form>
  <FormField
    label="Error example"
    labelFor="errorExample"
    errorMessage="Some error message"
  >
    <TextInput id="errorExample" hasError />
  </FormField>
</form>
```

---

## Examples

Form elements

Name

Country

Choose an option

Comment

Accept terms

```tsx
<form>
  <FormField label="Name" labelFor="name">
    <TextInput id="name" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Country" labelFor="country">
    <Select
      placeholder="Choose an option"
      options={[
        { value: 'australia', title: 'Australia' },
        { value: 'austria', title: 'Austria' },
      ]}
    />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Comment" labelFor="comment">
    <Textarea id="comment" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Accept terms" labelFor="terms">
    <Checkbox id="terms" />
  </FormField>
</form>
```

```tsx
<form>
  <FormField label="Name" labelFor="name">
    <TextInput id="name" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Country" labelFor="country">
    <Select
      placeholder="Choose an option"
      options={[
        { value: 'australia', title: 'Australia' },
        { value: 'austria', title: 'Austria' },
      ]}
    />
  </FormField>
  <Spacer bottom="medium" />
  <FormField label="Comment" labelFor="comment">
    <Textarea id="comment" />
  </FormField>
  <Spacer bottom="medium" />
  <FormField direction="row" label="Accept terms" labelFor="terms">
    <Checkbox id="terms" />
  </FormField>
</form>
```

---

## Props

| name             | type                                 | default    |
| ---------------- | ------------------------------------ | ---------- |
| direction        | `'row' \| 'column' \| 'row-reverse'` | `'column'` |
| label            | `ReactNode`                          |            |
| errorMessage     | `string \| null`                     |            |
| labelFor         | `string`                             |            |
| children         | `React.ReactNode`                    |            |
| isLabelClickable | `boolean`                            |            |

# 7.Icon

## Import

```tsx
import { Icon, SvgSmile } from '@loomhq/lens'
```

---

## Usage

```tsx
<Icon icon={<SvgSmile />} />
```

See the Icon set for all available SVG icons.

---

## Color

Use one of the palette colors.

```tsx
<Icon color="orange" icon={<SvgLink />} />
```

---

## Size

The default size is **3 × 3 units** (`1.5rem × 1.5rem`).

To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

```tsx
<Arrange>
  <Icon size={12} icon={<SvgArrowForward />} />
  <Icon size="3rem" icon={<SvgArrowForward />} />
  <Icon icon={<SvgArrowForward />} />
</Arrange>
```

---

## Accessibility

### With Alternative Text

If the icon is not purely decorative, add an `altText` for accessibility.

```tsx
<Icon altText="Favorite" icon={<SvgSmile />} />
```

If the icon is purely decorative, you may omit `altText`.

---

## Props

| Name    | Type              | Default  |
| ------- | ----------------- | -------- |
| color   | `string`          | `'body'` |
| size    | `SizeProp`        | `3`      |
| altText | `string`          | —        |
| icon    | `React.ReactNode` | —        |

---

# 8.IconButton

## Import

```tsx
import { IconButton } from '@loomhq/lens/icons'
import { SvgFolder } from '@loomhq/lens/icons'
```

---

## Usage

Add an image text alternative to convey the component’s purpose.

```tsx
<IconButton altText="Move to Folder" icon={<SvgFolder />} />
```

---

## HTML Tag

Change the HTML wrapper tag with the `htmlTag` prop.

The default tag is `<button>`.  
 Use `href` when using `htmlTag="a"`.

```tsx
<Arrange gap="small">
  <IconButton icon={<SvgArrowForward />} />
  <IconButton htmlTag="a" href="#" icon={<SvgArrowForward />} />
</Arrange>
```

---

## Sizes

```tsx
<Arrange gap="medium">
  <IconButton altText="Add Collaborator" size="small" icon={<SvgAdd />} />
  <IconButton altText="Add Collaborator" size="medium" icon={<SvgAdd />} />
  <IconButton altText="Add Collaborator" size="large" icon={<SvgAdd />} />
</Arrange>
```

---

## Icons

```tsx
<Arrange gap="small">
  <IconButton altText="Play" icon={<SvgPlay />} />
  <IconButton altText="Add Collaborator" icon={<SvgAdd />} />
  <IconButton altText="Back" icon={<SvgArrowBack />} />
</Arrange>
```

See the Icon set for available icons.

---

## States

### Active

```tsx
<IconButton altText="Next" isActive icon={<SvgGrid />} />
```

### Disabled

```tsx
<IconButton altText="Next" isDisabled icon={<SvgArrowForward />} />
```

---

## Color

Use one of the palette colors via `iconColor`.

```tsx
<IconButton altText="Close" icon={<SvgClose />} iconColor="red" />
```

---

## Forwarding Refs

Use the `ref` prop to access the DOM node.

```tsx
;() => {
  const ref = useRef(null)

  const onClick = () => ref.current.focus()

  return (
    <>
      <Spacer bottom="small">
        <IconButton
          ref={ref}
          altText="Add Collaborator"
          size="small"
          icon={<SvgAdd />}
        />
      </Spacer>

      <TextButton onClick={onClick}>Click to focus</TextButton>
    </>
  )
}
```

---

## Accessibility Guidelines

- Always provide `altText` to describe the button’s purpose.
- Do not rely on icon visuals alone to convey meaning.
- If decorative only, reconsider whether `IconButton` is appropriate.

---

## Props

| Name            | Type                                        | Default      |
| --------------- | ------------------------------------------- | ------------ |
| iconColor       | `string`                                    | `'body'`     |
| size            | `'small' \| 'medium' \| 'large'`            | `'medium'`   |
| htmlTag         | `'button' \| 'a'`                           | `'button'`   |
| altText         | `string`                                    | **required** |
| icon            | `React.ReactNode`                           | —            |
| onClick         | `React.MouseEventHandler<HTMLInputElement>` | —            |
| backgroundColor | `string`                                    | —            |
| isActive        | `boolean`                                   | `false`      |
| isDisabled      | `boolean`                                   | `false`      |
| href            | `string`                                    | —            |
| target          | `string`                                    | —            |

---

# 9.Illustration

## Import

```tsx
import { Illustration, SvgSmile } from '@loomhq/lens'
```

---

## Usage

```tsx
<Illustration illustration={<SvgSmile />} />
```

See the Illustration set for all available illustrations.

---

## Illustration Set

```tsx
<Arrange gap="medium">
  <Illustration illustration={<IllustrationStarred />} />
  <Illustration illustration={<IllustrationShare />} />
  <Illustration illustration={<IllustrationInviteMembers />} />
</Arrange>
```

---

## Color

Use one of the palette colors.

```tsx
<Illustration color="body" illustration={<IllustrationShare />} />
```

---

## Size

The default size is **12 × 12 units** (`6rem × 6rem`).

To change the size, use the `size` prop. The value can be specified in units, pixels, or any valid CSS unit.

```tsx
<Arrange gap="medium">
  <Illustration illustration={<IllustrationPto />} />
  <Illustration size={9} illustration={<IllustrationPto />} />
  <Illustration size="3rem" illustration={<IllustrationPto />} />
</Arrange>
```

---

## Accessibility

### With Alternative Text

If the illustration is not purely decorative, add an `altText` for accessibility.

```tsx
<Illustration
  altText="Invite team members"
  illustration={<IllustrationInvite />}
/>
```

If the illustration is purely decorative, `altText` may be omitted.

---

## Props

| Name         | Type               | Default    |
| ------------ | ------------------ | ---------- |
| color        | `string`           | `'orange'` |
| size         | `number \| string` | `12`       |
| altText      | `string`           | —          |
| illustration | `React.ReactNode`  | —          |

---

# 10. Indicator

## Basic Usage

A wrapper that adds a pulsing dot indicator to any component.

Perfect for showing notifications, unread counts, or status indicators on icons, buttons, or other UI elements.

Simply wrap your component with `Indicator` and it automatically positions itself as a badge.

```tsx
<Arrange gap="large" alignItems="center">
  <Indicator>
    <Icon icon={<SvgCalendar />} size={3} color="grey6" />
  </Indicator>
</Arrange>
```

---

## Pulse Effect

By default, the indicator includes a subtle pulsing ring effect that radiates outward from the dot.

This pulse effect can be disabled when a simpler, static indicator is preferred (e.g. low bandwidth or reduced motion contexts).

### With Pulse (default)

```tsx
<Indicator color="blue">
  <Icon icon={<SvgCalendar />} size={3} color="grey6" />
</Indicator>
```

### Without Pulse

```tsx
<Indicator color="blue" withPulse={false}>
  <Icon icon={<SvgCalendar />} size={3} color="grey6" />
</Indicator>
```

---

## Color

The indicator supports two color variants to communicate different types of information:

- **Orange** — Notifications and alerts
- **Blue** — Onboarding and informational indicators

```tsx
<Arrange gap="large" alignItems="center">
  <Container>
    <Text size="small" color="grey6">
      Orange (Notifications)
    </Text>
    <Spacer top="small">
      <Indicator color="orange">
        <Icon icon={<SvgBell />} size={3} color="grey6" />
      </Indicator>
    </Spacer>
  </Container>

  <Container>
    <Text size="small" color="grey6">
      Blue (Onboarding)
    </Text>
    <Spacer top="small">
      <Indicator color="blue">
        <Icon icon={<SvgCalendar />} size={3} color="grey6" />
      </Indicator>
    </Spacer>
  </Container>
</Arrange>
```

---

## Accessibility Guidelines

- Indicators should supplement — not replace — accessible labels.
- Do not rely solely on color to communicate meaning.
- Pair with proper `aria-label`, `altText`, or descriptive text where necessary.

---

## Props

| Name      | Type                 | Default      |
| --------- | -------------------- | ------------ |
| withPulse | `boolean`            | `true`       |
| color     | `'blue' \| 'orange'` | `'blue'`     |
| children  | `React.ReactNode`    | **required** |

---

# 11.Link

## Import

```tsx
import { Link } from '@loomhq/lens'
```

---

## Usage

```tsx
<Link>Content</Link>
```

---

## Variants

Use `subtle` when you do not want an underline and the surrounding context clearly communicates interactivity.

By default, links should have an underline, as it is a strong accessibility affordance.

```tsx
<Arrange gap="small">
  <Link href="#">Primary</Link>
  <Link variant="neutral" href="#">
    Neutral
  </Link>
  <Link variant="subtle" href="#">
    Subtle
  </Link>
</Arrange>
```

---

## Href

Use `href` to navigate to another location.

```tsx
<Link href="#">Take me somewhere</Link>
```

---

## HTML Tag

Change the HTML wrapper tag using the `htmlTag` prop.

### Rendering `<a>` (default)

```tsx
<Link>Rendering {'<a>'} tag</Link>
```

### Rendering `<button>`

```tsx
<Link htmlTag="button">Rendering {'<button>'} tag</Link>
```

---

## Disabled

```tsx
<Link isDisabled>Can't touch this</Link>
```

---

## Wrapping

Use `noWrap` to prevent the link from wrapping or truncating.

> ⚠️ This does not work if `hasEllipsis` is enabled on a parent `Text` component.

```tsx
<Link noWrap>{demoText.medium}</Link>
```

---

## Examples

### Link in a Paragraph

```tsx
<Text>
  <span>{demoText.medium} </span>
  <Link href="#">clouds.com</Link>
  <span> {demoText.medium}</span>
</Text>
```

---

### With Ellipsis

```tsx
<Text hasEllipsis>
  <Link href="#">{demoText.medium}</Link>
</Text>
```

---

### Size

The `Link` component inherits its size from the surrounding `Text` component.

```tsx
<Text size="xxlarge">
  <Link href="#">Big link</Link>
</Text>
```

---

## Accessibility Guidelines

- Prefer underlined links for clarity and accessibility.
- Do not rely solely on color to indicate interactivity.
- Use `button` only when the action does not navigate.
- Always provide meaningful link text (avoid “Click here”).

---

## Props

| Name       | Type                                         | Default     |
| ---------- | -------------------------------------------- | ----------- |
| variant    | `'neutral' \| 'primary' \| 'subtle'`         | `'primary'` |
| htmlTag    | `'button' \| 'a'`                            | `'a'`       |
| children   | `React.ReactNode`                            | —           |
| href       | `string`                                     | —           |
| isDisabled | `boolean`                                    | `false`     |
| noWrap     | `boolean`                                    | `false`     |
| onClick    | `React.MouseEventHandler<HTMLAnchorElement>` | —           |
| target     | `string`                                     | —           |

---

# 12.List

## Import

```tsx
import { List, ListRow } from '@loomhq/lens'
```

---

## Usage

```tsx
<List columns={['4fr', '1fr']} gap="large">
  <ListRow paddingX="medium" paddingY="small">
    <div>Content</div>
    <div>Content</div>
  </ListRow>

  <ListRow paddingX="medium" paddingY="small">
    <div>Content</div>
    <div>Content</div>
  </ListRow>
</List>
```

---

## Padding and Height

### With Padding

```tsx
<List>
  <ListRow padding="large">
    <Container borderSide="all">With padding</Container>
  </ListRow>
</List>
```

### With Padding and Fixed Height

```tsx
<List>
  <ListRow paddingX="large" paddingY="small" height={6}>
    <Container borderSide="all">With padding and height</Container>
  </ListRow>
</List>
```

### With Min / Max Height

```tsx
<List>
  <ListRow minHeight={6} maxHeight={8}>
    <Container borderSide="all">With minHeight and maxHeight</Container>
  </ListRow>
</List>
```

---

## Variant

The `variant` prop controls list styling.

- **stripe** (default)
- **border**
- **clear**

```tsx
<Arrange columns="repeat(3, 1fr)" gap="medium">
  <List columns={['1fr']} variant="stripe">
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>stripe</Text>
    </ListRow>
  </List>

  <List columns={['1fr']} variant="border">
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>border</Text>
    </ListRow>
  </List>

  <List columns={['1fr']} variant="clear">
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
    <ListRow padding="small">
      <Text>clear</Text>
    </ListRow>
  </List>
</Arrange>
```

---

## Background Color

```tsx
<List>
  <ListRow padding="small">Row</ListRow>
  <ListRow padding="small">Row</ListRow>
  <ListRow padding="small" backgroundColor="highlight">
    Row
  </ListRow>
  <ListRow padding="small" backgroundColor="offWhite">
    Row
  </ListRow>
</List>
```

---

## Clickable List Items

### With `onClick`

```tsx
<List columns={['1fr']}>
  <ListRow
    paddingX="medium"
    paddingY="small"
    onClick={() => console.log('clicked')}
  >
    <div>With onClick</div>
  </ListRow>
</List>
```

### With `href`

```tsx
<List columns={['1fr']}>
  <ListRow
    paddingX="medium"
    paddingY="small"
    htmlTag="a"
    href="https://www.loom.com"
  >
    <div>With href</div>
  </ListRow>
</List>
```

---

## Examples

### Simple Settings List

```tsx
<List columns={['1fr', 'auto']} gap="medium">
  <ListRow padding="small">
    <Text hasEllipsis>Use system audio</Text>
    <Switch />
  </ListRow>

  <ListRow padding="small">
    <Text hasEllipsis>Highlight mouse clicks {demoText.long}</Text>
    <Switch />
  </ListRow>

  <ListRow padding="small">
    <Text hasEllipsis>Recording countdown</Text>
    <Switch />
  </ListRow>
</List>
```

---

### Data List

```tsx
;() => {
  const listItems = [
    { title: 'Ryozo', email: 'ryozo@email.com', role: 'Admin' },
    { title: 'Hikaru', email: 'hikaru@email.com', role: 'Admin' },
    { title: 'Yutsuko', email: 'yutsuko@email.com', role: 'Admin' },
  ]

  return (
    <List columns={['2fr', '1fr', '1fr']} gap="medium">
      {listItems.map((item, index) => (
        <ListRow key={index} paddingX="medium" paddingY="small">
          <Text>{item.title}</Text>
          <Text>{item.email}</Text>
          <Text>{item.role}</Text>
        </ListRow>
      ))}
    </List>
  )
}
```

---

### With Ellipsis

```tsx
<List columns={['4fr', '1fr']} gap="large">
  <ListRow paddingX="medium" paddingY="small">
    <div className="ellipsis">
      Ellipsis with utility class — {demoText.long}
    </div>
    <div>Content</div>
  </ListRow>

  <ListRow paddingX="medium" paddingY="small">
    <Text hasEllipsis>Ellipsis with Text component — {demoText.long}</Text>
    <div>Content</div>
  </ListRow>
</List>
```

---

## Props

| Name            | Type                               | Default    |
| --------------- | ---------------------------------- | ---------- |
| variant         | `'clear' \| 'border' \| 'stripe'`  | `'stripe'` |
| htmlTag         | `unknown`                          | `'ul'`     |
| columns         | `(string \| number)[]`             | —          |
| gap             | `ResponsiveType<string \| number>` | —          |
| backgroundColor | `string`                           | —          |
| children        | `React.ReactNode`                  | —          |

---

## ListRow

| Name            | Type                               | Default |
| --------------- | ---------------------------------- | ------- |
| htmlTag         | `unknown`                          | `'li'`  |
| padding         | `ResponsiveType<string \| number>` | —       |
| paddingTop      | `ResponsiveType<string \| number>` | —       |
| paddingBottom   | `ResponsiveType<string \| number>` | —       |
| paddingLeft     | `ResponsiveType<string \| number>` | —       |
| paddingRight    | `ResponsiveType<string \| number>` | —       |
| paddingY        | `ResponsiveType<string \| number>` | —       |
| paddingX        | `ResponsiveType<string \| number>` | —       |
| height          | `ResponsiveType<string \| number>` | —       |
| minHeight       | `ResponsiveType<string \| number>` | —       |
| maxHeight       | `ResponsiveType<string \| number>` | —       |
| backgroundColor | `string`                           | —       |
| className       | `string`                           | —       |
| children        | `React.ReactNode`                  | —       |
| onClick         | `React.ReactEventHandler`          | —       |
| href            | `string`                           | —       |
| role            | `string`                           | —       |

---

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

# 14.Menu

## Usage Guidelines

Use `Menu` to build custom action and select menus.

For common menu use cases, consider using `Dropdown` or `Select`.

> The `icon` prop accepts a React icon component or an image URL / Data URL.

---

## Basic Usage

```tsx
import { Menu, MenuItem } from '@loomhq/lens'
;<Menu maxWidth={24}>
  <MenuItem icon={<SvgDownload />}>Download</MenuItem>
  <MenuItem icon={<SvgArchive />}>Archive</MenuItem>
  <MenuItem icon={<SvgTrash />}>Delete</MenuItem>
</Menu>
```

---

## Actions Menu

```tsx
<Menu maxWidth={24}>
  <MenuItem onClick={() => console.log('onClick Share')} icon={<SvgShare />}>
    Share
  </MenuItem>

  <MenuItem
    onClick={() => console.log('onClick Archive')}
    icon={<SvgArchive />}
  >
    Archive
  </MenuItem>

  <MenuItem
    onClick={() => console.log('onClick Delete')}
    icon={<SvgTrash />}
    isDisabled
  >
    Delete
  </MenuItem>

  <MenuItem
    onClick={() => console.log('onClick Record')}
    icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
    isDisabled
  >
    Record
  </MenuItem>
</Menu>
```

---

## Select Menu

```tsx
<Menu maxWidth={24}>
  <MenuItem isSelected>First</MenuItem>
  <MenuItem>Second</MenuItem>
  <MenuItem>Third</MenuItem>
  <MenuItem>Fourth</MenuItem>
</Menu>
```

---

## With Divider

```tsx
<Menu maxWidth={24}>
  <MenuItem isSelected>First</MenuItem>
  <MenuItem>Second</MenuItem>
  <MenuItem>Third</MenuItem>
  <MenuItem hasDivider>Fourth</MenuItem>
</Menu>
```

---

## Custom Content

```tsx
;() => {
  const options = [
    { title: 'First', description: demoText.medium, isHighlighted: true },
    { title: 'Second', description: demoText.long, isSelected: true },
    { title: 'Third', description: demoText.short },
  ]

  return (
    <Menu maxWidth={24}>
      {options.map((option, index) => (
        <MenuItem
          key={index}
          isHighlighted={option.isHighlighted}
          isSelected={option.isSelected}
        >
          <Container paddingY="small">
            <Arrange gap="small">
              <Avatar letter={option.title.charAt(0)} />
              <Container minWidth={0}>
                <Text hasEllipsis>{option.title}</Text>
                <Text size="small" color="bodyDimmed" hasEllipsis>
                  {option.description}
                </Text>
              </Container>
            </Arrange>
          </Container>
        </MenuItem>
      ))}
    </Menu>
  )
}
```

---

## With Popover and Downshift

Combine with `Popover` to position `Menu` as an overlay.  
 Use `Downshift` to manage state, keyboard navigation, and selection.

```tsx
;() => {
  const items = [
    { value: 'Saturn' },
    { value: 'Neptune' },
    { value: 'Jupiter' },
    { value: 'Earth', isDisabled: true },
    { value: 'Mars' },
    { value: 'Uranus' },
    { value: 'Pluto' },
    { value: 'Venus' },
    { value: 'Mercury' },
  ]

  return (
    <Downshift
      itemToString={(item) => (item ? item.value : '')}
      onChange={(selection) =>
        console.log(selection ? selection.value : 'Selection Cleared')
      }
    >
      {({
        getToggleButtonProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <Popover
          isOpen={isOpen}
          placement="bottomCenter"
          content={
            <Menu
              minWidth={20}
              maxWidth={30}
              maxHeight={30}
              downshiftMenuProps={getMenuProps}
            >
              {items.map((item, index) => (
                <MenuItem
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    disabled: item.isDisabled,
                  })}
                  isHighlighted={highlightedIndex === index}
                  isDisabled={item.isDisabled}
                >
                  {item.value}
                </MenuItem>
              ))}
            </Menu>
          }
        >
          <div {...getRootProps({}, { suppressRefError: true })}>
            <TextButton
              iconPosition="right"
              icon={<SvgChevronDown />}
              {...getToggleButtonProps()}
            >
              {selectedItem ? selectedItem.value : 'Select an option'}
            </TextButton>
          </div>
        </Popover>
      )}
    </Downshift>
  )
}
```

---

## Props

## Menu

| name               | type                 | default      |
| ------------------ | -------------------- | ------------ |
| downshiftMenuProps | `any`                | `() => null` |
| isDisabled         | `boolean`            | —            |
| position           | `string`             | —            |
| zIndex             | `number`             | —            |
| minWidth           | `number \| string`   | —            |
| maxWidth           | `number \| string`   | —            |
| maxHeight          | `number \| string`   | —            |
| children           | `React.ReactNode`    | —            |
| search             | `React.ReactElement` | —            |
| role               | `React.AriaRole`     | —            |

---

## MenuItem

| name             | type                        | default |
| ---------------- | --------------------------- | ------- |
| showDeselectIcon | `boolean`                   | `false` |
| isDisabled       | `boolean`                   | —       |
| isHighlighted    | `boolean`                   | —       |
| keyboardMove     | `boolean`                   | —       |
| isSelected       | `boolean`                   | —       |
| icon             | `React.ReactNode \| string` | —       |
| hasDivider       | `boolean`                   | —       |
| children         | `React.ReactNode`           | —       |
| columns          | `string`                    | —       |
| hidden           | `boolean`                   | —       |
| menuItemRole     | `React.AriaRole`            | —       |

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

# 16.NotificationBar

---

## Usage Guidelines

### Purpose

Notification bars are used to display **informational, warning, or error alerts**.  
Since they communicate **app-level information**, they are placed **across the top of the screen**.

---

### Dos

- Keep messaging **clear and short**
- Stay within the recommended **100 character limit**
- Add optional **in-line links only at the end** of the message and use sparingly

### Don’ts

- Show **more than one notification bar at a time**
- Use for **low-attention messages** (use Toasts instead)
- Use for **feature- or page-level loading errors**, which may confuse the user

---

## Usage Example

```jsx
import { NotificationBar } from '@loomhq/lens'
;<NotificationBar>Content</NotificationBar>
```

---

## Variants

Variants are determined by **severity level**:

| variant        | description                                         |
| -------------- | --------------------------------------------------- |
| info (default) | General messages                                    |
| warning        | Higher importance, non-blocking messages            |
| error          | Urgent, blocking messages                           |
| internal       | Local warnings for Loom engineers (not user-facing) |

---

## Accessibility

Out-of-the-box, `NotificationBar` supports:

- **Color accessibility** → All variants meet **WCAG AA contrast**
- **Navigability** → Focusable and togglable by all input devices
- **Screen reader support**:
  - `NotificationBar` is rendered as an `<aside>` element
  - Message body uses `role="status"` (info) or `role="alert"` (error/warning)
  - Info: `aria-live="polite"` → announced when user is idle
  - Error/Warning: `aria-live="assertive"` → announced immediately
  - Close button (`X`) has `aria-label="Close notification bar"`

---

## Example: Standard Error

```jsx
;() => {
  const [errorIsOpen, setErrorIsOpen] = React.useState(false)

  return (
    <>
      <Arrange autoFlow={{ default: 'row', small: 'row' }} gap="small">
        <Button onClick={() => setErrorIsOpen(true)} variant="primary">
          Trigger Error
        </Button>
      </Arrange>

      <NotificationBar
        isOpen={errorIsOpen}
        onCloseClick={() => setErrorIsOpen(false)}
        severity="error"
      >
        Oops! Failed to save your default Workspace
      </NotificationBar>
    </>
  )
}
```

---

## Example: Multiple Severities

```jsx
;() => {
  const [errorIsOpen, setErrorIsOpen] = React.useState(false)
  const [infoIsOpen, setInfoIsOpen] = React.useState(false)
  const [warningIsOpen, setWarningIsOpen] = React.useState(false)
  const [internalIsOpen, setInternalIsOpen] = React.useState(false)

  return (
    <>
      <Arrange autoFlow={{ default: 'row', small: 'row' }} gap="small">
        <Button onClick={() => setErrorIsOpen(true)} variant="primary">
          Trigger Error
        </Button>
        <Button onClick={() => setInfoIsOpen(true)} variant="primary">
          Trigger Info
        </Button>
        <Button onClick={() => setWarningIsOpen(true)} variant="primary">
          Trigger Warning
        </Button>
        <Button onClick={() => setInternalIsOpen(true)} variant="primary">
          Trigger Internal Warning
        </Button>
      </Arrange>

      <NotificationBar
        isOpen={errorIsOpen}
        onCloseClick={() => setErrorIsOpen(false)}
        severity="error"
      >
        Oops! Failed to save your default Workspace
      </NotificationBar>

      <NotificationBar
        isOpen={infoIsOpen}
        onCloseClick={() => setInfoIsOpen(false)}
        severity="info"
      >
        You have successfully verified yourdomainname.com for Single Sign On
      </NotificationBar>

      <NotificationBar
        isOpen={warningIsOpen}
        onCloseClick={() => setWarningIsOpen(false)}
        severity="warning"
      >
        <Text fontWeight="regular">
          You may not want to do that or try this at home. We recommend a max
          character count of 100.
        </Text>
      </NotificationBar>

      <NotificationBar
        isOpen={internalIsOpen}
        onCloseClick={() => setInternalIsOpen(false)}
        severity="internal"
      >
        <Arrange autoFlow="row">
          <Text fontWeight="bold">Dev alert</Text>
          Your changes will cause destructive errors in production. Verify your
          work before merging.
        </Arrange>
      </NotificationBar>
    </>
  )
}
```

---

## Optional onCloseClick

`onCloseClick` is optional. Omitting it results in a notification without a close button:

```jsx
<NotificationBar isOpen severity="error">
  Oops! Failed to save your default Workspace
</NotificationBar>
```

---

## Props

| name         | type            | default | description                            |
| ------------ | --------------- | ------- | -------------------------------------- |
| severity     | SeverityLevels  | 'info'  | Determines variant of the notification |
| children     | React.ReactNode | —       | Content inside the bar                 |
| isOpen       | boolean         | —       | Controls visibility                    |
| onCloseClick | () => void      | —       | Callback for close button              |

---

# 17.Pill

---

## Usage Guidelines

Pills are compact elements used to **highlight information**, **status**, or **categorical data**. They can include text, icons, or both.

---

## Usage Example

```jsx
import { Pill } from '@loomhq/lens'
;<Pill color="white" backgroundColor="grey7">
  Pill
</Pill>
```

---

## Color

Pills should use **one of the palette colors** for foreground (`color`) and background (`backgroundColor`).

### Examples

```jsx
<Arrange gap="small">
  <Pill color="grey8" backgroundColor="yellow">
    Pill
  </Pill>
  <Pill color="white" backgroundColor="grey7">
    Pill
  </Pill>
</Arrange>
```

---

## Icon Support

Pills can include an **icon** on either the left or right side of the text.

### Examples

```jsx
<Arrange gap="small">
  <Pill
    icon={<SvgArrowForward />}
    iconPosition="left"
    color="grey8"
    backgroundColor="grey2"
  >
    Icon on left
  </Pill>

  <Pill
    icon={<SvgArrowForward />}
    iconPosition="right"
    color="grey8"
    backgroundColor="grey2"
  >
    Icon on right
  </Pill>
</Arrange>
```

---

## Props

| name            | type              | default | description                           |
| --------------- | ----------------- | ------- | ------------------------------------- |
| iconPosition    | 'left' \| 'right' | 'left'  | Position of the icon relative to text |
| icon            | React.ReactNode   | —       | Icon to display inside the pill       |
| color           | string            | —       | Text color of the pill                |
| backgroundColor | string            | —       | Background color of the pill          |
| children        | React.ReactNode   | —       | Content inside the pill               |

---

# 18.Radio

---

## Usage Guidelines

Radios are used to **select a single option from a set**.  
They are best used in **forms or selection groups**.

---

## Usage Example

```jsx
import { Radio } from '@loomhq/lens'
;<Radio />
```

---

## States

- **Checked:** `isChecked` → marks the radio as selected
- **Disabled:** `isDisabled` → makes the radio non-interactive

### Example

```jsx
<Arrange gap="medium">
  <Radio />
  <Radio isChecked onChange={() => console.log()} />
  <Radio isDisabled />
  <Radio isDisabled isChecked />
</Arrange>
```

---

## With Label

Radios are often used with labels inside a form:

```jsx
<form>
  <Arrange gap="small" columns="1fr">
    <FormField label="Mangosteen" direction="row" labelFor="mangosteen">
      <Radio id="mangosteen" name="fruits" />
    </FormField>
    <FormField label="Tamarind" direction="row" labelFor="tamarind">
      <Radio id="tamarind" name="fruits" />
    </FormField>
    <FormField label="Rambutan" direction="row" labelFor="rambutan">
      <Radio id="rambutan" name="fruits" />
    </FormField>
  </Arrange>
</form>
```

---

## Forwarding Refs

You can use the `ref` prop to access the **DOM node** of a radio input:

```jsx
;() => {
  const ref = useRef(null)
  const onClick = () => (ref.current.checked = true)

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onClick}>Toggle</Button>
      </Spacer>
      <Radio ref={ref} />
    </>
  )
}
```

---

## Props

| name       | type                    | default | description                      |
| ---------- | ----------------------- | ------- | -------------------------------- |
| isChecked  | boolean                 | —       | Marks the radio as selected      |
| isDisabled | boolean                 | —       | Disables the radio input         |
| onFocus    | React.ReactEventHandler | —       | Called when radio receives focus |
| onChange   | React.ReactEventHandler | —       | Called when radio state changes  |
| onBlur     | React.ReactEventHandler | —       | Called when radio loses focus    |

---

# 19.Select

---

## Usage Guidelines

The `Select` component allows users to **choose a single option** from a list.  
It supports placeholders, custom triggers, search functionality, grouping, icons, and disabled states.

---

## Basic Usage

```jsx
import { Select } from '@loomhq/lens'
;<Select
  placeholder="Choose an option"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]}
/>
```

### Selected Option

```jsx
<Select
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]}
/>
```

---

## Deselection

Enable `allowsDeselect` to allow the user to deselect a selected option. The `onChange` callback returns `null` when an option is deselected.

```jsx
const [selected, setSelected] = React.useState('second')

<Select
  allowsDeselect
  selectedOptionValue={selected}
  onChange={option => setSelected(option ? option.value : null)}
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]}
/>
```

---

## Options with Icons

```jsx
<Select
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First', icon: <SvgFolder /> },
    { value: 'second', title: 'Second', icon: <SvgLock /> },
    {
      value: 'third',
      title: 'Third',
      icon: 'https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png',
    },
  ]}
/>
```

---

## Disabled States

- **Disabled Select:**

```jsx
<Select
  isDisabled
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
  ]}
/>
```

- **Disabled Option:**

```jsx
<Select
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third', isDisabled: true },
  ]}
/>
```

- **Hidden and Disabled Option:**

```jsx
<Select
  selectedOptionValue="third"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    {
      value: 'third',
      title: 'Cannot select me again',
      hidden: true,
      isDisabled: true,
    },
  ]}
/>
```

---

## Grouped Options

```jsx
<Select
  selectedOptionValue="second"
  options={[
    {
      group: 'Group 1',
      items: [
        { value: 'first', title: 'First' },
        { value: 'second', title: 'Second' },
      ],
    },
    {
      group: 'Group 2',
      items: [
        { value: 'third', title: 'Third', icon: <SvgAdd /> },
        { value: 'fourth', title: 'Fourth', icon: <SvgArchive /> },
      ],
    },
  ]}
/>
```

---

## Menu Positioning

`menuPosition` controls where the dropdown appears relative to the trigger:  
`left | right | topLeft | topRight | leftTop | rightTop`.

```jsx
<Select
  menuPosition="topRight"
  menuMinWidth={20}
  placeholder="Top Right"
  options={[
    { value: 'a', title: 'A' },
    { value: 'b', title: 'B' },
  ]}
/>
```

---

## Searchable Selects

Client-side search:

```jsx
<Select
  selectedOptionValue="second"
  search={{
    searchPlaceholder: 'Search...',
    searchType: 'contains', // or 'startsWith'
  }}
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]}
/>
```

Server-side search:

```jsx
const [results, setResults] = React.useState(initialOptions)
const handleSearch = (value) => {
  // Fetch filtered options from backend
  setResults(fetchFromServer(value))
}

;<Select
  options={results}
  search={{
    searchPlaceholder: 'Search backend...',
    onSearch: handleSearch,
  }}
/>
```

---

## Custom Trigger

```jsx
<Select
  selectedOptionValue="second"
  trigger={(triggerContent, buttonProps) => (
    <TextButton icon={<SvgChevronDown />} {...buttonProps}>
      {triggerContent.title || triggerContent.placeholder}
    </TextButton>
  )}
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
  ]}
/>
```

Custom trigger showing icons:

```jsx
<Select
  selectedOptionValue="second"
  trigger={(triggerContent, buttonProps) => (
    <TextButton {...buttonProps} icon={<SvgChevronDown />} iconPosition="right">
      <Icon icon={triggerContent.icon} /> {triggerContent.title}
    </TextButton>
  )}
  options={[
    { value: 'first', title: 'First', icon: <SvgAdd /> },
    { value: 'second', title: 'Second', icon: <SvgLock /> },
  ]}
/>
```

---

## Error State

```jsx
<Select
  placeholder="Choose an option"
  hasError
  errorMessage="Sample Error Message"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
  ]}
/>
```

---

## Props

| name                | type                                                                                                       | default                   | description                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------- | --------- | ---------- | --------- | ------ | ---------------------- |
| menuZIndex          | number                                                                                                     | 1100                      | Dropdown z-index              |
| menuMaxHeight       | string \| number                                                                                           | 34                        | Max menu height               |
| triggerOffset       | number                                                                                                     | 0                         | Trigger offset                |
| menuPosition        | 'left'                                                                                                     | 'right'                   | 'topRight'                    | 'topLeft' | 'rightTop' | 'leftTop' | 'left' | Menu dropdown position |
| errorMessage        | string                                                                                                     | "Oops, that didn't work." | Error text                    |
| allowsDeselect      | boolean                                                                                                    | false                     | Enable deselect               |
| onChange            | (selectedOption: OptionsObject) => void                                                                    | —                         | Callback on option select     |
| isDisabled          | boolean                                                                                                    | false                     | Disable select                |
| placeholder         | React.ReactNode                                                                                            | —                         | Placeholder content           |
| selectedOptionValue | string \| null                                                                                             | —                         | Currently selected value      |
| menuMaxWidth        | string \| number                                                                                           | —                         | Max menu width                |
| menuMinWidth        | string \| number                                                                                           | —                         | Min menu width                |
| ariaMenuName        | string                                                                                                     | —                         | Accessible menu label         |
| options             | OptionsObject[] \| GroupedOptionsObject[]                                                                  | —                         | Option data                   |
| container           | HTMLElement \| () => HTMLElement \| null                                                                   | —                         | Portal container for dropdown |
| onOuterClick        | () => void                                                                                                 | —                         | Callback for clicks outside   |
| onOpenChange        | (isOpen: boolean) => void                                                                                  | —                         | Callback for open/close       |
| trigger             | (triggerContent, buttonProps) => void                                                                      | —                         | Custom trigger component      |
| hasError            | boolean                                                                                                    | false                     | Display error state           |
| search              | { searchPlaceholder: string; searchType?: 'contains' \| 'startsWith'; onSearch?: (value: string) => void } | —                         | Search options                |

---

# 20.Skeleton

---

## Purpose

Skeleton loading states provide **visual feedback** that content is actively loading.  
They indicate **where and how content will appear** once fully loaded.

Best suited for **content-rich layouts**, such as:

- Video grids
- Transcripts
- Lists (e.g., meetings, messages)

---

## SkeletonText

Represents **loading text** placeholders.

### Basic Usage

```jsx
import { SkeletonText } from '@loomhq/lens'
;<SkeletonText lines={1} size="body-md" />
```

### Sizes

```jsx
<>
  {availableSizes.map((size, index) => (
    <SkeletonText size={size} key={index} />
  ))}
</>
```

### Number of Lines

```jsx
<SkeletonText lines={3} />
```

### Animation

Use the `animated` prop to indicate **active loading**:

```jsx
<SkeletonText lines={3} animated={true} />
```

### Props

| name     | type     | default   | description                     |
| -------- | -------- | --------- | ------------------------------- |
| size     | TextSize | 'body-md' | Font size of the skeleton text  |
| lines    | number   | 1         | Number of text lines to display |
| animated | boolean  | false     | Enables loading animation       |

---

## SkeletonContainer

Represents **non-text UI elements** (e.g., avatar, icon, thumbnail).

### Basic Usage

```jsx
import { SkeletonContainer } from '@loomhq/lens'
;<SkeletonContainer />
```

### Setting Height, Width, and Radius

```jsx
<Split gap="large">
  <SkeletonContainer animated={true} />
  <SkeletonContainer
    height="24px"
    width="24px"
    radius="large"
    animated={true}
  />
  <SkeletonContainer
    height="1rem"
    width="32px"
    radius="medium"
    animated={true}
  />
</Split>
```

### Animation

```jsx
<Split gap="large">
  <SkeletonContainer />
  <SkeletonContainer animated={true} />
</Split>
```

### Props

| name     | type                                               | default | description               |
| -------- | -------------------------------------------------- | ------- | ------------------------- |
| animated | boolean                                            | false   | Enables loading animation |
| height   | string                                             | '40px'  | Height of the container   |
| width    | string                                             | '40px'  | Width of the container    |
| radius   | 'medium' \| 'large' \| 'xlarge' \| 'full' \| '175' | 'full'  | Border radius             |

---

## Combining SkeletonText and SkeletonContainer

Combine them to **represent richer UI elements**, such as cards or list items:

```jsx
<Container padding="large" radius="large" borderSide="all" borderColor="border">
  <SkeletonContainer animated={true} />
  <Spacer bottom="medium" />
  <SkeletonText lines={2} animated={true} />
</Container>
```

---

# 21.Switch

---

## Purpose

The `Switch` component is used to **toggle between two states** (on/off) and is commonly used for settings or preferences.

---

## Usage

```jsx
import { Switch } from '@loomhq/lens'
;<Switch />
```

---

## Sizes

```jsx
<Arrange gap="small">
  <Switch size="medium" />
  <Switch size="large" />
</Arrange>
```

---

## States

Use `isActive` to enable the switch (ON).  
Use `isDisabled` to disable interaction.

```jsx
<Arrange gap="small">
  <Switch />
  <Switch isActive />
  <Switch isDisabled />
  <Switch isActive isDisabled />
</Arrange>
```

---

## With Label

You can wrap a `Switch` in a `FormField` to provide a label:

```jsx
<FormField direction="row" label="Turn ON" labelFor="exampleSwitch">
  <Switch id="exampleSwitch" />
</FormField>
```

---

## Props

| name            | type                    | default  | description                                               |
| --------------- | ----------------------- | -------- | --------------------------------------------------------- |
| size            | 'medium' \| 'large'     | 'medium' | Sets the size of the switch                               |
| isActive        | boolean                 | false    | Determines if the switch is ON                            |
| isDisabled      | boolean                 | false    | Disables user interaction                                 |
| onChange        | React.ReactEventHandler | —        | Callback fired when the switch changes state              |
| ariaLabel       | string                  | —        | Provides an accessible label for screen readers           |
| ariaLabelledby  | string                  | —        | ID of element that labels the switch for accessibility    |
| ariaDescribedby | string                  | —        | ID of element that describes the switch for accessibility |

# 22.Tabs

---

## Purpose

The `Tabs` component is used to **organize content into multiple sections** where only one section is visible at a time. Tabs help improve content discoverability and reduce visual clutter.

---

## Usage

```jsx
import { Tabs, Tab } from '@loomhq/lens'
;<Tabs
  tabs={[
    { tabContent: 'First' },
    { tabContent: 'Second', isActive: true },
    { tabContent: 'Third' },
  ]}
/>
```

---

## Active Tab

Set the currently active tab with `isActive`:

```jsx
<Tabs
  tabs={[{ tabContent: 'First' }, { tabContent: 'Second', isActive: true }]}
/>
```

---

## Scroll Offset

`scrollOffset` allows tabs to scroll edge-to-edge on narrow screens. Use the same value as your page padding.

```jsx
<Tabs
  scrollOffset="var(--livePreviewPadding)"
  tabs={demoText.ordinals.map((title, index) => ({
    tabContent: title,
    isActive: index === 0,
  }))}
/>
```

---

## Full Width Tabs

`hasFullTabs` makes all tabs expand equally to fill the container:

```jsx
<Tabs
  hasFullTabs
  tabs={[
    { tabContent: 'Full', isActive: true },
    { tabContent: 'Width' },
    { tabContent: 'Tabs' },
  ]}
/>
```

---

## Bottom Border

Use `hasBottomBorder` to visually separate the tabs from the content:

```jsx
<Tabs
  hasBottomBorder
  tabs={[
    { tabContent: 'First', isActive: true },
    { tabContent: 'Second' },
    { tabContent: 'Third' },
  ]}
/>
```

---

## Tabs with Icons

Add icons to tabs using the `icon` prop:

```jsx
<Tabs
  tabs={[
    { tabContent: 'Tabs', icon: <SvgRecord />, isActive: true },
    { tabContent: 'With', icon: <SvgArrowForward /> },
    { tabContent: 'Icons', icon: <SvgBell /> },
  ]}
/>
```

---

## HTML Tag

Render tabs as `button` or `a` elements using `htmlTag`:

```jsx
<Tabs
  tabs={[
    { tabContent: 'Home', htmlTag: 'a', href: '/' },
    { tabContent: 'About', htmlTag: 'a', href: '/about' },
  ]}
/>
```

---

## Pilled Tabs

Use `isPilledDesign` for pill-shaped tabs. Defaults to `true` if `hasFullTabs` is set:

```jsx
<Tabs isPilledDesign tabs={tabsConfig} />
```

---

## Disabled Tabs

Show unavailable tabs with `isDisabled`:

```jsx
<Tabs
  isPilledDesign
  tabs={tabsConfig.map((tab) => ({
    ...tab,
    isDisabled: !tab.enabled,
  }))}
/>
```

---

## Tabs with Tooltips

Provide additional context via `tooltipProps`:

```jsx
const tabs = [
  {
    tabContent: 'Overview',
    tooltipProps: { content: 'View general information' },
  },
  {
    tabContent: 'Settings',
    tooltipProps: { content: 'Configure preferences', placement: 'top' },
  },
]
;<Tabs tabs={tabs} />
```

---

## With React Router

Use `Link` components for tab content while maintaining accessibility:

```jsx
<Tabs
  tabs={[
    {
      tabContent: (
        <Link tabIndex={-1} to="/">
          Home
        </Link>
      ),
      isActive: true,
      onClick: () => history.push('/'),
    },
    {
      tabContent: <Link to="/about">About</Link>,
      onClick: () => history.push('/about'),
    },
  ]}
/>
```

---

## Deprecated - Legacy Tab Structure

The old `<Tabs>` + `<Tab>` approach is deprecated and **should not be used**. Use the new `tabs` prop structure instead for proper accessibility and keyboard navigation.

---

## Props

### Tabs

| name            | type             | default | description                                 |
| --------------- | ---------------- | ------- | ------------------------------------------- |
| scrollOffset    | number \| string | —       | Space for scrollable tabs on narrow screens |
| hasFullTabs     | boolean          | false   | Makes all tabs expand to fill container     |
| children        | React.ReactNode  | —       | Legacy - child `<Tab>` elements             |
| tabs            | TabItem[]        | —       | Array of tab objects                        |
| isPilledDesign  | boolean          | false   | Enables pill-shaped design                  |
| hasBottomBorder | boolean          | false   | Adds bottom border underline                |

### Deprecated - Tab

| name           | type                      | default  | description                      |
| -------------- | ------------------------- | -------- | -------------------------------- |
| htmlTag        | 'a' \| 'button' \| 'span' | 'button' | HTML element type                |
| isDisabled     | boolean                   | false    | Disables the tab                 |
| isActive       | boolean                   | false    | Marks tab as active              |
| icon           | React.ReactNode           | —        | Icon element                     |
| children       | React.ReactNode           | —        | Tab label content                |
| isPilledDesign | boolean                   | false    | Pilled design for individual tab |

# 23.Text

---

## Overview

The `Text` component is the foundational typography primitive used across the system.  
It provides consistent sizing, semantic variants, alignment control, truncation, and advanced font configuration.

---

## Basic Usage

```jsx
import { Text } from '@loomhq/lens'
;<Text>Content</Text>
```

---

## Typography System

## Sizes

Heading sizes always render in **bold**, even if another `fontWeight` is provided.

Available sizes:

- body-sm
- body-md (default)
- body-lg
- heading-sm
- heading-md
- heading-lg

```jsx
<>
  {availableSizes.map((size, index) => (
    <Text size={size} key={index}>
      Size {size}
    </Text>
  ))}
</>
```

---

## Font Weights

> ⚠ `book` will be renamed to `regular` to align with Atlassian Design System.

Available weights:

- regular
- medium
- bold

```jsx
<Text fontWeight="regular">Weight regular</Text>
<Text fontWeight="medium">Weight medium</Text>
<Text fontWeight="bold">Weight bold</Text>
```

---

## Semantic Variants

Variants define **meaning and hierarchy**, not just appearance.

| Variant   | Intended Use      |
| --------- | ----------------- |
| mainTitle | Page-level titles |
| title     | Section headers   |
| body      | Paragraph content |

```jsx
<Arrange gap="small" columns="1fr">
  <Text variant="mainTitle">Variant mainTitle — {demoText.title}</Text>

  <Text variant="title">Variant title — {demoText.medium}</Text>

  <Text variant="body">Variant body — {demoText.long}</Text>
</Arrange>
```

---

## Alignment

```jsx
<>
  {['left', 'center', 'right'].map((alignment) => (
    <Container borderSide="bottom" key={alignment}>
      <Text alignment={alignment}>Align {alignment}</Text>
    </Container>
  ))}
</>
```

Options:

- left
- center
- right

---

## HTML Tag

Change the rendered HTML element using `htmlTag`.

```jsx
<>
  <Text htmlTag="h1">Tag h1</Text>
  <Text htmlTag="p">Tag p</Text>
  <Text htmlTag="span">Tag span</Text>
</>
```

Supported tags:

- h1
- h2
- h3
- h4
- p
- span
- div

### Combining Semantic Variant + HTML Tag

```jsx
<>
  <Text htmlTag="h2" variant="title">
    Text with h2 tag and title variant
  </Text>

  <Text htmlTag="h4" size="heading-lg">
    Text with h4 tag and size heading-lg
  </Text>
</>
```

---

## Styling Controls

## Color

Use design system palette tokens.

```jsx
<>
  <Text color="body">Text with color</Text>
  <Text color="bodyDimmed">Text with color</Text>
  <Text color="orange">Text with color</Text>
</>
```

---

## Font Family

Supports alternative font families (e.g., monospace).

```jsx
<>
  <Text fontFamily="mono">Monospace A1B2C3D4E5</Text>
  <Text>Regular A1B2C3D4E5</Text>
</>
```

Options:

- sans-serif (default)
- mono

---

## Advanced Font Settings

Enable OpenType features.

Example: tabular (monospaced) numbers.

```jsx
<Text fontSetting="tnum">02:03:04</Text>
```

Options:

- normal (default)
- tnum

---

## Truncation & Overflow

## Single-Line Ellipsis

```jsx
<Text hasEllipsis>{demoText.long}</Text>
```

---

## Multi-Line Ellipsis

```jsx
<Text hasEllipsis ellipsisLines={2}>
  {demoText.long}
</Text>
```

---

## No Wrap

Prevents wrapping entirely.

> ❗ Does not work if `hasEllipsis` is enabled.

```jsx
<Text noWrap>{demoText.long}</Text>
```

---

## Overflow Wrap

Controls how long tokens (like URLs) wrap.

Options:

- normal (default)
- break-word
- anywhere

```jsx
<Arrange gap="medium" columns="1fr 1fr 1fr">
  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      normal
    </Text>
    <Text overflowWrap="normal">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>

  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      break-word
    </Text>
    <Text overflowWrap="break-word">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>

  <Container maxWidth="180px" padding="small" borderSide="all">
    <Text size="body-sm" color="bodyDimmed">
      anywhere
    </Text>
    <Text overflowWrap="anywhere">
      https://example.com/very/long/url/that-overflows
    </Text>
  </Container>
</Arrange>
```

---

## Inline & Display Behavior

## Inline Text

Use `isInline` when rendering text inside other components without block spacing.

```jsx
<Text isInline>Inline text</Text>
```

---

## Dimmed Text

Use `isDimmed` for lower visual emphasis.

```jsx
<Text isDimmed>Secondary information</Text>
```

---

## Responsive Typography

## sizeMinMax

Allows responsive scaling between two size values.

```jsx
<Text sizeMinMax={['body-sm', 'body-lg']}>Responsive text</Text>
```

---

## Props

| Prop          | Type                                                   | Default      |
| ------------- | ------------------------------------------------------ | ------------ |
| size          | TextSize                                               | 'body-md'    |
| fontFamily    | 'sans-serif' \| 'mono'                                 | 'sans-serif' |
| fontWeight    | 'book' \| 'regular' \| 'medium' \| 'bold'              | 'regular'    |
| htmlTag       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'p' \| 'span' \| 'div' | 'span'       |
| fontSetting   | 'tnum' \| 'normal'                                     | 'normal'     |
| variant       | 'body' \| 'title' \| 'mainTitle'                       | —            |
| alignment     | 'left' \| 'center' \| 'right'                          | —            |
| color         | string                                                 | —            |
| isInline      | boolean                                                | false        |
| isDimmed      | boolean                                                | false        |
| hasEllipsis   | boolean                                                | false        |
| noWrap        | boolean                                                | false        |
| ellipsisLines | number                                                 | —            |
| overflowWrap  | 'normal' \| 'break-word' \| 'anywhere'                 | 'normal'     |
| sizeMinMax    | string[]                                               | —            |
| className     | string                                                 | —            |
| children      | React.ReactNode                                        | —            |

---

# 24.Textarea

Multi-line text input component for longer form content.

---

## Import

```tsx
import { Textarea } from '@loomhq/lens'
```

---

## Basic Usage

```tsx
<Textarea />
```

---

## Rows

Control the visible height using the `rows` prop.

```tsx
<Textarea rows={2} value={demoText.medium} onChange={() => console.log()} />
```

---

## Placeholder

```tsx
<Textarea placeholder="Placeholder" />
```

---

## Sizes

Available sizes:

- `small`
- `medium` (default)

```tsx
<Arrange columns="1fr" gap="small">
  <Textarea placeholder="small" size="small" />
  <Textarea placeholder="medium" size="medium" />
</Arrange>
```

---

## Resize Behavior

Control how the textarea can be resized.

Available options:

- `none`
- `both` (default)
- `horizontal`
- `vertical`

```tsx
<Arrange columns="1fr" gap="small">
  <Textarea resize="none" placeholder="none" rows={1} />
  <Textarea resize="both" placeholder="both" rows={1} />
  <Textarea resize="horizontal" placeholder="horizontal" rows={1} />
  <Textarea resize="vertical" placeholder="vertical" rows={1} />
</Arrange>
```

---

## Disabled State

Use `isDisabled` to prevent interaction.

```tsx
<Textarea
  isDisabled
  rows={2}
  value={demoText.long}
  onChange={() => console.log()}
/>
```

---

## Error State

Use the `error` prop to show validation feedback.

```tsx
<Textarea
  rows={2}
  value={demoText.short}
  onChange={() => console.log()}
  error="Invalid content"
/>
```

---

## Forwarding Refs

You can access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onButtonClick}>Focus this Textarea</Button>
      </Spacer>

      <Textarea ref={inputEl} />
    </>
  )
}
```

---

## Props

| Name        | Type                                             | Default    |
| ----------- | ------------------------------------------------ | ---------- |
| rows        | `number`                                         | `4`        |
| size        | `'small' \| 'medium'`                            | `'medium'` |
| resize      | `'none' \| 'both' \| 'horizontal' \| 'vertical'` | `'both'`   |
| error       | `string`                                         | `null`     |
| value       | `string`                                         | —          |
| placeholder | `string`                                         | —          |
| isDisabled  | `boolean`                                        | —          |
| onChange    | `React.ReactEventHandler`                        | —          |

---

# 25.TextButton

A lightweight button used for secondary actions, inline actions, and low-emphasis interactions.

---

## Import

```tsx
import { TextButton } from '@loomhq/lens'
```

---

## Usage Guidelines

## When to Use

Use `TextButton` for:

- Secondary actions
- Inline actions within content
- Low-emphasis controls
- Toolbar actions
- Compact UI interactions

Avoid using `TextButton` for primary actions — use `Button` instead.

---

## Basic Usage

```tsx
<TextButton icon={<SvgSearch />}>Search</TextButton>
```

---

### Sizes

Available sizes:

- `small`
- `medium` (default)
- `large`

```tsx
<Arrange gap="xsmall">
  <TextButton size="small" icon={<SvgAdd />}>
    Small
  </TextButton>

  <TextButton icon={<SvgAdd />}>Medium</TextButton>

  <TextButton size="large" icon={<SvgAdd />}>
    Large
  </TextButton>
</Arrange>
```

---

### With Icon

```tsx
<Arrange gap="xsmall">
  <TextButton icon={<SvgShare />}>Share</TextButton>

  <TextButton icon={<SvgAdd />}>New Item</TextButton>

  <TextButton icon={<SvgSearch />}>Search</TextButton>
</Arrange>
```

---

### Icon Position

Control icon placement with `iconPosition`.

Options:

- `left` (default)
- `right`

```tsx
<Arrange gap="xsmall">
  <TextButton iconPosition="left" icon={<SvgArrowLeft />}>
    Left
  </TextButton>

  <TextButton iconPosition="right" icon={<SvgArrowRight />}>
    Right
  </TextButton>
</Arrange>
```

---

### Without Icon

```tsx
<Arrange gap="xsmall">
  <TextButton>Open</TextButton>
  <TextButton>Archive</TextButton>
  <TextButton>Delete</TextButton>
</Arrange>
```

---

### Offset

Use `offsetSide` to align the button flush with one side by offsetting padding.

Options:

- `left`
- `right`

```tsx
<Arrange gap="medium" justifyContent="space-between">
  <Container borderSide="left" borderColor="red" borderWidth="2px">
    <Arrange gap="xsmall">
      <TextButton offsetSide="left">Archive</TextButton>

      <TextButton>Delete</TextButton>
    </Arrange>

    <TextButton offsetSide="left" icon={<SvgFolder />}>
      Save
    </TextButton>
  </Container>

  <Container borderSide="right" borderColor="red" borderWidth="2px">
    <Arrange gap="xsmall" justifyContent="end">
      <TextButton>Archive</TextButton>

      <TextButton offsetSide="right">Delete</TextButton>
    </Arrange>

    <Arrange justifyContent="end">
      <TextButton offsetSide="right" icon={<SvgFolder />}>
        Save
      </TextButton>
    </Arrange>
  </Container>
</Arrange>
```

---

## Active State

Use `isActive` to indicate selected or current state.

```tsx
<TextButton isActive icon={<SvgAdd />}>
  New Item
</TextButton>
```

---

## Disabled State

```tsx
<TextButton isDisabled icon={<SvgAdd />}>
  New Item
</TextButton>
```

---

## Rendering as Link

Use `htmlTag="a"` with `href`.

```tsx
<TextButton htmlTag="a" href="https://example.com" target="_blank">
  Open Link
</TextButton>
```

---

## Forwarding Refs

Access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const ref = useRef(null)

  const onClick = () => {
    ref.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <TextButton ref={ref} icon={<SvgAdd />}>
          New Item
        </TextButton>
      </Spacer>

      <TextButton onClick={onClick}>Click to focus</TextButton>
    </>
  )
}
```

---

## Props

| Name         | Type                             | Default      |
| ------------ | -------------------------------- | ------------ |
| size         | `'small' \| 'medium' \| 'large'` | `'medium'`   |
| iconPosition | `'left' \| 'right'`              | `'left'`     |
| onClick      | `React.ReactEventHandler`        | —            |
| isDisabled   | `boolean`                        | —            |
| isActive     | `boolean`                        | —            |
| icon         | `React.ReactNode`                | —            |
| children     | `React.ReactNode`                | **required** |
| htmlTag      | `'button' \| 'a'`                | `'button'`   |
| offsetSide   | `'left' \| 'right'`              | —            |
| href         | `string`                         | —            |
| target       | `string`                         | —            |
| type         | `string`                         | —            |

---

# 26.TextInput

A single-line input field used to enter strings of text, numbers, or characters.  
Commonly used in forms, dialogs, and search interfaces.

---

## Import

```tsx
import { TextInput } from '@loomhq/lens'
```

---

## Usage Guidelines

## Purpose

Use `TextInput` when collecting structured or short-form data such as:

- Names
- Emails
- Passwords
- Search queries
- Numbers
- Dates

---

## ✅ Dos

- Match field width to the intended input.
- Use vertically stacked fields unless they can logically be paired (e.g., first/last name).
- Add optional in-line links only at the end of helper text and use sparingly.
- Use with `<FormField>` to provide a label.
- Always include a `type` that best matches the data (email, date, number, etc).

---

## ❌ Don’ts

- Don’t use wide fields for short inputs (ZIP code, CVV, small numbers).
- Don’t use ALL CAPS in labels or placeholders.
- Avoid inputs without labels.
  - If visually hidden, ensure the label is accessible (e.g. `srOnly` utility).
  - Placeholder text alone is not a replacement for a label.

---

## Basic Usage

```tsx
<TextInput />
```

---

## With Icon

The `icon` prop accepts:

- A React node (SVG component)
- An image URL or Data URL

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput placeholder="Search" icon={<SvgSearch />} size="small" />
  <TextInput placeholder="Search" icon={<SvgSearch />} size="medium" />
  <TextInput placeholder="Search" icon={<SvgSearch />} size="large" />

  <TextInput
    placeholder="Search"
    icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
    size="small"
  />
</Arrange>
```

---

## Add-On

The `addOn` appears on the right side of the input (opposite of `icon`).

Best used with:

- `Icon`
- `IconButton`

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput
    type="password"
    placeholder="•••••••••••"
    size="small"
    addOn={<IconButton icon={<SvgEye />} />}
  />

  <TextInput
    size="large"
    icon={<SvgSearch />}
    addOn={<IconButton icon={<SvgCode />} />}
  />
</Arrange>
```

---

## Sizes

| Size   | Usage Context                                |
| ------ | -------------------------------------------- |
| small  | Modals, mobile, compact layouts              |
| medium | Default (36px height), covers most use cases |
| large  | Marketing pages, landing pages               |

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput placeholder="Placeholder" size="small" />
  <TextInput placeholder="Placeholder" size="medium" />
  <TextInput placeholder="Placeholder" size="large" />
</Arrange>
```

---

## Type

Choose a type that best matches the expected data.

Supported types:

- `date`
- `datetime-local`
- `email`
- `month`
- `number`
- `password`
- `search`
- `tel`
- `text` (default)
- `time`
- `url`
- `week`

```tsx
<Arrange columns={[13, '1fr']} gap="small">
  date
  <TextInput type="date" />
  email
  <TextInput type="email" />
  number
  <TextInput type="number" />
  password
  <TextInput type="password" />
  search
  <TextInput type="search" />
  text
  <TextInput type="text" />
</Arrange>
```

---

## Error State

Use `hasError` for validation styling.

```tsx
<TextInput hasError value="Some value" onChange={() => {}} />
```

---

## Disabled State

```tsx
<Arrange columns="1fr" gap="small">
  <TextInput isDisabled placeholder="Some value" />

  <TextInput isDisabled placeholder="Search" icon={<SvgSearch />} />

  <TextInput
    isDisabled
    placeholder="Search"
    icon="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png"
  />
</Arrange>
```

---

## Forwarding Refs

Access the DOM node using `ref`.

```tsx
import { useRef } from 'react'
;() => {
  const ref = useRef(null)

  const onButtonClick = () => {
    ref.current?.focus()
  }

  return (
    <>
      <Spacer bottom="small">
        <Button onClick={onButtonClick}>Focus</Button>
      </Spacer>

      <TextInput ref={ref} />
    </>
  )
}
```

---

## Props

| Name        | Type                                                                                                                                     | Default    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type        | `'date' \| 'datetime-local' \| 'email' \| 'month' \| 'number' \| 'password' \| 'search' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week'` | `'text'`   |
| size        | `'small' \| 'medium' \| 'large'`                                                                                                         | `'medium'` |
| placeholder | `string`                                                                                                                                 | —          |
| value       | `string \| number`                                                                                                                       | —          |
| onFocus     | `React.ReactEventHandler`                                                                                                                | —          |
| onChange    | `React.ReactEventHandler`                                                                                                                | —          |
| onBlur      | `React.ReactEventHandler`                                                                                                                | —          |
| onKeyDown   | `React.ReactEventHandler`                                                                                                                | —          |
| isDisabled  | `boolean`                                                                                                                                | —          |
| icon        | `React.ReactNode \| string`                                                                                                              | —          |
| id          | `string`                                                                                                                                 | —          |
| hasError    | `boolean`                                                                                                                                | —          |
| addOn       | `React.ReactNode`                                                                                                                        | —          |

---

# 27.Typeahead

### Usage

Supports async filtering, customizable loading feedback, and empty states.

**Note:** For optimal UX, it is recommended to avoid using dividers within the options of the Typeahead component.

---

### With Typeahead

```javascript
;() => {
  const allOptions = [
    {
      group: 'Group 1',
      items: [
        { value: 'first', title: 'First' },
        { value: 'second', title: 'Second' },
        { value: 'third', title: 'Third' },
      ],
    },
    {
      group: 'Group 2',
      items: [
        { value: 'fourth', title: 'fourth', icon: <SvgAdd /> },
        { value: 'fifth', title: 'fifth', icon: <SvgArchive /> },
        { value: 'sixth', title: 'sixth', icon: <SvgZap /> },
      ],
    },
  ]

  const [options, setOptions] = useState(allOptions)
  const [selected, setSelected] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleTypeahead = (inputValue) => {
    setIsLoading(true)

    // Replace this with an actual API call
    const delay = setTimeout(() => {
      const lower = inputValue.toLowerCase() || ''

      const isGrouped =
        Array.isArray(allOptions) &&
        allOptions.length > 0 &&
        allOptions[0].hasOwnProperty('group')

      let filtered

      if (!inputValue) {
        filtered = allOptions
      } else if (isGrouped) {
        filtered = allOptions
          .map((group) => {
            const items = group.items.filter((item) =>
              item.title.toLowerCase().includes(lower),
            )
            return items.length > 0 ? { ...group, items } : null
          })
          .filter(Boolean)
      } else {
        filtered = allOptions.filter((item) =>
          item.title.toLowerCase().includes(lower),
        )
      }

      setOptions(filtered)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(delay)
  }

  const handleChange = (selectedOption) => {
    if (selectedOption && typeof selectedOption !== 'string') {
      setSelected(selectedOption.value)
    } else {
      setSelected(null)
    }
  }

  return (
    <Typeahead
      selectedOptionValue={selected}
      onOptionChange={handleChange}
      onInputValueChange={handleTypeahead}
      options={options}
      placeholder="Search numbers..."
      isLoading={isLoading}
      loadingMessage={<div>Loading numbers</div>}
      emptyResultsMessage="No numbers"
    />
  )
}
```

### Loading

```tsx
<Typeahead
  placeholder="Choose an option"
  isLoading
  loadingMessage={<div>Loading content...</div>}
  options={[]}
/>
```

### Disabled

```tsx
<Typeahead placeholder="No parent" isDisabled options={[]} />
```

### Forwarding refs

Use the `ref` prop to access the DOM node.

```tsx
;() => {
  const ref = useRef(null)
  const onButtonClick = () => ref.current.focus()
  return (
    <Arrange gap="1">
      <Button onClick={onButtonClick}>Focus</Button>
      <Typeahead
        ref={ref}
        placeholder="Search options..."
        onOptionChange={(option) => console.log(option)}
        selectedOptionValue={null}
        options={[
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
        ]}
      />
    </Arrange>
  )
}
```

### With error

```tsx
<Typeahead
  placeholder="Choose an option"
  errorMessage="Sample Error Message"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
  ]}
/>
```

## Props Table for Typeahead Component

| Name                | Type                                            | Default  | Description                                                   |
| ------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------- |
| menuZIndex          | number                                          | 1100     | The z-index of the dropdown menu.                             |
| menuMaxHeight       | string \| number                                | 34       | Maximum height of the dropdown menu.                          |
| menuPosition        | 'left' \| 'right' \| 'topRight' \| 'topLeft'    | 'left'   | Position of the menu relative to the input.                   |
| options             | OptionsObject[] \| GroupedOptionsObject[]       | required | The array of options to display. Can be grouped.              |
| selectedOptionValue | string \| null                                  | required | The currently selected option value.                          |
| placeholder         | React.ReactNode                                 |          | Placeholder text or component inside the input.               |
| isDisabled          | boolean                                         |          | Whether the Typeahead input is disabled.                      |
| isLoading           | boolean                                         |          | Whether the Typeahead is currently loading options.           |
| loadingMessage      | React.ReactNode                                 |          | Custom content to display while loading.                      |
| emptyResultsMessage | React.ReactNode                                 |          | Message to show when no options are found.                    |
| errorMessage        | string                                          |          | Error message to display below the input.                     |
| container           | HTMLElement                                     |          | The container element for the Typeahead.                      |
| ariaMenuName        | string                                          |          | Aria-label for accessibility of the menu.                     |
| menuMaxWidth        | string \| number                                |          | Maximum width of the dropdown menu.                           |
| menuMinWidth        | string \| number                                |          | Minimum width of the dropdown menu.                           |
| onInputValueChange  | (inputValue: string) => void                    |          | Callback triggered on input change.                           |
| onOptionChange      | (selectedOption: OptionsObject \| null) => void |          | Callback triggered when an option is selected.                |
| onOpenChange        | (isOpen: boolean) => void                       |          | Callback triggered when the menu opens or closes.             |
| onOuterClick        | () => void                                      |          | Callback triggered when a click occurs outside the component. |

# 28.Toast

## Usage Guidelines

### Purpose

Toasts are used to show confirmations of user action.

### Dos

- Keep messaging clear and short.

### Don’ts

- Show more than one toast at a time.
- Do **not** use toasts for warning or error alerts.  
  Instead, use **NotificationBar**.

---

## Variants

Toasts should behave and appear consistently within a platform while also respecting the unique context and needs of each platform.

Each platform has its own Toast variant.

- **Chrome Extension Toasts**  
  Appear from the **top of the screen** so they stay close to the recorder.

- **Web App Toasts**  
  Appear from the **bottom center of the screen**, which interferes the least with other web-app features and follows common industry practice.

---

## Usage

```javascript
import { Toast } from '@loomhq/lens'
;<Toast>Content</Toast>
```

---

## Examples

## Simple Toast

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
        Message sent!
      </Toast>
    </>
  )
}
```

---

## Toast with Custom Content

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
        <Arrange alignItems="start" gap="small">
          <Icon icon={<SvgLink />} color="bodyInverse" />
          <Text>
            You successfully changed Mira Baptista’s role from Viewer to
            Creator. Please review the email we sent you.
          </Text>
        </Arrange>
      </Toast>
    </>
  )
}
```

---

## Toast with Longer Timeout

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast
        isOpen={isOpen}
        onCloseClick={() => setIsOpen(false)}
        duration="long"
      >
        <Text>
          You have successfully learnt that the short timeout is 3s and long is
          8s.
        </Text>
      </Toast>
    </>
  )
}
```

---

## Toast in Chrome Extension

```javascript
;() => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Trigger Toast
      </Button>

      <Toast
        isOpen={isOpen}
        onCloseClick={() => setIsOpen(false)}
        duration="short"
        platform="chrome-extension"
      >
        <Text>
          This is a toast in the chrome extension. It shows up at the top!
        </Text>
      </Toast>
    </>
  )
}
```

---

## Props

| Name         | Type                              | Default     |
| ------------ | --------------------------------- | ----------- |
| zIndex       | number                            | 1100        |
| duration     | `'short' \| 'medium' \| 'long'`   | `'short'`   |
| platform     | `'web-app' \| 'chrome-extension'` | `'web-app'` |
| children     | `React.ReactNode`                 | —           |
| isOpen       | `boolean`                         | —           |
| onCloseClick | `() => void`                      | —           |

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

# 30.Loader

## Usage Guidelines

## Usage

```javascript
import { Loader } from '@loomhq/lens'
;<Loader />
```

---

## Sizes

```javascript
<Arrange gap="medium">
  <Loader size="small" />
  <Loader size="medium" />
  <Loader size="large" />
</Arrange>
```

---

## Color

Use one of the **palette colors**.

```javascript
<Loader color="orange" />
```

---

## Props

| Name  | Type                             | Default    |
| ----- | -------------------------------- | ---------- |
| color | string                           | `'body'`   |
| size  | `'small' \| 'medium' \| 'large'` | `'medium'` |

---

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

# 32.Ellipses Loader

## Usage Guidelines

## Usage

```javascript
import { EllipsesLoader } from '@loomhq/lens'
;<EllipsesLoader />
```

---

## Sizes

```javascript
<Arrange gap="medium">
  <EllipsesLoader size="small" />
  <EllipsesLoader size="medium" />
  <EllipsesLoader size="large" />
</Arrange>
```

---

## Color

Use one of the **palette colors**.

```javascript
<EllipsesLoader color="orange" />
```

---

## Props

| Name  | Type                             | Default    |
| ----- | -------------------------------- | ---------- |
| color | string                           | `'body'`   |
| size  | `'small' \| 'medium' \| 'large'` | `'medium'` |

---

# 33.Waveform Loader

## Usage Guidelines

## Usage

```javascript
import { WaveformLoader } from '@loomhq/lens'
;<WaveformLoader />
```

---

## Speeds

Use **fast** for quick loading tasks (e.g., generating a title).  
Use **slow** for continuous loading tasks (e.g., transcript processing).

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

# 34.Align

## Usage

```javascript
import { Align } from '@loomhq/lens'
;<Align>Content</Align>
```

---

## Alignments

Available alignment values:

- `topLeft`
- `topCenter`
- `topRight`
- `centerLeft`
- `center`
- `centerRight`
- `bottomLeft`
- `bottomCenter`
- `bottomRight`

```javascript
<DemoBox>
  <Arrange columns="repeat(3, 1fr)" alignItems="stretch">
    {availableAlignments.map((alignment, index) => (
      <Container
        key={index}
        padding="small"
        borderColor="background"
        borderSide="all"
        minHeight={10}
      >
        <Align alignment={alignment}>{alignment}</Align>
      </Container>
    ))}
  </Arrange>
</DemoBox>
```

---

## Examples

## Icon alignments inside a Container

```javascript
<Arrange>
  <Container height={8} width={8} borderSide="all">
    <Align alignment="centerRight">
      <Icon icon={<SvgArrowForward />} />
    </Align>
  </Container>

  <Container height={8} width={8} borderSide="all">
    <Align alignment="center">
      <Icon icon={<SvgFiberManualRecord />} />
    </Align>
  </Container>

  <Container height={8} width={8} borderSide="all">
    <Align alignment="bottomLeft">
      <Icon icon={<SvgClose />} />
    </Align>
  </Container>
</Arrange>
```

---

## Semantic HTML

Use the `htmlTag` prop to render a **semantic HTML element** when appropriate.

Only default to `div` if no other element fits better.

Example options include:

- `header`
- `article`
- `section`
- `nav`
- `aside`
- `footer`
- `main`

---

## Responsive Props

Responsive props allow values to change based on **breakpoints**.

Pass an object where the **key represents the min-width breakpoint**.

```javascript
prop={{
  default: 'xsmall',
  xsmall: 'xsmall',
  small: 'xsmall',
  medium: 'large',
  large: 'xlarge',
}}
```

---

## Custom Breakpoints

You can define custom breakpoints using `em` values.

```javascript
prop={{
  '12em': 'xsmall',
  '28em': 'large',
}}
```

---

## Available Breakpoints

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

---

## Responsive Example

Resize the browser to see how the alignment changes.

```javascript
<DemoBox width="100%" height={20}>
  <Align
    alignment={{
      default: 'bottomRight',
      xsmall: 'bottomRight',
      small: 'center',
      medium: 'topCenter',
      large: 'centerRight',
    }}
  >
    Content
  </Align>
</DemoBox>
```

---

## Props

| Name      | Type                                                                                                                                                     | Default    | Notes                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------- |
| alignment | `ResponsiveType<'topLeft' \| 'topCenter' \| 'topRight' \| 'centerLeft' \| 'center' \| 'centerRight' \| 'bottomLeft' \| 'bottomCenter' \| 'bottomRight'>` | `'center'` | Supports responsive values |
| htmlTag   | `'div' \| 'header' \| 'article' \| 'section' \| 'nav' \| 'aside' \| 'footer' \| 'main'`                                                                  | `'div'`    | Semantic HTML element      |
| children  | `React.ReactNode`                                                                                                                                        | required   | Content to align           |

# 35.Arrange

## Content

```text
Content
Content
Content
```

---

## Usage

```javascript
import { Arrange } from '@loomhq/lens'
;<Arrange>
  <div>Content</div>
  <div>Content</div>
  <div>Content</div>
</Arrange>
```

Arrange is **built on CSS Grid**. Learn more about CSS Grid: [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

---

## Gap

```javascript
<DemoBox boxType="outline">
  <Arrange gap="medium">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Align and Justify

Use `alignItems`, `alignContent`, `justifyItems`, and `justifyContent` similar to CSS Grid.

```javascript
<>
  <DemoBox boxType="outline">
    <Arrange alignItems="end" height={15}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange alignContent="end" height={15}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange justifyItems="end" columns={['1fr', '1fr', '1fr']}>
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>

  <DemoBox boxType="outline">
    <Arrange justifyContent="end">
      <DemoBox padding="medium">Content</DemoBox>
      <DemoBox padding="small">Content</DemoBox>
      <DemoBox padding="xsmall">Content</DemoBox>
    </Arrange>
  </DemoBox>
</>
```

---

## Columns

Works like `grid-template-columns`. Can pass a **string** or **array** of values.

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" columns={['1fr', '2fr', '10rem']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>

<DemoBox boxType="outline">
  <Arrange gap="small" columns={['1fr', '2fr', 20]}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>

<DemoBox boxType="outline">
  <Arrange gap="small" columns="1fr 2fr 10rem">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

For **responsive layouts**, use CSS `auto-fill()` or `auto-fit()`:

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" columns="repeat(auto-fit, minmax(10rem, 1fr))">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Rows

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" rows={['4rem', '8rem', 'auto']} justifyContent="stretch">
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
    <DemoBox height="100%" padding="xsmall">
      Content
    </DemoBox>
  </Arrange>
</DemoBox>
```

---

## Auto Flow

`autoFlow` determines whether items are placed in **rows or columns** automatically.

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" autoFlow="column">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
  <br />
  <Arrange gap="small" autoFlow="row">
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## HTML List Tags

Use `htmlTag` for semantic lists:

```javascript
<DemoBox boxType="outline">
  <Arrange gap="small" htmlTag="ul">
    <li>
      <DemoBox padding="small">Item 1</DemoBox>
    </li>
    <li>
      <DemoBox padding="small">Item 2</DemoBox>
    </li>
    <li>
      <DemoBox padding="small">Item 3</DemoBox>
    </li>
  </Arrange>
</DemoBox>
```

---

## Responsive Props

Pass responsive objects where keys are **min-width breakpoints**:

```javascript
<DemoBox boxType="outline">
  <Arrange
    gap={{
      default: 'xsmall',
      xsmall: 'small',
      small: 'medium',
      medium: 'large',
      large: 'xlarge',
    }}
    columns={{ default: ['2fr', '1fr'], '65em': ['1fr', '1fr', '1fr'] }}
  >
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
    <DemoBox padding="small">Content</DemoBox>
  </Arrange>
</DemoBox>
```

---

## Props

| Name           | Type                                                                                                               | Default    | Notes                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------ |
| alignItems     | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'baseline'>`                                          | `'center'` | Align items vertically   |
| justifyContent | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'>` | `'start'`  | Align items horizontally |
| htmlTag        | `'div' \| 'ul' \| 'ol' \| 'li'`                                                                                    | `'div'`    | Semantic element         |
| children       | `React.ReactNode`                                                                                                  | required   | Items inside Arrange     |
| width          | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive width         |
| height         | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive height        |
| minWidth       | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive min width     |
| minHeight      | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive min height    |
| maxWidth       | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive max width     |
| maxHeight      | `ResponsiveType<string \| number>`                                                                                 | —          | Responsive max height    |
| gap            | `ResponsiveType<string \| number> \| null`                                                                         | —          | Grid gap                 |
| justifyItems   | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch'>`                                                        | —          | Grid justify-items       |
| alignContent   | `ResponsiveType<'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'>` | —          | Grid align-content       |
| autoFlow       | `ResponsiveType<'column' \| 'row'>`                                                                                | —          | Grid auto-flow           |
| columns        | `ResponsiveGridSections`                                                                                           | —          | Defines grid columns     |
| rows           | `ResponsiveGridSections`                                                                                           | —          | Defines grid rows        |

# 36.Backdrop

Backdrop provides a full-screen overlay that can be used to focus attention on a specific piece of content.

---

## Usage

### Empty Backdrop

```javascript
import { Backdrop, Button, Container } from '@loomhq/lens'
import React from 'react'

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
        Open Backdrop
      </Button>
      <Backdrop isOpen={isOpen}>
        <Container padding="large">
          <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
            Close Backdrop
          </Button>
        </Container>
      </Backdrop>
    </div>
  )
}
```

---

### Backdrop with Custom Card

```javascript
import { Backdrop, Button, Container } from '@loomhq/lens'
import React from 'react'

const ExampleCustom = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)} variant="primary">
        Open Backdrop
      </Button>

      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Container height="100%" paddingTop="12vw">
          <Container
            onClick={(e) => e.stopPropagation()}
            maxWidth={80}
            width="100%"
            margin="0 auto"
            padding="large"
            backgroundColor="white"
            radius="medium"
            shadow="large"
          >
            <div>Backdrop content</div>
            <Button onClick={() => setIsOpen(!isOpen)}>Close Backdrop</Button>
          </Container>
        </Container>
      </Backdrop>
    </div>
  )
}
```

> **Note:** Clicking outside the inner card container will trigger the `Backdrop` `onClick` handler, closing the backdrop.

---

## Props

| Name            | Type   | Default          | Notes                              |
| --------------- | ------ | ---------------- | ---------------------------------- |
| zIndex          | number | `1000`           | Stacking order of the backdrop     |
| backgroundColor | string | `'backdropDark'` | Sets the backdrop background color |

# 37.Container

`Container` is a versatile layout component that provides padding, borders, colors, radius, and responsive sizing for content blocks.

---

## Usage

```javascript
import { Container } from '@loomhq/lens'
;<Container>Content</Container>
```

---

## Border

Use the `borderSide` prop to specify which side(s) the border should appear on, and `borderColor` to override the default color.

```javascript
<Arrange gap="medium">
  <Container padding="small" borderSide="all">
    with default border
  </Container>
  <Container padding="small" borderSide="all" borderColor="primary">
    with custom border color
  </Container>
  <Container
    padding="small"
    borderSide="all"
    borderColor="primary"
    borderWidth="2px"
  >
    with custom border color and width
  </Container>
</Arrange>
```

---

## Radius

Use the `radius` prop to adjust the border radius.

```javascript
<Split gap="medium">
  {availableRadii.map((radius) => (
    <Container
      key={radius}
      radius={radius}
      borderSide="all"
      borderWidth="2px"
      padding="large"
    >
      with radius {radius}
    </Container>
  ))}
</Split>
```

---

## Color

Set `borderColor`, `backgroundColor`, and `contentColor` using palette colors.

```javascript
<Container
  borderColor="primary"
  contentColor="primary"
  backgroundColor="highlight"
  borderSide="all"
  padding="medium"
>
  Color
</Container>
```

---

## Position

You can use `position`, `top`, `right`, `bottom`, `left`, and `overflow` to control layout and stacking.

```javascript
<Container
  position="relative"
  paddingY="xlarge"
  paddingX="medium"
  borderSide="all"
  borderWidth="2px"
  radius="medium"
  maxWidth={36}
>
  <Container position="absolute" top="xsmall" right="xsmall">
    <IconButton icon={<SvgClose />} />
  </Container>
  Content
</Container>
```

---

## Spacing and Dimensions

Supports `padding`, `margin`, `minHeight`, `maxWidth`, etc.

**Semantic spacing values:**

| Name    | Rem  | Px  |
| ------- | ---- | --- |
| xsmall  | 0.25 | 4   |
| small   | 0.5  | 8   |
| medium  | 1    | 16  |
| large   | 1.5  | 24  |
| xlarge  | 2.5  | 40  |
| xxlarge | 4    | 64  |

**Number values** are multiplied by 8 and converted to `rem`.  
**String values** accept any valid CSS measurement (`auto`, `50%`, `10vw`, etc.).

```javascript
<Container padding="1rem" maxWidth="50%">Content</Container>
<Container padding="large" maxWidth={20}>Content</Container>
```

---

## Semantic HTML

Use `htmlTag` prop to render a semantic HTML element (`div`, `section`, `header`, `footer`, `main`, `span`, `form`, `table`, etc.).

---

## Responsive Props

Pass an object keyed by breakpoints:

```javascript
padding={{
  default: 'xsmall',
  xsmall: 'small',
  small: 'medium',
  medium: 'large',
  large: 'xlarge',
}}
```

Available breakpoints:

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

---

## Refs

Use `refHandler` to access the DOM element from a parent component.

```javascript
const ref = useRef()

const refHandler = (newRef) => {
  ref.current = newRef
}

;<Container refHandler={refHandler}>
  <Text>I have a ref value</Text>
</Container>
```

---

## Props

| Name                                                                                    | Type                                              | Default    | Notes                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- | -------------------------------------------- |
| borderWidth                                                                             | string \| number                                  | `'1px'`    | Border thickness                             |
| htmlTag                                                                                 | string                                            | `'div'`    | Semantic HTML element                        |
| backgroundColor                                                                         | string                                            |            | Container background color                   |
| backgroundImage                                                                         | string                                            |            | CSS background image                         |
| contentColor                                                                            | string                                            |            | Text/content color                           |
| borderColor                                                                             | string                                            |            | Border color                                 |
| radius                                                                                  | string                                            | `'medium'` | Border radius                                |
| borderSide                                                                              | `'all' \| 'left' \| 'right' \| 'top' \| 'bottom'` |            | Border side(s)                               |
| shadow                                                                                  | `'small' \| 'medium' \| 'large'`                  |            | Box shadow                                   |
| padding / paddingX / paddingY / paddingLeft / paddingRight / paddingTop / paddingBottom | ResponsiveType<string \| number>                  |            | Padding values                               |
| margin / marginX / marginY / marginLeft / marginRight / marginTop / marginBottom        | ResponsiveType<string \| number>                  |            | Margin values                                |
| width / height / minWidth / minHeight / maxWidth / maxHeight                            | ResponsiveType<string \| number>                  |            | Sizing values                                |
| children                                                                                | React.ReactNode                                   | required   | Content inside container                     |
| position                                                                                | string                                            |            | CSS position                                 |
| overflow                                                                                | string                                            |            | Overflow behavior                            |
| top / bottom / left / right                                                             | ResponsiveType<string \| number>                  |            | Position offsets                             |
| zIndex                                                                                  | number \| string                                  |            | Stacking order                               |
| refHandler                                                                              | function                                          |            | Pass a function to receive the container ref |

# 38.ErrorContainer

`ErrorContainer` is used to display inline errors close to the component where the error occurs. This is especially useful for buttons, inputs, or components that trigger actions like GraphQL mutations.

---

## Purpose

ErrorContainers handle displaying inline errors as close to the source of the error (and the action to resolve it) as possible. For example, `ErrorContainer` can be wrapped around a `Button` component that calls a GraphQL mutation. See the Errors page for more information on how to handle general errors.

## Guidance

## Wrap your component with the ErrorContainer to highlight when an error occurs.

## Usage

```javascript
import { ErrorContainer } from '@loomhq/lens'
;<ErrorContainer errorActive={true}>{children}</ErrorContainer>
```

---

## Examples

### Standard

Click a button to toggle an error:

```javascript
;() => {
  const [errorIsActive, setErrorIsActive] = React.useState(false)

  return (
    <ErrorContainer errorActive={errorIsActive}>
      <Arrange autoFlow="row" gap="xsmall">
        <Text>Click this button to trigger an error</Text>
        <Button
          onClick={() => setErrorIsActive(!errorIsActive)}
          variant="primary"
        >
          Trigger error
        </Button>
      </Arrange>
    </ErrorContainer>
  )
}
```

---

### With Custom Error Message

You can override the default error message:

```javascript
;() => {
  const [errorIsActive, setErrorIsActive] = React.useState(false)
  const errorMessage = 'Something went wrong.'

  return (
    <ErrorContainer errorActive={errorIsActive} errorMessage={errorMessage}>
      <Arrange autoFlow="row" gap="xsmall">
        <Text>Click this button to trigger an error</Text>
        <Button
          onClick={() => setErrorIsActive(!errorIsActive)}
          variant="primary"
        >
          Trigger error
        </Button>
      </Arrange>
    </ErrorContainer>
  )
}
```

---

## Props

| Name         | Type              | Default                                | Notes                                                 |
| ------------ | ----------------- | -------------------------------------- | ----------------------------------------------------- |
| errorMessage | string            | `"Oops, that didn't work. Try again."` | Custom error message to display                       |
| children     | `React.ReactNode` | required                               | The component(s) being wrapped by the error container |
| errorActive  | boolean           | required                               | Controls whether the error message is displayed       |

---

## Guidance

- Wrap your interactive component with `ErrorContainer` to show errors inline.
- Keep error messages short and actionable for the best user experience.

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

# 41.Split

`Split` is a flexbox-based layout component used to arrange elements horizontally or vertically with flexible spacing, alignment, and wrapping options. Use `SplitSection` for flex-item properties like `grow`, `shrink`, and `basis`.

---

## Usage

```javascript
import { Split, SplitSection } from '@loomhq/lens'
;<Split>
  <div>Content</div>
  <SplitSection grow={1}>Content</SplitSection>
</Split>
```

> All valid HTML elements can be children of `Split`, but `SplitSection` is required to use flex-item properties.

---

## Based on CSS flexbox

Split component is built with CSS flexbox. Learn more about CSS flexbox A Complete Guide to Flexbox.

## Gap

Use `gap` to set equal spacing for rows and columns:

```javascript
<Split gap="medium">
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

Use `rowGap` and `columnGap` to set independent spacing for each axis:

```javascript
<Split rowGap="medium" columnGap="small">
  <DemoBox padding="small">{demoText.medium}</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

---

## Align and Justify

`Split` supports flexbox alignment properties:

- `alignItems`
- `alignContent`
- `justifyContent`

```javascript
<Split alignItems="flex-end" height={15}>
  <DemoBox padding="medium">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
  <DemoBox padding="xsmall">Content</DemoBox>
</Split>

<Split justifyContent="space-between">
  <DemoBox padding="medium">Content</DemoBox>
  <DemoBox padding="xsmall">Content</DemoBox>
  <DemoBox padding="small">Content</DemoBox>
</Split>
```

---

## Grow, Shrink, and Basis

Wrap children in `SplitSection` to use:

- `grow` — How much the item should grow relative to others
- `shrink` — How much the item should shrink
- `basis` — Initial size of the item

```javascript
<Split>
  <SplitSection grow={1} shrink={0} basis={20}>
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
  <SplitSection grow={1} shrink={1} basis={10}>
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
</Split>
```

---

## Wrap

Control whether items wrap using the `wrap` prop (`wrap`, `nowrap`, `wrap-reverse`):

```javascript
<Split wrap="wrap">
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
</Split>
```

```javascript
<Split wrap="nowrap">
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
  <SplitSection grow={1} basis={30}>
    <DemoBox padding="small">{demoText.medium}</DemoBox>
  </SplitSection>
</Split>
```

---

## HTML List Tags

Use the `htmlTag` prop to render semantic list markup (`ul`, `ol`, `li`). `SplitSection` and `Split` children automatically render as `<li>` if needed.

```javascript
<Split gap="small" htmlTag="ul">
  <li>
    <DemoBox padding="small">Item 1</DemoBox>
  </li>
  <SplitSection grow={1}>
    <DemoBox padding="small">Item 2</DemoBox>
  </SplitSection>
  <Split>
    <DemoBox padding="small">Item 3</DemoBox>
  </Split>
</Split>
```

---

## Responsive Props

`Split` and `SplitSection` accept responsive values for most props. Pass an object with breakpoint keys:

```javascript
<Split
  gap={{
    default: 'xsmall',
    xsmall: 'small',
    small: 'medium',
    medium: 'large',
    large: 'large',
  }}
>
  <DemoBox padding="small">Content</DemoBox>
  <SplitSection
    grow={{
      default: '0',
      medium: '1',
    }}
  >
    <DemoBox padding="small">Content</DemoBox>
  </SplitSection>
</Split>
```

### Available Breakpoints

| Breakpoint | Min Width     |
| ---------- | ------------- |
| xsmall     | 31em (496px)  |
| small      | 48em (768px)  |
| medium     | 64em (1024px) |
| large      | 75em (1200px) |

---

## Props

## Split Props

| Name           | Type                           | Default          |
| -------------- | ------------------------------ | ---------------- | ---------------------- | ------------------- | ------------------ | ----------------- | --------------------- | ------- | ----- | ----------- | --- |
| gap            | ResponsiveType `<number        | string>`         | 'initial' `responsive` |
| rowGap         | ResponsiveType `<number        | string>`         | — `responsive`         |
| columnGap      | ResponsiveType `<number        | string>`         | — `responsive`         |
| alignItems     | ResponsiveType `< 'start'      | 'stretch'        | 'flex-start'           | 'flex-end'          | 'center'           | 'baseline' >`     | 'center' `responsive` |
| justifyContent | ResponsiveType `< 'flex-start' | 'flex-end'       | 'center'               | 'space-between'     | 'space-around'     | 'space-evenly' >` | — `responsive`        |
| alignContent   | `'flex-start'                  | 'flex-end'       | 'center'               | 'space-between'     | 'space-around'     | 'space-evenly'    | 'stretch'             | 'start' | 'end' | 'baseline'` | —   |
| wrap           | ResponsiveType `< 'nowrap'     | 'wrap'           | 'wrap-reverse' >`      | 'wrap' `responsive` |
| direction      | ResponsiveType `< 'column'     | 'column-reverse' | 'row'                  | 'row-reverse' >`    | 'row' `responsive` |
| htmlTag        | `'div'                         | 'ul'             | 'ol'                   | 'li'`               | 'div'              |
| width          | ResponsiveType `<number        | string>`         | — `responsive`         |
| height         | ResponsiveType `<number        | string>`         | — `responsive`         |
| minWidth       | ResponsiveType `<number        | string>`         | — `responsive`         |
| minHeight      | ResponsiveType `<number        | string>`         | — `responsive`         |
| maxWidth       | ResponsiveType `<number        | string>`         | — `responsive`         |
| maxHeight      | ResponsiveType `<number        | string>`         | — `responsive`         |
| children       | React.ReactNode                | —                |
| className      | never                          | —                |
| style          | never                          | —                |

---

## SplitSection Props

| Name      | Type                                | Default        |
| --------- | ----------------------------------- | -------------- |
| htmlTag   | `'div' \| 'li'`                     | 'div'          |
| width     | ResponsiveType `<number \| string>` | — `responsive` |
| height    | ResponsiveType `<number \| string>` | — `responsive` |
| minWidth  | ResponsiveType `<number \| string>` | — `responsive` |
| minHeight | ResponsiveType `<number \| string>` | — `responsive` |
| maxWidth  | ResponsiveType `<number \| string>` | — `responsive` |
| maxHeight | ResponsiveType `<number \| string>` | — `responsive` |
| children  | React.ReactNode                     | —              |
| grow      | ResponsiveType `<number \| string>` | — `responsive` |
| shrink    | ResponsiveType `<number \| string>` | — `responsive` |
| basis     | ResponsiveType `<number \| string>` | — `responsive` |
| className | never                               | —              |
| style     | never                               | —              |
