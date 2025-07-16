export type CategoryId = 'form' | 'display' | 'navigation' | 'feedback' | 'layout'

export interface CategoryInfo {
  id: CategoryId
  name: string
  description: string
  icon?: string
  color: string
}

export const categories: CategoryInfo[] = [
  {
    id: 'form',
    name: 'Form',
    description: 'Interactive form components',
    color: 'bg-blue-500'
  },
  {
    id: 'display',
    name: 'Display',
    description: 'Content display components',
    color: 'bg-green-500'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and menu components',
    color: 'bg-purple-500'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback components',
    color: 'bg-orange-500'
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structure components',
    color: 'bg-pink-500'
  }
]