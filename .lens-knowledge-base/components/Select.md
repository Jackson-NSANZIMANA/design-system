# 19.Select

---

## Usage Guidelines

The `Select` component allows users to **choose a single option** from a list.  
It supports placeholders, custom triggers, search functionality, grouping, icons, and disabled states.

---
## Basic Usage
---
## Placeholder

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

Enable/Use `allowsDeselect` to add a deselection option and allow the user to deselect a selected option. When a selected item is hovered over, its check mark will change to an 'X', indicating the user can click to deselect. The `onChange` callback will receive `null` when an item is deselected.


```jsx
() => {
const [selected, setSelected] = React.useState('second')

return (

  <Select
    allowsDeselect
    placeholder="Choose an option"
    selectedOptionValue={selected}
    onChange={option => {
      setSelected(option ? option.value : null)
    }}
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
  />
)}
```

---

## Options with Icons
Accepts icon or image URL/Data URLs.
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
    { value: 'fourth', title: 'Fourth', icon: <SvgLock />, isDisabled: true },
    { value: 'fifth', title: 'Fifth', icon: 'https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png', isDisabled: true },
  ]}
/>
```

- **Hidden and Disabled Option:**
This option is hidden and disabled. It can be used to show the selected option when it's not available in the list.

When an option is hidden, it will be visually removed from the list, but it will still be available in the DOM. And can still be selected through input controls (keyboard, mouse, touch, etc.) and screen readers.

Combined with the `isDisabled` prop, the option will be inaccessible from input controls (keyboard, mouse, touch, etc.) and hidden visually as well as from screen readers.
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
## With divider

Use to visually separate items without needing labels.
Good for: Simple visual breaks, especially in action menus.

```jsx
<Select
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third', hasDivider: true },
  ]}
/>
```
---

## Grouped Options (With group)

Use when items fall into clear, labeled categories that help users navigate. Good for: Large lists with meaningful, named categories.

```jsx
<Select
    selectedOptionValue="second"
    options={[
      {
        group: 'Group 1',
        items: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
        ]
      },
      {
        group: 'Group 2',
        items: [
          { value: 'fourth', title: 'fourth', icon: <SvgAdd /> },
          { value: 'fifth', title: 'fifth', icon: <SvgArchive /> },
          { value: 'sixth', title: 'sixth', icon: <SvgZap /> },
        ]
      }
    ]}
  />
