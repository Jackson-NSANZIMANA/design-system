cat > .github/copilot-instructions.md << 'EOF'
# GitHub Copilot — Lens Design System

## Package: @loomhq/lens@12.14.0

## Read First
Before generating UI code, read:
`.lens-knowledge-base/QUICK-REFERENCE.md`

## Component Substitutions (Critical)
| Do NOT use | Use instead |
|------------|-------------|
| `<div>` for layout | `<Container>`, `<Split>`, `<Arrange>` |
| `<button>` | `<Button>` |
| `<input>` | `<TextInput>` |
| `<textarea>` | `<Textarea>` |
| `<select>` | `<Select>` |
| `<a>` | `<Link>` |
| `<h1>`-`<h6>` | `<Text size="heading-lg" htmlTag="h1">` etc |
| `<span>` inline | `<Text isInline>` |
| `<img>` | `<Media>` |

## API Patterns (Lens-specific, not generic React)
```tsx
// Disabled — NOT disabled={true}
<Button isDisabled>

// Loading — NOT loading={true}  
<Button hasLoader>

// Element type — NOT as="a"
<Text htmlTag="span">

// Icons — import with Svg prefix
import SvgBell from '@loomhq/lens/icons/bell'
<Icon icon={<SvgBell />} />

// Button icons — NOT leftIcon/rightIcon
<Button iconBefore={<SvgAdd />}>Add</Button>

// Ref forwarding — NOT ref={ref}
<TextInput refHandler={(r) => ref.current = r} />

// Spacing — named tokens NOT pixel values
<Container padding="medium">  // NOT padding={16}
<Arrange gap="small">         // NOT gap={8}
```
## Setup (Required in app entry point)
```tsx
import { getThemeStylesString, getAllCssVarsString } from '@loomhq/lens'
const style = document.createElement('style')
style.innerHTML = getThemeStylesString() + getAllCssVarsString()
document.head.appendChild(style)
```
## Prohibited
- `style={{}}` — always forbidden
- `className="custom-class"` — only Lens utility classes allowed
- CSS/SCSS files in src/
-   Any import from styled-components, emotion, Tailwind

## Reference
- .lens-knowledge-base/QUICK-REFERENCE.md — fast lookup
- .lens-knowledge-base/COMPONENT-INDEX.md — all components
- .lens-knowledge-base/components/<Name>.md — prop details