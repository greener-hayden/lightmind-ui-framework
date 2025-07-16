import { AccessMatrix, type AccessMatrixData } from "@/components/ui/access-matrix"

export default function AccessMatrixDemo() {
  const data: AccessMatrixData = {
    rows: [
      { id: "read", label: "Read", description: "View content" },
      { id: "write", label: "Write", description: "Create and edit content" },
      { id: "delete", label: "Delete", description: "Remove content" },
    ],
    columns: [
      { id: "admin", label: "Admin", description: "Full system access" },
      { id: "editor", label: "Editor", description: "Content management" },
      { id: "viewer", label: "Viewer", description: "Read-only access" },
    ],
    cells: {
      read: {
        admin: { permission: "allowed" },
        editor: { permission: "allowed" },
        viewer: { permission: "allowed" },
      },
      write: {
        admin: { permission: "allowed" },
        editor: { permission: "allowed" },
        viewer: { permission: "denied" },
      },
      delete: {
        admin: { permission: "allowed" },
        editor: { permission: "partial" },
        viewer: { permission: "denied" },
      },
    },
  }

  return <AccessMatrix data={data} />
}