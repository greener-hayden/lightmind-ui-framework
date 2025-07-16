'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight, Grid, List, Package, Star, Zap, Copy, Download, ExternalLink } from 'lucide-react'
import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  getAllCategories, 
  getComponentStats, 
  components,
  searchComponents,
  type ComponentInfo
} from '@/lib/component-registry'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const categories = getAllCategories()
  const stats = getComponentStats()
  
  // Get featured components (stable status)
  const featuredComponents = components
    .filter(c => c.status === 'stable')
    .slice(0, 6)
  
  // Search functionality
  const searchResults = searchQuery.trim() 
    ? searchComponents(searchQuery).slice(0, 8)
    : []

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            LightMind UI Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready components built on shadcn/ui foundations. Copy, paste, and customize to build your next application.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button size="lg" asChild>
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Browse Components
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/HaydenGreener/lightmind-ui-framework" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 h-12 text-lg"
            />
            {searchQuery && (
              <Button
                variant="outline"
                size="sm"
                className="absolute right-2 top-2"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </Button>
            )}
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>{stats.totalComponents} Components</span>
            </div>
            <div className="flex items-center gap-2">
              <Grid className="h-4 w-4" />
              <span>{categories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>{stats.statusStats.stable} Stable</span>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {searchQuery && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Search Results ({searchResults.length})
              </h2>
              <div className="flex gap-1">
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
            
            {searchResults.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {searchResults.map((component) => (
                  <ComponentCard key={component.id} component={component} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No components found for "{searchQuery}"</p>
              </div>
            )}
          </section>
        )}

        {/* Categories */}
        {!searchQuery && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {category.componentCount} components
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href={`/category/${category.id}`}>
                        View Components
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Featured Components */}
        {!searchQuery && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Featured Components</h2>
              <p className="text-muted-foreground">
                Our most popular and stable components
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/search">
                  View All Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* Installation */}
        <section className="bg-muted/30 rounded-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Quick Start</h2>
            <p className="text-muted-foreground">
              Get started with LightMind UI components in minutes
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Install via npm:</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-foreground">npm install @lightmind/ui</code>
            </div>
            
            <div className="mt-4 bg-muted rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Or copy individual components:</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-foreground">
                npx shadcn-ui@latest add button
              </code>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">1. Browse Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore our component library and find the perfect elements for your project.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">2. Copy & Paste</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Copy the component code and paste it directly into your project.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">3. Customize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Modify the components to match your design system and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function ComponentCard({ component }: { component: ComponentInfo }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
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
        
        <div className="flex flex-wrap gap-1 mt-3">
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
      </CardHeader>
      
      <CardContent>
        <Button asChild className="w-full">
          <Link href={`/component/${component.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}