/**
 * Component Detail Display
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { useState } from 'react'
import { ChevronRight, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from '@lightmind/ui'
import { cn } from '@/lib/utils'
import { ComponentInfo } from '@/lib/component-registry'

interface ComponentDetailProps {
  component: ComponentInfo
  relatedComponents?: ComponentInfo[]
  mdxContent?: string | null
  mdxSections?: any | null
  className?: string
}

const statusColors = {
  alpha: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  stable: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
}

const statusIcons = {
  alpha: AlertCircle,
  beta: Clock,
  stable: CheckCircle2,
}

const complexityColors = {
  simple: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  complex: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

type TabType = 'preview' | 'code' | 'api' | 'guidelines'

export function ComponentDetail({ component, relatedComponents = [], mdxContent, mdxSections, className }: ComponentDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('preview')
  
  const StatusIcon = statusIcons[component.status]

  console.log('Active tab:', activeTab)
  console.log('MDX sections:', mdxSections)

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{component.name}</h1>
            <p className="text-lg text-muted-foreground">{component.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={cn('px-3 py-1', statusColors[component.status])}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {component.status}
            </Badge>
            <Badge className={cn('px-3 py-1', complexityColors[component.complexity])}>
              {component.complexity}
            </Badge>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="w-full">
          <div className="flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('preview')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer text-center',
                activeTab === 'preview'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              )}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer text-center',
                activeTab === 'code'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              )}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer text-center',
                activeTab === 'api'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              )}
            >
              API
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={cn(
                'flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer text-center',
                activeTab === 'guidelines'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              )}
            >
              Guidelines
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'preview' && (
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {mdxSections?.preview || (
                <div className="space-y-4">
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Preview</h3>
                    <p className="text-muted-foreground mb-4">Basic component preview:</p>
                    <div className="p-4 bg-background rounded border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{component.name} component would appear here</p>
                        <p className="text-xs text-muted-foreground mt-1">Status: {component.status} | Complexity: {component.complexity}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
                    <pre className="bg-background p-4 rounded border text-sm overflow-x-auto">
                      <code>{component.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'code' && (
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {mdxSections?.installation || mdxSections?.usage ? (
                <div className="space-y-8">
                  {mdxSections.installation && (
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Installation</h2>
                      {mdxSections.installation}
                    </div>
                  )}
                  {mdxSections.usage && (
                    <div>
                      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Usage</h2>
                      {mdxSections.usage}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Installation</h3>
                    <p className="text-muted-foreground mb-4">Install the component via npm:</p>
                    <pre className="bg-background p-4 rounded border text-sm overflow-x-auto">
                      <code>npm install @lightmind/ui</code>
                    </pre>
                  </div>
                  
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Usage</h3>
                    <p className="text-muted-foreground mb-4">Import and use the component:</p>
                    <pre className="bg-background p-4 rounded border text-sm overflow-x-auto">
                      <code>{component.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'api' && (
            <div className="prose prose-gray max-w-none dark:prose-invert
              prose-table:text-sm prose-thead:border-b prose-thead:border-border
              prose-tbody:divide-y prose-tbody:divide-border prose-tr:border-0
              prose-td:py-2 prose-td:px-4 prose-th:py-2 prose-th:px-4
              prose-th:text-left prose-th:font-medium prose-th:text-foreground
              prose-td:text-muted-foreground">
              {mdxSections?.api || (
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">API Reference</h3>
                  <p className="text-muted-foreground mb-4">Component properties and methods:</p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Status:</strong> <span className="capitalize">{component.status}</span>
                    </p>
                    <p className="text-sm">
                      <strong>Complexity:</strong> <span className="capitalize">{component.complexity}</span>
                    </p>
                    <p className="text-sm">
                      <strong>Category:</strong> <span className="capitalize">{component.category}</span>
                    </p>
                    <p className="text-sm">
                      <strong>Tags:</strong> {component.tags.join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'guidelines' && (
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {mdxSections?.guidelines || (
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Usage Guidelines</h3>
                  <p className="text-muted-foreground mb-4">Best practices for using the {component.name} component:</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Do:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Use the component according to its intended purpose</li>
                        <li>Follow the established design patterns</li>
                        <li>Test the component in different contexts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Don't:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Modify the component's core functionality</li>
                        <li>Use the component outside of its intended use case</li>
                        <li>Override essential accessibility features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Components */}
      {relatedComponents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Related Components</CardTitle>
            <CardDescription>
              Components that work well together
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedComponents.map((related) => (
                <div
                  key={related.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium">{related.name}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {related.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`/component/${related.id}`}>
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Component navigation for next/previous
interface ComponentNavigationProps {
  previousComponent?: ComponentInfo
  nextComponent?: ComponentInfo
  className?: string
}

export function ComponentNavigation({ previousComponent, nextComponent, className }: ComponentNavigationProps) {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className="flex-1">
        {previousComponent && (
          <Button variant="outline" asChild className="group">
            <a href={`/component/${previousComponent.id}`} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="text-sm font-medium group-hover:text-primary">
                  {previousComponent.name}
                </div>
              </div>
            </a>
          </Button>
        )}
      </div>
      <div className="flex-1 text-right">
        {nextComponent && (
          <Button variant="outline" asChild className="group">
            <a href={`/component/${nextComponent.id}`} className="flex items-center space-x-2">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="text-sm font-medium group-hover:text-primary">
                  {nextComponent.name}
                </div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}