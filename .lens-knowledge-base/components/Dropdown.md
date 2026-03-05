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

