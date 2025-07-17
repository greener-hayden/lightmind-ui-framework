'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { Eye, Keyboard, MousePointer } from 'lucide-react'
import { cn } from '@lightmind/ui/lib/utils'

interface AccessibilityGuideProps {
  title?: string
  description?: string
  keyboardNavigation?: string[]
  screenReader?: string[]
  mouseInteraction?: string[]
  ariaAttributes?: string[]
  className?: string
}

export function AccessibilityGuide({
  title = "Accessibility",
  description = "Guidelines for making this component accessible",
  keyboardNavigation = [],
  screenReader = [],
  mouseInteraction = [],
  ariaAttributes = [],
  className
}: AccessibilityGuideProps) {
  const sections = [
    {
      title: "Keyboard Navigation",
      icon: <Keyboard className="h-4 w-4" />,
      items: keyboardNavigation,
      color: "text-blue-600"
    },
    {
      title: "Screen Reader Support", 
      icon: <Eye className="h-4 w-4" />,
      items: screenReader,
      color: "text-green-600"
    },
    {
      title: "Mouse Interaction",
      icon: <MousePointer className="h-4 w-4" />,
      items: mouseInteraction,
      color: "text-purple-600"
    },
    {
      title: "ARIA Attributes",
      icon: <Eye className="h-4 w-4" />,
      items: ariaAttributes,
      color: "text-orange-600"
    }
  ]

  const visibleSections = sections.filter(section => section.items.length > 0)

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {visibleSections.map((section, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={cn("flex items-center gap-2", section.color)}>
                  {section.icon}
                  <h4 className="font-medium">{section.title}</h4>
                </div>
              </div>
              <ul className="space-y-2 pl-6">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default AccessibilityGuide