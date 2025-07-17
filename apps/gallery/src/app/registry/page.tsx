/**
 * Registry Overview Page
 * Lists all components in the registry
 */

import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { components, getComponentStats } from '@/lib/component-registry'
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import Link from 'next/link'

export default function RegistryPage() {
  const stats = getComponentStats()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registry', href: '/registry' }
          ]} 
        />

        <div className="mt-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Component Registry</h1>
          <p className="text-muted-foreground text-lg">
            Browse and explore all available components in the LightMind UI library.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalComponents}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stable</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.statusStats.stable}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Simple</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.complexityStats.simple}</div>
            </CardContent>
          </Card>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map(component => (
            <Link key={component.id} href={`/registry/${component.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <Badge variant="secondary">{component.status}</Badge>
                  </div>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {component.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {component.category}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}