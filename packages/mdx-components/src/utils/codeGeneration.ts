import { ControlState, CodeGenerationOptions } from '../types'

export function generateComponentCode(
  componentName: string,
  values: ControlState,
  options: CodeGenerationOptions = {}
): string {
  const {
    indentSize = 2,
    includeImports = true,
    wrapInJSX = false
  } = options

  const indent = ' '.repeat(indentSize)
  
  // Filter out undefined and default values
  const filteredValues = Object.entries(values)
    .filter(([_, value]) => value !== undefined && value !== '' && value !== null)
    .reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {} as Record<string, any>)

  // Generate props string
  const propsString = Object.entries(filteredValues)
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return value ? key : `${key}={false}`
      }
      if (typeof value === 'string') {
        return `${key}="${value}"`
      }
      if (typeof value === 'number') {
        return `${key}={${value}}`
      }
      if (Array.isArray(value)) {
        return `${key}={${JSON.stringify(value)}}`
      }
      return `${key}={${JSON.stringify(value)}}`
    })
    .join(`\n${indent}`)

  // Generate component JSX
  const componentJSX = propsString.length > 0
    ? `<${componentName}\n${indent}${propsString}\n/>`
    : `<${componentName} />`

  // Generate imports if requested
  let imports = ''
  if (includeImports) {
    imports = `import { ${componentName} } from '@lightmind/ui'\n\n`
  }

  // Wrap in JSX if requested
  if (wrapInJSX) {
    return `${imports}export default function Example() {\n${indent}return (\n${indent}${indent}${componentJSX}\n${indent})\n}`
  }

  return `${imports}${componentJSX}`
}

export function generateCurrentSettingsText(values: ControlState): string {
  const filteredValues = Object.entries(values)
    .filter(([_, value]) => value !== undefined && value !== '' && value !== null)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' | ')

  return filteredValues || 'No settings configured'
}

export function formatValue(value: any): string {
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }
  if (typeof value === 'string') {
    return value
  }
  if (typeof value === 'number') {
    return value.toString()
  }
  if (Array.isArray(value)) {
    return value.join(', ')
  }
  return JSON.stringify(value)
}

export function getDefaultValues(controls: any[]): ControlState {
  return controls.reduce((acc, control) => {
    if (control.defaultValue !== undefined) {
      acc[control.key] = control.defaultValue
    }
    return acc
  }, {} as ControlState)
}

export function validateControlValues(controls: any[], values: ControlState): Record<string, string[]> {
  const errors: Record<string, string[]> = {}
  
  controls.forEach(control => {
    const value = values[control.key]
    const fieldErrors: string[] = []
    
    // Required validation
    if (control.required && (value === undefined || value === '' || value === null)) {
      fieldErrors.push(`${control.label} is required`)
    }
    
    // Min/max validation for numbers
    if (control.type === 'slider' && typeof value === 'number') {
      if (control.min !== undefined && value < control.min) {
        fieldErrors.push(`${control.label} must be at least ${control.min}`)
      }
      if (control.max !== undefined && value > control.max) {
        fieldErrors.push(`${control.label} must be at most ${control.max}`)
      }
    }
    
    // Options validation for select
    if (control.type === 'select' && control.options && value !== undefined) {
      const validOptions = control.options.map((opt: any) => opt.value)
      if (!validOptions.includes(value)) {
        fieldErrors.push(`${control.label} must be one of: ${validOptions.join(', ')}`)
      }
    }
    
    if (fieldErrors.length > 0) {
      errors[control.key] = fieldErrors
    }
  })
  
  return errors
}