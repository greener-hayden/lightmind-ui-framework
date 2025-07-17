'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@lightmind/ui'
import { cn } from '@lightmind/ui/lib/utils'
import { DemoControlsProps, ControlGroupConfig } from '../types'
import { Control } from './Control'
import { ControlGroup } from './ControlGroup'

export function DemoControls({ controls, values, onChange, layout = 'grid', className }: DemoControlsProps) {
  // Group controls by their group property
  const groupedControls = controls.reduce((acc, control) => {
    const groupName = control.group || 'default'
    if (!acc[groupName]) {
      acc[groupName] = []
    }
    acc[groupName].push(control)
    return acc
  }, {} as Record<string, typeof controls>)
  
  // Create control groups
  const controlGroups: ControlGroupConfig[] = Object.entries(groupedControls).map(([groupName, groupControls]) => ({
    name: groupName,
    label: groupName === 'default' ? 'Options' : groupName,
    controls: groupControls,
    collapsible: layout === 'sections',
    defaultExpanded: true
  }))
  
  const renderControls = () => {
    switch (layout) {
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {controls.map((control) => (
              <Control
                key={control.key}
                config={control}
                value={values[control.key] ?? control.defaultValue}
                onChange={(value) => onChange(control.key, value)}
                className={control.className}
              />
            ))}
          </div>
        )
      
      case 'sections':
        return (
          <div className="space-y-4">
            {controlGroups.map((group) => (
              <ControlGroup
                key={group.name}
                config={group}
                values={values}
                onChange={onChange}
              />
            ))}
          </div>
        )
      
      case 'tabs':
        if (controlGroups.length === 1) {
          // If only one group, render as grid
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {controls.map((control) => (
                <Control
                  key={control.key}
                  config={control}
                  value={values[control.key] ?? control.defaultValue}
                  onChange={(value) => onChange(control.key, value)}
                  className={control.className}
                />
              ))}
            </div>
          )
        }
        
        return (
          <Tabs defaultValue={controlGroups[0].name} className="w-full">
            <TabsList className="grid w-full grid-cols-auto">
              {controlGroups.map((group) => (
                <TabsTrigger key={group.name} value={group.name}>
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {controlGroups.map((group) => (
              <TabsContent key={group.name} value={group.name} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.controls.map((control) => (
                    <Control
                      key={control.key}
                      config={control}
                      value={values[control.key] ?? control.defaultValue}
                      onChange={(value) => onChange(control.key, value)}
                      className={control.className}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )
      
      case 'stacked':
        return (
          <div className="space-y-4">
            {controls.map((control) => (
              <Control
                key={control.key}
                config={control}
                value={values[control.key] ?? control.defaultValue}
                onChange={(value) => onChange(control.key, value)}
                className={control.className}
              />
            ))}
          </div>
        )
      
      default:
        return null
    }
  }
  
  return (
    <div className={cn("w-full", className)}>
      {renderControls()}
    </div>
  )
}

export default DemoControls