'use client'

import { ComponentCard } from './component-card'
import { ui } from '@/registry'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { categories } from '@/registry/registry-categories'

export function ComponentGridRegistry() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredComponents = useMemo(() => {
    return ui.filter(component => {
      const matchesSearch = !search || 
        component.name.toLowerCase().includes(search.toLowerCase()) ||
        component.meta?.description?.toLowerCase().includes(search.toLowerCase()) ||
        component.meta?.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      
      const matchesCategory = !selectedCategory || component.meta?.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const componentStats = useMemo(() => {
    return {
      total: ui.length,
      byCategory: categories.reduce((acc, category) => {
        acc[category.id] = ui.filter(c => c.meta?.category === category.id).length
        return acc
      }, {} as Record<string, number>)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <Input
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All ({componentStats.total})
          </Button>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${category.color}`} />
              {category.name} ({componentStats.byCategory[category.id] || 0})
            </Button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => {
          // Map registry component to ComponentCard format
          const componentInfo = {
            id: component.name,
            name: component.name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            description: component.meta?.description || '',
            category: component.meta?.category as any || 'display',
            complexity: component.meta?.complexity || 'simple',
            status: component.meta?.status || 'stable',
            tags: component.meta?.tags || [],
            preview: component.name,
            codeExample: `import { ${component.name} } from '@lightmind/ui'`
          }
          
          return (
            <ComponentCard
              key={component.name}
              component={componentInfo}
            />
          )
        })}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No components found matching your criteria.
        </div>
      )}
    </div>
  )
}