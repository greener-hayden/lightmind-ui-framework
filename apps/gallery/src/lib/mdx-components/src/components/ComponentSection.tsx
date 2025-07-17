'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ComponentSectionProps {
  title?: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function ComponentSection({
  title,
  description,
  className,
  children
}: ComponentSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

export default ComponentSection