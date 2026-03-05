# Comprehensive Strategy: Enforcing Lens Design System with AI Coding Agents

## Table of Contents

- Philosophy & Principles
- Knowledge Extraction Pipeline
- Agent Rule Files Architecture
- Component Registry & Mapping
- Context Injection System
- Prompt Engineering Templates
- Automated Enforcement & Guardrails
- Workflow & Development Protocol
- Continuous Feedback Loop

1. Philosophy & Principles

┌─────────────────────────────────────────────────────────────────┐
│ THE CORE DOCTRINE │
│ │
│ "No frontend element shall exist outside Lens governance." │
│ │
│ ┌───────────────┐ ┌────────────────┐ ┌───────────────┐ │
│ │ LENS FIRST │───▶│ LENS ONLY │───▶│ LENS ALWAYS │ │
│ │ │ │ │ │ │ │
│ │ Every UI need │ │ Zero custom │ │ Continuous │ │
│ │ starts with │ │ CSS/com#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

echo "=== Lens Installation Verification ==="

check_pkg() {
local pkg=$1

# We check if pnpm finds it anywhere in the dependency tree

local output=$(pnpm list "$pkg" --depth=0 2>/dev/null | grep "$pkg")

if [ -z "$output" ]; then # Try searching deeper if not found at root
output=$(pnpm list "$pkg" --depth=1 2>/dev/null | grep "$pkg" | head -n 1)
    if [ -z "$output" ]; then
return 1
fi
local version=$(echo "$output" | awk '{print $2}')
    echo -e "${YELLOW}⚠️ $pkg@$version found (but not in your root package.json)${NC}"
return 0
fi

# Extract version: handles @scoped/pkg 1.2.3 and pkg 1.2.3

local version=$(echo "$output" | awk '{print $2}')
  echo -e "${GREEN}✅ $pkg@$version installed${NC}"
return 0
}

# 1. Main Package

echo -e "\n[Core]"
check_pkg "@loomhq/lens" || { echo -e "${RED}❌ @loomhq/lens missing${NC}"; exit 1; }

# 2. Peer Deps

echo -e "\n[Peer Dependencies]"
if ! check_pkg "@emotion/react" && ! check_pkg "@emotion/core"; then
echo -e "${RED}❌ Emotion (@emotion/react or @emotion/core) NOT found${NC}"
fi

check_pkg "@emotion/styled" || echo -e "${RED}❌ @emotion/styled NOT found${NC}"

# 3. Icons

echo -e "\n[Icons]"
check_pkg "@atlaskit/icon" || echo -e "${RED}❌ @atlaskit/icon NOT found${NC}"
check_pkg "@atlaskit/icon-lab" || echo -e "${RED}❌ @atlaskit/icon-lab NOT found${NC}"

echo -e "\n=== Verification Finished ==="
ponents │ │ compliance │ │
│ │ Lens catalog │ │ unless Lens │ │ verification │ │
│ │ lookup │ │ lacks it │ │ │ │
│ └───────────────┘ └────────────────┘ └───────────────┘ │
│ │
│ EXCEPTION PROTOCOL: │
│ If Lens genuinely lacks a needed component: │
│ 1. Compose from existing Lens primitives │
│ 2. Use Lens design tokens for all styling │
│ 3. Document gap for future Lens contribution │
│ 4. NEVER invent raw CSS/HTML outside Lens token system │
└─────────────────────────────────────────────────────────────────┘

2. Knowledge Extraction Pipeline
   2.1 — Scrape & Structure the Lens Documentation

#!/bin/bash

# === lens-knowledge-extractor.sh ===

# Purpose: Build a local structured knowledge base from Lens docs

PROJECT_ROOT=$(pwd)
LENS_KB_DIR="$PROJECT_ROOT/.lens-knowledge-base"

mkdir -p "$LENS_KB_DIR"/{components,tokens,patterns,guides,api-reference,examples}

echo "=== LENS KNOWLEDGE BASE BUILDER ==="

# Step 1: Extract component inventory from installed package

echo "[1/6] Extracting component inventory from @loomhq/lens..."

node -e "
const fs = require('fs');
const path = require('path');

// Read the package's main exports
const lensPath = path.dirname(require.resolve('@loomhq/lens/package.json'));
const packageJson = require('@loomhq/lens/package.json');

const output = {
packageName: packageJson.name,
version: packageJson.version,
exports: Object.keys(packageJson.exports || {}),
dependencies: packageJson.dependencies,
peerDependencies: packageJson.peerDependencies,
};

fs.writeFileSync(
'$LENS_KB_DIR/package-meta.json',
JSON.stringify(output, null, 2)
);
console.log('Package metadata extracted.');
"

# Step 2: Extract all exported components/types

echo "[2/6] Extracting all exports..."

node -e "
const fs = require('fs');
const lens = require('@loomhq/lens');

const exports = Object.keys(lens).sort();
const grouped = {
components: exports.filter(e => /^[A-Z]/.test(e)),
hooks: exports.filter(e => /^use[A-Z]/.test(e)),
utilities: exports.filter(e => /^[a-z]/.test(e) && !/^use/.test(e)),
types: exports.filter(e => /Type$|Props$|Config$/.test(e)),
};

fs.writeFileSync(
'$LENS_KB_DIR/exports-inventory.json',
JSON.stringify(grouped, null, 2)
);

console.log('Found:', {
components: grouped.components.length,
hooks: grouped.hooks.length,
utilities: grouped.utilities.length,
});
"

# Step 3: Extract TypeScript declarations (critical for agent accuracy)

echo "[3/6] Extracting TypeScript declarations..."

