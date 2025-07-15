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
import { SelectableTable, useTableSelection } from '@/components/ui/selectable-table'
import { FilterableTable, useTableFilters, createFilterOptions } from '@/components/ui/filterable-table'
import { SortableTable, useTableSort } from '@/components/ui/sortable-table'
import { TablePagination, usePagination } from '@/components/ui/table-pagination'
import { getUsers, getProducts, getOrders, getAnalytics } from '@/lib/fake-data'
import { useTableData, createColumnDef } from '@/lib/table-utils'

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
  const users = getUsers(20)
  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessor: 'name' as keyof typeof users[0],
      sortable: true,
      sortType: 'string' as const,
      cell: (value: any) => <span className="font-medium">{value}</span>
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email' as keyof typeof users[0],
      sortable: true,
      sortType: 'string' as const
    },
    {
      id: 'role',
      header: 'Role',
      accessor: 'role' as keyof typeof users[0],
      sortable: true,
      sortType: 'string' as const,
      cell: (value: any) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status' as keyof typeof users[0],
      sortable: true,
      sortType: 'string' as const,
      cell: (value: any) => (
        <Badge variant={
          value === 'Active' ? 'default' : 
          value === 'Inactive' ? 'secondary' : 
          'outline'
        }>
          {value}
        </Badge>
      )
    },
    {
      id: 'lastLogin',
      header: 'Last Login',
      accessor: 'lastLogin' as keyof typeof users[0],
      sortable: true,
      sortType: 'date' as const
    }
  ]

  return (
    <div className="p-4">
      <SortableTable
        data={users}
        columns={columns}
        multiColumnSort={true}
        showSortPriority={true}
        maxSortColumns={3}
        defaultSort={[{ key: 'name', direction: 'asc', priority: 0 }]}
      />
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
  const analyticsData = getAnalytics(10)
  
  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase': return 'text-green-600'
      case 'decrease': return 'text-red-600'
      default: return 'text-muted-foreground'
    }
  }

  const formatValue = (value: number, unit: string) => {
    switch (unit) {
      case 'percentage':
        return `${value}%`
      case 'currency':
        return `$${value.toLocaleString()}`
      case 'time':
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
          {analyticsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.metric}</TableCell>
              <TableCell>{formatValue(row.value, row.unit)}</TableCell>
              <TableCell>{formatValue(row.previousValue, row.unit)}</TableCell>
              <TableCell className={`text-right font-medium ${getChangeColor(row.changeType)}`}>
                {row.change > 0 ? '+' : ''}{row.change.toFixed(1)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// New advanced table preview components
export function TableSelectablePreview() {
  const users = getUsers(15)
  const {
    selectedRows,
    isAllSelected,
    isIndeterminate,
    handleRowSelect,
    handleSelectAll,
    clearSelection,
    selectedCount
  } = useTableSelection(users, (user) => user.id)

  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessor: 'name' as keyof typeof users[0],
      cell: (value: any) => <span className="font-medium">{value}</span>
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email' as keyof typeof users[0]
    },
    {
      id: 'role',
      header: 'Role',
      accessor: 'role' as keyof typeof users[0],
      cell: (value: any) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status' as keyof typeof users[0],
      cell: (value: any) => (
        <Badge variant={
          value === 'Active' ? 'default' : 
          value === 'Inactive' ? 'secondary' : 
          'outline'
        }>
          {value}
        </Badge>
      )
    }
  ]

  const selectionActions = [
    {
      label: 'Export Selected',
      action: (selectedRows: Set<string>) => {
        console.log('Exporting:', selectedRows)
      }
    },
    {
      label: 'Bulk Edit',
      action: (selectedRows: Set<string>) => {
        console.log('Bulk editing:', selectedRows)
      }
    },
    {
      label: 'Delete Selected',
      action: (selectedRows: Set<string>) => {
        console.log('Deleting:', selectedRows)
      },
      variant: 'destructive' as const
    }
  ]

  return (
    <div className="p-4">
      <SelectableTable
        data={users}
        columns={columns}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        isAllSelected={isAllSelected}
        isIndeterminate={isIndeterminate}
        getRowId={(user) => user.id}
        selectionActions={selectionActions}
        enableBulkActions={true}
        showSelectionCount={true}
      />
    </div>
  )
}

export function TableFilterablePreview() {
  const users = getUsers(50)
  const { filters, updateFilter, clearAllFilters } = useTableFilters()

  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessor: 'name' as keyof typeof users[0],
      cell: (value: any) => <span className="font-medium">{value}</span>,
      filter: {
        id: 'name' as keyof typeof users[0],
        type: 'text' as const,
        label: 'Name',
        placeholder: 'Search names...'
      }
    },
    {
      id: 'department',
      header: 'Department',
      accessor: 'department' as keyof typeof users[0],
      filter: {
        id: 'department' as keyof typeof users[0],
        type: 'select' as const,
        label: 'Department',
        options: createFilterOptions(users, 'department')
      }
    },
    {
      id: 'role',
      header: 'Role',
      accessor: 'role' as keyof typeof users[0],
      cell: (value: any) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      ),
      filter: {
        id: 'role' as keyof typeof users[0],
        type: 'multiselect' as const,
        label: 'Role',
        options: createFilterOptions(users, 'role')
      }
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status' as keyof typeof users[0],
      cell: (value: any) => (
        <Badge variant={
          value === 'Active' ? 'default' : 
          value === 'Inactive' ? 'secondary' : 
          'outline'
        }>
          {value}
        </Badge>
      ),
      filter: {
        id: 'status' as keyof typeof users[0],
        type: 'select' as const,
        label: 'Status',
        options: createFilterOptions(users, 'status')
      }
    },
    {
      id: 'lastLogin',
      header: 'Last Login',
      accessor: 'lastLogin' as keyof typeof users[0],
      filter: {
        id: 'lastLogin' as keyof typeof users[0],
        type: 'date' as const,
        label: 'Last Login'
      }
    }
  ]

  return (
    <div className="p-4">
      <FilterableTable
        data={users}
        columns={columns}
        filters={filters}
        onFiltersChange={(newFilters) => Object.entries(newFilters).forEach(([key, value]) => updateFilter(key, value))}
        showFilterBar={true}
        showFilterCount={true}
        showClearFilters={true}
      />
    </div>
  )
}

