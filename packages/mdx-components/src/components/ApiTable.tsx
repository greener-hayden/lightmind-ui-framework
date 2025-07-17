'use client'

import React from 'react'
import { PropsTable } from './PropsTable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@lightmind/ui/lib/utils'

interface ApiTableProps {
  title?: string
  description?: string
  props?: Array<{
    name: string
    type: string
    description: string
    required?: boolean
    default?: string
  }>
  methods?: Array<{
    name: string
    signature: string
    description: string
  }>
  className?: string
}

export function ApiTable({
  title = "API Reference",
  description = "Complete API documentation for this component",
  props = [],
  methods = [],
  className
}: ApiTableProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {props.length > 0 && (
        <PropsTable props={props} />
      )}
      
      {methods.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Methods</CardTitle>
            <CardDescription>
              Available methods for this component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {methods.map((method, index) => (
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
    </div>
  )
}

export default ApiTable