LENS_TYPES_DIR=$(node -e "
const path = require('path');
const lensPath = path.dirname(require.resolve('@loomhq/lens/package.json'));
const pkg = require('@loomhq/lens/package.json');
const typesEntry = pkg.types || pkg.typings || 'dist/index.d.ts';
console.log(path.join(lensPath, path.dirname(typesEntry)));
")

if [ -d "$LENS_TYPES_DIR" ]; then
cp -r "$LENS_TYPES_DIR" "$LENS_KB_DIR/type-declarations/"
echo "Type declarations copied."
else
echo "Warning: Could not find type declarations directory."
fi

# Step 4: Crawl documentation site

echo "[4/6] Crawling lens.loom.dev documentation..."

# Using a documentation scraper

npx -y docs-scraper@latest \
 --url "https://lens.loom.dev" \
 --output "$LENS_KB_DIR/docs-raw/" \
 --format markdown \
 --max-depth 5 \
 2>/dev/null || {
echo "Automated scraper unavailable. Using manual extraction..."

    # Fallback: Create a structured scraper
    node -e "
    const https = require('https');
    const fs = require('fs');

    const knownPaths = [
      '/getting-started',
      '/components',
      '/design-tokens',
      '/patterns',
      '/theming',
      '/accessibility',
      '/layout',
      '/typography',
      '/colors',
      '/spacing',
      '/icons',
    ];

    const manifest = {
      baseUrl: 'https://lens.loom.dev',
      paths: knownPaths,
      note: 'MANUALLY populate these files from the documentation site',
      instructions: [
        'Visit each path at lens.loom.dev',
        'Copy the complete content into corresponding .md files',
        'Include all code examples verbatim',
        'Include all prop tables',
        'Include all usage guidelines',
      ]
    };

    fs.writeFileSync(
      '$LENS_KB_DIR/docs-manifest.json',
      JSON.stringify(manifest, null, 2)
    );
    "

}

# Step 5: Generate component prop signatures

echo "[5/6] Generating component prop signatures..."

node -e "
const fs = require('fs');
const lens = require('@loomhq/lens');

const componentDocs = {};
const exports = Object.keys(lens).filter(e => /^[A-Z]/.test(e));

exports.forEach(name => {
const component = lens[name];
if (component) {
componentDocs[name] = {
name,
isForwardRef: !!component.render,
displayName: component.displayName || name,
hasSubComponents: Object.keys(component).filter(k => /^[A-Z]/.test(k)),
};
}
});

fs.writeFileSync(
'$LENS_KB_DIR/component-signatures.json',
JSON.stringify(componentDocs, null, 2)
);
console.log('Documented', Object.keys(componentDocs).length, 'components.');
"

# Step 6: Build the master reference document

echo "[6/6] Building master reference document..."

node -e "
const fs = require('fs');
const path = require('path');

const inventory = JSON.parse(
fs.readFileSync('$LENS_KB_DIR/exports-inventory.json', 'utf8')
);
const signatures = JSON.parse(
  fs.readFileSync('$LENS_KB_DIR/component-signatures.json', 'utf8')
);
const meta = JSON.parse(
fs.readFileSync('$LENS_KB_DIR/package-meta.json', 'utf8')
);

let doc = '# Lens Design System — Master Reference\n\n';
doc += '## Package: ' + meta.packageName + '@' + meta.version + '\n\n';

doc += '## Available Components (' + inventory.components.length + ')\n\n';
doc += '| Component | Sub-Components | Forward Ref |\n';
doc += '|-----------|---------------|-------------|\n';
inventory.components.forEach(c => {
const sig = signatures[c] || {};
const subs = (sig.hasSubComponents || []).join(', ') || '—';
const fref = sig.isForwardRef ? '✓' : '—';
doc += '| \`' + c + '\` | ' + subs + ' | ' + fref + ' |\n';
});

doc += '\n## Available Hooks (' + inventory.hooks.length + ')\n\n';
inventory.hooks.forEach(h => { doc += '- \`' + h + '\`\n'; });

doc += '\n## Available Utilities (' + inventory.utilities.length + ')\n\n';
inventory.utilities.forEach(u => { doc += '- \`' + u + '\`\n'; });

fs.writeFileSync('$LENS_KB_DIR/MASTER-REFERENCE.md', doc);
console.log('Master reference built.');
"

echo ""
echo "=== KNOWLEDGE BASE READY ==="
echo "Location: $LENS_KB_DIR"
echo ""
echo "MANUAL STEPS REQUIRED:"
echo "1. Visit https://lens.loom.dev"
echo "2. For EACH component, save to: $LENS_KB_DIR/components/<ComponentName>.md"
echo " Include: description, all props, all variants, all code examples"
echo "3. Save design tokens to: $LENS_KB_DIR/tokens/"
echo "4. Save pattern guides to: $LENS_KB_DIR/patterns/"

## 2.2 — Component Documentation Template

Note: The Agent must verify that the application entry point (e.g., main.tsx) imports getThemeStylesString and getAllCssVarsString from @loomhq/lens. These MUST be injected into a <style> tag in the document <head>. Crucial: If the agent creates a new test suite or Storybook-like environment, it must repeat this setup or the visual regression tests will fail.
For each component you manually extract, use this structure:

<!-- .lens-knowledge-base/components/Button.md -->

# Button

**Import:** `import { Button } from '@loomhq/lens'`

## Description

[Paste from lens.loom.dev]

## Props

| Prop      | Type                                            | Default   | Required | Description         |
| --------- | ----------------------------------------------- | --------- | -------- | ------------------- |
| variant   | 'primary' \| 'secondary' \| 'ghost' \| 'danger' | 'primary' | No       | Visual style        |
| size      | 'sm' \| 'md' \| 'lg'                            | 'md'      | No       | Size variant        |
| disabled  | boolean                                         | false     | No       | Disabled state      |
| loading   | boolean                                         | false     | No       | Loading state       |
| leftIcon  | ReactNode                                       | —         | No       | Icon before label   |
| rightIcon | ReactNode                                       | —         | No       | Icon after label    |
| fullWidth | boolean                                         | false     | No       | Full width          |
| as        | ElementType                                     | 'button'  | No       | Polymorphic element |

## Variants

### Primary (default)

```tsx
<Button variant="primary">Click me</Button>
```

Secondary

```tsx
<Button variant="secondary">Click me</Button>
```

Ghost

```tsx
<Button variant="ghost">Click me</Button>
```

Danger

```tsx
<Button variant="danger">Delete</Button>
```

Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

With Icons

```tsx
import { Button, IconPlus } from '@loomhq/lens'
;<Button leftIcon={<IconPlus />}>Add Item</Button>
```

Loading State

```tsx
<Button loading>Saving...</Button>
```

As Link

```tsx
<Button as="a" href="/somewhere">
  Navigate
</Button>
```

DO's

Use primary for main CTAs
Use one primary button per section
Always provide meaningful label text

DON'Ts
Don't use raw <button> elements
Don't apply custom className for styling
Don't override padding/colors with inline styles

---

## 3. Agent Rule Files Architecture

### 3.1 — Master Rule File Structure

project-root/
├── .cursor/
│ └── rules/ # Cursor-specific rules
│ ├── lens-master.mdc # Master design system rules
│ ├── lens-components.mdc # Component usage rules
│ ├── lens-patterns.mdc # Pattern rules
│ ├── lens-tokens.mdc # Design token rules
│ └── lens-review.mdc # Code review rules
├── .windsurfrules # Windsurf rules
├── CLAUDE.md # Claude Code rules
├── .github/
│ └── copilot-instructions.md # GitHub Copilot rules
├── .clinerules # Cline rules
├── .aider/
│ └── conventions.md # Aider rules
├── AGENTS.md # Generic agent instructions
├── .lens-knowledge-base/ # Built in step 2
└── .lensrc.json # Custom config for lint rules

### 3.2 — The Master Instruction Document (CLAUDE.md / AGENTS.md)

````markdown
<!-- CLAUDE.md -->
<!-- This file instructs AI coding agents on absolute requirements -->

# PROJECT AI CODING MANDATE — LENS DESIGN SYSTEM

## ⚠️ CRITICAL: READ BEFORE WRITING ANY FRONTEND CODE

This project uses **Lens** (`@loomhq/lens`), the official Loom design system,
as the **sole and exclusive** frontend component library and styling system.

**Documentation:** https://lens.loom.dev
**Package:** `@loomhq/lens` (installed via pnpm)
**Local Knowledge Base:** `.lens-knowledge-base/`

---

## ABSOLUTE RULES (ZERO EXCEPTIONS)

### Rule 1: ONLY Lens Components

ALWAYS: import { Button } from '@loomhq/lens'
NEVER: <button className="btn btn-primary">
NEVER: import { Button } from '@chakra-ui/react'
NEVER: import { Button } from '@mui/material'
NEVER: import { Button } from 'antd'
NEVER: Creating custom <StyledButton> or similar

### Rule 2: ONLY Lens Design Tokens for Styling

ALWAYS: Use Lens token props (color, spacing, fontSize, etc.)
ALWAYS: Use Lens layout components (Box, Flex, Stack, Grid)
NEVER: Write raw CSS files (.css, .scss, .less)
NEVER: Write CSS-in-JS (styled-components, emotion, stitches)
NEVER: Write Tailwind classes
NEVER: Write inline style={{}} objects with hardcoded values
NEVER: Create custom CSS modules

### Rule 3: ONLY Lens Layout Primitives

ALWAYS: <Flex>, <Stack>, <Box>, <Grid> from @loomhq/lens
NEVER: <div style={{ display: 'flex' }}>
NEVER: <div className="flex items-center">
NEVER: Custom layout wrappers with raw CSS

### Rule 4: ONLY Lens Typography

ALWAYS: <Text>, <Heading> from @loomhq/lens
NEVER: <h1 className="title">
NEVER: <p style={{ fontSize: '14px' }}>
NEVER: <span className="text-sm">

### Rule 5: ONLY Lens Icons

ALWAYS: Import icons from @loomhq/lens (e.g., <IconPlus />)
NEVER: Import from react-icons, heroicons, lucide, etc.
NEVER: Use raw SVGs unless Lens has no equivalent
NEVER: Use icon fonts (Font Awesome, Material Icons)

### Rule 6: ONLY Lens Form Components

ALWAYS: <Input>, <Select>, <Checkbox>, <Radio>, <Switch>, <Textarea>
from @loomhq/lens
NEVER: Raw <input>, <select>, <textarea> HTML elements
NEVER: Third-party form component libraries

### Rule 7: ONLY Lens Feedback Components

ALWAYS: <Toast>, <Alert>, <Modal>, <Dialog>, <Tooltip>, <Popover>
from @loomhq/lens
NEVER: react-toastify, react-hot-toast, sweetalert2
NEVER: Custom modal implementations
NEVER: Browser alert()/confirm()/prompt()

### Rule 8: ONLY Lens Navigation Components

ALWAYS: <Tabs>, <Breadcrumb>, <Pagination>, <Menu>, <Sidebar>
from @loomhq/lens
NEVER: Custom navigation with raw <nav>/<ul>/<li>

---

## DECISION TREE FOR EVERY UI ELEMENT

When you need to render ANY visual element, follow this process:

START: "I need to render [X]"
│
├──▶ Step 1: Does Lens export a component for [X]?
│ Check: .lens-knowledge-base/exports-inventory.json
│ Check: https://lens.loom.dev/components
│ │
│ ├── YES ──▶ Use it. Import from '@loomhq/lens'. DONE.
│ │
│ └── NO ───▶ Step 2: Can [X] be composed from Lens primitives?
│ (Box, Flex, Stack, Text, etc.)
│ │
│ ├── YES ──▶ Compose using ONLY Lens primitives
│ │ and Lens design tokens. DONE.
│ │
│ └── NO ───▶ Step 3: ESCALATION REQUIRED
│ │
│ ├── Add TODO comment:
│ │ // TODO: [LENS-GAP] No Lens component
│ │ // for [X]. Using Lens primitives as
│ │ // interim solution. Propose to Lens team.
│ │
│ └── Build with Lens Box/Flex + tokens ONLY.
│ NO raw CSS. NO external libraries.

---

## IMPORT PATTERNS

### ✅ CORRECT Import Patterns

```tsx
// Single import line from lens
import {
  Button,
  Input,
  Flex,
  Stack,
  Text,
  Heading,
  Box,
  Modal,
  useToast,
  IconPlus,
  Badge,
  Avatar,
} from '@loomhq/lens'

// If lens uses sub-path exports:
import { Button } from '@loomhq/lens/button'
import { theme } from '@loomhq/lens/theme'
```
````

❌ FORBIDDEN Import Patterns

// NEVER import UI components from anywhere else
import { Button } from '@mui/material'; // ❌
import { Flex } from '@chakra-ui/react'; // ❌
import { Input } from 'antd'; // ❌
import styled from 'styled-components'; // ❌
import { css } from '@emotion/react'; // ❌
import styles from './Component.module.css'; // ❌
import { FaUser } from 'react-icons/fa'; // ❌
import clsx from 'clsx'; // ❌ (no custom classes to merge)

STYLING RULES
Spacing

// ✅ CORRECT: Lens spacing tokens
<Box padding="4" marginBottom="6">
<Stack spacing="3">
<Flex gap="2">

// ❌ FORBIDDEN

<div style={{ padding: '16px', marginBottom: '24px' }}>
<div className="p-4 mb-6">

Colors

// ✅ CORRECT: Lens color tokens
<Box backgroundColor="surface.primary">
<Text color="content.secondary">
<Badge colorScheme="success">

// ❌ FORBIDDEN

<div style={{ backgroundColor: '#f5f5f5' }}>
<span style={{ color: '#666' }}>
<div className="bg-gray-100 text-gray-600">

Typography

// ✅ CORRECT
<Heading size="lg">Title</Heading>
<Text size="sm" weight="medium">Body text</Text>

// ❌ FORBIDDEN

<h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h1>
<p className="text-sm font-medium">Body text</p>

FILE STRUCTURE CONVENTIONS

src/
├── components/
│ ├── features/ # Feature-specific composed components
│ │ ├── Dashboard/
│ │ │ ├── DashboardHeader.tsx # Uses ONLY Lens components
│ │ │ ├── DashboardStats.tsx # Uses ONLY Lens components
│ │ │ └── index.ts
│ │ └── Settings/
│ │ ├── SettingsForm.tsx # Uses ONLY Lens components
│ │ └── index.ts
│ ├── composed/ # Reusable compositions of Lens components
│ │ ├── PageHeader.tsx # Composed from Lens Flex, Heading, Button
│ │ ├── DataTable.tsx # Composed from Lens Table components
│ │ ├── SearchBar.tsx # Composed from Lens Input, IconSearch
│ │ └── index.ts
│ └── providers/ # Context providers, Lens theme provider
│ └── LensProvider.tsx
├── pages/ # Page-level compositions
├── hooks/ # Custom hooks (non-UI logic only)
├── utils/ # Pure utility functions (non-UI)
└── types/ # TypeScript type definitions

⚠️ NOTICE: No styling files exist in this project.

# These files/directories must NEVER be created:

❌ src/**/\*.css
❌ src/**/_.scss
❌ src/\*\*/_.less
❌ src/**/\*.module.css
❌ src/**/_.styled.ts
❌ src/\*\*/_.styles.ts
❌ src/styles/
❌ src/theme/ (unless wrapping Lens theme)
❌ tailwind.config._
❌ postcss.config._
❌ .stylelintrc

WHEN BUILDING A NEW COMPONENT
Template: Feature Component

/\*\*

- @component FeatureName
- @description [What this component does]
- @lens-components [List ALL Lens components used]
-
- Lens compliance: ✅ All UI elements sourced from @loomhq/lens
  \*/

import React from 'react';
import {
Box,
Flex,
Stack,
Text,
Heading,
Button,
// ... only @loomhq/lens imports for UI
} from '@loomhq/lens';

// Non-UI imports are fine
import { useMyBusinessLogic } from '@/hooks/useMyBusinessLogic';
import type { MyDataType } from '@/types';

interface FeatureNameProps {
// Props definition
}

export function FeatureName({ ...props }: FeatureNameProps) {
// Business logic hooks

return (
<Box>
{/_ ALL JSX uses exclusively Lens components _/}
<Flex justify="between" align="center" padding="4">
<Heading size="lg">Feature Title</Heading>
<Button variant="primary" onClick={handleAction}>
Action
</Button>
</Flex>
<Stack spacing="4" padding="4">
<Text color="content.secondary">
Description text
</Text>
</Stack>
</Box>
);
}

Strictly enforce the Primitive-Only rule. Even though @emotion/core is a dependency, the Agent is forbidden from using:

The css={...} prop on any element.

The styled component factory (e.g., styled.div).

Any inline style={{ }} props.

If a layout requirement seems impossible with existing Lens primitives (Box, Flex, Grid), the Agent must ask for permission or propose a new Lens component rather than bypassing the system with custom CSS.

### 2. Design System Contribution.

Why: The Lens README describes a very specific 8-step process for adding icons (available-icons, index.ts, pnpm build). An agent needs to know it is allowed (and required) to modify the library itself if a requested icon is missing.

The Modification:
Define the "Missing Icon" protocol.

"When a feature requires an icon not currently in the Lens library:

Check ADS: Search the Atlassian Design System Icon Explorer.

Locate: Navigate to projects/libraries/lens/src/components/icon/available-icons.

Implement: Create the .tsx file using the ADS name.

Register: Update the local index.ts and run pnpm build.

Audit: The Agent must never copy-paste a raw <svg> into a feature component."

SELF-CHECK BEFORE SUBMITTING CODE
Before finalizing any frontend code, verify:

Every import for UI elements comes from @loomhq/lens
Zero .css, .scss, .module.css files created
Zero style={{}} with hardcoded pixel/color values
Zero className attributes with custom/utility classes
Zero <div>, <span>, <p>, <h1-h6> used directly (use Lens equivalents)
Zero third-party UI libraries imported
All spacing uses Lens token values
All colors use Lens token values
All typography uses Lens Text/Heading components
All icons come from Lens icon set
All form elements are Lens form components
All feedback (toasts, modals, alerts) uses Lens components
Layout is built with Lens Box/Flex/Stack/Grid

REFERENCE LOOKUP PROTOCOL
When unsure about a Lens component:

FIRST: Check .lens-knowledge-base/ local files
SECOND: Reference https://lens.loom.dev
THIRD: Inspect TypeScript types: node_modules/@loomhq/lens/dist/
NEVER: Guess or assume — look it up or ask
When a prop name or variant is uncertain:

// DON'T guess:
<Button variant="outlined"> // ❌ Might not exist in Lens

// DO verify from docs/types first, then use:
<Button variant="secondary"> // ✅ Verified from Lens documentation

### 3.3 — Cursor-Specific Rules (.cursor/rules/)

```markdown
## <!-- .cursor/rules/lens-master.mdc -->

description: Master rule for Lens design system enforcement
globs: ["src/**/*.tsx", "src/**/*.ts", "src/**/*.jsx", "src/**/*.js"]
alwaysApply: true

---

# LENS DESIGN SYSTEM — MANDATORY

You are working on a project that EXCLUSIVELY uses the Lens design system
(`@loomhq/lens`) by Loom. You must NEVER write UI code that doesn't use Lens.

## Quick Reference

Before writing ANY component, consult:

- Component list: @.lens-knowledge-base/exports-inventory.json
- Component docs: @.lens-knowledge-base/components/
- Design tokens: @.lens-knowledge-base/tokens/
- Full docs: https://lens.loom.dev

## Core Rules

1. ALL UI components must be imported from `@loomhq/lens`
2. ALL layout must use Lens primitives (Box, Flex, Stack, Grid)
3. ALL typography must use Lens components (Text, Heading)
4. ALL styling must use Lens design tokens — zero raw CSS
5. ALL icons must come from Lens icon set
6. ALL form elements must be Lens components
7. NEVER create .css/.scss/.module.css files
8. NEVER use styled-components, emotion, tailwind, or any CSS framework
9. NEVER use raw HTML elements (<div>, <span>, <p>, <h1>) for visual output
10. NEVER import UI components from any package other than @loomhq/lens

When Lens lacks a component, compose from Lens primitives using Lens tokens.

## <!-- .cursor/rules/lens-components.mdc -->

description: Lens component mapping — what to use for every UI need
globs: ["src/**/*.tsx", "src/**/*.jsx"]
alwaysApply: true

---

# LENS COMPONENT MAPPING

## Instead of HTML elements, use:

| Need        | ❌ NEVER                         | ✅ ALWAYS                                              |
| ----------- | -------------------------------- | ------------------------------------------------------ |
| Container   | `<div>`                          | `<Box>` from lens                                      |
| Flex layout | `<div style={{display:'flex'}}>` | `<Flex>` from lens                                     |
| Stack items | Custom flex divs                 | `<Stack>` from lens                                    |
| Grid        | CSS Grid divs                    | `<Grid>` from lens                                     |
| Heading     | `<h1>` to `<h6>`                 | `<Heading>` from lens                                  |
| Paragraph   | `<p>`                            | `<Text>` from lens                                     |
| Inline text | `<span>`                         | `<Text as="span">` from lens                           |
| Button      | `<button>`                       | `<Button>` from lens                                   |
| Link        | `<a>`                            | `<Link>` from lens                                     |
| Image       | `<img>`                          | `<Image>` from lens (if available) or `<Box as="img">` |
| List        | `<ul>/<ol>`                      | `<List>` from lens or compose with Stack               |
| Input       | `<input>`                        | `<Input>` from lens                                    |
| Select      | `<select>`                       | `<Select>` from lens                                   |
| Textarea    | `<textarea>`                     | `<Textarea>` from lens                                 |
| Checkbox    | `<input type="checkbox">`        | `<Checkbox>` from lens                                 |
| Radio       | `<input type="radio">`           | `<Radio>` from lens                                    |
| Toggle      | Custom checkbox                  | `<Switch>` from lens                                   |
| Table       | `<table>`                        | `<Table>` from lens                                    |
| Form        | `<form>`                         | `<Form>` from lens or `<Box as="form">`                |
| Separator   | `<hr>`                           | `<Divider>` from lens                                  |
| Badge       | Custom span                      | `<Badge>` from lens                                    |
| Avatar      | Custom img                       | `<Avatar>` from lens                                   |
| Tooltip     | Custom hover                     | `<Tooltip>` from lens                                  |
| Modal       | Custom overlay                   | `<Modal>` from lens                                    |
| Dropdown    | Custom menu                      | `<Menu>` / `<Dropdown>` from lens                      |
| Toast       | Custom notification              | `<Toast>` / `useToast` from lens                       |
| Tabs        | Custom tabs                      | `<Tabs>` from lens                                     |
| Card        | Custom div                       | `<Card>` from lens                                     |
| Alert       | Custom banner                    | `<Alert>` from lens                                    |
| Skeleton    | Custom loader                    | `<Skeleton>` from lens                                 |
| Spinner     | Custom loader                    | `<Spinner>` from lens                                  |
| Progress    | Custom bar                       | `<Progress>` from lens                                 |
| Breadcrumb  | Custom nav                       | `<Breadcrumb>` from lens                               |
| Pagination  | Custom nav                       | `<Pagination>` from lens                               |

## <!-- .cursor/rules/lens-review.mdc -->

description: Code review checklist for Lens compliance
globs: ["src/**/*.tsx", "src/**/*.jsx"]
alwaysApply: true

---

# PRE-COMMIT LENS COMPLIANCE CHECK

After writing code, scan for these violations:

## Pattern Detection — REJECT if found:

### Forbidden imports:

- `from 'styled-components'`
- `from '@emotion'`
- `from '@chakra-ui'`
- `from '@mui/'`
- `from 'antd'`
- `from 'react-bootstrap'`
- `from 'react-icons'`
- `from '@heroicons'`
- `from 'lucide-react'`
- `from '@headlessui'`
- `from '@radix-ui'`
- `*.module.css`
- `*.css'`
- `*.scss'`

### Forbidden JSX:

- `className=` (unless Lens components accept it per docs)
- `style={{` with hardcoded values
- Raw HTML: `<div>`, `<span>`, `<p>`, `<h1>-<h6>`, `<button>`,
  `<input>`, `<select>`, `<table>`, `<form>`, `<a>`, `<img>`,
  `<ul>`, `<ol>`, `<li>`, `<nav>`, `<header>`, `<footer>`,
  `<section>`, `<aside>`, `<main>`, `<article>`

### Forbidden files:

- Any `.css` file
- Any `.scss` file
- Any `.styled.ts` file
- `tailwind.config.*`

<!-- .windsurfrules -->

# WINDSURF PROJECT RULES — LENS DESIGN SYSTEM

## MANDATE

This project uses ONLY the Lens design system (`@loomhq/lens`).
No other UI library, CSS framework, or styling approach is permitted.

## RULES

1. Import ALL UI components from `@loomhq/lens` exclusively
2. Use Lens layout primitives (Box, Flex, Stack, Grid) — never raw div
3. Use Lens Text/Heading — never raw p/h1-h6/span
4. Use Lens design tokens for spacing, colors, typography — never raw CSS values
5. Use Lens icons — never react-icons, heroicons, lucide, or SVG files
6. Use Lens form components — never raw HTML form elements
7. Use Lens feedback components (Modal, Toast, Alert) — never third-party
8. NEVER create CSS/SCSS/CSS-module/styled-component files
9. NEVER use className with custom classes
10. NEVER use inline style={{}} with hardcoded values

## REFERENCE

- Docs: https://lens.loom.dev
- Package: @loomhq/lens
- Local KB: .lens-knowledge-base/

## WHEN IN DOUBT

Look up the component at https://lens.loom.dev before writing code.
If a component doesn't exist in Lens, compose from Lens primitives.

<!-- .github/copilot-instructions.md -->

# GitHub Copilot Instructions

## Design System Requirement

This project uses the Lens design system (`@loomhq/lens`) exclusively.

When generating code suggestions:

- Always import UI components from `@loomhq/lens`
- Use `<Box>`, `<Flex>`, `<Stack>` instead of `<div>`
- Use `<Text>`, `<Heading>` instead of `<p>`, `<h1>`
- Use `<Button>` from lens instead of `<button>`
- Use `<Input>`, `<Select>` from lens instead of HTML elements
- Never suggest CSS files, styled-components, or Tailwind classes
- Never suggest imports from MUI, Chakra, Ant Design, or other UI libraries
- All spacing, colors, typography must use Lens token props

4. Component Registry & Mapping
   4.1 — Create a Live Component Registry

// src/utils/lens-registry.ts
// This file serves as DOCUMENTATION and a quick-lookup for agents

/\*\*

- LENS COMPONENT REGISTRY
-
- This file maps every common UI need to its Lens equivalent.
- AI coding agents: CONSULT THIS before creating any UI element.
-
- Last synced with @loomhq/lens: [version]
- Reference: https://lens.loom.dev
  \*/

// ============================================================
// LAYOUT COMPONENTS
// ============================================================

export { Box } from '@loomhq/lens';
// Use for: Generic containers, replacing <div>
// Props: padding, margin, backgroundColor, borderRadius, shadow, etc.
// Example: <Box padding="4" backgroundColor="surface.primary">

export { Flex } from '@loomhq/lens';
// Use for: Flexbox layouts, replacing <div style={{display:'flex'}}>
// Props: direction, align, justify, gap, wrap
// Example: <Flex justify="between" align="center" gap="3">

export { Stack } from '@loomhq/lens';
// Use for: Vertical/horizontal stacking with consistent spacing
// Props: spacing, direction, align
// Example: <Stack spacing="4">

export { Grid } from '@loomhq/lens';
// Use for: CSS Grid layouts
// Props: columns, gap, templateColumns
// Example: <Grid columns={3} gap="4">

// ============================================================
// TYPOGRAPHY
// ============================================================

export { Heading } from '@loomhq/lens';
// Use for: All headings (h1-h6), replacing <h1>...<h6>
// Props: size ('xs'|'sm'|'md'|'lg'|'xl'|'2xl'), as ('h1'..'h6')
// Example: <Heading size="lg" as="h1">Page Title</Heading>

export { Text } from '@loomhq/lens';
// Use for: All body text, replacing <p>, <span>
// Props: size, weight, color, as
// Example: <Text size="sm" color="content.secondary">Help text</Text>

// ============================================================
// DATA ENTRY
// ============================================================

export { Input } from '@loomhq/lens';
// Use for: Text inputs, replacing <input type="text|email|password|...">
// Props: size, variant, placeholder, error, disabled, leftElement, rightElement

export { Textarea } from '@loomhq/lens';
// Use for: Multi-line text, replacing <textarea>

export { Select } from '@loomhq/lens';
// Use for: Dropdown selection, replacing <select>

export { Checkbox } from '@loomhq/lens';
// Use for: Checkboxes, replacing <input type="checkbox">

export { Radio } from '@loomhq/lens';
// Use for: Radio buttons, replacing <input type="radio">

export { Switch } from '@loomhq/lens';
// Use for: Toggles

// ============================================================
// ACTIONS
// ============================================================

export { Button } from '@loomhq/lens';
// Use for: All clickable actions, replacing <button>
// Props: variant, size, disabled, loading, leftIcon, rightIcon

export { IconButton } from '@loomhq/lens';
// Use for: Icon-only buttons

export { Link } from '@loomhq/lens';
// Use for: Navigation links, replacing <a>

// ============================================================
// FEEDBACK
// ============================================================

export { Modal } from '@loomhq/lens';
// Use for: Dialogs, overlays

export { Toast, useToast } from '@loomhq/lens';
// Use for: Temporary notifications

export { Alert } from '@loomhq/lens';
// Use for: Inline alerts/banners

export { Tooltip } from '@loomhq/lens';
// Use for: Hover information

export { Popover } from '@loomhq/lens';
// Use for: Contextual popovers

// ============================================================
// DATA DISPLAY
// ============================================================

export { Table } from '@loomhq/lens';
// Use for: Tabular data, replacing <table>

export { Badge } from '@loomhq/lens';
// Use for: Status indicators, counts

export { Avatar } from '@loomhq/lens';
// Use for: User avatars

export { Card } from '@loomhq/lens';
// Use for: Contained content sections

export { Tag } from '@loomhq/lens';
// Use for: Labels, categories

// ============================================================
// NAVIGATION
// ============================================================

export { Tabs } from '@loomhq/lens';
// Use for: Tab navigation

export { Breadcrumb } from '@loomhq/lens';
// Use for: Breadcrumb navigation

export { Menu } from '@loomhq/lens';
// Use for: Dropdown menus

export { Pagination } from '@loomhq/lens';
// Use for: Page navigation

// ============================================================
// LOADING STATES
// ============================================================

export { Spinner } from '@loomhq/lens';
// Use for: Loading spinners

export { Skeleton } from '@loomhq/lens';
// Use for: Content loading placeholders

export { Progress } from '@loomhq/lens';
// Use for: Progress bars

// ============================================================
// UTILITY
// ============================================================

export { Divider } from '@loomhq/lens';
// Use for: Visual separators, replacing <hr>

export { Portal } from '@loomhq/lens';
// Use for: Rendering outside DOM hierarchy

5. Context Injection System
   5.1 — Pre-Session Context Loader

// scripts/prepare-agent-context.ts
// Run this before starting a coding session to generate
// a condensed context file the agent should always reference

import _ as fs from 'fs';
import _ as path from 'path';

interface LensContext {
version: string;
components: string[];
hooks: string[];
utilities: string[];
tokenCategories: string[];
criticalRules: string[];
commonPatterns: Record<string, string>;
}

async function buildAgentContext(): Promise<void> {
const kbDir = path.join(process.cwd(), '.lens-knowledge-base');

// Read inventory
const inventory = JSON.parse(
fs.readFileSync(path.join(kbDir, 'exports-inventory.json'), 'utf8')
);

// Read package meta
const meta = JSON.parse(
fs.readFileSync(path.join(kbDir, 'package-meta.json'), 'utf8')
);

const context: LensContext = {
version: meta.version,
components: inventory.components,
hooks: inventory.hooks,
utilities: inventory.utilities,
tokenCategories: [
'colors (surface.*, content.*, border.*, accent.*)',
'spacing (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24)',
'borderRadius (none, sm, md, lg, xl, full)',
'shadows (none, sm, md, lg, xl)',
'fontSize (xs, sm, md, lg, xl, 2xl, 3xl)',
'fontWeight (normal, medium, semibold, bold)',
],
criticalRules: [
'ALL UI imports MUST come from @loomhq/lens',
'ZERO CSS files of any kind',
'ZERO raw HTML elements for visual output',
'ZERO third-party UI libraries',
'ZERO inline styles with hardcoded values',
'ZERO className with custom/utility classes',
'Compose complex UI from Lens primitives only',
'Use Lens design tokens for ALL visual properties',
],
commonPatterns: {
'page-layout': `
<Box padding="6">
  <Stack spacing="6">
    <Flex justify="between" align="center">
      <Heading size="xl">Page Title</Heading>
      <Button variant="primary">Action</Button>
    </Flex>
    <Divider />
    {/* Page content */}
  </Stack>
</Box>`,
'form-field': `
<Stack spacing="1">
  <Text as="label" size="sm" weight="medium">Label</Text>
  <Input placeholder="Enter value..." />
  <Text size="xs" color="content.tertiary">Help text</Text>
</Stack>`,
'card-pattern': `
<Card padding="4">
  <Stack spacing="3">
    <Flex justify="between" align="center">
      <Heading size="sm">Card Title</Heading>
      <Badge colorScheme="success">Active</Badge>
    </Flex>
    <Text color="content.secondary">Card description</Text>
    <Flex gap="2">
      <Button size="sm" variant="secondary">Edit</Button>
      <Button size="sm" variant="ghost">Delete</Button>
    </Flex>
  </Stack>
</Card>`,
'data-list': `
<Stack spacing="0" divider={<Divider />}>
  {items.map(item => (
    <Flex key={item.id} padding="3" align="center" gap="3">
      <Avatar name={item.name} size="sm" />
      <Stack spacing="0" flex="1">
        <Text weight="medium">{item.name}</Text>
        <Text size="sm" color="content.secondary">{item.email}</Text>
      </Stack>
      <IconButton icon={<IconMore />} variant="ghost" size="sm" />
    </Flex>
  ))}
</Stack>`,
'empty-state': `
<Flex direction="column" align="center" padding="12" gap="4">
  <IconInbox size="xl" color="content.tertiary" />
  <Heading size="md">No items yet</Heading>
  <Text color="content.secondary" textAlign="center">
    Get started by creating your first item.
  </Text>
  <Button variant="primary" leftIcon={<IconPlus />}>
    Create Item
  </Button>
</Flex>`,
'modal-pattern': `
<Modal isOpen={isOpen} onClose={onClose}>
  <Modal.Header>
    <Heading size="md">Modal Title</Heading>
  </Modal.Header>
  <Modal.Body>
    <Stack spacing="4">
      {/* Modal content */}
    </Stack>
  </Modal.Body>
  <Modal.Footer>
    <Flex justify="end" gap="2">
      <Button variant="ghost" onClick={onClose}>Cancel</Button>
      <Button variant="primary" onClick={onConfirm}>Confirm</Button>
    </Flex>
  </Modal.Footer>
</Modal>`,
},
};

// Write condensed context
fs.writeFileSync(
path.join(process.cwd(), '.lens-agent-context.json'),
JSON.stringify(context, null, 2)
);

// Write as markdown for easy agent consumption
let md = '# Lens Design System — Agent Quick Reference\n\n';
md += `**Package:** @loomhq/lens@${context.version}\n\n`;

md += '## Available Components\n';
md += context.components.map(c => `- \`${c}\``).join('\n') + '\n\n';

md += '## Available Hooks\n';
md += context.hooks.map(h => `- \`${h}\``).join('\n') + '\n\n';

md += '## Design Token Categories\n';
md += context.tokenCategories.map(t => `- ${t}`).join('\n') + '\n\n';

md += '## Critical Rules\n';
md += context.criticalRules.map((r, i) => `${i+1}. ${r}`).join('\n') + '\n\n';

md += '## Common Patterns\n\n';
Object.entries(context.commonPatterns).forEach(([name, code]) => {
md += `### ${name}\n\`\`\`tsx${code}\n\`\`\`\n\n`;
});

fs.writeFileSync(
path.join(process.cwd(), '.lens-agent-context.md'),
md
);

console.log('Agent context files generated:');
console.log(' - .lens-agent-context.json');
console.log(' - .lens-agent-context.md');
}

buildAgentContext().catch(console.error);

5.2 — Dynamic Context for Chat-Based Agents

<!-- Use this as a preamble when starting any chat with an AI agent -->

## SESSION CONTEXT: Lens Design System

I'm working on a project that EXCLUSIVELY uses the Lens design system
(`@loomhq/lens` by Loom). Before writing any frontend code:

1. ALL UI components must come from `@loomhq/lens`
2. Reference the documentation at https://lens.loom.dev
3. Reference the local knowledge base at `.lens-knowledge-base/`
4. NEVER use raw HTML elements, custom CSS, or other UI libraries

Available components include: [paste from .lens-agent-context.md]

When I ask you to build UI, use ONLY these components and their documented
props. If you need a component that doesn't exist in Lens, compose it
from Lens primitives (Box, Flex, Stack, Text, etc.) using Lens design tokens.

6. Prompt Engineering Templates
   6.1 — Task-Specific Prompt Templates

<!-- TEMPLATE: Building a new page -->

Build a [PAGE NAME] page using EXCLUSIVELY the Lens design system.

Requirements:

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Lens constraints (MANDATORY):

- Import ALL UI components from '@loomhq/lens'
- Use Box/Flex/Stack for layout (never raw div)
- Use Heading/Text for typography (never raw h1-h6/p/span)
- Use Lens Button, Input, Select, etc. (never raw HTML elements)
- Use Lens design tokens for spacing, colors, typography
- Zero CSS files, zero styled-components, zero Tailwind
- Zero className with custom classes
- Zero inline styles with hardcoded values

Reference: https://lens.loom.dev for component API details
Reference: @.lens-knowledge-base/ for local component documentation

Output the complete component file(s) with proper imports from @loomhq/lens.

<!-- TEMPLATE: Adding a feature to existing component -->

Add [FEATURE] to the [COMPONENT] component.

Current code: [paste or reference file]

Rules:

- Use ONLY @loomhq/lens components for any new UI elements
- Maintain existing Lens component usage patterns
- Do not introduce any raw HTML, custom CSS, or external UI libraries
- Consult https://lens.loom.dev for available Lens components and props
- If a new Lens component is needed, check .lens-knowledge-base/exports-inventory.json

Show the modified code with only Lens-compliant additions.

<!-- TEMPLATE: Converting existing code to Lens -->

Convert the following code to use EXCLUSIVELY the Lens design system (@loomhq/lens).

Current code:
`[paste code]`

Conversion rules:

- Replace ALL raw HTML elements with Lens equivalents
- Replace ALL CSS/className with Lens token props
- Replace ALL third-party UI components with Lens equivalents
- Preserve all business logic and data flow
- Result must have zero raw CSS and zero non-Lens UI imports

Lens component reference: @.lens-knowledge-base/exports-inventory.json
Lens docs: https://lens.loom.dev

7. Automated Enforcement & Guardrails
   7.1 — ESLint Rules for Lens Enforcement

// .eslintrc.js (or eslint.config.js)
module.exports = {
plugins: ['lens-compliance'], // custom plugin below
rules: {
// Forbid imports from competing UI libraries
'no-restricted-imports': ['error', {
paths: [
// CSS-in-JS
{ name: 'styled-components', message: 'Use @loomhq/lens components instead.' },
{ name: '@emotion/react', message: 'Use @loomhq/lens components instead.' },
{ name: '@emotion/styled', message: 'Use @loomhq/lens components instead.' },
{ name: 'styled-jsx', message: 'Use @loomhq/lens components instead.' },

        // Competing component libraries
        { name: '@mui/material', message: 'Use @loomhq/lens components instead.' },
        { name: '@mui/icons-material', message: 'Use Lens icons instead.' },
        { name: '@chakra-ui/react', message: 'Use @loomhq/lens components instead.' },
        { name: 'antd', message: 'Use @loomhq/lens components instead.' },
        { name: 'react-bootstrap', message: 'Use @loomhq/lens components instead.' },
        { name: '@headlessui/react', message: 'Use @loomhq/lens components instead.' },
        { name: '@radix-ui/react-dialog', message: 'Use Lens Modal instead.' },
        { name: '@radix-ui/react-popover', message: 'Use Lens Popover instead.' },
        { name: '@radix-ui/react-tooltip', message: 'Use Lens Tooltip instead.' },
        { name: '@radix-ui/react-select', message: 'Use Lens Select instead.' },
        { name: '@mantine/core', message: 'Use @loomhq/lens components instead.' },

        // Icon libraries
        { name: 'react-icons', message: 'Use Lens icons instead.' },
        { name: '@heroicons/react', message: 'Use Lens icons instead.' },
        { name: 'lucide-react', message: 'Use Lens icons instead.' },
        { name: '@fortawesome/react-fontawesome', message: 'Use Lens icons instead.' },

        // Toast/notification libraries
        { name: 'react-toastify', message: 'Use Lens Toast/useToast instead.' },
        { name: 'react-hot-toast', message: 'Use Lens Toast/useToast instead.' },
        { name: 'notistack', message: 'Use Lens Toast/useToast instead.' },

        // Modal libraries
        { name: 'react-modal', message: 'Use Lens Modal instead.' },

        // CSS utility libraries
        { name: 'clsx', message: 'No custom CSS classes needed with Lens.' },
        { name: 'classnames', message: 'No custom CSS classes needed with Lens.' },
        { name: 'tailwind-merge', message: 'Tailwind is not used. Use Lens.' },
      ],
      patterns: [
        { group: ['@mui/*'], message: 'Use @loomhq/lens instead of MUI.' },
        { group: ['@chakra-ui/*'], message: 'Use @loomhq/lens instead of Chakra.' },
        { group: ['@radix-ui/*'], message: 'Use @loomhq/lens instead of Radix.' },
        { group: ['@mantine/*'], message: 'Use @loomhq/lens instead of Mantine.' },
        { group: ['@headlessui/*'], message: 'Use @loomhq/lens instead of HeadlessUI.' },
        { group: ['react-icons/*'], message: 'Use Lens icons instead.' },
        { group: ['@heroicons/*'], message: 'Use Lens icons instead.' },
        { group: ['@fortawesome/*'], message: 'Use Lens icons instead.' },
      ],
    }],

    // Forbid CSS imports
    'no-restricted-syntax': ['error',
      {
        selector: 'ImportDeclaration[source.value=/\\.css$/]',
        message: 'CSS file imports are forbidden. Use Lens design tokens.',
      },
      {
        selector: 'ImportDeclaration[source.value=/\\.scss$/]',
        message: 'SCSS file imports are forbidden. Use Lens design tokens.',
      },
      {
        selector: 'ImportDeclaration[source.value=/\\.less$/]',
        message: 'LESS file imports are forbidden. Use Lens design tokens.',
      },
      {
        selector: 'ImportDeclaration[source.value=/\\.module\\.css$/]',
        message: 'CSS Module imports are forbidden. Use Lens design tokens.',
      },
    ],

},
};

7.2 — Custom ESLint Plugin for Deep Enforcement

// eslint-plugin-lens-compliance/index.js

module.exports = {
rules: {
/\*\*
_ Rule: no-raw-html-elements
_ Forbids direct use of HTML elements that have Lens equivalents
\*/
'no-raw-html-elements': {
meta: {
type: 'problem',
docs: {
description: 'Forbid raw HTML elements that have Lens equivalents',
},
messages: {
forbidden: 'Use Lens <{{replacement}}> instead of raw <{{element}}>. Import from @loomhq/lens.',
},
},
create(context) {
const elementMap = {
'div': 'Box',
'span': 'Text as="span"',
'p': 'Text',
'h1': 'Heading as="h1"',
'h2': 'Heading as="h2"',
'h3': 'Heading as="h3"',
'h4': 'Heading as="h4"',
'h5': 'Heading as="h5"',
'h6': 'Heading as="h6"',
'button': 'Button',
'a': 'Link',
'input': 'Input',
'textarea': 'Textarea',
'select': 'Select',
'table': 'Table',
'hr': 'Divider',
'img': 'Image or Box as="img"',
'ul': 'Stack or List',
'ol': 'Stack or List',
'nav': 'Box as="nav"',
'header': 'Box as="header"',
'footer': 'Box as="footer"',
'section': 'Box as="section"',
'main': 'Box as="main"',
'aside': 'Box as="aside"',
'article': 'Box as="article"',
'label': 'Text as="label" or FormLabel',
};

        return {
          JSXOpeningElement(node) {
            const elementName = node.name.type === 'JSXIdentifier'
              ? node.name.name
              : null;

            if (elementName && elementMap[elementName]) {
              context.report({
                node,
                messageId: 'forbidden',
                data: {
                  element: elementName,
                  replacement: elementMap[elementName],
                },
              });
            }
          },
        };
      },
    },

    /**
     * Rule: no-inline-styles
     * Forbids inline style attributes with hardcoded values
     */
    'no-inline-styles': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Forbid inline style objects — use Lens token props instead',
        },
        messages: {
          forbidden: 'Inline styles are forbidden. Use Lens component props and design tokens instead.',
        },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (
              node.name.name === 'style' &&
              node.value &&
              node.value.type === 'JSXExpressionContainer'
            ) {
              context.report({
                node,
                messageId: 'forbidden',
              });
            }
          },
        };
      },
    },

    /**
     * Rule: no-custom-classnames
     * Forbids className attributes (unless on Lens components that support them)
     */
    'no-custom-classnames': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Forbid className — use Lens props for styling',
        },
        messages: {
          forbidden: 'className is forbidden. Use Lens component props and design tokens for styling.',
        },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className') {
              context.report({
                node,
                messageId: 'forbidden',
              });
            }
          },
        };
      },
    },

},
};

