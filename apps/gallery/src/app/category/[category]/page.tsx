/**
 * Category Page - Dynamic route for component categories
 * Part of the LightMind UI Framework Gallery
 */

import { notFound } from 'next/navigation'
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ComponentCard } from '@/components/component-card'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@lightmind/ui'
import { 
  getCategoryById, 
  getComponentsByCategory, 
  CategoryId,
  getComponentsByComplexity,
  getComponentStats
} from '@/lib/component-registry'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params
  const category = getCategoryById(categoryParam as CategoryId)
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    }
  }

  return {
    title: `${category.name} | LightMind UI Gallery`,
    description: `${category.description} - Browse ${category.componentCount} components in the ${category.name} category.`,
    keywords: [`${category.name.toLowerCase()}`, 'ui components', 'react', 'typescript', 'shadcn'],
    openGraph: {
      title: `${category.name} | LightMind UI Gallery`,
      description: category.description,
      type: 'website',
      siteName: 'LightMind UI Gallery',
    },
  }
}

// Generate static paths for all categories
export function generateStaticParams() {
  return [
    { category: 'form' },
    { category: 'display' },
    { category: 'navigation' },
    { category: 'feedback' },
    { category: 'layout' },
  ]
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params
  const category = getCategoryById(categoryParam as CategoryId)
  
  if (!category) {
    notFound()
  }

  const components = getComponentsByCategory(categoryParam as CategoryId)
  const stats = getComponentStats()
  
  // Group components by complexity
  const simpleComponents = components.filter(c => c.complexity === 'simple')
  const mediumComponents = components.filter(c => c.complexity === 'medium')
  const complexComponents = components.filter(c => c.complexity === 'complex')

  const complexityGroups = [
    { 
      title: 'Simple', 
      description: 'Easy to implement components',
      components: simpleComponents,
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    },
    { 
      title: 'Medium', 
      description: 'Moderate complexity components',
      components: mediumComponents,
      color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    },
    { 
      title: 'Complex', 
      description: 'Advanced feature-rich components',
      components: complexComponents,
      color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }
  ].filter(group => group.components.length > 0)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[{ label: category.name, isCurrentPage: true }]} 
          className="mb-6"
        />

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-xl ${category.color} bg-opacity-10`}>
                  <div className={`w-8 h-8 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
                  <p className="text-xl text-muted-foreground mt-2">{category.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <span className="font-medium">{category.componentCount}</span>
                  <span>components</span>
                </div>
                <div className="flex items-center space-x-2">
                  {simpleComponents.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {simpleComponents.length} Simple
                    </Badge>
                  )}
                  {mediumComponents.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {mediumComponents.length} Medium
                    </Badge>
                  )}
                  {complexComponents.length > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {complexComponents.length} Complex
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <Button variant="outline" asChild>
              <a href="/">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Gallery
              </a>
            </Button>
          </div>
        </div>

        {/* Component Groups */}
        <div className="space-y-12">
          {complexityGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl font-bold">{group.title}</h2>
                    <Badge className={group.color}>
                      {group.components.length} component{group.components.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{group.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.components.map((component) => (
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
                        <Badge variant="secondary" className="text-xs ml-2">
                          {component.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {component.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {component.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{component.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" asChild className="w-full">
                        <a href={`/component/${component.id}`}>
                          View Component
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {components.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No components found</h3>
              <p className="text-muted-foreground">
                There are no components in this category yet. Check back later for updates!
              </p>
              <Button asChild>
                <a href="/">
                  Browse All Components
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Related Categories */}
        {components.length > 0 && (
          <div className="mt-16 p-8 bg-muted/30 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Explore Other Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['form', 'display', 'navigation', 'feedback', 'layout']
                .filter(cat => cat !== categoryParam)
                .map((categoryId) => {
                  const otherCategory = getCategoryById(categoryId as CategoryId)
                  return otherCategory ? (
                    <Button key={categoryId} variant="outline" size="sm" asChild>
                      <a href={`/category/${categoryId}`}>
                        {otherCategory.name}
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {otherCategory.componentCount}
                        </Badge>
                      </a>
                    </Button>
                  ) : null
                })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}