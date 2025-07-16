/**
 * @component StatCard
 * @description A card component for displaying statistics with trends and icons
 * @category display
 * @complexity simple
 * @status stable
 * @tags statistics, dashboard, analytics, metrics
 */

import * as React from "react"
import { cn } from "../lib/utils"
import { Card, CardContent, CardHeader } from "./card"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  trend?: {
    value: number
    label?: string
  }
  icon?: React.ReactNode
}

export function StatCard({
  title,
  value,
  description,
  trend,
  icon,
  className,
  ...props
}: StatCardProps) {
  const trendIcon = trend ? (
    trend.value > 0 ? (
      <ArrowUpRight className="h-4 w-4" />
    ) : trend.value < 0 ? (
      <ArrowDownRight className="h-4 w-4" />
    ) : (
      <Minus className="h-4 w-4" />
    )
  ) : null

  const trendColor = trend
    ? trend.value > 0
      ? "text-green-600"
      : trend.value < 0
      ? "text-red-600"
      : "text-muted-foreground"
    : ""

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {trend && (
              <span className={cn("flex items-center gap-0.5", trendColor)}>
                {trendIcon}
                <span className="font-medium">{Math.abs(trend.value)}%</span>
                {trend.label && <span className="text-muted-foreground">{trend.label}</span>}
              </span>
            )}
            {description && <p>{description}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  )
}