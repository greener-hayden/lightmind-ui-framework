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
    "description": "Accordion component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "accordion"
    ],
    "preview": "accordion",
    "codeExample": "import { Accordion } from '@lightmind/ui';\n\n<Accordion />",
    "hasMDX": false
  },
  {
    "id": "alert-dialog",
    "name": "AlertDialog",
    "description": "AlertDialog component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "alert-dialog"
    ],
    "preview": "alert-dialog",
    "codeExample": "import { AlertDialog } from '@lightmind/ui';\n\n<AlertDialog />",
    "hasMDX": false
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
    "codeExample": "import { Alert } from '@lightmind/ui';\n\n<Alert />",
    "hasMDX": false
  },
  {
    "id": "aspect-ratio",
    "name": "AspectRatio",
    "description": "AspectRatio component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "aspect-ratio"
    ],
    "preview": "aspect-ratio",
    "codeExample": "import { AspectRatio } from '@lightmind/ui';\n\n<AspectRatio />",
    "hasMDX": false
  },
  {
    "id": "avatar",
    "name": "Avatar",
    "description": "Avatar component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "avatar"
    ],
    "preview": "avatar",
    "codeExample": "import { Avatar } from '@lightmind/ui';\n\n<Avatar />",
    "hasMDX": false
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
    "codeExample": "import { Badge } from '@lightmind/ui';\n\n<Badge />",
    "hasMDX": false
  },
  {
    "id": "breadcrumb",
    "name": "Breadcrumb",
    "description": "Breadcrumb component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "breadcrumb"
    ],
    "preview": "breadcrumb",
    "codeExample": "import { Breadcrumb } from '@lightmind/ui';\n\n<Breadcrumb />",
    "hasMDX": false
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
    "description": "Calendar component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "calendar"
    ],
    "preview": "calendar",
    "codeExample": "import { Calendar } from '@lightmind/ui';\n\n<Calendar />",
    "hasMDX": false
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
    "codeExample": "import { Card } from '@lightmind/ui';\n\n<Card />",
    "hasMDX": false
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
    "codeExample": "import { Checkbox } from '@lightmind/ui';\n\n<Checkbox />",
    "hasMDX": false
  },
  {
    "id": "collapsible",
    "name": "Collapsible",
    "description": "Collapsible component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "collapsible"
    ],
    "preview": "collapsible",
    "codeExample": "import { Collapsible } from '@lightmind/ui';\n\n<Collapsible />",
    "hasMDX": false
  },
  {
    "id": "combobox",
    "name": "Combobox",
    "description": "Combobox component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "combobox"
    ],
    "preview": "combobox",
    "codeExample": "import { Combobox } from '@lightmind/ui';\n\n<Combobox />",
    "hasMDX": false
  },
  {
    "id": "command",
    "name": "Command",
    "description": "Command component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "command"
    ],
    "preview": "command",
    "codeExample": "import { Command } from '@lightmind/ui';\n\n<Command />",
    "hasMDX": false
  },
  {
    "id": "context-menu",
    "name": "ContextMenu",
    "description": "ContextMenu component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "context-menu"
    ],
    "preview": "context-menu",
    "codeExample": "import { ContextMenu } from '@lightmind/ui';\n\n<ContextMenu />",
    "hasMDX": false
  },
  {
    "id": "data-table",
    "name": "DataTable",
    "description": "DataTable component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "data-table"
    ],
    "preview": "data-table",
    "codeExample": "import { DataTable } from '@lightmind/ui';\n\n<DataTable />",
    "hasMDX": false
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
    "codeExample": "import { Dialog } from '@lightmind/ui';\n\n<Dialog />",
    "hasMDX": false
  },
  {
    "id": "drawer",
    "name": "Drawer",
    "description": "Drawer component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "drawer"
    ],
    "preview": "drawer",
    "codeExample": "import { Drawer } from '@lightmind/ui';\n\n<Drawer />",
    "hasMDX": false
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
    "codeExample": "import { DropdownMenu } from '@lightmind/ui';\n\n<DropdownMenu />",
    "hasMDX": false
  },
  {
    "id": "form",
    "name": "Form",
    "description": "Form component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "form"
    ],
    "preview": "form",
    "codeExample": "import { Form } from '@lightmind/ui';\n\n<Form />",
    "hasMDX": false
  },
  {
    "id": "hover-card",
    "name": "HoverCard",
    "description": "HoverCard component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "hover-card"
    ],
    "preview": "hover-card",
    "codeExample": "import { HoverCard } from '@lightmind/ui';\n\n<HoverCard />",
    "hasMDX": false
  },
  {
    "id": "input-otp",
    "name": "InputOtp",
    "description": "InputOtp component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "input-otp"
    ],
    "preview": "input-otp",
    "codeExample": "import { InputOtp } from '@lightmind/ui';\n\n<InputOtp />",
    "hasMDX": false
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
    "codeExample": "import { Input } from '@lightmind/ui';\n\n<Input />",
    "hasMDX": false
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
    "codeExample": "import { Label } from '@lightmind/ui';\n\n<Label />",
    "hasMDX": false
  },
  {
    "id": "menubar",
    "name": "Menubar",
    "description": "Menubar component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "menubar"
    ],
    "preview": "menubar",
    "codeExample": "import { Menubar } from '@lightmind/ui';\n\n<Menubar />",
    "hasMDX": false
  },
  {
    "id": "navigation-menu",
    "name": "NavigationMenu",
    "description": "NavigationMenu component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "navigation-menu"
    ],
    "preview": "navigation-menu",
    "codeExample": "import { NavigationMenu } from '@lightmind/ui';\n\n<NavigationMenu />",
    "hasMDX": false
  },
  {
    "id": "pagination",
    "name": "Pagination",
    "description": "Pagination component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "pagination"
    ],
    "preview": "pagination",
    "codeExample": "import { Pagination } from '@lightmind/ui';\n\n<Pagination />",
    "hasMDX": false
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
    "codeExample": "import { Popover } from '@lightmind/ui';\n\n<Popover />",
    "hasMDX": false
  },
  {
    "id": "progress",
    "name": "Progress",
    "description": "Progress component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "progress"
    ],
    "preview": "progress",
    "codeExample": "import { Progress } from '@lightmind/ui';\n\n<Progress />",
    "hasMDX": false
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
    "codeExample": "import { RadioGroup } from '@lightmind/ui';\n\n<RadioGroup />",
    "hasMDX": false
  },
  {
    "id": "scroll-area",
    "name": "ScrollArea",
    "description": "ScrollArea component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "scroll-area"
    ],
    "preview": "scroll-area",
    "codeExample": "import { ScrollArea } from '@lightmind/ui';\n\n<ScrollArea />",
    "hasMDX": false
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
    "codeExample": "import { Select } from '@lightmind/ui';\n\n<Select />",
    "hasMDX": false
  },
  {
    "id": "separator",
    "name": "Separator",
    "description": "Separator component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "separator"
    ],
    "preview": "separator",
    "codeExample": "import { Separator } from '@lightmind/ui';\n\n<Separator />",
    "hasMDX": false
  },
  {
    "id": "sheet",
    "name": "Sheet",
    "description": "Sheet component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sheet"
    ],
    "preview": "sheet",
    "codeExample": "import { Sheet } from '@lightmind/ui';\n\n<Sheet />",
    "hasMDX": false
  },
  {
    "id": "sidebar",
    "name": "Sidebar",
    "description": "Sidebar component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sidebar"
    ],
    "preview": "sidebar",
    "codeExample": "import { Sidebar } from '@lightmind/ui';\n\n<Sidebar />",
    "hasMDX": false
  },
  {
    "id": "skeleton",
    "name": "Skeleton",
    "description": "Skeleton component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "skeleton"
    ],
    "preview": "skeleton",
    "codeExample": "import { Skeleton } from '@lightmind/ui';\n\n<Skeleton />",
    "hasMDX": false
  },
  {
    "id": "slider",
    "name": "Slider",
    "description": "Slider component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "slider"
    ],
    "preview": "slider",
    "codeExample": "import { Slider } from '@lightmind/ui';\n\n<Slider />",
    "hasMDX": false
  },
  {
    "id": "sonner",
    "name": "Sonner",
    "description": "Sonner component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "sonner"
    ],
    "preview": "sonner",
    "codeExample": "import { Sonner } from '@lightmind/ui';\n\n<Sonner />",
    "hasMDX": false
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
    "codeExample": "import { StatCard } from '@lightmind/ui';\n\n<StatCard />",
    "hasMDX": false
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
    "codeExample": "import { Switch } from '@lightmind/ui';\n\n<Switch />",
    "hasMDX": false
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
    "codeExample": "import { Table } from '@lightmind/ui';\n\n<Table />",
    "hasMDX": false
  },
  {
    "id": "tabs",
    "name": "Tabs",
    "description": "Tabs component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "tabs"
    ],
    "preview": "tabs",
    "codeExample": "import { Tabs } from '@lightmind/ui';\n\n<Tabs />",
    "hasMDX": false
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
    "codeExample": "import { Textarea } from '@lightmind/ui';\n\n<Textarea />",
    "hasMDX": false
  },
  {
    "id": "toast",
    "name": "Toast",
    "description": "Toast component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toast"
    ],
    "preview": "toast",
    "codeExample": "import { Toast } from '@lightmind/ui';\n\n<Toast />",
    "hasMDX": false
  },
  {
    "id": "toaster",
    "name": "Toaster",
    "description": "Toaster component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toaster"
    ],
    "preview": "toaster",
    "codeExample": "import { Toaster } from '@lightmind/ui';\n\n<Toaster />",
    "hasMDX": false
  },
  {
    "id": "toggle-group",
    "name": "ToggleGroup",
    "description": "ToggleGroup component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toggle-group"
    ],
    "preview": "toggle-group",
    "codeExample": "import { ToggleGroup } from '@lightmind/ui';\n\n<ToggleGroup />",
    "hasMDX": false
  },
  {
    "id": "toggle",
    "name": "Toggle",
    "description": "Toggle component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "toggle"
    ],
    "preview": "toggle",
    "codeExample": "import { Toggle } from '@lightmind/ui';\n\n<Toggle />",
    "hasMDX": false
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
    "codeExample": "import { Tooltip } from '@lightmind/ui';\n\n<Tooltip />",
    "hasMDX": false
  },
  {
    "id": "typography",
    "name": "Typography",
    "description": "Typography component",
    "category": "layout",
    "complexity": "simple",
    "status": "stable",
    "tags": [
      "typography"
    ],
    "preview": "typography",
    "codeExample": "import { Typography } from '@lightmind/ui';\n\n<Typography />",
    "hasMDX": false
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
    componentCount: 34,
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