export function TablePaginatedPreview() {
  const allProducts = getProducts(100)
  const { currentPage, pageSize, handlePageChange, handlePageSizeChange } = usePagination(allProducts.length, 10)

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentProducts = allProducts.slice(startIndex, endIndex)

  const columns = [
    {
      id: 'name',
      header: 'Product',
      accessor: 'name' as keyof typeof allProducts[0],
      cell: (value: any) => <span className="font-medium">{value}</span>
    },
    {
      id: 'category',
      header: 'Category',
      accessor: 'category' as keyof typeof allProducts[0],
      cell: (value: any) => (
        <Badge variant="secondary">{value}</Badge>
      )
    },
    {
      id: 'price',
      header: 'Price',
      accessor: 'price' as keyof typeof allProducts[0],
      cell: (value: any) => `$${value.toFixed(2)}`
    },
    {
      id: 'stock',
      header: 'Stock',
      accessor: 'stock' as keyof typeof allProducts[0],
      cell: (value: any) => (
        <span className={value < 10 ? 'text-red-600' : value < 50 ? 'text-yellow-600' : 'text-green-600'}>
          {value}
        </span>
      )
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status' as keyof typeof allProducts[0],
      cell: (value: any) => (
        <Badge variant={
          value === 'In Stock' ? 'default' : 
          value === 'Low Stock' ? 'destructive' : 
          'outline'
        }>
          {value}
        </Badge>
      )
    }
  ]

  return (
    <div className="p-4 space-y-4">
      <Table>
        <TableCaption>Product inventory with pagination</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product) => (
            <TableRow key={product.id}>
              {columns.map((column) => {
                const value = product[column.accessor]
                return (
                  <TableCell key={column.id}>
                    {column.cell ? column.cell(value) : value}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        currentPage={currentPage}
        totalPages={Math.ceil(allProducts.length / pageSize)}
        pageSize={pageSize}
        totalItems={allProducts.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        showPageSizeSelector={true}
        showPageJumper={true}
        showInfo={true}
        showFirstLastButtons={true}
      />
    </div>
  )
}

export function TableResponsivePreview() {
  const orders = getOrders(15)
  const columns = [
    {
      id: 'orderNumber',
      header: 'Order #',
      accessor: 'orderNumber' as keyof typeof orders[0],
      width: 100,
      cell: (value: any) => <span className="font-medium">{value}</span>
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status' as keyof typeof orders[0],
      cell: (value: any) => (
        <Badge variant={
          value === 'Delivered' ? 'default' : 
          value === 'Shipped' ? 'secondary' : 
          value === 'Cancelled' ? 'destructive' : 
          'outline'
        }>
          {value}
        </Badge>
      )
    },
    {
      id: 'customer',
      header: 'Customer',
      accessor: 'customer' as keyof typeof orders[0]
    },
    {
      id: 'customerEmail',
      header: 'Email',
      accessor: 'customerEmail' as keyof typeof orders[0]
    },
    {
      id: 'paymentMethod',
      header: 'Payment',
      accessor: 'paymentMethod' as keyof typeof orders[0]
    },
    {
      id: 'items',
      header: 'Items',
      accessor: 'items' as keyof typeof orders[0],
      align: 'center' as const
    },
    {
      id: 'total',
      header: 'Total',
      accessor: 'total' as keyof typeof orders[0],
      align: 'right' as const,
      cell: (value: any) => `$${value.toFixed(2)}`
    }
  ]

  return (
    <div className="p-4">
      <div className="rounded-md border">
        <Table>
          <TableCaption>Responsive order table with horizontal scroll</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead 
                  key={column.id}
                  className={column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : ''}
                  style={{ width: column.width }}
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={order.id}>
                {columns.map((column) => {
                  const value = order[column.accessor]
                  return (
                    <TableCell 
                      key={column.id}
                      className={column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : ''}
                    >
                      {column.cell ? column.cell(value) : value}
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