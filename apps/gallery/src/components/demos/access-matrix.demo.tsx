"use client"

import * as React from "react"
import { 
  AccessMatrix, 
  type AccessMatrixData, 
  type PermissionType,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Badge,
  Separator,
} from "@lightmind/ui"
import { 
  CheckCircle2, X, ArrowLeftRight, Volume2, VolumeX, Check, Shield, Activity, Copy
} from "lucide-react"

// Audio Routing Matrix (Main Example)
const audioData: AccessMatrixData = {
  rows: [
    { id: "headphones", label: "Headphones", description: "Main headphone output" },
    { id: "stream", label: "Stream Mix", description: "Broadcast output" },
    { id: "speakers", label: "Speakers", description: "Monitor speakers" },
    { id: "recording", label: "Recording", description: "Recording output" },
  ],
  columns: [
    { id: "mic", label: "Microphone", description: "Main microphone" },
    { id: "music", label: "Music", description: "Music playback" },
    { id: "game", label: "Game Audio", description: "Game sounds" },
    { id: "chat", label: "Voice Chat", description: "Discord/etc" },
    { id: "sfx", label: "Sound FX", description: "Sound effects" },
  ],
  cells: {
    headphones: {
      mic: { value: "on" },
      music: { value: "on" },
      game: { value: "on" },
      chat: { value: "on" },
      sfx: { value: "on" },
    },
    stream: {
      mic: { value: "on" },
      music: { value: "on" },
      game: { value: "on" },
      chat: { value: "off" },
      sfx: { value: "on" },
    },
    speakers: {
      mic: { value: "off" },
      music: { value: "on" },
      game: { value: "off" },
      chat: { value: "off" },
      sfx: { value: "off" },
    },
    recording: {
      mic: { value: "on" },
      music: { value: "off" },
      game: { value: "on" },
      chat: { value: "off" },
      sfx: { value: "on" },
    },
  }
}

const audioPermissions: PermissionType[] = [
  { value: "on", label: "Enabled", icon: <Volume2 className="h-4 w-4" /> },
  { value: "off", label: "Disabled", icon: <VolumeX className="h-4 w-4" /> },
]

// Simple Test Matrix
const testData: AccessMatrixData = {
  rows: [
    { id: "admin", label: "Admin", description: "Administrator role" },
    { id: "user", label: "User", description: "Regular user" },
    { id: "guest", label: "Guest", description: "Guest access" },
  ],
  columns: [
    { id: "read", label: "Read", description: "View content" },
    { id: "write", label: "Write", description: "Edit content" },
    { id: "delete", label: "Delete", description: "Remove content" },
    { id: "admin", label: "Admin", description: "Administrative access" },
  ],
  cells: {
    admin: {
      read: { value: "allow" },
      write: { value: "allow" },
      delete: { value: "allow" },
      admin: { value: "allow" },
    },
    user: {
      read: { value: "allow" },
      write: { value: "allow" },
      delete: { value: "deny" },
      admin: { value: "deny" },
    },
    guest: {
      read: { value: "allow" },
      write: { value: "deny" },
      delete: { value: "deny" },
      admin: { value: "deny" },
    },
  }
}

const testPermissions: PermissionType[] = [
  { value: "allow", label: "Allow", icon: <Check className="h-4 w-4" /> },
  { value: "deny", label: "Deny", icon: <X className="h-4 w-4" /> },
  { value: "conditional", label: "Conditional", icon: <Shield className="h-4 w-4" /> },
]

// Control component for standardized demo controls
interface ControlProps {
  label: string
  type: 'select' | 'switch'
  value: any
  onChange: (value: any) => void
  options?: Array<{ value: string; label: string }>
  className?: string
}

