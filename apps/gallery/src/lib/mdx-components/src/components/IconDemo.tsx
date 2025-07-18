'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface IconVariant {
  name: string
  description?: string
  component: React.ReactNode
  position?: 'left' | 'right' | 'only'
}

interface IconDemoProps {
  title?: string
  description?: string
  icons: IconVariant[]
  className?: string
  layout?: 'grid' | 'flex'
  showPositions?: boolean
}

export function IconDemo({
  title = "Icon Combinations",
  description = "Components with different icon placements",
  icons,
  className,
  layout = 'flex',
  showPositions = true
}: IconDemoProps) {
  const groupedIcons = showPositions 
    ? icons.reduce((acc, icon) => {
        const position = icon.position || 'left'
        if (!acc[position]) acc[position] = []
        acc[position].push(icon)
        return acc
      }, {} as Record<string, IconVariant[]>)
    : { all: icons }

  const positionLabels = {
    left: "Left Icons",
    right: "Right Icons", 
    only: "Icon Only"
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(groupedIcons).map(([position, positionIcons]) => (
          <div key={position} className="space-y-3">
            {showPositions && position !== 'all' && (
              <h4 className="text-sm font-medium text-muted-foreground">
                {positionLabels[position as keyof typeof positionLabels] || position}
              </h4>
            )}
            
            <div className="p-4 bg-muted/20 rounded-lg">
              <div
                className={cn(
                  "gap-3",
                  layout === 'grid' 
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                    : "flex flex-wrap items-center"
                )}
              >
                {positionIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-2 rounded border border-dashed border-muted-foreground/20"
                  >
                    <div className="flex items-center justify-center">
                      {icon.component}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground">
                        {icon.name}
                      </div>
                      {icon.description && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {icon.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-sm text-muted-foreground">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 bg-muted/30 rounded"
              >
                <div className="font-medium text-foreground">{icon.name}</div>
                {icon.position && (
                  <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {icon.position}
                  </div>
                )}
                {icon.description && (
                  <div className="text-muted-foreground">- {icon.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default IconDemo