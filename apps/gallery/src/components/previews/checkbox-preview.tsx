'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import type { CheckedState } from '@radix-ui/react-checkbox'

export function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" defaultChecked />
        <Label htmlFor="terms2">Subscribe to newsletter</Label>
      </div>
    </div>
  )
}

export function CheckboxVariantsPreview() {
  const [checked, setChecked] = useState<CheckedState>(false)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="small" size="sm" defaultChecked />
            <Label htmlFor="small" size="sm">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="default" size="default" defaultChecked />
            <Label htmlFor="default">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="large" size="lg" defaultChecked />
            <Label htmlFor="large" size="lg">Large</Label>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium">States</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="indeterminate" indeterminate />
            <Label htmlFor="indeterminate">Indeterminate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled checked</Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Interactive Examples</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="controlled"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <Label htmlFor="controlled">
              Controlled checkbox (currently {checked === true ? 'checked' : checked === 'indeterminate' ? 'indeterminate' : 'unchecked'})
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="indeterminate-toggle"
              indeterminate={indeterminate}
              onCheckedChange={() => setIndeterminate(!indeterminate)}
            />
            <Label htmlFor="indeterminate-toggle">
              Toggle indeterminate state
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Form Groups</h4>
        <div className="space-y-3">
          <Label size="lg">Select your interests:</Label>
          <div className="space-y-2 ml-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="tech" />
              <Label htmlFor="tech">Technology</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="design" />
              <Label htmlFor="design">Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="business" />
              <Label htmlFor="business">Business</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="science" />
              <Label htmlFor="science">Science</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">All Sizes with Labels</h4>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="sm-label" size="sm" defaultChecked />
            <Label htmlFor="sm-label" size="sm">Small checkbox with small label</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="default-label" size="default" defaultChecked />
            <Label htmlFor="default-label" size="default">Default checkbox with default label</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="lg-label" size="lg" defaultChecked />
            <Label htmlFor="lg-label" size="lg">Large checkbox with large label</Label>
          </div>
        </div>
      </div>
    </div>
  )
}