```

---

## Menu Positioning

Menu can be positioned below, above, or to the sides of the trigger. Wrap the <Select> component so it doesn’t take up full width and set `menuMinWidth` accordingly. Use `left/right` for bottom-aligned dropdowns, `topLeft/topRight` for top-aligned dropdowns, or `leftTop/rightTop` to position the menu to the left/right side of the trigger.

**Note**: Side-positioned menus (`leftTop/rightTop`) stay locked to their position and scroll internally when content overflows, rather than repositioning automatically. The max height is automatically calculated based on available space from the trigger to the viewport bottom, ensuring the menu fits on screen. This is ideal for use in modals or containers with overflow constraints.

`menuPosition` controls where the dropdown appears relative to the trigger:  
`left | right | topLeft | topRight | leftTop | rightTop`.

```jsx
<Split direction="column" gap="medium" alignItems="stretch">
    <Arrange gap="medium" justifyContent="space-between" width="full">
      <Select
        menuPosition="left"
        menuMinWidth={20}
        placeholder="Left"
        options={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
      />
      <Select
        menuPosition="right"
        menuMinWidth={20}
        placeholder="Right"
        options={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
      />
    </Arrange>
    <Arrange gap="medium" justifyContent="space-between" width="full">
      <Select
        menuPosition="leftTop"
        menuMinWidth={14}
        placeholder="Left Top"
        options={[
          { value: '1', title: 'Option 1' },
          { value: '2', title: 'Option 2' },
          { value: '3', title: 'Option 3' },
          { value: '4', title: 'Option 4' },
          { value: '5', title: 'Option 5' },
          { value: '6', title: 'Option 6' },
          { value: '7', title: 'Option 7' },
          { value: '8', title: 'Option 8' },
          { value: '9', title: 'Option 9' },
          { value: '10', title: 'Option 10' },
          { value: '11', title: 'Option 11' },
          { value: '12', title: 'Option 12' },
          { value: '13', title: 'Option 13' },
          { value: '14', title: 'Option 14' },
          { value: '15', title: 'Option 15' },
          { value: '16', title: 'Option 16' },
          { value: '17', title: 'Option 17' },
          { value: '18', title: 'Option 18' },
          { value: '19', title: 'Option 19' },
          { value: '20', title: 'Option 20' },
        ]}
      />
      <Select
        menuPosition="rightTop"
        menuMinWidth={14}
        placeholder="Right Top"
        options={[
          { value: '1', title: 'Option 1' },
          { value: '2', title: 'Option 2' },
          { value: '3', title: 'Option 3' },
          { value: '4', title: 'Option 4' },
          { value: '5', title: 'Option 5' },
          { value: '6', title: 'Option 6' },
          { value: '7', title: 'Option 7' },
          { value: '8', title: 'Option 8' },
          { value: '9', title: 'Option 9' },
          { value: '10', title: 'Option 10' },
          { value: '11', title: 'Option 11' },
          { value: '12', title: 'Option 12' },
          { value: '13', title: 'Option 13' },
          { value: '14', title: 'Option 14' },
          { value: '15', title: 'Option 15' },
          { value: '16', title: 'Option 16' },
          { value: '17', title: 'Option 17' },
          { value: '18', title: 'Option 18' },
          { value: '19', title: 'Option 19' },
          { value: '20', title: 'Option 20' },
        ]}
      />
    </Arrange>
    <Arrange gap="medium" justifyContent="space-between" width="full">
      <Select
        menuPosition="topLeft"
        menuMinWidth={20}
        placeholder="Top Left"
        options={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
      />
      <Select
        menuPosition="topRight"
        menuMinWidth={20}
        placeholder="Top Right"
        options={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
      />
    </Arrange>
  </Split>
```

---

## Searchable Selects

For selects with many options that make it difficult to find the intended value, a search input can be added. By default, the option values are filtered on the inputted value using a loose `includes` pattern.

### Client-side
#### - With string options
```jsx
<Arrange gap="large">
  <Select
    selectedOptionValue="second"
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third', isDisabled: true },
      { value: 'fourth', title: 'Fourth', icon: <SvgLock />, isDisabled: true },
      { value: 'fifth', title: 'Fifth'},
    ]}
    search={{
      searchPlaceholder: 'Search with includes...',
      searchType: 'contains',
    }}
    menuMinWidth={10}
  />
  <Select
    selectedOptionValue="second"
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third', isDisabled: true },
      { value: 'fourth', title: 'Fourth', icon: <SvgLock />, isDisabled: true },
      { value: 'fifth', title: 'Fifth'},
    ]}
    search={{
      searchPlaceholder: 'Search with starts with...',
      searchType: 'startsWith',
    }}
    menuMinWidth={10}
  />
  <Select
    selectedOptionValue="second"
    options={[
      {
        group: 'Group 1',
        items: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
        ]
      },
      {
        group: 'Group 2',
        items: [
          { value: 'fourth', title: 'fourth', icon: <SvgAdd /> },
          { value: 'fifth', title: 'fifth', icon: <SvgArchive /> },
          { value: 'sixth', title: 'sixth', icon: <SvgZap /> },
        ]
      }
    ]}
    search={{
      searchPlaceholder: 'Search within groups...',
    }}
    menuMinWidth={10}
  />
</Arrange>
```
#### With ReactElement options
For options that implement a `ReactElement` as the `title` of the `options` property, the element properties must be joined with `React.PropsWithChildren` or have the `children` property. Furthermore, the searchable value of the element **must** be included as a child of the element to ensure its value can be parsed.
```jsx
<Arrange gap="large">
    <Select
      selectedOptionValue="second"
      options={[
        { value: 'first', title: <div>First</div> },
        { value: 'second', title: <div>Second</div> },
        { value: 'third', title: <div>Third</div>, isDisabled: true },
        { value: 'fourth', title: <div>Fourth</div>, icon: <SvgLock />, isDisabled: true },
        { value: 'fifth', title: <div>Fifth</div>},
      ]}
      search={{
        searchPlaceholder: 'Search with element options...',
      }}
      menuMinWidth={10}
    />
  </Arrange>
```
### Server-side
#### - Server-side search with onSearch
The `search.onSearch` callback enables server-side/backend search functionality. When a function is passed in, it:

- Disables client-side filtering (above)
- Invokes the callback whenever the search input changes with the current search value
- Calls the callback with an empty string upon dropdown close to reset results
- Requires your component to update the `options` prop based on search results

```jsx
() => {
  const [searchResults, setSearchResults] = React.useState([
    { value: 'first', title: 'First' },
    { value: 'second', title: 'Second' },
    { value: 'third', title: 'Third' },
    { value: 'fourth', title: 'Fourth' },
    { value: 'fifth', title: 'Fifth' },
  ])

  const handleSearch = (searchValue) => {
    console.log('Searching for:', searchValue)
    // Your backend/API search would go here
    // For demo purposes, we'll just filter locally
    if (!searchValue) {
      setSearchResults([
        { value: 'first', title: 'First' },
        { value: 'second', title: 'Second' },
        { value: 'third', title: 'Third' },
        { value: 'fourth', title: 'Fourth' },
        { value: 'fifth', title: 'Fifth' },
      ])
    } else {
      setSearchResults([
        { value: 'first', title: 'First' },
        { value: 'second', title: 'Second' },
        { value: 'third', title: 'Third' },
        { value: 'fourth', title: 'Fourth' },
        { value: 'fifth', title: 'Fifth' },
      ].filter(option =>
        option.title.toLowerCase().includes(searchValue.toLowerCase())
      ))
    }
  }

  return (
    <Select
      placeholder="Search backend..."
      options={searchResults}
      search={{
        searchPlaceholder: 'Search with backend...',
        onSearch: handleSearch,
      }}
      menuMinWidth={10}
    />
  )
}
```
---
### Container
Specify where it's going to be rendered in the DOM, this is especially useful when working with Shadow DOM
```jsx
<Select
  container={() => document.querySelector("#renderContainer")}
  options={[{ value: 'bahamas', title: 'Bahamas' }]}
