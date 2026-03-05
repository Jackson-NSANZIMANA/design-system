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

