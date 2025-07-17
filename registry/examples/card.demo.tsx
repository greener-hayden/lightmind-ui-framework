"use client"

import * as React from "react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  Button,
  Badge,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Switch
} from "@lightmind/ui"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Star,
  Clock,
  Calendar,
  MapPin,
  Users,
  Download,
  ExternalLink,
  TrendingUp,
  DollarSign,
  Activity,
  CreditCard,
  ShoppingCart,
  Package,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Globe,
  BarChart3,
  PieChart,
  LineChart,
  FileText,
  Image as ImageIcon,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Shield,
  Rocket
} from "lucide-react"

export function CardDemo() {
  const [liked, setLiked] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState("pro")
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true
  })

  return (
    <div className="space-y-8">
      {/* Basic Cards */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Cards</h3>
        <p className="text-muted-foreground mb-6">
          Essential card layouts with header, content, and footer sections
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic card with all sections */}
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content. You can put any content here including forms, lists, images, or other components.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>

          {/* Card with description only */}
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Description</CardTitle>
              <CardDescription>
                This card demonstrates a more detailed description that provides context about the card's purpose and what users can expect to find within it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">Additional content that expands on the description above.</p>
                <p className="text-sm text-muted-foreground">Supporting text with muted styling.</p>
              </div>
            </CardContent>
          </Card>

          {/* Card without header */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Direct Content Card</h4>
                <p className="text-sm text-muted-foreground">
                  This card skips the header section and goes straight to content, useful for simpler layouts.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          {/* Card without footer */}
          <Card>
            <CardHeader>
              <CardTitle>No Footer Card</CardTitle>
              <CardDescription>Sometimes you don't need action buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This card has no footer section, making it ideal for informational content that doesn't require user interaction.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Type Cards */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Content Types</h3>
        <p className="text-muted-foreground mb-6">
          Cards with different types of content including forms, lists, and media
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Enter your credentials to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign In</Button>
            </CardFooter>
          </Card>

          {/* List Card */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: FileText, text: "Document updated", time: "2 min ago" },
                  { icon: Users, text: "Team member added", time: "1 hour ago" },
                  { icon: CheckCircle2, text: "Task completed", time: "3 hours ago" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Image Card */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <CardHeader>
              <CardTitle>Beautiful Landscape</CardTitle>
              <CardDescription>Captured at sunset</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">A stunning view of mountains during golden hour, showcasing nature's beauty.</p>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
              <Progress value={65} className="mt-3" />
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notif">Email</Label>
                  <p className="text-xs text-muted-foreground">Receive email notifications</p>
                </div>
                <Switch 
                  id="email-notif"
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notif">SMS</Label>
                  <p className="text-xs text-muted-foreground">Receive SMS notifications</p>
                </div>
                <Switch 
                  id="sms-notif"
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notif">Push</Label>
                  <p className="text-xs text-muted-foreground">Receive push notifications</p>
                </div>
                <Switch 
                  id="push-notif"
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Media Player Card */}
          <Card>
            <CardHeader>
              <CardTitle>Now Playing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Song Title</h4>
                  <p className="text-sm text-muted-foreground">Artist Name</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button size="icon" variant="ghost">
                    <SkipForward className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Cards */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Interactive Cards</h3>
        <p className="text-muted-foreground mb-6">
          Cards with interactive elements and state management
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Social Media Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">John Doe</CardTitle>
                  <CardDescription className="text-xs">2 hours ago</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Just launched my new project! Excited to share it with the community. 🚀</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setLiked(!liked)}
                className={liked ? "text-red-500" : ""}
              >
                <Heart className={`h-4 w-4 mr-1 ${liked ? "fill-current" : ""}`} />
                {liked ? "124" : "123"}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                45
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </CardFooter>
          </Card>

          {/* Pricing Card */}
          <Card className={selectedPlan === "pro" ? "border-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pro Plan</CardTitle>
                <Badge variant={selectedPlan === "pro" ? "default" : "secondary"}>
                  {selectedPlan === "pro" ? "Current" : "Upgrade"}
                </Badge>
              </div>
              <CardDescription>Perfect for growing teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">
                  $29<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    24/7 support
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={selectedPlan === "pro" ? "secondary" : "default"}
                onClick={() => setSelectedPlan("pro")}
              >
                {selectedPlan === "pro" ? "Current Plan" : "Select Plan"}
              </Button>
            </CardFooter>
          </Card>

          {/* Product Card */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-muted relative">
              <Badge className="absolute top-2 right-2">New</Badge>
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Premium Headphones</CardTitle>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                  ))}
                </div>
              </div>
              <CardDescription>Wireless, Noise-Cancelling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$299</span>
                <Badge variant="secondary">In Stock</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button size="icon" variant="outline">
                <Heart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Task Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Design System Update</CardTitle>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Due in 3 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  March 20, 2024
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  3 members assigned
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">75% Complete</p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="secondary">View Details</Button>
              <Button size="sm">Mark Complete</Button>
            </CardFooter>
          </Card>

          {/* Profile Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-semibold">Alice Brown</h4>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                </div>
                <div className="flex space-x-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1" variant="outline">Message</Button>
              <Button className="flex-1">Follow</Button>
            </CardFooter>
          </Card>

          {/* Event Card */}
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Upcoming</Badge>
              <CardTitle>Design Workshop</CardTitle>
              <CardDescription>Learn the latest design trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  March 25, 2024
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  2:00 PM - 5:00 PM
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Online Event
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  47 attending
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Register Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Card Grids and Layouts */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Card Layouts</h3>
        <p className="text-muted-foreground mb-6">
          Different grid layouts and card arrangements
        </p>
        
        {/* Dashboard Grid */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Dashboard Layout</h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Total Revenue", value: "$45,231", change: "+20.1%", icon: DollarSign, trend: "up" },
                { title: "Active Users", value: "2,350", change: "+15.3%", icon: Users, trend: "up" },
                { title: "Sales", value: "12,234", change: "-4.5%", icon: CreditCard, trend: "down" },
                { title: "Performance", value: "96.5%", change: "+2.1%", icon: Activity, trend: "up" },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Feature Cards</h4>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { 
                  icon: BarChart3, 
                  title: "Advanced Analytics", 
                  description: "Get detailed insights into your data with our powerful analytics tools." 
                },
                { 
                  icon: Shield, 
                  title: "Enterprise Security", 
                  description: "Bank-level security to keep your data safe and compliant." 
                },
                { 
                  icon: Rocket, 
                  title: "Fast Performance", 
                  description: "Lightning-fast response times with our optimized infrastructure." 
                },
              ].map((feature, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="group">
                      Learn more 
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Cards</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>We'd love to hear from you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">contact@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">www.example.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>When we're available</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Complex Card Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Complex Examples</h3>
        <p className="text-muted-foreground mb-6">
          Advanced card compositions for real-world use cases
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Invoice Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Invoice #12345</CardTitle>
                  <CardDescription>Issued on March 15, 2024</CardDescription>
                </div>
                <Badge>Paid</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill to</p>
                    <p className="font-medium">Acme Corporation</p>
                    <p className="text-muted-foreground">123 Business St.</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Payment Method</p>
                    <p className="font-medium">Credit Card ending in 4242</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Professional Services</span>
                    <span>$2,500.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Consultation Fee</span>
                    <span>$500.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tax (10%)</span>
                    <span>$300.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$3,300.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </CardFooter>
          </Card>

          {/* Chart Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for 2024</CardDescription>
                </div>
                <Select defaultValue="2024">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-muted rounded">
                <LineChart className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-xl font-bold">$124.5K</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Average</p>
                  <p className="text-xl font-bold">$10.4K</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Growth</p>
                  <p className="text-xl font-bold text-green-600">+12.5%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}