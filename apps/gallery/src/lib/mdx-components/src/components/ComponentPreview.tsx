'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps {
  title?: string
  description?: string
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
  showBorder?: boolean
  centered?: boolean
  minHeight?: string
}

export function ComponentPreview({
  title = "Live Preview",
  description = "Interactive demonstration of the component",
  className,
  children,
  fullWidth = false,
  showBorder = true,
  centered = true,
  minHeight = "200px"
}: ComponentPreviewProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "rounded-lg",
            showBorder && "bg-muted/30",
            centered && "flex items-center justify-center",
            fullWidth ? "w-full" : "p-8"
          )}
          style={{ minHeight }}
        >
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

export default ComponentPreview