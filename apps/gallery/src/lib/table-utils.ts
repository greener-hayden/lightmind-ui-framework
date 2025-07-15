/**
 * Table utilities and hooks for LightMind UI Framework
 * Provides data-agnostic interfaces and utilities for production table usage
 */

import { useState, useMemo, useCallback } from 'react'

// Core interfaces for table functionality
export interface ColumnDefinition<T> {
  id: keyof T
  header: string
  accessor: keyof T
  cell?: (value: any, row: T) => React.ReactNode
  sortable?: boolean
  filterable?: boolean
  width?: number
  minWidth?: number
  maxWidth?: number
  align?: 'left' | 'center' | 'right'
  sticky?: boolean
  hidden?: boolean
  filterType?: 'text' | 'select' | 'date' | 'number' | 'boolean'
  filterOptions?: Array<{ label: string; value: any }>
}

export interface SortConfig<T> {
  key: keyof T
  direction: 'asc' | 'desc'
  priority?: number
}

export interface FilterConfig<T> {
  key: keyof T
  value: any
  operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte' | 'in'
}

export interface PaginationConfig {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export interface SelectionConfig<T> {
  selectedRows: Set<string>
  isAllSelected: boolean
  isIndeterminate: boolean
  getRowId: (row: T) => string
}

export interface TableState<T> {
  data: T[]
  originalData: T[]
  sortConfig: SortConfig<T>[]
  filterConfig: FilterConfig<T>[]
  paginationConfig: PaginationConfig
  selectionConfig: SelectionConfig<T>
  searchQuery: string
  isLoading: boolean
  error: string | null
}

export interface DataSource<T> {
  fetch: (params: QueryParams) => Promise<PagedResult<T>>
  count: () => Promise<number>
  schema: ColumnDefinition<T>[]
}

export interface QueryParams {
  page?: number
  pageSize?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  filters?: Record<string, any>
  search?: string
}

export interface PagedResult<T> {
  data: T[]
  totalItems: number
  totalPages: number
  currentPage: number
  pageSize: number
}

// Utility functions for data manipulation
export const sortData = <T>(data: T[], sortConfig: SortConfig<T>[]): T[] => {
  if (!sortConfig.length) return data

  return [...data].sort((a, b) => {
    for (const { key, direction } of sortConfig) {
      const aValue = a[key]
      const bValue = b[key]
      
      // Handle null/undefined values
      if (aValue == null && bValue == null) continue
      if (aValue == null) return direction === 'asc' ? -1 : 1
      if (bValue == null) return direction === 'asc' ? 1 : -1
      
      // Handle different data types
      let comparison = 0
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue)
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue
      } else if (aValue instanceof Date && bValue instanceof Date) {
        comparison = aValue.getTime() - bValue.getTime()
      } else {
        // Fallback to string comparison
        comparison = String(aValue).localeCompare(String(bValue))
      }
      
      if (comparison !== 0) {
        return direction === 'asc' ? comparison : -comparison
      }
    }
    return 0
  })
}

export const filterData = <T>(data: T[], filterConfig: FilterConfig<T>[]): T[] => {
  if (!filterConfig.length) return data

  return data.filter(item => {
    return filterConfig.every(({ key, value, operator = 'equals' }) => {
      if (value === null || value === undefined || value === '') return true
      
      const itemValue = item[key]
      
      switch (operator) {
        case 'equals':
          return itemValue === value
        case 'contains':
          return String(itemValue).toLowerCase().includes(String(value).toLowerCase())
        case 'startsWith':
          return String(itemValue).toLowerCase().startsWith(String(value).toLowerCase())
        case 'endsWith':
          return String(itemValue).toLowerCase().endsWith(String(value).toLowerCase())
        case 'gt':
          return Number(itemValue) > Number(value)
        case 'lt':
          return Number(itemValue) < Number(value)
        case 'gte':
          return Number(itemValue) >= Number(value)
        case 'lte':
          return Number(itemValue) <= Number(value)
        case 'in':
          return Array.isArray(value) && value.includes(itemValue)
        default:
          return true
      }
    })
  })
}

export const searchData = <T>(data: T[], searchQuery: string, searchFields: (keyof T)[]): T[] => {
  if (!searchQuery.trim()) return data
  
  const lowercaseQuery = searchQuery.toLowerCase()
  return data.filter(item =>
    searchFields.some(field => {
      const value = item[field]
      return typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
    })
  )
}

export const paginateData = <T>(data: T[], page: number, pageSize: number): PagedResult<T> => {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  
  return {
    data: data.slice(startIndex, endIndex),
    totalItems: data.length,
    totalPages: Math.ceil(data.length / pageSize),
    currentPage: page,
    pageSize
  }
}

