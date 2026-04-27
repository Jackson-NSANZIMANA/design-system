#!/usr/bin/env node
/**
 * Just-in-Time Context Retrieval for Lens Design System
 * 
 * Analyzes a task description and returns only the relevant
 * component documentation, reducing context window usage
 * and improving AI focus.
 * 
 * Usage: node scripts/jit-context.js "build a login form with email and password"
 */

const fs = require('fs');
const path = require('path');

const task = process.argv.slice(2).join(' ').toLowerCase();

if (!task) {
  console.error('Usage: node scripts/jit-context.js "task description"');
  process.exit(1);
}

// Keyword → Component mapping
// When AI needs to build X, it needs to know about Y components
const COMPONENT_MAP = {
  // Layout keywords
  'layout': ['Container', 'Arrange', 'Split', 'SplitSection', 'Align', 'Distribute'],
  'card': ['Container'],
  'grid': ['Arrange'],
  'flex': ['Split', 'SplitSection'],
  'center': ['Align'],
  'space': ['Spacer'],
  'sidebar': ['Split', 'SplitSection', 'Container'],
  'page': ['Container', 'Split', 'Arrange', 'BaseStyles'],

  // Form keywords
  'form': ['FormField', 'TextInput', 'Button', 'Spacer'],
  'input': ['TextInput', 'FormField'],
  'email': ['TextInput', 'FormField'],
  'password': ['TextInput', 'FormField'],
  'search': ['SearchBar', 'TextInput'],
  'select': ['Select', 'FormField'],
  'dropdown': ['Dropdown', 'Select'],
  'checkbox': ['Checkbox', 'FormField'],
  'radio': ['Radio', 'FormField'],
  'switch': ['Switch', 'FormField'],
  'textarea': ['Textarea', 'FormField'],
  'typeahead': ['Typeahead'],

  // Action keywords
  'button': ['Button'],
  'link': ['Link', 'TextButton'],
  'icon button': ['IconButton'],
  'submit': ['Button'],
  'cancel': ['Button', 'TextButton'],

  // Navigation keywords
  'tab': ['Tabs', 'Tab'],
  'menu': ['Menu', 'MenuItem'],
  'navigation': ['Tabs', 'Menu', 'Link'],

  // Feedback keywords
  'error': ['FormField', 'ErrorContainer', 'NotificationBar'],
  'success': ['Toast', 'NotificationBar'],
  'loading': ['Loader', 'EllipsesLoader', 'LogoLoader'],
  'skeleton': ['SkeletonContainer', 'SkeletonText'],
  'notification': ['NotificationBar', 'Toast'],
  'toast': ['Toast'],
  'alert': ['NotificationBar'],

  // Display keywords
  'text': ['Text'],
  'heading': ['Text'],
  'title': ['Text'],
  'avatar': ['Avatar'],
  'icon': ['Icon'],
  'image': ['Media'],
  'logo': ['Logo'],
  'badge': ['Pill', 'Indicator'],
  'tag': ['Pill'],
  'pill': ['Pill'],
  'indicator': ['Indicator'],
  'tooltip': ['Tooltip', 'TooltipBox'],

  // Modal keywords
  'modal': ['Modal', 'ModalCard', 'Backdrop'],
  'dialog': ['Modal', 'ModalCard'],
  'overlay': ['Backdrop', 'Modal'],
  'popover': ['Popover'],

  // Dashboard keywords
  'dashboard': ['Container', 'Arrange', 'Split', 'Text', 'Icon', 'Avatar', 'Pill'],
  'stats': ['Container', 'Arrange', 'Text', 'Icon'],
  'chart': ['Container', 'Arrange'],
  'list': ['List', 'ListRow'],
  'table': ['List', 'ListRow'],

  // Settings keywords
  'settings': ['Container', 'FormField', 'Switch', 'Select', 'Button', 'Text'],
  'profile': ['Avatar', 'FormField', 'TextInput', 'Button'],
  'plan': ['Container', 'Button', 'Text', 'Pill'],
  'upgrade': ['Container', 'Button'],

  // Login/Auth keywords
  'login': ['Container', 'FormField', 'TextInput', 'Button', 'Link', 'Logo', 'Text'],
  'signup': ['Container', 'FormField', 'TextInput', 'Button', 'Link', 'Logo', 'Text'],
  'auth': ['Container', 'FormField', 'TextInput', 'Button', 'Link', 'Logo'],
  'register': ['Container', 'FormField', 'TextInput', 'Button', 'Link'],
  'forgot': ['Container', 'FormField', 'TextInput', 'Button', 'Link', 'Text'],
};

