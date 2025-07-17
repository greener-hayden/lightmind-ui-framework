'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from '@lightmind/ui'
import { cn } from '@lightmind/ui/lib/utils'

interface PropDefinition {
  name: string
  type: string
  description: string
  required?: boolean
  default?: string
}

interface PropsTableProps {
  title?: string
  description?: string
  props: PropDefinition[]
  className?: string
}

export function PropsTable({
  title = "Props",
  description = "Available props for this component",
  props,
  className
}: PropsTableProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {props.map((prop, index) => (
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
  )
}

export default PropsTable