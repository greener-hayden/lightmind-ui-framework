/**
 * Component Registry - Centralized component management system
 * Part of the LightMind UI Framework Gallery
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
  color: string
  componentCount: number
}

export const categories: CategoryInfo[] = [
  {
    id: 'form',
    name: 'Form Components',
    description: 'Interactive form elements for user input and data collection',
    icon: 'form',
    color: 'bg-blue-500',
    componentCount: 0, // Will be calculated dynamically
  },
  {
    id: 'display',
    name: 'Display Components',
    description: 'Components for presenting and organizing content',
    icon: 'display',
    color: 'bg-green-500',
    componentCount: 0,
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Components for navigation and user flow',
    icon: 'navigation',
    color: 'bg-purple-500',
    componentCount: 0,
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'Components for user feedback and status communication',
    icon: 'feedback',
    color: 'bg-orange-500',
    componentCount: 0,
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Structural components for page and content organization',
    icon: 'layout',
    color: 'bg-indigo-500',
    componentCount: 0,
  },
]

export const components: ComponentInfo[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A clickable button component with multiple variants',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['interactive', 'form', 'action'],
    preview: 'ButtonPreview',
    codeExample: `<Button variant="default">Click me</Button>`,
    apiDocumentation: {
      props: [
        {
          name: 'variant',
          type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
          description: 'The visual style variant of the button',
          required: false,
          default: 'default'
        },
        {
          name: 'size',
          type: "'default' | 'sm' | 'lg' | 'icon'",
          description: 'The size of the button',
          required: false,
          default: 'default'
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the button is disabled',
          required: false,
          default: 'false'
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Change the component to the HTML tag or custom component of the only child',
          required: false,
          default: 'false'
        }
      ]
    },
    usageGuidelines: {
      dos: [
        'Use descriptive button text that clearly indicates the action',
        'Place primary actions on the right side of dialog boxes',
        'Use consistent button sizes throughout your application'
      ],
      donts: [
        'Don\'t use too many different button variants on the same screen',
        'Don\'t make buttons too small to be easily clickable',
        'Don\'t use generic text like "Click here" or "Button"'
      ],
      accessibility: [
        'Ensure buttons have sufficient color contrast',
        'Provide keyboard navigation support',
        'Use aria-label for icon-only buttons'
      ]
    },
    relatedComponents: ['input', 'form', 'dialog'],
    variants: [
      {
        name: 'Icon Button',
        description: 'Button with icon and text',
        preview: 'ButtonIconPreview',
        codeExample: `<Button variant="outline" size="sm">
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>`
      },
      {
        name: 'Loading Button',
        description: 'Button with loading state',
        preview: 'ButtonLoadingPreview',
        codeExample: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`
      }
    ]
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A flexible container for content with optional header and footer',
    category: 'display',
    complexity: 'simple',
    status: 'stable',
    tags: ['container', 'content', 'layout'],
    preview: 'CardPreview',
    codeExample: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>`,
    apiDocumentation: {
      props: [
        {
          name: 'variant',
          type: "'default' | 'outline' | 'elevated'",
          description: 'The visual style variant of the card',
          required: false,
          default: 'default'
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes to apply',
          required: false
        }
      ]
    },
    usageGuidelines: {
      dos: [
        'Use cards to group related content together',
        'Maintain consistent spacing within cards',
        'Use CardHeader for titles and actions'
      ],
      donts: [
        'Don\'t nest cards too deeply',
        'Don\'t make cards too narrow or too wide',
        'Don\'t overuse cards - they should have a clear purpose'
      ],
      accessibility: [
        'Ensure proper heading hierarchy within cards',
        'Use semantic HTML elements within card content',
        'Provide sufficient contrast for card borders'
      ]
    },
    relatedComponents: ['dialog', 'popover', 'sheet'],
    variants: [
      {
        name: 'Interactive Card',
        description: 'Card with hover and click interactions',
        preview: 'CardInteractivePreview',
        codeExample: `<Card className="cursor-pointer hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
  </CardHeader>
  <CardContent>
    Click me for more actions
  </CardContent>
</Card>`
      }
    ]
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input field with validation and accessibility features',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'text', 'validation'],
    preview: 'InputPreview',
    codeExample: `<Input placeholder="Enter text..." />`,
    apiDocumentation: {
      props: [
        {
          name: 'type',
          type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
          description: 'The type of input',
          required: false,
          default: 'text'
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text',
          required: false
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the input is disabled',
          required: false,
          default: 'false'
        },
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value of the input',
          required: false
        },
        {
          name: 'onChange',
          type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
          description: 'Callback fired when the value changes',
          required: false
        }
      ]
    },
    usageGuidelines: {
      dos: [
        'Always provide appropriate labels for inputs',
        'Use placeholder text to provide hints about expected input',
        'Validate input on both client and server side'
      ],
      donts: [
        'Don\'t use placeholder text as a replacement for labels',
        'Don\'t make required fields unclear',
        'Don\'t forget to handle error states'
      ],
      accessibility: [
        'Associate inputs with labels using htmlFor',
        'Provide error messages with proper ARIA attributes',
        'Ensure sufficient color contrast'
      ]
    },
    relatedComponents: ['label', 'form', 'textarea'],
    variants: [
      {
        name: 'Input with Icon',
        description: 'Input field with leading or trailing icon',
        preview: 'InputIconPreview',
        codeExample: `<div className="relative">
  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-10" />
</div>`
      }
    ]
  },
  {
    id: 'dialog',
    name: 'Dialog',
    description: 'Modal dialog for overlaying content',
    category: 'feedback',
    complexity: 'medium',
    status: 'stable',
    tags: ['modal', 'overlay', 'interactive'],
    preview: 'DialogPreview',
    codeExample: `<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    apiDocumentation: {
      props: [
        {
          name: 'open',
          type: 'boolean',
          description: 'Controls whether the dialog is open',
          required: false
        },
        {
          name: 'onOpenChange',
          type: '(open: boolean) => void',
          description: 'Callback fired when open state changes',
          required: false
        },
        {
          name: 'modal',
          type: 'boolean',
          description: 'Whether the dialog is modal',
          required: false,
          default: 'true'
        }
      ]
    },
    usageGuidelines: {
      dos: [
        'Use dialogs for important actions that require user attention',
        'Provide clear action buttons (confirm/cancel)',
        'Make dialogs easy to dismiss'
      ],
      donts: [
        'Don\'t use dialogs for non-critical information',
        'Don\'t make dialogs too large or too small',
        'Don\'t stack multiple dialogs'
      ],
      accessibility: [
        'Ensure dialogs can be closed with the Escape key',
        'Trap focus within the dialog',
        'Provide proper ARIA labels'
      ]
    },
    relatedComponents: ['popover', 'sheet', 'alert'],
    variants: [
      {
        name: 'Confirmation Dialog',
        description: 'Dialog for confirming destructive actions',
        preview: 'DialogConfirmationPreview',
        codeExample: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
      }
    ]
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Contextual information displayed on hover or focus',
    category: 'feedback',
    complexity: 'simple',
    status: 'stable',
    tags: ['overlay', 'help', 'accessibility', 'information'],
    preview: 'TooltipPreview',
    codeExample: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    relatedComponents: ['popover', 'dialog', 'button'],
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Displays a menu to the user with rich items, checkboxes, radio buttons, and sub-menus',
    category: 'navigation',
    complexity: 'medium',
    status: 'stable',
    tags: ['menu', 'navigation', 'overlay', 'interactive', 'keyboard'],
    preview: 'DropdownMenuPreview',
    codeExample: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    relatedComponents: ['popover', 'select', 'navigation'],
  },
  {
    id: 'popover',
    name: 'Popover',
    description: 'Rich contextual overlays with interactive content, positioned relative to a trigger element',
    category: 'feedback',
    complexity: 'medium',
    status: 'stable',
    tags: ['overlay', 'interactive', 'positioning', 'rich-content', 'form'],
    preview: 'PopoverPreview',
    codeExample: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Quick Actions</h4>
      <p className="text-sm text-muted-foreground">
        Choose an action to perform
      </p>
    </div>
  </PopoverContent>
</Popover>`,
    relatedComponents: ['tooltip', 'dropdown-menu', 'dialog'],
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Contextual feedback messages for communicating important information to users',
    category: 'feedback',
    complexity: 'simple',
    status: 'stable',
    tags: ['notification', 'feedback', 'status', 'dismissible', 'accessibility', 'information'],
    preview: 'AlertPreview',
    codeExample: `<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
    relatedComponents: ['toast', 'dialog', 'badge'],
  },
  {
    id: 'label',
    name: 'Label',
    description: 'Form label component with proper accessibility and styling variants',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'accessibility', 'typography', 'label', 'input'],
    preview: 'LabelPreview',
    codeExample: `<div className="space-y-2">
  <Label htmlFor="email">Email address</Label>
  <Input type="email" id="email" />
</div>`,
    relatedComponents: ['input', 'form', 'textarea'],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Interactive checkbox component with support for checked, unchecked, and indeterminate states',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'input', 'interactive', 'selection', 'accessibility', 'validation'],
    preview: 'CheckboxPreview',
    codeExample: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
    relatedComponents: ['radio-group', 'switch', 'form'],
  },
  {
    id: 'radio-group',
    name: 'Radio Group',
    description: 'Radio group component for mutually exclusive selections with size variants and orientation support',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'input', 'interactive', 'selection', 'accessibility', 'radio', 'group'],
    preview: 'RadioGroupPreview',
    codeExample: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`,
    relatedComponents: ['checkbox', 'select', 'form'],
  },
  {
    id: 'select',
    name: 'Select',
    description: 'Dropdown select component with rich content support, size variants, groups, separators, and full keyboard navigation',
    category: 'form',
    complexity: 'medium',
    status: 'stable',
    tags: ['form', 'input', 'dropdown', 'selection', 'accessibility', 'keyboard', 'overlay'],
    preview: 'SelectPreview',
    codeExample: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
  </SelectContent>
</Select>`,
    relatedComponents: ['dropdown-menu', 'combobox', 'form'],
  },
  {
    id: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input with auto-resize, character counting, and size variants',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'input', 'text', 'multiline', 'auto-resize', 'validation'],
    preview: 'TextareaPreview',
    codeExample: `<div className="space-y-2">
  <Label htmlFor="message">Your message</Label>
  <Textarea 
    id="message"
    placeholder="Type your message here..." 
  />
</div>`,
    relatedComponents: ['input', 'form', 'label'],
  },
  {
    id: 'switch',
    name: 'Switch',
    description: 'Toggle switch component with size variants, color themes, and optional icon support',
    category: 'form',
    complexity: 'simple',
    status: 'stable',
    tags: ['form', 'input', 'toggle', 'binary', 'accessibility', 'interactive'],
    preview: 'SwitchPreview',
    codeExample: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
    relatedComponents: ['checkbox', 'toggle', 'form'],
  },
  {
    id: 'table',
    name: 'Table',
    description: 'Semantic HTML table component with variants, sorting, responsive design, and comprehensive data display features',
    category: 'display',
    complexity: 'medium',
    status: 'stable',
    tags: ['table', 'data', 'display', 'sorting', 'responsive', 'semantic', 'accessibility'],
    preview: 'TablePreview',
    codeExample: `<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    relatedComponents: ['data-table', 'card', 'list'],
  },
  {
    id: 'table-selectable',
    name: 'Selectable Table',
    description: 'Table with row selection capabilities, bulk actions, and multi-select functionality',
    category: 'display',
    complexity: 'complex',
    status: 'stable',
    tags: ['table', 'selection', 'bulk-actions', 'interactive', 'checkboxes'],
    preview: 'TableSelectablePreview',
    codeExample: `<SelectableTable
  data={users}
  columns={columns}
  selectedRows={selectedRows}
  onRowSelect={handleRowSelect}
  onSelectAll={handleSelectAll}
  selectionActions={actions}
  enableBulkActions={true}
/>`,
    relatedComponents: ['table', 'checkbox', 'data-table'],
  },
  {
    id: 'table-filterable',
    name: 'Filterable Table',
    description: 'Table with advanced per-column filtering including text, select, date, and multi-select filters',
    category: 'display',
    complexity: 'complex',
    status: 'stable',
    tags: ['table', 'filtering', 'search', 'data-manipulation', 'interactive'],
    preview: 'TableFilterablePreview',
    codeExample: `<FilterableTable
  data={users}
  columns={columns}
  filters={filters}
  onFiltersChange={handleFiltersChange}
  showFilterBar={true}
  showFilterCount={true}
/>`,
    relatedComponents: ['table', 'input', 'select'],
  },
  {
    id: 'table-paginated',
    name: 'Paginated Table',
    description: 'Table with comprehensive pagination controls, page size selection, and navigation',
    category: 'display',
    complexity: 'medium',
    status: 'stable',
    tags: ['table', 'pagination', 'navigation', 'data-management', 'performance'],
    preview: 'TablePaginatedPreview',
    codeExample: `<div className="space-y-4">
  <Table>
    <TableHeader>
      <TableRow>
        {columns.map(column => (
          <TableHead key={column.id}>{column.header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {currentPageData.map(item => (
        <TableRow key={item.id}>
          {columns.map(column => (
            <TableCell key={column.id}>
              {item[column.accessor]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
  <TablePagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
</div>`,
    relatedComponents: ['table', 'pagination', 'navigation'],
  },
]

// Helper functions
export function getComponentById(id: string): ComponentInfo | undefined {
  return components.find(component => component.id === id)
}

export function getComponentsByCategory(categoryId: CategoryId): ComponentInfo[] {
  return components.filter(component => component.category === categoryId)
}

export function getComponentsByComplexity(complexity: ComponentInfo['complexity']): ComponentInfo[] {
  return components.filter(component => component.complexity === complexity)
}

export function getComponentsByStatus(status: ComponentInfo['status']): ComponentInfo[] {
  return components.filter(component => component.status === status)
}

export function searchComponents(query: string): ComponentInfo[] {
  const lowercaseQuery = query.toLowerCase()
  return components.filter(component =>
    component.name.toLowerCase().includes(lowercaseQuery) ||
    component.description.toLowerCase().includes(lowercaseQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function getCategoryById(id: CategoryId): CategoryInfo | undefined {
  const category = categories.find(cat => cat.id === id)
  if (category) {
    // Calculate component count dynamically
    const componentCount = getComponentsByCategory(id).length
    return { ...category, componentCount }
  }
  return undefined
}

export function getAllCategories(): CategoryInfo[] {
  return categories.map(category => ({
    ...category,
    componentCount: getComponentsByCategory(category.id).length
  }))
}

export function getRelatedComponents(componentId: string): ComponentInfo[] {
  const component = getComponentById(componentId)
  if (!component?.relatedComponents) return []
  
  return component.relatedComponents
    .map(id => getComponentById(id))
    .filter(Boolean) as ComponentInfo[]
}

export function getComponentStats() {
  const totalComponents = components.length
  const categoryStats = getAllCategories().map(cat => ({
    category: cat.name,
    count: cat.componentCount
  }))
  
  const complexityStats = {
    simple: getComponentsByComplexity('simple').length,
    medium: getComponentsByComplexity('medium').length,
    complex: getComponentsByComplexity('complex').length,
  }
  
  const statusStats = {
    alpha: getComponentsByStatus('alpha').length,
    beta: getComponentsByStatus('beta').length,
    stable: getComponentsByStatus('stable').length,
  }
  
  return {
    totalComponents,
    categoryStats,
    complexityStats,
    statusStats
  }
}

export { components as componentRegistry }