'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function RadioGroupPreview() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export function RadioGroupVariantsPreview() {
  const [value, setValue] = useState('option-1')
  const [horizontalValue, setHorizontalValue] = useState('small')

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="flex items-center gap-6">
          <RadioGroup defaultValue="sm" orientation="horizontal">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sm" id="sm" size="sm" />
              <Label htmlFor="sm" size="sm">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="default" size="default" />
              <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lg" id="lg" size="lg" />
              <Label htmlFor="lg" size="lg">Large</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Orientation - Vertical (Default)</h4>
        <RadioGroup defaultValue="vertical-1" orientation="vertical">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical-1" id="vertical-1" />
            <Label htmlFor="vertical-1">First option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical-2" id="vertical-2" />
            <Label htmlFor="vertical-2">Second option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vertical-3" id="vertical-3" />
            <Label htmlFor="vertical-3">Third option</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Orientation - Horizontal</h4>
        <RadioGroup 
          defaultValue="horizontal-1" 
          orientation="horizontal"
          value={horizontalValue}
          onValueChange={setHorizontalValue}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="horizontal-1" size="sm" />
            <Label htmlFor="horizontal-1" size="sm">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="horizontal-2" />
            <Label htmlFor="horizontal-2">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="horizontal-3" size="lg" />
            <Label htmlFor="horizontal-3" size="lg">Large</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground">Selected: {horizontalValue}</p>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">States</h4>
        <div className="space-y-3">
          <RadioGroup defaultValue="enabled">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enabled" id="enabled" />
              <Label htmlFor="enabled">Enabled & Selected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unselected" id="unselected" />
              <Label htmlFor="unselected">Enabled & Unselected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled" id="disabled" disabled />
              <Label htmlFor="disabled" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Disabled
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Controlled Example</h4>
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="controlled-1" />
            <Label htmlFor="controlled-1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="controlled-2" />
            <Label htmlFor="controlled-2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="controlled-3" />
            <Label htmlFor="controlled-3">Option 3</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground">Currently selected: {value}</p>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Form Groups</h4>
        <div className="space-y-4">
          <div>
            <Label size="lg" className="mb-3 block">Choose your plan:</Label>
            <RadioGroup defaultValue="pro" className="ml-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="plan-free" />
                <Label htmlFor="plan-free">Free - $0/month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Pro - $9/month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="enterprise" id="plan-enterprise" />
                <Label htmlFor="plan-enterprise">Enterprise - $29/month</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label size="lg" className="mb-3 block">Notification preferences:</Label>
            <RadioGroup defaultValue="weekly" className="ml-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="notify-none" />
                <Label htmlFor="notify-none">No notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="notify-weekly" />
                <Label htmlFor="notify-weekly">Weekly digest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="notify-daily" />
                <Label htmlFor="notify-daily">Daily updates</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="instant" id="notify-instant" />
                <Label htmlFor="notify-instant">Instant notifications</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}