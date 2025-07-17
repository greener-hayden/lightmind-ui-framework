'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RelatedComponent {
  id: string
  name: string
  description: string
  href?: string
}

interface RelatedComponentsProps {
  title?: string
  description?: string
  components: RelatedComponent[]
  className?: string
}

export function RelatedComponents({
  title = "Related Components",
  description = "Components that work well together",
  components,
  className
}: RelatedComponentsProps) {
  if (components.length === 0) return null

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((component) => (
            <div
              key={component.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-1">
                <h4 className="font-medium">{component.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {component.description}
                </p>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <a href={component.href || `/component/${component.id}`}>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RelatedComponents