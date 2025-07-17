#!/usr/bin/env tsx

import { existsSync, promises as fs } from "fs"
import path from "path"
import { z } from "zod"

const registryItemSchema = z.object({
  name: z.string(),
  type: z.enum(["registry:ui", "registry:example", "registry:block"]),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(z.object({
    path: z.string(),
    content: z.string(),
    type: z.enum(["registry:ui", "registry:example", "registry:block"]),
    target: z.string().optional(),
  })),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

type RegistryItem = z.infer<typeof registryItemSchema>

async function getFileContent(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, "utf8")
  } catch (error) {
    console.warn(`Could not read file: ${filePath}`)
    return ""
  }
}

async function extractDependencies(content: string): Promise<{
  dependencies: string[]
  devDependencies: string[]
  registryDependencies: string[]
}> {
  const dependencies: string[] = []
  const devDependencies: string[] = []
  const registryDependencies: string[] = []

  // Extract import statements
  const importRegex = /import.*from\s+["']([^"']+)["']/g
  let match

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]
    
    if (importPath.startsWith("@/")) {
      // Internal import - check if it's a registry dependency
      if (importPath.includes("/ui/") || importPath.includes("/components/ui/")) {
        const componentName = path.basename(importPath)
        registryDependencies.push(componentName)
      }
    } else if (importPath.startsWith("@radix-ui/")) {
      dependencies.push(importPath)
    } else if (importPath === "lucide-react" || importPath === "class-variance-authority" || importPath === "clsx") {
      dependencies.push(importPath)
    }
  }

  return {
    dependencies: [...new Set(dependencies)],
    devDependencies: [...new Set(devDependencies)],
    registryDependencies: [...new Set(registryDependencies)]
  }
}

async function extractMetadata(filePath: string, content: string): Promise<{
  description?: string
  category?: string
  tags?: string[]
}> {
  // Extract JSDoc comment for description
  const jsdocMatch = content.match(/\/\*\*([\s\S]*?)\*\//)
  const description = jsdocMatch 
    ? jsdocMatch[1].replace(/\s*\*/g, "").trim()
    : undefined

  // Determine category from file path
  const pathParts = filePath.split("/")
  let category = "components"
  
  if (pathParts.includes("examples")) {
    category = "examples"
  } else if (pathParts.includes("blocks")) {
    category = "blocks"
  } else if (pathParts.includes("ui")) {
    category = "ui"
  }

  // Extract tags from content (look for common patterns)
  const tags: string[] = []
  if (content.includes("forwardRef")) tags.push("forwardRef")
  if (content.includes("use client")) tags.push("client")
  if (content.includes("@radix-ui")) tags.push("radix")
  if (content.includes("cva")) tags.push("variants")

  return { description, category, tags }
}

async function processRegistryFile(
  filePath: string,
  type: RegistryItem["type"]
): Promise<RegistryItem | null> {
  if (!existsSync(filePath) || !filePath.endsWith(".tsx")) {
    return null
  }

  const content = await getFileContent(filePath)
  if (!content) return null

  const fileName = path.basename(filePath, ".tsx")
  const relativePath = path.relative(process.cwd(), filePath)
  
  const deps = await extractDependencies(content)
  const metadata = await extractMetadata(filePath, content)

  const registryItem: RegistryItem = {
    name: fileName,
    type,
    description: metadata.description,
    dependencies: deps.dependencies,
    devDependencies: deps.devDependencies,
    registryDependencies: deps.registryDependencies,
    files: [{
      path: relativePath,
      content,
      type,
      target: type === "registry:ui" ? `components/ui/${fileName}.tsx` : undefined
    }],
    category: metadata.category,
    tags: metadata.tags,
  }

  return registryItem
}

async function buildRegistry(): Promise<void> {
  console.log("🔨 Building registry...")

  const registry: RegistryItem[] = []

  // Process UI components
  const uiDir = "registry/ui"
  if (existsSync(uiDir)) {
    const uiFiles = await fs.readdir(uiDir)
    for (const file of uiFiles) {
      const filePath = path.join(uiDir, file)
      const item = await processRegistryFile(filePath, "registry:ui")
      if (item) registry.push(item)
    }
  }

  // Process examples
  const examplesDir = "registry/examples"
  if (existsSync(examplesDir)) {
    const exampleFiles = await fs.readdir(examplesDir)
    for (const file of exampleFiles) {
      const filePath = path.join(examplesDir, file)
      const item = await processRegistryFile(filePath, "registry:example")
      if (item) registry.push(item)
    }
  }

  // Process blocks
  const blocksDir = "registry/blocks"
  if (existsSync(blocksDir)) {
    const blockFiles = await fs.readdir(blocksDir)
    for (const file of blockFiles) {
      const filePath = path.join(blocksDir, file)
      const item = await processRegistryFile(filePath, "registry:block")
      if (item) registry.push(item)
    }
  }

  // Write registry.json
  await fs.writeFile(
    "registry.json",
    JSON.stringify(registry, null, 2),
    "utf8"
  )

  console.log(`✅ Built registry with ${registry.length} items`)
  console.log(`   - UI components: ${registry.filter(r => r.type === "registry:ui").length}`)
  console.log(`   - Examples: ${registry.filter(r => r.type === "registry:example").length}`)
  console.log(`   - Blocks: ${registry.filter(r => r.type === "registry:block").length}`)
}

// Self-executing script
buildRegistry().catch(console.error)