7.3 — Pre-Commit Hook for File Type Enforcement

#!/bin/bash

# .husky/pre-commit

echo "🔍 Lens Compliance Check..."

# Check for forbidden file types

FORBIDDEN_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(css|scss|less|sass|styled\.(ts|js|tsx|jsx))$' | grep -v 'node_modules')

if [ -n "$FORBIDDEN_FILES" ]; then
echo ""
echo "❌ LENS VIOLATION: CSS/styling files detected!"
echo ""
echo "The following files violate the Lens-only styling mandate:"
echo "$FORBIDDEN_FILES"
echo ""
echo "This project uses ONLY @loomhq/lens for styling."
echo "Please remove these files and use Lens design tokens instead."
echo ""
echo "Reference: https://lens.loom.dev"
exit 1
fi

# Check for forbidden package additions

if git diff --cached -- package.json | grep -E '"(styled-components|@emotion|@chakra-ui|@mui|antd|react-bootstrap|tailwindcss|react-icons|@heroicons|lucide-react|@headlessui|@radix-ui|@mantine)"'; then
echo ""
echo "❌ LENS VIOLATION: Forbidden UI dependency detected in package.json!"
echo ""
echo "This project uses ONLY @loomhq/lens for UI components."
echo "Remove the offending dependency and use Lens equivalents."
exit 1
fi

