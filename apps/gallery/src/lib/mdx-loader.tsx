/**
 * MDX Loader Utility
 * Handles loading and parsing MDX content for component documentation
 */

import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { 
  ComponentPreview, 
  CodeBlock, 
  PropsTable, 
  UsageGuidelines, 
  InstallationGuide, 
  VariantShowcase, 
  AccessibilityGuide, 
  RelatedComponents,
  ComponentSection,
  InteractiveDemo,
  SizeDemo,
  StateDemo,
  IconDemo,
  GroupDemo,
  UsageDemo,
  CustomizationDemo,
  ComparisonDemo
} from '@lightmind/mdx-components'
import { PreviewComponent } from '@/components/preview-registry'
// Note: Demo components have been removed in favor of MDX-based demos
// Import Lucide React icons
import * as LucideReact from 'lucide-react'
// Import UI components
import { Button, Label, Slider, Toggle } from '@lightmind/ui'

// MDX components mapping
const mdxComponents = {
  ComponentPreview,
  CodeBlock,
  PropsTable,
  UsageGuidelines,
  InstallationGuide,
  VariantShowcase,
  AccessibilityGuide,
  RelatedComponents,
  ComponentSection,
  InteractiveDemo,
  SizeDemo,
  StateDemo,
  IconDemo,
  GroupDemo,
  UsageDemo,
  CustomizationDemo,
  ComparisonDemo,
  PreviewComponent,
  // Demo components have been removed in favor of MDX-based demos
  // Include all Lucide React icons
  ...LucideReact,
  // Include UI components
  Button,
  Label,
  Slider,
  Toggle,
  // HTML elements
  h1: ({ children, ...props }: any) => <h1 className="text-3xl font-bold mb-6" {...props}>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2 className="text-2xl font-semibold mb-4 mt-8" {...props}>{children}</h2>,
  h3: ({ children, ...props }: any) => <h3 className="text-xl font-medium mb-3 mt-6" {...props}>{children}</h3>,
  h4: ({ children, ...props }: any) => <h4 className="text-lg font-medium mb-2 mt-4" {...props}>{children}</h4>,
  p: ({ children, ...props }: any) => <p className="mb-4 text-base leading-relaxed" {...props}>{children}</p>,
  ul: ({ children, ...props }: any) => <ul className="list-disc pl-6 mb-4 space-y-1" {...props}>{children}</ul>,
  ol: ({ children, ...props }: any) => <ol className="list-decimal pl-6 mb-4 space-y-1" {...props}>{children}</ol>,
  li: ({ children, ...props }: any) => <li className="text-base" {...props}>{children}</li>,
  code: ({ children, ...props }: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>,
  pre: ({ children, ...props }: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 border" {...props}>{children}</pre>,
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-muted-foreground/20 pl-4 italic my-4" {...props}>
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-border" {...props}>{children}</table>
    </div>
  ),
  thead: ({ children, ...props }: any) => <thead className="bg-muted/50" {...props}>{children}</thead>,
  tbody: ({ children, ...props }: any) => <tbody className="divide-y divide-border" {...props}>{children}</tbody>,
  tr: ({ children, ...props }: any) => <tr {...props}>{children}</tr>,
  th: ({ children, ...props }: any) => <th className="px-4 py-2 text-left font-medium" {...props}>{children}</th>,
  td: ({ children, ...props }: any) => <td className="px-4 py-2" {...props}>{children}</td>,
  hr: () => <hr className="my-8 border-border" />
}

export interface MDXFrontmatter {
  title: string
  description: string
  category: string
  status: 'alpha' | 'beta' | 'stable'
  complexity: 'simple' | 'medium' | 'complex'
  tags: string[]
}

export async function loadMDXForComponent(componentId: string) {
  // In Docker, cwd is /app/apps/gallery, so we need to adjust the path
  const mdxPath = path.join(process.cwd(), 'src/docs/components', `${componentId}.mdx`)
  
  console.log('Current working directory:', process.cwd())
  console.log('Looking for MDX file at:', mdxPath)
  
  try {
    const fileContent = await fs.readFile(mdxPath, 'utf-8')
    const { content, data } = matter(fileContent)
    
    // Compile the MDX content
    const { content: compiledContent } = await compileMDX({
      source: content,
      components: mdxComponents,
      options: {
        parseFrontmatter: false, // We're using gray-matter for frontmatter
      }
    })
    
    return {
      content: compiledContent,
      frontmatter: data as MDXFrontmatter,
      exists: true
    }
  } catch (error) {
    // MDX file doesn't exist for this component
    return {
      content: null,
      frontmatter: null,
      exists: false
    }
  }
}


export async function getMDXPreviewSection(componentId: string) {
  // In Docker, cwd is /app/apps/gallery, so we need to adjust the path
  const mdxPath = path.join(process.cwd(), 'src/docs/components', `${componentId}.mdx`)
  
  try {
    const fileContent = await fs.readFile(mdxPath, 'utf-8')
    const { content } = matter(fileContent)
    
    // Split content into lines for easier processing
    const lines = content.split('\n')
    
    // Find where the preview section ends (before Usage Examples, Installation, API Reference, etc.)
    const endSections = ['Usage Examples', 'Installation', 'API Reference', 'Usage Guidelines', 'Best Practices', 'Accessibility', 'Related Components']
    
    let previewEndIndex = lines.length
    
    // Find the first occurrence of any end section
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('## ')) {
        const sectionName = line.replace('## ', '')
        if (endSections.includes(sectionName)) {
          previewEndIndex = i
          break
        }
      }
    }
    
    // Extract preview content (everything before the end sections)
    const previewLines = lines.slice(0, previewEndIndex)
    const previewContent = previewLines.join('\n').trim()
    
    if (previewContent.length === 0) {
      console.log(`[DEBUG] Empty preview content for ${componentId}`)
      return null
    }
    
    console.log(`[DEBUG] Extracted preview content for ${componentId} (${previewEndIndex} lines)`)
    
    // Compile the MDX content
    const { content: compiledContent } = await compileMDX({
      source: previewContent,
      components: mdxComponents,
    })
    
    return compiledContent
  } catch (error) {
    console.error(`[ERROR] getMDXPreviewSection failed for ${componentId}:`, error)
    return null
  }
}

