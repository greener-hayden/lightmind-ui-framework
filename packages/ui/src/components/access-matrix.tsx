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
  "w-full relative",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
      variant: {
        default: "",
        bordered: "border-2 border-primary/20 rounded-xl shadow-md bg-card/50 backdrop-blur-sm",
        shadow: "shadow-2xl shadow-black/20 rounded-lg border border-border/30 bg-gradient-to-br from-background to-muted/30",
        striped: "[&_tbody_tr:nth-child(odd)]:bg-accent/30 [&_tbody_tr:nth-child(even)]:bg-muted/10 [&_tbody_tr]:border-b-2 [&_tbody_tr]:border-accent/20",
        compact: "border-2 border-muted rounded-lg bg-muted/20 [&_table]:table-fixed",
      },
      density: {
        compact: "",
        comfortable: "",
        spacious: "",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
      density: "comfortable",
    },
  }
)

const accessMatrixRowVariants = cva(
  "border-b transition-colors data-[state=selected]:bg-muted",
  {
    variants: {
      interactive: {
        true: "hover:bg-muted/50",
        false: "",
      },
      size: {
        xs: "h-7",
        sm: "h-8",
        default: "h-10",
        lg: "h-12",
        xl: "h-14",
      },
      density: {
        compact: "",
        comfortable: "",
        spacious: "",
      },
    },
    defaultVariants: {
      interactive: true,
      size: "default",
      density: "comfortable",
    },
  }
)

const accessMatrixCellVariants = cva(
  "align-middle transition-colors [&:has([role=checkbox])]:pr-0 access-matrix-cell",
  {
    variants: {
      size: {
        xs: "p-1",
        sm: "p-2",
        default: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
      density: {
        compact: "p-1",
        comfortable: "p-3",
        spacious: "p-6",
      },
      state: {
        default: "",
        hidden: "!bg-muted/10 pointer-events-none hover:!bg-muted/10 group-hover:!bg-muted/10",
        disabled: "opacity-50 cursor-not-allowed",
        interactive: "cursor-pointer hover:bg-muted/50",
        loading: "animate-pulse bg-muted/30",
        error: "bg-destructive/10 border-destructive/50",
        success: "bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800/50",
      },
    },
    defaultVariants: {
      size: "default",
      density: "comfortable",
      state: "default",
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
  rowLabelPosition?: "left" | "right"
  showColumnTitle?: boolean
  showRowTitle?: boolean
  
  // Enhanced props
  size?: "xs" | "sm" | "default" | "lg" | "xl"
  variant?: "default" | "bordered" | "shadow" | "striped" | "compact"
  density?: "compact" | "comfortable" | "spacious"
  loading?: boolean
  disabled?: boolean
  
  // Selection features
  selectionMode?: "none" | "single" | "multiple" | "range"
  selectedCells?: Set<string>
  onSelectionChange?: (selectedCells: Set<string>) => void
  
  // Search and filter
  searchQuery?: string
  onSearchChange?: (query: string) => void
  showSearch?: boolean
  
  // Sorting
  sortConfig?: { key: string; direction: "asc" | "desc" }
  onSortChange?: (config: { key: string; direction: "asc" | "desc" }) => void
  
  // Keyboard navigation
  onKeyDown?: (e: React.KeyboardEvent) => void
  
  // Loading and error states
  isLoading?: (rowId: string, columnId: string) => boolean
  isError?: (rowId: string, columnId: string) => boolean
  
  // Tooltips
  getTooltip?: (rowId: string, columnId: string) => string | undefined
  
  // Custom styling
  getCellClassName?: (rowId: string, columnId: string) => string | undefined
  
  // Animation preferences
  animationDisabled?: boolean
}

// Default permission types using shadcn/ui design tokens
const defaultPermissions: PermissionType[] = [
  { 
    value: "allow", 
    label: "Allow", 
    icon: <Check className="h-4 w-4" /> 
  },
  { 
    value: "deny", 
    label: "Deny", 
    icon: <X className="h-4 w-4" /> 
  },
  { 
    value: "inherit", 
    label: "Inherit", 
    icon: null 
  }
]

const permissionBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 access-matrix-badge",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30",
        destructive: "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30",
        info: "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        purple: "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30",
        orange: "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/30",
        pink: "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:hover:bg-pink-900/30",
        cyan: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:hover:bg-cyan-900/30",
      },
      size: {
        xs: "h-6 px-2 text-xs min-w-[2rem]",
        sm: "h-7 px-2.5 text-xs min-w-[2.5rem]",
        default: "h-8 px-3 text-sm min-w-[3rem]",
        lg: "h-10 px-4 text-base min-w-[4rem]",
        xl: "h-12 px-5 text-lg min-w-[5rem]",
      },
      displayMode: {
        icon: "w-8 h-8 p-0 min-w-[2rem]",
        text: "px-3 py-1 whitespace-nowrap min-w-fit",
        both: "gap-1.5 px-3 py-1 whitespace-nowrap min-w-fit",
      },
      state: {
        default: "",
        loading: "animate-pulse opacity-60",
        disabled: "opacity-50 cursor-not-allowed",
        selected: "ring-2 ring-ring ring-offset-2",
        error: "bg-destructive/10 text-destructive border-destructive/50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      displayMode: "icon",
      state: "default",
    },
  }
)