# Run ESLint on staged files

STAGED_TSX=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(tsx|jsx)$')
if [ -n "$STAGED_TSX" ]; then
npx eslint $STAGED_TSX --rule 'no-restricted-imports: error' --quiet
if [ $? -ne 0 ]; then
echo ""
echo "❌ LENS VIOLATION: ESLint detected non-Lens imports!"
exit 1
fi
fi

echo "✅ Lens compliance check passed."

7.4 — CI/CD Pipeline Check

# .github/workflows/lens-compliance.yml

name: Lens Design System Compliance

on:
pull_request:
paths: - 'src/\*\*' - 'package.json'

jobs:
lens-compliance:
name: Verify Lens-Only Frontend
runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      # Check 1: No CSS files
      - name: Check for forbidden CSS files
        run: |
          VIOLATIONS=$(find src/ -type f \( -name "*.css" -o -name "*.scss" -o -name "*.less" -o -name "*.sass" -o -name "*.styled.ts" -o -name "*.styled.tsx" -o -name "*.styles.ts" -o -name "*.styles.tsx" \) 2>/dev/null)
          if [ -n "$VIOLATIONS" ]; then
            echo "❌ LENS VIOLATION: CSS/styling files found:"
            echo "$VIOLATIONS"
            exit 1
          fi
          echo "✅ No forbidden CSS files"

      # Check 2: No forbidden dependencies
      - name: Check for forbidden UI dependencies
        run: |
          FORBIDDEN="styled-components @emotion @chakra-ui @mui antd react-bootstrap tailwindcss react-icons @heroicons lucide-react @headlessui @radix-ui @mantine"
          for pkg in $FORBIDDEN; do
            if grep -q "\"$pkg" package.json; then
              echo "❌ LENS VIOLATION: Forbidden dependency '$pkg' in package.json"
              exit 1
            fi
          done
          echo "✅ No forbidden dependencies"

      # Check 3: No tailwind config
      - name: Check for Tailwind config
        run: |
          if ls tailwind.config.* 1>/dev/null 2>&1; then
            echo "❌ LENS VIOLATION: tailwind.config.* file found"
            exit 1
          fi
          echo "✅ No Tailwind config"

      # Check 4: ESLint
      - name: Run Lens ESLint Rules
        run: pnpm eslint src/ --max-warnings 0

      # Check 5: Grep for raw HTML in TSX
      - name: Scan for raw HTML elements in TSX
        run: |
          # This is a heuristic check — catches obvious violations
          VIOLATIONS=$(grep -rn '<div\b\|<span\b\|<button\b\|<input\b\|<select\b\|<textarea\b\|<table\b\|<a href\|<img\b\|<h[1-6]\b\|<p>' src/ --include='*.tsx' --include='*.jsx' | grep -v 'node_modules' | grep -v '\.test\.' | grep -v '\.spec\.' | head -20)
          if [ -n "$VIOLATIONS" ]; then
            echo "⚠️ POTENTIAL LENS VIOLATIONS: Raw HTML elements detected:"
            echo "$VIOLATIONS"
            echo ""
            echo "Replace with Lens equivalents from @loomhq/lens"
            echo "(Box, Text, Button, Input, Select, Heading, etc.)"
            exit 1
          fi
          echo "✅ No raw HTML elements detected"

