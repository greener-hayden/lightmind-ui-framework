import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const checkboxIconVariants = cva("flex items-center justify-center text-current", {
  variants: {
    size: {
      sm: "h-2.5 w-2.5",
      default: "h-3.5 w-3.5",
      lg: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, indeterminate, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ size, className }))}
    {...props}
    data-state={
      indeterminate ? "indeterminate" : props.checked ? "checked" : "unchecked"
    }
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      {indeterminate ? (
        <Minus className={cn(checkboxIconVariants({ size }))} />
      ) : (
        <Check className={cn(checkboxIconVariants({ size }))} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, checkboxVariants }