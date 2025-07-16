'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight, Grid, List, Package, Star, Zap, Copy, Download, ExternalLink } from 'lucide-react'
import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ui, styles, categories } from '@/registry'
import { ComponentGridRegistry } from '@/components/component-grid-registry'

export default function RegistryPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>('default')
  
  const componentStats = {
    total: ui.length,
    stable: ui.filter(c => c.meta?.status === 'stable').length,
    withDependencies: ui.filter(c => c.dependencies && c.dependencies.length > 0).length
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Component Registry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by shadcn/ui registry system. Copy components with your preferred style.
          </p>
          
          {/* Style Switcher */}
          <div className="flex justify-center gap-2">
            {styles.map((style) => (
              <Button
                key={style.name}
                variant={selectedStyle === style.name ? "default" : "outline"}
                onClick={() => setSelectedStyle(style.name)}
              >
                {style.label}
              </Button>
            ))}
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>{componentStats.total} Components</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>{componentStats.stable} Stable</span>
            </div>
            <div className="flex items-center gap-2">
              <Grid className="h-4 w-4" />
              <span>{styles.length} Styles</span>
            </div>
          </div>
        </section>

        {/* Registry Info */}
        <section className="bg-muted/30 rounded-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">How the Registry Works</h2>
            <p className="text-muted-foreground">
              Each component is available in multiple styles. Choose your preferred style and copy the code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">1. Choose Style</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Select between Default, New York, or LightMind styles for your components.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">2. Browse Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each component includes dependencies and configuration metadata.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">3. Install</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Copy code or use CLI to add components with automatic dependency installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Grid */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">All Components</h2>
          <ComponentGridRegistry />
        </section>
      </main>
    </div>
  )
}