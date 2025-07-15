/**
 * FilterableTable Component - Adds per-column filtering capabilities to tables
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { Filter, FilterX, Search, Calendar, Hash, List, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter,
  type TableProps
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Checkbox } from '@/components/ui/checkbox'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'

export type FilterType = 'text' | 'select' | 'multiselect' | 'date' | 'daterange' | 'number' | 'boolean'

export interface FilterOption {
  label: string
  value: any
  count?: number
}

export interface ColumnFilter<T> {
  id: keyof T
  type: FilterType
  label: string
  options?: FilterOption[]
  placeholder?: string
  min?: number
  max?: number
  step?: number
  operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'between'
}

export interface FilterValue {
  value: any
  operator?: string
  label?: string
}

export interface FilterableTableProps<T = any> extends TableProps {
  data: T[]
  columns: Array<{
    id: string
    header: string
    accessor: string
    cell?: (value: any, row: T) => React.ReactNode
    width?: number
    filter?: ColumnFilter<T>
    sortable?: boolean
  }>
  filters?: Record<string, FilterValue>
  onFiltersChange?: (filters: Record<string, FilterValue>) => void
  showFilterBar?: boolean
  showFilterCount?: boolean
  showClearFilters?: boolean
  emptyMessage?: string
  children?: React.ReactNode
}

// Individual filter components
const TextFilter = ({ 
  filter, 
  value, 
  onChange, 
  placeholder 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
  placeholder?: string
}) => {
  const [inputValue, setInputValue] = React.useState(value?.value || '')

  const handleChange = (newValue: string) => {
    setInputValue(newValue)
    if (newValue.trim()) {
      onChange({
        value: newValue,
        operator: filter.operator || 'contains',
        label: newValue
      })
    } else {
      onChange(undefined)
    }
  }

  return (
    <Input
      type="text"
      placeholder={placeholder || `Filter ${filter.label}`}
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full"
    />
  )
}

const SelectFilter = ({ 
  filter, 
  value, 
  onChange 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
}) => {
  const handleChange = (newValue: string) => {
    if (newValue === 'all') {
      onChange(undefined)
    } else {
      const option = filter.options?.find(opt => opt.value === newValue)
      onChange({
        value: newValue,
        operator: 'equals',
        label: option?.label || newValue
      })
    }
  }

  return (
    <Select value={value?.value || 'all'} onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Filter ${filter.label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All {filter.label}</SelectItem>
        {filter.options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center justify-between w-full">
              <span>{option.label}</span>
              {option.count && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {option.count}
                </Badge>
              )}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const MultiSelectFilter = ({ 
  filter, 
  value, 
  onChange 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
}) => {
  const [open, setOpen] = React.useState(false)
  const selectedValues = new Set(value?.value || [])

  const handleToggle = (optionValue: any) => {
    const newValues = new Set(selectedValues)
    if (newValues.has(optionValue)) {
      newValues.delete(optionValue)
    } else {
      newValues.add(optionValue)
    }

    if (newValues.size === 0) {
      onChange(undefined)
    } else {
      const selectedOptions = filter.options?.filter(opt => newValues.has(opt.value))
      onChange({
        value: Array.from(newValues),
        operator: 'in',
        label: `${newValues.size} selected`
      })
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedValues.size > 0 ? (
            `${selectedValues.size} selected`
          ) : (
            `Select ${filter.label}`
          )}
          <List className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${filter.label}...`} />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {filter.options?.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelectItem={() => handleToggle(option.value)}
                >
                  <Checkbox
                    checked={selectedValues.has(option.value)}
                    className="mr-2"
                  />
                  <div className="flex items-center justify-between w-full">
                    <span>{option.label}</span>
                    {option.count && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {option.count}
                      </Badge>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const NumberFilter = ({ 
  filter, 
  value, 
  onChange 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
}) => {
  const [inputValue, setInputValue] = React.useState(value?.value || '')

  const handleChange = (newValue: string) => {
    setInputValue(newValue)
    const numValue = parseFloat(newValue)
    if (!isNaN(numValue)) {
      onChange({
        value: numValue,
        operator: filter.operator || 'equals',
        label: newValue
      })
    } else if (newValue === '') {
      onChange(undefined)
    }
  }

  return (
    <Input
      type="number"
      placeholder={`Filter ${filter.label}`}
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
      min={filter.min}
      max={filter.max}
      step={filter.step}
      className="w-full"
    />
  )
}

const DateFilter = ({ 
  filter, 
  value, 
  onChange 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
}) => {
  const [open, setOpen] = React.useState(false)
  const selectedDate = value?.value ? new Date(value.value) : undefined

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      onChange({
        value: date.toISOString().split('T')[0],
        operator: 'equals',
        label: format(date, 'PP')
      })
    } else {
      onChange(undefined)
    }
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, 'PP') : `Filter ${filter.label}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <CalendarComponent
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

const BooleanFilter = ({ 
  filter, 
  value, 
  onChange 
}: {
  filter: ColumnFilter<any>
  value: FilterValue | undefined
  onChange: (value: FilterValue | undefined) => void
}) => {
  const handleChange = (newValue: string) => {
    if (newValue === 'all') {
      onChange(undefined)
    } else {
      onChange({
        value: newValue === 'true',
        operator: 'equals',
        label: newValue === 'true' ? 'Yes' : 'No'
      })
    }
  }

  return (
    <Select value={value?.value === undefined ? 'all' : value.value.toString()} onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Filter ${filter.label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="true">Yes</SelectItem>
        <SelectItem value="false">No</SelectItem>
      </SelectContent>
    </Select>
  )
}

// Main FilterableTable component
export const FilterableTable = <T extends Record<string, any>>({
  data,
  columns,
  filters = {},
  onFiltersChange,
  showFilterBar = true,
  showFilterCount = true,
  showClearFilters = true,
  emptyMessage = 'No data available',
  children,
  className,
  ...props
}: FilterableTableProps<T>) => {
  const [localFilters, setLocalFilters] = React.useState<Record<string, FilterValue>>(filters)

  const activeFilters = Object.entries(localFilters).filter(([key, value]) => 
    value !== undefined && value !== null
  )

  const handleFilterChange = (columnId: string, filterValue: FilterValue | undefined) => {
    const newFilters = { ...localFilters }
    
    if (filterValue === undefined) {
      delete newFilters[columnId]
    } else {
      newFilters[columnId] = filterValue
    }
    
    setLocalFilters(newFilters)
    onFiltersChange?.(newFilters)
  }

  const handleClearFilters = () => {
    setLocalFilters({})
    onFiltersChange?.({})
  }

  const renderFilter = (column: any) => {
    if (!column.filter) return null

    const currentValue = localFilters[column.id]
    const commonProps = {
      filter: column.filter,
      value: currentValue,
      onChange: (value: FilterValue | undefined) => handleFilterChange(column.id, value)
    }

    switch (column.filter.type) {
      case 'text':
        return <TextFilter {...commonProps} placeholder={column.filter.placeholder} />
      case 'select':
        return <SelectFilter {...commonProps} />
      case 'multiselect':
        return <MultiSelectFilter {...commonProps} />
      case 'number':
        return <NumberFilter {...commonProps} />
      case 'date':
        return <DateFilter {...commonProps} />
      case 'boolean':
        return <BooleanFilter {...commonProps} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {/* Active Filters Bar */}
      {showFilterBar && activeFilters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Active filters:</span>
          </div>
          
          {activeFilters.map(([key, value]) => {
            const column = columns.find(col => col.id === key)
            return (
              <Badge key={key} variant="secondary" className="gap-1">
                {column?.filter?.label || key}: {value.label || value.value}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-3 w-3 p-0 hover:bg-transparent"
                  onClick={() => handleFilterChange(key, undefined)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )
          })}
          
          {showClearFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilters}
              className="h-6 gap-1"
            >
              <FilterX className="h-3 w-3" />
              Clear all
            </Button>
          )}
        </div>
      )}

      {/* Filter Count */}
      {showFilterCount && activeFilters.length > 0 && (
        <div className="text-sm text-muted-foreground">
          {activeFilters.length} filter{activeFilters.length !== 1 ? 's' : ''} active
        </div>
      )}

      {/* Table */}
      <Table className={className} {...props}>
        {children}
        
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead 
                key={column.id}
                style={{ width: column.width }}
                className={cn(
                  column.sortable && 'cursor-pointer hover:bg-muted/50'
                )}
              >
                <div className="space-y-2">
                  <div>{column.header}</div>
                  {column.filter && (
                    <div className="min-w-32">
                      {renderFilter(column)}
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={columns.length} 
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => {
                  const value = row[column.accessor]
                  return (
                    <TableCell key={column.id}>
                      {column.cell ? column.cell(value, row) : value}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// Hook for managing filter state
export const useTableFilters = (initialFilters: Record<string, FilterValue> = {}) => {
  const [filters, setFilters] = React.useState<Record<string, FilterValue>>(initialFilters)

  const updateFilter = React.useCallback((columnId: string, filterValue: FilterValue | undefined) => {
    setFilters(prev => {
      const newFilters = { ...prev }
      if (filterValue === undefined) {
        delete newFilters[columnId]
      } else {
        newFilters[columnId] = filterValue
      }
      return newFilters
    })
  }, [])

  const clearFilter = React.useCallback((columnId: string) => {
    setFilters(prev => {
      const newFilters = { ...prev }
      delete newFilters[columnId]
      return newFilters
    })
  }, [])

  const clearAllFilters = React.useCallback(() => {
    setFilters({})
  }, [])

  const hasActiveFilters = Object.keys(filters).length > 0

  const activeFilterCount = Object.keys(filters).length

  return {
    filters,
    setFilters,
    updateFilter,
    clearFilter,
    clearAllFilters,
    hasActiveFilters,
    activeFilterCount
  }
}

// Utility for creating filter options from data
export const createFilterOptions = (
  data: any[],
  accessor: keyof any,
  labelFormatter?: (value: any) => string
): FilterOption[] => {
  const valueMap = new Map<any, number>()
  
  data.forEach(item => {
    const value = item[accessor]
    if (value !== null && value !== undefined) {
      valueMap.set(value, (valueMap.get(value) || 0) + 1)
    }
  })

  return Array.from(valueMap.entries())
    .sort(([a], [b]) => String(a).localeCompare(String(b)))
    .map(([value, count]) => ({
      value,
      label: labelFormatter ? labelFormatter(value) : String(value),
      count
    }))
}

export default FilterableTable