8. Workflow & Development Protocol
   8.1 — Development Session Startup Protocol

#!/bin/bash

# scripts/start-dev-session.sh

# Run this at the beginning of every development session

echo "========================================"
echo " DEVELOPMENT SESSION INITIALIZATION"
echo " Design System: Lens (@loomhq/lens)"
echo "========================================"
echo ""

# 1. Verify Lens is installed

if ! pnpm list @loomhq/lens > /dev/null 2>&1; then
echo "❌ ERROR: @loomhq/lens is not installed!"
echo "Run: pnpm add @loomhq/lens"
exit 1
fi

LENS_VERSION=$(node -e "console.log(require('@loomhq/lens/package.json').version)")
echo "✅ Lens v${LENS_VERSION} installed"

# 2. Verify knowledge base exists

if [ ! -d ".lens-knowledge-base" ]; then
echo "⚠️ Knowledge base not found. Running builder..."
bash scripts/lens-knowledge-extractor.sh
fi
echo "✅ Knowledge base ready"

# 3. Verify agent rule files exist

for file in CLAUDE.md .windsurfrules .github/copilot-instructions.md AGENTS.md; do
if [ ! -f "$file" ]; then
echo "⚠️ Missing: $file"
else
echo "✅ $file exists"
fi
done

# 4. Generate fresh context

