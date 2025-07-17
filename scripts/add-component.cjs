#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Helper functions
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  step: (msg) => console.log(`${colors.cyan}→${colors.reset} ${msg}`)
};

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`
${colors.bright}Usage:${colors.reset} node scripts/add-component.js <component-name> [options]

${colors.bright}Options:${colors.reset}
  --category <category>  Component category (default: general)
  --description <desc>   Component description
  --tags <tags>         Comma-separated tags
  --template <type>     Template type: basic, radix, form (default: basic)
  --radix <primitive>   Radix primitive name (for radix template)
  --no-demo            Skip creating demo file

${colors.bright}Examples:${colors.reset}
  node scripts/add-component.js accordion
  node scripts/add-component.js progress-bar --category feedback --tags "progress,loading,status"
  node scripts/add-component.js slider --description "Interactive slider component"
  node scripts/add-component.js popover --template radix --radix popover
  node scripts/add-component.js search-input --template form --category form
`);
  process.exit(1);
}

// Parse component name and options
const componentNameRaw = args[0];
const options = {
  category: 'general',
  description: '',
  tags: '',
  template: 'basic',
  radixPrimitive: '',
  createDemo: true
};

// Parse additional options
for (let i = 1; i < args.length; i++) {
  switch (args[i]) {
    case '--category':
      options.category = args[++i] || 'general';
      break;
    case '--description':
      options.description = args[++i] || '';
      break;
    case '--tags':
      options.tags = args[++i] || '';
      break;
    case '--template':
      options.template = args[++i] || 'basic';
      break;
    case '--radix':
      options.radixPrimitive = args[++i] || '';
      break;
    case '--no-demo':
      options.createDemo = false;
      break;
  }
}

// Convert component name to different formats
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const toCamelCase = (str) => {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};

const componentName = toCamelCase(componentNameRaw);
const ComponentName = toPascalCase(componentNameRaw);
const kebabCase = componentNameRaw.toLowerCase();

// Paths
const rootDir = path.join(__dirname, '..');
const componentsDir = path.join(rootDir, 'packages/ui/src/components');
const demosDir = path.join(rootDir, 'apps/gallery/src/components/demos');
const componentPath = path.join(componentsDir, `${kebabCase}.tsx`);
const demoPath = path.join(demosDir, `${kebabCase}.demo.tsx`);
const indexPath = path.join(rootDir, 'packages/ui/src/index.ts');
const previewRegistryPath = path.join(rootDir, 'apps/gallery/src/components/preview-registry.tsx');

// Template paths
const templateMap = {
  basic: 'component.template.tsx',
  radix: 'component-with-radix.template.tsx',
  form: 'form-component.template.tsx'
};

const componentTemplatePath = path.join(__dirname, 'templates', templateMap[options.template] || templateMap.basic);
const demoTemplatePath = path.join(__dirname, 'templates/demo.template.tsx');

// Validate template
if (!fs.existsSync(componentTemplatePath)) {
  log.error(`Template "${options.template}" not found. Available templates: basic, radix, form`);
  process.exit(1);
}

// Validate radix primitive if using radix template
if (options.template === 'radix' && !options.radixPrimitive) {
  log.error('Radix template requires --radix <primitive> option');
  process.exit(1);
}

// Check if component already exists
if (fs.existsSync(componentPath)) {
  log.error(`Component "${kebabCase}" already exists at ${componentPath}`);
  process.exit(1);
}

log.info(`Creating new component: ${colors.bright}${ComponentName}${colors.reset} (${options.template} template)`);

// Read templates
const componentTemplate = fs.readFileSync(componentTemplatePath, 'utf8');
const demoTemplate = fs.readFileSync(demoTemplatePath, 'utf8');

// Replace placeholders in component template
let componentContent = componentTemplate
  .replace(/\{\{ComponentName\}\}/g, ComponentName)
  .replace(/\{\{componentName\}\}/g, componentName)
  .replace(/\{\{DESCRIPTION\}\}/g, options.description || `A ${ComponentName} component`)
  .replace(/\{\{CATEGORY\}\}/g, options.category)
  .replace(/\{\{TAGS\}\}/g, options.tags || kebabCase)
  .replace(/\{\{BASE_CLASSES\}\}/g, 'inline-flex items-center justify-center rounded-md')
  .replace(/\{\{DEFAULT_VARIANT_CLASSES\}\}/g, 'bg-primary text-primary-foreground hover:bg-primary/90')
  .replace(/\{\{SECONDARY_VARIANT_CLASSES\}\}/g, 'bg-secondary text-secondary-foreground hover:bg-secondary/80')
  .replace(/\{\{DEFAULT_SIZE_CLASSES\}\}/g, 'h-10 px-4 py-2')
  .replace(/\{\{SM_SIZE_CLASSES\}\}/g, 'h-8 px-3 py-1 text-sm')
  .replace(/\{\{LG_SIZE_CLASSES\}\}/g, 'h-12 px-6 py-3 text-lg');

// Additional replacements for radix template
if (options.template === 'radix') {
  componentContent = componentContent
    .replace(/\{\{RADIX_COMPONENT\}\}/g, options.radixPrimitive);
}

// Replace placeholders in demo template
const demoContent = demoTemplate
  .replace(/\{\{ComponentName\}\}/g, ComponentName)
  .replace(/\{\{componentName\}\}/g, componentName);

