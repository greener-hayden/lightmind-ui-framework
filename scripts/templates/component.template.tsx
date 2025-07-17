/**
 * @component {{ComponentName}}
 * @description {{DESCRIPTION}}
 * @category {{CATEGORY}}
 * @complexity simple
 * @status stable
 * @tags {{TAGS}}
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const {{componentName}}Variants = cva(
  "{{BASE_CLASSES}}",
  {
    variants: {
      variant: {
        default: "{{DEFAULT_VARIANT_CLASSES}}",
        secondary: "{{SECONDARY_VARIANT_CLASSES}}",
        // Add more variants as needed
      },
      size: {
        default: "{{DEFAULT_SIZE_CLASSES}}",
        sm: "{{SM_SIZE_CLASSES}}",
        lg: "{{LG_SIZE_CLASSES}}",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface {{ComponentName}}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof {{componentName}}Variants> {
  // Add component-specific props here
}

const {{ComponentName}} = React.forwardRef<HTMLDivElement, {{ComponentName}}Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn({{componentName}}Variants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
{{ComponentName}}.displayName = "{{ComponentName}}"

export { {{ComponentName}}, {{componentName}}Variants }