/>

```
---
### onChange callback

```jsx
<Select
    selectedOptionValue="second"
    onChange={option => {console.log(option)}}
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
  />
```

---
### onOuterClick callback

```jsx
<Select
    onChange={(option) => console.log(option)}
    selectedOptionValue="second"
    onOuterClick={() => console.log('onOuterClick')}
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
  />
```

---
### onOpenChange callback
Callback that provides the `isOpen` value when dropdown opens or closes.
```jsx
<Select
    onChange={(option) => console.log(option)}
    selectedOptionValue="second"
    onOpenChange={newState => console.log(newState)}
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
  />
```

---


### Custom Trigger
Use a custom button to trigger the menu. Make sure the trigger element is a button.

#### - With TextButton
```jsx
<Select
    trigger={(triggerContent, buttonProps) => (
      <TextButton icon={<SvgChevronDown />} iconPosition="right" {...buttonProps}>
        {triggerContent.title}
      </TextButton>
    )}
    selectedOptionValue="second"
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
    menuMaxWidth={20}
    onChange={option => {console.log(option)}}
  />
```

#### - With placeholder
```jsx
<Select
    trigger={(triggerContent, buttonProps) => (
      <button
        disabled={triggerContent.isDisabled}
        {...buttonProps}
      >
        <Text fontWeight={triggerContent.title && 'medium'}>
          {triggerContent.title || triggerContent.placeholder}
        </Text>
      </button>
    )}
    placeholder="Choose an option"
    options={[
      { value: 'apple', title: 'Apple' },
      { value: 'windows', title: 'Windows' },
    ]}
    menuMaxWidth={20}
    onChange={option => {console.log(option)}}
  />
```
#### - With icons and selected option
```jsx
<Select
  trigger={(triggerContent, buttonProps) => (
    <TextButton
      {...buttonProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--lns-space-xsmall)'
      }}
      icon={<SvgChevronDown />}
      iconPosition="right"
    >
      <Icon icon={triggerContent.icon}/>
      {triggerContent.title}
    </TextButton>
  )}
  selectedOptionValue="second"
  options={[
    { value: 'first', title: 'First', icon: <SvgAdd /> },
    { value: 'second', title: 'Second', icon: <SvgLock /> },
    { value: 'third', title: 'Third', icon: <SvgZap /> },
  ]}
  menuMaxWidth={20}
  onChange={option => {console.log(option)}}
/>
```
#### - Display custom trigger based on selected value
```jsx
<Select
    trigger={({title, value}, buttonProps) => (
      <TextButton {...buttonProps}>
        The value for '{title}' backwards is '{value.split('').reverse().join('')}'
      </TextButton>
    )}
    selectedOptionValue="second"
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
    menuMaxWidth={20}
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

## Error State (With error)

```jsx
<Select
    placeholder="Choose an option"
    hasError={true}
    errorMessage="Sample Error Message"
    options={[
      { value: 'first', title: 'First' },
      { value: 'second', title: 'Second' },
      { value: 'third', title: 'Third' },
    ]}
  />
```

---

## Props

| name                | type                                                                                                         | default                   | description                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------- | ----------------------------- |
| menuZIndex          | number                                                                                                     | 1100                      | Dropdown z-index              |
| menuMaxHeight       | string \| number                                                                                           | 34                        | Max menu height               |
| triggerOffset       | number                                                                                                     | 0                         | Trigger offset                |
| menuPosition        | `'left' \| 'right' \| 'topRight' \| 'topLeft' \| 'rightTop' \| 'leftTop'`                                  | `'right'`                 | Menu dropdown position        |
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
| search              | `	{ searchPlaceholder: string; searchType?: 'contains' | 'startsWith'; /** * Optional callback for backend search. When provided, client-side filtering is disabled * and this callback is called whenever the search input changes. * Use this to fetch search results from your backend API. */ onSearch?: (searchValue: string) => void; }` | —                      | Search options                |

---

