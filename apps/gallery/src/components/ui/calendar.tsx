/**
 * Calendar Component - Date picker component
 * Part of the LightMind UI Framework
 */

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface CalendarProps {
  mode?: 'single' | 'multiple' | 'range'
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  initialFocus?: boolean
  className?: string
}

export const Calendar = React.forwardRef<
  HTMLDivElement,
  CalendarProps
>(({ 
  mode = 'single',
  selected,
  onSelect,
  disabled,
  className,
  ...props 
}, ref) => {
  const [currentDate, setCurrentDate] = React.useState(new Date())

  const today = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day)
    
    if (disabled?.(clickedDate)) return

    if (mode === 'single') {
      onSelect?.(clickedDate)
    }
    // Additional logic for multiple and range modes can be added here
  }

  const isDateSelected = (day: number) => {
    if (!selected) return false
    
    const date = new Date(currentYear, currentMonth, day)
    
    if (mode === 'single' && selected instanceof Date) {
      return date.toDateString() === selected.toDateString()
    }
    
    return false
  }

  const isToday = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return date.toDateString() === today.toDateString()
  }

  const isDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return disabled?.(date) || false
  }

  const renderCalendarDays = () => {
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-2" />
      )
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelectedDate = isDateSelected(day)
      const isTodayDate = isToday(day)
      const isDisabledDate = isDisabled(day)

      days.push(
        <Button
          key={day}
          variant={isSelectedDate ? 'default' : 'ghost'}
          size="sm"
          className={cn(
            'h-8 w-8 p-0 font-normal',
            isTodayDate && !isSelectedDate && 'bg-accent text-accent-foreground',
            isDisabledDate && 'text-muted-foreground opacity-50 cursor-not-allowed'
          )}
          onClick={() => handleDateClick(day)}
          disabled={isDisabledDate}
        >
          {day}
        </Button>
      )
    }

    return days
  }

  return (
    <div
      ref={ref}
      className={cn('p-3 border rounded-lg bg-background', className)}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPreviousMonth}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="text-sm font-medium">
          {monthNames[currentMonth]} {currentYear}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNextMonth}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-xs font-medium text-muted-foreground text-center p-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
    </div>
  )
})

Calendar.displayName = 'Calendar'

export default Calendar