// Find relevant components
const relevantComponents = new Set();

// Always include layout foundations
['Container', 'Arrange', 'Text', 'Button'].forEach(c => relevantComponents.add(c));

// Match task keywords to components
Object.entries(COMPONENT_MAP).forEach(([keyword, components]) => {
  if (task.includes(keyword)) {
    components.forEach(c => relevantComponents.add(c));
  }
});

const KB_PATH = '.lens-knowledge-base';
const COMPONENTS_PATH = path.join(KB_PATH, 'components');

console.log('# Just-in-Time Context: ' + process.argv.slice(2).join(' '));
console.log('# Generated: ' + new Date().toISOString());
console.log('# Relevant components detected: ' + Array.from(relevantComponents).join(', '));
console.log('');

// Output design philosophy summary
const philosophyPath = path.join(KB_PATH, 'DESIGN-PHILOSOPHY.md');
if (fs.existsSync(philosophyPath)) {
  console.log('## Design Philosophy');
  console.log(fs.readFileSync(philosophyPath, 'utf8').split('\n').slice(0, 40).join('\n'));
  console.log('');
}

// Output relevant component docs
console.log('## Component Documentation');
console.log('');

Array.from(relevantComponents).sort().forEach(componentName => {
  const docPath = path.join(COMPONENTS_PATH, componentName + '.md');
  if (fs.existsSync(docPath)) {
    const content = fs.readFileSync(docPath, 'utf8');
    // Extract just the essential parts: import, basic usage, props table
    // Skip long prose sections to keep context tight
    const lines = content.split('\n');
    let inProps = false;
    let inBasicUsage = false;
    let output = [];
    let lineCount = 0;

    for (const line of lines) {
      // Always include headings
      if (line.startsWith('#')) {
        output.push(line);
        lineCount++;
        continue;
      }
      // Include import section
      if (line.includes('import') && line.includes('@loomhq/lens')) {
        output.push(line);
        lineCount++;
        continue;
      }
      // Include code blocks (usage examples)
      if (line.startsWith('```') || (lineCount > 0 && output[output.length-1]?.startsWith('```'))) {
        output.push(line);
        lineCount++;
        continue;
      }
      // Include props tables
      if (line.startsWith('|')) {
        output.push(line);
        lineCount++;
        continue;
      }
      // Stop after 80 lines per component to keep context tight
      if (lineCount > 80) break;

      output.push(line);
      lineCount++;
    }

    console.log(output.join('\n'));
    console.log('');
  } else {
    console.log('## ' + componentName);
    console.log('_Documentation not yet available — check COMPONENT-INDEX.md_');
    console.log('');
  }
});

// Output hard rules reminder
console.log('## Hard Rules (ESLint enforced)');
console.log('');
console.log('FORBIDDEN — ESLint will block commit:');
console.log('- <button> → use <Button variant="primary|neutral|danger|...">');
console.log('- <input> → use <TextInput>');
console.log('- <a href> → use <Link href>');
console.log('- <select> → use <Select>');
console.log('- <textarea> → use <Textarea>');
console.log('- style={{}} → use Lens props');
console.log('- className="custom-class" → forbidden');
console.log('');
console.log('REQUIRED:');
console.log("- import { ComponentName } from '@loomhq/lens'");
console.log('- All layout via Container, Arrange, Split, Align, Spacer');
console.log('- All typography via <Text> component');
