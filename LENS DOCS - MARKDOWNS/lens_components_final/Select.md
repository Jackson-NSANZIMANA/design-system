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

