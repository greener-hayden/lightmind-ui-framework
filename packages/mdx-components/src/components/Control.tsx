'use client'

import React from 'react'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  Switch,
  Input,
  Slider,
  Label
} from '@lightmind/ui'
import { cn } from '@lightmind/ui/lib/utils'
import { ControlProps } from '../types'

export function Control({ config, value, onChange, className }: ControlProps) {
  const { type, label, options, min, max, step, placeholder, disabled, description } = config
  
  const controlId = `control-${config.key}`
  
  const renderControl = () => {
    switch (type) {
      case 'select':
        return (
          <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map(option => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      
      case 'multi-select':
        // For now, implement as a simple select - can be enhanced later
        return (
          <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder || "Select options..."} />
            </SelectTrigger>
            <SelectContent>
              {options?.map(option => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      
      case 'switch':
        return (
          <div className="flex items-center space-x-2">
            <Switch 
              id={controlId}
              checked={value}
              onCheckedChange={onChange}
              disabled={disabled}
            />
            <Label htmlFor={controlId} className="text-sm font-medium">
              {label}
            </Label>
          </div>
        )
      
      case 'slider':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={controlId} className="text-sm font-medium">
                {label}
              </Label>
              <span className="text-sm text-muted-foreground">
                {value}
              </span>
            </div>
            <Slider
              id={controlId}
              value={[value]}
              onValueChange={(values) => onChange(values[0])}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              className="w-full"
            />
          </div>
        )
      
      case 'input':
        return (
          <Input
            id={controlId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
          />
        )
      
      case 'color':
        return (
          <div className="flex items-center space-x-2">
            <input
              id={controlId}
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              className="w-10 h-10 rounded border border-input"
            />
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className="font-mono text-sm"
            />
          </div>
        )
      
      default:
        return null
    }
  }
  
  if (type === 'switch') {
    return (
      <div className={cn("space-y-2", className)}>
        {renderControl()}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    )
  }
  
  return (
    <div className={cn("space-y-2", className)}>
      {type === 'select' || type === 'input' || type === 'color' || type === 'slider' || type === 'multi-select' ? (
        <Label htmlFor={controlId} className="text-sm font-medium">
          {label}
        </Label>
      ) : null}
      {renderControl()}
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

export default Control