import { ReactNode } from 'react'

export type ControlType = 'select' | 'switch' | 'slider' | 'input' | 'color' | 'multi-select'

export type UserRole = 'admin' | 'manager' | 'user' | 'guest' | string
export type PermissionLevel = 'read' | 'write' | 'admin' | 'none'

export interface UserPermissions {
  role: UserRole
  permissions: Record<string, PermissionLevel>
  canEditUsers?: UserRole[]
  canEditRoles?: UserRole[]
  restrictedControls?: string[]
}

export interface ConfirmationConfig {
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive'
  requiresConfirmation?: boolean
  confirmationMessage?: string
}

export interface ControlOption {
  value: any
  label: string
  description?: string
  disabled?: boolean
}

export interface ControlConfig {
  key: string
  label: string
  type: ControlType
  options?: ControlOption[]
  min?: number
  max?: number
  step?: number
  defaultValue?: any
  description?: string
  group?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

export interface ControlGroupConfig {
  name: string
  label: string
  description?: string
  controls: ControlConfig[]
  collapsible?: boolean
  defaultExpanded?: boolean
}

export type LayoutType = 'grid' | 'sections' | 'tabs' | 'stacked'

export interface DemoConfig {
  component: React.ComponentType<any>
  controls: ControlConfig[]
  layout?: LayoutType
  copyable?: boolean
  showCurrentSettings?: boolean
  generateCode?: (values: Record<string, any>) => string
  title?: string
  description?: string
  fullWidth?: boolean
  centered?: boolean
  minHeight?: string
}

export interface ControlProps {
  config: ControlConfig
  value: any
  onChange: (value: any) => void
  className?: string
}

export interface ControlGroupProps {
  config: ControlGroupConfig
  values: Record<string, any>
  onChange: (key: string, value: any) => void
  className?: string
}

export interface InteractiveDemoProps extends DemoConfig {
  className?: string
  children?: ReactNode
}

export interface DemoControlsProps {
  controls: ControlConfig[]
  values: Record<string, any>
  onChange: (key: string, value: any) => void
  layout?: LayoutType
  className?: string
}

export interface ControlState {
  [key: string]: any
}

export interface CodeGenerationOptions {
  componentName?: string
  indentSize?: number
  includeImports?: boolean
  wrapInJSX?: boolean
}