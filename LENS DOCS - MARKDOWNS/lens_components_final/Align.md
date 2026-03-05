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