export async function getMDXSection(componentId: string, section: string) {
  // In Docker, cwd is /app/apps/gallery, so we need to adjust the path
  const mdxPath = path.join(process.cwd(), 'src/docs/components', `${componentId}.mdx`)
  
  try {
    const fileContent = await fs.readFile(mdxPath, 'utf-8')
    const { content } = matter(fileContent)
    
    // Split content into lines for easier processing
    const lines = content.split('\n')
    
    // Define fallback section names for better compatibility
    const fallbackSections = {
      'Usage': ['Usage Examples', 'Real-world Implementation Examples', 'Examples'],
      'Usage Guidelines': ['Best Practices', 'Guidelines', 'Usage Guidelines'],
      'API Reference': ['API', 'Props', 'API Reference'],
      'Installation': ['Installation', 'Install', 'Setup']
    }
    
    // Create search array with primary section and fallbacks
    const searchSections = [section]
    if (fallbackSections[section as keyof typeof fallbackSections]) {
      searchSections.push(...fallbackSections[section as keyof typeof fallbackSections])
    }
    
    let sectionStartIndex = -1
    let foundSection = ''
    
    // Find the section start (case-insensitive, with fallbacks)
    for (const searchSection of searchSections) {
      sectionStartIndex = lines.findIndex(line => 
        line.trim().toLowerCase() === `## ${searchSection.toLowerCase()}`
      )
      if (sectionStartIndex !== -1) {
        foundSection = searchSection
        break
      }
    }
    
    if (sectionStartIndex === -1) {
      console.log(`[DEBUG] Section not found for ${componentId}:${section}. Tried: ${searchSections.join(', ')}`)
      return null
    }
    
    console.log(`[DEBUG] Found section "${foundSection}" for ${componentId}:${section}`)
    
    // Find the next ## level heading (not ###, ####, etc.)
    const sectionEndIndex = lines.findIndex((line, index) => 
      index > sectionStartIndex && 
      line.trim().startsWith('## ') && 
      !line.trim().startsWith('###')
    )
    
    // Extract the section content
    const endIndex = sectionEndIndex === -1 ? lines.length : sectionEndIndex
    const sectionLines = lines.slice(sectionStartIndex + 1, endIndex)
    const sectionContent = sectionLines.join('\n').trim()
    
    if (sectionContent.length === 0) {
      console.log(`[DEBUG] Empty section content for ${componentId}:${section}`)
      return null
    }
    
    // Compile the MDX content
    const { content: compiledContent } = await compileMDX({
      source: sectionContent,
      components: mdxComponents,
    })
    
    return compiledContent
  } catch (error) {
    console.error(`[ERROR] getMDXSection failed for ${componentId}:${section}:`, error)
    return null
  }
}

export async function getAllMDXComponents() {
  // In Docker, cwd is /app/apps/gallery, so we need to adjust the path
  const docsPath = path.join(process.cwd(), 'src/docs/components')
  
  try {
    const files = await fs.readdir(docsPath)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    const components = await Promise.all(
      mdxFiles.map(async (file) => {
        const componentId = file.replace('.mdx', '')
        const filePath = path.join(docsPath, file)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const { data } = matter(fileContent)
        
        return {
          id: componentId,
          ...data
        }
      })
    )
    
    return components
  } catch (error) {
    return []
  }
}