npx ts-node scripts/prepare-agent-context.ts 2>/dev/null
echo "✅ Agent context refreshed"

# 5. Quick compliance scan

echo ""
echo "--- Quick Compliance Scan ---"
CSS_FILES=$(find src/ -type f \( -name "*.css" -o -name "*.scss" \) 2>/dev/null | wc -l)
if [ "$CSS_FILES" -gt 0 ]; then
echo "⚠️ WARNING: $CSS_FILES CSS files found in src/"
else
echo "✅ No CSS files in src/"
fi

echo ""
echo "========================================"
echo " SESSION READY — LENS MODE ACTIVE"
echo ""
echo " Remember:"
echo " • ALL UI from @loomhq/lens"
echo " • ZERO custom CSS"
echo " • Docs: https://lens.loom.dev"
echo "========================================"

┌─────────────────────────────────────────────────────────────────────┐
│ AGENT INTERACTION WORKFLOW │
│ │
│ ┌──────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ INSTRUCT │───▶│ AGENT WRITES │───▶│ VALIDATE │ │
│ │ │ │ CODE │ │ │ │
│ │ Provide: │ │ │ │ Check: │ │
│ │ • Task │ │ Agent uses │ │ • Imports │ │
│ │ • Rules │ │ Lens KB + │ │ • Components │ │
│ │ • Context│ │ Rules to │ │ • Tokens │ │
│ │ • Refs │ │ generate │ │ • No CSS │ │
│ └──────────┘ │ code │ │ • No HTML │ │
│ └──────────────┘ └──────┬───────┘ │
│ │ │
│ ┌──────────────────┼──────────────────┐ │
│ │ │ │ │
│ ┌────▼────┐ ┌────▼────┐ │ │
│ │ PASS ✅ │ │ FAIL ❌ │ │ │
│ │ │ │ │ │ │
│ │ Accept │ │ Return │ │ │
│ │ code │ │ to agent│ │ │
│ │ │ │ with │ │ │
│ │ Run │ │ specific│ │ │
│ │ ESLint │ │ Lens │ │ │
│ │ + CI │ │ fixes │ │ │
│ └─────────┘ └─────────┘ │ │
│ │ │
└─────────────────────────────────────────────────────────────────────┘

