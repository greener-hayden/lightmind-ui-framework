'use client'

import { X } from 'lucide-react'

interface FilterPanelProps {
  selectedCategory: string
  selectedComplexity: string
  onCategoryChange: (category: string) => void
  onComplexityChange: (complexity: string) => void
}

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'form', label: 'Form' },
  { value: 'display', label: 'Display' },
  { value: 'navigation', label: 'Navigation' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'layout', label: 'Layout' },
]

const complexities = [
  { value: '', label: 'All Levels' },
  { value: 'simple', label: 'Simple' },
  { value: 'medium', label: 'Medium' },
  { value: 'complex', label: 'Complex' },
]

export function FilterPanel({ 
  selectedCategory, 
  selectedComplexity, 
  onCategoryChange, 
  onComplexityChange 
}: FilterPanelProps) {
  const hasActiveFilters = selectedCategory || selectedComplexity

  const clearAllFilters = () => {
    onCategoryChange('')
    onComplexityChange('')
  }

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-card">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            Clear all
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium mb-2">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Complexity Filter */}
        <div>
          <h4 className="text-sm font-medium mb-2">Complexity</h4>
          <div className="space-y-2">
            {complexities.map((complexity) => (
              <label key={complexity.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="complexity"
                  value={complexity.value}
                  checked={selectedComplexity === complexity.value}
                  onChange={(e) => onComplexityChange(e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm">{complexity.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium mb-2">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                {categories.find(c => c.value === selectedCategory)?.label}
                <button
                  onClick={() => onCategoryChange('')}
                  className="hover:text-primary/80"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedComplexity && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                {complexities.find(c => c.value === selectedComplexity)?.label}
                <button
                  onClick={() => onComplexityChange('')}
                  className="hover:text-primary/80"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}