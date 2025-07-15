# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LightMind UI Framework** is a production-ready, modern UI framework built on shadcn/ui foundations. It features a comprehensive component gallery, automated visual testing with MCP integration, and backward-compatible architecture for sustainable development.

## Development Commands

### Essential Commands
```bash
# Start all development servers (gallery + packages)
npm run dev

# Start component gallery only
npm run gallery

# Build all packages
npm run build

# Run visual tests (simulated MCP browser automation)
npm run test:visual
node testing/visual/test-runner.js

# Lint code
npm run lint

# Type checking across monorepo
npm run type-check

# Format code
npm run format

# Clean build artifacts
npm run clean
```

### Single Package Development
```bash
# Work on UI package only
cd packages/ui && npm run dev

# Work on gallery app only (runs on port 3001)
cd apps/gallery && npm run dev

# Work on examples app only
cd apps/examples && npm run dev
```

## MCP Integration & Usage

This project has MCP integration capabilities for enhanced AI-assisted development. The visual testing system simulates browser automation for component validation.

## Project Architecture

### Turborepo Monorepo Structure
```
├── apps/
│   ├── gallery/          # Component showcase (Next.js 14)
│   └── examples/         # Real-world usage examples
├── packages/
│   ├── ui/              # Core component library
│   └── core/            # Shared utilities (future)
├── testing/
│   └── visual/          # MCP-integrated visual testing
└── progress/            # Development tracking
```

### Technology Stack
- **Build System**: Turborepo with intelligent caching
- **Frontend**: Next.js 14 with App Router
- **Components**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables
- **Language**: TypeScript with strict configuration
- **Testing**: Custom MCP browser automation

### shadcn/ui Foundation
This framework extends shadcn/ui's copy-paste model:
- Components are copied into `apps/gallery/src/components/ui/`
- Preview components in `apps/gallery/src/components/previews/`
- Registry system in `preview-registry.tsx` for dynamic loading
- Uses class-variance-authority for component variants
- All components use Radix UI primitives as base

## Component Development Workflow

### 1. Create New Component
```bash
# Add to packages/ui/src/components/
# Follow shadcn/ui patterns with class-variance-authority
# Export from packages/ui/src/index.ts
```

### 2. Add Gallery Preview
```bash
# Create preview in apps/gallery/src/components/previews/
# Register in preview-registry.tsx
# Update component data in apps/gallery/src/app/page.tsx
```

**Important**: Component previews must be registered in `preview-registry.tsx` using the exact naming convention (e.g., `ButtonPreview`, `CardPreview`). The registry dynamically loads preview components based on the component name.

### 3. Test with Visual Testing
```bash
# Run visual tests
npm run test:visual

# Visual testing generates:
# - Screenshots in testing/visual/screenshots/
# - HTML report at testing/visual/test-report.html
# - JSON report at testing/visual/test-report.json
```

### 4. Documentation
```bash
# Update component gallery metadata
# Add to README.md component table
# Include usage examples in /examples
```

## Backward Compatibility Requirements

**Critical**: All changes must be **additive only**
- New features use optional props
- Existing APIs never change
- Deprecation warnings before removal
- Clear migration paths documented

## Key Configuration Files

### Turborepo Pipeline (`turbo.json`)
- Defines build dependencies and caching
- Optimizes parallel execution
- Manages development server persistence

### MCP Configuration (`.mcp.json`)
- Browser tools for visual testing
- Context7 for documentation access  
- Gemini CLI for advanced AI capabilities

### TypeScript Config
- Strict mode enabled across monorepo
- Project references for fast builds
- Proper module resolution for component imports
- Gallery app uses Next.js 14 with App Router

## Visual Testing Framework

The testing system simulates browser automation for component validation:
- **Config**: `testing/visual/config.json` - defines test suites and viewports
- **Runner**: `testing/visual/test-runner.js` - Node.js script that simulates testing
- **Reports**: Auto-generated HTML and JSON reports with metrics
- **Screenshots**: Simulated capture and comparison workflow

Test suites cover:
- Component gallery functionality (localhost:3001)
- Example page layouts (localhost:3001/examples)
- Responsive behavior across viewports
- Accessibility compliance scoring

## Common Development Patterns

### Adding New shadcn/ui Component
1. Copy from shadcn/ui documentation
2. Place in `apps/gallery/src/components/ui/` (note: not packages/ui)
3. Create preview component in `apps/gallery/src/components/previews/`
4. Register in `preview-registry.tsx`
5. Add to gallery data in `apps/gallery/src/app/page.tsx`
6. Test with visual testing suite

### Gallery Search/Filter Enhancement  
1. Modify filter logic in `apps/gallery/src/app/page.tsx`
2. Update FilterPanel component in `apps/gallery/src/components/filter-panel.tsx`
3. Test search functionality with visual testing
4. Verify responsive behavior across viewports

### Visual Testing Addition
1. Add test case to `testing/visual/config.json`
2. Run test suite to establish baseline: `npm run test:visual`
3. Review generated HTML report for validation
4. Integrate into development workflow

## Performance Standards

- Component render time: <100ms
- TypeScript compilation: <5s for incremental builds
- Gallery search: <200ms response time
- Visual test suite: <30s total execution
- Accessibility score: >90% WCAG 2.1 AA compliance