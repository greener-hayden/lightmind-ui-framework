# LightMind UI Framework Architecture

## Overview

LightMind UI is a modern component library built on top of shadcn/ui foundations. It provides a consistent, themeable, and extensible set of React components while maintaining compatibility with shadcn's design philosophy.

## Project Structure

```
lightmind-ui-framework/
├── apps/
│   └── gallery/                 # Component showcase application
│       ├── src/
│       │   ├── app/            # Next.js app directory
│       │   ├── components/
│       │   │   ├── demos/      # Component demonstrations
│       │   │   └── ui/         # Gallery-specific UI components
│       │   └── lib/            # Utilities and helpers
│       └── registry/           # Component registry for export
├── packages/
│   └── ui/                     # Core UI component library
│       └── src/
│           ├── components/     # All UI components
│           └── lib/           # Shared utilities
├── registry/                   # shadcn-compatible registry
│   ├── default/               # Default theme components
│   └── ui/                    # Component definitions
└── scripts/                   # Build and development scripts
    ├── templates/             # Component templates
    └── add-component.cjs      # CLI for adding components
```

## Key Design Decisions

### 1. Monorepo Structure
- **Separation of Concerns**: UI library (`packages/ui`) is separate from the showcase app (`apps/gallery`)
- **Scalability**: Easy to add more apps or packages
- **Shared Dependencies**: Consistent versions across the project

### 2. shadcn Compatibility
- **Component Structure**: Follows shadcn's patterns for easy updates
- **Styling Approach**: Uses Tailwind CSS with CSS variables for theming
- **Registry System**: Maintains compatibility with shadcn's component registry

### 3. Component Development Workflow

#### Adding New Components
```bash
npm run add-component [component-name] [options]
```

This command:
1. Creates component file in `packages/ui/src/components/`
2. Creates demo file in `apps/gallery/src/components/demos/`
3. Updates exports and registries automatically
4. Ensures consistent structure and documentation

#### Component Templates
- **Basic**: Standard components (buttons, cards, badges)
- **Radix**: Components using Radix UI primitives
- **Form**: Specialized form input components

### 4. Styling Architecture

#### CSS Variables
Defined in `globals.css` for consistent theming:
- Colors: `--primary`, `--secondary`, `--destructive`, etc.
- Spacing: `--radius`
- States: `--background`, `--foreground`

#### Tailwind Configuration
- Custom color palette using CSS variables
- Extended animations for micro-interactions
- Responsive design utilities

### 5. Component Patterns

#### Variant System (CVA)
```typescript
const variants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." }
  },
  defaultVariants: { variant: "default", size: "md" }
})
```

#### Forward Refs
All components use `forwardRef` for proper ref forwarding:
```typescript
const Component = React.forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    // Implementation
  }
)
```

#### Composition with Radix Slot
Support for `asChild` pattern:
```typescript
const Comp = asChild ? Slot : "button"
return <Comp {...props} />
```

## Development Workflow

### 1. Local Development
```bash
# Start Docker development environment
npm run dev

# View logs
npm run docker:logs

# Rebuild containers
npm run docker:rebuild
```

### 2. Component Development
1. Use CLI to scaffold: `npm run add-component my-component`
2. Implement component logic in `packages/ui/src/components/`
3. Create demos in `apps/gallery/src/components/demos/`
4. Test in gallery at http://localhost:3001

### 3. Registry Updates
The `watch-components.js` script automatically:
- Scans for component changes
- Updates component registry
- Generates preview registry
- Maintains component metadata

## Integration with shadcn/ui

### Staying Updated
1. Monitor shadcn/ui releases
2. Compare component implementations
3. Update base styles while preserving custom features
4. Test compatibility

### Component Compatibility
- Same prop interfaces
- Similar variant names
- Compatible styling approach
- Enhanced with additional features

## Best Practices

### 1. Component Design
- Keep components focused and single-purpose
- Provide sensible defaults
- Support common use cases
- Maintain accessibility standards

### 2. Documentation
- Use JSDoc headers for all components
- Include usage examples in demos
- Document props and variants
- Tag components appropriately

### 3. Testing
- Visual testing in gallery
- Theme compatibility (light/dark)
- Responsive behavior
- Keyboard navigation
- Screen reader compatibility

### 4. Performance
- Minimize bundle size
- Use dynamic imports where appropriate
- Optimize re-renders with proper memoization
- Lazy load heavy components

## Future Enhancements

### Planned Features
1. **Automated Testing**: Jest + React Testing Library
2. **Storybook Integration**: Alternative documentation
3. **Theme Builder**: Visual theme customization
4. **Component Analytics**: Usage tracking in gallery
5. **Version Management**: Component versioning system

### Extensibility Points
- Custom theme creation
- Plugin system for components
- Build-time optimizations
- Runtime theme switching

## Deployment

### Gallery Application
- Next.js static export
- Cloudflare Pages compatible
- Docker containerization
- Environment-based configuration

### Package Distribution
- NPM package for `@lightmind/ui`
- Tree-shakeable exports
- TypeScript definitions
- CSS module support

---

This architecture ensures LightMind UI remains maintainable, scalable, and aligned with modern React development practices while building on the solid foundation of shadcn/ui.