'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface UsageExample {
  name: string
  description?: string
  component: React.ReactNode
  code?: string
  context?: string
  category?: 'common' | 'advanced' | 'edge-case'
}

interface UsageDemoProps {
  title?: string
  description?: string
  examples: UsageExample[]
  className?: string
  showCode?: boolean
  showCategories?: boolean
}

export function UsageDemo({
  title = "Usage Examples",
  description = "Real-world implementation patterns",
  examples,
  className,
  showCode = true,
  showCategories = true
}: UsageDemoProps) {
  const categorizedExamples = showCategories 
    ? examples.reduce((acc, example) => {
        const category = example.category || 'common'
        if (!acc[category]) acc[category] = []
        acc[category].push(example)
        return acc
      }, {} as Record<string, UsageExample[]>)
    : { all: examples }

  const categoryLabels = {
    common: "Common Usage",
    advanced: "Advanced Patterns",
    'edge-case': "Edge Cases"
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'advanced': return 'text-blue-600 bg-blue-50'
      case 'edge-case': return 'text-orange-600 bg-orange-50'
      default: return 'text-green-600 bg-green-50'
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(categorizedExamples).map(([category, categoryExamples]) => (
          <div key={category} className="space-y-4">
            {showCategories && category !== 'all' && (
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium text-foreground">
                  {categoryLabels[category as keyof typeof categoryLabels] || category}
                </h4>
                <div className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  getCategoryColor(category)
                )}>
                  {categoryExamples.length} example{categoryExamples.length !== 1 ? 's' : ''}
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {categoryExamples.map((example, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h5 className="text-sm font-medium text-foreground">
                        {example.name}
                      </h5>
                      {example.description && (
                        <p className="text-xs text-muted-foreground">
                          {example.description}
                        </p>
                      )}
                      {example.context && (
                        <p className="text-xs text-primary">
                          Context: {example.context}
                        </p>
                      )}
                    </div>
                    
                    {example.category && showCategories && (
                      <div className={cn(
                        "text-xs px-2 py-1 rounded",
                        getCategoryColor(example.category)
                      )}>
                        {example.category}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/20">
                    <div className="flex items-center justify-center">
                      {example.component}
                    </div>
                  </div>
                  
                  {showCode && example.code && (
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground">
                        Implementation:
                      </div>
                      <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-xs">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Usage Summary</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            {examples.map((example, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-background rounded">
                <div className="font-medium text-foreground">{example.name}</div>
                {example.category && (
                  <div className={cn(
                    "px-2 py-1 rounded text-xs",
                    getCategoryColor(example.category)
                  )}>
                    {example.category}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UsageDemo