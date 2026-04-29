---
file: .lens-knowledge-base/guides/component-definition.md
layer: worldview
lensVersion: 12.14.0
answers: "What a Lens component is and is not. The component contract."
load-when:
  - Understanding why a component has the boundaries it does
  - Deciding whether to build a custom element or compose from primitives
  - Onboarding to the Lens system
do-not-load-when:
  - Looking up a specific component API (use components/<Name>.md)
  - Building a feature (AGENT_PRIMER.md contains the distilled contract)
lastValidated: 2026-04-29
---

# Component definition

Before adding a new component to the design system consider the definition of the component.

- **Components are widely used.** When adding a new component make sure it's used across designs or it will be in the future.

- **A component should solve as few problems as possible.** The simplicity of a component makes it reusable and easy to maintain. Each component owns a specific problem and because of that we can easily test and find issues.

- **Components should be constructed with the system variables.** The system variables (or styles) contain rules about variables like typography and color that result in a specific visual language. System variables tie components together visually and make them feel like part of the same family.

- **Components are layout agnostic.** A component can't predict where it will be used so it should be flexible to adapt to different layouts.

- **Components are content agnostic.** Some components contain text and it can be different depending on the context. These components also can be translated into other languages.

## Designing custom elements

Sometimes components don't fit a specific use case and a custom element is needed. You can design custom UI elements that are not in the components library but still follow the Lens design language.

## How to design a custom UI element

- Use Lens styles to define typography, color and layer styles like border radii and shadows.

- Use Lens spacing rules to space out elements. If possible, use one of the predefined spacing values, if not, use a value divisible by 8px.

### Example case

In this example, we need to design an integration card. We can use Lens text sizes and colors to define the typography. For the card, we can use Lens border-radius and shadow styles. In this case, all spacing can be solved with Lens predefined spacing rules.

The result is a one-off element for a specific use case but it feels like part of Lens design language.



