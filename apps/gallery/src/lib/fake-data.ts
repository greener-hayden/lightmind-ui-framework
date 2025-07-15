/**
 * Comprehensive fake data ecosystem for LightMind UI Framework tables
 * Provides realistic sample data for all production table scenarios
 */

import { faker } from '@faker-js/faker'

// Base interfaces for type safety
export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor' | 'Manager' | 'Guest'
  status: 'Active' | 'Inactive' | 'Pending' | 'Suspended'
  lastLogin: string
  createdAt: string
  avatar?: string
  department: string
  phone: string
  location: string
  salary?: number
  permissions: string[]
}

export interface Product {
  id: string
  name: string
  category: 'Electronics' | 'Clothing' | 'Books' | 'Home' | 'Sports' | 'Beauty'
  price: number
  stock: number
  status: 'In Stock' | 'Out of Stock' | 'Low Stock' | 'Discontinued'
  rating: number
  reviews: number
  brand: string
  description: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: string
  orderNumber: string
  customer: string
  customerEmail: string
  total: number
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Returned'
  items: number
  date: string
  shippingAddress: string
  paymentMethod: 'Credit Card' | 'PayPal' | 'Bank Transfer' | 'Cash on Delivery'
  trackingNumber?: string
}

export interface Transaction {
  id: string
  transactionId: string
  type: 'Payment' | 'Refund' | 'Chargeback' | 'Fee' | 'Withdrawal'
  amount: number
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY'
  status: 'Completed' | 'Pending' | 'Failed' | 'Cancelled'
  date: string
  description: string
  account: string
  reference?: string
}

export interface AnalyticsData {
  id: string
  metric: string
  value: number
  previousValue: number
  change: number
  changeType: 'increase' | 'decrease' | 'neutral'
  date: string
  category: 'Traffic' | 'Sales' | 'Engagement' | 'Performance' | 'Revenue'
  unit: 'count' | 'percentage' | 'currency' | 'time'
}

export interface LogEntry {
  id: string
  timestamp: string
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG'
  message: string
  source: string
  userId?: string
  ip: string
  userAgent: string
  action: string
  resource: string
  details?: Record<string, any>
}

// Utility functions for generating realistic data
const generatePhoneNumber = () => {
  const formats = [
    '+1 (###) ###-####',
    '+44 #### ######',
    '+33 # ## ## ## ##',
    '+49 ### #######'
  ]
  const format = faker.helpers.arrayElement(formats)
  return format.replace(/#/g, () => faker.string.numeric(1))
}

const generatePermissions = (role: string) => {
  const basePermissions = ['read']
  const rolePermissions = {
    'Admin': ['read', 'write', 'delete', 'manage_users', 'manage_settings', 'export_data'],
    'Manager': ['read', 'write', 'delete', 'manage_team', 'view_reports'],
    'Editor': ['read', 'write', 'edit_content', 'publish'],
    'User': ['read', 'write'],
    'Guest': ['read']
  }
  return rolePermissions[role as keyof typeof rolePermissions] || basePermissions
}

// Data generators
export const generateUsers = (count: number = 1000): User[] => {
  faker.seed(12345) // Consistent data for testing
  
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['Admin', 'User', 'Editor', 'Manager', 'Guest']),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending', 'Suspended']),
    lastLogin: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
    createdAt: faker.date.past({ years: 2 }).toISOString().split('T')[0],
    avatar: faker.image.avatar(),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'Support', 'HR', 'Finance']),
    phone: generatePhoneNumber(),
    location: `${faker.location.city()}, ${faker.location.country()}`,
    salary: faker.number.int({ min: 40000, max: 200000 }),
    permissions: generatePermissions(faker.helpers.arrayElement(['Admin', 'User', 'Editor', 'Manager', 'Guest']))
  }))
}

