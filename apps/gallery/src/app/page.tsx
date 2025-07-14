'use client'

import { useState } from 'react'
import { Search, Filter, Grid, List } from 'lucide-react'
import { ComponentCard } from '@/components/component-card'
import { SearchBar } from '@/components/search-bar'
import { FilterPanel } from '@/components/filter-panel'
import { Header } from '@/components/header'

// Mock component data - this will be replaced with actual component registry
const mockComponents = [
  {
    id: 'button',
    name: 'Button',
    description: 'A clickable button component with multiple variants',
    category: 'form',
    complexity: 'simple' as const,
    tags: ['interactive', 'form', 'action'],
    preview: 'ButtonPreview',
    codeExample: `<Button variant="default">Click me</Button>`,
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A flexible container for content with optional header and footer',
    category: 'display',
    complexity: 'simple' as const,
    tags: ['container', 'content', 'layout'],
    preview: 'CardPreview',
    codeExample: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>`,
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input field with validation and accessibility features',
    category: 'form',
    complexity: 'simple' as const,
    tags: ['form', 'text', 'validation'],
    preview: 'InputPreview',
    codeExample: `<Input placeholder="Enter text..." />`,
  },
  {
    id: 'dialog',
    name: 'Dialog',
    description: 'Modal dialog for overlaying content',
    category: 'feedback',
    complexity: 'medium' as const,
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
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Contextual information displayed on hover or focus',
    category: 'feedback',
    complexity: 'simple' as const,
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
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Displays a menu to the user with rich items, checkboxes, radio buttons, and sub-menus',
    category: 'navigation',
    complexity: 'medium' as const,
    tags: ['menu', 'navigation', 'overlay', 'interactive', 'keyboard'],
    preview: 'DropdownMenuPreview',
    codeExample: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    id: 'popover',
    name: 'Popover',
    description: 'Rich contextual overlays with interactive content, positioned relative to a trigger element',
    category: 'feedback',
    complexity: 'medium' as const,
    tags: ['overlay', 'interactive', 'positioning', 'rich-content', 'form'],
    preview: 'PopoverPreview',
    codeExample: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Quick Actions</PopoverTitle>
      <PopoverDescription>
        Choose an action to perform
      </PopoverDescription>
    </PopoverHeader>
    <div className="space-y-2">
      <Button variant="ghost" size="sm">Edit</Button>
      <Button variant="ghost" size="sm">Share</Button>
      <Button variant="ghost" size="sm">Delete</Button>
    </div>
  </PopoverContent>
</Popover>`,
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Contextual feedback messages for communicating important information to users with support for different variants and dismissible functionality',
    category: 'feedback',
    complexity: 'simple' as const,
    tags: ['notification', 'feedback', 'status', 'dismissible', 'accessibility', 'information'],
    preview: 'AlertPreview',
    codeExample: `<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Your API key will expire in 7 days.
  </AlertDescription>
</Alert>

<Alert variant="destructive" dismissible>
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>

<Alert variant="success" size="sm">
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>
    Changes saved successfully!
  </AlertDescription>
</Alert>`,
  },
  {
    id: 'label',
    name: 'Label',
    description: 'Form label component with proper accessibility and styling variants for consistent typography across forms',
    category: 'form',
    complexity: 'simple' as const,
    tags: ['form', 'accessibility', 'typography', 'label', 'input'],
    preview: 'LabelPreview',
    codeExample: `<div className="space-y-2">
  <Label htmlFor="email">Email address</Label>
  <Input type="email" id="email" />
</div>

<Label variant="destructive" size="sm">
  This field is required
</Label>`,
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Interactive checkbox component with support for checked, unchecked, and indeterminate states, built on Radix UI primitives',
    category: 'form',
    complexity: 'simple' as const,
    tags: ['form', 'input', 'interactive', 'selection', 'accessibility', 'validation'],
    preview: 'CheckboxPreview',
    codeExample: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">
    Accept terms and conditions
  </Label>
</div>

<Checkbox size="lg" defaultChecked />
<Checkbox indeterminate />`,
  },
]

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedComplexity, setSelectedComplexity] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredComponents, setFilteredComponents] = useState(mockComponents)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterComponents(query, selectedCategory, selectedComplexity)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterComponents(searchQuery, category, selectedComplexity)
  }

  const handleComplexityFilter = (complexity: string) => {
    setSelectedComplexity(complexity)
    filterComponents(searchQuery, selectedCategory, complexity)
  }

  const filterComponents = (query: string, category: string, complexity: string) => {
    let filtered = mockComponents

    if (query) {
      filtered = filtered.filter(component =>
        component.name.toLowerCase().includes(query.toLowerCase()) ||
        component.description.toLowerCase().includes(query.toLowerCase()) ||
        component.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }

    if (category) {
      filtered = filtered.filter(component => component.category === category)
    }

    if (complexity) {
      filtered = filtered.filter(component => component.complexity === complexity)
    }

    setFilteredComponents(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Component Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Discover and explore our collection of beautiful, accessible UI components
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className="lg:w-64 flex-shrink-0">
            <FilterPanel
              selectedCategory={selectedCategory}
              selectedComplexity={selectedComplexity}
              onCategoryChange={handleCategoryFilter}
              onComplexityChange={handleComplexityFilter}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Search and view controls */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
              <SearchBar 
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search components..."
              />
              
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-4 text-sm text-muted-foreground">
              {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} found
            </div>

            {/* Component grid/list */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                : 'space-y-4'
            }>
              {filteredComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {filteredComponents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No components found matching your criteria.</p>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}