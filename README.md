# LightMind UI Framework

A production-ready component library built on [shadcn/ui](https://ui.shadcn.com) foundations with enhanced features, extensive customization options, and a developer-first approach.

## Features

- 🎨 **51+ Components** - Comprehensive UI components with multiple variants and states
- 🚀 **Enhanced shadcn/ui** - All the benefits of shadcn/ui with additional features and flexibility
- 🎯 **Feature Flags** - Extensive props and options for every use case
- 🐳 **Docker-First Development** - Consistent development environment with hot reload
- 📦 **Copy & Paste** - Use our registry or copy individual components
- 🌓 **Theme Support** - Built-in light/dark mode with CSS variables
- ♿ **Accessible** - ARIA compliant with keyboard navigation
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **Developer Tools** - CLI for component scaffolding and automation

## Quick Start

### Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/HaydenGreener/lightmind-ui-framework.git
cd lightmind-ui-framework

# Start development environment
npm run dev

# Access the gallery at http://localhost:3001
```

### Component Installation

```bash
# Install the entire library
npm install @lightmind/ui

# Or copy individual components (shadcn compatible)
npx shadcn-ui@latest add button
```

## Project Structure

```
lightmind-ui-framework/
├── apps/
│   └── gallery/              # Component showcase & documentation
├── packages/
│   └── ui/                   # Core component library
├── registry/                 # shadcn-compatible registry
│   ├── blocks/              # Complex component compositions
│   ├── examples/            # Component demonstrations
│   └── ui/                  # Component definitions
└── scripts/                 # Development tools
    ├── templates/          # Component scaffolding templates
    ├── add-component.cjs   # CLI for creating components
    ├── build-registry.mts  # Registry generation
    └── watch-components.js # Auto-sync during development
```

## Development

### Prerequisites

- Docker and Docker Compose
- Node.js 20+ (for running Docker commands)
- Git

### Getting Started

1. **Clone and Setup**
   ```bash
   git clone https://github.com/HaydenGreener/lightmind-ui-framework.git
   cd lightmind-ui-framework
   ```

2. **Start Development Environment**
   ```bash
   npm run dev  # Starts Docker compose
   ```

3. **Access the Gallery**
   - Open http://localhost:3001
   - Components auto-reload on changes
   - All changes sync automatically

### Creating Components

Use our CLI tool to scaffold new components:

```bash
# Basic component
npm run add-component button-group

# With options
npm run add-component progress-bar \
  --category feedback \
  --tags "progress,loading,status"

# Radix-based component
npm run add-component dialog \
  --template radix \
  --radix dialog
```

#### Component Templates

- **basic** - Standard component with CVA variants
- **radix** - Wraps Radix UI primitives
- **form** - Specialized form input component

### Component Development Guidelines

Each component should:

1. **Support Multiple Variants**
   ```tsx
   <Button variant="default|secondary|destructive|outline|ghost|link" />
   <Button size="default|sm|lg|icon" />
   ```

2. **Include All States**
   ```tsx
   <Button loading={true} />
   <Button disabled={true} />
   <Button asChild><a href="/link">Link Button</a></Button>
   ```

3. **Be Highly Composable**
   ```tsx
   <Button leftIcon={<Mail />} rightIcon={<ChevronRight />}>
     Send Email
   </Button>
   ```

4. **Follow Metadata Convention**
   ```tsx
   /**
    * @component Button
    * @description Trigger actions with various styles and states
    * @category form
    * @complexity simple
    * @status stable
    * @tags button,action,click,form
    */
   ```

### Available Commands

```bash
# Development
npm run dev                # Start Docker development environment
npm run docker:down        # Stop Docker containers
npm run docker:logs        # View container logs
npm run docker:rebuild     # Rebuild containers (after dependency changes)

# Component Management
npm run add-component      # Create new component with CLI
npm run build:registry     # Manually build component registry

# Code Quality
npm run format            # Format code with Prettier
npm run clean             # Clean install dependencies

# Production Builds
npm run build             # Build for GitHub Pages
npm run build:cloudflare  # Build for Cloudflare Pages
```

## Component Philosophy

### Feature-Rich by Design

Every component includes:
- Multiple visual variants
- Size options
- Loading states
- Disabled states
- Icon support (left/right)
- Keyboard navigation
- ARIA compliance
- Theme awareness
- Responsive behavior

### Example: Button Component

```tsx
// Variants
<Button variant="default" />
<Button variant="destructive" />
<Button variant="outline" />

// Sizes
<Button size="sm" />
<Button size="lg" />
<Button size="icon"><Plus /></Button>

// States
<Button loading>Saving...</Button>
<Button disabled>Unavailable</Button>

// With Icons
<Button leftIcon={<Mail />}>Send</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>

// As Different Element
<Button asChild>
  <Link href="/home">Go Home</Link>
</Button>
```

## Component Categories

### Form (8 components)
Interactive form elements with validation support
- Button, Checkbox, Input, Select, RadioGroup, Form, Label, Combobox

### Display (5 components)
Content presentation components
- Avatar, Badge, Card, Separator, Table

### Navigation (2 components)
Navigation and menu components
- NavigationMenu, Tabs

### Feedback (1 component)
User feedback and notifications
- Toast

### Layout (35 components)
Structure and layout components
- Dialog, Drawer, Sheet, Popover, Accordion, and more

## Deployment

### GitHub Pages
```bash
npm run build
# Deploy the out/ directory
```

### Cloudflare Pages
```bash
npm run build:cloudflare
npm run deploy:cloudflare
```

### Docker Production
```dockerfile
# Use the production Dockerfile
docker build -t lightmind-ui .
docker run -p 3000:3000 lightmind-ui
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

We welcome contributions! Please ensure:

1. **Follow Existing Patterns** - Match the codebase style
2. **Comprehensive Features** - Components should handle all use cases
3. **Full Documentation** - Include demos and examples
4. **Accessibility First** - Test keyboard navigation and screen readers
5. **Theme Support** - Work in both light and dark modes

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in the gallery
5. Submit a pull request

### Component Checklist

- [ ] Follows component template structure
- [ ] Includes all reasonable variants
- [ ] Has loading and disabled states  
- [ ] Supports keyboard navigation
- [ ] Includes proper ARIA attributes
- [ ] Works with theme switching
- [ ] Has comprehensive demo
- [ ] Exports from package index
- [ ] Updates registry correctly

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Components**: Radix UI primitives
- **Build**: Next.js 14 (App Router)
- **Development**: Docker + Hot Reload
- **Package Manager**: npm workspaces

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

Built on the excellent foundations of:
- [shadcn/ui](https://ui.shadcn.com) - The component architecture
- [Radix UI](https://radix-ui.com) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [CVA](https://cva.style) - Class variance authority

## Support

- 📧 [Email Support](mailto:support@lightmind.dev)
- 🐛 [Report Issues](https://github.com/HaydenGreener/lightmind-ui-framework/issues)
- 💬 [Discussions](https://github.com/HaydenGreener/lightmind-ui-framework/discussions)
- 📖 [Documentation](https://lightmind-ui.dev/docs)

---

Made with ❤️ by the LightMind team