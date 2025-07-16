'use client'

import { Badge } from '@/components/ui/badge'

export function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}

export function BadgeVariantsPreview() {
  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Variants</h4>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Use Cases</h4>
        <div className="flex flex-wrap gap-2">
          <Badge>New</Badge>
          <Badge variant="secondary">Beta</Badge>
          <Badge variant="outline">Coming Soon</Badge>
          <Badge variant="destructive">Deprecated</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Status Indicators</h4>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-green-500 text-white">Active</Badge>
          <Badge className="bg-yellow-500 text-white">Pending</Badge>
          <Badge className="bg-red-500 text-white">Inactive</Badge>
          <Badge className="bg-blue-500 text-white">In Progress</Badge>
        </div>
      </div>
    </div>
  )
}