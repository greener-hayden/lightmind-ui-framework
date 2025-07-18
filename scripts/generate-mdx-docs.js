#!/usr/bin/env node

/**
 * Generate MDX documentation files for components that don't have them
 */

import { readdir, readFile, writeFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = join(__dirname, '../packages/ui/src/components');
const MDX_DIR = join(__dirname, '../apps/gallery/src/docs/components');
const DEMOS_DIR = join(__dirname, '../apps/gallery/src/components/demos');

// Enhanced categorization based on component purpose
function categorizeComponent(name) {
  const categories = {
    form: ['button', 'input', 'checkbox', 'radio-group', 'select', 'textarea', 'switch', 'label', 'form', 'input-otp'],
    display: ['card', 'badge', 'alert', 'tooltip', 'stat-card', 'avatar', 'skeleton'],
    navigation: ['dropdown-menu', 'popover', 'navigation-menu', 'menubar', 'breadcrumb', 'pagination', 'tabs'],
    feedback: ['dialog', 'toast', 'toaster', 'sonner', 'alert-dialog', 'hover-card'],
    layout: ['accordion', 'aspect-ratio', 'collapsible', 'separator', 'sidebar', 'sheet', 'drawer', 'scroll-area']
  };
  
  for (const [category, components] of Object.entries(categories)) {
    if (components.includes(name)) return category;
  }
  
  // Special cases
  if (name.includes('table') || name.includes('data-table')) return 'display';
  if (name.includes('command') || name.includes('combobox')) return 'form';
  if (name.includes('context-menu')) return 'navigation';
  
  return 'layout';
}

// Generate MDX template for a component
function generateMDXTemplate(componentName, componentTitle, category) {
  const hasDemo = checkDemoExists(componentName);
  const demoImport = hasDemo ? `import { ${componentTitle}Demo } from "@/components/demos/${componentName}.demo"` : '';
  const demoSection = hasDemo ? `<${componentTitle}Demo />` : `<PreviewComponent name="${componentName}" />`;
  
  return `---
title: "${componentTitle}"
description: "A versatile ${componentTitle.toLowerCase()} component for React applications"
category: "${category}"
status: "stable"
complexity: "simple"
tags: ["${componentName}", "${category}", "ui", "component"]
---

${demoImport}

# ${componentTitle} Component

A versatile ${componentTitle.toLowerCase()} component that provides essential functionality for modern web applications.

## Preview

<div className="space-y-6">
  ${demoSection}
</div>

## Installation

\`\`\`bash
npm install @lightmind/ui
\`\`\`

## Usage

### Basic Usage

\`\`\`tsx
import { ${componentTitle} } from '@lightmind/ui'

export function Example() {
  return <${componentTitle} />
}
\`\`\`

### Advanced Example

\`\`\`tsx
import { ${componentTitle} } from '@lightmind/ui'

export function AdvancedExample() {
  return (
    <${componentTitle}
      className="custom-class"
      // Add props here
    >
      Content goes here
    </${componentTitle}>
  )
}
\`\`\`

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`className\` | \`string\` | \`undefined\` | Additional CSS classes |
| \`children\` | \`React.ReactNode\` | \`undefined\` | Child elements |

## Usage Guidelines

### Do's ✅

- Use ${componentTitle} for its intended purpose
- Apply consistent styling across your application
- Consider accessibility when implementing
- Test across different screen sizes and devices

### Don'ts ❌

- Don't override essential styles that affect functionality
- Avoid nesting too many ${componentTitle} components
- Don't use for unintended purposes

### Best Practices

Always ensure that your ${componentTitle} implementation follows accessibility guidelines and provides a good user experience across all devices.

## Accessibility

- Follows WAI-ARIA guidelines
- Keyboard navigation support
- Screen reader friendly
- Proper focus management

## Related Components

- View other [${category}](/category/${category}) components
- Explore the complete [component library](/search)
`;
}

// Check if demo file exists
async function checkDemoExists(componentName) {
  const demoPath = join(DEMOS_DIR, `${componentName}.demo.tsx`);
  try {
    await access(demoPath);
    return true;
  } catch {
    return false;
  }
}

// Main function
async function generateMDXDocs() {
  try {
    // Get all component files
    const files = await readdir(COMPONENTS_DIR);
    const componentFiles = files.filter(f => f.endsWith('.tsx') && !f.includes('.test.')).sort();
    
    let created = 0;
    let skipped = 0;
    
    for (const file of componentFiles) {
      const componentName = file.replace('.tsx', '');
      const componentTitle = componentName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      const mdxPath = join(MDX_DIR, `${componentName}.mdx`);
      
      // Check if MDX already exists
      try {
        await access(mdxPath);
        console.log(`⏭️  Skipping ${componentName} - MDX already exists`);
        skipped++;
        continue;
      } catch {
        // File doesn't exist, create it
      }
      
      const category = categorizeComponent(componentName);
      const mdxContent = generateMDXTemplate(componentName, componentTitle, category);
      
      await writeFile(mdxPath, mdxContent);
      console.log(`✅ Created MDX for ${componentName} (${category})`);
      created++;
    }
    
    console.log(`\n📊 Summary: Created ${created} MDX files, skipped ${skipped} existing files`);
    
  } catch (error) {
    console.error('Error generating MDX docs:', error);
    process.exit(1);
  }
}

// Run the generator
generateMDXDocs();