export const generateProducts = (count: number = 500): Product[] => {
  faker.seed(54321) // Consistent data for testing
  
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.helpers.arrayElement(['Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Beauty']),
    price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
    stock: faker.number.int({ min: 0, max: 500 }),
    status: faker.helpers.arrayElement(['In Stock', 'Out of Stock', 'Low Stock', 'Discontinued']),
    rating: parseFloat(faker.number.float({ min: 1, max: 5, fractionDigits: 1 }).toFixed(1)),
    reviews: faker.number.int({ min: 0, max: 1000 }),
    brand: faker.company.name(),
    description: faker.commerce.productDescription(),
    tags: faker.helpers.arrayElements(['new', 'sale', 'popular', 'trending', 'featured', 'eco-friendly'], { min: 1, max: 3 }),
    createdAt: faker.date.past({ years: 1 }).toISOString().split('T')[0],
    updatedAt: faker.date.recent({ days: 7 }).toISOString().split('T')[0]
  }))
}

export const generateOrders = (count: number = 2000): Order[] => {
  faker.seed(98765) // Consistent data for testing
  
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    orderNumber: `ORD-${faker.string.numeric(8)}`,
    customer: faker.person.fullName(),
    customerEmail: faker.internet.email(),
    total: parseFloat(faker.commerce.price({ min: 20, max: 2000 })),
    status: faker.helpers.arrayElement(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned']),
    items: faker.number.int({ min: 1, max: 10 }),
    date: faker.date.recent({ days: 90 }).toISOString().split('T')[0],
    shippingAddress: faker.location.streetAddress({ useFullAddress: true }),
    paymentMethod: faker.helpers.arrayElement(['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery']),
    trackingNumber: faker.string.alphanumeric(12).toUpperCase()
  }))
}

export const generateTransactions = (count: number = 5000): Transaction[] => {
  faker.seed(13579) // Consistent data for testing
  
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    transactionId: `TXN-${faker.string.alphanumeric(10).toUpperCase()}`,
    type: faker.helpers.arrayElement(['Payment', 'Refund', 'Chargeback', 'Fee', 'Withdrawal']),
    amount: parseFloat(faker.finance.amount({ min: 10, max: 10000 })),
    currency: faker.helpers.arrayElement(['USD', 'EUR', 'GBP', 'JPY']),
    status: faker.helpers.arrayElement(['Completed', 'Pending', 'Failed', 'Cancelled']),
    date: faker.date.recent({ days: 365 }).toISOString().split('T')[0],
    description: faker.finance.transactionDescription(),
    account: faker.finance.accountNumber(),
    reference: faker.string.alphanumeric(8).toUpperCase()
  }))
}

export const generateAnalytics = (count: number = 100): AnalyticsData[] => {
  faker.seed(24680) // Consistent data for testing
  
  return Array.from({ length: count }, () => {
    const value = faker.number.int({ min: 100, max: 50000 })
    const previousValue = faker.number.int({ min: 80, max: 40000 })
    const change = ((value - previousValue) / previousValue) * 100
    
    return {
      id: faker.string.uuid(),
      metric: faker.helpers.arrayElement([
        'Page Views', 'Unique Visitors', 'Session Duration', 'Bounce Rate', 'Conversion Rate',
        'Revenue', 'Orders', 'CTR', 'Impressions', 'Clicks', 'Sign-ups', 'Retention Rate'
      ]),
      value,
      previousValue,
      change: parseFloat(change.toFixed(2)),
      changeType: change > 0 ? 'increase' : change < 0 ? 'decrease' : 'neutral',
      date: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
      category: faker.helpers.arrayElement(['Traffic', 'Sales', 'Engagement', 'Performance', 'Revenue']),
      unit: faker.helpers.arrayElement(['count', 'percentage', 'currency', 'time'])
    }
  })
}

