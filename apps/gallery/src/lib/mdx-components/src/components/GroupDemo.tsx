'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface Group {
  name: string
  description?: string
  components: React.ReactNode
  layout?: 'horizontal' | 'vertical'
  spacing?: 'tight' | 'normal' | 'loose'
  alignment?: 'left' | 'center' | 'right'
}

interface GroupDemoProps {
  title?: string
  description?: string
  groups: Group[]
  className?: string
  showLabels?: boolean
}

export function GroupDemo({
  title = "Component Groups",
  description = "Common grouping patterns and layouts",
  groups,
  className,
  showLabels = true
}: GroupDemoProps) {
  const getSpacingClass = (spacing: string = 'normal') => {
    switch (spacing) {
      case 'tight': return 'gap-1'
      case 'loose': return 'gap-6'
      default: return 'gap-2'
    }
  }

  const getAlignmentClass = (alignment: string = 'center') => {
    switch (alignment) {
      case 'left': return 'justify-start'
      case 'right': return 'justify-end'
      default: return 'justify-center'
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {groups.map((group, index) => (
          <div key={index} className="space-y-3">
            {showLabels && (
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">
                  {group.name}
                </h4>
                {group.description && (
                  <p className="text-xs text-muted-foreground">
                    {group.description}
                  </p>
                )}
              </div>
            )}
            
            <div className="p-4 bg-muted/20 rounded-lg">
              <div
                className={cn(
                  "flex",
                  group.layout === 'vertical' ? "flex-col" : "flex-row",
                  getSpacingClass(group.spacing),
                  getAlignmentClass(group.alignment)
                )}
              >
                {group.components}
              </div>
            </div>
            
            {showLabels && (
              <div className="text-xs text-muted-foreground flex gap-4">
                <span>Layout: <span className="font-medium">{group.layout || 'horizontal'}</span></span>
                <span>Spacing: <span className="font-medium">{group.spacing || 'normal'}</span></span>
                <span>Alignment: <span className="font-medium">{group.alignment || 'center'}</span></span>
              </div>
            )}
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Group Patterns</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {groups.map((group, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="font-medium text-foreground">{group.name}</div>
                <div className="text-muted-foreground">
                  {group.layout || 'horizontal'} • {group.spacing || 'normal'} • {group.alignment || 'center'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default GroupDemo