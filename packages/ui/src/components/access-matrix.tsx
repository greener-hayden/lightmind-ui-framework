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
  "relative transition-all duration-200 group",
  {
    variants: {
      interactive: {
        true: "cursor-pointer hover:bg-muted/50",
        false: "cursor-default",
      },
      highlighted: {
        true: "bg-accent/20",
        false: "",
      },
    },
    defaultVariants: {
      interactive: false,
      highlighted: false,
    },
  }
)

export type PermissionValue = string | boolean | number | {
  value: any
  label: string
  color?: string
  icon?: React.ReactNode
}

export interface PermissionType {
  value: string
  label: string
  color?: string
  backgroundColor?: string
  icon?: React.ReactNode
}

export interface AccessMatrixCell {
  value: string
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
  permissions?: PermissionType[]
  clickBehavior?: "cycle" | "toggle" | "menu" | "custom"
  onCellChange?: (rowId: string, columnId: string, value: string) => void
  onCellClick?: (rowId: string, columnId: string, cell: AccessMatrixCell) => void
  renderRowActions?: (row: AccessMatrixData["rows"][0]) => React.ReactNode
  renderColumnActions?: (column: AccessMatrixData["columns"][0]) => React.ReactNode
  editable?: boolean
  defaultValue?: string
  isDisabled?: (rowId: string, columnId: string) => boolean
  isHidden?: (rowId: string, columnId: string) => boolean
  columnTitle?: string
  rowTitle?: string
  flipLabels?: boolean
  displayMode?: "icon" | "text" | "both"
  verticalHeaders?: boolean
}

// Default permission types for ACL-style permissions with better theme support
const defaultPermissions: PermissionType[] = [
  { 
    value: "allow", 
    label: "Allow", 
    color: "hsl(142 71% 45%)", // Better contrast in both themes
    backgroundColor: "hsl(142 71% 45% / 0.15)", 
    icon: <Check className="h-4 w-4" /> 
  },
  { 
    value: "deny", 
    label: "Deny", 
    color: "hsl(0 84% 60%)", // Softer red that works in both themes
    backgroundColor: "hsl(0 84% 60% / 0.15)", 
    icon: <X className="h-4 w-4" /> 
  },
  { 
    value: "inherit", 
    label: "Inherit", 
    color: "hsl(var(--muted-foreground))", 
    backgroundColor: "hsl(var(--muted))", 
    icon: null 
  }
]

const permissionIconVariants = cva(
  "flex items-center justify-center transition-all duration-200 rounded-md",
  {
    variants: {
      displayMode: {
        icon: "w-8 h-8 group-hover:scale-110",
        text: "min-w-[80px] px-3 py-1.5 text-xs font-medium whitespace-nowrap",
        both: "gap-1.5 min-w-[90px] px-3 py-1.5",
      },
      empty: {
        true: "min-w-[2rem] min-h-[2rem] p-1",
        false: "",
      },
    },
    defaultVariants: {
      displayMode: "icon",
      empty: false,
    },
  }
)

interface PermissionIconProps {
  permission: PermissionType | undefined;
  displayMode?: "icon" | "text" | "both";
  ariaLabel?: string;
}

const PermissionIcon = React.memo<PermissionIconProps>(
  ({ permission, displayMode = "icon", ariaLabel }) => {
    if (!permission) {
      return (
        <div className={permissionIconVariants({ empty: true })}>
          <span className="text-xs text-muted-foreground" aria-hidden="true">—</span>
          <span className="sr-only">No permission set</span>
        </div>
      )
    }

    const iconContent = permission.icon && React.cloneElement(
      permission.icon as React.ReactElement, 
      { 
        className: displayMode === "both" ? "h-3.5 w-3.5" : "h-4 w-4",
        "aria-hidden": "true"
      }
    )

    return (
      <div 
        className={permissionIconVariants({ displayMode })}
        style={{ 
          backgroundColor: permission.backgroundColor || 'hsl(var(--muted))',
          color: permission.color || 'hsl(var(--muted-foreground))'
        }}
        role="img"
        aria-label={ariaLabel || permission.label}
      >
        {displayMode === "icon" && (
          <>
            {iconContent}
            {!permission.icon && (
              <span className="text-xs font-medium" aria-hidden="true">
                {permission.label.charAt(0)}
              </span>
            )}
          </>
        )}
        {displayMode === "text" && permission.label}
        {displayMode === "both" && (
          <>
            {iconContent}
            <span className="text-xs font-medium whitespace-nowrap">
              {permission.label}
            </span>
          </>
        )}
      </div>
    )
  }
)
PermissionIcon.displayName = "PermissionIcon"

// Responsive hook
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

