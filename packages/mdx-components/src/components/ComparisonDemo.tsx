'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '../utils/cn'

interface ComparisonDemoProps {
  title?: string
  description?: string
  comparisons: {
    name: string
    description: string
    component: React.ReactNode
    code?: string
  }[]
  className?: string
}

export function ComparisonDemo({
  title = "Comparison Examples",
  description = "Side-by-side comparisons of different options",
  comparisons,
  className
}: ComparisonDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {comparisons.map((comparison, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
              {comparison.component}
            </div>
            <div className="text-center">
              <h4 className="font-medium">{comparison.name}</h4>
              <p className="text-sm text-muted-foreground">{comparison.description}</p>
            </div>
            {comparison.code && (
              <div className="mt-2">
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                  <code>{comparison.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default ComparisonDemo