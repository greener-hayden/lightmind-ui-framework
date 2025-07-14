'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter
} from '@/components/ui/table'

// Sample data for demonstrations
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2024-01-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", lastLogin: "2024-01-09" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive", lastLogin: "2024-01-05" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active", lastLogin: "2024-01-08" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "Pending", lastLogin: "2024-01-07" },
]

const invoices = [
  { id: "INV001", customer: "Acme Corp", amount: 2500.00, status: "Paid", date: "2024-01-15", dueDate: "2024-01-30" },
  { id: "INV002", customer: "Tech Solutions", amount: 1800.50, status: "Pending", date: "2024-01-12", dueDate: "2024-01-27" },
  { id: "INV003", customer: "Global Industries", amount: 3200.75, status: "Overdue", date: "2024-01-08", dueDate: "2024-01-23" },
  { id: "INV004", customer: "StartupXYZ", amount: 950.00, status: "Paid", date: "2024-01-14", dueDate: "2024-01-29" },
  { id: "INV005", customer: "Enterprise LLC", amount: 4100.25, status: "Pending", date: "2024-01-16", dueDate: "2024-01-31" },
]

const analytics = [
  { metric: "Page Views", current: 12450, previous: 11320, change: "+10.0%" },
  { metric: "Unique Visitors", current: 3280, previous: 3150, change: "+4.1%" },
  { metric: "Bounce Rate", current: 45.2, previous: 48.1, change: "-6.0%" },
  { metric: "Avg. Session Duration", current: 245, previous: 230, change: "+6.5%" },
  { metric: "Conversion Rate", current: 3.8, previous: 3.5, change: "+8.6%" },
]

export function TablePreview() {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export function TableVariantsPreview() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default Table</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Striped Table</h4>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>Editor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Bordered Table</h4>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export function TableSizesPreview() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Small Table</h4>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell><Badge variant="secondary" className="text-xs">Active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell><Badge variant="secondary" className="text-xs">Inactive</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default Table</h4>
        <Table size="default">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell><Badge variant="secondary">Active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Large Table</h4>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell><Badge variant="secondary">Active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export function TableSortablePreview() {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' | null }>({
    key: '',
    direction: null,
  })

  const handleSort = (key: string) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig.direction === null) return 0

    const aValue = a[sortConfig.key as keyof typeof a]
    const bValue = b[sortConfig.key as keyof typeof b]

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  return (
    <div className="p-4">
      <Table>
        <TableCaption>Click column headers to sort the data.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead 
              sortable
              sortDirection={sortConfig.key === 'name' ? sortConfig.direction : null}
              onSort={() => handleSort('name')}
            >
              Name
            </TableHead>
            <TableHead 
              sortable
              sortDirection={sortConfig.key === 'email' ? sortConfig.direction : null}
              onSort={() => handleSort('email')}
            >
              Email
            </TableHead>
            <TableHead 
              sortable
              sortDirection={sortConfig.key === 'role' ? sortConfig.direction : null}
              onSort={() => handleSort('role')}
            >
              Role
            </TableHead>
            <TableHead 
              sortable
              sortDirection={sortConfig.key === 'status' ? sortConfig.direction : null}
              onSort={() => handleSort('status')}
            >
              Status
            </TableHead>
            <TableHead 
              sortable
              sortDirection={sortConfig.key === 'lastLogin' ? sortConfig.direction : null}
              onSort={() => handleSort('lastLogin')}
            >
              Last Login
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={
                    user.status === 'Active' ? 'default' : 
                    user.status === 'Inactive' ? 'secondary' : 
                    'outline'
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function TableUsersPreview() {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>User management dashboard</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={
                    user.status === 'Active' ? 'default' : 
                    user.status === 'Inactive' ? 'secondary' : 
                    'outline'
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function TableInvoicesPreview() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Paid': return 'default'
      case 'Pending': return 'secondary'
      case 'Overdue': return 'destructive'
      default: return 'outline'
    }
  }

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="p-4">
      <Table>
        <TableCaption>Recent invoices and billing information</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(invoice.status)}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium">
                ${invoice.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right font-medium">
              ${totalAmount.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export function TableAnalyticsPreview() {
  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-600'
    if (change.startsWith('-') && !change.includes('Bounce')) return 'text-red-600'
    if (change.startsWith('-') && change.includes('Bounce')) return 'text-green-600' // Bounce rate decrease is good
    return 'text-muted-foreground'
  }

  const formatValue = (metric: string, value: number) => {
    switch (metric) {
      case 'Bounce Rate':
      case 'Conversion Rate':
        return `${value}%`
      case 'Avg. Session Duration':
        return `${Math.floor(value / 60)}m ${value % 60}s`
      default:
        return value.toLocaleString()
    }
  }

  return (
    <div className="p-4">
      <Table>
        <TableCaption>Website analytics and performance metrics</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Current Period</TableHead>
            <TableHead>Previous Period</TableHead>
            <TableHead className="text-right">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {analytics.map((row) => (
            <TableRow key={row.metric}>
              <TableCell className="font-medium">{row.metric}</TableCell>
              <TableCell>{formatValue(row.metric, row.current)}</TableCell>
              <TableCell>{formatValue(row.metric, row.previous)}</TableCell>
              <TableCell className={`text-right font-medium ${getChangeColor(row.change)}`}>
                {row.change}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function TableResponsivePreview() {
  return (
    <div className="p-4">
      <div className="rounded-md border">
        <Table>
          <TableCaption>Responsive table with horizontal scroll</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>+1 (555) 123-4567</TableCell>
              <TableCell>123 Main St, New York, NY 10001</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>+1 (555) 987-6543</TableCell>
              <TableCell>456 Oak Ave, Los Angeles, CA 90210</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>Unpaid</TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>+1 (555) 456-7890</TableCell>
              <TableCell>789 Pine St, Chicago, IL 60601</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}