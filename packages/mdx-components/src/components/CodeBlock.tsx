'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { Copy, Check } from 'lucide-react'
import { cn } from '../utils/cn'

interface CodeBlockProps {
  title?: string
  description?: string
  code: string
  language?: string
  showCopyButton?: boolean
  className?: string
  filename?: string
}

export function CodeBlock({
  title = "Code Example",
  description = "Copy and paste the code below to get started",
  code,
  language = "typescript",
  showCopyButton = true,
  className,
  filename
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            {filename && (
              <div className="text-sm text-muted-foreground font-mono">
                {filename}
              </div>
            )}
          </div>
          {showCopyButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className={cn("text-sm", `language-${language}`)}>
              {code}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

export default CodeBlock