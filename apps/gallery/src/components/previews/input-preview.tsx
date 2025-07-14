'use client'

import { Input } from '@/components/ui/input'

export function InputPreview() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <Input placeholder="Enter your email" />
      <Input type="password" placeholder="Password" />
      <Input disabled placeholder="Disabled input" />
    </div>
  )
}

export function InputVariantsPreview() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="Enter your password" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Search</label>
        <Input type="search" placeholder="Search..." />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Number</label>
        <Input type="number" placeholder="0" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled</label>
        <Input disabled placeholder="Disabled input" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">With value</label>
        <Input value="Pre-filled value" readOnly />
      </div>
    </div>
  )
}