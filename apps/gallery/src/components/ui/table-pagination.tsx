/**
 * TablePagination Component - Handles pagination for tables
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export interface TablePaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
  pageSizeOptions?: number[]
  showPageSizeSelector?: boolean
  showPageJumper?: boolean
  showInfo?: boolean
  showFirstLastButtons?: boolean
  className?: string
  disabled?: boolean
  compact?: boolean
}

export const TablePagination = React.forwardRef<
  HTMLDivElement,
  TablePaginationProps
>(({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSizeSelector = true,
  showPageJumper = false,
  showInfo = true,
  showFirstLastButtons = true,
  className,
  disabled = false,
  compact = false,
  ...props
}, ref) => {
  const [jumpPage, setJumpPage] = React.useState('')

  const handleJumpToPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt(jumpPage)
      if (page >= 1 && page <= totalPages) {
        onPageChange(page)
        setJumpPage('')
      }
    }
  }

  const getVisiblePages = () => {
    const delta = compact ? 1 : 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = totalPages > 1 ? getVisiblePages() : []

  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between',
        compact && 'gap-2',
        className
      )}
      {...props}
    >
      {/* Left side - Info and page size selector */}
      <div className="flex items-center gap-4">
        {showInfo && (
          <div className="text-sm text-muted-foreground">
            {totalItems > 0 ? (
              <>
                Showing {startItem} to {endItem} of {totalItems} entries
              </>
            ) : (
              'No entries'
            )}
          </div>
        )}

        {showPageSizeSelector && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {compact ? 'Show' : 'Show per page'}
            </span>
            <Select
              value={pageSize.toString()}
              onValueChange={(value) => onPageSizeChange(parseInt(value))}
              disabled={disabled}
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Right side - Navigation */}
      <div className="flex items-center gap-2">
        {showPageJumper && totalPages > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Go to</span>
            <Input
              type="number"
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              onKeyDown={handleJumpToPage}
              placeholder="Page"
              className="w-16 h-8"
              min={1}
              max={totalPages}
              disabled={disabled}
            />
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center gap-1">
            {/* First page button */}
            {showFirstLastButtons && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1 || disabled}
                className="h-8 w-8 p-0"
              >
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">First page</span>
              </Button>
            )}

            {/* Previous page button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1 || disabled}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>

            {/* Page numbers */}
            {visiblePages.map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="h-8 w-8 p-0"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onPageChange(page as number)}
                    disabled={disabled}
                    className="h-8 w-8 p-0"
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}

            {/* Next page button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages || disabled}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>

            {/* Last page button */}
            {showFirstLastButtons && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages || disabled}
                className="h-8 w-8 p-0"
              >
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Last page</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

TablePagination.displayName = 'TablePagination'

// Simple pagination for when you just need basic controls
export const SimplePagination = React.forwardRef<
  HTMLDivElement,
  {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    disabled?: boolean
    className?: string
  }
>(({ currentPage, totalPages, onPageChange, disabled = false, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      
      <Badge variant="secondary" className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </Badge>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
})

SimplePagination.displayName = 'SimplePagination'

// Compact pagination for mobile or tight spaces
export const CompactPagination = React.forwardRef<
  HTMLDivElement,
  {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    disabled?: boolean
    className?: string
  }
>(({ currentPage, totalPages, onPageChange, disabled = false, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-1', className)}
      {...props}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        className="h-8 w-8 p-0"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>
      
      <div className="flex items-center gap-1">
        <Input
          type="number"
          value={currentPage}
          onChange={(e) => {
            const page = parseInt(e.target.value)
            if (page >= 1 && page <= totalPages) {
              onPageChange(page)
            }
          }}
          className="w-16 h-8 text-center"
          min={1}
          max={totalPages}
          disabled={disabled}
        />
        <span className="text-sm text-muted-foreground">
          / {totalPages}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        className="h-8 w-8 p-0"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
})

CompactPagination.displayName = 'CompactPagination'

// Hook for pagination state management
export const usePagination = (
  totalItems: number,
  initialPageSize: number = 10,
  initialPage: number = 1
) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage)
  const [pageSize, setPageSize] = React.useState(initialPageSize)

  const totalPages = Math.ceil(totalItems / pageSize)

  const handlePageChange = React.useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }, [totalPages])

  const handlePageSizeChange = React.useCallback((size: number) => {
    setPageSize(size)
    setCurrentPage(1) // Reset to first page when changing page size
  }, [])

  const goToFirstPage = React.useCallback(() => {
    setCurrentPage(1)
  }, [])

  const goToLastPage = React.useCallback(() => {
    setCurrentPage(totalPages)
  }, [totalPages])

  const goToNextPage = React.useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }, [totalPages])

  const goToPreviousPage = React.useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }, [])

  // Calculate pagination info
  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)
  const hasNextPage = currentPage < totalPages
  const hasPreviousPage = currentPage > 1

  return {
    currentPage,
    pageSize,
    totalPages,
    totalItems,
    startItem,
    endItem,
    hasNextPage,
    hasPreviousPage,
    handlePageChange,
    handlePageSizeChange,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    setCurrentPage,
    setPageSize
  }
}

// Pagination info component
export const PaginationInfo = ({ 
  currentPage, 
  totalPages, 
  pageSize, 
  totalItems,
  className 
}: {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  className?: string
}) => {
  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className={cn('text-sm text-muted-foreground', className)}>
      {totalItems > 0 ? (
        <>
          Showing {startItem} to {endItem} of {totalItems} entries
        </>
      ) : (
        'No entries'
      )}
    </div>
  )
}

export default TablePagination