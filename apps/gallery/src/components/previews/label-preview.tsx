'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export function LabelPreview() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

export function LabelVariantsPreview() {
  return (
    <div className="space-y-6 p-4">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Variants</h4>
        <div className="space-y-2">
          <Label variant="default">Default label</Label>
          <Label variant="secondary">Secondary label</Label>
          <Label variant="muted">Muted label</Label>
          <Label variant="destructive">Destructive label</Label>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="space-y-2">
          <Label size="sm">Small label</Label>
          <Label size="default">Default label</Label>
          <Label size="lg">Large label</Label>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">With Form Controls</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" variant="default" size="sm">Username</Label>
            <Input type="text" id="username" placeholder="Enter username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" variant="default">Password</Label>
            <Input type="password" id="password" placeholder="Enter password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio" variant="secondary" size="lg">Biography</Label>
            <Input type="text" id="bio" placeholder="Tell us about yourself" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Error States</h4>
        <div className="space-y-2">
          <Label htmlFor="error-field" variant="destructive">Field with error</Label>
          <Input type="text" id="error-field" placeholder="Invalid input" className="border-destructive" />
          <Label variant="destructive" size="sm">This field is required</Label>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Disabled State</h4>
        <div className="space-y-2">
          <Label htmlFor="disabled-field" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled field</Label>
          <Input type="text" id="disabled-field" placeholder="Disabled input" disabled />
        </div>
      </div>
    </div>
  )
}