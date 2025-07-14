# Contributing to LightMind UI Framework

Thank you for your interest in contributing to LightMind UI! This guide will help you get started with contributing to our component library and development tools.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 8 or higher
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lightmind-ui-framework.git
   cd lightmind-ui-framework
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development environment**:
   ```bash
   npm run dev
   ```

4. **Verify setup**:
   - Gallery: http://localhost:3001
   - Examples: http://localhost:3001/examples

## 📋 Development Workflow

### Branch Naming Convention
- `feature/component-name` - New components
- `feature/gallery-enhancement` - Gallery improvements
- `fix/issue-description` - Bug fixes
- `docs/section-name` - Documentation updates

### Commit Message Format
```
type(scope): brief description

Longer description if needed

- List of changes
- Another change

Fixes #issue-number
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🎨 Adding New Components

### 1. Component Implementation

Create your component in `packages/ui/src/components/`:

```tsx
// packages/ui/src/components/your-component.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const yourComponentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-styles",
        secondary: "secondary-styles",
      },
      size: {
        default: "default-size",
        lg: "large-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof yourComponentVariants> {
  // Additional props here
}

const YourComponent = React.forwardRef<
  HTMLElement,
  YourComponentProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      className={cn(yourComponentVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
YourComponent.displayName = "YourComponent"

export { YourComponent, yourComponentVariants }
```

### 2. Add to Index Export

Update `packages/ui/src/index.ts`:

```tsx
export { YourComponent, yourComponentVariants } from "./components/your-component"
export type { YourComponentProps } from "./components/your-component"
```

### 3. Create Gallery Preview

Create preview in `apps/gallery/src/components/previews/`:

```tsx
// apps/gallery/src/components/previews/your-component-preview.tsx
'use client'

import { YourComponent } from '@/components/ui/your-component'

export function YourComponentPreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
    </div>
  )
}
```

### 4. Register in Preview Registry

Update `apps/gallery/src/components/preview-registry.tsx`:

```tsx
import { YourComponentPreview } from './previews/your-component-preview'

const previewComponents = {
  // ... existing components
  YourComponentPreview,
} as const
```

### 5. Add to Gallery Data

Update the component data in `apps/gallery/src/app/page.tsx`:

```tsx
const mockComponents = [
  // ... existing components
  {
    id: 'your-component',
    name: 'Your Component',
    description: 'Brief description of what it does',
    category: 'display', // form, navigation, display, feedback, layout
    complexity: 'simple', // simple, medium, complex
    tags: ['tag1', 'tag2', 'tag3'],
    preview: 'YourComponentPreview',
    codeExample: `<YourComponent variant="default">Content</YourComponent>`,
  },
]
```

## 🧪 Testing Requirements

### Visual Tests
All new components must include visual tests:

1. **Add test configuration** in `testing/visual/config.json`:
   ```json
   {
     "name": "Your Component Test",
     "selector": "[data-testid='your-component']",
     "description": "Test description"
   }
   ```

2. **Run visual tests**:
   ```bash
   npm run test:visual
   ```

3. **Verify results**: Check that all tests pass with good accessibility scores

### Accessibility Requirements
- WCAG 2.1 AA compliance minimum
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios of 4.5:1 or higher

## 📊 Component Guidelines

### Design Principles
1. **Backward Compatibility**: Never break existing APIs
2. **Accessibility First**: Built-in WCAG compliance
3. **Performance**: Sub-100ms render times
4. **Flexibility**: Customizable while maintaining consistency
5. **Developer Experience**: Clear APIs and comprehensive documentation

### Code Standards
- **TypeScript**: Full type coverage
- **Props Interface**: Extend HTML element props when possible
- **Forward Refs**: Support ref forwarding for DOM access
- **Display Names**: Set displayName for better debugging
- **Class Variance Authority**: Use cva for variant management
- **Tailwind Classes**: Use utility classes, avoid custom CSS

### Component Checklist
- [ ] Follows shadcn/ui patterns
- [ ] TypeScript interface with proper extends
- [ ] Forward ref implementation
- [ ] Display name set
- [ ] Variants using class-variance-authority
- [ ] Accessibility attributes (ARIA, roles, etc.)
- [ ] Keyboard navigation support
- [ ] Gallery preview component
- [ ] Added to preview registry
- [ ] Updated gallery data
- [ ] Visual tests passing
- [ ] Documentation comments (JSDoc)

## 🎯 Gallery Contributions

### Adding New Features
1. **Search Enhancements**: Improve filtering and search algorithms
2. **Preview Modes**: Add new ways to view components
3. **Code Generation**: Better copy-paste functionality
4. **Responsive Testing**: Enhanced device preview modes

### Example Page Contributions
Create new example pages showing real-world usage:
1. Add new page in `apps/gallery/src/app/examples/`
2. Update navigation in header component
3. Document the example in README

## 🔍 Code Review Process

### Before Submitting
1. Run all tests: `npm run test:visual`
2. Check TypeScript: `npm run type-check`
3. Lint code: `npm run lint`
4. Test component in gallery
5. Verify accessibility with screen reader
6. Check responsive behavior

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New component
- [ ] Component enhancement
- [ ] Gallery improvement
- [ ] Bug fix
- [ ] Documentation update

## Testing
- [ ] Visual tests pass
- [ ] Accessibility tests pass
- [ ] Manual testing completed
- [ ] Gallery preview works

## Screenshots
[Include screenshots of component in gallery]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on the issue, not the person

### Getting Help
- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions
- **Discord**: Join our Discord server for real-time chat
- **Email**: Contact maintainers at [email@example.com](mailto:email@example.com)

## 📚 Resources

### Documentation
- [Component API Reference](docs/components.md)
- [Design System Guidelines](docs/design-system.md)
- [Accessibility Guide](docs/accessibility.md)
- [Visual Testing Guide](docs/visual-testing.md)

### External Resources
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Primitives](https://radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Component documentation
- Annual contributor highlights

Thank you for helping make LightMind UI better for everyone! 🚀