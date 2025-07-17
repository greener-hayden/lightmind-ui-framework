'use client'

import { useEffect, useState } from 'react'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@lightmind/ui'
import { Check, Palette } from 'lucide-react'

const styles = [
  { name: 'default', label: 'Default' },
  { name: 'new-york', label: 'New York' },
  { name: 'lightmind', label: 'LightMind' }
]

export function StyleSwitcher() {
  const [currentStyle, setCurrentStyle] = useState<string>('default')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('ui-style')
    if (stored && styles.some(s => s.name === stored)) {
      setCurrentStyle(stored)
      document.documentElement.setAttribute('data-style', stored)
    }
  }, [])

  const handleStyleChange = (styleName: string) => {
    setCurrentStyle(styleName)
    localStorage.setItem('ui-style', styleName)
    document.documentElement.setAttribute('data-style', styleName)
    
    // Apply style-specific CSS transformations
    applyStyleTransformations(styleName)
  }

  const applyStyleTransformations = (styleName: string) => {
    // Remove all style classes first
    document.documentElement.classList.remove('style-default', 'style-new-york', 'style-lightmind')
    
    // Add new style class
    document.documentElement.classList.add(`style-${styleName}`)
    
    // Style-specific transformations
    switch (styleName) {
      case 'default':
        // Default style: rounded corners, softer shadows
        break
      case 'new-york':
        // New York style: sharp corners, stronger contrasts
        break
      case 'lightmind':
        // LightMind style: tighter spacing, better contrast, enhanced interactions
        break
    }
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Palette className="h-4 w-4" />
      </Button>
    )
  }

  const currentStyleLabel = styles.find(s => s.name === currentStyle)?.label || 'Default'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="h-4 w-4 mr-2" />
          {currentStyleLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {styles.map((style) => (
          <DropdownMenuItem
            key={style.name}
            onClick={() => handleStyleChange(style.name)}
            className="flex items-center justify-between"
          >
            {style.label}
            {currentStyle === style.name && (
              <Check className="h-4 w-4 ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}