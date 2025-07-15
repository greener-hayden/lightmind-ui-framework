/**
 * Command Component - Command menu component
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  filter?: (value: string, search: string) => number
  shouldFilter?: boolean
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, value, onValueChange, filter, shouldFilter = true, ...props }, ref) => {
    const [search, setSearch] = React.useState('')

    const handleSearchChange = (value: string) => {
      setSearch(value)
      onValueChange?.(value)
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
          className
        )}
        {...props}
      />
    )
  }
)
Command.displayName = 'Command'

export interface CommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, ...props }, ref) => (
    <div className="flex items-center border-b px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <Input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground border-0 focus:ring-0 focus:ring-offset-0',
          className
        )}
        {...props}
      />
    </div>
  )
)
CommandInput.displayName = 'CommandInput'

export interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
)
CommandList.displayName = 'CommandList'

export interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('py-6 text-center text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)
CommandEmpty.displayName = 'CommandEmpty'

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode
}

export const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, heading, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground',
        className
      )}
      {...props}
    >
      {heading && (
        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
          {heading}
        </div>
      )}
    </div>
  )
)
CommandGroup.displayName = 'CommandGroup'

export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  onSelectItem?: (value: string) => void
  value?: string
}

export const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ className, disabled, onSelectItem, value, ...props }, ref) => {
    const handleSelect = () => {
      if (disabled) return
      onSelectItem?.(value || '')
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          'focus:bg-accent focus:text-accent-foreground',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        onClick={handleSelect}
        {...props}
      />
    )
  }
)
CommandItem.displayName = 'CommandItem'

export interface CommandSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandSeparator = React.forwardRef<HTMLDivElement, CommandSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  )
)
CommandSeparator.displayName = 'CommandSeparator'

export interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const CommandShortcut = React.forwardRef<HTMLSpanElement, CommandShortcutProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  )
)
CommandShortcut.displayName = 'CommandShortcut'

export default Command