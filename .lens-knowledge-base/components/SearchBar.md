# SearchBar

A controlled search input component. Simpler than `TextInput type="search"` — purpose-built for search interfaces.

---

## Source

**Package:** `@loomhq/lens@12.14.0`  
**Export:** default export from internal search-bar module  
**Type declaration:** `.lens-knowledge-base/type-declarations/components/search-bar/search-bar.d.ts`

---

## Import

```tsx
import { SearchBar } from '@loomhq/lens'
```
## Critical Rules
- SearchBar is a controlled component — value and onChange are always required
- ariaLabel is required — never omit it (accessibility requirement)
- Do NOT use this inside <FormField> — it manages its own accessible label via ariaLabel
- For search within a form with a visible label, use TextInput with type="search" and icon={<SvgSearch />} instead

---

##When to Use SearchBar vs TextInput

|Situation|	Use|
|---------|----|
|Standalone search bar (navbar, page header)|	SearchBar|
|Search field inside a form with visible label|	TextInput type="search"
|Search with autocomplete suggestions|	Typeahead|
|Search within a modal or dialog|	TextInput type="search"|
---
## Basic Usage

```tsx
import { SearchBar } from '@loomhq/lens'
import { useState } from 'react'

function MySearch() {
  const [query, setQuery] = useState('')

  return (
    <SearchBar
      ariaLabel="Search videos"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
```
---
##  With Downshift Integration (getInputProps)
The optional `getInputProps` prop accepts a Downshift `getInputProps` function for building accessible combobox patterns. If you need full autocomplete behaviour, prefer `Typeahead` instead.

```tsx
// Only use getInputProps if integrating with Downshift directly
// In most cases, use Typeahead for autocomplete search
<SearchBar
  ariaLabel="Search"
  placeholder="Search..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  getInputProps={downshiftGetInputProps}
/>
```
---

## Props
|Prop|	Type|	Required|	Description|
|ariaLabel|	string|	✅ Yes	|Accessible label for screen readers|
|placeholder|	string	|✅ Yes	|Placeholder text shown when empty|
|value	|string|	✅ Yes|	Controlled input value|
|onChange|	(e: React.ChangeEvent<HTMLInputElement>) => void|	✅ Yes|	Change handler|
|getInputProps|	any|	No|	Downshift getInputProps for combobox patterns|
---
## Common Mistakes
```tsx
// ❌ WRONG — missing ariaLabel (accessibility violation)
<SearchBar
  placeholder="Search..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>

// ❌ WRONG — uncontrolled (missing value + onChange)
<SearchBar
  ariaLabel="Search"
  placeholder="Search..."
/>

// ✅ CORRECT
<SearchBar
  ariaLabel="Search videos"
  placeholder="Search videos..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
```

## Composed with Layout
```tsx
<Container padding="medium" borderSide="bottom">
  <Arrange gap="medium" alignItems="center">
    <SearchBar
      ariaLabel="Search"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <Button variant="primary">Search</Button>
  </Arrange>
</Container>
```

## Related Components
- TextInput — use for search within forms with visible labels
- Typeahead — use for search with dropdown suggestions
- Icon — SearchBar includes its own search icon internally

