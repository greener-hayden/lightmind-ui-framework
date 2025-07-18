'use client'

import React, { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Badge, Separator } from '@lightmind/ui'
import { Copy, Check } from 'lucide-react'
import { cn } from '../utils/cn'
import { InteractiveDemoProps, ControlState } from '../types'
import { DemoControls } from './DemoControls'
import { generateComponentCode, generateCurrentSettingsText, getDefaultValues } from '../utils/codeGeneration'

export function InteractiveDemo({
  component: Component,
  controls,
  layout = 'grid',
  copyable = true,
  showCurrentSettings = true,
  generateCode,
  title = 'Interactive Demo',
  description = 'Customize the component using the controls below',
  fullWidth = false,
  centered = true,
  minHeight = '200px',
  className,
  children
}: InteractiveDemoProps) {
  const [values, setValues] = useState<ControlState>(() => getDefaultValues(controls))
  const [copied, setCopied] = useState(false)
  
  const handleControlChange = useCallback((key: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }))
  }, [])
  
  const handleCopyCode = useCallback(async () => {
    try {
      let code: string
      if (generateCode) {
        code = generateCode(values)
      } else {
        // Try to infer component name from the component function
        const componentName = Component.displayName || Component.name || 'Component'
        code = generateComponentCode(componentName, values, {
          includeImports: true,
          wrapInJSX: false
        })
      }
      
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }, [values, generateCode, Component])
  
  const currentSettingsText = showCurrentSettings ? generateCurrentSettingsText(values) : ''
  
  return (
    <div className={cn('w-full space-y-6', className)}>
      {/* Live Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              'rounded-lg bg-muted/30 p-8',
              centered && 'flex items-center justify-center',
              fullWidth && 'w-full'
            )}
            style={{ minHeight }}
          >
            {children ? (
              children
            ) : (
              <Component {...values} />
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customization Options</CardTitle>
          <CardDescription>
            Adjust the settings below to customize the component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DemoControls
            controls={controls}
            values={values}
            onChange={handleControlChange}
            layout={layout}
          />
          
          {(showCurrentSettings || copyable) && (
            <>
              <Separator className="my-6" />
              
              <div className="flex items-center justify-between">
                {showCurrentSettings && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Current Settings:</Badge>
                    <span className="text-sm text-muted-foreground">
                      {currentSettingsText}
                    </span>
                  </div>
                )}
                
                {copyable && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="gap-2"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default InteractiveDemo