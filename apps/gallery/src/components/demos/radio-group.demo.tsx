"use client"

import * as React from "react"
import { 
  RadioGroup,
  RadioGroupItem,
  Label,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Separator,
  Alert,
  AlertDescription,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ScrollArea
} from "@lightmind/ui"
import { 
  CreditCard,
  Wallet,
  Banknote,
  Bitcoin,
  Zap,
  Rocket,
  Crown,
  Shield,
  Check,
  X,
  Info,
  Settings,
  Sun,
  Moon,
  Monitor,
  Palette,
  Type,
  Globe,
  Lock,
  Users,
  UserCheck,
  UserX,
  Cloud,
  HardDrive,
  Server,
  Package,
  Truck,
  Calendar,
  Clock,
  Timer,
  Building,
  Home,
  Briefcase,
  Heart,
  Star,
  ThumbsUp,
  MessageSquare,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  BatteryLow,
  Battery,
  BatteryCharging,
  Smartphone,
  Laptop,
  Headphones,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Euro,
  PoundSterling,
  IndianRupee,
  Sparkles,
  Gauge,
  Cpu,
  Code,
  GitBranch,
  Bug,
  FileText,
  Mail,
  Phone,
  Video,
  Layers,
  LayoutGrid,
  List,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Circle
} from "lucide-react"

