"use client"

import * as React from "react"
import { AccessMatrix, type AccessMatrixData } from "@lightmind/ui"

const data: AccessMatrixData = {
  rows: [
    { id: "read", label: "Read" },
    { id: "write", label: "Write" },
  ],
  columns: [
    { id: "user", label: "User" },
    { id: "admin", label: "Admin" },
  ],
  cells: {
    read: { user: { value: "allowed" }, admin: { value: "allowed" } },
    write: { user: { value: "denied" }, admin: { value: "allowed" } },
  },
}

export function AccessMatrixSimpleDemo() {
  const [matrixData, setMatrixData] = React.useState(data)
  
  return (
    <AccessMatrix
      data={matrixData}
      onCellChange={(rowId, colId, value) => {
        setMatrixData(prev => ({
          ...prev,
          cells: {
            ...prev.cells,
            [rowId]: {
              ...prev.cells[rowId],
              [colId]: { value }
            }
          }
        }))
      }}
    />
  )
}