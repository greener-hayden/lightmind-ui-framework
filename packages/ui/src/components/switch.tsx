import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        default: "h-6 w-11",
        lg: "h-7 w-12",
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        destructive: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success: "data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-input",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        default: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-5 w-5 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const switchIconVariants = cva(
  "absolute inset-0 flex items-center justify-center transition-opacity",
  {
    variants: {
      size: {
        sm: "text-[8px]",
        default: "text-xs",
        lg: "text-sm",
      },
      state: {
        checked: "opacity-100",
        unchecked: "opacity-0",
      },
    },
    defaultVariants: {
      size: "default",
      state: "unchecked",
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  checkedIcon?: React.ReactNode
  uncheckedIcon?: React.ReactNode
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, variant, checkedIcon, uncheckedIcon, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(checked || false)

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleCheckedChange = (newChecked: boolean) => {
    setIsChecked(newChecked)
    props.onCheckedChange?.(newChecked)
  }

  return (
    <SwitchPrimitive.Root
      className={cn(switchVariants({ size, variant }), className)}
      checked={checked}
      onCheckedChange={handleCheckedChange}
      {...props}
      ref={ref}
    >
      {/* Background icons */}
      {checkedIcon && (
        <div className={cn(
          switchIconVariants({ 
            size, 
            state: isChecked ? "checked" : "unchecked" 
          }),
          "left-1 text-primary-foreground"
        )}>
          {checkedIcon}
        </div>
      )}
      {uncheckedIcon && (
        <div className={cn(
          switchIconVariants({ 
            size, 
            state: isChecked ? "unchecked" : "checked" 
          }),
          "right-1 text-muted-foreground"
        )}>
          {uncheckedIcon}
        </div>
      )}
      
      <SwitchPrimitive.Thumb
        className={cn(switchThumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  )
})
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch, switchVariants }