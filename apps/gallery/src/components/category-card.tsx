/**
 * Category Card Component
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { ArrowRight, Grid3x3, FileText, Navigation, MessageCircle, Layout } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@lightmind/ui'
import { cn } from '@/lib/utils'
import { CategoryInfo } from '@/lib/component-registry'

interface CategoryCardProps {
  category: CategoryInfo
  className?: string
}

// Icon mapping for categories
const categoryIcons = {
  form: FileText,
  display: Grid3x3,
  navigation: Navigation,
  feedback: MessageCircle,
  layout: Layout,
} as const

export function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = categoryIcons[category.id] || Grid3x3
  
  return (
    <Link href={`/category/${category.id}`} className="group">
      <Card className={cn(
        'transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group-hover:border-primary/50',
        className
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className={cn(
              'p-3 rounded-lg',
              category.color,
              'bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-200'
            )}>
              <Icon className={cn(
                'h-6 w-6',
                category.color.replace('bg-', 'text-')
              )} />
            </div>
            <Badge variant="secondary" className="text-xs">
              {category.componentCount} component{category.componentCount !== 1 ? 's' : ''}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Explore components</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// Grid layout for category cards
interface CategoryGridProps {
  categories: CategoryInfo[]
  className?: string
}

export function CategoryGrid({ categories, className }: CategoryGridProps) {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      className
    )}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

// Hero section for categories
interface CategoryHeroProps {
  title: string
  description: string
  totalComponents: number
  className?: string
}

export function CategoryHero({ title, description, totalComponents, className }: CategoryHeroProps) {
  return (
    <div className={cn('text-center space-y-4', className)}>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Grid3x3 className="h-4 w-4" />
          <span>{totalComponents} components</span>
        </div>
        <div className="flex items-center space-x-1">
          <Layout className="h-4 w-4" />
          <span>5 categories</span>
        </div>
      </div>
    </div>
  )
}

// Statistics cards for the home page
interface StatsCardProps {
  title: string
  value: string | number
  description: string
  icon: React.ComponentType<{ className?: string }>
  className?: string
}

export function StatsCard({ title, value, description, icon: Icon, className }: StatsCardProps) {
  return (
    <Card className={cn('text-center', className)}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm font-medium text-muted-foreground">{title}</div>
        <div className="text-xs text-muted-foreground mt-1">{description}</div>
      </CardContent>
    </Card>
  )
}

// Quick stats component
interface QuickStatsProps {
  stats: {
    totalComponents: number
    categoryStats: Array<{ category: string; count: number }>
    complexityStats: { simple: number; medium: number; complex: number }
    statusStats: { alpha: number; beta: number; stable: number }
  }
  className?: string
}

export function QuickStats({ stats, className }: QuickStatsProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4', className)}>
      <StatsCard
        title="Total Components"
        value={stats.totalComponents}
        description="Ready to use"
        icon={Grid3x3}
      />
      <StatsCard
        title="Simple"
        value={stats.complexityStats.simple}
        description="Easy to implement"
        icon={FileText}
      />
      <StatsCard
        title="Medium"
        value={stats.complexityStats.medium}
        description="Moderate complexity"
        icon={Navigation}
      />
      <StatsCard
        title="Complex"
        value={stats.complexityStats.complex}
        description="Advanced features"
        icon={Layout}
      />
    </div>
  )
}