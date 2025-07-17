/**
 * Search Results Page
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Badge, Button, Input, Card, CardContent, CardHeader, CardTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@lightmind/ui'
import { 
  searchComponents,
  getAllCategories,
  getComponentsByCategory,
  getComponentsByComplexity,
  ComponentInfo,
  CategoryId
} from '@/lib/component-registry'

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  // Get all categories for filter dropdown
  const categories = getAllCategories()
  
  // Search and filter logic
  const filteredComponents = useMemo(() => {
    let results: ComponentInfo[] = []
    
    // Start with search results or all components
    if (searchQuery.trim()) {
      results = searchComponents(searchQuery)
    } else {
      // If no search query, show all components
      results = categories.flatMap(cat => getComponentsByCategory(cat.id))
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      results = results.filter(component => component.category === selectedCategory)
    }
    
    // Apply complexity filter
    if (selectedComplexity && selectedComplexity !== 'all') {
      results = results.filter(component => component.complexity === selectedComplexity)
    }
    
    return results
  }, [searchQuery, selectedCategory, selectedComplexity, categories])

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL with search query
    const newUrl = new URL(window.location.href)
    if (searchQuery.trim()) {
      newUrl.searchParams.set('q', searchQuery)
    } else {
      newUrl.searchParams.delete('q')
    }
    window.history.pushState({}, '', newUrl.toString())
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedComplexity('all')
    setSearchQuery('')
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.delete('q')
    window.history.pushState({}, '', newUrl.toString())
  }

  // Check if any filters are active
  const hasActiveFilters = searchQuery || (selectedCategory && selectedCategory !== 'all') || (selectedComplexity && selectedComplexity !== 'all')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[{ label: 'Search Results', isCurrentPage: true }]} 
          className="mb-6"
        />

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Components</h1>
          <p className="text-muted-foreground">
            {searchQuery ? `Results for "${searchQuery}"` : 'Find the perfect component for your project'}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 h-12"
            />
            <Button
              type="submit"
              className="absolute right-1 top-1 h-10"
            >
              Search
            </Button>
          </form>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Complexities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Complexities</SelectItem>
                <SelectItem value="simple">Simple</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="complex">Complex</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}

            {/* View Mode Toggle */}
            <div className="flex gap-1 ml-auto">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} found
        </div>

        {/* Results */}
        {filteredComponents.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }>
            {filteredComponents.map((component) => (
              <Card key={component.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {component.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {component.complexity}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {component.status}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Category and Tags */}
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Category:</span>
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === component.category)?.name}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {component.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {component.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{component.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a href={`/component/${component.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/category/${component.category}`}>
                        Category
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No components found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {searchQuery 
                  ? `No components match "${searchQuery}". Try adjusting your search term or filters.`
                  : 'Try adjusting your filters or search for something else.'
                }
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
                <Button asChild>
                  <a href="/">
                    Browse All Components
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Search Suggestions */}
        {filteredComponents.length === 0 && searchQuery && (
          <div className="mt-8 p-6 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Popular Components</h3>
            <div className="flex flex-wrap gap-2">
              {['button', 'input', 'card', 'dialog', 'table'].map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery(suggestion)
                    const newUrl = new URL(window.location.href)
                    newUrl.searchParams.set('q', suggestion)
                    window.history.pushState({}, '', newUrl.toString())
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center animate-pulse">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="mt-4 text-muted-foreground">Loading search...</p>
            </div>
          </div>
        </main>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}