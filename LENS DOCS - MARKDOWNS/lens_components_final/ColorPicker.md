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

