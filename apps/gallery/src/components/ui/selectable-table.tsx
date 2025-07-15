/**
 * SelectableTable Component - Extends table with row selection capabilities
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter,
  TableCaption,
  type TableProps
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export interface SelectableTableProps<T = any> extends TableProps {
  data: T[]
  columns: Array<{
    id: string
    header: string
    accessor: string
    cell?: (value: any, row: T) => React.ReactNode
    width?: number
    sortable?: boolean
  }>
  selectedRows?: Set<string>
  onRowSelect?: (rowId: string) => void
  onSelectAll?: () => void
  isAllSelected?: boolean
  isIndeterminate?: boolean
  getRowId?: (row: T, index: number) => string
  selectionActions?: Array<{
    label: string
    action: (selectedRows: Set<string>) => void
    variant?: 'default' | 'destructive'
    disabled?: boolean
  }>
  enableBulkActions?: boolean
  showSelectionCount?: boolean
  selectableRowFilter?: (row: T) => boolean
  onRowClick?: (row: T) => void
  rowClassName?: (row: T) => string
  emptyMessage?: string
  children?: React.ReactNode
}

export const SelectableTable = <T extends Record<string, any>>({
  data,
  columns,
  selectedRows = new Set(),
  onRowSelect,
  onSelectAll,
  isAllSelected = false,
  isIndeterminate = false,
  getRowId = (row: T, index: number) => `row-${index}`,
  selectionActions = [],
  enableBulkActions = false,
  showSelectionCount = true,
  selectableRowFilter = () => true,
  onRowClick,
  rowClassName,
  emptyMessage = 'No data available',
  children,
  className,
  ...props
}: SelectableTableProps<T>) => {
  const selectableData = React.useMemo(() => 
    data.filter(selectableRowFilter), 
    [data, selectableRowFilter]
  )

  const handleHeaderCheckboxChange = () => {
    onSelectAll?.()
  }

  const handleRowCheckboxChange = (rowId: string) => {
    onRowSelect?.(rowId)
  }

  const selectedCount = selectedRows.size
  const hasSelection = selectedCount > 0

  return (
    <div className="space-y-4">
      {/* Selection Actions Bar */}
      {hasSelection && (enableBulkActions || showSelectionCount) && (
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3">
          <div className="flex items-center gap-2">
            {showSelectionCount && (
              <Badge variant="secondary" className="font-normal">
                {selectedCount} selected
              </Badge>
            )}
            {enableBulkActions && selectionActions.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {selectionActions.map((action, index) => (
                    <React.Fragment key={index}>
                      <DropdownMenuItem
                        onClick={() => action.action(selectedRows)}
                        disabled={action.disabled}
                        className={cn(
                          action.variant === 'destructive' && 'text-destructive focus:text-destructive'
                        )}
                      >
                        {action.label}
                      </DropdownMenuItem>
                      {index < selectionActions.length - 1 && <DropdownMenuSeparator />}
                    </React.Fragment>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => selectedRows.clear()}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            Clear selection
          </Button>
        </div>
      )}

      {/* Table */}
      <Table className={className} {...props}>
        {children}
        
        <TableHeader>
          <TableRow>
            {/* Selection column */}
            <TableHead className="w-12">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleHeaderCheckboxChange}
                aria-label="Select all rows"
                className={cn(
                  'transition-all duration-200',
                  isIndeterminate && 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
                )}
                ref={(el) => {
                  if (el && el.querySelector('input')) {
                    (el.querySelector('input') as HTMLInputElement).indeterminate = isIndeterminate
                  }
                }}
              />
            </TableHead>
            
            {/* Data columns */}
            {columns.map((column) => (
              <TableHead 
                key={column.id}
                style={{ width: column.width }}
                className={cn(
                  column.sortable && 'cursor-pointer hover:bg-muted/50'
                )}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {selectableData.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={columns.length + 1} 
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            selectableData.map((row, index) => {
              const rowId = getRowId(row, index)
              const isSelected = selectedRows.has(rowId)
              const isSelectable = selectableRowFilter(row)
              
              return (
                <TableRow
                  key={rowId}
                  data-state={isSelected ? 'selected' : undefined}
                  onClick={() => onRowClick?.(row)}
                  className={cn(
                    'transition-colors',
                    onRowClick && 'cursor-pointer',
                    isSelected && 'bg-muted/50',
                    rowClassName?.(row)
                  )}
                >
                  {/* Selection cell */}
                  <TableCell className="w-12">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleRowCheckboxChange(rowId)}
                      disabled={!isSelectable}
                      aria-label={`Select row ${index + 1}`}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                  
                  {/* Data cells */}
                  {columns.map((column) => {
                    const value = row[column.accessor]
                    return (
                      <TableCell key={column.id}>
                        {column.cell ? column.cell(value, row) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })
          )}
        </TableBody>

        {/* Footer with selection summary */}
        {hasSelection && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="text-sm text-muted-foreground">
                {selectedCount} of {selectableData.length} rows selected
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  )
}

SelectableTable.displayName = 'SelectableTable'

// Hook for managing selection state
export const useTableSelection = (
  data: any[],
  getRowId: (row: any, index: number) => string = (row: any, index: number) => `row-${index}`
) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set())

  const handleRowSelect = React.useCallback((rowId: string) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev)
      if (newSet.has(rowId)) {
        newSet.delete(rowId)
      } else {
        newSet.add(rowId)
      }
      return newSet
    })
  }, [])

  const handleSelectAll = React.useCallback(() => {
    const allRowIds = data.map((row, index) => getRowId(row, index))
    const allSelected = allRowIds.every(id => selectedRows.has(id))
    
    if (allSelected) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(allRowIds))
    }
  }, [data, getRowId, selectedRows])

  const clearSelection = React.useCallback(() => {
    setSelectedRows(new Set())
  }, [])

  const selectRows = React.useCallback((rowIds: string[]) => {
    setSelectedRows(new Set(rowIds))
  }, [])

  const isAllSelected = React.useMemo(() => {
    if (data.length === 0) return false
    const allRowIds = data.map((row, index) => getRowId(row, index))
    return allRowIds.every(id => selectedRows.has(id))
  }, [data, getRowId, selectedRows])

  const isIndeterminate = React.useMemo(() => {
    if (data.length === 0) return false
    const allRowIds = data.map((row, index) => getRowId(row, index))
    const selectedCount = allRowIds.filter(id => selectedRows.has(id)).length
    return selectedCount > 0 && selectedCount < allRowIds.length
  }, [data, getRowId, selectedRows])

  const selectedData = React.useMemo(() => {
    return data.filter((row, index) => selectedRows.has(getRowId(row, index)))
  }, [data, getRowId, selectedRows])

  return {
    selectedRows,
    selectedData,
    isAllSelected,
    isIndeterminate,
    selectedCount: selectedRows.size,
    handleRowSelect,
    handleSelectAll,
    clearSelection,
    selectRows,
    setSelectedRows
  }
}

