/**
 * Registry Component Detail Page
 * Shows component from the registry with style variants
 */

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { components, categories, getComponentById, getRelatedComponents } from '@/lib/component-registry'
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@lightmind/ui'
import { Copy, Download, Package, GitBranch, AlertCircle } from 'lucide-react'
import { PreviewComponent } from '@/components/preview-registry'
import Link from 'next/link'

interface ComponentPageProps {
  params: {
    component: string
  }
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const component = getComponentById(params.component)
  
  if (!component) {
    return {
      title: 'Component Not Found',
      description: 'The requested component could not be found.',
    }
  }

  return {
    title: `${component.name} Component - LightMind UI`,
    description: component.description,
  }
}

export function generateStaticParams() {
  return components.map(component => ({
    component: component.id
  }))
}

export default function RegistryComponentPage({ params }: ComponentPageProps) {
  const component = getComponentById(params.component)
  
  if (!component) {
    notFound()
  }

  const relatedComponents = getRelatedComponents(component.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registry', href: '/registry' },
            { label: component.name, href: `/registry/${component.id}` }
          ]} 
        />

        {/* Component Header */}
        <div className="mt-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{component.name}</h1>
              <Badge variant="secondary">{component.status}</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <GitBranch className="w-4 h-4 mr-2" />
                Fork
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg mb-4">
            {component.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {component.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Component Preview</CardTitle>
                <CardDescription>
                  Interactive preview of the {component.name} component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 border rounded-lg bg-background">
                  <PreviewComponent name={component.preview} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Usage</CardTitle>
                    <CardDescription>
                      Copy and paste the following code into your project
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(component.codeExample)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{component.codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Components */}
        {relatedComponents.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedComponents.map(related => (
                <Link key={related.id} href={`/registry/${related.id}`}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{related.name}</CardTitle>
                      <CardDescription>{related.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {related.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}