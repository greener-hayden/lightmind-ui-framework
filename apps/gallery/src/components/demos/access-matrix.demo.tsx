"use client"

import * as React from "react"
import { 
  AccessMatrix, 
  type AccessMatrixData, 
  type Permission,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lightmind/ui"
import { 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator 
} from "@lightmind/ui"
import { Trash, Edit, Copy, Shield, Check, X } from "lucide-react"
import { Badge } from "@lightmind/ui"

const initialData: AccessMatrixData = {
  rows: [
    { id: "user-management", label: "User Management", description: "Create, edit, and delete users" },
    { id: "content-management", label: "Content Management", description: "Create, edit, and publish content" },
    { id: "billing", label: "Billing & Payments", description: "Access billing information and payment methods" },
    { id: "analytics", label: "Analytics", description: "View analytics and reports" },
    { id: "api-keys", label: "API Keys", description: "Manage API keys and access tokens" },
    { id: "settings", label: "System Settings", description: "Configure system-wide settings" },
  ],
  columns: [
    { id: "admin", label: "Administrator", description: "Full system access" },
    { id: "editor", label: "Editor", description: "Content creation and editing" },
    { id: "viewer", label: "Viewer", description: "Read-only access" },
    { id: "billing-admin", label: "Billing Admin", description: "Billing and payment management" },
    { id: "developer", label: "Developer", description: "API and integration access" },
  ],
  cells: {
    "user-management": {
      admin: { permission: "allowed" },
      editor: { permission: "denied" },
      viewer: { permission: "denied" },
      "billing-admin": { permission: "denied" },
      developer: { permission: "partial", metadata: { note: "Can view users but not edit" } },
    },
    "content-management": {
      admin: { permission: "allowed" },
      editor: { permission: "allowed" },
      viewer: { permission: "partial", metadata: { note: "Can view published content only" } },
      "billing-admin": { permission: "denied" },
      developer: { permission: "partial", metadata: { note: "API read access only" } },
    },
    "billing": {
      admin: { permission: "allowed" },
      editor: { permission: "denied" },
      viewer: { permission: "denied" },
      "billing-admin": { permission: "allowed" },
      developer: { permission: "denied" },
    },
    "analytics": {
      admin: { permission: "allowed" },
      editor: { permission: "partial", metadata: { note: "Content analytics only" } },
      viewer: { permission: "allowed" },
      "billing-admin": { permission: "partial", metadata: { note: "Revenue analytics only" } },
      developer: { permission: "allowed" },
    },
    "api-keys": {
      admin: { permission: "allowed" },
      editor: { permission: "denied" },
      viewer: { permission: "denied" },
      "billing-admin": { permission: "denied" },
      developer: { permission: "allowed" },
    },
    "settings": {
      admin: { permission: "allowed" },
      editor: { permission: "denied" },
      viewer: { permission: "denied" },
      "billing-admin": { permission: "partial", metadata: { note: "Billing settings only" } },
      developer: { permission: "partial", metadata: { note: "API settings only" } },
    },
  },
}

export function AccessMatrixDemo() {
  const [data, setData] = React.useState<AccessMatrixData>(initialData)
  const [selectedCell, setSelectedCell] = React.useState<{
    rowId: string
    columnId: string
    permission: Permission
  } | null>(null)
  const [editMode, setEditMode] = React.useState(false)

  const handleCellEdit = (rowId: string, columnId: string, newPermission: Permission) => {
    setData((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { permission: newPermission },
        },
      },
    }))
  }

  const handleCellClick = (rowId: string, columnId: string) => {
    const cell = data.cells[rowId]?.[columnId] || { permission: "undefined" }
    const row = data.rows.find(r => r.id === rowId)
    const column = data.columns.find(c => c.id === columnId)
    
    setSelectedCell({
      rowId,
      columnId,
      permission: cell.permission,
    })
  }

  const renderRowActions = (row: AccessMatrixData["rows"][0]) => (
    <>
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        Edit Resource
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Duplicate Permissions
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-destructive">
        <Trash className="mr-2 h-4 w-4" />
        Remove Resource
      </DropdownMenuItem>
    </>
  )

  const renderColumnActions = (column: AccessMatrixData["columns"][0]) => (
    <>
      <DropdownMenuLabel>Role Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Shield className="mr-2 h-4 w-4" />
        Edit Role
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Clone Role
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-destructive">
        <Trash className="mr-2 h-4 w-4" />
        Delete Role
      </DropdownMenuItem>
    </>
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Access Control Matrix</h3>
          <p className="text-muted-foreground mt-1">
            Define and manage permissions across different roles and resources in your application
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            {Object.values(data.cells).reduce((acc, row) => 
              acc + Object.values(row).filter(cell => cell.permission === "allowed").length, 0
            )} Allowed
          </Badge>
          <Button
            variant={editMode ? "default" : "outline"}
            onClick={() => setEditMode(!editMode)}
            className="gap-2"
          >
            {editMode ? (
              <>
                <Shield className="h-4 w-4" />
                View Mode
              </>
            ) : (
              <>
                <Edit className="h-4 w-4" />
                Edit Mode
              </>
            )}
          </Button>
        </div>
      </div>

      <AccessMatrix
        data={data}
        editable={editMode}
        onCellEdit={handleCellEdit}
        onCellClick={!editMode ? handleCellClick : undefined}
        renderRowActions={renderRowActions}
        renderColumnActions={renderColumnActions}
      />

      <Dialog open={!!selectedCell} onOpenChange={() => setSelectedCell(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Permission Details</DialogTitle>
            <DialogDescription>
              Configure access control for this specific resource and role combination.
            </DialogDescription>
          </DialogHeader>
          {selectedCell && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Resource</Label>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">
                      {data.rows.find(r => r.id === selectedCell.rowId)?.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {data.rows.find(r => r.id === selectedCell.rowId)?.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Role</Label>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">
                      {data.columns.find(c => c.id === selectedCell.columnId)?.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {data.columns.find(c => c.id === selectedCell.columnId)?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">Permission Level</Label>
                <Select
                  value={selectedCell.permission}
                  onValueChange={(value: Permission) => {
                    if (selectedCell) {
                      handleCellEdit(selectedCell.rowId, selectedCell.columnId, value)
                      setSelectedCell({ ...selectedCell, permission: value })
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allowed">Allowed</SelectItem>
                    <SelectItem value="denied">Denied</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                    <SelectItem value="undefined">Undefined</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedCell(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h4 className="font-semibold">Permission Legend</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50">
              <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
            </div>
            <div>
              <p className="font-medium text-sm">Allowed</p>
              <p className="text-xs text-muted-foreground">Full access granted</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50">
              <X className="h-5 w-5 text-red-600 dark:text-red-400 stroke-[3]" />
            </div>
            <div>
              <p className="font-medium text-sm">Denied</p>
              <p className="text-xs text-muted-foreground">No access permitted</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50">
              <Edit className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="font-medium text-sm">Partial</p>
              <p className="text-xs text-muted-foreground">Limited access with restrictions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600">
              <span className="text-sm text-gray-400 dark:text-gray-500">—</span>
            </div>
            <div>
              <p className="font-medium text-sm">Undefined</p>
              <p className="text-xs text-muted-foreground">Permission not configured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}