export const generateLogs = (count: number = 10000): LogEntry[] => {
  faker.seed(11111) // Consistent data for testing
  
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    timestamp: faker.date.recent({ days: 7 }).toISOString(),
    level: faker.helpers.arrayElement(['INFO', 'WARN', 'ERROR', 'DEBUG']),
    message: faker.hacker.phrase(),
    source: faker.helpers.arrayElement(['auth', 'api', 'database', 'cache', 'queue', 'scheduler']),
    userId: faker.datatype.boolean() ? faker.string.uuid() : undefined,
    ip: faker.internet.ip(),
    userAgent: faker.internet.userAgent(),
    action: faker.helpers.arrayElement(['CREATE', 'READ', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT']),
    resource: faker.helpers.arrayElement(['user', 'product', 'order', 'payment', 'report']),
    details: faker.datatype.boolean() ? {
      duration: faker.number.int({ min: 10, max: 5000 }),
      statusCode: faker.helpers.arrayElement([200, 201, 400, 401, 403, 404, 500])
    } : undefined
  }))
}

// Cached data instances for performance
let cachedUsers: User[] | null = null
let cachedProducts: Product[] | null = null
let cachedOrders: Order[] | null = null
let cachedTransactions: Transaction[] | null = null
let cachedAnalytics: AnalyticsData[] | null = null
let cachedLogs: LogEntry[] | null = null

// Exported data getters with caching
export const getUsers = (count?: number): User[] => {
  if (!cachedUsers) {
    cachedUsers = generateUsers(count || 1000)
  }
  return count ? cachedUsers.slice(0, count) : cachedUsers
}

export const getProducts = (count?: number): Product[] => {
  if (!cachedProducts) {
    cachedProducts = generateProducts(count || 500)
  }
  return count ? cachedProducts.slice(0, count) : cachedProducts
}

export const getOrders = (count?: number): Order[] => {
  if (!cachedOrders) {
    cachedOrders = generateOrders(count || 2000)
  }
  return count ? cachedOrders.slice(0, count) : cachedOrders
}

export const getTransactions = (count?: number): Transaction[] => {
  if (!cachedTransactions) {
    cachedTransactions = generateTransactions(count || 5000)
  }
  return count ? cachedTransactions.slice(0, count) : cachedTransactions
}

export const getAnalytics = (count?: number): AnalyticsData[] => {
  if (!cachedAnalytics) {
    cachedAnalytics = generateAnalytics(count || 100)
  }
  return count ? cachedAnalytics.slice(0, count) : cachedAnalytics
}

export const getLogs = (count?: number): LogEntry[] => {
  if (!cachedLogs) {
    cachedLogs = generateLogs(count || 10000)
  }
  return count ? cachedLogs.slice(0, count) : cachedLogs
}

// Utility functions for data manipulation
export const searchData = <T>(data: T[], searchTerm: string, searchFields: (keyof T)[]): T[] => {
  const lowercaseSearch = searchTerm.toLowerCase()
  return data.filter(item =>
    searchFields.some(field => {
      const value = item[field]
      return typeof value === 'string' && value.toLowerCase().includes(lowercaseSearch)
    })
  )
}

export const filterData = <T>(data: T[], filters: Record<string, any>): T[] => {
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined || value === '') return true
      const itemValue = item[key as keyof T]
      return itemValue === value
    })
  })
}

export const sortData = <T>(data: T[], sortConfig: { key: keyof T; direction: 'asc' | 'desc' }[]): T[] => {
  return [...data].sort((a, b) => {
    for (const { key, direction } of sortConfig) {
      const aValue = a[key]
      const bValue = b[key]
      
      if (aValue < bValue) return direction === 'asc' ? -1 : 1
      if (aValue > bValue) return direction === 'asc' ? 1 : -1
    }
    return 0
  })
}

export const paginateData = <T>(data: T[], page: number, pageSize: number): { data: T[], totalPages: number, totalItems: number } => {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  
  return {
    data: data.slice(startIndex, endIndex),
    totalPages: Math.ceil(data.length / pageSize),
    totalItems: data.length
  }
}