const AccessMatrix = React.memo(React.forwardRef<HTMLDivElement, AccessMatrixProps>(
  ({ 
    className, 
    size, 
    data, 
    permissions = defaultPermissions,
    clickBehavior = "cycle",
    onCellChange,
    onCellClick,
    renderRowActions,
    renderColumnActions,
    editable = false,
    defaultValue = "inherit",
    isDisabled,
    isHidden,
    columnTitle,
    rowTitle,
    flipLabels = false,
    displayMode = "icon",
    verticalHeaders = false,
    ...props 
  }, ref) => {
    
    // Responsive display mode
    const isMobile = useMediaQuery("(max-width: 640px)")
    const isTablet = useMediaQuery("(max-width: 1024px)")
    
    const responsiveDisplayMode = React.useMemo(() => {
      if (displayMode) return displayMode // Respect explicit displayMode prop
      if (isMobile) return "icon"
      if (isTablet) return "text"
      return "both"
    }, [displayMode, isMobile, isTablet])
    
    // Create a Map for O(1) permission lookups
    const permissionMap = React.useMemo(() => 
      new Map(permissions.map(p => [p.value, p])),
      [permissions]
    )
    
    const handleCellClick = React.useCallback((rowId: string, columnId: string) => {
      // Check if cell is disabled
      if (isDisabled && isDisabled(rowId, columnId)) {
        return
      }
      
      const cell = data.cells[rowId]?.[columnId] || { value: defaultValue }
      
      if (clickBehavior === "custom" && onCellClick) {
        onCellClick(rowId, columnId, cell)
        return
      }
      
      if ((editable || clickBehavior === "cycle") && onCellChange) {
        const currentValue = cell.value
        const currentIndex = permissions.findIndex(p => p.value === currentValue)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % permissions.length
        const nextValue = permissions[nextIndex].value
        onCellChange(rowId, columnId, nextValue)
      } else if (clickBehavior === "toggle" && onCellChange && permissions.length >= 2) {
        const currentValue = cell.value
        // For toggle, if current value is first permission, switch to second, otherwise switch to first
        const newValue = currentValue === permissions[0].value ? permissions[1].value : permissions[0].value
        onCellChange(rowId, columnId, newValue)
      }
    }, [clickBehavior, data.cells, defaultValue, editable, isDisabled, onCellChange, onCellClick, permissions])

    return (
      <div
        ref={ref}
        className={cn(accessMatrixVariants({ size, className }))}
        {...props}
      >
        <div className="rounded-lg border">
          <div className="overflow-auto max-w-full">
            {columnTitle && verticalHeaders && (
              <div className="flex border-b bg-muted/30">
                {!flipLabels && <div className="w-40 shrink-0" />}
                <div className="flex-1 flex items-center justify-center p-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {columnTitle}
                  </span>
                </div>
                {flipLabels && <div className="w-40 shrink-0" />}
              </div>
            )}
            <Table>
            {columnTitle && !verticalHeaders && (
              <caption className="text-sm font-medium text-muted-foreground mb-2 text-center">
                {columnTitle}
              </caption>
            )}
            <TableHeader>
              <TableRow>
                {!flipLabels && (
                  <TableHead className={cn(
                    "font-semibold sticky left-0 bg-background z-10",
                    isMobile ? "w-32" : "w-40"
                  )}>
                    {rowTitle || "Resources"}
                  </TableHead>
                )}
              {data.columns.map((column) => (
                <TableHead key={column.id} className={cn(
                  "text-center border-l",
                  isMobile ? "min-w-[80px]" : "min-w-[100px]"
                )}>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-medium" title={column.description}>
                      {column.label}
                    </span>
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
              {flipLabels && (
                <TableHead className={cn(
                  "font-semibold sticky right-0 bg-background z-10",
                  isMobile ? "w-32" : "w-40"
                )}>
                  {rowTitle || "Resources"}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.rows.map((row) => (
              <TableRow key={row.id}>
                {!flipLabels && (
                  <TableCell className={cn(
                    "font-medium sticky left-0 bg-background z-10",
                    isMobile ? "w-32" : "w-40"
                  )}>
                    <div className="flex items-center justify-between gap-2 pr-2">
                      <span title={row.description}>{row.label}</span>
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
                )}
                {data.columns.map((column) => {
                  const cell = data.cells[row.id]?.[column.id] || { value: defaultValue }
                  const permission = permissionMap.get(cell.value) || 
                    permissionMap.get(defaultValue)
                  const isDisabledCell = isDisabled && isDisabled(row.id, column.id)
                  const isHiddenCell = isHidden && isHidden(row.id, column.id)
                  
                  if (isHiddenCell) {
                    return (
                      <TableCell key={column.id} className="bg-muted/10 border-l" />
                    )
                  }
                  
                  return (
                    <TableCell
                      key={column.id}
                      className={cn(
                        "text-center transition-all p-2 border-l",
                        accessCellVariants({ 
                          interactive: !isDisabledCell && (editable || clickBehavior !== "custom"),
                          highlighted: false
                        }),
                        isDisabledCell && "opacity-50 cursor-not-allowed"
                      )}
                      onClick={() => !isDisabledCell && handleCellClick(row.id, column.id)}
                    >
                      <div className="flex items-center justify-center min-h-[40px]">
                        {!isDisabledCell && (editable || clickBehavior !== "custom") ? (
                          <button
                            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                            aria-label={`${row.label} ${column.label}: ${permission?.label || 'No permission'}`}
                            type="button"
                          >
                            <PermissionIcon 
                              permission={permission} 
                              displayMode={responsiveDisplayMode}
                              ariaLabel={`Set to ${permission?.label || 'default'}`}
                            />
                          </button>
                        ) : (
                          <PermissionIcon permission={permission} displayMode={responsiveDisplayMode} />
                        )}
                      </div>
                    </TableCell>
                  )
                })}
                {flipLabels && (
                  <TableCell className={cn(
                    "font-medium sticky right-0 bg-background z-10",
                    isMobile ? "w-32" : "w-40"
                  )}>
                    <div className="flex items-center justify-between gap-2 pl-2">
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
                      <span title={row.description}>{row.label}</span>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
))
AccessMatrix.displayName = "AccessMatrix"

export { AccessMatrix, accessMatrixVariants, accessCellVariants }