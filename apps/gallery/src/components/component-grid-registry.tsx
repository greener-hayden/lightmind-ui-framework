'use client'

import { ComponentCard } from './component-card'
import { components, categories } from '@/lib/component-registry'
import { useMemo, useState } from 'react'
import { Input, Button } from '@lightmind/ui'

export function ComponentGridRegistry() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesSearch = !search || 
        component.name.toLowerCase().includes(search.toLowerCase()) ||
        component.description.toLowerCase().includes(search.toLowerCase()) ||
        component.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      
      const matchesCategory = !selectedCategory || component.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [search, selectedCategory])

  const componentsByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = filteredComponents.filter(c => c.category === category.id)
      return acc
    }, {} as Record<string, typeof components>)
  }, [filteredComponents])

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <div className="flex gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Components by Category */}
      {selectedCategory ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 capitalize">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentsByCategory[selectedCategory]?.map(component => (
              <ComponentCard key={component.id} component={component} viewMode="grid" />
            ))}
          </div>
        </div>
      ) : (
        categories.map(category => {
          const categoryComponents = componentsByCategory[category.id]
          if (!categoryComponents?.length) return null
          
          return (
            <div key={category.id}>
              <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryComponents.map(component => (
                  <ComponentCard key={component.id} component={component} viewMode="grid" />
                ))}
              </div>
            </div>
          )
        })
      )}

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No components found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}