"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const sliderVariants = cva(
  "relative flex touch-none select-none items-center",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: "h-full flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

const sliderTrackVariants = cva(
  "relative grow overflow-hidden rounded-full",
  {
    variants: {
      orientation: {
        horizontal: "h-full w-full",
        vertical: "h-full w-full",
      },
      size: {
        sm: "[&[data-orientation=horizontal]]:h-0.5 [&[data-orientation=vertical]]:w-0.5",
        default: "[&[data-orientation=horizontal]]:h-1 [&[data-orientation=vertical]]:w-1",
        lg: "[&[data-orientation=horizontal]]:h-1.5 [&[data-orientation=vertical]]:w-1.5",
        xl: "[&[data-orientation=horizontal]]:h-2 [&[data-orientation=vertical]]:w-2",
      },
      variant: {
        default: "bg-secondary",
        primary: "bg-primary/20",
        destructive: "bg-destructive/20",
        success: "bg-green-500/20",
        warning: "bg-yellow-500/20",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "default",
      variant: "default",
    },
  }
)

const sliderRangeVariants = cva(
  "absolute rounded-full",
  {
    variants: {
      orientation: {
        horizontal: "h-full",
        vertical: "w-full",
      },
      variant: {
        default: "bg-primary",
        primary: "bg-primary",
        destructive: "bg-destructive",
        success: "bg-green-500",
        warning: "bg-yellow-500",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
    },
  }
)

const sliderThumbVariants = cva(
  "block rounded-full bg-background ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing",
  {
    variants: {
      size: {
        sm: "h-3 w-3 border shadow-sm hover:scale-110",
        default: "h-4 w-4 border-2 shadow hover:scale-105",
        lg: "h-5 w-5 border-2 shadow-md hover:scale-105",
        xl: "h-6 w-6 border-2 shadow-lg hover:scale-105",
      },
      variant: {
        default: "border-primary hover:bg-accent",
        primary: "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "border-green-500 bg-green-500 text-white hover:bg-green-600",
        warning: "border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'orientation'>,
    VariantProps<typeof sliderVariants>,
    VariantProps<typeof sliderTrackVariants> {
  showTooltip?: boolean
  formatValue?: (value: number) => string
  marks?: Array<{ value: number; label?: string }>
  showMarks?: boolean
  thumbClassName?: string
  trackClassName?: string
  rangeClassName?: string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ 
  className, 
  orientation = "horizontal",
  size = "default",
  variant = "default",
  showTooltip = false,
  formatValue,
  marks,
  showMarks = false,
  thumbClassName,
  trackClassName,
  rangeClassName,
  value,
  defaultValue,
  onValueChange,
  ...props 
}, ref) => {
  const [localValue, setLocalValue] = React.useState(value || defaultValue || [0])
  const [isDragging, setIsDragging] = React.useState(false)

  React.useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value)
    }
  }, [value])

  const handleValueChange = (newValue: number[]) => {
    setLocalValue(newValue)
    onValueChange?.(newValue)
  }

  const displayValue = formatValue ? formatValue(localValue[0]) : localValue[0]

  return (
    <div className="relative">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(sliderVariants({ orientation }), className)}
        orientation={orientation || undefined}
        value={localValue}
        onValueChange={handleValueChange}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
        {...props}
      >
        <SliderPrimitive.Track 
          className={cn(
            sliderTrackVariants({ orientation, size, variant }),
            trackClassName
          )}
        >
          <SliderPrimitive.Range 
            className={cn(
              sliderRangeVariants({ orientation, variant }),
              rangeClassName
            )}
          />
        </SliderPrimitive.Track>
        {localValue.map((_, index) => (
          <SliderPrimitive.Thumb 
            key={index}
            className={cn(
              sliderThumbVariants({ size, variant }),
              thumbClassName
            )}
          >
            {showTooltip && (isDragging || showTooltip === true) && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-in fade-in-0 zoom-in-95 whitespace-nowrap rounded-md bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md">
                {formatValue ? formatValue(localValue[index]) : localValue[index]}
                <div className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-popover border-b border-r border-border" />
              </div>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
      
      {showMarks && marks && (
        <div className="relative mt-2">
          {marks.map((mark) => {
            const percent = ((mark.value - (props.min || 0)) / ((props.max || 100) - (props.min || 0))) * 100
            return (
              <div
                key={mark.value}
                className="absolute -translate-x-1/2"
                style={{ left: `${percent}%` }}
              >
                <div className="h-1 w-px bg-border/50" />
                {mark.label && (
                  <span className="mt-1 block text-[10px] font-medium text-muted-foreground">
                    {mark.label}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }