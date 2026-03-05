const fs = require('fs')
const path = require('path')

// 1. Define paths based on your directory structure
const ROOT_DIR = __dirname
const INPUT_FILE = path.join(ROOT_DIR, 'styles-full.md')
const OUTPUT_DIR = path.join(ROOT_DIR, '.lens-knowledge-base', 'tokens')

// 2. Define the index map content for the AI agents
const INDEX_CONTENT = `# Design System Tokens Index

**Agent Instructions:** Do not guess token values. Use this index to find the exact file containing the design system tokens you need.

* **Need colors?** Read \`colors.md\` for Light/Dark Theme, Greyscale, Base, and Semantic colors.
* **Need text styling?** Read \`typography.md\` for Atlassian Sans configurations, sizes, and weights.
* **Need spacing/gaps?** Read \`spacing.md\` for the 8px base unit scale (xsmall to xxlarge).
* **Need borders, corners, or depth?** Read \`shape-and-elevation.md\` for radius and shadow tokens.
* **Need to apply styles?** Read \`css-utilities.md\` for all pre-defined Lens CSS utility classes (e.g., \`c:red\`, \`p:medium\`, \`flex\`).
* **Need raw CSS variables?** Read \`css-variables.md\`.
* **Need responsive behavior?** Read \`responsive-layout.md\` for breakpoint prefixes, Split/Arrange layouts, and hooks.
`

async function splitTokens() {
  try {
    // 3. Ensure input file exists
    if (!fs.existsSync(INPUT_FILE)) {
      throw new Error(
        `Could not find ${INPUT_FILE}. Please ensure it is in the root directory.`,
      )
    }

    // 4. Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
      console.log(`Created directory: ${OUTPUT_DIR}`)
    }

    // 5. Read the massive markdown file
    const content = fs.readFileSync(INPUT_FILE, 'utf-8')
    const lines = content.split('\n')

    // 6. Initialize storage for our new smaller files
    const fileContents = {
      'colors.md': '',
      'typography.md': '',
      'spacing.md': '',
      'shape-and-elevation.md': '',
      'css-utilities.md': '',
      'css-variables.md': '',
      'responsive-layout.md': '',
    }

    let currentTargetFile = null

    // 7. Parse line-by-line (State Machine pattern for high accuracy)
    for (const line of lines) {
      const trimmed = line.trim()

      // Switch target file based on headers found in your original document
      if (trimmed === '# Styles') {
        currentTargetFile = 'colors.md'
      } else if (trimmed === '# Typography') {
        currentTargetFile = 'typography.md'
      } else if (trimmed === '# Spacing') {
        currentTargetFile = 'spacing.md'
      } else if (trimmed === '# Shadows') {
        currentTargetFile = 'shape-and-elevation.md'
      } else if (trimmed === '# Lens CSS Utility Classes Documentation') {
        currentTargetFile = 'css-utilities.md'
      } else if (trimmed === '# CSS Variables') {
        currentTargetFile = 'css-variables.md'
      } else if (trimmed === '# Responsive') {
        currentTargetFile = 'responsive-layout.md'
      }

      // If we have hit our first recognized header, start appending lines
      if (currentTargetFile) {
        fileContents[currentTargetFile] += line + '\n'
      }
    }

    // 8. Write the static Index Map
    fs.writeFileSync(
      path.join(OUTPUT_DIR, '_tokens-index.md'),
      INDEX_CONTENT.trim() + '\n',
    )
    console.log('✅ Created: _tokens-index.md')

    // 9. Write the parsed chunks to disk
    for (const [filename, data] of Object.entries(fileContents)) {
      if (data.trim().length > 0) {
        fs.writeFileSync(path.join(OUTPUT_DIR, filename), data.trim() + '\n')
        console.log(`✅ Created: ${filename}`)
      } else {
        console.warn(`⚠️ Warning: No content extracted for ${filename}`)
      }
    }

    console.log(
      '\n🎉 Successfully split styles-full.md into manageable context chunks!',
    )
  } catch (error) {
    console.error('❌ Error during splitting process:', error.message)
  }
}

splitTokens()
