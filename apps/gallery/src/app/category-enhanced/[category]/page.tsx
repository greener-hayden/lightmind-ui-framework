/**
 * Enhanced Category Page - Modern category view with sidebar navigation
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { notFound } from 'next/navigation'
import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  Users,
  Package,
  Zap,
  Shield,
  Layers,
  Code,
  Palette,
  Layout,
  MousePointer,
  Bell,
  Home,
  Menu,
  X,
  SortAsc,
  SortDesc,
  Eye,
  Heart,
  Bookmark,
  Download,
  Share2,
  MoreHorizontal,
  Settings,
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import { Header } from '@/components/header'
import { ComponentCard } from '@/components/component-card'
import { 
  Badge, 
  Button, 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader, 
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ScrollArea,
  Progress,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Checkbox,
  Label,
  RadioGroup,
  RadioGroupItem,
  Slider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Skeleton,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  toast
} from '@lightmind/ui'
import { 
  getCategoryById, 
  getComponentsByCategory, 
  CategoryId,
  getComponentsByComplexity,
  getComponentStats,
  categories,
  components,
  ComponentInfo
} from '@/lib/component-registry'
import { cn } from '@/lib/utils'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

const categoryIcons = {
  form: Code,
  display: Eye,
  navigation: MousePointer,
  feedback: Bell,
  layout: Layout,
  default: Package
}

const complexityColors = {
  simple: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  complex: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
}

const statusColors = {
  alpha: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  stable: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
}

export default function EnhancedCategoryPage({ params }: CategoryPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedComplexity, setSelectedComplexity] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [popularityFilter, setPopularityFilter] = useState([0])

  // Get category data
  const categoryParam = React.use(params).category
  const category = getCategoryById(categoryParam as CategoryId)
  const categoryComponents = getComponentsByCategory(categoryParam as CategoryId)
  
  if (!category) {
    notFound()
  }

  // Get all unique tags from components
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    categoryComponents.forEach(component => {
      component.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [categoryComponents])

  // Filter and sort components
  const filteredComponents = useMemo(() => {
    let filtered = categoryComponents.filter(component => {
      const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesComplexity = selectedComplexity === 'all' || component.complexity === selectedComplexity
      const matchesStatus = selectedStatus === 'all' || component.status === selectedStatus
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => component.tags.includes(tag))
      
      return matchesSearch && matchesComplexity && matchesStatus && matchesTags
    })

    // Sort components
    filtered.sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'complexity':
          const complexityOrder = { simple: 0, medium: 1, complex: 2 }
          comparison = complexityOrder[a.complexity] - complexityOrder[b.complexity]
          break
        case 'status':
          const statusOrder = { alpha: 0, beta: 1, stable: 2 }
          comparison = statusOrder[a.status] - statusOrder[b.status]
          break
        default:
          comparison = 0
      }
      
      return sortOrder === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [categoryComponents, searchTerm, selectedComplexity, selectedStatus, selectedTags, sortBy, sortOrder])

  const handleToggleFavorite = (componentId: string) => {
    setFavorites(prev => 
      prev.includes(componentId) 
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    )
  }

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons] || categoryIcons.default

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <SidebarProvider defaultOpen={sidebarOpen}>
        <div className="flex">
          {/* Enhanced Sidebar */}
          <Sidebar className="w-80 border-r">
            <SidebarHeader className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h2 className="text-lg font-semibold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label htmlFor="search">Search Components</Label>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search components..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <Card className="p-3">
                      <div className="text-2xl font-bold">{categoryComponents.length}</div>
                      <div className="text-xs text-muted-foreground">Total Components</div>
                    </Card>
                    <Card className="p-3">
                      <div className="text-2xl font-bold">{filteredComponents.length}</div>
                      <div className="text-xs text-muted-foreground">Filtered Results</div>
                    </Card>
                  </div>

                  {/* Filters */}
                  <Separator />
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Complexity</Label>
                      <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Complexity</SelectItem>
                          <SelectItem value="simple">Simple</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="complex">Complex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Status</Label>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="alpha">Alpha</SelectItem>
                          <SelectItem value="beta">Beta</SelectItem>
                          <SelectItem value="stable">Stable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Sort By</Label>
                      <div className="flex gap-2">
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger className="flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="complexity">Complexity</SelectItem>
                            <SelectItem value="status">Status</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        >
                          {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Tags Filter */}
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Filter by Tags</Label>
                    <div className="flex flex-wrap gap-1">
                      {allTags.map(tag => (
                        <Badge 
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer text-xs"
                          onClick={() => handleToggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {selectedTags.length > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setSelectedTags([])}
                        className="text-xs"
                      >
                        Clear Tags
                      </Button>
                    )}
                  </div>

                  {/* Category Navigation */}
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Other Categories</Label>
                    <div className="space-y-1">
                      {categories.filter(cat => cat.id !== category.id).map(cat => {
                        const Icon = categoryIcons[cat.id as keyof typeof categoryIcons] || categoryIcons.default
                        const categoryComponentCount = getComponentsByCategory(cat.id as CategoryId).length
                        
                        return (
                          <Button
                            key={cat.id}
                            variant="ghost"
                            size="sm"
                            asChild
                            className="w-full justify-start"
                          >
                            <a href={`/category-enhanced/${cat.id}`}>
                              <Icon className="w-4 h-4 mr-2" />
                              <span className="flex-1 text-left">{cat.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {categoryComponentCount}
                              </Badge>
                            </a>
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </SidebarContent>

            <SidebarFooter className="border-t p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {filteredComponents.length} of {categoryComponents.length} components
                </div>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1">
            <main className="container mx-auto py-8">
              {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/search">Browse</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{category.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Page Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  >
                    {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Export List
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Category
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Bookmark className="w-4 h-4 mr-2" />
                        Bookmark Category
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Filter Summary */}
              {(selectedTags.length > 0 || selectedComplexity !== 'all' || selectedStatus !== 'all' || searchTerm) && (
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Active Filters:</span>
                      <div className="flex flex-wrap gap-1">
                        {searchTerm && <Badge variant="outline">Search: {searchTerm}</Badge>}
                        {selectedComplexity !== 'all' && <Badge variant="outline">Complexity: {selectedComplexity}</Badge>}
                        {selectedStatus !== 'all' && <Badge variant="outline">Status: {selectedStatus}</Badge>}
                        {selectedTags.map(tag => (
                          <Badge key={tag} variant="outline">Tag: {tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedComplexity('all')
                        setSelectedStatus('all')
                        setSelectedTags([])
                      }}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}

              {/* Components Grid/List */}
              <div className={cn(
                "gap-6",
                viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"
              )}>
                {filteredComponents.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No components found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search terms
                    </p>
                  </div>
                ) : (
                  filteredComponents.map((component) => (
                    <div key={component.id} className={cn(
                      "group relative",
                      viewMode === 'list' && "flex"
                    )}>
                      <ComponentCard 
                        component={component} 
                        viewMode={viewMode}
                      />
                      
                      {/* Favorite Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleToggleFavorite(component.id)}
                      >
                        <Heart className={cn(
                          "w-4 h-4",
                          favorites.includes(component.id) && "fill-red-500 text-red-500"
                        )} />
                      </Button>
                      
                      {/* Quick Actions */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={`/component/${component.id}`}>
                              <Eye className="w-4 h-4" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Load More / Pagination */}
              {filteredComponents.length > 0 && (
                <div className="mt-12 text-center">
                  <Button variant="outline">
                    Load More Components
                  </Button>
                </div>
              )}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}