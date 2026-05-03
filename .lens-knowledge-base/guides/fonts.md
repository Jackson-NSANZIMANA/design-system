---
file: guides/fonts.md
role: Atlassian font initialization
---

# Atlassian Fonts

## The One Correct Pattern

In globals.css — first line before anything else:

  @import url('https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/font-rules/v5/atlassian-fonts.css');

Provides: Atlassian Sans (100-900) · Atlassian Mono (100-800)

In Next.js App Router: globals.css is imported in layout.tsx — fonts load automatically.

## What Not To Do

Importing @jackson_nsanzimana/atlassian-fonts in a Server Component — silent no-op.
The package uses document.createElement. Use CDN @import instead.
