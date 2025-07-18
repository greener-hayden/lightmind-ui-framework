/**
 * Component Detail Page - Dynamic route for individual components
 * Part of the LightMind UI Framework Gallery
 */

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ComponentDetail, ComponentNavigation } from '@/components/component-detail'
import { 
  getComponentById, 
  getRelatedComponents,
  getComponentsByCategory,
  getCategoryById,
  components
} from '@/lib/component-registry'
// Removed dynamic MDX loading for SSG compatibility

interface ComponentPageProps {
  params: Promise<{
    component: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const { component: componentParam } = await params
  const component = getComponentById(componentParam)
  
  if (!component) {
    return {
      title: 'Component Not Found',
      description: 'The requested component could not be found.',
    }
  }

  const category = getCategoryById(component.category)
  
  return {
    title: `${component.name} | LightMind UI Gallery`,
    description: `${component.description} - ${component.complexity} complexity component with ${component.tags.join(', ')} features.`,
    keywords: [
      component.name.toLowerCase(),
      ...component.tags,
      'ui component',
      'react',
      'typescript',
      'shadcn',
      category?.name.toLowerCase() || ''
    ],
    openGraph: {
      title: `${component.name} | LightMind UI Gallery`,
      description: component.description,
      type: 'website',
      siteName: 'LightMind UI Gallery',
    },
  }
}

// Generate static paths for all components dynamically
export function generateStaticParams() {
  return components.map(component => ({
    component: component.id
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { component: componentParam } = await params
  const component = getComponentById(componentParam)
  
  if (!component) {
    notFound()
  }

  const category = getCategoryById(component.category)
  const relatedComponents = getRelatedComponents(component.id)
  
  // Get navigation components (previous/next in category)
  const categoryComponents = getComponentsByCategory(component.category)
  const currentIndex = categoryComponents.findIndex(c => c.id === component.id)
  const previousComponent = currentIndex > 0 ? categoryComponents[currentIndex - 1] : undefined
  const nextComponent = currentIndex < categoryComponents.length - 1 ? categoryComponents[currentIndex + 1] : undefined

  // MDX content is now handled statically for SSG compatibility
  const mdxData = { exists: false, content: null }
  const mdxSections = null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: category?.name || 'Category', href: `/category/${component.category}` },
            { label: component.name, isCurrentPage: true }
          ]} 
          className="mb-6"
        />

        {/* Component Detail */}
        <div className="max-w-6xl mx-auto">
          <ComponentDetail 
            component={component}
            relatedComponents={relatedComponents}
            mdxContent={mdxData.exists ? mdxData.content : null}
            mdxSections={mdxSections}
            className="mb-12"
          />

          {/* Navigation */}
          <ComponentNavigation 
            previousComponent={previousComponent}
            nextComponent={nextComponent}
            className="border-t pt-8"
          />

          {/* Category Context */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  More {category?.name} Components
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore other components in this category
                </p>
              </div>
              <a
                href={`/category/${component.category}`}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View all {category?.name} →
              </a>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categoryComponents
                .filter(c => c.id !== component.id)
                .slice(0, 5)
                .map((comp) => (
                  <a
                    key={comp.id}
                    href={`/component/${comp.id}`}
                    className="px-3 py-1 text-sm bg-background hover:bg-muted transition-colors rounded-md border"
                  >
                    {comp.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}