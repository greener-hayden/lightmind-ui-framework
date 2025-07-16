// Registry schema definitions (compatible with shadcn/ui)

export interface RegistryItem {
  name: string
  type: "registry:ui" | "registry:lib" | "registry:hook" | "registry:theme" | "registry:block"
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files: RegistryItemFile[]
  tailwind?: {
    config?: {
      theme?: Record<string, any>
      plugins?: string[]
    }
  }
  cssVars?: {
    light?: Record<string, string>
    dark?: Record<string, string>
  }
  meta?: {
    description?: string
    category?: string
    complexity?: "simple" | "medium" | "complex"
    status?: "alpha" | "beta" | "stable"
    tags?: string[]
  }
}

export interface RegistryItemFile {
  path: string
  type: "registry:ui" | "registry:lib" | "registry:hook" | "registry:theme" | "registry:page"
  content?: string
  target?: string
}

export interface Registry {
  items: RegistryItem[]
}