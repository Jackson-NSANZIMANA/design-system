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

