import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      size: {
        sm: "h-4",
        default: "h-5",
        lg: "h-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const sliderTrackVariants = cva(
  "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      size: {
        sm: "h-1",
        default: "h-1.5",
        lg: "h-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const sliderRangeVariants = cva(
  "absolute h-full bg-primary transition-all duration-200"
)

const sliderThumbVariants = cva(
  "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
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

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  steps?: { value: number; label: string }[]
  showSteps?: boolean
  showValue?: boolean
  formatValue?: (value: number) => string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size, steps, showSteps = false, showValue = false, formatValue, ...props }, ref) => {
  const [currentValue, setCurrentValue] = React.useState(props.defaultValue || props.value || [0])

  const handleValueChange = (value: number[]) => {
    setCurrentValue(value)
    props.onValueChange?.(value)
  }

  return (
    <div className="w-full space-y-2">
      {showValue && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Value:</span>
          <span className="font-medium">
            {formatValue ? formatValue(currentValue[0]) : currentValue[0]}
          </span>
        </div>
      )}
      
      <SliderPrimitive.Root
        ref={ref}
        className={cn(sliderVariants({ size, className }))}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(sliderTrackVariants({ size }))}
        >
          <SliderPrimitive.Range className={sliderRangeVariants()} />
        </SliderPrimitive.Track>
        
        {/* Step markers */}
        {showSteps && steps && (
          <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{
                  left: `${(step.value / (props.max || 100)) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <SliderPrimitive.Thumb
          className={cn(sliderThumbVariants({ size }))}
        />
      </SliderPrimitive.Root>
      
      {/* Step labels below */}
      {showSteps && steps && (
        <div className="flex justify-between text-xs text-muted-foreground px-2">
          {steps.map((step, index) => (
            <span key={index} className="flex-1 text-center">
              {step.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider, sliderVariants }
export type { SliderProps }