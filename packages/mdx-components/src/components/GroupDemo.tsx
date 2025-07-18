'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '../utils/cn'

interface GroupDemoProps {
  title?: string
  description?: string
  groups: {
    name: string
    description: string
    component: React.ReactNode
    code?: string
  }[]
  className?: string
}

export function GroupDemo({
  title = "Group Variants",
  description = "Different grouping configurations",
  groups,
  className
}: GroupDemoProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {groups.map((group, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
              {group.component}
            </div>
            <div className="text-center">
              <h4 className="font-medium">{group.name}</h4>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
            {group.code && (
              <div className="mt-2">
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                  <code>{group.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default GroupDemo