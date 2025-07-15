/**
 * Breadcrumb Navigation Component
 * Part of the LightMind UI Framework Gallery
 */

'use client'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      className={cn(
        'flex items-center space-x-1 text-sm text-muted-foreground',
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {/* Home link */}
        <li>
          <Link 
            href="/"
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
            {item.href && !item.isCurrentPage ? (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={cn(
                  item.isCurrentPage && 'text-foreground font-medium'
                )}
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumb items
export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = []

  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1
    
    // Handle category pages
    if (segments[index - 1] === 'category') {
      items.push({
        label: formatCategoryName(segment),
        href: isLast ? undefined : `/category/${segment}`,
        isCurrentPage: isLast
      })
    }
    // Handle component pages
    else if (segments[index - 1] === 'component') {
      items.push({
        label: formatComponentName(segment),
        href: isLast ? undefined : `/component/${segment}`,
        isCurrentPage: isLast
      })
    }
    // Handle search pages
    else if (segment === 'search') {
      items.push({
        label: 'Search Results',
        href: isLast ? undefined : '/search',
        isCurrentPage: isLast
      })
    }
  })

  return items
}

// Helper function to format category names
function formatCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'form': 'Form Components',
    'display': 'Display Components',
    'navigation': 'Navigation',
    'feedback': 'Feedback',
    'layout': 'Layout',
  }
  return categoryMap[category] || category
}

// Helper function to format component names
function formatComponentName(component: string): string {
  return component
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Pre-built breadcrumb configurations
export const breadcrumbConfigs = {
  home: [],
  category: (categoryName: string) => [
    { label: formatCategoryName(categoryName), isCurrentPage: true }
  ],
  component: (categoryName: string, componentName: string) => [
    { label: formatCategoryName(categoryName), href: `/category/${categoryName}` },
    { label: formatComponentName(componentName), isCurrentPage: true }
  ],
  search: [
    { label: 'Search Results', isCurrentPage: true }
  ]
}