// Component for bulk actions
export const BulkActionsBar = ({ 
  selectedCount, 
  actions, 
  onClearSelection,
  className 
}: {
  selectedCount: number
  actions: Array<{
    label: string
    action: () => void
    variant?: 'default' | 'destructive'
    disabled?: boolean
  }>
  onClearSelection: () => void
  className?: string
}) => {
  if (selectedCount === 0) return null

  return (
    <div className={cn(
      'flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3',
      className
    )}>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="font-normal">
          {selectedCount} selected
        </Badge>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {actions.map((action, index) => (
              <React.Fragment key={index}>
                <DropdownMenuItem
                  onClick={action.action}
                  disabled={action.disabled}
                  className={cn(
                    action.variant === 'destructive' && 'text-destructive focus:text-destructive'
                  )}
                >
                  {action.label}
                </DropdownMenuItem>
                {index < actions.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearSelection}
        className="h-8 px-2 text-muted-foreground hover:text-foreground"
      >
        Clear selection
      </Button>
    </div>
  )
}

// Selection indicator component
export const SelectionIndicator = ({ 
  selectedCount, 
  totalCount, 
  className 
}: {
  selectedCount: number
  totalCount: number
  className?: string
}) => {
  if (selectedCount === 0) return null

  return (
    <div className={cn(
      'flex items-center gap-2 text-sm text-muted-foreground',
      className
    )}>
      <Check className="h-4 w-4" />
      {selectedCount} of {totalCount} selected
    </div>
  )
}

export default SelectableTable