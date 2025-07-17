"use client"

import * as React from "react"
import { Input, Label, Button } from "@lightmind/ui"
import { 
  Search, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  X,
  Calendar,
  DollarSign,
  CreditCard,
  Phone,
  MapPin,
  Link,
  AlertCircle,
  Check,
  Loader2,
  AtSign,
  Hash,
  Globe,
  Building,
  Briefcase,
  Home
} from "lucide-react"

export function InputDemo() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [emailError, setEmailError] = React.useState("")
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) {
      setEmailError("Email is required")
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      setFormErrors({})
    }, 2000)
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.username) {
      errors.username = "Username is required"
    }
    
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address"
    }
    
    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match"
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="space-y-8">
      {/* Basic Input Types */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Input Types</h3>
        <p className="text-muted-foreground mb-6">Various HTML5 input types with proper attributes</p>
        
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="text-input">Text Input</Label>
            <Input id="text-input" type="text" placeholder="Enter text..." />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email-input">Email Input</Label>
            <Input id="email-input" type="email" placeholder="name@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password-input">Password Input</Label>
            <Input id="password-input" type="password" placeholder="Enter password..." />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="number-input">Number Input</Label>
            <Input id="number-input" type="number" placeholder="0" min="0" max="100" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tel-input">Telephone Input</Label>
            <Input id="tel-input" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="url-input">URL Input</Label>
            <Input id="url-input" type="url" placeholder="https://example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date-input">Date Input</Label>
            <Input id="date-input" type="date" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time-input">Time Input</Label>
            <Input id="time-input" type="time" />
          </div>
        </div>
      </div>

      {/* Input States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Input States</h3>
        <p className="text-muted-foreground mb-6">Different input states for various scenarios</p>
        
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label>Default State</Label>
            <Input placeholder="Default input..." />
          </div>
          
          <div className="space-y-2">
            <Label>Focused State</Label>
            <Input placeholder="Click to see focus state..." />
          </div>
          
          <div className="space-y-2">
            <Label>Disabled State</Label>
            <Input placeholder="Disabled input..." disabled />
          </div>
          
          <div className="space-y-2">
            <Label>Read-only State</Label>
            <Input value="Read-only value" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Error State</Label>
            <Input 
              placeholder="Invalid input..." 
              className="border-destructive focus-visible:ring-destructive"
              aria-invalid="true"
            />
            <p className="text-sm text-destructive">This field has an error</p>
          </div>
          
          <div className="space-y-2">
            <Label>Success State</Label>
            <Input 
              placeholder="Valid input..." 
              className="border-green-500 focus-visible:ring-green-500"
              aria-invalid="false"
            />
            <p className="text-sm text-green-600">Looking good!</p>
          </div>
        </div>
      </div>

      {/* Input with Icons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Input with Icons</h3>
        <p className="text-muted-foreground mb-6">Inputs enhanced with leading and trailing icons</p>
        
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label>Search Input</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                className="pl-10 pr-10" 
                placeholder="Search..." 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
                  onClick={() => setSearchValue("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Email with Icon</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="email" className="pl-10" placeholder="name@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Password with Toggle</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type={showPassword ? "text" : "password"} 
                className="pl-10 pr-10" 
                placeholder="Enter password..."
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Username</Label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder="johndoe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Amount</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="number" className="pl-10" placeholder="0.00" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="tel" className="pl-10" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Sizes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Input Sizes</h3>
        <p className="text-muted-foreground mb-6">Custom input sizes for different use cases</p>
        
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label size="sm">Small Input</Label>
            <Input className="h-8 text-xs" placeholder="Small size..." />
          </div>
          
          <div className="space-y-2">
            <Label>Default Input</Label>
            <Input placeholder="Default size..." />
          </div>
          
          <div className="space-y-2">
            <Label size="lg">Large Input</Label>
            <Input className="h-12 text-base" placeholder="Large size..." />
          </div>
        </div>
      </div>

      {/* Form Validation Example */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Validation</h3>
        <p className="text-muted-foreground mb-6">Real-time validation with error messages</p>
        
        <div className="max-w-md">
          <div className="space-y-2">
            <Label htmlFor="validation-email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="validation-email"
                type="email"
                className={`pl-10 pr-10 ${emailError ? 'border-destructive focus-visible:ring-destructive' : email && !emailError ? 'border-green-500 focus-visible:ring-green-500' : ''}`}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail(e.target.value)
                }}
                onBlur={() => validateEmail(email)}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
              />
              {email && !emailError && (
                <Check className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
              )}
              {emailError && (
                <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />
              )}
            </div>
            {emailError && (
              <p id="email-error" className="text-sm text-destructive">{emailError}</p>
            )}
          </div>
        </div>
      </div>

      {/* Search Inputs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Search Inputs</h3>
        <p className="text-muted-foreground mb-6">Various search input patterns</p>
        
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label>Basic Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                className="pl-10" 
                placeholder="Search..."
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Search with Clear</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                className="pl-10 pr-10" 
                placeholder="Type to search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
                  onClick={() => setSearchValue("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Search with Action</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  type="search" 
                  className="pl-10" 
                  placeholder="Search products..."
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-world Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Examples</h3>
        <p className="text-muted-foreground mb-6">Common input patterns in applications</p>
        
        <div className="space-y-8">
          {/* Login Form */}
          <div className="max-w-md">
            <h4 className="text-lg font-medium mb-4">Login Form</h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="login-email"
                    type="email" 
                    className="pl-10" 
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="login-password"
                    type="password" 
                    className="pl-10" 
                    placeholder="Enter password..."
                  />
                </div>
              </div>
              
              <Button className="w-full">Sign In</Button>
            </form>
          </div>

          {/* Registration Form */}
          <div className="max-w-md">
            <h4 className="text-lg font-medium mb-4">Registration Form</h4>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reg-username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="reg-username"
                    className={`pl-10 ${formErrors.username ? 'border-destructive' : ''}`}
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
                {formErrors.username && (
                  <p className="text-sm text-destructive">{formErrors.username}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="reg-email"
                    type="email"
                    className={`pl-10 ${formErrors.email ? 'border-destructive' : ''}`}
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-sm text-destructive">{formErrors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="reg-password"
                    type="password"
                    className={`pl-10 ${formErrors.password ? 'border-destructive' : ''}`}
                    placeholder="Min 8 characters..."
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                {formErrors.password && (
                  <p className="text-sm text-destructive">{formErrors.password}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reg-confirm">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="reg-confirm"
                    type="password"
                    className={`pl-10 ${formErrors.confirmPassword ? 'border-destructive' : ''}`}
                    placeholder="Confirm password..."
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                </div>
                {formErrors.confirmPassword && (
                  <p className="text-sm text-destructive">{formErrors.confirmPassword}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
                onClick={(e) => {
                  e.preventDefault()
                  if (validateForm()) {
                    handleFormSubmit(e)
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>
          </div>

          {/* Payment Form */}
          <div className="max-w-md">
            <h4 className="text-lg font-medium mb-4">Payment Information</h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="card-number"
                    className="pl-10" 
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input 
                    id="expiry"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input 
                    id="cvv"
                    type="number"
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardholder">Cardholder Name</Label>
                <Input 
                  id="cardholder"
                  placeholder="John Doe"
                />
              </div>
            </form>
          </div>

          {/* Address Form */}
          <div className="max-w-md">
            <h4 className="text-lg font-medium mb-4">Shipping Address</h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="street">Street Address</Label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="street"
                    className="pl-10" 
                    placeholder="123 Main Street"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="city"
                      className="pl-10" 
                      placeholder="New York"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input 
                    id="state"
                    placeholder="NY"
                    maxLength={2}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="zip"
                      className="pl-10" 
                      placeholder="10001"
                      maxLength={5}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="country"
                      className="pl-10" 
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Profile Form */}
          <div className="max-w-md">
            <h4 className="text-lg font-medium mb-4">Profile Information</h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="display-name"
                    className="pl-10" 
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input 
                  id="bio"
                  placeholder="Tell us about yourself..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="website"
                    type="url"
                    className="pl-10" 
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="company"
                    className="pl-10" 
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Advanced Patterns */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Advanced Patterns</h3>
        <p className="text-muted-foreground mb-6">Complex input interactions and behaviors</p>
        
        <div className="grid gap-6 max-w-md">
          <div className="space-y-2">
            <Label>Input with Prefix</Label>
            <div className="flex">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                https://
              </span>
              <Input 
                className="rounded-l-none" 
                placeholder="example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Input with Suffix</Label>
            <div className="flex">
              <Input 
                className="rounded-r-none" 
                placeholder="username"
              />
              <span className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                @example.com
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Input Group</Label>
            <div className="flex">
              <Button variant="outline" className="rounded-r-none">
                <DollarSign className="h-4 w-4" />
              </Button>
              <Input 
                type="number"
                className="rounded-none" 
                placeholder="0.00"
              />
              <Button variant="outline" className="rounded-l-none">
                USD
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Formatted Input</Label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                className="pl-10 font-mono" 
                placeholder="ABC-123-XYZ"
                style={{ textTransform: 'uppercase' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}