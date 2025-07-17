import * as React from "react"
import { Search, Download, Settings, MoreHorizontal, RefreshCw, Check, X } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Input } from "./input"
import { Separator } from "./separator"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { toast } from "../hooks/use-toast"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import {
  AccessMatrixEnhancedProps,
  AccessMatrixDataEnhanced,
  SelectionState,
  CustomRule,
  PermissionType,
  UserContext,
  MatrixDataSource,
  ValidationResult,
  EnhancedMatrixCell,
  CustomRuleModal,
  useMatrixSelection,
  accessMatrixVariants,
} from "./access-matrix-enhanced"

// Default permissions
const defaultPermissions: PermissionType[] = [
  {
    value: "allow",
    label: "Allow",
    icon: <Check className="h-4 w-4" />,
    variant: "success",
    description: "Full access granted"
  },
  {
    value: "deny",
    label: "Deny",
    icon: <X className="h-4 w-4" />,
    variant: "destructive",
    description: "Access explicitly denied"
  },
  {
    value: "inherit",
    label: "Inherit",
    icon: <Settings className="h-4 w-4" />,
    variant: "outline",
    description: "Inherit from parent permissions"
  }
]

// Main AccessMatrixEnhanced component
export const AccessMatrixEnhanced = React.forwardRef<
  HTMLDivElement,
  AccessMatrixEnhancedProps
