# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

```bash
# First time setup
npm install

# Development (using Docker)
npm run dev              # Starts docker compose up
docker compose logs -f   # View logs if needed
docker compose down      # Stop development

# Without Docker (local development)
npm run dev:docker      # Runs watcher + gallery locally
```

## Architecture Overview

This is an **ultra-lean npm workspace monorepo** with a copy-paste component philosophy (based on shadcn/ui):

```
lightmind-ui-framework/
├── packages/ui/          # Core component library (@lightmind/ui)
│   └── src/              # Source files imported directly (no build step)
│       ├── components/   # 15+ React components built on Radix UI
│       └── index.ts      # Main export file
│
└── apps/gallery/         # Next.js showcase app (port 3001)
    └── src/components/   # Component previews and demos
```

## Key Design Principles

1. **Copy-paste workflow**: Components are designed to be copied into projects, not imported as a traditional library
2. **Zero build complexity**: Gallery imports directly from UI source files
3. **Minimal tooling**: No Turborepo, no tsup, just npm workspaces
4. **Backward compatibility**: All changes are additive-only

## Component Development

### Creating a New Component

1. **Add the component file**: Create `packages/ui/src/components/my-component.tsx`
2. **Add to exports**: Update `packages/ui/src/index.ts` to export your component
3. **Create a demo**: Add `apps/gallery/src/components/demos/my-component.demo.tsx`
4. **That's it!** The watcher auto-updates registries and hot reloads

### Component Guidelines
- Components use Radix UI primitives for accessibility
- Styling uses Tailwind CSS with `cn()` utility for class merging
- All components export TypeScript types
- Follow existing patterns in adjacent components
- Demo files must end with `.demo.tsx` for auto-discovery

## Lean Philosophy

This project maintains minimal dependencies and tooling:
- No build tools (tsup removed)
- No task runners (Turborepo removed)
- No test frameworks (use IDE features)
- CI/CD via GitHub Actions (when needed)