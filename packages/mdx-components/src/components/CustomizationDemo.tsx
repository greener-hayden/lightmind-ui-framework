'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '../utils/cn'

interface CustomizationDemoProps {
  title?: string
  description?: string
  customizations: {
    name: string
    description: string
    component: React.ReactNode
    code?: string
  }[]
  className?: string
}

export function CustomizationDemo({
  title = "Customization Examples",
  description = "Different ways to customize the component",
  customizations,
  className
}: CustomizationDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {customizations.map((customization, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
              {customization.component}
            </div>
            <div className="text-center">
              <h4 className="font-medium">{customization.name}</h4>
              <p className="text-sm text-muted-foreground">{customization.description}</p>
            </div>
            {customization.code && (
              <div className="mt-2">
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                  <code>{customization.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default CustomizationDemo