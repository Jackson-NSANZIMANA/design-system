const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.join(__dirname, '.lens-knowledge-base', 'tokens')

const boundaryTests = [
  {
    file: 'colors.md',
    mustInclude: ['# Styles', 'primaryHover', '--lns-color-grey10'],
  },
  {
    file: 'typography.md',
    mustInclude: ['# Typography', 'Atlassian Sans', 'sizeMinMax', '600'],
  },
  {
    file: 'css-utilities.md',
    mustInclude: [
      '# Lens CSS Utility Classes Documentation',
      '.bg:primary',
      '.flex-column',
    ],
  },
  {
    file: 'responsive-layout.md',
    mustInclude: ['# Responsive', 'useMedia Hook', 'Media Component'],
  },
]

function runBoundaryTest() {
  console.log('🧪 Running Semantic Boundary Tests...')
  let passed = 0

  boundaryTests.forEach((test) => {
    const filePath = path.join(OUTPUT_DIR, test.file)

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing File: ${test.file}`)
      return
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const missing = test.mustInclude.filter((term) => !content.includes(term))

    if (missing.length === 0) {
      console.log(`✅ ${test.file}: All boundary markers present.`)
      passed++
    } else {
      console.error(`❌ ${test.file}: Missing markers: ${missing.join(', ')}`)
    }
  })

  console.log(`\n📊 Score: ${passed}/${boundaryTests.length} files verified.`)

  if (passed === boundaryTests.length) {
    console.log(
      '🚀 SYSTEM READY: Your AI Agent can now navigate the design system safely.',
    )
  }
}

runBoundaryTest()
