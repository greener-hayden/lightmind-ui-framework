#!/usr/bin/env node

/**
 * Simplified component watcher that auto-generates registry
 * Runs inside Docker container with hot reload
 */

import { watch } from 'fs';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = join(__dirname, '../packages/ui/src/components');
const DEMOS_DIR = join(__dirname, '../apps/gallery/src/components/demos');
const REGISTRY_PATH = join(__dirname, '../apps/gallery/src/lib/component-registry.ts');
const PREVIEW_REGISTRY_PATH = join(__dirname, '../apps/gallery/src/components/preview-registry.tsx');

// Simple categorization
function categorizeComponent(name) {
  const categories = {
    form: ['button', 'input', 'checkbox', 'radio-group', 'select', 'textarea', 'switch', 'label'],
    display: ['card', 'badge', 'alert', 'table', 'tooltip'],
    navigation: ['dropdown-menu', 'popover'],
    feedback: ['dialog'],
  };
  
  for (const [category, components] of Object.entries(categories)) {
    if (components.includes(name)) return category;
  }
  return 'layout';
}

// Generate component registry
async function generateComponentRegistry() {
  try {
    const files = await readdir(COMPONENTS_DIR);
    const componentFiles = files.filter(f => f.endsWith('.tsx') && !f.includes('.test.')).sort();
    
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
    
    const categoryStats = {
      form: components.filter(c => c.category === 'form').length,
      display: components.filter(c => c.category === 'display').length,
      navigation: components.filter(c => c.category === 'navigation').length,
      feedback: components.filter(c => c.category === 'feedback').length,
      layout: components.filter(c => c.category === 'layout').length,
    };
    
    const registryContent = `/**
 * Component Registry - Auto-generated
 * DO NOT EDIT MANUALLY
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
    componentCount: ${categoryStats.form},
    color: 'bg-blue-500'
  },
  {
    id: 'display',
    name: 'Display',
    description: 'Content display components',
    icon: 'display',
    componentCount: ${categoryStats.display},
    color: 'bg-green-500'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and menu components',
    icon: 'navigation',
    componentCount: ${categoryStats.navigation},
    color: 'bg-purple-500'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback components',
    icon: 'feedback',
    componentCount: ${categoryStats.feedback},
    color: 'bg-orange-500'
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structure components',
    icon: 'layout',
    componentCount: ${categoryStats.layout},
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
  
  return components
    .filter(c => c.category === component.category && c.id !== componentId)
    .slice(0, 3);
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
    
    await writeFile(REGISTRY_PATH, registryContent);
    console.log(`✅ Updated component registry with ${components.length} components`);
  } catch (error) {
    console.error('❌ Error generating registry:', error);
  }
}

// Auto-generate preview registry
async function generatePreviewRegistry() {
  try {
    // Get all demo files
    let demoFiles = [];
    try {
      const files = await readdir(DEMOS_DIR);
      demoFiles = files.filter(f => f.endsWith('.demo.tsx')).sort();
    } catch (e) {
      // Demos directory doesn't exist yet
      await writeFile(DEMOS_DIR, '', { recursive: true });
    }
    
    // Get all component files to check for existing demos
    const componentFiles = await readdir(COMPONENTS_DIR);
    const components = componentFiles
      .filter(f => f.endsWith('.tsx') && !f.includes('.test.'))
      .map(f => f.replace('.tsx', ''));
    
    // Generate imports
    const imports = [];
    const registryEntries = [];
    
    // Add demo imports
    for (const demoFile of demoFiles) {
      const componentName = demoFile.replace('.demo.tsx', '');
      const capitalizedName = componentName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      imports.push(`import { ${capitalizedName}Demo } from './demos/${componentName}.demo'`);
      registryEntries.push(`  '${componentName}': ${capitalizedName}Demo,`);
    }
    
    // Keep existing preview imports for now (we'll phase these out later)
    imports.push(`
// Legacy preview imports - will be phased out
import { ButtonPreview, ButtonIconPreview, ButtonLoadingPreview } from './previews/button-preview'
import { CardPreview } from './previews/card-preview'
import { InputPreview } from './previews/input-preview'
import { DialogPreview } from './previews/dialog-preview'
import { TooltipPreview } from './previews/tooltip-preview'
import { DropdownMenuPreview } from './previews/dropdown-menu-preview'
import { PopoverPreview } from './previews/popover-preview'
import { AlertPreview } from './previews/alert-preview'
import { LabelPreview } from './previews/label-preview'
import { CheckboxPreview, CheckboxVariantsPreview } from './previews/checkbox-preview'
import { RadioGroupPreview, RadioGroupVariantsPreview } from './previews/radio-group-preview'
import { SelectPreview, SelectVariantsPreview } from './previews/select-preview'
import { TextareaPreview, TextareaVariantsPreview } from './previews/textarea-preview'
import { SwitchPreview, SwitchVariantsPreview } from './previews/switch-preview'
import { 
  TablePreview, 
  TableVariantsPreview, 
  TableSizesPreview, 
  TableSortablePreview, 
  TableUsersPreview, 
  TableInvoicesPreview, 
  TableAnalyticsPreview, 
  TableResponsivePreview,
  TableSelectablePreview,
  TableFilterablePreview,
  TablePaginatedPreview
} from './previews/table-preview'`);
    
    const previewRegistryContent = `'use client'

${imports.join('\n')}

// Registry of all preview components
const previewComponents = {
${registryEntries.join('\n')}
  // Legacy previews
  ButtonPreview,
  ButtonIconPreview,
  ButtonLoadingPreview,
  CardPreview,
  InputPreview,
  DialogPreview,
  TooltipPreview,
  DropdownMenuPreview,
  PopoverPreview,
  AlertPreview,
  LabelPreview,
  CheckboxPreview,
  CheckboxVariantsPreview,
  RadioGroupPreview,
  RadioGroupVariantsPreview,
  SelectPreview,
  SelectVariantsPreview,
  TextareaPreview,
  TextareaVariantsPreview,
  SwitchPreview,
  SwitchVariantsPreview,
  TablePreview,
  TableVariantsPreview,
  TableSizesPreview,
  TableSortablePreview,
  TableUsersPreview,
  TableInvoicesPreview,
  TableAnalyticsPreview,
  TableResponsivePreview,
  TableSelectablePreview,
  TableFilterablePreview,
  TablePaginatedPreview,
} as const

interface PreviewComponentProps {
  name: string
  className?: string
}

export function PreviewComponent({ name, className }: PreviewComponentProps) {
  const Component = previewComponents[name as keyof typeof previewComponents]
  
  if (!Component) {
    return (
      <div className={\`flex items-center justify-center p-8 text-muted-foreground \${className || ''}\`}>
        <div className="text-center">
          <p className="text-sm">Preview not available</p>
          <p className="text-xs mt-1">Component: {name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Component />
    </div>
  )
}
`;
    
    await writeFile(PREVIEW_REGISTRY_PATH, previewRegistryContent);
    console.log(`✅ Updated preview registry`);
  } catch (error) {
    console.error('❌ Error generating preview registry:', error);
  }
}

// Initial generation
async function initialize() {
  console.log('🚀 Starting component watcher...');
  await generateComponentRegistry();
  await generatePreviewRegistry();
  
  // Watch for changes
  console.log('👀 Watching for component changes...');
  
  watch(COMPONENTS_DIR, { recursive: false }, async (eventType, filename) => {
    if (filename && filename.endsWith('.tsx')) {
      console.log(`📝 Detected ${eventType} in components/${filename}`);
      await generateComponentRegistry();
    }
  });
  
  // Create demos directory if it doesn't exist
  try {
    await readdir(DEMOS_DIR);
  } catch {
    const { mkdir } = await import('fs/promises');
    await mkdir(DEMOS_DIR, { recursive: true });
    console.log('📁 Created demos directory');
  }
  
  watch(DEMOS_DIR, { recursive: false }, async (eventType, filename) => {
    if (filename && filename.endsWith('.demo.tsx')) {
      console.log(`📝 Detected ${eventType} in demos/${filename}`);
      await generatePreviewRegistry();
    }
  });
}

// Start watching
initialize();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Stopping component watcher...');
  process.exit(0);
});