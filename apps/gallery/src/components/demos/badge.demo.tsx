"use client"

import * as React from "react"
import { Badge } from "@lightmind/ui"
import { 
  Check,
  X,
  AlertCircle,
  Clock,
  Star,
  TrendingUp,
  TrendingDown,
  User,
  Users,
  Mail,
  Bell,
  ShoppingCart,
  Package,
  Zap,
  Shield,
  Lock,
  Unlock,
  Coffee,
  Heart,
  MessageSquare,
  Calendar,
  Download,
  Upload,
  Eye,
  EyeOff,
  Sparkles,
  Rocket,
  Bug,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Circle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Activity,
  Wifi,
  WifiOff,
  Cloud,
  CloudOff,
  Server,
  Database,
  Code,
  FileText,
  Image,
  Video,
  Music,
  DollarSign,
  CreditCard,
  Tag,
  Hash,
  AtSign,
  Phone,
  MapPin,
  Globe,
  Award,
  Trophy,
  Flag,
  Bookmark,
  Archive,
  Inbox,
  Send,
  ExternalLink,
  Link,
  Paperclip,
  Timer,
  RefreshCw,
  RotateCw,
  Loader2,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@lightmind/ui"

export function BadgeDemo() {
  const [notificationCount, setNotificationCount] = React.useState(5)
  const [cartItems, setCartItems] = React.useState(3)
  const [selectedTags, setSelectedTags] = React.useState<string[]>(["react", "typescript"])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="space-y-8">
      {/* Badge Variants */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Badge Variants</h3>
        <p className="text-muted-foreground mb-6">
          Four distinct visual styles for different use cases
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* Badges with Icons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Badges with Icons</h3>
        <p className="text-muted-foreground mb-6">
          Combine icons with text for enhanced visual communication
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Badge>
              <Check className="mr-1 h-3 w-3" />
              Active
            </Badge>
            <Badge variant="secondary">
              <Clock className="mr-1 h-3 w-3" />
              Pending
            </Badge>
            <Badge variant="destructive">
              <X className="mr-1 h-3 w-3" />
              Failed
            </Badge>
            <Badge variant="outline">
              <AlertCircle className="mr-1 h-3 w-3" />
              Warning
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary">
              <Star className="mr-1 h-3 w-3" />
              Featured
            </Badge>
            <Badge>
              <Zap className="mr-1 h-3 w-3" />
              Pro
            </Badge>
            <Badge variant="outline">
              <Shield className="mr-1 h-3 w-3" />
              Verified
            </Badge>
            <Badge variant="secondary">
              <Sparkles className="mr-1 h-3 w-3" />
              New
            </Badge>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Status Badges</h3>
        <p className="text-muted-foreground mb-6">
          Common status indicators for various states
        </p>
        <div className="space-y-4">
          {/* Connection Status */}
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-green-500 hover:bg-green-600">
              <Circle className="mr-1 h-2 w-2 fill-current" />
              Online
            </Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-600">
              <Circle className="mr-1 h-2 w-2 fill-current" />
              Away
            </Badge>
            <Badge className="bg-red-500 hover:bg-red-600">
              <Circle className="mr-1 h-2 w-2 fill-current" />
              Busy
            </Badge>
            <Badge variant="secondary">
              <Circle className="mr-1 h-2 w-2" />
              Offline
            </Badge>
          </div>

          {/* Task Status */}
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-blue-500 hover:bg-blue-600">
              <Activity className="mr-1 h-3 w-3" />
              In Progress
            </Badge>
            <Badge className="bg-green-500 hover:bg-green-600">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Completed
            </Badge>
            <Badge className="bg-orange-500 hover:bg-orange-600">
              <AlertTriangle className="mr-1 h-3 w-3" />
              Review
            </Badge>
            <Badge className="bg-red-500 hover:bg-red-600">
              <XCircle className="mr-1 h-3 w-3" />
              Blocked
            </Badge>
          </div>

          {/* Server Status */}
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Wifi className="mr-1 h-3 w-3" />
              Connected
            </Badge>
            <Badge variant="outline" className="text-red-600 border-red-600">
              <WifiOff className="mr-1 h-3 w-3" />
              Disconnected
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              <Cloud className="mr-1 h-3 w-3" />
              Synced
            </Badge>
            <Badge variant="outline" className="text-yellow-600 border-yellow-600">
              <RefreshCw className="mr-1 h-3 w-3" />
              Syncing
            </Badge>
          </div>
        </div>
      </div>

      {/* Notification Badges */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Notification Badges</h3>
        <p className="text-muted-foreground mb-6">
          Badges for displaying counts and notifications
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="relative inline-flex">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                {notificationCount}
              </Badge>
            </div>

            <div className="relative inline-flex">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                2
              </Badge>
            </div>

            <div className="relative inline-flex">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Badge variant="secondary" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                {cartItems}
              </Badge>
            </div>

            <div className="relative inline-flex">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-red-500" />
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setNotificationCount(prev => prev + 1)}
            >
              Add Notification
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCartItems(prev => prev + 1)}
            >
              Add to Cart
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setNotificationCount(0)
                setCartItems(0)
              }}
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>

      {/* Badge Groups */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Badge Groups</h3>
        <p className="text-muted-foreground mb-6">
          Collections of related badges
        </p>
        <div className="space-y-4">
          {/* Technology Stack */}
          <div>
            <p className="text-sm font-medium mb-2">Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <Code className="mr-1 h-3 w-3" />
                React
              </Badge>
              <Badge variant="outline">
                <Code className="mr-1 h-3 w-3" />
                TypeScript
              </Badge>
              <Badge variant="outline">
                <Code className="mr-1 h-3 w-3" />
                Next.js
              </Badge>
              <Badge variant="outline">
                <Database className="mr-1 h-3 w-3" />
                PostgreSQL
              </Badge>
              <Badge variant="outline">
                <Server className="mr-1 h-3 w-3" />
                Docker
              </Badge>
            </div>
          </div>

          {/* File Types */}
          <div>
            <p className="text-sm font-medium mb-2">Supported File Types</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <FileText className="mr-1 h-3 w-3" />
                PDF
              </Badge>
              <Badge variant="secondary">
                <Image className="mr-1 h-3 w-3" />
                JPG
              </Badge>
              <Badge variant="secondary">
                <Image className="mr-1 h-3 w-3" />
                PNG
              </Badge>
              <Badge variant="secondary">
                <Video className="mr-1 h-3 w-3" />
                MP4
              </Badge>
              <Badge variant="secondary">
                <Music className="mr-1 h-3 w-3" />
                MP3
              </Badge>
            </div>
          </div>

          {/* User Roles */}
          <div>
            <p className="text-sm font-medium mb-2">User Roles & Permissions</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-500 hover:bg-purple-600">
                <Shield className="mr-1 h-3 w-3" />
                Admin
              </Badge>
              <Badge className="bg-blue-500 hover:bg-blue-600">
                <User className="mr-1 h-3 w-3" />
                Editor
              </Badge>
              <Badge className="bg-green-500 hover:bg-green-600">
                <Users className="mr-1 h-3 w-3" />
                Contributor
              </Badge>
              <Badge variant="secondary">
                <Eye className="mr-1 h-3 w-3" />
                Viewer
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tags */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Interactive Tags</h3>
        <p className="text-muted-foreground mb-6">
          Clickable badges for filtering and selection
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {["react", "vue", "angular", "svelte", "typescript", "javascript", "python", "rust"].map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                <Hash className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Selected: {selectedTags.length > 0 ? selectedTags.join(", ") : "None"}
          </p>
        </div>
      </div>

      {/* Real-world Use Cases */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Use Cases</h3>
        <p className="text-muted-foreground mb-6">
          Practical examples of badge usage in applications
        </p>
        <div className="space-y-6">
          {/* E-commerce Product Card */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold">Premium Headphones</h4>
              <div className="flex gap-2">
                <Badge variant="destructive">
                  <Tag className="mr-1 h-3 w-3" />
                  -30%
                </Badge>
                <Badge>
                  <Sparkles className="mr-1 h-3 w-3" />
                  New
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Wireless noise-cancelling headphones with premium sound quality
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <Package className="mr-1 h-3 w-3" />
                In Stock
              </Badge>
              <Badge variant="outline">
                <Truck className="mr-1 h-3 w-3" />
                Free Shipping
              </Badge>
              <Badge variant="outline">
                <Award className="mr-1 h-3 w-3" />
                Best Seller
              </Badge>
            </div>
          </div>

          {/* GitHub-style Issue/PR */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold">Fix navigation menu on mobile devices</h4>
              <Badge className="bg-green-500 hover:bg-green-600">
                <GitPullRequest className="mr-1 h-3 w-3" />
                Open
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              The navigation menu doesn't close properly on mobile devices when clicking outside
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-red-600 border-red-600">
                <Bug className="mr-1 h-3 w-3" />
                bug
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                <AlertCircle className="mr-1 h-3 w-3" />
                priority: high
              </Badge>
              <Badge variant="outline">
                <GitBranch className="mr-1 h-3 w-3" />
                feature/mobile-nav
              </Badge>
              <Badge variant="secondary">
                <User className="mr-1 h-3 w-3" />
                assigned
              </Badge>
            </div>
          </div>

          {/* Dashboard Metrics */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3">System Health</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Badge className="bg-green-500 hover:bg-green-600 mb-1">
                  <Activity className="mr-1 h-3 w-3" />
                  Operational
                </Badge>
                <p className="text-xs text-muted-foreground">API Status</p>
              </div>
              <div className="text-center">
                <Badge className="bg-green-500 hover:bg-green-600 mb-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  99.9%
                </Badge>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-1">
                  <Timer className="mr-1 h-3 w-3" />
                  45ms
                </Badge>
                <p className="text-xs text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-1">
                  <Users className="mr-1 h-3 w-3" />
                  1.2k
                </Badge>
                <p className="text-xs text-muted-foreground">Active Users</p>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-12 w-12 rounded-full bg-muted" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    <Shield className="mr-1 h-3 w-3" />
                    Pro
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Senior Developer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3 w-3" />
                San Francisco
              </Badge>
              <Badge variant="secondary">
                <Calendar className="mr-1 h-3 w-3" />
                Joined 2022
              </Badge>
              <Badge variant="secondary">
                <Trophy className="mr-1 h-3 w-3" />
                Top Contributor
              </Badge>
              <Badge variant="secondary">
                <Heart className="mr-1 h-3 w-3" />
                2.5k followers
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Import missing icon
import { Truck } from "lucide-react"