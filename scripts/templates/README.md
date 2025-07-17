# Component Template System

This directory contains templates for creating new components that align with shadcn/ui patterns and the Lightmind UI Framework standards.

## Available Templates

### 1. `component.template.tsx`
Basic component template with CVA variants, proper TypeScript types, and forwarding refs pattern.

### 2. `component-with-radix.template.tsx`
Template for components that use Radix UI primitives (like Popover, Dialog, etc.).

### 3. `form-component.template.tsx`
Template specifically for form components with proper input handling and validation states.

### 4. `demo.template.tsx`
Standard demo template that showcases:
- All component variants
- Different sizes
- Interactive states
- Common use cases

## Using the CLI Tool

The easiest way to create a new component is using the CLI tool:

```bash
# Basic usage
npm run add-component accordion

# With options
npm run add-component progress-bar --category feedback --description "Shows progress of an operation" --tags "progress,loading,status"

# Skip demo creation
npm run add-component internal-component --no-demo
```

## Manual Template Usage

If you need to create a component manually:

1. Copy the appropriate template
2. Replace placeholders:
   - `{{ComponentName}}` - PascalCase component name (e.g., `ProgressBar`)
   - `{{componentName}}` - camelCase component name (e.g., `progressBar`)
   - `{{DESCRIPTION}}` - Component description
   - `{{CATEGORY}}` - Component category (form, feedback, navigation, etc.)
   - `{{TAGS}}` - Comma-separated tags
   - `{{RADIX_COMPONENT}}` - Radix primitive name (for radix template)
   - Class placeholders for styling

## Component Guidelines

### 1. **Follow shadcn/ui Patterns**
- Use CVA for variants
- Implement proper TypeScript types
- Use forwardRef for DOM element access
- Keep styling flexible with className prop

### 2. **Component Structure**
```tsx
// 1. Imports
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

// 2. Variants definition
const componentVariants = cva(...)

// 3. TypeScript interface
export interface ComponentProps extends ... {}

// 4. Component implementation
const Component = React.forwardRef<...>(...)

// 5. Display name
Component.displayName = "Component"

// 6. Exports
export { Component, componentVariants }
```

### 3. **Documentation Header**
Every component must have a documentation header:
```tsx
/**
 * @component ComponentName
 * @description Clear description of what the component does
 * @category form|navigation|feedback|display|etc
 * @complexity simple|moderate|complex
 * @status stable|beta|experimental
 * @tags comma,separated,tags
 */
```

### 4. **Demo Best Practices**
- Show all variants and sizes
- Include interactive examples
- Demonstrate real-world use cases
- Add loading and disabled states where applicable
- Show component composition patterns

## Categories

- **form**: Input, Select, Checkbox, etc.
- **navigation**: Tabs, Breadcrumb, Navigation Menu
- **feedback**: Alert, Toast, Progress, Spinner
- **display**: Card, Badge, Avatar, Table
- **overlay**: Dialog, Popover, Tooltip, Dropdown
- **layout**: Container, Grid, Stack, Divider

## Adding Radix UI Dependencies

When creating a component that needs a Radix primitive:

```bash
# In the packages/ui directory
cd packages/ui
npm install @radix-ui/react-[primitive-name]
```

Common Radix primitives:
- `@radix-ui/react-dialog`
- `@radix-ui/react-popover`
- `@radix-ui/react-tooltip`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-accordion`
- `@radix-ui/react-tabs`

## Styling Guidelines

1. **Use Tailwind CSS classes**
2. **Follow the design system colors**:
   - `primary`, `secondary`, `destructive`
   - `background`, `foreground`
   - `muted`, `accent`
   - `border`, `ring`

3. **Consistent spacing**:
   - Use Tailwind spacing scale
   - Follow padding patterns from existing components

4. **Animation classes**:
   - Use `transition-colors` for hover states
   - Use Tailwind animation utilities
   - Keep animations subtle and fast

## Testing Your Component

After creating a component:

1. **Build the packages**: `npm run build`
2. **Check TypeScript**: No errors should appear
3. **Test in gallery**: Visit `http://localhost:3000/component/[your-component]`
4. **Test all variants**: Ensure all props work correctly
5. **Check accessibility**: Test with keyboard navigation

## Contributing

When adding new templates:
1. Follow the existing naming convention
2. Include all necessary placeholders
3. Add documentation in this README
4. Test the template with the CLI tool