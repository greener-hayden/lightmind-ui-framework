'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@lightmind/ui/lib/utils'
import { ControlGroupProps } from '../types'
import { Control } from './Control'

export function ControlGroup({ config, values, onChange, className }: ControlGroupProps) {
  const [isExpanded, setIsExpanded] = useState(config.defaultExpanded ?? true)
  
  const toggleExpanded = () => {
    if (config.collapsible) {
      setIsExpanded(!isExpanded)
    }
  }
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader 
        className={cn(
          "pb-3",
          config.collapsible && "cursor-pointer hover:bg-muted/50 transition-colors"
        )}
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">{config.label}</CardTitle>
            {config.description && (
              <CardDescription className="text-sm">
                {config.description}
              </CardDescription>
            )}
          </div>
          {config.collapsible && (
            <div className="flex items-center">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.controls.map((control) => (
              <Control
                key={control.key}
                config={control}
                value={values[control.key] ?? control.defaultValue}
                onChange={(value) => onChange(control.key, value)}
                className={control.className}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default ControlGroup