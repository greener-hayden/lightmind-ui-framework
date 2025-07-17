/**
 * Component Detail Display
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { useState, useEffect } from 'react'
import { Copy, ExternalLink, Eye, Code, Check, ChevronRight, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button, Tabs, TabsContent, TabsList, TabsTrigger, Alert, AlertDescription } from '@lightmind/ui'
import { PreviewComponent } from './preview-registry'
import { cn } from '@/lib/utils'
import { ComponentInfo } from '@/lib/component-registry'
// Simple MDX rendering without next-mdx-remote
// Will use a simpler approach for now
import { 
  ComponentPreview, 
  CodeBlock, 
  PropsTable, 
  UsageGuidelines, 
  InstallationGuide, 
  VariantShowcase, 
  AccessibilityGuide, 
  RelatedComponents,
  ComponentSection
} from '@/lib/mdx-components/src'
// Types for MDX content - moved here since we no longer use mdx-loader
interface MDXContent {
  content: string
  frontMatter: Record<string, any>
}

interface MDXSections {
  preview?: string
  code?: string
  api?: string
  guidelines?: string
}
// MDX rendering will be handled by the new reusable components
// For now, we'll render the raw MDX content as a fallback

interface ComponentDetailProps {
  component: ComponentInfo
  relatedComponents?: ComponentInfo[]
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

export function ComponentDetail({ component, relatedComponents = [], className }: ComponentDetailProps) {
  const [copied, setCopied] = useState(false)
  const [activeVariant, setActiveVariant] = useState(0)
  const [mdxContent, setMdxContent] = useState<MDXContent | null>(null)
  const [mdxSections, setMdxSections] = useState<MDXSections | null>(null)
  const [hasMDX, setHasMDX] = useState(false)
  
  const StatusIcon = statusIcons[component.status]

  // Load MDX content if available
  useEffect(() => {
    // For now, show MDX content for access-matrix component
    if (component.id === 'access-matrix') {
      setHasMDX(true)
      setMdxContent({ content: '', frontMatter: {} })
      setMdxSections({
        preview: 'AccessMatrix Preview',
        code: 'AccessMatrix Code',
        api: 'AccessMatrix API',
        guidelines: 'AccessMatrix Guidelines'
      })
    } else {
      setHasMDX(false)
    }
  }, [component.id])

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // MDX components mapping
  const mdxComponents = {
    ComponentPreview,
    CodeBlock,
    PropsTable,
    UsageGuidelines,
    InstallationGuide,
    VariantShowcase,
    AccessibilityGuide,
    RelatedComponents,
    ComponentSection,
    // Built-in HTML elements for MDX compatibility
    h1: ({ children, ...props }: any) => <h1 className="text-2xl font-bold mb-4" {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 className="text-xl font-semibold mb-3" {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 className="text-lg font-medium mb-2" {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p className="mb-4" {...props}>{children}</p>,
    ul: ({ children, ...props }: any) => <ul className="list-disc pl-6 mb-4" {...props}>{children}</ul>,
    li: ({ children, ...props }: any) => <li className="mb-1" {...props}>{children}</li>,
    code: ({ children, ...props }: any) => <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>{children}</code>,
    pre: ({ children, ...props }: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props}>{children}</pre>,
  }

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
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        {/* Preview Tab */}
        <TabsContent value="preview" className="space-y-6">
          {hasMDX && mdxSections?.preview ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <CardDescription>
                  Interactive demonstration of the component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <ComponentPreview 
                        title="Interactive Demo" 
                        description="Live AccessMatrix component demonstration"
                        fullWidth
                        centered={false}
                      >
                        <PreviewComponent name="access-matrix" />
                      </ComponentPreview>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <CardDescription>
                  Interactive demonstration of the component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 bg-muted/30 rounded-lg min-h-[200px] flex items-center justify-center">
                  <PreviewComponent name={component.preview} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Variants */}
          {component.variants && component.variants.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Variants</CardTitle>
                <CardDescription>
                  Different variations and configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  {component.variants.map((variant, index) => (
                    <Button
                      key={index}
                      variant={activeVariant === index ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveVariant(index)}
                    >
                      {variant.name}
                    </Button>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="p-6 bg-muted/30 rounded-lg flex items-center justify-center">
                    <PreviewComponent name={component.variants[activeVariant].preview} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{component.variants[activeVariant].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {component.variants[activeVariant].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code" className="space-y-6">
          {hasMDX && mdxSections?.code ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usage Examples</CardTitle>
                <CardDescription>
                  Complete usage documentation and examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <CodeBlock 
                    title="Installation"
                    description="Add the AccessMatrix component to your project"
                    code={`npm install @lightmind/ui

import { AccessMatrix } from '@lightmind/ui'`}
                  />
                  <CodeBlock 
                    title="Basic Usage"
                    description="Simple permission matrix example"
                    code={`const permissionData = {
  rows: [
    { id: 'admin', label: 'Admin', description: 'Administrator role' },
    { id: 'user', label: 'User', description: 'Regular user' }
  ],
  columns: [
    { id: 'read', label: 'Read', description: 'View content' },
    { id: 'write', label: 'Write', description: 'Edit content' }
  ],
  cells: {
    admin: { read: { value: 'allow' }, write: { value: 'allow' } },
    user: { read: { value: 'allow' }, write: { value: 'deny' } }
  }
}

<AccessMatrix 
  data={permissionData} 
  onCellChange={(rowId, columnId, newValue) => {
    console.log('Cell changed:', rowId, columnId, newValue)
  }}
/>`}
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Basic Usage</CardTitle>
                    <CardDescription>
                      Copy and paste the code below to get started
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyCode(component.codeExample)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{component.codeExample}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Variant Code Examples */}
          {component.variants && component.variants.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Variant Examples</CardTitle>
                <CardDescription>
                  Code examples for different variants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {component.variants.map((variant, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{variant.name}</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopyCode(variant.codeExample)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{variant.codeExample}</code>
                    </pre>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* API Tab */}
        <TabsContent value="api" className="space-y-6">
          {hasMDX && mdxSections?.api ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API Reference</CardTitle>
                <CardDescription>
                  Complete API documentation for this component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <PropsTable 
                    title="AccessMatrix Props"
                    description="All available props for the AccessMatrix component"
                    props={[
                      {
                        name: 'data',
                        type: 'AccessMatrixData',
                        description: 'The matrix data containing rows, columns, and cells',
                        required: true
                      },
                      {
                        name: 'permissions',
                        type: 'PermissionType[]',
                        description: 'Array of available permission types with icons and labels',
                        default: 'defaultPermissions'
                      },
                      {
                        name: 'onCellChange',
                        type: '(rowId: string, columnId: string, value: string) => void',
                        description: 'Callback fired when a cell value changes'
                      },
                      {
                        name: 'size',
                        type: '"xs" | "sm" | "default" | "lg" | "xl"',
                        description: 'Size of the matrix elements',
                        default: '"default"'
                      },
                      {
                        name: 'variant',
                        type: '"default" | "bordered" | "shadow" | "striped"',
                        description: 'Visual variant of the matrix',
                        default: '"default"'
                      },
                      {
                        name: 'displayMode',
                        type: '"icon" | "text" | "both"',
                        description: 'How permissions are displayed',
                        default: '"icon"'
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {component.apiDocumentation?.props && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Props</CardTitle>
                    <CardDescription>
                      Available props for this component
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {component.apiDocumentation.props.map((prop, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                                {prop.name}
                              </code>
                              {prop.required && (
                                <Badge variant="destructive" className="text-xs">
                                  required
                                </Badge>
                              )}
                            </div>
                            <code className="text-sm text-muted-foreground">
                              {prop.type}
                            </code>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {prop.description}
                          </p>
                          {prop.default && (
                            <p className="text-sm">
                              <span className="font-medium">Default:</span>{' '}
                              <code className="bg-muted px-1 py-0.5 rounded text-xs">
                                {prop.default}
                              </code>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {component.apiDocumentation?.methods && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Methods</CardTitle>
                <CardDescription>
                  Available methods for this component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {component.apiDocumentation.methods.map((method, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono mb-2 inline-block">
                        {method.signature}
                      </code>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Guidelines Tab */}
        <TabsContent value="guidelines" className="space-y-6">
          {hasMDX && mdxSections?.guidelines ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usage Guidelines</CardTitle>
                <CardDescription>
                  Best practices, accessibility, and design guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <UsageGuidelines 
                    dos={[
                      'Use clear, descriptive labels for rows and columns',
                      'Provide consistent permission types across the matrix',
                      'Consider responsive design for mobile devices',
                      'Use appropriate colors and icons for different permission states',
                      'Implement proper loading states for async operations',
                      'Add tooltips for complex permission descriptions'
                    ]}
                    donts={[
                      "Don't use too many permission types (keep it simple)",
                      "Don't forget to handle edge cases like empty data",
                      "Don't make the matrix too large without pagination",
                      "Don't use confusing or similar-looking icons",
                      "Don't ignore accessibility requirements",
                      "Don't hardcode permission values"
                    ]}
                    accessibility={[
                      'Matrix supports keyboard navigation with Tab and Arrow keys',
                      'All cells have proper ARIA labels and roles',
                      'Screen readers announce permission changes',
                      'Focus management works correctly with interactive elements',
                      'Color is not the only way to convey permission state',
                      'Proper semantic HTML structure with table elements'
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {component.usageGuidelines?.dos && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 dark:text-green-300">
                      ✓ Do's
                    </CardTitle>
                    <CardDescription>
                      Best practices for using this component
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {component.usageGuidelines.dos.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {component.usageGuidelines?.donts && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-700 dark:text-red-300">
                  ✗ Don'ts
                </CardTitle>
                <CardDescription>
                  Common mistakes to avoid
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {component.usageGuidelines.donts.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {component.usageGuidelines?.accessibility && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility</CardTitle>
                <CardDescription>
                  Guidelines for making this component accessible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {component.usageGuidelines.accessibility.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

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