'use client'

import { ButtonPreview } from './previews/button-preview'
import { CardPreview } from './previews/card-preview'
import { InputPreview } from './previews/input-preview'
import { DialogPreview } from './previews/dialog-preview'
import { TooltipPreview } from './previews/tooltip-preview'
import { DropdownMenuPreview } from './previews/dropdown-menu-preview'
import { PopoverPreview } from './previews/popover-preview'
import { AlertPreview } from './previews/alert-preview'
import { LabelPreview } from './previews/label-preview'
import { CheckboxPreview } from './previews/checkbox-preview'

// Registry of all preview components
const previewComponents = {
  ButtonPreview,
  CardPreview,
  InputPreview,
  DialogPreview,
  TooltipPreview,
  DropdownMenuPreview,
  PopoverPreview,
  AlertPreview,
  LabelPreview,
  CheckboxPreview,
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