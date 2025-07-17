"use client"

import * as React from "react"
import { {{ComponentName}} } from "@lightmind/ui"
import { cn } from "@/lib/utils"

export function {{ComponentName}}Demo() {
  return (
    <div className="space-y-8">
      {/* Variants Section */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">{{ComponentName}} Variants</h3>
        <p className="text-muted-foreground mb-6">
          Different visual styles for various use cases
        </p>
        <div className="flex flex-wrap gap-4">
          <{{ComponentName}}>Default</{{ComponentName}}>
          <{{ComponentName}} variant="secondary">Secondary</{{ComponentName}}>
          {/* Add more variant examples */}
        </div>
      </div>

      {/* Sizes Section */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">{{ComponentName}} Sizes</h3>
        <p className="text-muted-foreground mb-6">
          Multiple size options for different contexts
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <{{ComponentName}} size="lg">Large</{{ComponentName}}>
          <{{ComponentName}} size="default">Default</{{ComponentName}}>
          <{{ComponentName}} size="sm">Small</{{ComponentName}}>
        </div>
      </div>

      {/* Interactive States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Interactive States</h3>
        <p className="text-muted-foreground mb-6">
          Different states and behaviors
        </p>
        <div className="space-y-4">
          {/* Add interactive examples here */}
          <div className="flex flex-wrap gap-4">
            <{{ComponentName}}>Normal State</{{ComponentName}}>
            {/* Add hover, active, disabled states as applicable */}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Common Use Cases</h3>
        <p className="text-muted-foreground mb-6">
          Practical examples and patterns
        </p>
        <div className="space-y-4">
          {/* Add real-world usage examples */}
          <div className="flex flex-wrap gap-4">
            <{{ComponentName}}>Example Usage</{{ComponentName}}>
          </div>
        </div>
      </div>
    </div>
  )
}