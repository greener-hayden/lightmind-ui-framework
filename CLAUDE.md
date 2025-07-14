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

# Run visual tests with MCP browser automation
npm run test:visual
node testing/visual/test-runner.js

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

# Work on gallery app only  
cd apps/gallery && npm run dev
```

## MCP Integration & Usage

This project is configured with **3 MCP servers** for enhanced AI-assisted development:

### 1. Browser MCP (`browsermcp`)
**Purpose**: Visual testing, UI validation, screenshot capture
```bash
# Available browser tools:
mcp__browsermcp__browser_navigate     # Navigate to URLs
mcp__browsermcp__browser_screenshot   # Capture screenshots
mcp__browsermcp__browser_click        # Interact with elements
mcp__browsermcp__browser_type         # Fill forms and inputs
```

**Key Workflows**:
- Visual regression testing of component gallery
- Cross-browser compatibility validation
- Automated UI interaction testing
- Screenshot-based component verification

### 2. Context7 MCP (`context7`)
**Purpose**: Documentation and library integration
```bash
# Available context7 tools:
mcp__context7__resolve-library-id     # Find library documentation
mcp__context7__get-library-docs      # Fetch up-to-date docs
```

**Usage**: Research shadcn/ui updates, React patterns, Tailwind best practices

### 3. Gemini MCP (`gemini-cli`)
**Purpose**: Cost optimization, sub-agent orchestration, enhanced AI capabilities
```bash
# Available gemini tools:
mcp__gemini-cli__ask-gemini          # Direct Gemini API access
mcp__gemini-cli__sandbox-test        # Safe code execution
```

**Advanced Features**:
- **Cost Optimization**: Use Gemini for large file analysis to save Claude credits
- **Sub-Agent Control**: Delegate specific tasks to specialized AI models
- **Self-Calling**: Gemini can call itself recursively for complex problems
- **Model Selection**: Choose specific Gemini models via `-m` flag

### Cross-MCP Workflows
1. **Component Development**: Use Context7 for research → Browser MCP for testing → Gemini for optimization
2. **Visual Validation**: Browser MCP screenshots → Gemini analysis → Context7 for best practices
3. **Large Codebase Analysis**: Gemini with `@file` syntax for cost-effective file processing

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

### 3. Test with MCP
```bash
# Run visual tests
npm run test:visual

# Use browser MCP for manual validation
# Check accessibility scores and performance metrics
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

## Visual Testing Framework

The testing system uses MCP browser automation:
- **Config**: `testing/visual/config.json`
- **Runner**: `testing/visual/test-runner.js`
- **Reports**: Auto-generated HTML and JSON reports
- **Screenshots**: Automated capture and comparison

Test suites cover:
- Component gallery functionality
- Example page layouts
- Responsive behavior
- Accessibility compliance

## Common Development Patterns

### Adding New shadcn/ui Component
1. Copy from shadcn/ui documentation
2. Place in `packages/ui/src/components/`
3. Create preview component
4. Add to gallery data
5. Test with MCP browser tools

### Gallery Search/Filter Enhancement  
1. Modify filter logic in `apps/gallery/src/app/page.tsx`
2. Update FilterPanel component
3. Test search functionality with browser MCP
4. Verify responsive behavior

### Visual Testing Addition
1. Add test case to `testing/visual/config.json`
2. Run test suite to establish baseline
3. Use browser MCP for screenshot validation
4. Integrate into development workflow

## Performance Standards

- Component render time: <100ms
- TypeScript compilation: <5s for incremental builds
- Gallery search: <200ms response time
- Visual test suite: <30s total execution
- Accessibility score: >90% WCAG 2.1 AA compliance