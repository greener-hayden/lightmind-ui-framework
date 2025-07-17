'use client'

import { AccessMatrixSimpleDemo } from './demos/access-matrix-simple.demo'
import { AccessMatrixDemo } from './demos/access-matrix.demo'
import { AlertDemo } from './demos/alert.demo'
import { BadgeDemo } from './demos/badge.demo'
import { ButtonDemo } from './demos/button.demo'
import { CardDemo } from './demos/card.demo'
import { CheckboxDemo } from './demos/checkbox.demo'
import { DialogDemo } from './demos/dialog.demo'
import { InputDemo } from './demos/input.demo'
import { RadioGroupDemo } from './demos/radio-group.demo'
import { SelectDemo } from './demos/select.demo'
import { StatCardDemo } from './demos/stat-card.demo'
import { SwitchDemo } from './demos/switch.demo'
import { TextareaDemo } from './demos/textarea.demo'
import { TooltipDemo } from './demos/tooltip.demo'

// Registry of all preview components
const previewComponents = {
  'access-matrix-simple': AccessMatrixSimpleDemo,
  'access-matrix': AccessMatrixDemo,
  'alert': AlertDemo,
  'badge': BadgeDemo,
  'button': ButtonDemo,
  'card': CardDemo,
  'checkbox': CheckboxDemo,
  'dialog': DialogDemo,
  'input': InputDemo,
  'radio-group': RadioGroupDemo,
  'select': SelectDemo,
  'stat-card': StatCardDemo,
  'switch': SwitchDemo,
  'textarea': TextareaDemo,
  'tooltip': TooltipDemo,
} as const

interface PreviewComponentProps {
  name: string
  className?: string
}

export function PreviewComponent({ name, className }: PreviewComponentProps) {
  const Component = previewComponents[name as keyof typeof previewComponents]
  
  if (!Component) {
    return (
      <div className={`flex items-center justify-center p-8 text-muted-foreground ${className || ''}`}>
        <div className="text-center">
          <p className="text-sm">Preview not available</p>
          <p className="text-xs mt-1">Component: {name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Component />
    </div>
  )
}