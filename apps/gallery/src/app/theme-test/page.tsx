'use client'

import { useState } from 'react'
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Input } from '@lightmind/ui'
import { Header } from '@/components/header'

export default function ThemeTestPage() {
  const [currentTheme, setCurrentTheme] = useState('default')
  
  const applyTheme = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.classList.remove('style-default', 'style-new-york', 'style-lightmind')
    document.documentElement.classList.add(`style-${theme}`)
    document.documentElement.setAttribute('data-style', theme)
    localStorage.setItem('ui-style', theme)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Theme Test Page</h1>
          <p className="text-muted-foreground">Test different theme variations</p>
        </div>

        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => applyTheme('default')}
            variant={currentTheme === 'default' ? 'default' : 'outline'}
          >
            Default Theme
          </Button>
          <Button 
            onClick={() => applyTheme('new-york')}
            variant={currentTheme === 'new-york' ? 'default' : 'outline'}
          >
            New York Theme
          </Button>
          <Button 
            onClick={() => applyTheme('lightmind')}
            variant={currentTheme === 'lightmind' ? 'default' : 'outline'}
          >
            LightMind Theme
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>This is a sample card to test theme styling.</p>
              <div className="space-x-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <Input placeholder="Sample input field" />
              <div className="space-x-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Default</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
              <Button variant="destructive" className="w-full">Destructive</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
              <Button variant="link" className="w-full">Link</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Current theme: <strong className="text-foreground">{currentTheme}</strong>
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <span className="font-medium">Default:</span> Rounded corners, soft shadows
                </div>
                <div>
                  <span className="font-medium">New York:</span> Sharp corners, no shadows
                </div>
                <div>
                  <span className="font-medium">LightMind:</span> Optimized spacing, enhanced contrast
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}