function Control({ label, type, value, onChange, options, className }: ControlProps) {
  if (type === 'select' && options) {
    return (
      <div className={`space-y-2 ${className || ''}`}>
        <label className="text-sm font-medium">{label}</label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  if (type === 'switch') {
    return (
      <div className={`flex items-center space-x-2 ${className || ''}`}>
        <Switch 
          id={`control-${label.toLowerCase().replace(/\s+/g, '-')}`}
          checked={value}
          onCheckedChange={onChange}
        />
        <label htmlFor={`control-${label.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium">
          {label}
        </label>
      </div>
    )
  }

  return null
}

export function AccessMatrixDemo() {
  const [audioMatrix, setAudioMatrix] = React.useState<AccessMatrixData>(audioData)
  const [testMatrix, setTestMatrix] = React.useState<AccessMatrixData>(testData)
  
  // Demo controls
  const [size, setSize] = React.useState<"xs" | "sm" | "default" | "lg" | "xl">("default")
  const [variant, setVariant] = React.useState<"default" | "bordered" | "shadow" | "striped" | "compact">("default")
  const [density, setDensity] = React.useState<"compact" | "comfortable" | "spacious">("comfortable")
  const [displayMode, setDisplayMode] = React.useState<"icon" | "text" | "both">("both")
  const [showRowTitle, setShowRowTitle] = React.useState(true)
  const [showColumnTitle, setShowColumnTitle] = React.useState(true)
  const [rowLabelPosition, setRowLabelPosition] = React.useState<"left" | "right">("left")
  const [copied, setCopied] = React.useState(false)

  const handleAudioChange = (rowId: string, columnId: string, newValue: string) => {
    setAudioMatrix((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { value: newValue },
        },
      },
    }))
  }

  const handleTestChange = (rowId: string, columnId: string, newValue: string) => {
    setTestMatrix((prevData) => ({
      ...prevData,
      cells: {
        ...prevData.cells,
        [rowId]: {
          ...prevData.cells[rowId],
          [columnId]: { value: newValue },
        },
      },
    }))
  }

  const generateConfigCode = () => {
    const matrixCells = Object.entries(testMatrix.cells)
      .map(([rowId, rowCells]) => {
        const cellsStr = Object.entries(rowCells)
          .map(([colId, cell]) => `      ${colId}: { value: "${cell.value}" }`)
          .join(',\n')
        return `    ${rowId}: {\n${cellsStr}\n    }`
      })
      .join(',\n')

    return `<AccessMatrix
  data={{
    rows: [
      { id: "admin", label: "Admin", description: "Administrator role" },
      { id: "user", label: "User", description: "Regular user" },
      { id: "guest", label: "Guest", description: "Guest access" }
    ],
    columns: [
      { id: "read", label: "Read", description: "View content" },
      { id: "write", label: "Write", description: "Edit content" },
      { id: "delete", label: "Delete", description: "Remove content" },
      { id: "admin", label: "Admin", description: "Administrative access" }
    ],
    cells: {
${matrixCells}
    }
  }}
  permissions={[
    { value: "allow", label: "Allow", icon: <Check className="h-4 w-4" /> },
    { value: "deny", label: "Deny", icon: <X className="h-4 w-4" /> },
    { value: "conditional", label: "Conditional", icon: <Shield className="h-4 w-4" /> }
  ]}
  onCellChange={(rowId, columnId, newValue) => {
    console.log('Cell changed:', rowId, columnId, newValue)
  }}
  clickBehavior="cycle"
  defaultValue="deny"
  size="${size}"
  variant="${variant}"
  density="${density}"
  displayMode="${displayMode}"
  rowTitle="${showRowTitle ? 'User Roles' : ''}"
  columnTitle="${showColumnTitle ? 'Permissions' : ''}"
  showRowTitle={${showRowTitle}}
  showColumnTitle={${showColumnTitle}}
  rowLabelPosition="${rowLabelPosition}"
/>`
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateConfigCode())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-4">
      {/* Main Example */}
      <Card>
        <CardHeader>
          <CardTitle>Audio Routing Matrix</CardTitle>
          <CardDescription>
            Configure which audio sources are routed to which outputs. Click cells to toggle on/off.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <AccessMatrix
              data={audioMatrix}
              permissions={audioPermissions}
              onCellChange={handleAudioChange}
              clickBehavior="cycle"
              defaultValue="off"
              size="default"
              variant="bordered"
              displayMode="both"
              rowTitle="Outputs"
              columnTitle="Inputs"
              verticalHeaders={true}
              showRowTitle={true}
              showColumnTitle={true}
              rowLabelPosition="left"
            />
          </div>
        </CardContent>
      </Card>

      {/* Demo Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Customization Options</CardTitle>
          <CardDescription>
            Test different configurations using the matrix below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Control 
              label="Size" 
              type="select" 
              value={size} 
              onChange={setSize}
              options={[
                { value: "xs", label: "XS" },
                { value: "sm", label: "SM" },
                { value: "default", label: "Default" },
                { value: "lg", label: "LG" },
                { value: "xl", label: "XL" }
              ]}
            />
            
            <Control 
              label="Variant" 
              type="select" 
              value={variant} 
              onChange={setVariant}
              options={[
                { value: "default", label: "Default" },
                { value: "bordered", label: "Bordered" },
                { value: "shadow", label: "Shadow" },
                { value: "striped", label: "Striped" },
                { value: "compact", label: "Compact" }
              ]}
            />
            
            <Control 
              label="Density" 
              type="select" 
              value={density} 
              onChange={setDensity}
              options={[
                { value: "compact", label: "Compact" },
                { value: "comfortable", label: "Comfortable" },
                { value: "spacious", label: "Spacious" }
              ]}
            />
            
            <Control 
              label="Display" 
              type="select" 
              value={displayMode} 
              onChange={setDisplayMode}
              options={[
                { value: "icon", label: "Icon" },
                { value: "text", label: "Text" },
                { value: "both", label: "Both" }
              ]}
            />
          </div>

          {/* Label Controls */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Control 
              label="Show Row Title" 
              type="switch" 
              value={showRowTitle} 
              onChange={setShowRowTitle}
            />
            
            <Control 
              label="Show Column Title" 
              type="switch" 
              value={showColumnTitle} 
              onChange={setShowColumnTitle}
            />
            
            <Control 
              label="Row Label Position" 
              type="select" 
              value={rowLabelPosition} 
              onChange={setRowLabelPosition}
              options={[
                { value: "left", label: "Left" },
                { value: "right", label: "Right" }
              ]}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Current Settings:</Badge>
                <span className="text-sm text-muted-foreground">
                  Size: {size} | Variant: {variant} | Density: {density} | Display: {displayMode}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopyCode}
                className="gap-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy Configuration'}
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <AccessMatrix
                data={testMatrix}
                permissions={testPermissions}
                onCellChange={handleTestChange}
                clickBehavior="cycle"
                defaultValue="deny"
                size={size}
                variant={variant}
                density={density}
                displayMode={displayMode}
                rowTitle="User Roles"
                columnTitle="Permissions"
                showRowTitle={showRowTitle}
                showColumnTitle={showColumnTitle}
                rowLabelPosition={rowLabelPosition}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}