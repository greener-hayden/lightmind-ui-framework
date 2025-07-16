/**
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
export const components: ComponentInfo[] = [
  {
    "id": "access-matrix",
    "name": "AccessMatrix",
    "description": "AccessMatrix component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "access-matrix"
    ],
    "preview": "access-matrix",
    "codeExample": "import { AccessMatrix } from '@lightmind/ui';\n\n<AccessMatrix />"
  },
  {
    "id": "alert",
    "name": "Alert",
    "description": "Alert component",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "alert"
    ],
    "preview": "alert",
    "codeExample": "import { Alert } from '@lightmind/ui';\n\n<Alert />"
  },
  {
    "id": "badge",
    "name": "Badge",
    "description": "Badge component",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "badge"
    ],
    "preview": "badge",
    "codeExample": "import { Badge } from '@lightmind/ui';\n\n<Badge />"
  },
  {
    "id": "button",
    "name": "Button",
    "description": "Button component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "button"
    ],
    "preview": "button",
    "codeExample": "import { Button } from '@lightmind/ui';\n\n<Button />"
  },
  {
    "id": "card",
    "name": "Card",
    "description": "Card component",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "card"
    ],
    "preview": "card",
    "codeExample": "import { Card } from '@lightmind/ui';\n\n<Card />"
  },
  {
    "id": "checkbox",
    "name": "Checkbox",
    "description": "Checkbox component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "checkbox"
    ],
    "preview": "checkbox",
    "codeExample": "import { Checkbox } from '@lightmind/ui';\n\n<Checkbox />"
  },
  {
    "id": "dialog",
    "name": "Dialog",
    "description": "Dialog component",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "dialog"
    ],
    "preview": "dialog",
    "codeExample": "import { Dialog } from '@lightmind/ui';\n\n<Dialog />"
  },
  {
    "id": "dropdown-menu",
    "name": "DropdownMenu",
    "description": "DropdownMenu component",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "dropdown-menu"
    ],
    "preview": "dropdown-menu",
    "codeExample": "import { DropdownMenu } from '@lightmind/ui';\n\n<DropdownMenu />"
  },
  {
    "id": "input",
    "name": "Input",
    "description": "Input component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "input"
    ],
    "preview": "input",
    "codeExample": "import { Input } from '@lightmind/ui';\n\n<Input />"
  },
  {
    "id": "label",
    "name": "Label",
    "description": "Label component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "label"
    ],
    "preview": "label",
    "codeExample": "import { Label } from '@lightmind/ui';\n\n<Label />"
  },
  {
    "id": "popover",
    "name": "Popover",
    "description": "Popover component",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "popover"
    ],
    "preview": "popover",
    "codeExample": "import { Popover } from '@lightmind/ui';\n\n<Popover />"
  },
  {
    "id": "radio-group",
    "name": "RadioGroup",
    "description": "RadioGroup component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "radio-group"
    ],
    "preview": "radio-group",
    "codeExample": "import { RadioGroup } from '@lightmind/ui';\n\n<RadioGroup />"
  },
  {
    "id": "select",
    "name": "Select",
    "description": "Select component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "select"
    ],
    "preview": "select",
    "codeExample": "import { Select } from '@lightmind/ui';\n\n<Select />"
  },
  {
    "id": "stat-card",
    "name": "StatCard",
    "description": "StatCard component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "stat-card"
    ],
    "preview": "stat-card",
    "codeExample": "import { StatCard } from '@lightmind/ui';\n\n<StatCard />"
  },
  {
    "id": "switch",
    "name": "Switch",
    "description": "Switch component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "switch"
    ],
    "preview": "switch",
    "codeExample": "import { Switch } from '@lightmind/ui';\n\n<Switch />"
  },
  {
    "id": "table",
    "name": "Table",
    "description": "Table component",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "table"
    ],
    "preview": "table",
    "codeExample": "import { Table } from '@lightmind/ui';\n\n<Table />"
  },
  {
    "id": "textarea",
    "name": "Textarea",
    "description": "Textarea component",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "textarea"
    ],
    "preview": "textarea",
    "codeExample": "import { Textarea } from '@lightmind/ui';\n\n<Textarea />"
  },
  {
    "id": "tooltip",
    "name": "Tooltip",
    "description": "Tooltip component",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "tooltip"
    ],
    "preview": "tooltip",
    "codeExample": "import { Tooltip } from '@lightmind/ui';\n\n<Tooltip />"
  }
];

// Categories with dynamic counts
export const categories: CategoryInfo[] = [
  {
    id: 'form',
    name: 'Form',
    description: 'Interactive form components',
    icon: 'form',
    componentCount: 8,
    color: 'bg-blue-500'
  },
  {
    id: 'display',
    name: 'Display',
    description: 'Content display components',
    icon: 'display',
    componentCount: 5,
    color: 'bg-green-500'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and menu components',
    icon: 'navigation',
    componentCount: 2,
    color: 'bg-purple-500'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback components',
    icon: 'feedback',
    componentCount: 1,
    color: 'bg-orange-500'
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structure components',
    icon: 'layout',
    componentCount: 2,
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
