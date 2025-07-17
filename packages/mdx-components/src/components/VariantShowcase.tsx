'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { cn } from '@lightmind/ui/lib/utils'

interface Variant {
  name: string
  description: string
  component: React.ReactNode
  code?: string
}

interface VariantShowcaseProps {
  title?: string
  description?: string
  variants: Variant[]
  className?: string
}

export function VariantShowcase({
  title = "Variants",
  description = "Different variations and configurations",
  variants,
  className
}: VariantShowcaseProps) {
  const [activeVariant, setActiveVariant] = useState(0)

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <Button
              key={index}
              variant={activeVariant === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveVariant(index)}
            >
              {variant.name}
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          <div className="p-6 bg-muted/30 rounded-lg flex items-center justify-center">
            {variants[activeVariant].component}
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">{variants[activeVariant].name}</h4>
            <p className="text-sm text-muted-foreground">
              {variants[activeVariant].description}
            </p>
          </div>
          
          {variants[activeVariant].code && (
            <div className="mt-4">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{variants[activeVariant].code}</code>
              </pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default VariantShowcase