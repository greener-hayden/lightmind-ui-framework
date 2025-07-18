'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface Control {
  name: string
  type: 'toggle' | 'select' | 'button'
  options?: string[]
  value?: any
  onChange?: (value: any) => void
}

interface InteractiveDemoProps {
  title?: string
  description?: string
  className?: string
  controls?: Control[]
  children: (controlValues: Record<string, any>) => React.ReactNode
  centered?: boolean
  minHeight?: string
}

export function InteractiveDemo({
  title = "Interactive Demo",
  description = "Play with different configurations",
  className,
  controls = [],
  children,
  centered = true,
  minHeight = "200px"
}: InteractiveDemoProps) {
  const [controlValues, setControlValues] = useState<Record<string, any>>(() => {
    const initialValues: Record<string, any> = {}
    controls.forEach(control => {
      if (control.type === 'toggle') {
        initialValues[control.name] = control.value || false
      } else if (control.type === 'select') {
        initialValues[control.name] = control.value || control.options?.[0] || ''
      } else if (control.type === 'button') {
        initialValues[control.name] = control.value || false
      }
    })
    return initialValues
  })

  const handleControlChange = (controlName: string, value: any) => {
    setControlValues(prev => ({ ...prev, [controlName]: value }))
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {controls.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 bg-muted/30 rounded-lg">
            {controls.map((control, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm font-medium">{control.name}:</span>
                {control.type === 'toggle' && (
                  <Button
                    variant={controlValues[control.name] ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleControlChange(control.name, !controlValues[control.name])}
                  >
                    {controlValues[control.name] ? 'ON' : 'OFF'}
                  </Button>
                )}
                {control.type === 'select' && (
                  <div className="flex gap-1">
                    {control.options?.map((option, optIndex) => (
                      <Button
                        key={optIndex}
                        variant={controlValues[control.name] === option ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handleControlChange(control.name, option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
                {control.type === 'button' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleControlChange(control.name, !controlValues[control.name])
                      control.onChange?.(controlValues[control.name])
                    }}
                  >
                    {control.name}
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div
          className={cn(
            "rounded-lg bg-muted/20 border-2 border-dashed border-muted-foreground/20",
            centered && "flex items-center justify-center"
          )}
          style={{ minHeight }}
        >
          {children(controlValues)}
        </div>
      </CardContent>
    </Card>
  )
}

export default InteractiveDemo