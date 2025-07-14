import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        default: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base",
      },
      resize: {
        none: "resize-none",
        both: "resize",
        horizontal: "resize-x",
        vertical: "resize-y",
      },
    },
    defaultVariants: {
      size: "default",
      resize: "vertical",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean
  minRows?: number
  maxRows?: number
  characterCount?: boolean
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size,
      resize,
      autoResize = false,
      minRows = 3,
      maxRows,
      characterCount = false,
      maxLength,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || "")
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const mergedRef = React.useMemo(
      () => (node: HTMLTextAreaElement) => {
        textareaRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref && "current" in ref) {
          ;(ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
        }
      },
      [ref]
    )

    // Auto-resize functionality
    const adjustHeight = React.useCallback(() => {
      const textarea = textareaRef.current
      if (!textarea || !autoResize) return

      textarea.style.height = "auto"
      const scrollHeight = textarea.scrollHeight
      
      let newHeight = scrollHeight
      
      if (minRows) {
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight)
        const minHeight = lineHeight * minRows
        newHeight = Math.max(newHeight, minHeight)
      }
      
      if (maxRows) {
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight)
        const maxHeight = lineHeight * maxRows
        newHeight = Math.min(newHeight, maxHeight)
      }
      
      textarea.style.height = `${newHeight}px`
    }, [autoResize, minRows, maxRows])

    // Handle value changes
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setInternalValue(newValue)
        onChange?.(e)
        
        if (autoResize) {
          // Use setTimeout to ensure the value is set before adjusting height
          setTimeout(adjustHeight, 0)
        }
      },
      [onChange, autoResize, adjustHeight]
    )

    // Adjust height on mount and when value changes externally
    React.useEffect(() => {
      if (autoResize) {
        adjustHeight()
      }
    }, [autoResize, adjustHeight, value])

    // Update internal value when value prop changes
    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value as string)
      }
    }, [value])

    const currentValue = value !== undefined ? value : internalValue
    const charCount = typeof currentValue === "string" ? currentValue.length : 0

    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            textareaVariants({ size, resize: autoResize ? "none" : resize }),
            autoResize && "overflow-hidden",
            className
          )}
          ref={mergedRef}
          value={currentValue}
          onChange={handleChange}
          maxLength={maxLength}
          {...props}
        />
        {characterCount && (
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {charCount}
            {maxLength && `/${maxLength}`}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }