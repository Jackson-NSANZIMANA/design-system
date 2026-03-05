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

