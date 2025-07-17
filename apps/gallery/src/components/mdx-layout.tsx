/**
 * MDX Layout Component
 * Provides consistent styling and navigation for MDX documentation pages
 */

import { ReactNode } from 'react'
import { Header } from './header'
import { Breadcrumb } from './breadcrumb'
import { Badge } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface MDXLayoutProps {
  children: ReactNode
  title: string
  description?: string
  category?: string
  status?: 'alpha' | 'beta' | 'stable'
  complexity?: 'simple' | 'medium' | 'complex'
  tags?: string[]
  className?: string
}

const statusColors = {
  alpha: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  stable: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
}

const complexityColors = {
  simple: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  complex: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

export function MDXLayout({ 
  children, 
  title, 
  description, 
  category, 
  status = 'stable', 
  complexity = 'simple',
  tags = [],
  className 
}: MDXLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        {category && (
          <Breadcrumb 
            items={[
              { label: category, href: `/category/${category.toLowerCase()}` },
              { label: title, isCurrentPage: true }
            ]} 
            className="mb-6"
          />
        )}

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                {description && (
                  <p className="text-lg text-muted-foreground">{description}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={cn('px-3 py-1', statusColors[status])}>
                  {status}
                </Badge>
                <Badge className={cn('px-3 py-1', complexityColors[complexity])}>
                  {complexity}
                </Badge>
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* MDX Content */}
          <div className={cn('prose prose-stone dark:prose-invert max-w-none', className)}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

// Wrapper component for easier usage in MDX files
export function ComponentDoc({ 
  title, 
  description, 
  category, 
  status, 
  complexity, 
  tags, 
  children 
}: MDXLayoutProps) {
  return (
    <MDXLayout
      title={title}
      description={description}
      category={category}
      status={status}
      complexity={complexity}
      tags={tags}
    >
      {children}
    </MDXLayout>
  )
}