8.3 — Correction Prompt Templates
When an agent produces non-compliant code, use these correction prompts:

<!-- When agent uses raw HTML elements -->

LENS VIOLATION DETECTED: You used raw HTML elements.

Please fix the following violations:

- `<div>` → replace with `<Box>` from @loomhq/lens
- `<span>` → replace with `<Text as="span">` from @loomhq/lens
- `<h2>` → replace with `<Heading as="h2" size="lg">` from @loomhq/lens
- `<button>` → replace with `<Button>` from @loomhq/lens
- `<p>` → replace with `<Text>` from @loomhq/lens

Rewrite the component using ONLY Lens components.
All visual elements must be imported from '@loomhq/lens'.

<!-- When agent uses custom CSS -->

LENS VIOLATION DETECTED: You created CSS/styling code.

Remove:

- The `style={{}}` attributes with hardcoded values
- The className attributes
- Any .css/.scss/.module.css imports/files

Replace with Lens component props:

- `style={{ padding: '16px' }}` → `padding="4"` on Lens Box
- `style={{ display: 'flex' }}` → use Lens `<Flex>` component
- `style={{ color: '#666' }}` → `color="content.secondary"` on Lens Text
- `className="text-center"` → `textAlign="center"` on Lens component

Rewrite using Lens design tokens and component props exclusively.

<!-- When agent imports third-party UI lib -->

LENS VIOLATION DETECTED: You imported from [LIBRARY_NAME].

This project uses EXCLUSIVELY @loomhq/lens. Remove: import { X } from '[library]';

Replace with: import { [LensEquivalent] } from '@loomhq/lens';

Mapping:

- [ThirdPartyComponent] → [LensComponent]
- [ThirdPartyComponent] → [LensComponent]

Rewrite the entire import block and component usage with Lens equivalents.

9. Continuous Feedback Loop
   9.1 — Violation Tracking Database

// scripts/track-violations.ts
// Track and analyze agent violation patterns to improve prompts

import _ as fs from 'fs';
import _ as path from 'path';

