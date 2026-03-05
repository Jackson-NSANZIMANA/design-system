# Aider Conventions — Lens Design System (@loomhq/lens@12.14.0)

## Rules
- ALL UI from @loomhq/lens. Layout: Container, Split, Arrange. Text for all typography.
- Spacing tokens: xsmall/small/medium/large/xlarge/xxlarge
- No Box/Flex/Grid/Stack/Heading — these don't exist in Lens
- Boolean props: isDisabled, hasLoader. htmlTag (not as). refHandler (not ref).
- Icons: <Icon icon={<SvgName />} /> with Svg prefix
- ZERO CSS files, ZERO styled-components, ZERO Tailwind
