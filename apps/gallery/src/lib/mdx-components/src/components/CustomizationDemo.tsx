'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface CustomizationOption {
  name: string
  type: 'color' | 'size' | 'style' | 'boolean'
  options?: string[]
  value?: any
  cssVar?: string
  className?: string
}

interface CustomizationExample {
  name: string
  description?: string
  options: CustomizationOption[]
  renderComponent: (values: Record<string, any>) => React.ReactNode
  code?: (values: Record<string, any>) => string
}

interface CustomizationDemoProps {
  title?: string
  description?: string
  examples: CustomizationExample[]
  className?: string
  showCode?: boolean
}

export function CustomizationDemo({
  title = "Customization Options",
  description = "Explore theming and styling possibilities",
  examples,
  className,
  showCode = true
}: CustomizationDemoProps) {
  const [customizations, setCustomizations] = useState<Record<string, Record<string, any>>>(() => {
    const initial: Record<string, Record<string, any>> = {}
    examples.forEach((example, index) => {
      initial[index] = {}
      example.options.forEach(option => {
        if (option.type === 'boolean') {
          initial[index][option.name] = option.value || false
        } else if (option.type === 'color' || option.type === 'size' || option.type === 'style') {
          initial[index][option.name] = option.value || option.options?.[0] || ''
        }
      })
    })
    return initial
  })

  const handleCustomizationChange = (exampleIndex: number, optionName: string, value: any) => {
    setCustomizations(prev => ({
      ...prev,
      [exampleIndex]: {
        ...prev[exampleIndex],
        [optionName]: value
      }
    }))
  }

  const resetCustomizations = (exampleIndex: number) => {
    const example = examples[exampleIndex]
    const reset: Record<string, any> = {}
    example.options.forEach(option => {
      if (option.type === 'boolean') {
        reset[option.name] = false
      } else {
        reset[option.name] = option.options?.[0] || ''
      }
    })
    setCustomizations(prev => ({
      ...prev,
      [exampleIndex]: reset
    }))
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {examples.map((example, exampleIndex) => (
          <div key={exampleIndex} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {example.name}
                </h4>
                {example.description && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {example.description}
                  </p>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => resetCustomizations(exampleIndex)}
              >
                Reset
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {example.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="space-y-2">
                      <label className="text-xs font-medium text-foreground">
                        {option.name}
                      </label>
                      
                      {option.type === 'boolean' && (
                        <Button
                          variant={customizations[exampleIndex][option.name] ? 'default' : 'outline'}
                          size="sm"
                          className="w-full"
                          onClick={() => handleCustomizationChange(
                            exampleIndex, 
                            option.name, 
                            !customizations[exampleIndex][option.name]
                          )}
                        >
                          {customizations[exampleIndex][option.name] ? 'ON' : 'OFF'}
                        </Button>
                      )}
                      
                      {(option.type === 'color' || option.type === 'size' || option.type === 'style') && (
                        <div className="flex flex-wrap gap-1">
                          {option.options?.map((optionValue, valueIndex) => (
                            <Button
                              key={valueIndex}
                              variant={customizations[exampleIndex][option.name] === optionValue ? 'default' : 'outline'}
                              size="sm"
                              className="text-xs"
                              onClick={() => handleCustomizationChange(exampleIndex, option.name, optionValue)}
                            >
                              {optionValue}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/20">
                <div className="flex items-center justify-center">
                  {example.renderComponent(customizations[exampleIndex])}
                </div>
              </div>
              
              {showCode && example.code && (
                <div className="space-y-2">
                  <div className="text-xs font-medium text-muted-foreground">
                    Generated Code:
                  </div>
                  <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-xs">
                    <code>{example.code(customizations[exampleIndex])}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Customization Summary</h4>
          <div className="space-y-2">
            {examples.map((example, index) => (
              <div key={index} className="text-xs">
                <div className="font-medium text-foreground">{example.name}</div>
                <div className="text-muted-foreground pl-2">
                  {example.options.map(option => option.name).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomizationDemo