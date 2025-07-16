'use client'

import { AccessMatrixDemo } from './demos/access-matrix.demo'
import { StatCardDemo } from './demos/stat-card.demo'

// Legacy preview imports - will be phased out
import { ButtonPreview, ButtonIconPreview, ButtonLoadingPreview } from './previews/button-preview'
import { CardPreview } from './previews/card-preview'
import { BadgePreview, BadgeVariantsPreview } from './previews/badge-preview'
import { InputPreview } from './previews/input-preview'
import { DialogPreview } from './previews/dialog-preview'
import { TooltipPreview } from './previews/tooltip-preview'
import { DropdownMenuPreview } from './previews/dropdown-menu-preview'
import { PopoverPreview } from './previews/popover-preview'
import { AlertPreview } from './previews/alert-preview'
import { LabelPreview } from './previews/label-preview'
import { CheckboxPreview, CheckboxVariantsPreview } from './previews/checkbox-preview'
import { RadioGroupPreview, RadioGroupVariantsPreview } from './previews/radio-group-preview'
import { SelectPreview, SelectVariantsPreview } from './previews/select-preview'
import { TextareaPreview, TextareaVariantsPreview } from './previews/textarea-preview'
import { SwitchPreview, SwitchVariantsPreview } from './previews/switch-preview'
import { 
  TablePreview, 
  TableVariantsPreview, 
  TableSizesPreview, 
  TableSortablePreview, 
  TableUsersPreview, 
  TableInvoicesPreview, 
  TableAnalyticsPreview, 
  TableResponsivePreview,
  TableSelectablePreview,
  TableFilterablePreview,
  TablePaginatedPreview
} from './previews/table-preview'

// Registry of all preview components
const previewComponents = {
  'access-matrix': AccessMatrixDemo,
  'stat-card': StatCardDemo,
  // Component previews mapped by component id
  'button': ButtonPreview,
  'card': CardPreview,
  'input': InputPreview,
  'dialog': DialogPreview,
  'tooltip': TooltipPreview,
  'dropdown-menu': DropdownMenuPreview,
  'popover': PopoverPreview,
  'alert': AlertPreview,
  'label': LabelPreview,
  'checkbox': CheckboxPreview,
  'radio-group': RadioGroupPreview,
  'select': SelectPreview,
  'textarea': TextareaPreview,
  'switch': SwitchPreview,
  'table': TablePreview,
  'badge': BadgePreview,
  // Variant previews
  ButtonPreview,
  ButtonIconPreview,
  ButtonLoadingPreview,
  CardPreview,
  InputPreview,
  DialogPreview,
  TooltipPreview,
  DropdownMenuPreview,
  PopoverPreview,
  AlertPreview,
  LabelPreview,
  CheckboxPreview,
  CheckboxVariantsPreview,
  RadioGroupPreview,
  RadioGroupVariantsPreview,
  SelectPreview,
  SelectVariantsPreview,
  TextareaPreview,
  TextareaVariantsPreview,
  SwitchPreview,
  SwitchVariantsPreview,
  TablePreview,
  TableVariantsPreview,
  TableSizesPreview,
  TableSortablePreview,
  TableUsersPreview,
  TableInvoicesPreview,
  TableAnalyticsPreview,
  TableResponsivePreview,
  TableSelectablePreview,
  TableFilterablePreview,
  TablePaginatedPreview,
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
