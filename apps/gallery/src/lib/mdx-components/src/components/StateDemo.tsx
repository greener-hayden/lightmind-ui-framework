'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface StateVariant {
  name: string
  description?: string
  component: React.ReactNode
  interactive?: boolean
  duration?: number
}

interface StateDemoProps {
  title?: string
  description?: string
  states: StateVariant[]
  className?: string
  layout?: 'grid' | 'flex'
  showLabels?: boolean
}

export function StateDemo({
  title = "Component States",
  description = "Different states and conditions",
  states,
  className,
  layout = 'flex',
  showLabels = true
}: StateDemoProps) {
  const [activeStates, setActiveStates] = useState<Record<number, boolean>>({})

  const handleInteractiveState = (index: number, state: StateVariant) => {
    if (!state.interactive) return

    setActiveStates(prev => ({ ...prev, [index]: true }))
    
    if (state.duration) {
      setTimeout(() => {
        setActiveStates(prev => ({ ...prev, [index]: false }))
      }, state.duration)
    }
  }

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
              layout === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "flex flex-wrap items-center justify-center"
            )}
          >
            {states.map((state, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center gap-2 p-3 rounded-lg",
                  "border border-dashed border-muted-foreground/20",
                  "hover:bg-muted/30 transition-colors",
                  state.interactive && "cursor-pointer"
                )}
                onClick={() => handleInteractiveState(index, state)}
              >
                <div className="flex items-center justify-center">
                  {state.interactive && activeStates[index] ? (
                    <div className="opacity-50">
                      {state.component}
                    </div>
                  ) : (
                    state.component
                  )}
                </div>
                
                {showLabels && (
                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground">
                      {state.name}
                    </div>
                    {state.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {state.description}
                      </div>
                    )}
                    {state.interactive && (
                      <div className="text-xs text-primary mt-1">
                        Click to trigger
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {showLabels && (
          <div className="mt-4 text-sm text-muted-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {states.map((state, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-muted/30 rounded"
                >
                  <div className="font-medium text-foreground">{state.name}</div>
                  {state.description && (
                    <div className="text-muted-foreground">- {state.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StateDemo