# LightMind UI Component Development Guide

## Overview

This guide explains how to create and maintain components in the LightMind UI framework, which is built on top of shadcn/ui foundations.

## Quick Start

### Adding a New Component

Use our CLI tool to quickly scaffold a new component:

```bash
# Basic component
npm run add-component button-group

# Component with category and tags
npm run add-component progress-bar --category feedback --tags "progress,loading,status"

# Radix-based component (like accordion, dialog, etc.)
npm run add-component accordion --template radix --radix accordion

# Form component
npm run add-component search-input --template form --category form
```

### Component Structure

Each component consists of:

1. **Component file**: `packages/ui/src/components/[component-name].tsx`
2. **Demo file**: `apps/gallery/src/components/demos/[component-name].demo.tsx`
3. **Registry entries**: Automatically updated in preview-registry.tsx

## Component Templates

### Basic Component Template

Perfect for simple components like buttons, badges, cards:

- Uses `class-variance-authority` (CVA) for variants
- Includes TypeScript interfaces
- Supports `asChild` pattern with Radix Slot
- Forward refs for proper component composition

### Radix Component Template

For components that wrap Radix UI primitives:

- Pre-configured Radix imports
- Proper component composition patterns
- Accessibility built-in
- Customizable with CVA variants

### Form Component Template

Specialized for form inputs:

- Integrated with form context
- Error state handling
- Label association
- Validation support

## Component Conventions

### 1. File Naming

- Component files: `kebab-case.tsx` (e.g., `button-group.tsx`)
- Demo files: `kebab-case.demo.tsx` (e.g., `button-group.demo.tsx`)
- Export name: `PascalCase` (e.g., `ButtonGroup`)

### 2. Component Header

Every component must include a documentation header:

```typescript
/**
 * @component ComponentName
 * @description Brief description of what the component does
 * @category form|display|navigation|feedback|layout
 * @complexity simple|moderate|complex
 * @status stable|beta|experimental
 * @tags comma,separated,tags
 */
```

### 3. Styling

- Use Tailwind CSS classes
- Leverage CSS variables for theming
- Use `cn()` utility for class merging
- Follow shadcn's styling patterns

### 4. Variants

Use CVA for component variants:

```typescript
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        sm: "size-sm-classes",
        md: "size-md-classes",
        lg: "size-lg-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)
```

### 5. Props Interface

Always define a clear props interface:

```typescript
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
  // Additional props...
}
```

## Demo Guidelines

### Structure

1. **Import Section**: Import the component and any required icons/utilities
2. **Main Demo**: Show the most common use case first
3. **Variants Section**: Display all variant options
4. **Sizes Section**: Show different size options
5. **States Section**: Interactive states (loading, disabled, etc.)
6. **Advanced Examples**: Complex use cases and combinations

### Best Practices

- Keep demos focused and clear
- Include realistic content
- Show both light and dark mode compatibility
- Add interactive states where applicable
- Include accessibility considerations

## Updating shadcn Components

When shadcn/ui releases updates:

1. Check their changelog for component updates
2. Compare with our implementation
3. Update base styles if needed
4. Maintain our custom variants and features
5. Test thoroughly in both themes

## Testing Components

Before marking a component as stable:

1. Test all variants and sizes
2. Verify dark mode compatibility
3. Check responsive behavior
4. Test keyboard navigation
5. Verify accessibility (ARIA attributes)
6. Test with different content lengths

## Component Categories

- **form**: Input, Select, Checkbox, Radio, Switch, etc.
- **display**: Card, Badge, Avatar, Alert, etc.
- **navigation**: Tabs, Breadcrumb, Navigation Menu, etc.
- **feedback**: Toast, Progress, Spinner, etc.
- **layout**: Container, Grid, Separator, etc.

## Maintaining Consistency

1. Always use the CLI tool to create new components
2. Follow the established patterns in existing components
3. Keep the demo comprehensive but focused
4. Update documentation when adding new features
5. Tag components appropriately for searchability

## Contributing

When contributing new components:

1. Use `npm run add-component [name]` to start
2. Implement the component following our patterns
3. Create comprehensive demos
4. Test in the gallery application
5. Submit PR with screenshots of the component

---

For more details, check the `/scripts/templates/` directory for the actual templates used by the CLI tool.