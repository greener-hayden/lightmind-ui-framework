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
  hasMDX?: boolean
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
    "id": "access-matrix-main",
    "name": "AccessMatrixMain",
    "description": "AccessMatrixMain component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "access-matrix-main"
    ],
    "preview": "access-matrix-main",
    "codeExample": "import { AccessMatrixMain } from '@lightmind/ui';\n\n<AccessMatrixMain />",
    "hasMDX": false
  },
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
    "codeExample": "import { AccessMatrix } from '@lightmind/ui';\n\n<AccessMatrix />",
    "hasMDX": false
  },
  {
    "id": "accordion",
    "name": "Accordion",
    "description": "A versatile accordion component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "accordion",
      "layout",
      "ui",
      "component"
    ],
    "preview": "accordion",
    "codeExample": "import { Accordion } from '@lightmind/ui';\n\n<Accordion />",
    "hasMDX": true
  },
  {
    "id": "alert-dialog",
    "name": "AlertDialog",
    "description": "A versatile alertdialog component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "alert-dialog",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "alert-dialog",
    "codeExample": "import { AlertDialog } from '@lightmind/ui';\n\n<AlertDialog />",
    "hasMDX": true
  },
  {
    "id": "alert",
    "name": "Alert",
    "description": "A versatile alert component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "alert",
      "display",
      "ui",
      "component"
    ],
    "preview": "alert",
    "codeExample": "import { Alert } from '@lightmind/ui';\n\n<Alert />",
    "hasMDX": true
  },
  {
    "id": "aspect-ratio",
    "name": "AspectRatio",
    "description": "A versatile aspectratio component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "aspect-ratio",
      "layout",
      "ui",
      "component"
    ],
    "preview": "aspect-ratio",
    "codeExample": "import { AspectRatio } from '@lightmind/ui';\n\n<AspectRatio />",
    "hasMDX": true
  },
  {
    "id": "avatar",
    "name": "Avatar",
    "description": "A versatile avatar component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "avatar",
      "display",
      "ui",
      "component"
    ],
    "preview": "avatar",
    "codeExample": "import { Avatar } from '@lightmind/ui';\n\n<Avatar />",
    "hasMDX": true
  },
  {
    "id": "badge",
    "name": "Badge",
    "description": "A versatile badge component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "badge",
      "display",
      "ui",
      "component"
    ],
    "preview": "badge",
    "codeExample": "import { Badge } from '@lightmind/ui';\n\n<Badge />",
    "hasMDX": true
  },
  {
    "id": "breadcrumb",
    "name": "Breadcrumb",
    "description": "A versatile breadcrumb component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "breadcrumb",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "breadcrumb",
    "codeExample": "import { Breadcrumb } from '@lightmind/ui';\n\n<Breadcrumb />",
    "hasMDX": true
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
    "codeExample": "import { Button } from '@lightmind/ui';\n\n<Button />",
    "hasMDX": false
  },
  {
    "id": "calendar",
    "name": "Calendar",
    "description": "A versatile calendar component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "calendar",
      "layout",
      "ui",
      "component"
    ],
    "preview": "calendar",
    "codeExample": "import { Calendar } from '@lightmind/ui';\n\n<Calendar />",
    "hasMDX": true
  },
  {
    "id": "card",
    "name": "Card",
    "description": "A versatile card component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "card",
      "display",
      "ui",
      "component"
    ],
    "preview": "card",
    "codeExample": "import { Card } from '@lightmind/ui';\n\n<Card />",
    "hasMDX": true
  },
  {
    "id": "checkbox",
    "name": "Checkbox",
    "description": "A versatile checkbox component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "checkbox",
      "form",
      "ui",
      "component"
    ],
    "preview": "checkbox",
    "codeExample": "import { Checkbox } from '@lightmind/ui';\n\n<Checkbox />",
    "hasMDX": true
  },
  {
    "id": "collapsible",
    "name": "Collapsible",
    "description": "A versatile collapsible component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "collapsible",
      "layout",
      "ui",
      "component"
    ],
    "preview": "collapsible",
    "codeExample": "import { Collapsible } from '@lightmind/ui';\n\n<Collapsible />",
    "hasMDX": true
  },
  {
    "id": "combobox",
    "name": "Combobox",
    "description": "A versatile combobox component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "combobox",
      "form",
      "ui",
      "component"
    ],
    "preview": "combobox",
    "codeExample": "import { Combobox } from '@lightmind/ui';\n\n<Combobox />",
    "hasMDX": true
  },
  {
    "id": "command",
    "name": "Command",
    "description": "A versatile command component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "command",
      "form",
      "ui",
      "component"
    ],
    "preview": "command",
    "codeExample": "import { Command } from '@lightmind/ui';\n\n<Command />",
    "hasMDX": true
  },
  {
    "id": "context-menu",
    "name": "ContextMenu",
    "description": "A versatile contextmenu component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "context-menu",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "context-menu",
    "codeExample": "import { ContextMenu } from '@lightmind/ui';\n\n<ContextMenu />",
    "hasMDX": true
  },
  {
    "id": "data-table",
    "name": "DataTable",
    "description": "A versatile datatable component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "data-table",
      "display",
      "ui",
      "component"
    ],
    "preview": "data-table",
    "codeExample": "import { DataTable } from '@lightmind/ui';\n\n<DataTable />",
    "hasMDX": true
  },
  {
    "id": "dialog",
    "name": "Dialog",
    "description": "A versatile dialog component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "dialog",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "dialog",
    "codeExample": "import { Dialog } from '@lightmind/ui';\n\n<Dialog />",
    "hasMDX": true
  },
  {
    "id": "drawer",
    "name": "Drawer",
    "description": "A versatile drawer component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "drawer",
      "layout",
      "ui",
      "component"
    ],
    "preview": "drawer",
    "codeExample": "import { Drawer } from '@lightmind/ui';\n\n<Drawer />",
    "hasMDX": true
  },
  {
    "id": "dropdown-menu",
    "name": "DropdownMenu",
    "description": "A versatile dropdownmenu component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "dropdown-menu",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "dropdown-menu",
    "codeExample": "import { DropdownMenu } from '@lightmind/ui';\n\n<DropdownMenu />",
    "hasMDX": true
  },
  {
    "id": "form",
    "name": "Form",
    "description": "A versatile form component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "form",
      "form",
      "ui",
      "component"
    ],
    "preview": "form",
    "codeExample": "import { Form } from '@lightmind/ui';\n\n<Form />",
    "hasMDX": true
  },
  {
    "id": "hover-card",
    "name": "HoverCard",
    "description": "A versatile hovercard component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "hover-card",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "hover-card",
    "codeExample": "import { HoverCard } from '@lightmind/ui';\n\n<HoverCard />",
    "hasMDX": true
  },
  {
    "id": "input-otp",
    "name": "InputOtp",
    "description": "A versatile inputotp component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "input-otp",
      "form",
      "ui",
      "component"
    ],
    "preview": "input-otp",
    "codeExample": "import { InputOtp } from '@lightmind/ui';\n\n<InputOtp />",
    "hasMDX": true
  },
  {
    "id": "input",
    "name": "Input",
    "description": "A versatile input component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "input",
      "form",
      "ui",
      "component"
    ],
    "preview": "input",
    "codeExample": "import { Input } from '@lightmind/ui';\n\n<Input />",
    "hasMDX": true
  },
  {
    "id": "label",
    "name": "Label",
    "description": "A versatile label component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "label",
      "form",
      "ui",
      "component"
    ],
    "preview": "label",
    "codeExample": "import { Label } from '@lightmind/ui';\n\n<Label />",
    "hasMDX": true
  },
  {
    "id": "menubar",
    "name": "Menubar",
    "description": "A versatile menubar component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "menubar",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "menubar",
    "codeExample": "import { Menubar } from '@lightmind/ui';\n\n<Menubar />",
    "hasMDX": true
  },
  {
    "id": "navigation-menu",
    "name": "NavigationMenu",
    "description": "A versatile navigationmenu component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "navigation-menu",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "navigation-menu",
    "codeExample": "import { NavigationMenu } from '@lightmind/ui';\n\n<NavigationMenu />",
    "hasMDX": true
  },
  {
    "id": "pagination",
    "name": "Pagination",
    "description": "A versatile pagination component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "pagination",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "pagination",
    "codeExample": "import { Pagination } from '@lightmind/ui';\n\n<Pagination />",
    "hasMDX": true
  },
  {
    "id": "popover",
    "name": "Popover",
    "description": "A versatile popover component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "popover",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "popover",
    "codeExample": "import { Popover } from '@lightmind/ui';\n\n<Popover />",
    "hasMDX": true
  },
  {
    "id": "progress",
    "name": "Progress",
    "description": "A versatile progress component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "progress",
      "layout",
      "ui",
      "component"
    ],
    "preview": "progress",
    "codeExample": "import { Progress } from '@lightmind/ui';\n\n<Progress />",
    "hasMDX": true
  },
  {
    "id": "radio-group",
    "name": "RadioGroup",
    "description": "A versatile radiogroup component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "radio-group",
      "form",
      "ui",
      "component"
    ],
    "preview": "radio-group",
    "codeExample": "import { RadioGroup } from '@lightmind/ui';\n\n<RadioGroup />",
    "hasMDX": true
  },
  {
    "id": "scroll-area",
    "name": "ScrollArea",
    "description": "A versatile scrollarea component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "scroll-area",
      "layout",
      "ui",
      "component"
    ],
    "preview": "scroll-area",
    "codeExample": "import { ScrollArea } from '@lightmind/ui';\n\n<ScrollArea />",
    "hasMDX": true
  },
  {
    "id": "select",
    "name": "Select",
    "description": "A versatile select component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "select",
      "form",
      "ui",
      "component"
    ],
    "preview": "select",
    "codeExample": "import { Select } from '@lightmind/ui';\n\n<Select />",
    "hasMDX": true
  },
  {
    "id": "separator",
    "name": "Separator",
    "description": "A versatile separator component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "separator",
      "layout",
      "ui",
      "component"
    ],
    "preview": "separator",
    "codeExample": "import { Separator } from '@lightmind/ui';\n\n<Separator />",
    "hasMDX": true
  },
  {
    "id": "sheet",
    "name": "Sheet",
    "description": "A versatile sheet component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sheet",
      "layout",
      "ui",
      "component"
    ],
    "preview": "sheet",
    "codeExample": "import { Sheet } from '@lightmind/ui';\n\n<Sheet />",
    "hasMDX": true
  },
  {
    "id": "sidebar",
    "name": "Sidebar",
    "description": "A versatile sidebar component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sidebar",
      "layout",
      "ui",
      "component"
    ],
    "preview": "sidebar",
    "codeExample": "import { Sidebar } from '@lightmind/ui';\n\n<Sidebar />",
    "hasMDX": true
  },
  {
    "id": "skeleton",
    "name": "Skeleton",
    "description": "A versatile skeleton component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "skeleton",
      "display",
      "ui",
      "component"
    ],
    "preview": "skeleton",
    "codeExample": "import { Skeleton } from '@lightmind/ui';\n\n<Skeleton />",
    "hasMDX": true
  },
  {
    "id": "slider",
    "name": "Slider",
    "description": "A versatile slider component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "slider",
      "layout",
      "ui",
      "component"
    ],
    "preview": "slider",
    "codeExample": "import { Slider } from '@lightmind/ui';\n\n<Slider />",
    "hasMDX": true
  },
  {
    "id": "sonner",
    "name": "Sonner",
    "description": "A versatile sonner component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sonner",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "sonner",
    "codeExample": "import { Sonner } from '@lightmind/ui';\n\n<Sonner />",
    "hasMDX": true
  },
  {
    "id": "stat-card",
    "name": "StatCard",
    "description": "A versatile statcard component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "stat-card",
      "display",
      "ui",
      "component"
    ],
    "preview": "stat-card",
    "codeExample": "import { StatCard } from '@lightmind/ui';\n\n<StatCard />",
    "hasMDX": true
  },
  {
    "id": "switch",
    "name": "Switch",
    "description": "A versatile switch component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "switch",
      "form",
      "ui",
      "component"
    ],
    "preview": "switch",
    "codeExample": "import { Switch } from '@lightmind/ui';\n\n<Switch />",
    "hasMDX": true
  },
  {
    "id": "table",
    "name": "Table",
    "description": "A versatile table component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "table",
      "display",
      "ui",
      "component"
    ],
    "preview": "table",
    "codeExample": "import { Table } from '@lightmind/ui';\n\n<Table />",
    "hasMDX": true
  },
  {
    "id": "tabs",
    "name": "Tabs",
    "description": "A versatile tabs component for React applications",
    "category": "navigation",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "tabs",
      "navigation",
      "ui",
      "component"
    ],
    "preview": "tabs",
    "codeExample": "import { Tabs } from '@lightmind/ui';\n\n<Tabs />",
    "hasMDX": true
  },
  {
    "id": "textarea",
    "name": "Textarea",
    "description": "A versatile textarea component for React applications",
    "category": "form",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "textarea",
      "form",
      "ui",
      "component"
    ],
    "preview": "textarea",
    "codeExample": "import { Textarea } from '@lightmind/ui';\n\n<Textarea />",
    "hasMDX": true
  },
  {
    "id": "toast",
    "name": "Toast",
    "description": "A versatile toast component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toast",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "toast",
    "codeExample": "import { Toast } from '@lightmind/ui';\n\n<Toast />",
    "hasMDX": true
  },
  {
    "id": "toaster",
    "name": "Toaster",
    "description": "A versatile toaster component for React applications",
    "category": "feedback",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toaster",
      "feedback",
      "ui",
      "component"
    ],
    "preview": "toaster",
    "codeExample": "import { Toaster } from '@lightmind/ui';\n\n<Toaster />",
    "hasMDX": true
  },
  {
    "id": "toggle-group",
    "name": "ToggleGroup",
    "description": "A versatile togglegroup component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toggle-group",
      "layout",
      "ui",
      "component"
    ],
    "preview": "toggle-group",
    "codeExample": "import { ToggleGroup } from '@lightmind/ui';\n\n<ToggleGroup />",
    "hasMDX": true
  },
  {
    "id": "toggle",
    "name": "Toggle",
    "description": "A versatile toggle component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toggle",
      "layout",
      "ui",
      "component"
    ],
    "preview": "toggle",
    "codeExample": "import { Toggle } from '@lightmind/ui';\n\n<Toggle />",
    "hasMDX": true
  },
  {
    "id": "tooltip",
    "name": "Tooltip",
    "description": "A versatile tooltip component for React applications",
    "category": "display",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "tooltip",
      "display",
      "ui",
      "component"
    ],
    "preview": "tooltip",
    "codeExample": "import { Tooltip } from '@lightmind/ui';\n\n<Tooltip />",
    "hasMDX": true
  },
  {
    "id": "typography",
    "name": "Typography",
    "description": "A versatile typography component for React applications",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "typography",
      "layout",
      "ui",
      "component"
    ],
    "preview": "typography",
    "codeExample": "import { Typography } from '@lightmind/ui';\n\n<Typography />",
    "hasMDX": true
  }
];

// Categories with dynamic counts
export const categories: CategoryInfo[] = [
  {
    id: 'form',
    name: 'Form',
    description: 'Interactive form components',
    icon: 'form',
    componentCount: 12,
    color: 'bg-blue-500'
  },
  {
    id: 'display',
    name: 'Display',
    description: 'Content display components',
    icon: 'display',
    componentCount: 9,
    color: 'bg-green-500'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and menu components',
    icon: 'navigation',
    componentCount: 8,
    color: 'bg-purple-500'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback components',
    icon: 'feedback',
    componentCount: 6,
    color: 'bg-orange-500'
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structure components',
    icon: 'layout',
    componentCount: 16,
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
