'use client'

import { Button } from '@/components/ui/button'

export function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

export function ButtonVariantsPreview() {
  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Variants</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="flex flex-wrap gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">States</h4>
        <div className="flex flex-wrap gap-2">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  )
}

export function ButtonIconPreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      <Button variant="outline" size="sm">
        <span className="mr-2">⬇️</span>
        Download
      </Button>
      <Button variant="default">
        <span className="mr-2">🔍</span>
        Search
      </Button>
      <Button variant="secondary">
        <span className="mr-2">📁</span>
        Open File
      </Button>
    </div>
  )
}

export function ButtonLoadingPreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      <Button disabled>
        <span className="mr-2 animate-spin">⚪</span>
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <span className="mr-2 animate-spin">⚪</span>
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <span className="mr-2 animate-spin">⚪</span>
        Processing
      </Button>
    </div>
  )
}