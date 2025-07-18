/**
 * Enterprise Dashboard Example
 * Comprehensive dashboard showcasing analytics, data visualization, and KPIs
 */

'use client'

import React, { useState } from 'react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Badge,
  Button,
  Progress,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@lightmind/ui'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  RefreshCw,
  Download,
  Filter,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Bell,
  Home,
  BarChart3,
  Target,
  Zap
} from 'lucide-react'
import { Header } from '@/components/header'

// Mock data for the dashboard
const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month"
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
    description: "from last month"
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: ShoppingCart,
    description: "from last month"
  },
  {
    title: "Active Users",
    value: "+573",
    change: "-2.5%",
    trend: "down",
    icon: Activity,
    description: "from last hour"
  }
]

const salesData = [
  { id: 1, customer: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "OM" },
  { id: 2, customer: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "JL" },
  { id: 3, customer: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "IN" },
  { id: 4, customer: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "WK" },
  { id: 5, customer: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "SD" },
]

const performanceData = [
  { metric: "Page Views", value: "2,345,678", change: "+12.5%", trend: "up" },
  { metric: "Bounce Rate", value: "34.2%", change: "-2.1%", trend: "down" },
  { metric: "Session Duration", value: "4m 32s", change: "+5.4%", trend: "up" },
  { metric: "Conversion Rate", value: "3.4%", change: "+0.8%", trend: "up" },
]

const alerts = [
  { type: "warning", title: "High Server Load", message: "Server CPU usage is at 85%", time: "2 minutes ago" },
  { type: "success", title: "Backup Completed", message: "Daily backup completed successfully", time: "1 hour ago" },
  { type: "error", title: "Payment Failed", message: "Customer payment processing failed", time: "3 hours ago" },
]

export default function DashboardExample() {
  const [timeRange, setTimeRange] = useState("7d")
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/examples">Examples</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Enterprise Dashboard</h1>
            <p className="text-muted-foreground">
              Comprehensive analytics and business intelligence overview
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {timeRange === "7d" ? "Last 7 days" : timeRange === "30d" ? "Last 30 days" : "Last 90 days"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTimeRange("7d")}>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeRange("30d")}>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeRange("90d")}>Last 90 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-8 space-y-4">
          {alerts.map((alert, index) => (
            <Alert key={index} variant={alert.type === "error" ? "destructive" : "default"}>
              {alert.type === "warning" && <AlertTriangle className="h-4 w-4" />}
              {alert.type === "success" && <CheckCircle className="h-4 w-4" />}
              {alert.type === "error" && <AlertTriangle className="h-4 w-4" />}
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>
                {alert.message} • {alert.time}
              </AlertDescription>
            </Alert>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {kpiData.map((kpi, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                  )}
                  <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {kpi.change}
                  </span>
                  <span className="ml-1">{kpi.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Chart Placeholder */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue trends</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Integration with Chart.js, Recharts, or D3.js
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {salesData.map((sale) => (
                      <div key={sale.id} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{sale.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">{sale.customer}</p>
                          <p className="text-sm text-muted-foreground">{sale.email}</p>
                        </div>
                        <div className="ml-auto font-medium">{sale.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Organic Search", "Direct", "Social Media", "Email", "Referrals"].map((source, index) => (
                      <div key={source} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium">{source}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={Math.random() * 100} className="w-20" />
                          <span className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 50) + 10}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceData.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{metric.metric}</p>
                          <p className="text-2xl font-bold">{metric.value}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={metric.trend === "up" ? "default" : "secondary"}>
                            {metric.trend === "up" ? (
                              <ArrowUp className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDown className="h-3 w-3 mr-1" />
                            )}
                            {metric.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Real-time system metrics and health status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CPU Usage</span>
                      <span className="text-sm text-muted-foreground">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Memory Usage</span>
                      <span className="text-sm text-muted-foreground">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Disk Space</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Overview</CardTitle>
                <CardDescription>Current team members and their activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Alice Johnson", role: "Product Manager", status: "Active", lastActive: "2 minutes ago" },
                      { name: "Bob Smith", role: "Developer", status: "Away", lastActive: "1 hour ago" },
                      { name: "Carol Williams", role: "Designer", status: "Active", lastActive: "Just now" },
                      { name: "David Brown", role: "QA Engineer", status: "Offline", lastActive: "3 hours ago" },
                    ].map((member, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>
                          <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{member.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}