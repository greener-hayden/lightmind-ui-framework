/**
 * SortableTable Component - Advanced multi-column sorting for tables
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { ArrowUp, ArrowDown, ArrowUpDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  type TableProps
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export interface SortConfig<T> {
  key: keyof T
  direction: 'asc' | 'desc'
  priority: number
}

export interface SortableColumn<T> {
  id: string
  header: string
  accessor: keyof T
  cell?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
  sortType?: 'string' | 'number' | 'date' | 'boolean'
  width?: number
  align?: 'left' | 'center' | 'right'
  customSort?: (a: T, b: T) => number
}

export interface SortableTableProps<T = any> extends TableProps {
  data: T[]
  columns: SortableColumn<T>[]
  sortConfig?: SortConfig<T>[]
  onSortChange?: (sortConfig: SortConfig<T>[]) => void
  multiColumnSort?: boolean
  showSortIndicators?: boolean
  showSortPriority?: boolean
  defaultSort?: SortConfig<T>[]
  maxSortColumns?: number
  emptyMessage?: string
  children?: React.ReactNode
}

const SortIcon = ({ direction, priority, showPriority }: { 
  direction: 'asc' | 'desc' | null
  priority?: number 
  showPriority?: boolean
}) => {
  return (
    <div className="flex items-center gap-1 ml-2">
      <div className="flex flex-col">
        {direction === null ? (
          <ArrowUpDown className="h-3 w-3 text-muted-foreground/50" />
        ) : direction === 'asc' ? (
          <ArrowUp className="h-3 w-3 text-foreground" />
        ) : (
          <ArrowDown className="h-3 w-3 text-foreground" />
        )}
      </div>
      {showPriority && priority !== undefined && direction !== null && (
        <Badge variant="secondary" className="text-xs h-4 w-4 p-0 flex items-center justify-center">
          {priority + 1}
        </Badge>
      )}
    </div>
  )
}

export const SortableTable = <T extends Record<string, any>>({
  data,
  columns,
  sortConfig = [],
  onSortChange,
  multiColumnSort = false,
  showSortIndicators = true,
  showSortPriority = true,
  defaultSort = [],
  maxSortColumns = 3,
  emptyMessage = 'No data available',
  children,
  className,
  ...props
}: SortableTableProps<T>) => {
  const [localSortConfig, setLocalSortConfig] = React.useState<SortConfig<T>[]>(
    sortConfig.length > 0 ? sortConfig : defaultSort
  )

  const handleSort = (column: SortableColumn<T>, isMultiColumn: boolean = false) => {
    if (!column.sortable) return

    const newSortConfig = [...localSortConfig]
    const existingIndex = newSortConfig.findIndex(config => config.key === column.accessor)

    if (existingIndex >= 0) {
      // Update existing sort
      const current = newSortConfig[existingIndex]
      if (current.direction === 'asc') {
        newSortConfig[existingIndex] = { ...current, direction: 'desc' }
      } else {
        // Remove sort if it was desc (cycle through: none -> asc -> desc -> none)
        newSortConfig.splice(existingIndex, 1)
        // Update priorities
        newSortConfig.forEach((config, index) => {
          config.priority = index
        })
      }
    } else {
      // Add new sort
      if (!isMultiColumn || !multiColumnSort) {
        // Single column sort - replace all
        newSortConfig.length = 0
        newSortConfig.push({
          key: column.accessor,
          direction: 'asc',
          priority: 0
        })
      } else {
        // Multi-column sort - add to existing
        if (newSortConfig.length >= maxSortColumns) {
          // Remove the oldest sort (highest priority number)
          const oldestIndex = newSortConfig.findIndex(config => 
            config.priority === Math.max(...newSortConfig.map(c => c.priority))
          )
          newSortConfig.splice(oldestIndex, 1)
          // Update priorities
          newSortConfig.forEach((config, index) => {
            config.priority = index
          })
        }
        
        newSortConfig.push({
          key: column.accessor,
          direction: 'asc',
          priority: newSortConfig.length
        })
      }
    }

    setLocalSortConfig(newSortConfig)
    onSortChange?.(newSortConfig)
  }

  const clearSort = () => {
    setLocalSortConfig([])
    onSortChange?.([])
  }

  // Sort the data based on current sort configuration
  const sortedData = React.useMemo(() => {
    if (localSortConfig.length === 0) return data

    const sortedSortConfig = [...localSortConfig].sort((a, b) => a.priority - b.priority)

    return [...data].sort((a, b) => {
      for (const { key, direction } of sortedSortConfig) {
        const column = columns.find(col => col.accessor === key)
        
        let comparison = 0
        
        if (column?.customSort) {
          comparison = column.customSort(a, b)
        } else {
          const aValue = a[key]
          const bValue = b[key]
          
          // Handle null/undefined values
          if (aValue == null && bValue == null) continue
          if (aValue == null) return 1
          if (bValue == null) return -1
          
          // Sort based on column type
          switch (column?.sortType) {
            case 'number':
              comparison = Number(aValue) - Number(bValue)
              break
            case 'date':
              comparison = new Date(aValue).getTime() - new Date(bValue).getTime()
              break
            case 'boolean':
              comparison = (aValue === bValue) ? 0 : aValue ? 1 : -1
              break
            default:
              // String comparison
              comparison = String(aValue).localeCompare(String(bValue))
          }
        }
        
        if (comparison !== 0) {
          return direction === 'asc' ? comparison : -comparison
        }
      }
      return 0
    })
  }, [data, localSortConfig, columns])

  const getSortDirection = (columnKey: keyof T): 'asc' | 'desc' | null => {
    const sortItem = localSortConfig.find(config => config.key === columnKey)
    return sortItem?.direction || null
  }

  const getSortPriority = (columnKey: keyof T): number | undefined => {
    const sortItem = localSortConfig.find(config => config.key === columnKey)
    return sortItem?.priority
  }

  const hasSortApplied = localSortConfig.length > 0

  return (
    <div className="space-y-4">
      {/* Sort Status Bar */}
      {hasSortApplied && (
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">Sorted by:</span>
            {localSortConfig
              .sort((a, b) => a.priority - b.priority)
              .map((config, index) => {
                const column = columns.find(col => col.accessor === config.key)
                return (
                  <Badge key={String(config.key)} variant="secondary" className="gap-1">
                    {showSortPriority && multiColumnSort && localSortConfig.length > 1 && (
                      <span className="text-xs">{index + 1}.</span>
                    )}
                    {column?.header || String(config.key)}
                    {config.direction === 'asc' ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-3 w-3 p-0 hover:bg-transparent"
                      onClick={() => handleSort(column!, false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={clearSort}
            className="h-6 gap-1"
          >
            <X className="h-3 w-3" />
            Clear all
          </Button>
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
                style={{ 
                  width: column.width,
                  textAlign: column.align 
                }}
                className={cn(
                  column.sortable && 'cursor-pointer select-none hover:bg-muted/50 transition-colors',
                  'group'
                )}
                onClick={(e) => {
                  if (column.sortable) {
                    const isMultiColumn = e.ctrlKey || e.metaKey
                    handleSort(column, isMultiColumn)
                  }
                }}
                onKeyDown={(e) => {
                  if (column.sortable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    const isMultiColumn = e.ctrlKey || e.metaKey
                    handleSort(column, isMultiColumn)
                  }
                }}
                tabIndex={column.sortable ? 0 : undefined}
                role={column.sortable ? 'button' : undefined}
                aria-sort={
                  column.sortable 
                    ? getSortDirection(column.accessor) === 'asc' 
                      ? 'ascending' 
                      : getSortDirection(column.accessor) === 'desc' 
                        ? 'descending' 
                        : 'none'
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <span>{column.header}</span>
                  {column.sortable && showSortIndicators && (
                    <SortIcon
                      direction={getSortDirection(column.accessor)}
                      priority={getSortPriority(column.accessor)}
                      showPriority={showSortPriority && multiColumnSort}
                    />
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedData.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={columns.length} 
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => {
                  const value = row[column.accessor]
                  return (
                    <TableCell 
                      key={column.id}
                      style={{ textAlign: column.align }}
                    >
                      {column.cell ? column.cell(value, row) : value}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Sort Instructions */}
      {multiColumnSort && (
        <div className="text-xs text-muted-foreground">
          <p>
            Click column headers to sort. Hold Ctrl/Cmd and click to add multiple sort columns.
            Maximum {maxSortColumns} columns can be sorted simultaneously.
          </p>
        </div>
      )}
    </div>
  )
}

// Hook for managing sort state
export const useTableSort = (
  initialSort: SortConfig<any>[] = [],
  multiColumn: boolean = false,
  maxColumns: number = 3
) => {
  const [sortConfig, setSortConfig] = React.useState<SortConfig<any>[]>(initialSort)

  const handleSort = React.useCallback((
    key: keyof any,
    isMultiColumn: boolean = false,
    customDirection?: 'asc' | 'desc'
  ) => {
    setSortConfig(prev => {
      const newSortConfig = [...prev]
      const existingIndex = newSortConfig.findIndex(config => config.key === key)

      if (existingIndex >= 0) {
        // Update existing sort
        const current = newSortConfig[existingIndex]
        const newDirection = customDirection || (current.direction === 'asc' ? 'desc' : 'asc')
        
        if (current.direction === 'desc' && !customDirection) {
          // Remove sort if it was desc (cycle: none -> asc -> desc -> none)
          newSortConfig.splice(existingIndex, 1)
          // Update priorities
          newSortConfig.forEach((config, index) => {
            config.priority = index
          })
        } else {
          newSortConfig[existingIndex] = { ...current, direction: newDirection }
        }
      } else {
        // Add new sort
        if (!isMultiColumn || !multiColumn) {
          // Single column sort - replace all
          newSortConfig.length = 0
          newSortConfig.push({
            key,
            direction: customDirection || 'asc',
            priority: 0
          })
        } else {
          // Multi-column sort - add to existing
          if (newSortConfig.length >= maxColumns) {
            // Remove the oldest sort (highest priority number)
            const oldestIndex = newSortConfig.findIndex(config => 
              config.priority === Math.max(...newSortConfig.map(c => c.priority))
            )
            newSortConfig.splice(oldestIndex, 1)
            // Update priorities
            newSortConfig.forEach((config, index) => {
              config.priority = index
            })
          }
          
          newSortConfig.push({
            key,
            direction: customDirection || 'asc',
            priority: newSortConfig.length
          })
        }
      }

      return newSortConfig
    })
  }, [multiColumn, maxColumns])

  const clearSort = React.useCallback(() => {
    setSortConfig([])
  }, [])

  const removeSortColumn = React.useCallback((key: keyof any) => {
    setSortConfig(prev => {
      const newSortConfig = prev.filter(config => config.key !== key)
      // Update priorities
      newSortConfig.forEach((config, index) => {
        config.priority = index
      })
      return newSortConfig
    })
  }, [])

  const getSortDirection = React.useCallback((key: keyof any): 'asc' | 'desc' | null => {
    const sortItem = sortConfig.find(config => config.key === key)
    return sortItem?.direction || null
  }, [sortConfig])

  const getSortPriority = React.useCallback((key: keyof any): number | undefined => {
    const sortItem = sortConfig.find(config => config.key === key)
    return sortItem?.priority
  }, [sortConfig])

  const isSorted = React.useCallback((key: keyof any): boolean => {
    return sortConfig.some(config => config.key === key)
  }, [sortConfig])

  return {
    sortConfig,
    setSortConfig,
    handleSort,
    clearSort,
    removeSortColumn,
    getSortDirection,
    getSortPriority,
    isSorted,
    hasSortApplied: sortConfig.length > 0
  }
}

// Sort indicator component for custom use
export const SortIndicator = ({ 
  direction, 
  priority, 
  showPriority = false,
  className 
}: { 
  direction: 'asc' | 'desc' | null
  priority?: number
  showPriority?: boolean
  className?: string
}) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {direction === null ? (
        <ArrowUpDown className="h-3 w-3 text-muted-foreground/50" />
      ) : direction === 'asc' ? (
        <ArrowUp className="h-3 w-3 text-foreground" />
      ) : (
        <ArrowDown className="h-3 w-3 text-foreground" />
      )}
      {showPriority && priority !== undefined && direction !== null && (
        <Badge variant="secondary" className="text-xs h-4 w-4 p-0 flex items-center justify-center">
          {priority + 1}
        </Badge>
      )}
    </div>
  )
}

export default SortableTable