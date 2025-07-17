"use client"

import * as React from "react"
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectSeparator, 
  SelectTrigger, 
  SelectValue,
  Label,
  Button,
  Badge
} from "@lightmind/ui"
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  User,
  Building,
  CreditCard,
  Package,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  Check,
  X,
  AlertCircle,
  Info,
  Flag,
  Languages,
  Briefcase,
  Home,
  Filter,
  SortAsc,
  Tag,
  DollarSign,
  Euro,
  PoundSterling,
  IndianRupee,
  Zap
} from "lucide-react"

export function SelectDemo() {
  const [country, setCountry] = React.useState("")
  const [timezone, setTimezone] = React.useState("")
  const [priority, setPriority] = React.useState("")
  const [status, setStatus] = React.useState("")
  const [size, setSize] = React.useState("default")
  const [formData, setFormData] = React.useState({
    role: "",
    department: "",
    office: ""
  })

  return (
    <div className="space-y-8">
      {/* Basic Select */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Select</h3>
        <p className="text-muted-foreground mb-6">
          Simple dropdown selection with various options
        </p>
        <div className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="fruit">Select a fruit</Label>
            <Select>
              <SelectTrigger id="fruit">
                <SelectValue placeholder="Choose a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="strawberry">Strawberry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="color">Favorite color</Label>
            <Select defaultValue="blue">
              <SelectTrigger id="color">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Select with Groups */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Grouped Options</h3>
        <p className="text-muted-foreground mb-6">
          Organize related options into logical groups
        </p>
        <div className="grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="device">Select a device</Label>
            <Select>
              <SelectTrigger id="device">
                <SelectValue placeholder="Choose your device" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mobile Devices</SelectLabel>
                  <SelectItem value="iphone">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      iPhone
                    </div>
                  </SelectItem>
                  <SelectItem value="android">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Android Phone
                    </div>
                  </SelectItem>
                  <SelectItem value="ipad">
                    <div className="flex items-center gap-2">
                      <Tablet className="h-4 w-4" />
                      iPad
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Desktop</SelectLabel>
                  <SelectItem value="windows">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Windows PC
                    </div>
                  </SelectItem>
                  <SelectItem value="mac">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Mac
                    </div>
                  </SelectItem>
                  <SelectItem value="linux">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Linux
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact">Contact method</Label>
            <Select>
              <SelectTrigger id="contact">
                <SelectValue placeholder="How should we contact you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Digital</SelectLabel>
                  <SelectItem value="email">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </div>
                  </SelectItem>
                  <SelectItem value="phone">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Call
                    </div>
                  </SelectItem>
                  <SelectItem value="sms">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      SMS
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Traditional</SelectLabel>
                  <SelectItem value="mail">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Postal Mail
                    </div>
                  </SelectItem>
                  <SelectItem value="in-person">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      In Person
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Select Sizes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Select Sizes</h3>
        <p className="text-muted-foreground mb-6">
          Three size options to fit different UI contexts
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid gap-2">
            <Label size="lg">Large</Label>
            <Select>
              <SelectTrigger size="lg" className="w-[200px]">
                <SelectValue placeholder="Large select" />
              </SelectTrigger>
              <SelectContent size="lg">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Default</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Default select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label size="sm">Small</Label>
            <Select>
              <SelectTrigger size="sm" className="w-[200px]">
                <SelectValue placeholder="Small select" />
              </SelectTrigger>
              <SelectContent size="sm">
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Select States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Select States</h3>
        <p className="text-muted-foreground mb-6">
          Different visual states for user feedback
        </p>
        <div className="grid gap-4 max-w-2xl">
          <div className="grid gap-2">
            <Label>Default State</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>With Value</Label>
            <Select defaultValue="selected">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="selected">Selected Option</SelectItem>
                <SelectItem value="other">Other Option</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Disabled State</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Error State</Label>
            <Select>
              <SelectTrigger className="border-destructive focus:ring-destructive">
                <SelectValue placeholder="Select a valid option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="valid1">Valid Option 1</SelectItem>
                <SelectItem value="valid2">Valid Option 2</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-destructive mt-1">
              <AlertCircle className="inline h-3 w-3 mr-1" />
              Please select a valid option
            </p>
          </div>
        </div>
      </div>

      {/* Real-world Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Examples</h3>
        <p className="text-muted-foreground mb-6">
          Common select patterns used in applications
        </p>
        
        {/* Country Selector */}
        <div className="space-y-6">
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="country">Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    United States
                  </div>
                </SelectItem>
                <SelectItem value="uk">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    United Kingdom
                  </div>
                </SelectItem>
                <SelectItem value="ca">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Canada
                  </div>
                </SelectItem>
                <SelectItem value="au">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Australia
                  </div>
                </SelectItem>
                <SelectItem value="de">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Germany
                  </div>
                </SelectItem>
                <SelectItem value="fr">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    France
                  </div>
                </SelectItem>
                <SelectItem value="jp">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Japan
                  </div>
                </SelectItem>
                <SelectItem value="in">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    India
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            {country && (
              <p className="text-sm text-muted-foreground">
                Selected: {country.toUpperCase()}
              </p>
            )}
          </div>

          {/* Timezone Picker */}
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="timezone">Timezone</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="pst">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Pacific Time (PST)
                    </div>
                  </SelectItem>
                  <SelectItem value="mst">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Mountain Time (MST)
                    </div>
                  </SelectItem>
                  <SelectItem value="cst">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Central Time (CST)
                    </div>
                  </SelectItem>
                  <SelectItem value="est">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Eastern Time (EST)
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="gmt">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      GMT (London)
                    </div>
                  </SelectItem>
                  <SelectItem value="cet">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      CET (Paris)
                    </div>
                  </SelectItem>
                  <SelectItem value="eet">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      EET (Athens)
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Asia Pacific</SelectLabel>
                  <SelectItem value="ist">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      IST (Mumbai)
                    </div>
                  </SelectItem>
                  <SelectItem value="jst">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      JST (Tokyo)
                    </div>
                  </SelectItem>
                  <SelectItem value="aest">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      AEST (Sydney)
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Priority Selector with Colors */}
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="priority">Priority Level</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Set priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-red-500" />
                    <span className="text-red-600 font-medium">Critical</span>
                  </div>
                </SelectItem>
                <SelectItem value="high">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-orange-600 font-medium">High</span>
                  </div>
                </SelectItem>
                <SelectItem value="medium">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-yellow-500" />
                    <span className="text-yellow-600 font-medium">Medium</span>
                  </div>
                </SelectItem>
                <SelectItem value="low">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-600 font-medium">Low</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status Selector */}
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Active
                  </div>
                </SelectItem>
                <SelectItem value="pending">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    Pending
                  </div>
                </SelectItem>
                <SelectItem value="completed">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    Completed
                  </div>
                </SelectItem>
                <SelectItem value="archived">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                    Archived
                  </div>
                </SelectItem>
                <SelectItem value="cancelled">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    Cancelled
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Currency Selector */}
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="currency">Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger id="currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    USD - US Dollar
                  </div>
                </SelectItem>
                <SelectItem value="eur">
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4" />
                    EUR - Euro
                  </div>
                </SelectItem>
                <SelectItem value="gbp">
                  <div className="flex items-center gap-2">
                    <PoundSterling className="h-4 w-4" />
                    GBP - British Pound
                  </div>
                </SelectItem>
                <SelectItem value="inr">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    INR - Indian Rupee
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Form Integration */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Integration</h3>
        <p className="text-muted-foreground mb-6">
          Using selects in forms with controlled state
        </p>
        <div className="max-w-md space-y-4 p-6 border rounded-lg">
          <h4 className="font-semibold">Employee Information</h4>
          
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select 
              value={formData.role} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Developer
                  </div>
                </SelectItem>
                <SelectItem value="designer">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Designer
                  </div>
                </SelectItem>
                <SelectItem value="manager">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Manager
                  </div>
                </SelectItem>
                <SelectItem value="sales">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Sales
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select 
              value={formData.department} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
            >
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="office">Office Location</Label>
            <Select 
              value={formData.office} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, office: value }))}
            >
              <SelectTrigger id="office">
                <SelectValue placeholder="Select office" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>United States</SelectLabel>
                  <SelectItem value="sf">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      San Francisco, CA
                    </div>
                  </SelectItem>
                  <SelectItem value="ny">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      New York, NY
                    </div>
                  </SelectItem>
                  <SelectItem value="austin">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Austin, TX
                    </div>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Remote</SelectLabel>
                  <SelectItem value="remote-us">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Remote (US)
                    </div>
                  </SelectItem>
                  <SelectItem value="remote-global">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Remote (Global)
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => setFormData({ role: "", department: "", office: "" })}
            >
              Reset
            </Button>
            <Button 
              disabled={!formData.role || !formData.department || !formData.office}
            >
              Submit
            </Button>
          </div>

          {(formData.role || formData.department || formData.office) && (
            <div className="mt-4 p-3 bg-muted rounded-md text-sm">
              <p className="font-medium mb-1">Form Data:</p>
              <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      {/* Advanced Patterns */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Advanced Patterns</h3>
        <p className="text-muted-foreground mb-6">
          Complex select implementations for specific use cases
        </p>
        
        <div className="space-y-6">
          {/* Filter Select */}
          <div className="grid gap-2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4" />
              <Label>Filter Products</Label>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Apply filters" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Price Range</SelectLabel>
                  <SelectItem value="0-50">Under $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100-200">$100 - $200</SelectItem>
                  <SelectItem value="200+">Over $200</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Rating</SelectLabel>
                  <SelectItem value="4+">4 Stars & Up</SelectItem>
                  <SelectItem value="3+">3 Stars & Up</SelectItem>
                  <SelectItem value="2+">2 Stars & Up</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Select */}
          <div className="grid gap-2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <SortAsc className="h-4 w-4" />
              <Label>Sort By</Label>
            </div>
            <Select defaultValue="relevance">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="bestselling">Best Selling</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Selector with Flags */}
          <div className="grid gap-2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="h-4 w-4" />
              <Label>Language</Label>
            </div>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span>
                    English
                  </div>
                </SelectItem>
                <SelectItem value="es">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇪🇸</span>
                    Español
                  </div>
                </SelectItem>
                <SelectItem value="fr">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇫🇷</span>
                    Français
                  </div>
                </SelectItem>
                <SelectItem value="de">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇩🇪</span>
                    Deutsch
                  </div>
                </SelectItem>
                <SelectItem value="it">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇮🇹</span>
                    Italiano
                  </div>
                </SelectItem>
                <SelectItem value="pt">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇵🇹</span>
                    Português
                  </div>
                </SelectItem>
                <SelectItem value="jp">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇯🇵</span>
                    日本語
                  </div>
                </SelectItem>
                <SelectItem value="cn">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇨🇳</span>
                    中文
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tags/Labels Selector */}
          <div className="grid gap-2 max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="h-4 w-4" />
              <Label>Add Tags</Label>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select tags" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="h-5">Bug</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="feature">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500 h-5">Feature</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="enhancement">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500 h-5">Enhancement</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="documentation">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="h-5">Documentation</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="help-wanted">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-500 h-5">Help Wanted</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="good-first-issue">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-500 h-5">Good First Issue</Badge>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}