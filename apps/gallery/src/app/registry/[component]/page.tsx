/**
 * Registry Component Detail Page
 * Shows component from the registry with style variants
 */

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ui, styles, categories } from '@/registry'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Download, Package, GitBranch, AlertCircle } from 'lucide-react'
import { ComponentPreview } from '@/components/component-preview'
import Link from 'next/link'

interface ComponentPageProps {
  params: {
    component: string
  }
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const component = ui.find(c => c.name === params.component)
  
  if (!component) {
    return {
      title: 'Component Not Found',
      description: 'The requested component could not be found.',
    }
  }

  return {
    title: `${component.name} | LightMind UI Registry`,
    description: component.meta?.description || `${component.name} component from LightMind UI`,
    keywords: [
      component.name,
      ...(component.meta?.tags || []),
      'ui component',
      'react',
      'typescript',
      'shadcn'
    ],
  }
}

export function generateStaticParams() {
  return ui.map(component => ({
    component: component.name
  }))
}

export default function RegistryComponentPage({ params }: ComponentPageProps) {
  const component = ui.find(c => c.name === params.component)
  
  if (!component) {
    notFound()
  }

  const category = categories.find(c => c.id === component.meta?.category)
  const relatedComponents = ui.filter(c => 
    c.meta?.category === component.meta?.category && c.name !== component.name
  ).slice(0, 4)

  // Get example file path
  const examplePath = `registry/default/examples/${component.name}-demo.tsx`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Registry', href: '/registry' },
            { label: category?.name || 'Components', href: `/registry?category=${component.meta?.category}` },
            { label: component.name, isCurrentPage: true }
          ]} 
          className="mb-6"
        />

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">
                  {component.name.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {component.meta?.description}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline">{component.meta?.status || 'stable'}</Badge>
                <Badge variant="secondary">{component.meta?.complexity || 'simple'}</Badge>
              </div>
            </div>

            {/* Tags */}
            {component.meta?.tags && (
              <div className="flex flex-wrap gap-2">
                {component.meta.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="preview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Component Preview</CardTitle>
                  <CardDescription>
                    Interactive preview with different style variants
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Style Selector */}
                  <div className="flex gap-2">
                    {styles.map(style => (
                      <Button key={style.name} variant="outline" size="sm">
                        {style.label}
                      </Button>
                    ))}
                  </div>

                  {/* Component Preview */}
                  <div className="border rounded-lg p-8 bg-background">
                    <ComponentPreview
                      componentId={component.name}
                      height="400px"
                      showCode={false}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Source Code</CardTitle>
                      <CardDescription>
                        Copy the code for your selected style variant
                      </CardDescription>
                    </div>
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code>
                        {`// Component code will be loaded from registry files
// ${component.files[0].path}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                  <CardDescription>
                    Install this component and its dependencies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* CLI Installation */}
                  <div>
                    <h3 className="font-semibold mb-2">Using CLI</h3>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Run this command:</span>
                        <Button size="sm" variant="ghost">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <code>npx shadcn-ui@latest add {component.name}</code>
                    </div>
                  </div>

                  {/* Dependencies */}
                  {component.dependencies && component.dependencies.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        Dependencies
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {component.dependencies.map(dep => (
                          <div key={dep} className="flex items-center gap-2 text-sm">
                            <GitBranch className="h-3 w-3 text-muted-foreground" />
                            <code className="text-xs bg-muted px-2 py-1 rounded">{dep}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Registry Dependencies */}
                  {component.registryDependencies && component.registryDependencies.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Required Components
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {component.registryDependencies.map(dep => (
                          <Link
                            key={dep}
                            href={`/registry/${dep}`}
                            className="text-sm bg-muted hover:bg-muted/80 px-3 py-1 rounded-md transition-colors"
                          >
                            {dep}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>
                    Component props and usage examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    API documentation would be loaded from component metadata
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Components */}
          {relatedComponents.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Components</CardTitle>
                <CardDescription>
                  Other components in the {category?.name} category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {relatedComponents.map(related => (
                    <Link
                      key={related.name}
                      href={`/registry/${related.name}`}
                      className="group space-y-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {related.name.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.meta?.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}