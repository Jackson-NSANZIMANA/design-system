---
file: guides/Layout recipes.md
role: Idiomatic Lens composition reference (agent + human)
lensVersion: 12.14.0
answers: "What does correct, idiomatic Lens composition look like?"
load-when:
  - Building a new UI pattern
  - Verifying a composition is idiomatic
  - Seeking a reference before generating a new component
do-not-load-when:
  - Looking up a specific component API (use components/<Name>.md)
  - Looking up token values (use tokens/)
lastValidated: 2026-04-29
ci: Every code fence in this file must pass docs-verify.mjs
---

# Lens Showcase — Idiomatic Composition Examples

Every example here:
- Is production-ready and idiomatic Lens
- Uses only `@loomhq/lens` imports
- Uses only named token values (no hardcoded px/hex/rem)
- Uses `size="body-sm"` not deprecated `size="small"`
- Uses semantic color tokens (e.g. `color="bodyDimmed"` not `color="grey6"`)
- Passes ESLint + docs-verify CI

---

## Basic layouts
### Elements inline
```tsx
<DemoBox>
  <Arrange gap="medium">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```
---
### Fixed width column + remaining width column

```tsx
<DemoBox>
  <Arrange gap="medium" columns={[20, '1fr']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```
---
### Auto width column + remaining width column

```tsx
<DemoBox>
  <Arrange gap="medium" columns={['auto', '1fr']}>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```
### Stacked

```tsx
<DemoBox>
  <Arrange gap="small" autoFlow="row">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

### Stacked and stretched

```tsx
<DemoBox>
  <Arrange gap="small" autoFlow="row" justifyContent="stretch">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```

## Algorithmic responsive layouts
Using `Arrange` and `Split` components we can build responsive layouts without CSS media queries. Resize to see the effect.


### Fixed width column + remaining width column
```tsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={20} minWidth={20}>
      <DemoBox padding="xsmall">
        Column
      </DemoBox>
    </SplitSection>
    <SplitSection grow={100} basis={40}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Nested columns that wrap at different screen sizes
```tsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={18}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1000} basis={40}>
      <DemoBox padding="xsmall">
        <Split gap="medium">
          <SplitSection grow={1} basis={30}>
            <DemoBox padding="xsmall">Content</DemoBox>
          </SplitSection>
          <SplitSection grow={1} basis={30}>
            <DemoBox padding="xsmall">Content</DemoBox>
          </SplitSection>
        </Split>
      </DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Equal flex columns
```tsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} basis={30}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} basis={30}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Equal flex columns
```tsx
<DemoBox>
  <Split gap="medium">
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection grow={1} shrink={0} basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Equal grid columns
```tsx
<DemoBox>
  <Arrange gap="medium" columns="repeat(auto-fit, minmax(10rem, 1fr))">
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
    <DemoBox padding="xsmall">Content</DemoBox>
  </Arrange>
</DemoBox>
```
### Columns with space between
```tsx
<DemoBox>
  <Split gap="medium" justifyContent="space-between">
    <SplitSection basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
    <SplitSection basis={12}>
      <DemoBox padding="xsmall">Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Inline wrapping elements
```tsx
<DemoBox>
  <Split gap="medium">
    <SplitSection>
      <DemoBox padding="xsmall" width={30}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={20}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={12}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={24}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={8}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={28}>Content</DemoBox>
    </SplitSection>
    <SplitSection>
      <DemoBox padding="xsmall" width={18}>Content</DemoBox>
    </SplitSection>
  </Split>
</DemoBox>
```
### Columns with equal height

```tsx
<DemoBox>
  <Arrange gap="medium" columns={["1fr", "1fr", "1fr"]} alignItems="stretch">
    <DemoBox padding="medium">{demoText.short}</DemoBox>
    <DemoBox padding="medium">{demoText.long}</DemoBox>
    <DemoBox padding="medium">{demoText.medium}</DemoBox>
  </Arrange>
</DemoBox>
```

## Layout use cases
### Icon with text
```tsx
<>
  <Arrange gap="small" alignItems="stretch" columns={['auto', '1fr']}>
    <Icon icon={<SvgArrowRight />}/>
    <div>
      <Text>{demoText.long}</Text>
      <Spacer top="small">
        <Button>Button</Button>
      </Spacer>
    </div>
  </Arrange>
  <br />
  <Arrange gap="small" alignItems="stretch" columns={['auto', '1fr']}>
    <Icon icon={<SvgArrowRight />}/>
    <Text hasEllipsis>{demoText.long}</Text>
  </Arrange>
</>
```
### Actions
```tsx
<Arrange gap="small">
  <Button>New Folder</Button>
  <Button>Filter</Button>
  <IconButton icon={<SvgMoreHoriz />} altText="Options"/>
</Arrange>
```

### Full width buttons | responsive
```tsx
<Arrange gap="small" columns="repeat(auto-fit, minmax(12rem, 1fr))">
  <Button>Secondary Option</Button>
  <Button>Primary Option</Button>
</Arrange>
```
### Media element | responsive
```tsx
<Container
  radius="medium"
  borderSide="all"
  maxWidth={60}
  padding="medium"
>
  <Split gap="xsmall" alignItems="flex-start">
    <SplitSection>
      <Icon icon={<SvgRecord />} size={6}/>
    </SplitSection>
    <SplitSection>
      <Text fontWeight="bold" size="large">Integration</Text>
      <Text>Connect your engagement insights</Text>
      <Spacer top="small">
        <Button>Connect</Button>
      </Spacer>
    </SplitSection>
  </Split>
</Container>
```