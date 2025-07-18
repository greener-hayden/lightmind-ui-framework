'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '../utils/cn'

interface UsageDemoProps {
  title?: string
  description?: string
  examples: {
    name: string
    description: string
    component: React.ReactNode
    code?: string
  }[]
  className?: string
}

export function UsageDemo({
  title = "Usage Examples",
  description = "Common usage patterns and examples",
  examples,
  className
}: UsageDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {examples.map((example, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
              {example.component}
            </div>
            <div className="text-center">
              <h4 className="font-medium">{example.name}</h4>
              <p className="text-sm text-muted-foreground">{example.description}</p>
            </div>
            {example.code && (
              <div className="mt-2">
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default UsageDemo