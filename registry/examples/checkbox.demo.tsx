"use client"

import * as React from "react"
import { 
  Checkbox,
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
  Switch,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Alert,
  AlertDescription
} from "@lightmind/ui"
import { 
  Check,
  X,
  Minus,
  Settings,
  Bell,
  Shield,
  Eye,
  Mail,
  MessageSquare,
  Phone,
  Globe,
  Lock,
  Sparkles,
  Zap,
  Star,
  Heart,
  Bookmark,
  Filter,
  Package,
  Truck,
  CreditCard,
  Gift,
  FileText,
  Download,
  Upload,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Users,
  UserCheck,
  FolderOpen,
  Calendar,
  Clock,
  Palette,
  Layout,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Headphones,
  Mic,
  Camera,
  Video,
  Music,
  Image,
  File,
  Archive,
  Trash2,
  RefreshCw,
  Save,
  Share2,
  Printer,
  Wifi,
  Bluetooth,
  Battery,
  Sun,
  Moon,
  ArrowRight,
  BarChart3,
  Volume2
} from "lucide-react"

export function CheckboxDemo() {
  // State for controlled examples
  const [checkedStates, setCheckedStates] = React.useState({
    basic: false,
    terms: false,
    marketing: true,
    updates: false,
  })
  
  // State for checkbox groups
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>(['analytics', 'security'])
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['electronics', 'books'])
  const [selectedPermissions, setSelectedPermissions] = React.useState<string[]>(['read', 'write'])
  
  // State for indeterminate example
  const [parentChecked, setParentChecked] = React.useState<boolean | 'indeterminate'>('indeterminate')
  const [childChecked, setChildChecked] = React.useState({
    option1: true,
    option2: false,
    option3: true,
  })
  
  // State for preferences
  const [preferences, setPreferences] = React.useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      desktop: true,
    },
    privacy: {
      publicProfile: false,
      showEmail: false,
      showPhone: false,
      allowMessages: true,
    },
    features: {
      darkMode: true,
      autoSave: true,
      soundEffects: false,
      animations: true,
    }
  })

  // Helper function for parent-child checkbox logic
  React.useEffect(() => {
    const childValues = Object.values(childChecked)
    if (childValues.every(v => v === true)) {
      setParentChecked(true)
    } else if (childValues.every(v => v === false)) {
      setParentChecked(false)
    } else {
      setParentChecked('indeterminate')
    }
  }, [childChecked])

  const handleParentChange = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setChildChecked({ option1: true, option2: true, option3: true })
    } else {
      setChildChecked({ option1: false, option2: false, option3: false })
    }
  }

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  return (
    <div className="space-y-8">
      {/* Basic Checkboxes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Checkboxes</h3>
        <p className="text-muted-foreground mb-6">
          Simple checkbox components with different sizes and states
        </p>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sizes</CardTitle>
              <CardDescription>Available checkbox sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-sm" size="sm" />
                  <Label htmlFor="size-sm" className="text-sm">Small checkbox</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-default" />
                  <Label htmlFor="size-default">Default checkbox</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-lg" size="lg" />
                  <Label htmlFor="size-lg" className="text-lg">Large checkbox</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">States</CardTitle>
              <CardDescription>Different checkbox states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="unchecked" />
                <Label htmlFor="unchecked">Unchecked state</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checked" defaultChecked />
                <Label htmlFor="checked">Checked state</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="opacity-50">Disabled unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <Label htmlFor="disabled-checked" className="opacity-50">Disabled checked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="indeterminate" indeterminate />
                <Label htmlFor="indeterminate">Indeterminate state</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controlled vs Uncontrolled */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Controlled vs Uncontrolled</h3>
        <p className="text-muted-foreground mb-6">
          Examples of controlled and uncontrolled checkbox implementations
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Uncontrolled</CardTitle>
              <CardDescription>Using defaultChecked prop</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="uncontrolled-1" defaultChecked />
                <Label htmlFor="uncontrolled-1">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="uncontrolled-2" />
                <Label htmlFor="uncontrolled-2">Receive SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="uncontrolled-3" defaultChecked />
                <Label htmlFor="uncontrolled-3">Enable auto-updates</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Controlled</CardTitle>
              <CardDescription>Using checked prop and state</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="controlled-1" 
                  checked={checkedStates.basic}
                  onCheckedChange={(checked) => 
                    setCheckedStates(prev => ({ ...prev, basic: !!checked }))
                  }
                />
                <Label htmlFor="controlled-1">
                  Enable feature {checkedStates.basic && <Badge className="ml-2">Active</Badge>}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="controlled-2" 
                  checked={checkedStates.marketing}
                  onCheckedChange={(checked) => 
                    setCheckedStates(prev => ({ ...prev, marketing: !!checked }))
                  }
                />
                <Label htmlFor="controlled-2">
                  Marketing emails {checkedStates.marketing && <Badge variant="secondary" className="ml-2">Enabled</Badge>}
                </Label>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                Current state: {JSON.stringify({ basic: checkedStates.basic, marketing: checkedStates.marketing })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Checkbox with Descriptions */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">With Descriptions</h3>
        <p className="text-muted-foreground mb-6">
          Checkboxes with labels and additional description text
        </p>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="desc-1" className="mt-0.5" />
                <div className="space-y-1">
                  <Label htmlFor="desc-1" className="font-medium">
                    <span className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Email Notifications
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications about your account activity
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="desc-2" defaultChecked className="mt-0.5" />
                <div className="space-y-1">
                  <Label htmlFor="desc-2" className="font-medium">
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Two-Factor Authentication
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account by requiring a code in addition to your password
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="desc-3" className="mt-0.5" />
                <div className="space-y-1">
                  <Label htmlFor="desc-3" className="font-medium">
                    <span className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Public Profile
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to other users and allow them to find you in search results
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Checkbox Groups */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Checkbox Groups</h3>
        <p className="text-muted-foreground mb-6">
          Multiple checkboxes for selecting multiple options
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Features Selection</CardTitle>
              <CardDescription>Choose the features you want to enable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  { id: 'analytics', label: 'Analytics Dashboard', icon: BarChart3 },
                  { id: 'security', label: 'Advanced Security', icon: Shield },
                  { id: 'api', label: 'API Access', icon: Code },
                  { id: 'support', label: 'Priority Support', icon: Headphones },
                ].map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={feature.id}
                      checked={selectedFeatures.includes(feature.id)}
                      onCheckedChange={() => handleFeatureToggle(feature.id)}
                    />
                    <Label 
                      htmlFor={feature.id} 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <feature.icon className="h-4 w-4" />
                      {feature.label}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  Selected: {selectedFeatures.length} features
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Category Filters</CardTitle>
              <CardDescription>Filter products by categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: 'electronics', label: 'Electronics', count: 234 },
                  { id: 'clothing', label: 'Clothing', count: 189 },
                  { id: 'books', label: 'Books', count: 156 },
                  { id: 'home', label: 'Home & Garden', count: 97 },
                  { id: 'sports', label: 'Sports & Outdoors', count: 64 },
                ].map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => {
                          setSelectedCategories(prev =>
                            checked
                              ? [...prev, category.id]
                              : prev.filter(c => c !== category.id)
                          )
                        }}
                      />
                      <Label htmlFor={category.id} className="cursor-pointer">
                        {category.label}
                      </Label>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Indeterminate State (Parent-Child) */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Indeterminate State</h3>
        <p className="text-muted-foreground mb-6">
          Parent checkbox with indeterminate state when children are partially selected
        </p>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-base">Select Permissions</CardTitle>
            <CardDescription>Choose which permissions to grant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="parent"
                checked={parentChecked === true}
                indeterminate={parentChecked === 'indeterminate'}
                onCheckedChange={handleParentChange}
              />
              <Label htmlFor="parent" className="font-medium">
                Select All Permissions
              </Label>
            </div>
            <Separator />
            <div className="ml-6 space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="child-1"
                  checked={childChecked.option1}
                  onCheckedChange={(checked) => 
                    setChildChecked(prev => ({ ...prev, option1: !!checked }))
                  }
                />
                <Label htmlFor="child-1">Read files</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="child-2"
                  checked={childChecked.option2}
                  onCheckedChange={(checked) => 
                    setChildChecked(prev => ({ ...prev, option2: !!checked }))
                  }
                />
                <Label htmlFor="child-2">Write files</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="child-3"
                  checked={childChecked.option3}
                  onCheckedChange={(checked) => 
                    setChildChecked(prev => ({ ...prev, option3: !!checked }))
                  }
                />
                <Label htmlFor="child-3">Delete files</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-World Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-World Examples</h3>
        <p className="text-muted-foreground mb-6">
          Common checkbox patterns used in applications
        </p>
        
        {/* Terms and Conditions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Complete your registration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={checkedStates.terms}
                    onCheckedChange={(checked) => 
                      setCheckedStates(prev => ({ ...prev, terms: !!checked }))
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                      I agree to the{" "}
                      <a href="#" className="underline underline-offset-2">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline underline-offset-2">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="newsletter"
                    checked={checkedStates.updates}
                    onCheckedChange={(checked) => 
                      setCheckedStates(prev => ({ ...prev, updates: !!checked }))
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="newsletter" className="text-sm font-normal">
                      Send me product updates and special offers
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                disabled={!checkedStates.terms}
              >
                Create Account
              </Button>
            </CardFooter>
          </Card>

          {/* Settings Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="notifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="notifications" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    {Object.entries(preferences.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`notif-${key}`}
                            checked={value}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({
                                ...prev,
                                notifications: {
                                  ...prev.notifications,
                                  [key]: !!checked
                                }
                              }))
                            }
                          />
                          <Label htmlFor={`notif-${key}`} className="capitalize">
                            {key === 'sms' ? 'SMS' : key.replace(/([A-Z])/g, ' $1').trim()} notifications
                          </Label>
                        </div>
                        {key === 'email' && <Mail className="h-4 w-4 text-muted-foreground" />}
                        {key === 'sms' && <MessageSquare className="h-4 w-4 text-muted-foreground" />}
                        {key === 'push' && <Smartphone className="h-4 w-4 text-muted-foreground" />}
                        {key === 'desktop' && <Monitor className="h-4 w-4 text-muted-foreground" />}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="privacy" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    {Object.entries(preferences.privacy).map(([key, value]) => (
                      <div key={key} className="flex items-start space-x-2">
                        <Checkbox 
                          id={`privacy-${key}`}
                          checked={value}
                          onCheckedChange={(checked) => 
                            setPreferences(prev => ({
                              ...prev,
                              privacy: {
                                ...prev.privacy,
                                [key]: !!checked
                              }
                            }))
                          }
                          className="mt-0.5"
                        />
                        <div className="space-y-1">
                          <Label htmlFor={`privacy-${key}`}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {key === 'publicProfile' && 'Allow others to find and view your profile'}
                            {key === 'showEmail' && 'Display your email address on your profile'}
                            {key === 'showPhone' && 'Display your phone number on your profile'}
                            {key === 'allowMessages' && 'Let other users send you direct messages'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="features" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    {Object.entries(preferences.features).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`feature-${key}`}
                            checked={value}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({
                                ...prev,
                                features: {
                                  ...prev.features,
                                  [key]: !!checked
                                }
                              }))
                            }
                          />
                          <Label htmlFor={`feature-${key}`}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                        </div>
                        {key === 'darkMode' && (value ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />)}
                        {key === 'autoSave' && <Save className="h-4 w-4 text-muted-foreground" />}
                        {key === 'soundEffects' && <Volume2 className="h-4 w-4 text-muted-foreground" />}
                        {key === 'animations' && <Sparkles className="h-4 w-4 text-muted-foreground" />}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Shopping Cart Example */}
          <Card>
            <CardHeader>
              <CardTitle>Shopping Cart</CardTitle>
              <CardDescription>Review and select items for checkout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 1, name: 'Wireless Headphones', price: '$99.99', inStock: true },
                  { id: 2, name: 'Smart Watch', price: '$249.99', inStock: true },
                  { id: 3, name: 'USB-C Cable', price: '$19.99', inStock: false },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Checkbox 
                      id={`item-${item.id}`}
                      defaultChecked={item.inStock}
                      disabled={!item.inStock}
                    />
                    <div className="flex-1">
                      <Label htmlFor={`item-${item.id}`} className="font-medium">
                        {item.name}
                      </Label>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{item.price}</span>
                        {!item.inStock && (
                          <Badge variant="secondary" className="text-xs">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="gift" />
                  <Label htmlFor="gift" className="text-sm">
                    <span className="flex items-center gap-2">
                      <Gift className="h-4 w-4" />
                      This order is a gift
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="insurance" />
                  <Label htmlFor="insurance" className="text-sm">
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Add shipping insurance (+$4.99)
                    </span>
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Accessibility</h3>
        <p className="text-muted-foreground mb-6">
          Checkbox components are built with accessibility in mind
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Keyboard Navigation</CardTitle>
            <CardDescription>All checkboxes support keyboard interaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Keyboard shortcuts:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• <kbd>Tab</kbd> - Navigate between checkboxes</li>
                  <li>• <kbd>Space</kbd> - Toggle checkbox state</li>
                  <li>• <kbd>Enter</kbd> - Submit form (when in a form)</li>
                </ul>
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Screen Reader Support</h4>
                <p className="text-sm text-muted-foreground">
                  All checkboxes include proper ARIA labels and states for screen readers
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="a11y-1" aria-label="Enable screen reader announcements" />
                  <Label htmlFor="a11y-1">With aria-label attribute</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="a11y-2" aria-describedby="a11y-2-desc" />
                  <Label htmlFor="a11y-2">With description</Label>
                </div>
                <p id="a11y-2-desc" className="text-sm text-muted-foreground ml-6">
                  This checkbox has additional context via aria-describedby
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form Integration Example */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Integration</h3>
        <p className="text-muted-foreground mb-6">
          Using checkboxes within forms with validation
        </p>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Subscription Preferences</CardTitle>
            <CardDescription>Manage your email subscriptions</CardDescription>
          </CardHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            alert('Form submitted! Check console for values')
            console.log('Form values:', preferences)
          }}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Content Types</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="news" name="content" value="news" defaultChecked />
                      <Label htmlFor="news">
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          News & Updates
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tutorials" name="content" value="tutorials" />
                      <Label htmlFor="tutorials">
                        <span className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          Tutorials & Guides
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="offers" name="content" value="offers" defaultChecked />
                      <Label htmlFor="offers">
                        <span className="flex items-center gap-2">
                          <Gift className="h-4 w-4" />
                          Special Offers
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Frequency</h4>
                  <RadioGroup defaultValue="weekly">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly summary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly newsletter</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="ghost">Cancel</Button>
              <Button type="submit">Save Preferences</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}