// Create component file
log.step('Creating component file...');
fs.writeFileSync(componentPath, componentContent);
log.success(`Created ${componentPath}`);

// Create demo file if requested
if (options.createDemo) {
  log.step('Creating demo file...');
  fs.writeFileSync(demoPath, demoContent);
  log.success(`Created ${demoPath}`);
}

// Update index.ts exports
log.step('Updating package exports...');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Determine exports based on template type
let componentExport;
let typeExport;

if (options.template === 'radix') {
  // Radix components typically export multiple parts
  componentExport = `export { ${ComponentName}, ${ComponentName}Trigger, ${ComponentName}Content, ${componentName}ContentVariants } from "./components/${kebabCase}"`;
  typeExport = ''; // Radix components usually don't have a single Props type
} else {
  componentExport = `export { ${ComponentName}, ${componentName}Variants } from "./components/${kebabCase}"`;
  typeExport = `export type { ${ComponentName}Props } from "./components/${kebabCase}"`;
}

// Find the last component export and type export
const lines = indexContent.split('\n');
let lastComponentExportIndex = -1;
let lastTypeExportIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('export {') && lines[i].includes('from "./components/')) {
    lastComponentExportIndex = i;
  }
  if (lines[i].startsWith('export type {') && lines[i].includes('from "./components/')) {
    lastTypeExportIndex = i;
  }
}

// Insert new exports
if (lastComponentExportIndex !== -1) {
  lines.splice(lastComponentExportIndex + 1, 0, componentExport);
}

if (typeExport && lastTypeExportIndex !== -1) {
  // Adjust index after previous insertion
  const adjustedIndex = lastTypeExportIndex + (lastComponentExportIndex < lastTypeExportIndex ? 1 : 0);
  lines.splice(adjustedIndex + 1, 0, typeExport);
}

fs.writeFileSync(indexPath, lines.join('\n'));
log.success('Updated package exports');

// Update preview registry if demo was created
if (options.createDemo) {
  log.step('Updating preview registry...');
  const registryContent = fs.readFileSync(previewRegistryPath, 'utf8');
  
  // Add import
  const importStatement = `import { ${ComponentName}Demo } from './demos/${kebabCase}.demo'`;
  const importLines = registryContent.split('\n');
  
  // Find the last demo import
  let lastDemoImportIndex = -1;
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].includes("from './demos/") && importLines[i].includes('.demo\'')) {
      lastDemoImportIndex = i;
    }
  }
  
  if (lastDemoImportIndex !== -1) {
    importLines.splice(lastDemoImportIndex + 1, 0, importStatement);
  }
  
  // Add to registry object
  const updatedContent = importLines.join('\n');
  const registryPattern = /const previewComponents = \{([^}]+)\}/s;
  const match = updatedContent.match(registryPattern);
  
  if (match) {
    const entries = match[1].split(',').map(e => e.trim()).filter(e => e);
    entries.push(`'${kebabCase}': ${ComponentName}Demo`);
    
    // Sort entries to maintain consistency
    const demoEntries = entries.filter(e => e.includes('Demo'));
    const otherEntries = entries.filter(e => !e.includes('Demo'));
    
    const sortedEntries = [...demoEntries.sort(), ...otherEntries];
    
    const newRegistry = `const previewComponents = {\n  ${sortedEntries.join(',\n  ')}\n}`;
    const finalContent = updatedContent.replace(registryPattern, newRegistry);
    
    fs.writeFileSync(previewRegistryPath, finalContent);
    log.success('Updated preview registry');
  }
}

// Create/update registry files
log.step('Updating component registry...');

// Copy component to registry/ui
const registryComponentPath = path.join(rootDir, 'registry/ui', `${kebabCase}.tsx`);
fs.copyFileSync(componentPath, registryComponentPath);

// Copy demo to registry/examples if created
if (options.createDemo) {
  const registryDemoPath = path.join(rootDir, 'registry/examples', `${kebabCase}.demo.tsx`);
  fs.copyFileSync(demoPath, registryDemoPath);
}

log.success('Updated component registry');

// Final summary
console.log(`
${colors.green}${colors.bright}✨ Component created successfully!${colors.reset}

${colors.bright}Component:${colors.reset} ${ComponentName}
${colors.bright}Location:${colors.reset} ${componentPath}
${options.createDemo ? `${colors.bright}Demo:${colors.reset} ${demoPath}` : ''}

${colors.bright}Next steps:${colors.reset}
1. Customize the component implementation in ${colors.cyan}${componentPath}${colors.reset}
2. ${options.createDemo ? `Update the demo with real examples in ${colors.cyan}${demoPath}${colors.reset}` : 'Consider creating a demo file'}
3. Run ${colors.cyan}npm run build${colors.reset} to verify everything compiles
4. Visit ${colors.cyan}http://localhost:3000/component/${kebabCase}${colors.reset} to see your component

${colors.bright}Tips:${colors.reset}
- The component follows shadcn/ui patterns with CVA variants
- Update the base classes and variants to match your design needs
- Add proper TypeScript types for any custom props${options.template === 'radix' ? `
- Install the Radix primitive: ${colors.cyan}cd packages/ui && npm install @radix-ui/react-${options.radixPrimitive}${colors.reset}` : ''}${options.template === 'form' ? `
- This component is set up for form input handling
- Add validation states and error handling as needed` : ''}
`);