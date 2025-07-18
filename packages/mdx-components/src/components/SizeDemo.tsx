'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '../utils/cn'

interface SizeDemoProps {
  title?: string
  description?: string
  sizes: {
    name: string
    description: string
    component: React.ReactNode
    code?: string
  }[]
  className?: string
}

export function SizeDemo({
  title = "Size Variants",
  description = "Different sizes for various use cases",
  sizes,
  className
}: SizeDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {sizes.map((size, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
              {size.component}
            </div>
            <div className="text-center">
              <h4 className="font-medium">{size.name}</h4>
              <p className="text-sm text-muted-foreground">{size.description}</p>
            </div>
            {size.code && (
              <div className="mt-2">
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                  <code>{size.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default SizeDemo