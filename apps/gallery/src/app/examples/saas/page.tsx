/**
 * SaaS Application Interface Example
 * Modern SaaS application with sidebar navigation, command palette, and real-time features
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
  Input,
  Label,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  toast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@lightmind/ui'
import { 
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Calendar,
  Mail,
  Bell,
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  File,
  Star,
  Clock,
  User,
  Zap,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Activity,
  TrendingUp,
  MessageSquare,
  Share2,
  Download,
  Eye,
  Edit,
  Trash2,
  Copy,
  Archive,
  BookOpen,
  Layers,
  Database,
  Server,
  Globe,
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Wifi,
  WifiOff,
  UserPlus,
  UserMinus,
  UserCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Camera,
  Image,
  Video,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Link,
  ExternalLink,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  PenTool,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Code,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Indent,
  Outdent,
  Strikethrough,
  Subscript,
  Superscript,
  TextCursor,
  Palette,
  Brush,
  Eraser,
  Droplet,
  Grid,
  Square as SquareIcon,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Diamond,
  Cloud,
  CloudUpload,
  CloudDownload,
  CloudOff,
  Gauge,
  Target,
  Crosshair,
  Navigation,
  Compass,
  Map,
  MapPin,
  Route,
  Car,
  Truck,
  Plane,
  Train,
  Ship,
  Bike,
  Fuel,
  Battery,
  BatteryLow,
  Plug,
  Power,
  PowerOff,
  Lightbulb,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Thermometer,
  Umbrella,
  Wind,
  Sunrise,
  Sunset,
  Rainbow,
  Cloudy,
  Upload,
  LucideIcon
} from 'lucide-react'

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    progress: 65,
    team: 4,
    dueDate: "2024-02-15",
    tasks: 12,
    completedTasks: 8
  },
  {
    id: 2,
    name: "Mobile App",
    status: "Review",
    priority: "Medium",
    progress: 85,
    team: 3,
    dueDate: "2024-02-20",
    tasks: 8,
    completedTasks: 7
  },
  {
    id: 3,
    name: "API Integration",
    status: "Planning",
    priority: "Low",
    progress: 25,
    team: 2,
    dueDate: "2024-03-01",
    tasks: 15,
    completedTasks: 4
  }
]

// Mock data for team members
const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "Product Manager", avatar: "AJ", status: "online" },
  { id: 2, name: "Bob Smith", role: "Developer", avatar: "BS", status: "away" },
  { id: 3, name: "Carol Williams", role: "Designer", avatar: "CW", status: "online" },
  { id: 4, name: "David Brown", role: "QA Engineer", avatar: "DB", status: "offline" },
]

// Mock data for recent activities
const recentActivities = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "created a new project",
    target: "Website Redesign",
    time: "2 minutes ago",
    type: "create"
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "completed task",
    target: "Login form validation",
    time: "1 hour ago",
    type: "complete"
  },
  {
    id: 3,
    user: "Carol Williams",
    action: "uploaded design files",
    target: "Homepage mockups",
    time: "3 hours ago",
    type: "upload"
  },
  {
    id: 4,
    user: "David Brown",
    action: "reported a bug",
    target: "Navigation menu",
    time: "5 hours ago",
    type: "bug"
  }
]

const sidebarItems = [
  { 
    label: "Dashboard", 
    icon: Home, 
    href: "/dashboard",
    items: []
  },
  { 
    label: "Projects", 
    icon: Folder, 
    href: "/projects",
    items: [
      { label: "All Projects", href: "/projects" },
      { label: "My Projects", href: "/projects/mine" },
      { label: "Archived", href: "/projects/archived" }
    ]
  },
  { 
    label: "Tasks", 
    icon: FileText, 
    href: "/tasks",
    items: [
      { label: "All Tasks", href: "/tasks" },
      { label: "My Tasks", href: "/tasks/mine" },
      { label: "Completed", href: "/tasks/completed" }
    ]
  },
  { 
    label: "Users", 
    icon: Users, 
    href: "/team",
    items: [
      { label: "Members", href: "/team/members" },
      { label: "Roles", href: "/team/roles" },
      { label: "Permissions", href: "/team/permissions" }
    ]
  },
  { 
    label: "Analytics", 
    icon: BarChart3, 
    href: "/analytics",
    items: []
  },
  { 
    label: "Calendar", 
    icon: Calendar, 
    href: "/calendar",
    items: []
  },
  { 
    label: "Messages", 
    icon: Mail, 
    href: "/messages",
    items: []
  },
  { 
    label: "Settings", 
    icon: Settings, 
    href: "/settings",
    items: [
      { label: "General", href: "/settings/general" },
      { label: "Security", href: "/settings/security" },
      { label: "Billing", href: "/settings/billing" },
      { label: "Integrations", href: "/settings/integrations" }
    ]
  }
]

export default function SaasExample() {
  const [commandOpen, setCommandOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeProject, setActiveProject] = useState(projects[0])
  const [notifications, setNotifications] = useState(3)

  // Listen for keyboard shortcuts
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleCommand = (command: string) => {
    setCommandOpen(false)
    console.log(`Executing command: ${command}`)
    // Handle command execution here
  }

  return (
    <div className="flex h-screen bg-background">
      <SidebarProvider defaultOpen={sidebarOpen}>
        {/* Sidebar */}
        <Sidebar className="w-64 border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">ProjectHub</h2>
                <p className="text-xs text-muted-foreground">Team Workspace</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <ScrollArea className="flex-1">
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sidebarItems.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        {item.items.length > 0 ? (
                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton>
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                                <ChevronRight className="w-4 h-4 ml-auto" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenu className="ml-6">
                                {item.items.map((subItem) => (
                                  <SidebarMenuItem key={subItem.label}>
                                    <SidebarMenuButton>
                                      <span>{subItem.label}</span>
                                    </SidebarMenuButton>
                                  </SidebarMenuItem>
                                ))}
                              </SidebarMenu>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <SidebarMenuButton>
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              
              <SidebarGroup>
                <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Star className="w-4 h-4" />
                        <span>Favorites</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Clock className="w-4 h-4" />
                        <span>Recent</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Archive className="w-4 h-4" />
                        <span>Archive</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </ScrollArea>
          </SidebarContent>
          
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-4">
              <SidebarTrigger className="mr-4" />
              
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="ml-auto flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCommandOpen(true)}
                  className="relative"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search...
                  <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
                
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                      {notifications}
                    </Badge>
                  )}
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-hidden">
            <div className="h-full p-6">
              {/* Page Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Project Dashboard</h1>
                  <p className="text-muted-foreground">
                    Manage your projects and collaborate with your team
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Project Cards */}
                {projects.map((project) => (
                  <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge variant={
                          project.status === "In Progress" ? "default" :
                          project.status === "Review" ? "secondary" :
                          "outline"
                        }>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.team}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.dueDate}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{project.completedTasks} of {project.tasks} tasks</span>
                          <Badge variant="outline" className="text-xs">
                            {project.priority}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Activity Feed and Team Overview */}
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-72">
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div key={activity.id} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                              {activity.type === "create" && <Plus className="w-4 h-4" />}
                              {activity.type === "complete" && <CheckCircle className="w-4 h-4 text-green-500" />}
                              {activity.type === "upload" && <Upload className="w-4 h-4" />}
                              {activity.type === "bug" && <AlertCircle className="w-4 h-4 text-red-500" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-medium">{activity.user}</span>{" "}
                                {activity.action}{" "}
                                <span className="font-medium">{activity.target}</span>
                              </p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team Overview</CardTitle>
                    <CardDescription>Your team members and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMembers.map((member) => (
                        <div key={member.id} className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback>{member.avatar}</AvatarFallback>
                            </Avatar>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                              member.status === "online" ? "bg-green-500" :
                              member.status === "away" ? "bg-yellow-500" :
                              "bg-gray-500"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar>
                                  <AvatarFallback>{member.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">{member.name}</h4>
                                  <p className="text-sm">{member.role}</p>
                                  <div className="flex items-center pt-2">
                                    <div className={`w-2 h-2 rounded-full mr-2 ${
                                      member.status === "online" ? "bg-green-500" :
                                      member.status === "away" ? "bg-yellow-500" :
                                      "bg-gray-500"
                                    }`} />
                                    <span className="text-xs text-muted-foreground">
                                      {member.status}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>

      {/* Command Dialog */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => handleCommand("new-project")}>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Project</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("new-task")}>
              <FileText className="mr-2 h-4 w-4" />
              <span>New Task</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("invite-user")}>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite User</span>
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => handleCommand("go-dashboard")}>
              <Home className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("go-projects")}>
              <Folder className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("go-team")}>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("go-settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}