// Hook for table data management
export const useTableData = <T>(
  initialData: T[],
  columns: ColumnDefinition<T>[],
  options: {
    initialPageSize?: number
    initialPage?: number
    getRowId?: (row: T) => string
    searchFields?: (keyof T)[]
    serverSide?: boolean
    dataSource?: DataSource<T>
  } = {}
) => {
  const {
    initialPageSize = 10,
    initialPage = 1,
    getRowId = (row: T, index: number) => `${index}`,
    searchFields = [],
    serverSide = false,
    dataSource
  } = options

  const [data, setData] = useState<T[]>(initialData)
  const [originalData, setOriginalData] = useState<T[]>(initialData)
  const [sortConfig, setSortConfig] = useState<SortConfig<T>[]>([])
  const [filterConfig, setFilterConfig] = useState<FilterConfig<T>[]>([])
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Process data based on current state
  const processedData = useMemo(() => {
    if (serverSide && dataSource) return data

    let result = [...originalData]
    
    // Apply search
    if (searchQuery && searchFields.length > 0) {
      result = searchData(result, searchQuery, searchFields)
    }
    
    // Apply filters
    if (filterConfig.length > 0) {
      result = filterData(result, filterConfig)
    }
    
    // Apply sorting
    if (sortConfig.length > 0) {
      result = sortData(result, sortConfig)
    }
    
    return result
  }, [originalData, searchQuery, searchFields, filterConfig, sortConfig, serverSide, dataSource, data])

  // Pagination data
  const paginationData = useMemo(() => {
    if (serverSide && dataSource) {
      return {
        data: data,
        totalItems: data.length,
        totalPages: Math.ceil(data.length / pageSize),
        currentPage,
        pageSize
      }
    }
    
    return paginateData(processedData, currentPage, pageSize)
  }, [processedData, currentPage, pageSize, serverSide, dataSource, data])

  // Selection state
  const selectionState = useMemo(() => {
    const allRowIds = new Set(paginationData.data.map((row, index) => getRowId(row, index)))
    const selectedOnCurrentPage = new Set([...selectedRows].filter(id => allRowIds.has(id)))
    
    return {
      selectedRows,
      isAllSelected: allRowIds.size > 0 && selectedOnCurrentPage.size === allRowIds.size,
      isIndeterminate: selectedOnCurrentPage.size > 0 && selectedOnCurrentPage.size < allRowIds.size,
      getRowId
    }
  }, [selectedRows, paginationData.data, getRowId])

  // Sorting functions
  const handleSort = useCallback((key: keyof T, multiColumn: boolean = false) => {
    setSortConfig(prev => {
      const existingIndex = prev.findIndex(config => config.key === key)
      
      if (existingIndex >= 0) {
        const current = prev[existingIndex]
        const newDirection = current.direction === 'asc' ? 'desc' : 'asc'
        
        if (multiColumn) {
          const newConfig = [...prev]
          newConfig[existingIndex] = { ...current, direction: newDirection }
          return newConfig
        } else {
          return [{ key, direction: newDirection, priority: 0 }]
        }
      } else {
        const newSort = { key, direction: 'asc' as const, priority: prev.length }
        return multiColumn ? [...prev, newSort] : [newSort]
      }
    })
  }, [])

  const clearSort = useCallback(() => {
    setSortConfig([])
  }, [])

  // Filtering functions
  const handleFilter = useCallback((key: keyof T, value: any, operator: FilterConfig<T>['operator'] = 'equals') => {
    setFilterConfig(prev => {
      const existingIndex = prev.findIndex(config => config.key === key)
      
      if (existingIndex >= 0) {
        if (value === null || value === undefined || value === '') {
          // Remove filter if value is empty
          return prev.filter((_, index) => index !== existingIndex)
        } else {
          // Update existing filter
          const newConfig = [...prev]
          newConfig[existingIndex] = { key, value, operator }
          return newConfig
        }
      } else if (value !== null && value !== undefined && value !== '') {
        // Add new filter
        return [...prev, { key, value, operator }]
      }
      
      return prev
    })
    
    // Reset to first page when filtering
    setCurrentPage(1)
  }, [])

  const clearFilters = useCallback(() => {
    setFilterConfig([])
    setCurrentPage(1)
  }, [])

  // Selection functions
  const handleRowSelect = useCallback((rowId: string) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev)
      if (newSet.has(rowId)) {
        newSet.delete(rowId)
      } else {
        newSet.add(rowId)
      }
      return newSet
    })
  }, [])

  const handleSelectAll = useCallback(() => {
    const allRowIds = paginationData.data.map((row, index) => getRowId(row, index))
    const currentPageSelected = new Set([...selectedRows].filter(id => allRowIds.includes(id)))
    
    if (currentPageSelected.size === allRowIds.length) {
      // Deselect all on current page
      setSelectedRows(prev => {
        const newSet = new Set(prev)
        allRowIds.forEach(id => newSet.delete(id))
        return newSet
      })
    } else {
      // Select all on current page
      setSelectedRows(prev => {
        const newSet = new Set(prev)
        allRowIds.forEach(id => newSet.add(id))
        return newSet
      })
    }
  }, [paginationData.data, selectedRows, getRowId])

  const clearSelection = useCallback(() => {
    setSelectedRows(new Set())
  }, [])

  // Pagination functions
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size)
    setCurrentPage(1)
  }, [])

  // Search function
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }, [])

  // Data refresh function
  const refreshData = useCallback(async () => {
    if (serverSide && dataSource) {
      setIsLoading(true)
      setError(null)
      
      try {
        const params: QueryParams = {
          page: currentPage,
          pageSize,
          search: searchQuery,
          filters: filterConfig.reduce((acc, filter) => {
            acc[String(filter.key)] = filter.value
            return acc
          }, {} as Record<string, any>)
        }
        
        if (sortConfig.length > 0) {
          params.sortBy = String(sortConfig[0].key)
          params.sortOrder = sortConfig[0].direction
        }
        
        const result = await dataSource.fetch(params)
        setData(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setIsLoading(false)
      }
    }
  }, [serverSide, dataSource, currentPage, pageSize, searchQuery, filterConfig, sortConfig])

  // Update data when external data changes
  const updateData = useCallback((newData: T[]) => {
    setOriginalData(newData)
    setData(newData)
  }, [])

  return {
    // Data
    data: paginationData.data,
    originalData,
    processedData,
    totalItems: paginationData.totalItems,
    
    // State
    sortConfig,
    filterConfig,
    currentPage,
    pageSize,
    totalPages: paginationData.totalPages,
    searchQuery,
    isLoading,
    error,
    
    // Selection
    ...selectionState,
    
    // Actions
    handleSort,
    clearSort,
    handleFilter,
    clearFilters,
    handleRowSelect,
    handleSelectAll,
    clearSelection,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
    refreshData,
    updateData
  }
}