>(({
  className,
  data,
  dataSource,
  currentUser,
  permissions = defaultPermissions,
  onCellChange,
  onBulkChange,
  selectionMode = "multiple",
  onSelectionChange,
  onCustomRuleEdit,
  onCustomRuleCreate,
  searchable = true,
  searchPlaceholder = "Search permissions...",
  onSearch,
  confirmationConfig = {},
  validateChange,
  enableRealTime = false,
  isLoading = false,
  loadingRows = new Set(),
  loadingCells = new Set(),
  errorCells = new Set(),
  size = "default",
  variant = "default",
  density = "comfortable",
  displayMode = "both",
  showAuditLog = false,
  showCustomRules = true,
  enableBulkOperations = true,
  enableExport = false,
  ariaLabel = "Access permissions matrix",
  ariaDescription,
  ...props
}, ref) => {
  // State management
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filteredData, setFilteredData] = React.useState<AccessMatrixDataEnhanced>(data)
  const [customRuleModalOpen, setCustomRuleModalOpen] = React.useState(false)
  const [editingRule, setEditingRule] = React.useState<CustomRule | undefined>()
  const [pendingChanges, setPendingChanges] = React.useState<Map<string, { value: string, reason?: string }>>(new Map())
  const [showBulkActions, setShowBulkActions] = React.useState(false)
  
  // Selection management
  const {
    selection,
    handleCellClick,
    clearSelection,
    selectAll,
    setSelection,
  } = useMatrixSelection()
  
  // Real-time updates
  React.useEffect(() => {
    if (enableRealTime && dataSource?.subscribe) {
      const unsubscribe = dataSource.subscribe((change) => {
        // Update the local data when changes come from external sources
        setFilteredData(prev => {
          const newData = { ...prev }
          if (change.columnId && newData.cells[change.rowId]) {
            newData.cells[change.rowId][change.columnId] = {
              ...newData.cells[change.rowId][change.columnId],
              value: change.newValue || "",
              lastModified: change.timestamp,
              modifiedBy: change.userId,
            }
          }
          return newData
        })
        
        toast({
          title: "Permission Updated",
          description: `${change.userId} modified permissions for ${change.rowId}`,
        })
      })
      
      return unsubscribe
    }
  }, [enableRealTime, dataSource])
  
  // Search functionality
  React.useEffect(() => {
    if (searchQuery) {
      const filtered = {
        ...data,
        rows: data.rows.filter(row => 
          row.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          row.description?.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        columns: data.columns.filter(col => 
          col.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          col.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [searchQuery, data])
  
  // Permission helpers
  const getPermissionByValue = (value: string): PermissionType | undefined => {
    return permissions.find(p => p.value === value)
  }
  
  const getNextPermissionValue = (currentValue: string): string => {
    const currentIndex = permissions.findIndex(p => p.value === currentValue)
    const nextIndex = (currentIndex + 1) % permissions.length
    return permissions[nextIndex].value
  }
  
  // Cell change handler
  const handleCellChange = async (rowId: string, columnId: string, newValue: string, reason?: string) => {
    if (validateChange) {
      const validation = await validateChange(rowId, columnId, newValue)
      if (!validation.valid) {
        toast({
          title: "Invalid Change",
          description: validation.errors?.join(", "),
          variant: "destructive"
        })
        return
      }
      
      if (validation.requiresConfirmation) {
        // Show confirmation dialog
        const confirmed = await showConfirmationDialog(
          confirmationConfig[`${rowId}-${columnId}`] || {
            title: "Confirm Permission Change",
            description: validation.confirmationMessage || "Are you sure you want to make this change?",
            confirmText: "Confirm",
            cancelText: "Cancel"
          },
          reason
        )
        
        if (!confirmed) return
      }
    }
    
    // Update local state
    setFilteredData(prev => {
      const newData = { ...prev }
      if (!newData.cells[rowId]) {
        newData.cells[rowId] = {}
      }
      newData.cells[rowId][columnId] = {
        ...newData.cells[rowId][columnId],
        value: newValue,
        lastModified: new Date(),
        modifiedBy: currentUser?.userId,
        reason
      }
      return newData
    })
    
    // Call external handler
    onCellChange?.(rowId, columnId, newValue, reason)
    
    // Update via data source
    if (dataSource) {
      try {
        await dataSource.updateCell(rowId, columnId, newValue, reason)
        toast({
          title: "Permission Updated",
          description: `Successfully updated permission for ${rowId}`,
        })
      } catch (error) {
        toast({
          title: "Update Failed",
          description: "Failed to update permission. Please try again.",
          variant: "destructive"
        })
      }
    }
  }
  
  // Bulk operations
  const handleBulkChange = async (newValue: string, reason?: string) => {
    const changes = Array.from(selection.selectedCells).map(cellId => {
      const [rowId, columnId] = cellId.split('-')
      return { rowId, columnId, value: newValue, reason }
    })
    
    if (onBulkChange) {
      onBulkChange(changes)
    }
    
    if (dataSource) {
      try {
        await dataSource.bulkUpdate(changes)
        toast({
          title: "Bulk Update Successful",
          description: `Updated ${changes.length} permissions`,
        })
      } catch (error) {
        toast({
          title: "Bulk Update Failed",
          description: "Some permissions failed to update. Please try again.",
          variant: "destructive"
        })
      }
    }
    
    clearSelection()
  }
  
  // Custom rule handling
  const handleCustomRuleEdit = (rule: CustomRule) => {
    setEditingRule(rule)
    setCustomRuleModalOpen(true)
  }
  
  const handleCustomRuleCreate = (rowId: string, columnId: string) => {
    setEditingRule(undefined)
    setCustomRuleModalOpen(true)
  }
  
  const handleCustomRuleSave = async (rule: CustomRule) => {
    if (dataSource) {
      try {
        if (editingRule) {
          await dataSource.updateCustomRule(rule.id, rule)
        } else {
          await dataSource.createCustomRule(rule)
        }
        
        toast({
          title: "Custom Rule Saved",
          description: `Rule "${rule.name}" has been saved successfully`,
        })
      } catch (error) {
        toast({
          title: "Save Failed",
          description: "Failed to save custom rule. Please try again.",
          variant: "destructive"
        })
      }
    }
    
    onCustomRuleEdit?.(rule)
    setCustomRuleModalOpen(false)
    setEditingRule(undefined)
  }
  
  // Confirmation dialog helper
  const showConfirmationDialog = (config: any, reason?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // This would typically open a confirmation dialog
      // For now, we'll just return true
      resolve(true)
    })
  }
  
  // Export functionality
  const handleExport = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      user: currentUser?.userId,
      data: filteredData,
      selection: Array.from(selection.selectedCells)
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `access-matrix-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }
  
  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearSelection()
      }
      if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        const allCellIds = filteredData.rows.flatMap(row => 
          filteredData.columns.map(col => `${row.id}-${col.id}`)
        )
        selectAll(allCellIds)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [clearSelection, selectAll, filteredData])
  
  // Selection change effect
  React.useEffect(() => {
    onSelectionChange?.(selection)
    setShowBulkActions(selection.selectedCells.size > 0)
  }, [selection, onSelectionChange])
  
  if (isLoading) {
    return (
      <div className={cn(accessMatrixVariants({ size, variant, density }), className)}>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-24" />
          </div>
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }
  
  return (
    <div
      ref={ref}
      className={cn(accessMatrixVariants({ size, variant, density }), className)}
      role="application"
      aria-label={ariaLabel}
      aria-description={ariaDescription}
      {...props}
    >
      {/* Header with search and actions */}
      <div className="p-4 border-b border-border space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">Access Matrix</h2>
            {enableRealTime && (
              <Badge variant="outline" className="text-xs">
                <RefreshCw className="h-3 w-3 mr-1" />
                Live
              </Badge>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {enableExport && (
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            )}
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
        
        {searchable && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        )}
        
        {/* Bulk actions */}
        {showBulkActions && enableBulkOperations && (
          <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-lg">
            <span className="text-sm text-muted-foreground">
              {selection.selectedCells.size} selected
            </span>
            <Separator orientation="vertical" className="h-4" />
            {permissions.map(permission => (
              <Button
                key={permission.value}
                variant="outline"
                size="sm"
                onClick={() => handleBulkChange(permission.value)}
              >
                {permission.icon}
                {permission.label}
              </Button>
            ))}
            <Button variant="outline" size="sm" onClick={clearSelection}>
              Clear Selection
            </Button>
          </div>
        )}
      </div>
      
      {/* Matrix Table */}
      <div className="relative overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Resource</TableHead>
              {filteredData.columns.map(column => (
                <TableHead key={column.id} className="text-center min-w-20">
                  <div className="space-y-1">
                    <div className="font-medium">{column.label}</div>
                    {column.description && (
                      <div className="text-xs text-muted-foreground">
                        {column.description}
                      </div>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {filteredData.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <div className="space-y-1">
                      <div className="font-medium">{row.label}</div>
                      {row.description && (
                        <div className="text-xs text-muted-foreground">
                          {row.description}
                        </div>
                      )}
                      {row.userRole && (
                        <Badge variant="secondary" className="text-xs">
                          {row.userRole}
                        </Badge>
                      )}
                    </div>
                  </div>
                </TableCell>
                
                {filteredData.columns.map(column => {
                  const cell = filteredData.cells[row.id]?.[column.id]
                  const permission = getPermissionByValue(cell?.value || "deny")
                  const cellId = `${row.id}-${column.id}`
                  const isSelected = selection.selectedCells.has(cellId)
                  
                  return (
                    <EnhancedMatrixCell
                      key={`${row.id}-${column.id}`}
                      cell={cell || { value: "deny" }}
                      rowId={row.id}
                      columnId={column.id}
                      permission={permission}
                      currentUser={currentUser}
                      isSelected={isSelected}
                      displayMode={displayMode}
                      size={size}
                      onCellClick={(event) => {
                        if (selectionMode !== 'none') {
                          handleCellClick(cellId, event, row.id, column.id)
                        }
                        
                        if (event.detail === 2) { // Double click
                          const currentValue = cell?.value || "deny"
                          const nextValue = getNextPermissionValue(currentValue)
                          handleCellChange(row.id, column.id, nextValue)
                        }
                      }}
                      onCustomRuleEdit={handleCustomRuleEdit}
                      onContextMenu={() => handleCustomRuleCreate(row.id, column.id)}
                    />
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Custom Rule Modal */}
      {showCustomRules && (
        <CustomRuleModal
          rule={editingRule}
          isOpen={customRuleModalOpen}
          onSave={handleCustomRuleSave}
          onClose={() => {
            setCustomRuleModalOpen(false)
            setEditingRule(undefined)
          }}
        />
      )}
    </div>
  )
})

AccessMatrixEnhanced.displayName = "AccessMatrixEnhanced"