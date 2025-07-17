/**
 * @component {{ComponentName}}
 * @description {{DESCRIPTION}}
 * @category {{CATEGORY}}
 * @complexity moderate
 * @status stable
 * @tags {{TAGS}}
 */

import * as React from "react"
import * as {{ComponentName}}Primitive from "@radix-ui/react-{{RADIX_COMPONENT}}"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const {{ComponentName}} = {{ComponentName}}Primitive.Root

const {{ComponentName}}Trigger = {{ComponentName}}Primitive.Trigger

const {{ComponentName}}Content = React.forwardRef<
  React.ElementRef<typeof {{ComponentName}}Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof {{ComponentName}}Primitive.Content> &
    VariantProps<typeof {{componentName}}ContentVariants>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <{{ComponentName}}Primitive.Portal>
    <{{ComponentName}}Primitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        {{componentName}}ContentVariants(),
        className
      )}
      {...props}
    />
  </{{ComponentName}}Primitive.Portal>
))
{{ComponentName}}Content.displayName = {{ComponentName}}Primitive.Content.displayName

const {{componentName}}ContentVariants = cva(
  "z-50 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        default: "w-72",
        sm: "w-64",
        lg: "w-80",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export { {{ComponentName}}, {{ComponentName}}Trigger, {{ComponentName}}Content, {{componentName}}ContentVariants }