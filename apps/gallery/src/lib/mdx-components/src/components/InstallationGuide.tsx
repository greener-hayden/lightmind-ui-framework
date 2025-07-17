'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { CodeBlock } from './CodeBlock'
import { cn } from '@/lib/utils'

interface InstallationGuideProps {
  title?: string
  description?: string
  npmCommand?: string
  yarnCommand?: string
  pnpmCommand?: string
  importStatement?: string
  className?: string
}

export function InstallationGuide({
  title = "Installation",
  description = "Add this component to your project",
  npmCommand = "npm install @lightmind/ui",
  yarnCommand = "yarn add @lightmind/ui",
  pnpmCommand = "pnpm add @lightmind/ui",
  importStatement = "import { ComponentName } from '@lightmind/ui'",
  className
}: InstallationGuideProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Package Manager</h4>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">npm</p>
                <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                  <code>{npmCommand}</code>
                </pre>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">yarn</p>
                <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                  <code>{yarnCommand}</code>
                </pre>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">pnpm</p>
                <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                  <code>{pnpmCommand}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Import</h4>
          <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
            <code>{importStatement}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

export default InstallationGuide