# LightMind UI Framework

A modern, backward-compatible UI framework built on [shadcn/ui](https://ui.shadcn.com) foundations with comprehensive component gallery, automated visual testing, and professional-grade development tools.

## ✨ Features

- **🎨 Component Gallery**: Interactive showcase with live previews and searchable components
- **📋 Copy-Paste Ready**: All components available as copy-paste code snippets
- **🔍 Advanced Search**: Filter by category, complexity, and features
- **🧪 Visual Testing**: Automated testing with accessibility and performance metrics
- **📱 Responsive Design**: Mobile-first design with dark mode support
- **🔧 Developer Experience**: Full TypeScript support with intelligent autocomplete
- **⚡ Fast Development**: Turborepo monorepo with optimized build pipeline
- **🎯 Backward Compatible**: Additive-only changes ensure existing code never breaks

## 🚀 Quick Start

### Option 1: Use the Component Gallery

1. **Start the gallery**:
   ```bash
   git clone <repository-url>
   cd lightmind-ui-framework
   npm install
   npm run gallery
   ```

2. **Browse components** at `http://localhost:3001`

3. **Copy components** directly from the gallery into your project

### Option 2: Install as Package

```bash
npm install @lightmind/ui
```

```tsx
import { Button, Card, CardContent } from '@lightmind/ui'

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button>Click me!</Button>
      </CardContent>
    </Card>
  )
}
```

## 📦 Project Structure

```
lightmind-ui-framework/
├── apps/
│   ├── gallery/                # Component showcase application
│   ├── examples/              # Example page implementations
│   └── docs/                  # Documentation site
├── packages/
│   ├── ui/                    # Core component library
│   └── core/                  # Shared utilities and tokens
├── testing/
│   └── visual/                # Visual testing and validation
└── progress/                  # Development progress tracking
```

## 🎨 Component Gallery

The component gallery provides an interactive way to explore, test, and copy components:

### Features
- **Live Previews**: See components in action with all variants
- **Search & Filter**: Find components by name, category, or complexity
- **Code Snippets**: Copy-paste ready component code
- **Responsive Testing**: Preview components across different screen sizes
- **Accessibility Info**: WCAG compliance information for each component

### Available Components

| Component | Category | Complexity | Description |
|-----------|----------|------------|-------------|
| Button | Form | Simple | Clickable button with multiple variants |
| Card | Display | Simple | Flexible container for content |
| Input | Form | Simple | Text input with validation support |
| Badge | Display | Simple | Small status or label indicator |

## 📖 Example Pages

See real-world component usage in our example implementations:

- **Dashboard**: Complete admin interface with stats and charts
- **Forms**: Account creation and settings forms
- **Settings**: Profile management and preferences

Access examples at `http://localhost:3001/examples`

## 🧪 Visual Testing

Automated visual testing ensures consistent, accessible, and performant components:

```bash
npm run test:visual
```

### Testing Features
- **Screenshot Comparison**: Visual regression testing
- **Accessibility Scoring**: WCAG 2.1 AA compliance validation
- **Performance Metrics**: Render times and resource usage
- **Cross-browser Testing**: Consistent behavior across browsers

### Recent Test Results
```
✨ Test Summary:
   Total Tests: 5
   Passed: 5
   Failed: 0
   Success Rate: 100.0%
   Avg Accessibility Score: 91.7%
   Avg Render Time: 94.6ms
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm 8+

### Setup
```bash
# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm run test:visual

# Build all packages
npm run build
```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all development servers |
| `npm run gallery` | Start component gallery only |
| `npm run examples` | Start examples app only |
| `npm run build` | Build all packages |
| `npm run test:visual` | Run visual testing suite |
| `npm run lint` | Lint all packages |
| `npm run type-check` | TypeScript type checking |

## 🎯 Design Philosophy

### Backward Compatibility First
- All new features are additive, never breaking
- Existing APIs remain stable across versions
- Optional props for new modes and features
- Clear migration paths when necessary

### Developer Experience
- Copy-paste workflow for maximum flexibility
- Full TypeScript support with intelligent autocomplete
- Comprehensive documentation and examples
- Visual testing for quality assurance

### Performance & Accessibility
- Sub-100ms component render times
- WCAG 2.1 AA accessibility compliance
- Optimized bundle sizes with tree-shaking
- Responsive design patterns built-in

## 🔧 Configuration

### Tailwind CSS Setup

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@lightmind/ui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // LightMind UI color variables
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        // ... more variables
      }
    }
  }
}
```

### CSS Variables

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test:visual`
5. Submit a pull request

### Component Guidelines
- Follow shadcn/ui patterns and conventions
- Include TypeScript types and JSDoc comments
- Add component to gallery with preview
- Ensure accessibility compliance
- Write visual tests for new components

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - Foundation components and design patterns
- [Radix UI](https://radix-ui.com) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Turborepo](https://turbo.build) - High-performance build system

---

**Built with ❤️ by the LightMind team**

For questions, feedback, or support, please [open an issue](https://github.com/yourusername/lightmind-ui-framework/issues) or contact us at [email@example.com](mailto:email@example.com).