export function RadioGroupDemo() {
  // State for controlled examples
  const [paymentMethod, setPaymentMethod] = React.useState("card")
  const [subscription, setSubscription] = React.useState("pro")
  const [theme, setTheme] = React.useState("system")
  const [language, setLanguage] = React.useState("en")
  const [privacy, setPrivacy] = React.useState("friends")
  const [shippingSpeed, setShippingSpeed] = React.useState("standard")
  const [notificationChannel, setNotificationChannel] = React.useState("email")
  const [displayDensity, setDisplayDensity] = React.useState("comfortable")
  const [exportFormat, setExportFormat] = React.useState("pdf")
  
  // Form state
  const [formData, setFormData] = React.useState({
    plan: "starter",
    billing: "monthly",
    deployment: "cloud"
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`)
  }

  return (
    <div className="space-y-8">
      {/* Basic Usage */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Radio Groups</h3>
        <p className="text-muted-foreground mb-6">
          Simple radio group implementations with different configurations
        </p>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Default Radio Group</CardTitle>
              <CardDescription>Basic radio group with labels</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="option-3" />
                  <Label htmlFor="option-3">Option 3</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sizes</CardTitle>
              <CardDescription>Different radio button sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium mb-3 block">Small</Label>
                <RadioGroup defaultValue="small-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small-1" id="small-1" size="sm" />
                    <Label htmlFor="small-1" className="text-sm">Small option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small-2" id="small-2" size="sm" />
                    <Label htmlFor="small-2" className="text-sm">Small option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">Default</Label>
                <RadioGroup defaultValue="default-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default-1" id="default-1" />
                    <Label htmlFor="default-1">Default option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default-2" id="default-2" />
                    <Label htmlFor="default-2">Default option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">Large</Label>
                <RadioGroup defaultValue="large-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large-1" id="large-1" size="lg" />
                    <Label htmlFor="large-1" className="text-lg">Large option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large-2" id="large-2" size="lg" />
                    <Label htmlFor="large-2" className="text-lg">Large option 2</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Orientations */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Orientations</h3>
        <p className="text-muted-foreground mb-6">
          Radio groups in vertical and horizontal layouts
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Vertical (Default)</CardTitle>
              <CardDescription>Stacked radio options</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="v-1" orientation="vertical">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="v-1" id="v-1" />
                  <Label htmlFor="v-1">First option</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="v-2" id="v-2" />
                  <Label htmlFor="v-2">Second option</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="v-3" id="v-3" />
                  <Label htmlFor="v-3">Third option</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Horizontal</CardTitle>
              <CardDescription>Side-by-side radio options</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="h-1" orientation="horizontal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="h-1" id="h-1" />
                  <Label htmlFor="h-1">Option A</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="h-2" id="h-2" />
                  <Label htmlFor="h-2">Option B</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="h-3" id="h-3" />
                  <Label htmlFor="h-3">Option C</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* With Descriptions */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">With Descriptions</h3>
        <p className="text-muted-foreground mb-6">
          Radio options with labels and descriptive text
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Choose Display Density</CardTitle>
            <CardDescription>Select how compact you want the interface to appear</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={displayDensity} onValueChange={setDisplayDensity}>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="compact" id="compact" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="compact" className="font-medium cursor-pointer">
                      <span className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        Compact
                      </span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Reduced spacing and smaller elements. Fits more content on screen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="comfortable" className="font-medium cursor-pointer">
                      <span className="flex items-center gap-2">
                        <LayoutGrid className="h-4 w-4" />
                        Comfortable
                      </span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Balanced spacing for optimal readability and usability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="spacious" id="spacious" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="spacious" className="font-medium cursor-pointer">
                      <span className="flex items-center gap-2">
                        <List className="h-4 w-4" />
                        Spacious
                      </span>
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Increased spacing for better touch targets and visual breathing room.
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Disabled States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Disabled States</h3>
        <p className="text-muted-foreground mb-6">
          Disabled radio groups and individual options
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Entire Group Disabled</CardTitle>
              <CardDescription>All options are disabled</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="disabled-1" disabled>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled-1" id="dis-group-1" />
                  <Label htmlFor="dis-group-1" className="opacity-50">Option 1 (Selected)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled-2" id="dis-group-2" />
                  <Label htmlFor="dis-group-2" className="opacity-50">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled-3" id="dis-group-3" />
                  <Label htmlFor="dis-group-3" className="opacity-50">Option 3</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Individual Items Disabled</CardTitle>
              <CardDescription>Some options are unavailable</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="individual-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual-1" id="ind-1" />
                  <Label htmlFor="ind-1">Available option</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual-2" id="ind-2" />
                  <Label htmlFor="ind-2">Selected option</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual-3" id="ind-3" disabled />
                  <Label htmlFor="ind-3" className="opacity-50">
                    <span className="flex items-center gap-2">
                      Unavailable option
                      <Badge variant="secondary" className="text-xs">Coming soon</Badge>
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-6">
          Radio groups enhanced with icons for better visual recognition
        </p>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Selection</CardTitle>
              <CardDescription>Choose your preferred color theme</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={theme} onValueChange={setTheme} orientation="horizontal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      Light
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      Dark
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      System
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Format</CardTitle>
              <CardDescription>Select the format for your export</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={exportFormat} onValueChange={setExportFormat}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="format-pdf" />
                    <Label htmlFor="format-pdf" className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-red-600" />
                        PDF Document
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excel" id="format-excel" />
                    <Label htmlFor="format-excel" className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-green-600" />
                        Excel Spreadsheet
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="csv" id="format-csv" />
                    <Label htmlFor="format-csv" className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        CSV File
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="json" id="format-json" />
                    <Label htmlFor="format-json" className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-purple-600" />
                        JSON Data
                      </span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controlled vs Uncontrolled */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Controlled vs Uncontrolled</h3>
        <p className="text-muted-foreground mb-6">
          Examples of controlled and uncontrolled radio group implementations
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Uncontrolled</CardTitle>
              <CardDescription>Using defaultValue prop</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup defaultValue="uncontrolled-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uncontrolled-1" id="unc-1" />
                  <Label htmlFor="unc-1">First choice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uncontrolled-2" id="unc-2" />
                  <Label htmlFor="unc-2">Second choice (default)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uncontrolled-3" id="unc-3" />
                  <Label htmlFor="unc-3">Third choice</Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">
                This radio group manages its own state internally
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Controlled</CardTitle>
              <CardDescription>Using value and onValueChange</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={notificationChannel} onValueChange={setNotificationChannel}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="notif-email" />
                  <Label htmlFor="notif-email">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="notif-sms" />
                  <Label htmlFor="notif-sms">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      SMS
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="push" id="notif-push" />
                  <Label htmlFor="notif-push">
                    <span className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Push
                    </span>
                  </Label>
                </div>
              </RadioGroup>
              <div className="pt-2">
                <Badge variant="outline">
                  Selected: {notificationChannel}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Real-World Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-World Examples</h3>
        <p className="text-muted-foreground mb-6">
          Common radio group patterns used in applications
        </p>
        
        <div className="space-y-6">
          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Select how you'd like to pay</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="card" id="payment-card" className="mt-1" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="payment-card" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Credit or Debit Card
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Pay securely with your credit or debit card
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="paypal" id="payment-paypal" className="mt-1" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="payment-paypal" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Wallet className="h-4 w-4" />
                          PayPal
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Fast and secure payment with PayPal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="bank" id="payment-bank" className="mt-1" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="payment-bank" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Banknote className="h-4 w-4" />
                          Bank Transfer
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Direct transfer from your bank account
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value="crypto" id="payment-crypto" className="mt-1" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="payment-crypto" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Bitcoin className="h-4 w-4" />
                          Cryptocurrency
                          <Badge className="text-xs">New</Badge>
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Pay with Bitcoin, Ethereum, or other cryptocurrencies
                      </p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Continue with {paymentMethod === 'card' ? 'Card' : paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'bank' ? 'Bank Transfer' : 'Crypto'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Subscription Plans */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <CardDescription>Select the plan that best fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={subscription} onValueChange={setSubscription}>
                <div className="grid gap-4">
                  <div className="relative">
                    <div className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-colors ${
                      subscription === 'free' ? 'border-primary bg-primary/5' : 'border-border'
                    }`}>
                      <RadioGroupItem value="free" id="plan-free" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="plan-free" className="font-medium cursor-pointer">
                            <span className="flex items-center gap-2">
                              <Zap className="h-4 w-4" />
                              Free
                            </span>
                          </Label>
                          <span className="text-2xl font-bold">$0</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Perfect for trying out our service
                        </p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> 5 projects
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Basic features
                          </li>
                          <li className="flex items-center gap-1">
                            <X className="h-3 w-3" /> Priority support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-colors ${
                      subscription === 'pro' ? 'border-primary bg-primary/5' : 'border-border'
                    }`}>
                      <RadioGroupItem value="pro" id="plan-pro" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="plan-pro" className="font-medium cursor-pointer">
                            <span className="flex items-center gap-2">
                              <Rocket className="h-4 w-4" />
                              Pro
                              <Badge variant="default" className="text-xs">Popular</Badge>
                            </span>
                          </Label>
                          <span className="text-2xl font-bold">$19<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Great for growing teams
                        </p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Unlimited projects
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Advanced features
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Priority support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-colors ${
                      subscription === 'enterprise' ? 'border-primary bg-primary/5' : 'border-border'
                    }`}>
                      <RadioGroupItem value="enterprise" id="plan-enterprise" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="plan-enterprise" className="font-medium cursor-pointer">
                            <span className="flex items-center gap-2">
                              <Crown className="h-4 w-4" />
                              Enterprise
                            </span>
                          </Label>
                          <span className="text-2xl font-bold">$99<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          For large organizations
                        </p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Everything in Pro
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Custom integrations
                          </li>
                          <li className="flex items-center gap-1">
                            <Check className="h-3 w-3" /> Dedicated support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Settings Example */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control who can see your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={privacy} onValueChange={setPrivacy}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="public" id="privacy-public" />
                    <div className="flex-1">
                      <Label htmlFor="privacy-public" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Public
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Anyone can view your profile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="friends" id="privacy-friends" />
                    <div className="flex-1">
                      <Label htmlFor="privacy-friends" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Friends Only
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Only your friends can view your profile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="private" id="privacy-private" />
                    <div className="flex-1">
                      <Label htmlFor="privacy-private" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Private
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Only you can view your profile
                      </p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Shipping Speed */}
          <Card>
            <CardHeader>
              <CardTitle>Shipping Speed</CardTitle>
              <CardDescription>Choose your delivery preference</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={shippingSpeed} onValueChange={setShippingSpeed} orientation="horizontal">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`relative flex flex-col items-center space-y-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    shippingSpeed === 'standard' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="standard" id="ship-standard" className="sr-only" />
                    <Label htmlFor="ship-standard" className="cursor-pointer text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <Truck className="h-8 w-8" />
                        <div>
                          <p className="font-medium">Standard</p>
                          <p className="text-sm text-muted-foreground">5-7 days</p>
                          <p className="text-lg font-bold mt-1">Free</p>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className={`relative flex flex-col items-center space-y-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    shippingSpeed === 'express' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="express" id="ship-express" className="sr-only" />
                    <Label htmlFor="ship-express" className="cursor-pointer text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <Package className="h-8 w-8" />
                        <div>
                          <p className="font-medium">Express</p>
                          <p className="text-sm text-muted-foreground">2-3 days</p>
                          <p className="text-lg font-bold mt-1">$9.99</p>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className={`relative flex flex-col items-center space-y-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    shippingSpeed === 'overnight' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <RadioGroupItem value="overnight" id="ship-overnight" className="sr-only" />
                    <Label htmlFor="ship-overnight" className="cursor-pointer text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <Zap className="h-8 w-8" />
                        <div>
                          <p className="font-medium">Overnight</p>
                          <p className="text-sm text-muted-foreground">Next day</p>
                          <p className="text-lg font-bold mt-1">$24.99</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Integration */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Integration</h3>
        <p className="text-muted-foreground mb-6">
          Using radio groups within forms with validation
        </p>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Create New Project</CardTitle>
            <CardDescription>Configure your project settings</CardDescription>
          </CardHeader>
          <form onSubmit={handleFormSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Project Name</Label>
                <Input placeholder="My Awesome Project" required />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Plan Type</Label>
                <RadioGroup 
                  value={formData.plan} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, plan: value }))}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="starter" id="form-starter" />
                    <Label htmlFor="form-starter">Starter - Perfect for small projects</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="form-professional" />
                    <Label htmlFor="form-professional">Professional - For growing teams</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="form-business" />
                    <Label htmlFor="form-business">Business - Advanced features & support</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Billing Cycle</Label>
                <RadioGroup 
                  value={formData.billing} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, billing: value }))}
                  orientation="horizontal"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="form-monthly" />
                    <Label htmlFor="form-monthly">Monthly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yearly" id="form-yearly" />
                    <Label htmlFor="form-yearly">
                      <span className="flex items-center gap-2">
                        Yearly
                        <Badge variant="secondary" className="text-xs">Save 20%</Badge>
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Deployment Type</Label>
                <RadioGroup 
                  value={formData.deployment} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, deployment: value }))}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="cloud" id="form-cloud" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="form-cloud" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Cloud className="h-4 w-4" />
                          Cloud Hosted
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        We manage everything for you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="self-hosted" id="form-self" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="form-self" className="font-medium cursor-pointer">
                        <span className="flex items-center gap-2">
                          <Server className="h-4 w-4" />
                          Self-Hosted
                        </span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Deploy on your own infrastructure
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="ghost">Cancel</Button>
              <Button type="submit">Create Project</Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Accessibility */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Accessibility</h3>
        <p className="text-muted-foreground mb-6">
          Radio groups are built with accessibility in mind
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Keyboard Navigation & Screen Readers</CardTitle>
            <CardDescription>Fully accessible radio group interactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Keyboard shortcuts:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• <kbd>Tab</kbd> - Focus the radio group</li>
                  <li>• <kbd>Arrow Keys</kbd> - Navigate between options</li>
                  <li>• <kbd>Space</kbd> - Select the focused option</li>
                  <li>• <kbd>Enter</kbd> - Submit form (when in a form)</li>
                </ul>
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Built-in Accessibility Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Proper ARIA roles and states</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader announcements</li>
                  <li>• Focus management</li>
                  <li>• Required field indicators</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <Label>Try navigating with your keyboard:</Label>
                <RadioGroup defaultValue="a11y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a11y-1" id="access-1" />
                    <Label htmlFor="access-1">First option (try arrow keys)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a11y-2" id="access-2" />
                    <Label htmlFor="access-2">Second option</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a11y-3" id="access-3" />
                    <Label htmlFor="access-3">Third option</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complex Layout Example */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Complex Layouts</h3>
        <p className="text-muted-foreground mb-6">
          Radio groups in more complex UI patterns
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Language & Region Settings</CardTitle>
            <CardDescription>Customize your language and regional preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="language" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="language">Language</TabsTrigger>
                <TabsTrigger value="region">Region</TabsTrigger>
              </TabsList>
              <TabsContent value="language" className="mt-4">
                <RadioGroup value={language} onValueChange={setLanguage}>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-2">
                      {[
                        { code: 'en', name: 'English', native: 'English' },
                        { code: 'es', name: 'Spanish', native: 'Español' },
                        { code: 'fr', name: 'French', native: 'Français' },
                        { code: 'de', name: 'German', native: 'Deutsch' },
                        { code: 'it', name: 'Italian', native: 'Italiano' },
                        { code: 'pt', name: 'Portuguese', native: 'Português' },
                        { code: 'ru', name: 'Russian', native: 'Русский' },
                        { code: 'ja', name: 'Japanese', native: '日本語' },
                        { code: 'ko', name: 'Korean', native: '한국어' },
                        { code: 'zh', name: 'Chinese', native: '中文' },
                      ].map((lang) => (
                        <div key={lang.code} className="flex items-center space-x-2 py-2">
                          <RadioGroupItem value={lang.code} id={`lang-${lang.code}`} />
                          <Label htmlFor={`lang-${lang.code}`} className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <span>{lang.name}</span>
                              <span className="text-sm text-muted-foreground">{lang.native}</span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </RadioGroup>
              </TabsContent>
              <TabsContent value="region" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Currency</Label>
                    <RadioGroup defaultValue="usd" className="mt-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="usd" id="currency-usd" />
                          <Label htmlFor="currency-usd" className="cursor-pointer">
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              USD
                            </span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="eur" id="currency-eur" />
                          <Label htmlFor="currency-eur" className="cursor-pointer">
                            <span className="flex items-center gap-1">
                              <Euro className="h-3 w-3" />
                              EUR
                            </span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gbp" id="currency-gbp" />
                          <Label htmlFor="currency-gbp" className="cursor-pointer">
                            <span className="flex items-center gap-1">
                              <PoundSterling className="h-3 w-3" />
                              GBP
                            </span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inr" id="currency-inr" />
                          <Label htmlFor="currency-inr" className="cursor-pointer">
                            <span className="flex items-center gap-1">
                              <IndianRupee className="h-3 w-3" />
                              INR
                            </span>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm font-medium">Date Format</Label>
                    <RadioGroup defaultValue="mdy" className="mt-2">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mdy" id="date-mdy" />
                          <Label htmlFor="date-mdy">MM/DD/YYYY</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dmy" id="date-dmy" />
                          <Label htmlFor="date-dmy">DD/MM/YYYY</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ymd" id="date-ymd" />
                          <Label htmlFor="date-ymd">YYYY-MM-DD</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}