// Hook for creating data sources
export const useDataSource = <T>(
  type: 'client' | 'server',
  data: T[] | (() => Promise<T[]>),
  columns: ColumnDefinition<T>[]
): DataSource<T> => {
  return useMemo(() => {
    if (type === 'client') {
      const clientData = Array.isArray(data) ? data : []
      return {
        fetch: async (params: QueryParams) => {
          let result = [...clientData]
          
          // Apply search
          if (params.search) {
            const searchFields = columns.map(col => col.accessor)
            result = searchData(result, params.search, searchFields)
          }
          
          // Apply filters
          if (params.filters) {
            const filterConfig = Object.entries(params.filters).map(([key, value]) => ({
              key: key as keyof T,
              value,
              operator: 'equals' as const
            }))
            result = filterData(result, filterConfig)
          }
          
          // Apply sorting
          if (params.sortBy && params.sortOrder) {
            const sortConfig = [{
              key: params.sortBy as keyof T,
              direction: params.sortOrder as 'asc' | 'desc',
              priority: 0
            }]
            result = sortData(result, sortConfig)
          }
          
          // Apply pagination
          const page = params.page || 1
          const pageSize = params.pageSize || 10
          return paginateData(result, page, pageSize)
        },
        count: async () => clientData.length,
        schema: columns
      }
    } else {
      // Server-side data source
      const fetchFunction = typeof data === 'function' ? data : async () => []
      return {
        fetch: async (params: QueryParams) => {
          const serverData = await fetchFunction()
          // In a real implementation, this would make an API call with params
          return paginateData(serverData, params.page || 1, params.pageSize || 10)
        },
        count: async () => {
          const serverData = await fetchFunction()
          return serverData.length
        },
        schema: columns
      }
    }
  }, [type, data, columns])
}

// Utility for creating column definitions
export const createColumnDef = <T>(
  id: keyof T,
  header: string,
  options: Partial<ColumnDefinition<T>> = {}
): ColumnDefinition<T> => ({
  id,
  header,
  accessor: id,
  sortable: true,
  filterable: true,
  align: 'left',
  ...options
})

// Utility for creating postgres-like data source
export const createPostgresDataSource = <T>(
  connection: any,
  tableName: string,
  columns: ColumnDefinition<T>[]
): DataSource<T> => {
  return {
    fetch: async (params: QueryParams) => {
      // This would be implemented with actual postgres connection
      // For now, return empty data
      return {
        data: [],
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10
      }
    },
    count: async () => 0,
    schema: columns
  }
}

// Utility for creating redis-like data source
export const createRedisDataSource = <T>(
  client: any,
  key: string,
  columns: ColumnDefinition<T>[]
): DataSource<T> => {
  return {
    fetch: async (params: QueryParams) => {
      // This would be implemented with actual redis client
      // For now, return empty data
      return {
        data: [],
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10
      }
    },
    count: async () => 0,
    schema: columns
  }
}

// Utility for creating API data source
export const createApiDataSource = <T>(
  endpoint: string,
  columns: ColumnDefinition<T>[]
): DataSource<T> => {
  return {
    fetch: async (params: QueryParams) => {
      // This would be implemented with actual API calls
      // For now, return empty data
      return {
        data: [],
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10
      }
    },
    count: async () => 0,
    schema: columns
  }
}