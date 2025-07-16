#!/usr/bin/env node

/**
 * Auto-generate component registry from filesystem
 * This keeps the gallery in sync with actual components
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = join(__dirname, '../packages/ui/src/components');
const REGISTRY_PATH = join(__dirname, '../apps/gallery/src/lib/component-registry.ts');

// Auto-detect components
const componentFiles = readdirSync(COMPONENTS_DIR)
  .filter(file => file.endsWith('.tsx'))
  .sort();

console.log(`🔍 Found ${componentFiles.length} components:`, componentFiles.map(f => f.replace('.tsx', '')).join(', '));

// Simple categorization based on component name
function categorizeComponent(name) {
  if (['button', 'input', 'checkbox', 'radio-group', 'select', 'textarea', 'switch', 'label'].includes(name)) {
    return 'form';
  }
  if (['card', 'badge', 'alert', 'table', 'tooltip'].includes(name)) {
    return 'display';
  }
  if (['dropdown-menu', 'popover'].includes(name)) {
    return 'navigation';
  }
  if (['dialog'].includes(name)) {
    return 'feedback';
  }
  return 'layout';
}

// Generate component entries
const components = componentFiles.map(file => {
  const componentName = file.replace('.tsx', '');
  const capitalizedName = componentName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  return {
    id: componentName,
    name: capitalizedName,
    description: `${capitalizedName} component`,
    category: categorizeComponent(componentName),
    complexity: 'simple',
    status: 'stable',
    tags: [componentName],
    preview: componentName,
    codeExample: `import { ${capitalizedName} } from '@lightmind/ui';\n\n<${capitalizedName} />`
  };
});

// Generate the registry file
const registryContent = `/**
 * Component Registry - Auto-generated from filesystem
 * This file is automatically updated when components are added/removed
 */

export interface ComponentInfo {
  id: string
  name: string
  description: string
  category: CategoryId
  complexity: 'simple' | 'medium' | 'complex'
  status: 'alpha' | 'beta' | 'stable'
  tags: string[]
  preview: string
  codeExample: string
  apiDocumentation?: {
    props?: Array<{
      name: string
      type: string
      description: string
      required?: boolean
      default?: string
    }>
    methods?: Array<{
      name: string
      signature: string
      description: string
    }>
  }
  usageGuidelines?: {
    dos?: string[]
    donts?: string[]
    accessibility?: string[]
  }
  relatedComponents?: string[]
  variants?: Array<{
    name: string
    description: string
    preview: string
    codeExample: string
  }>
}

export type CategoryId = 'form' | 'display' | 'navigation' | 'feedback' | 'layout'

export interface CategoryInfo {
  id: CategoryId
  name: string
  description: string
  icon: string
  componentCount: number
  color: string
}

// Auto-generated components
export const components: ComponentInfo[] = ${JSON.stringify(components, null, 2)};

// Categories with dynamic counts
export const categories: CategoryInfo[] = [
  {
    id: 'form',
    name: 'Form',
    description: 'Interactive form components',
    icon: 'form',
    componentCount: ${components.filter(c => c.category === 'form').length},
    color: 'bg-blue-500'
  },
  {
    id: 'display',
    name: 'Display',
    description: 'Content display components',
    icon: 'display',
    componentCount: ${components.filter(c => c.category === 'display').length},
    color: 'bg-green-500'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and menu components',
    icon: 'navigation',
    componentCount: ${components.filter(c => c.category === 'navigation').length},
    color: 'bg-purple-500'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback components',
    icon: 'feedback',
    componentCount: ${components.filter(c => c.category === 'feedback').length},
    color: 'bg-orange-500'
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structure components',
    icon: 'layout',
    componentCount: ${components.filter(c => c.category === 'layout').length},
    color: 'bg-pink-500'
  }
];

// Helper functions
export function getComponentById(id: string): ComponentInfo | undefined {
  return components.find(component => component.id === id);
}

export function getComponentsByCategory(categoryId: CategoryId): ComponentInfo[] {
  return components.filter(component => component.category === categoryId);
}

export function getComponentsByComplexity(complexity: 'simple' | 'medium' | 'complex'): ComponentInfo[] {
  return components.filter(component => component.complexity === complexity);
}

export function getCategoryById(categoryId: CategoryId): CategoryInfo | undefined {
  return categories.find(category => category.id === categoryId);
}

export function getRelatedComponents(componentId: string): ComponentInfo[] {
  const component = getComponentById(componentId);
  if (!component) return [];
  
  // Get components from the same category, excluding the current component
  return components
    .filter(c => c.category === component.category && c.id !== componentId)
    .slice(0, 3); // Return max 3 related components
}

export function getAllCategories(): CategoryInfo[] {
  return categories;
}

export function getComponentStats() {
  return {
    totalComponents: components.length,
    statusStats: {
      alpha: components.filter(c => c.status === 'alpha').length,
      beta: components.filter(c => c.status === 'beta').length,
      stable: components.filter(c => c.status === 'stable').length
    },
    complexityStats: {
      simple: components.filter(c => c.complexity === 'simple').length,
      medium: components.filter(c => c.complexity === 'medium').length,
      complex: components.filter(c => c.complexity === 'complex').length
    }
  };
}

export function searchComponents(query: string): ComponentInfo[] {
  const lowerQuery = query.toLowerCase();
  return components.filter(component => 
    component.name.toLowerCase().includes(lowerQuery) ||
    component.description.toLowerCase().includes(lowerQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
`;

writeFileSync(REGISTRY_PATH, registryContent);

console.log('✅ Component registry auto-generated!');
console.log(`📁 Updated: ${REGISTRY_PATH}`);
console.log(`📊 Stats: ${components.length} components across 5 categories`);