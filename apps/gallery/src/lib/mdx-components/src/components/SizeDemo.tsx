'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface SizeVariant {
  name: string
  description?: string
  component: React.ReactNode
}

interface SizeDemoProps {
  title?: string
  description?: string
  sizes: SizeVariant[]
  className?: string
  layout?: 'horizontal' | 'vertical'
  aligned?: boolean
}

export function SizeDemo({
  title = "Size Variations",
  description = "Different size options available",
  sizes,
  className,
  layout = 'horizontal',
  aligned = true
}: SizeDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-6 bg-muted/20 rounded-lg">
          <div
            className={cn(
              "gap-4",
              layout === 'horizontal' 
                ? "flex flex-wrap items-center" 
                : "flex flex-col items-start space-y-4",
              aligned && layout === 'horizontal' && "items-center"
            )}
          >
            {sizes.map((size, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center gap-2",
                  layout === 'horizontal' ? "text-center" : "text-left"
                )}
              >
                <div className="flex items-center justify-center">
                  {size.component}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">{size.name}</div>
                  {size.description && (
                    <div className="text-xs opacity-75">{size.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-muted/30 rounded"
            >
              <div className="font-medium text-foreground">{size.name}</div>
              {size.description && (
                <div className="text-muted-foreground">{size.description}</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SizeDemo