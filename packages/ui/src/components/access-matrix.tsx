import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, X, Edit, MoreHorizontal } from "lucide-react"

import { cn } from "../lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Button } from "./button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

const accessMatrixVariants = cva(
  "w-full",
  {
    variants: {
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const accessCellVariants = cva(
  "relative transition-all duration-200",
  {
    variants: {
      permission: {
        allowed: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
        denied: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
        partial: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
        undefined: "bg-gray-50/50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800",
      },
      interactive: {
        true: "cursor-pointer hover:scale-[0.98] active:scale-[0.96]",
        false: "cursor-default",
      },
    },
    defaultVariants: {
      permission: "undefined",
      interactive: false,
    },
  }
)

export type Permission = "allowed" | "denied" | "partial" | "undefined"

export interface AccessMatrixCell {
  permission: Permission
  metadata?: Record<string, any>
}

export interface AccessMatrixData {
  rows: {
    id: string
    label: string
    description?: string
  }[]
  columns: {
    id: string
    label: string
    description?: string
  }[]
  cells: Record<string, Record<string, AccessMatrixCell>>
}

export interface AccessMatrixProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accessMatrixVariants> {
  data: AccessMatrixData
  onCellClick?: (rowId: string, columnId: string, cell: AccessMatrixCell) => void
  onCellEdit?: (rowId: string, columnId: string, newPermission: Permission) => void
  renderRowActions?: (row: AccessMatrixData["rows"][0]) => React.ReactNode
  renderColumnActions?: (column: AccessMatrixData["columns"][0]) => React.ReactNode
  editable?: boolean
}

const PermissionIcon: React.FC<{ permission: Permission; size?: "sm" | "md" }> = ({ 
  permission, 
  size = "md" 
}) => {
  const sizeClasses = size === "sm" ? "h-3 w-3" : "h-4 w-4"
  
  switch (permission) {
    case "allowed":
      return (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <Check className={`${sizeClasses} text-emerald-600 dark:text-emerald-400 stroke-[3]`} />
        </div>
      )
    case "denied":
      return (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50">
          <X className={`${sizeClasses} text-red-600 dark:text-red-400 stroke-[3]`} />
        </div>
      )
    case "partial":
      return (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50">
          <Edit className={`${sizeClasses} text-amber-600 dark:text-amber-400`} />
        </div>
      )
    default:
      return (
        <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600">
          <span className="text-xs text-gray-400 dark:text-gray-500">—</span>
        </div>
      )
  }
}

const AccessMatrix = React.forwardRef<HTMLDivElement, AccessMatrixProps>(
  ({ 
    className, 
    size, 
    data, 
    onCellClick, 
    onCellEdit,
    renderRowActions,
    renderColumnActions,
    editable = false,
    ...props 
  }, ref) => {
    const handleCellClick = (rowId: string, columnId: string) => {
      const cell = data.cells[rowId]?.[columnId] || { permission: "undefined" }
      
      if (editable && onCellEdit) {
        const permissionCycle: Permission[] = ["undefined", "allowed", "partial", "denied"]
        const currentIndex = permissionCycle.indexOf(cell.permission)
        const nextPermission = permissionCycle[(currentIndex + 1) % permissionCycle.length]
        onCellEdit(rowId, columnId, nextPermission)
      } else if (onCellClick) {
        onCellClick(rowId, columnId, cell)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(accessMatrixVariants({ size, className }))}
        {...props}
      >
        <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="sticky left-0 z-20 bg-muted/50 backdrop-blur-sm font-semibold text-foreground min-w-[200px] border-r">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Resources
                  </div>
                </TableHead>
              {data.columns.map((column) => (
                <TableHead key={column.id} className="text-center min-w-[120px]">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-foreground" title={column.description}>
                        {column.label}
                      </span>
                      {column.description && (
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {column.description.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      )}
                    </div>
                    {renderColumnActions && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {renderColumnActions(column)}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.rows.map((row) => (
              <TableRow key={row.id} className="group hover:bg-muted/30 transition-colors">
                <TableCell className="sticky left-0 z-10 bg-background/95 backdrop-blur-sm font-medium border-r">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="font-medium" title={row.description}>{row.label}</span>
                      {row.description && (
                        <span className="text-xs text-muted-foreground">
                          {row.description}
                        </span>
                      )}
                    </div>
                    {renderRowActions && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {renderRowActions(row)}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TableCell>
                {data.columns.map((column) => {
                  const cell = data.cells[row.id]?.[column.id] || { permission: "undefined" }
                  return (
                    <TableCell
                      key={column.id}
                      className={cn(
                        "text-center p-2 border transition-all",
                        accessCellVariants({ 
                          permission: cell.permission,
                          interactive: editable || !!onCellClick
                        })
                      )}
                      onClick={() => handleCellClick(row.id, column.id)}
                    >
                      <div className="flex items-center justify-center">
                        <PermissionIcon permission={cell.permission} />
                      </div>
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>
    )
  }
)
AccessMatrix.displayName = "AccessMatrix"

export { AccessMatrix, accessMatrixVariants, accessCellVariants }