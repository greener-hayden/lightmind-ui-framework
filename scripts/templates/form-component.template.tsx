/**
 * @component {{ComponentName}}
 * @description {{DESCRIPTION}}
 * @category form
 * @complexity simple
 * @status stable
 * @tags {{TAGS}}
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const {{componentName}}Variants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface {{ComponentName}}Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof {{componentName}}Variants> {}

const {{ComponentName}} = React.forwardRef<HTMLInputElement, {{ComponentName}}Props>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn({{componentName}}Variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
{{ComponentName}}.displayName = "{{ComponentName}}"

export { {{ComponentName}}, {{componentName}}Variants }