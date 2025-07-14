'use client'

import { useState } from 'react'
import { Copy, ExternalLink, Eye, Code, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PreviewComponent } from './preview-registry'

interface Component {
  id: string
  name: string
  description: string
  category: string
  complexity: 'simple' | 'medium' | 'complex'
  tags: string[]
  preview: string
  codeExample: string
}

interface ComponentCardProps {
  component: Component
  viewMode: 'grid' | 'list'
}

const complexityColors = {
  simple: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  complex: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

export function ComponentCard({ component, viewMode }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(component.codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  if (viewMode === 'list') {
    return (
      <div className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">{component.name}</h3>
              <span className={cn(
                "px-2 py-1 text-xs font-medium rounded-full",
                complexityColors[component.complexity]
              )}>
                {component.complexity}
              </span>
            </div>
            <p className="text-muted-foreground mb-3">{component.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {component.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
              title={showCode ? "Hide code" : "Show code"}
            >
              {showCode ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
            </button>
            <button
              onClick={handleCopyCode}
              className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
              title="Copy code"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
        
        {showCode && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <pre className="text-sm overflow-x-auto">
              <code>{component.codeExample}</code>
            </pre>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="border rounded-lg bg-card hover:shadow-md transition-shadow overflow-hidden">
      {/* Preview Area */}
      <div className="p-6 bg-muted/30 min-h-[120px] flex items-center justify-center">
        <PreviewComponent name={component.preview} />
      </div>

      {/* Content Area */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{component.name}</h3>
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            complexityColors[component.complexity]
          )}>
            {component.complexity}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {component.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {component.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{component.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex-1 py-2 px-3 text-sm bg-secondary hover:bg-secondary/80 rounded-md transition-colors inline-flex items-center justify-center gap-2"
          >
            <Code className="h-4 w-4" />
            {showCode ? 'Hide Code' : 'View Code'}
          </button>
          <button
            onClick={handleCopyCode}
            className="p-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        {showCode && (
          <div className="mt-4 p-3 bg-muted rounded-md">
            <pre className="text-xs overflow-x-auto">
              <code>{component.codeExample}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}