interface Violation {
timestamp: string;
agent: string; // 'cursor' | 'copilot' | 'claude' | 'windsurf' | etc.
type: 'raw-html' | 'custom-css' | 'third-party-import' | 'inline-style' | 'custom-classname';
element: string; // what was used
shouldBe: string; // what should have been used
file: string;
promptContext?: string; // what was the agent asked to do
}

interface ViolationLog {
violations: Violation[];
summary: Record<string, number>;
}

const LOG_PATH = path.join(process.cwd(), '.lens-violation-log.json');

export function logViolation(violation: Violation): void {
let log: ViolationLog;

if (fs.existsSync(LOG_PATH)) {
log = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
} else {
log = { violations: [], summary: {} };
}

log.violations.push(violation);

const key = `${violation.agent}:${violation.type}`;
log.summary[key] = (log.summary[key] || 0) + 1;

fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

export function analyzeViolations(): void {
if (!fs.existsSync(LOG_PATH)) {
console.log('No violations logged yet.');
return;
}

const log: ViolationLog = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));

console.log('\n=== LENS VIOLATION ANALYSIS ===\n');
console.log(`Total violations: ${log.violations.length}\n`);

console.log('By type:');
const byType: Record<string, number> = {};
log.violations.forEach(v => {
byType[v.type] = (byType[v.type] || 0) + 1;
});
Object.entries(byType)
.sort(([,a], [,b]) => b - a)
.forEach(([type, count]) => {
console.log(`  ${type}: ${count}`);
});

console.log('\nBy agent:');
const byAgent: Record<string, number> = {};
log.violations.forEach(v => {
byAgent[v.agent] = (byAgent[v.agent] || 0) + 1;
});
Object.entries(byAgent)
.sort(([,a], [,b]) => b - a)
.forEach(([agent, count]) => {
console.log(`  ${agent}: ${count}`);
});

console.log('\nMost common violations:');
const byElement: Record<string, number> = {};
log.violations.forEach(v => {
const key = `${v.element} → ${v.shouldBe}`;
byElement[key] = (byElement[key] || 0) + 1;
});
Object.entries(byElement)
.sort(([,a], [,b]) => b - a)
.slice(0, 10)
.forEach(([element, count]) => {
console.log(`  ${element}: ${count}`);
});

console.log('\n=== RECOMMENDATION ===');
console.log('Update agent rules to specifically address the most common violations.');
console.log('Add explicit examples for the top offending patterns.\n');
}

9.2 — Rule Refinement Process

┌──────────────────────────────────────────────────────────────────┐
│ CONTINUOUS IMPROVEMENT CYCLE │
│ │
│ ┌──────────┐ ┌───────────┐ ┌───────────┐ │
│ │ Week 1 │────▶│ Week 2 │────▶│ Week 3 │──── ... │
│ │ │ │ │ │ │ │
│ │ Deploy │ │ Analyze │ │ Refine │ │
│ │ rules │ │ violations│ │ rules │ │
│ │ │ │ patterns │ │ Add new │ │
│ │ Start │ │ │ │ examples │ │
│ │ tracking │ │ Identify │ │ for top │ │
│ │ │ │ gaps │ │ violations│ │
│ └──────────┘ └───────────┘ └───────────┘ │
│ │
│ Feedback Sources: │
│ • ESLint violation counts │
│ • CI pipeline failure patterns │
│ • Manual code review observations │
│ • .lens-violation-log.json analysis │
│ • Agent output quality scoring │
│ │
│ Actions: │
│ • Add specific "DON'T do X, DO do Y" examples to rules │
│ • Expand component documentation for frequently misused ones │
│ • Create more code pattern templates for common violations │
│ • Strengthen ESLint rules for newly discovered patterns │
└──────────────────────────────────────────────────────────────────┘

9.3 — Knowledge Base Update Script

#!/bin/bash

# scripts/update-lens-kb.sh

# Run when @loomhq/lens is updated to a new version

echo "=== Updating Lens Knowledge Base ==="

OLD_VERSION=$(cat .lens-knowledge-base/package-meta.json | node -e "
let d=''; process.stdin.on('data',c=>d+=c);
process.stdin.on('end',()=>console.log(JSON.parse(d).version))
")

NEW_VERSION=$(node -e "console.log(require('@loomhq/lens/package.json').version)")

echo "Old version: $OLD_VERSION"
echo "New version: $NEW_VERSION"

if [ "$OLD_VERSION" = "$NEW_VERSION" ]; then
echo "No version change. Skipping."
exit 0
fi

echo ""
echo "Version changed! Rebuilding knowledge base..."

# Re-run extraction

bash scripts/lens-knowledge-extractor.sh

# Regenerate agent context

npx ts-node scripts/prepare-agent-context.ts

# Diff exports to find new/removed components

echo ""
echo "=== EXPORT CHANGES ==="
echo "Review for new/removed components and update:"
echo " 1. Agent rule files (CLAUDE.md, .windsurfrules, etc.)"
echo " 2. Component documentation (.lens-knowledge-base/components/)"
echo " 3. ESLint rules if new restriction patterns needed"
echo " 4. Check https://lens.loom.dev for new component docs"
echo ""
echo "=== UPDATE COMPLETE ==="

10. Complete File Manifest
    Here's every file this strategy creates, in one view:

project-root/
│
├── CLAUDE.md # [Section 3.2] Master agent instructions
├── AGENTS.md # [Section 3.2] Generic agent instructions (same content)
├── .windsurfrules # [Section 3.4] Windsurf-specific rules
├── .clinerules # [Section 3.4] Cline-specific rules (same format)
│
├── .cursor/
│ └── rules/
│ ├── lens-master.mdc # [Section 3.3] Master Cursor rule
│ ├── lens-components.mdc # [Section 3.3] Component mapping
│ └── lens-review.mdc # [Section 3.3] Review checklist
│
├── .github/
│ ├── copilot-instructions.md # [Section 3.5] GitHub Copilot rules
│ └── workflows/
│ └── lens-compliance.yml # [Section 7.4] CI pipeline
│
├── .husky/
│ └── pre-commit # [Section 7.3] Pre-commit hook
│
├── .lens-knowledge-base/ # [Section 2] Knowledge base
│ ├── MASTER-REFERENCE.md
│ ├── package-meta.json
│ ├── exports-inventory.json
│ ├── component-signatures.json
│ ├── docs-manifest.json
│ ├── components/ # [Section 2.2] Per-component docs
│ │ ├── Button.md
│ │ ├── Input.md
│ │ ├── Box.md
│ │ ├── Flex.md
│ │ ├── Stack.md
│ │ ├── Text.md
│ │ ├── Heading.md
│ │ ├── Modal.md
│ │ └── ... (one per component)
│ ├── tokens/
│ ├── patterns/
│ └── type-declarations/
│
├── .lens-agent-context.json # [Section 5.1] Generated context
├── .lens-agent-context.md # [Section 5.1] Generated context (markdown)
├── .lens-violation-log.json # [Section 9.1] Violation tracking
├── .lensrc.json # Custom Lens project config
│
├── scripts/
│ ├── lens-knowledge-extractor.sh # [Section 2.1] KB builder
│ ├── prepare-agent-context.ts # [Section 5.1] Context generator
│ ├── start-dev-session.sh # [Section 8.1] Session startup
│ ├── track-violations.ts # [Section 9.1] Violation tracker
│ └── update-lens-kb.sh # [Section 9.3] KB updater
│
├── eslint-plugin-lens-compliance/ # [Section 7.2] Custom ESLint plugin
│ └── index.js
│
├── .eslintrc.js # [Section 7.1] ESLint config
│
└── src/
└── utils/
└── lens-registry.ts # [Section 4.1] Component registry

# Implementation Roadmap

PHASE 1: FOUNDATION (Day 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Run lens-knowledge-extractor.sh
☐ Manually populate component docs from lens.loom.dev
☐ Create CLAUDE.md / AGENTS.md
☐ Create .cursor/rules/\*.mdc files
☐ Create .windsurfrules
☐ Create .github/copilot-instructions.md
☐ Run prepare-agent-context.ts

PHASE 2: ENFORCEMENT (Day 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Set up .eslintrc.js with restricted imports
☐ Create eslint-plugin-lens-compliance
☐ Set up pre-commit hooks
☐ Set up CI pipeline
☐ Create lens-registry.ts

PHASE 3: ACTIVATE (Day 3)
━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Run start-dev-session.sh
☐ Begin coding with agents using rules
☐ Start violation tracking
☐ Test correction prompts

PHASE 4: ITERATE (Weekly)
━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Analyze violation log
☐ Refine rules based on common patterns
☐ Update KB when Lens package updates
☐ Expand component documentation for trouble areas

This strategy creates a multi-layered defense system — agent instructions tell them what to do, ESLint catches what slips through, pre-commit hooks block violations from entering the repo, and CI ensures nothing reaches production that doesn't comply with Lens. The feedback loop continuously strengthens the weakest points.
```
