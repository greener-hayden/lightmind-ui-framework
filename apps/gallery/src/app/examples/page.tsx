'use client'

import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Badge } from '@lightmind/ui'
import { Header } from '@/components/header'
import { 
  BarChart3, 
  ShoppingCart, 
  Users, 
  ArrowRight, 
  ExternalLink,
  Zap,
  Package,
  Settings,
  Home,
  Monitor,
  Smartphone,
  Palette,
  Code,
  Target,
  CheckCircle
} from 'lucide-react'

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Example Applications</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore comprehensive example applications that showcase the full potential of LightMind UI components in real-world scenarios
          </p>
        </div>

        {/* Featured Examples */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary">50+ Components</Badge>
              </div>
              <CardTitle className="text-xl">Enterprise Dashboard</CardTitle>
              <CardDescription>
                Complete analytics dashboard with charts, KPIs, team management, and real-time data visualization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Advanced data tables and filtering
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Interactive charts and graphs
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Team collaboration features
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Real-time notifications
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                <a href="/examples/dashboard" className="flex items-center">
                  View Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-500" />
                </div>
                <Badge variant="secondary">40+ Components</Badge>
              </div>
              <CardTitle className="text-xl">E-commerce Admin</CardTitle>
              <CardDescription>
                Comprehensive admin panel for managing products, orders, inventory, and customer data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Product management system
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Order tracking and fulfillment
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Advanced form components
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Multi-step workflows
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group-hover:bg-blue-500/90 transition-colors" variant="outline">
                <a href="/examples/ecommerce" className="flex items-center">
                  View E-commerce
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <Badge variant="secondary">60+ Components</Badge>
              </div>
              <CardTitle className="text-xl">SaaS Application</CardTitle>
              <CardDescription>
                Modern SaaS interface with sidebar navigation, command palette, and collaboration features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Advanced navigation patterns
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Command palette (⌘K)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Real-time collaboration
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Complex sidebar layouts
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group-hover:bg-purple-500/90 transition-colors" variant="outline">
                <a href="/examples/saas" className="flex items-center">
                  View SaaS App
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What's Included in Each Example</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Complete Source Code</h3>
              <p className="text-sm text-muted-foreground">
                Full TypeScript implementation with best practices
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">
                Mobile-first approach with perfect tablet and desktop layouts
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold mb-2">Theme Support</h3>
              <p className="text-sm text-muted-foreground">
                Dark/light mode with customizable color schemes
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Accessibility First</h3>
              <p className="text-sm text-muted-foreground">
                WCAG compliant with keyboard navigation and screen reader support
              </p>
            </Card>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Dashboard Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Dashboard Example</h2>
            <div className="grid gap-6">
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <span className="text-2xl">💰</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    <span className="text-2xl">👥</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <span className="text-2xl">📊</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <span className="text-2xl">📈</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Chart placeholder</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">Customer {i + 1}</p>
                            <p className="text-sm text-muted-foreground">customer{i + 1}@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">+$1,999.00</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Form Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Form Example</h2>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your details to create a new account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm Password</label>
                  <Input type="password" placeholder="Confirm your password" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button className="flex-1">Create Account</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Settings Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Settings Example</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Display Name</label>
                    <Input defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Input placeholder="Tell us about yourself" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                    </div>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Dark Mode</div>
                      <div className="text-sm text-muted-foreground">Use dark theme</div>
                    </div>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Analytics</div>
                      <div className="text-sm text-muted-foreground">Help improve our product</div>
                    </div>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}