interface PermissionBadgeProps {
  permission: PermissionType | undefined;
  displayMode?: "icon" | "text" | "both";
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  ariaLabel?: string;
  state?: "default" | "loading" | "disabled" | "selected" | "error";
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

// Map permission values to badge variants
const getPermissionVariant = (permissionValue: string): "default" | "success" | "destructive" | "warning" | "info" | "outline" | "purple" | "orange" | "pink" | "cyan" => {
  switch (permissionValue) {
    case "allow":
    case "allow-all":
    case "read-write":
    case "on":
    case "enabled":
      return "success"
    case "deny":
    case "block":
    case "block-all":
    case "off":
    case "disabled":
      return "destructive"
    case "policy":
    case "return":
    case "read":
    case "owner":
    case "admin":
      return "info"
    case "inherit":
    case "default":
      return "outline"
    case "pending":
    case "review":
    case "partial":
      return "warning"
    case "custom":
    case "advanced":
    case "special":
      return "purple"
    case "temporary":
    case "limited":
    case "restricted":
      return "orange"
    case "guest":
    case "public":
    case "anonymous":
      return "pink"
    case "system":
    case "service":
    case "api":
      return "cyan"
    default:
      return "default"
  }
}

const PermissionBadge = React.memo<PermissionBadgeProps>(
  ({ permission, displayMode = "icon", size = "default", ariaLabel, state = "default", onClick, onKeyDown }) => {
    if (!permission) {
      return (
        <div className={permissionBadgeVariants({ variant: "outline", size, displayMode: "icon", state })}>
          <span className="text-xs text-muted-foreground" aria-hidden="true">—</span>
          <span className="sr-only">No permission set</span>
        </div>
      )
    }

    const variant = getPermissionVariant(permission.value)
    const iconContent = permission.icon && React.cloneElement(
      permission.icon as React.ReactElement, 
      { 
        className: displayMode === "both" ? "h-3 w-3" : displayMode === "text" ? "h-3.5 w-3.5" : 
                   size === "xs" ? "h-3 w-3" : size === "sm" ? "h-3.5 w-3.5" : 
                   size === "lg" ? "h-5 w-5" : size === "xl" ? "h-6 w-6" : "h-4 w-4",
        "aria-hidden": true
      } as any
    )

    const handleClick = (e: React.MouseEvent) => {
      if (state === "disabled") return
      onClick?.()
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (state === "disabled") return
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onClick?.()
      }
      onKeyDown?.(e)
    }

    return (
      <div 
        className={permissionBadgeVariants({ variant, size, displayMode, state })}
        role={onClick ? "button" : "img"}
        aria-label={ariaLabel || permission.label}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={onClick && state !== "disabled" ? 0 : undefined}
      >
        {displayMode === "icon" && (
          <>
            {iconContent}
            {!permission.icon && (
              <span className={cn(
                "font-medium",
                size === "xs" ? "text-xs" : size === "sm" ? "text-xs" : 
                size === "lg" ? "text-sm" : size === "xl" ? "text-base" : "text-xs"
              )} aria-hidden="true">
                {permission.label.charAt(0)}
              </span>
            )}
          </>
        )}
        {displayMode === "text" && permission.label}
        {displayMode === "both" && (
          <>
            {iconContent}
            <span className={cn(
              "font-medium whitespace-nowrap",
              size === "xs" ? "text-xs" : size === "sm" ? "text-xs" : 
              size === "lg" ? "text-sm" : size === "xl" ? "text-base" : "text-xs"
            )}>
              {permission.label}
            </span>
          </>
        )}
      </div>
    )
  }
)
PermissionBadge.displayName = "PermissionBadge"

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
    size = "default",
    variant = "default",
    density = "comfortable",
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
    rowLabelPosition = "left",
    showColumnTitle = true,
    showRowTitle = true,
    loading = false,
    disabled = false,
    selectionMode = "none",
    selectedCells,
    onSelectionChange,
    searchQuery,
    onSearchChange,
    showSearch = false,
    sortConfig,
    onSortChange,
    onKeyDown,
    isLoading,
    isError,
    getTooltip,
    getCellClassName,
    animationDisabled = false,
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
    
    // Responsive size calculation
    const responsiveSize = React.useMemo(() => {
      if (size !== "default") return size // Respect explicit size prop
      if (isMobile) return "sm"
      if (isTablet) return "default"
      return "default"
    }, [size, isMobile, isTablet])
    
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
        className={cn(accessMatrixVariants({ size: responsiveSize, variant, density, className }))}
        {...props}
      >
        <div className="rounded-lg border">
          <div className="flex">
            {/* Left rotated label area */}
            {rowTitle && verticalHeaders && (
              <div className="flex items-center justify-center bg-muted/30 border-r">
                <div className="w-10 flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground transform -rotate-90 whitespace-nowrap">
                    {rowTitle}
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex-1 overflow-auto max-w-full">
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
            <Table size={responsiveSize}>
            {columnTitle && !verticalHeaders && (
              <caption className="text-sm font-medium text-muted-foreground mb-2 text-center">
                {columnTitle}
              </caption>
            )}
            <TableHeader size={responsiveSize}>
              <TableRow>
                {!flipLabels && (
                  <TableHead 
                    size={responsiveSize}
                    className={cn(
                      "font-semibold sticky left-0 bg-background z-10",
                      responsiveSize === "xs" ? "w-24" : responsiveSize === "sm" ? "w-32" : responsiveSize === "lg" ? "w-48" : responsiveSize === "xl" ? "w-56" : "w-40"
                    )}>
                    {!verticalHeaders && (rowTitle || "Resources")}
                  </TableHead>
                )}
              {data.columns.map((column) => (
                <TableHead 
                  key={column.id} 
                  size={responsiveSize}
                  className={cn(
                    "text-center border-l",
                    responsiveDisplayMode === "text" ? (
                      responsiveSize === "xs" ? "min-w-[80px]" : responsiveSize === "sm" ? "min-w-[100px]" : 
                      responsiveSize === "lg" ? "min-w-[140px]" : responsiveSize === "xl" ? "min-w-[160px]" : "min-w-[120px]"
                    ) : responsiveDisplayMode === "both" ? (
                      responsiveSize === "xs" ? "min-w-[100px]" : responsiveSize === "sm" ? "min-w-[120px]" : 
                      responsiveSize === "lg" ? "min-w-[160px]" : responsiveSize === "xl" ? "min-w-[180px]" : "min-w-[140px]"
                    ) : (
                      responsiveSize === "xs" ? "min-w-[60px]" : responsiveSize === "sm" ? "min-w-[80px]" : 
                      responsiveSize === "lg" ? "min-w-[100px]" : responsiveSize === "xl" ? "min-w-[120px]" : "min-w-[90px]"
                    )
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
                <TableHead 
                  size={responsiveSize}
                  className={cn(
                    "font-semibold sticky right-0 bg-background z-10",
                    responsiveSize === "xs" ? "w-24" : responsiveSize === "sm" ? "w-32" : responsiveSize === "lg" ? "w-48" : responsiveSize === "xl" ? "w-56" : "w-40"
                  )}>
                  {!verticalHeaders && (rowTitle || "Resources")}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody size={responsiveSize}>
            {data.rows.map((row) => (
              <TableRow 
                key={row.id}
                className={cn(
                  accessMatrixRowVariants({ 
                    size: responsiveSize,
                    density,
                    interactive: true
                  }),
                  "group"
                )}
                data-row-id={row.id}
                role="row"
              >
                {!flipLabels && (
                  <TableCell 
                    size={responsiveSize}
                    className={cn(
                      "font-medium sticky left-0 bg-background z-10",
                      responsiveSize === "xs" ? "w-24" : responsiveSize === "sm" ? "w-32" : responsiveSize === "lg" ? "w-48" : responsiveSize === "xl" ? "w-56" : "w-40"
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
                      <TableCell 
                        key={column.id} 
                        size={responsiveSize}
                        className={cn(
                          "text-center border-l",
                          accessMatrixCellVariants({ 
                            size: responsiveSize,
                            density,
                            state: "hidden" 
                          }),
                          "hover:[&]:!bg-muted/10",
                        )}
                        data-state="hidden"
                        aria-hidden="true"
                      />
                    )
                  }
                  
                  return (
                    <TableCell
                      key={column.id}
                      size={responsiveSize}
                      className={cn(
                        "text-center border-l",
                        accessMatrixCellVariants({ 
                          size: responsiveSize,
                          density,
                          state: isDisabledCell ? "disabled" : 
                                 isLoading?.(row.id, column.id) ? "loading" :
                                 isError?.(row.id, column.id) ? "error" :
                                 (editable || clickBehavior !== "custom") ? "interactive" : "default"
                        }),
                        getCellClassName?.(row.id, column.id)
                      )}
                      data-state={isDisabledCell ? "disabled" : "interactive"}
                      data-permission={cell.value}
                      role={!isDisabledCell && (editable || clickBehavior !== "custom") ? "gridcell" : "cell"}
                      tabIndex={!isDisabledCell && (editable || clickBehavior !== "custom") ? 0 : -1}
                      onClick={() => !isDisabledCell && handleCellClick(row.id, column.id)}
                      onKeyDown={(e) => {
                        if (!isDisabledCell && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault()
                          handleCellClick(row.id, column.id)
                        }
                      }}
                      aria-label={`${row.label} ${column.label}: ${permission?.label || 'No permission'}`}
                    >
                      <div className="flex items-center justify-center min-h-[40px]">
                        {!isDisabledCell && (editable || clickBehavior !== "custom") ? (
                          <Button
                            variant="ghost"
                            size={isMobile ? "sm" : "default"}
                            className="w-full h-auto p-1 min-h-[2.5rem] hover:bg-transparent hover:text-inherit"
                            aria-label={`Change ${row.label} ${column.label} from ${permission?.label || 'No permission'}`}
                            type="button"
                            tabIndex={-1}
                          >
                            <PermissionBadge 
                              permission={permission} 
                              displayMode={responsiveDisplayMode}
                              size={responsiveSize}
                              state={isDisabledCell ? "disabled" : isLoading?.(row.id, column.id) ? "loading" : "default"}
                            />
                          </Button>
                        ) : (
                          <div className="flex items-center justify-center">
                            <PermissionBadge 
                              permission={permission} 
                              displayMode={responsiveDisplayMode}
                              size={responsiveSize}
                              state={isDisabledCell ? "disabled" : isLoading?.(row.id, column.id) ? "loading" : "default"}
                            />
                          </div>
                        )}
                      </div>
                    </TableCell>
                  )
                })}
                {flipLabels && (
                  <TableCell 
                    size={responsiveSize}
                    className={cn(
                      "font-medium sticky right-0 bg-background z-10",
                      responsiveSize === "xs" ? "w-24" : responsiveSize === "sm" ? "w-32" : responsiveSize === "lg" ? "w-48" : responsiveSize === "xl" ? "w-56" : "w-40"
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
      </div>
    )
  }
))
AccessMatrix.displayName = "AccessMatrix"

export { 
  AccessMatrix, 
  accessMatrixVariants, 
  accessMatrixRowVariants,
  accessMatrixCellVariants,
}