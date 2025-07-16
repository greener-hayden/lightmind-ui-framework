"use client"

import * as React from "react"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Switch,
  Badge,
  Alert,
  AlertDescription,
  Checkbox,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lightmind/ui"
import { 
  Trash2,
  AlertCircle,
  Save,
  X,
  Plus,
  Edit,
  Settings,
  User,
  Upload,
  Download,
  Share2,
  Copy,
  Check,
  Info,
  FileText,
  Image as ImageIcon,
  Video,
  Music,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  LogOut,
  UserX,
  AlertTriangle,
  HelpCircle,
  Terminal,
  Code,
  Database,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  RefreshCw,
  Loader2,
  CheckCircle2,
  XCircle,
  Archive,
  Eye,
  EyeOff,
  Shield,
  Key,
  Globe,
  Palette,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  MessageSquare,
  Heart,
  Star,
  Flag,
  Bookmark,
  Send,
  Paperclip
} from "lucide-react"

export function DialogDemo() {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [saveChangesOpen, setSaveChangesOpen] = React.useState(false)
  const [profileOpen, setProfileOpen] = React.useState(false)
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [imageViewerOpen, setImageViewerOpen] = React.useState(false)
  const [nestedParentOpen, setNestedParentOpen] = React.useState(false)
  const [nestedChildOpen, setNestedChildOpen] = React.useState(false)
  const [fullScreenOpen, setFullScreenOpen] = React.useState(false)
  const [alertDialogOpen, setAlertDialogOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Software developer passionate about creating great user experiences.",
    notifications: true,
    theme: "system",
    language: "en",
    privacy: "friends"
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [termsAccepted, setTermsAccepted] = React.useState(false)

  const images = [
    { src: "/api/placeholder/800/600", title: "Mountain Landscape" },
    { src: "/api/placeholder/800/600", title: "Ocean View" },
    { src: "/api/placeholder/800/600", title: "Forest Path" },
  ]

  const handleSaveProfile = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setProfileOpen(false)
  }

  const handleDelete = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setDeleteDialogOpen(false)
  }

  return (
    <div className="space-y-8">
      {/* Basic Dialogs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Dialogs</h3>
        <p className="text-muted-foreground mb-6">
          Simple dialog examples with different triggers and content
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Basic Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog without description */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Simple Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Welcome back!</DialogTitle>
              </DialogHeader>
              <div className="py-6">
                <p className="text-sm text-muted-foreground">
                  Your session has been restored. You can continue where you left off.
                </p>
              </div>
              <DialogFooter>
                <Button className="w-full">Got it</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dialog with custom trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Click to open</CardTitle>
                  <CardDescription className="text-xs">
                    Custom trigger example
                  </CardDescription>
                </CardHeader>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Custom Trigger</DialogTitle>
                <DialogDescription>
                  You can use any component as a dialog trigger
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Dialog Sizes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Dialog Sizes</h3>
        <p className="text-muted-foreground mb-6">
          Different dialog sizes for various content needs
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Small Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Small Dialog</Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>Small Dialog</DialogTitle>
                <DialogDescription>
                  Perfect for quick confirmations
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm">This is a small dialog with minimal content.</p>
              </div>
              <DialogFooter>
                <Button size="sm" variant="outline">Cancel</Button>
                <Button size="sm">Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Default Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Default Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Default Size Dialog</DialogTitle>
                <DialogDescription>
                  The standard dialog size for most use cases
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <p className="text-sm">This is the default dialog size, suitable for forms and moderate content.</p>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="example">Example Field</Label>
                    <Input id="example" placeholder="Enter something..." />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Large Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Large Dialog</Button>
            </DialogTrigger>
            <DialogContent size="lg">
              <DialogHeader>
                <DialogTitle>Large Dialog</DialogTitle>
                <DialogDescription>
                  More space for complex forms and content
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter your address..." />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Extra Large Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Extra Large Dialog</Button>
            </DialogTrigger>
            <DialogContent size="xl">
              <DialogHeader>
                <DialogTitle>Extra Large Dialog</DialogTitle>
                <DialogDescription>
                  Maximum space for detailed content and complex layouts
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="grid gap-6 md:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="text-base">Card {i}</CardTitle>
                        <CardDescription className="text-sm">
                          Example content in a grid layout
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          This demonstrates how extra large dialogs can contain complex layouts.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Form Dialogs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Dialogs</h3>
        <p className="text-muted-foreground mb-6">
          Dialogs with form inputs and validation
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Contact Form Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact Form
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  Send us a message and we'll get back to you soon.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="contact-subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Type your message here..." 
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Login Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>Welcome back</DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your account
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="name@example.com" 
                    autoComplete="email"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <Button variant="link" className="px-0 font-normal" size="sm">
                      Forgot password?
                    </Button>
                  </div>
                  <div className="relative">
                    <Input 
                      id="login-password" 
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label 
                    htmlFor="remember" 
                    className="text-sm font-normal cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <DialogFooter className="flex-col space-y-2">
                <Button className="w-full">Sign in</Button>
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  Sign in with Google
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Payment Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Payment Information</DialogTitle>
                <DialogDescription>
                  Add your payment details to complete the purchase
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input 
                    id="card-number" 
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-name">Name on Card</Label>
                  <Input id="card-name" placeholder="John Doe" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-card" />
                  <Label 
                    htmlFor="save-card" 
                    className="text-sm font-normal cursor-pointer"
                  >
                    Save card for future purchases
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Shield className="mr-2 h-4 w-4" />
                  Pay Securely
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Confirmation Dialogs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Confirmation Dialogs</h3>
        <p className="text-muted-foreground mb-6">
          Important actions that require user confirmation
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Delete Confirmation */}
          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Account
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete your account? This action is permanent and cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <Alert variant="destructive" className="my-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  All your data will be permanently deleted. This includes your profile, settings, and all associated content.
                </AlertDescription>
              </Alert>
              <div className="grid gap-2 py-4">
                <Label htmlFor="confirm-delete">
                  Type <span className="font-mono text-destructive">DELETE</span> to confirm
                </Label>
                <Input 
                  id="confirm-delete" 
                  placeholder="Type DELETE"
                  className="font-mono"
                />
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setDeleteDialogOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Save Changes Confirmation */}
          <Dialog open={saveChangesOpen} onOpenChange={setSaveChangesOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>Save Changes?</DialogTitle>
                <DialogDescription>
                  You have unsaved changes. Do you want to save them before leaving?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setSaveChangesOpen(false)}
                >
                  Discard
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => setSaveChangesOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setSaveChangesOpen(false)}>
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Archive Confirmation */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Archive this item?</DialogTitle>
                <DialogDescription>
                  This item will be moved to your archive. You can restore it anytime from the archive section.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span>Archived items are kept for 30 days before permanent deletion.</span>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Archive className="mr-2 h-4 w-4" />
                  Archive Item
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Logout Confirmation */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle>Logout</DialogTitle>
                <DialogDescription>
                  Are you sure you want to logout?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Scrollable Content */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Scrollable Content</h3>
        <p className="text-muted-foreground mb-6">
          Dialogs with long content that requires scrolling
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Terms and Conditions */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Terms & Conditions
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogDescription>
                  Last updated: March 15, 2024
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-y-auto max-h-[50vh] space-y-4 pr-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Introduction</h4>
                  <p className="text-sm text-muted-foreground">
                    Welcome to our service. By using our service, you agree to these terms. 
                    Please read them carefully. These Terms and Conditions ("Terms", "Terms and Conditions") 
                    govern your relationship with our website.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Use License</h4>
                  <p className="text-sm text-muted-foreground">
                    Permission is granted to temporarily download one copy of the materials 
                    (information or software) on our website for personal, non-commercial 
                    transitory viewing only. This is the grant of a license, not a transfer of title.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    The materials on our website are provided on an 'as is' basis. We make no warranties, 
                    expressed or implied, and hereby disclaim and negate all other warranties including, 
                    without limitation, implied warranties or conditions of merchantability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Limitations</h4>
                  <p className="text-sm text-muted-foreground">
                    In no event shall our company or its suppliers be liable for any damages 
                    (including, without limitation, damages for loss of data or profit, or due to 
                    business interruption) arising out of the use or inability to use materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, 
                    use, and protect your information when you use our service. By using our service, 
                    you agree to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6. Governing Law</h4>
                  <p className="text-sm text-muted-foreground">
                    These terms and conditions are governed by and construed in accordance with 
                    the laws of the United States and you irrevocably submit to the exclusive 
                    jurisdiction of the courts in that State or location.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Checkbox 
                  id="accept-terms" 
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                />
                <Label 
                  htmlFor="accept-terms" 
                  className="text-sm font-normal cursor-pointer"
                >
                  I have read and agree to the terms and conditions
                </Label>
              </div>
              <DialogFooter>
                <Button variant="outline">Decline</Button>
                <Button disabled={!termsAccepted}>Accept</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Help Documentation */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Center
              </Button>
            </DialogTrigger>
            <DialogContent size="lg" className="max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>Help Center</DialogTitle>
                <DialogDescription>
                  Find answers to common questions
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-y-auto max-h-[50vh] space-y-6 pr-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Getting Started
                    </h4>
                    <div className="space-y-2 ml-6">
                      <p className="text-sm text-muted-foreground">
                        How do I create an account?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        What are the system requirements?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I reset my password?
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </h4>
                    <div className="space-y-2 ml-6">
                      <p className="text-sm text-muted-foreground">
                        How do I change my email address?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I update my profile?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I delete my account?
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing & Payments
                    </h4>
                    <div className="space-y-2 ml-6">
                      <p className="text-sm text-muted-foreground">
                        What payment methods do you accept?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I update my payment information?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I cancel my subscription?
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="mr-2 h-4 w-4" />
                      Security & Privacy
                    </h4>
                    <div className="space-y-2 ml-6">
                      <p className="text-sm text-muted-foreground">
                        How is my data protected?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        What is two-factor authentication?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        How do I report a security issue?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Custom Footer Actions */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Custom Footer Actions</h3>
        <p className="text-muted-foreground mb-6">
          Dialogs with custom footer layouts and multiple actions
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Share Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share this page</DialogTitle>
                <DialogDescription>
                  Anyone with the link can view this page
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 py-4">
                <Input 
                  value="https://example.com/shared/abc123" 
                  readOnly 
                  className="flex-1"
                />
                <Button size="sm" variant="secondary">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Button variant="outline" size="sm" className="flex flex-col items-center gap-2 h-auto py-4">
                  <Mail className="h-4 w-4" />
                  <span className="text-xs">Email</span>
                </Button>
                <Button variant="outline" size="sm" className="flex flex-col items-center gap-2 h-auto py-4">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">SMS</span>
                </Button>
                <Button variant="outline" size="sm" className="flex flex-col items-center gap-2 h-auto py-4">
                  <Code className="h-4 w-4" />
                  <span className="text-xs">Embed</span>
                </Button>
                <Button variant="outline" size="sm" className="flex flex-col items-center gap-2 h-auto py-4">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">More</span>
                </Button>
              </div>
              <DialogFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <span>Link expires in 7 days</span>
                  </div>
                  <Button>Done</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Multi-action Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Options
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Export Data</DialogTitle>
                <DialogDescription>
                  Choose your export format and options
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Format</Label>
                  <Select defaultValue="csv">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Date Range</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Include</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-images" defaultChecked />
                      <Label htmlFor="include-images" className="text-sm font-normal cursor-pointer">
                        Images and attachments
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-comments" defaultChecked />
                      <Label htmlFor="include-comments" className="text-sm font-normal cursor-pointer">
                        Comments and notes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-metadata" />
                      <Label htmlFor="include-metadata" className="text-sm font-normal cursor-pointer">
                        Metadata and timestamps
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <div className="flex items-center justify-between w-full">
                  <Button variant="ghost" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Schedule Export
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Export Now
                    </Button>
                  </div>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Nested Dialogs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Nested Dialogs</h3>
        <p className="text-muted-foreground mb-6">
          Dialogs that can open other dialogs
        </p>
        <div className="flex flex-wrap gap-4">
          <Dialog open={nestedParentOpen} onOpenChange={setNestedParentOpen}>
            <DialogTrigger asChild>
              <Button>Open Nested Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Parent Dialog</DialogTitle>
                <DialogDescription>
                  This dialog can open another dialog
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Click the button below to open a nested dialog. The parent dialog will remain open in the background.
                </p>
                <Dialog open={nestedChildOpen} onOpenChange={setNestedChildOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Child Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Child Dialog</DialogTitle>
                      <DialogDescription>
                        This is a nested dialog
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        This dialog is opened from within another dialog. You can close this to return to the parent.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button 
                        variant="outline" 
                        onClick={() => setNestedChildOpen(false)}
                      >
                        Close Child
                      </Button>
                      <Button 
                        onClick={() => {
                          setNestedChildOpen(false)
                          setNestedParentOpen(false)
                        }}
                      >
                        Close All
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setNestedParentOpen(false)}
                >
                  Close Parent
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Full-screen Dialog */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Full-screen Dialog</h3>
        <p className="text-muted-foreground mb-6">
          Dialog that takes up the entire viewport
        </p>
        <div className="flex flex-wrap gap-4">
          <Dialog open={fullScreenOpen} onOpenChange={setFullScreenOpen}>
            <DialogTrigger asChild>
              <Button>
                <Maximize2 className="mr-2 h-4 w-4" />
                Open Fullscreen
              </Button>
            </DialogTrigger>
            <DialogContent size="full" className="h-screen max-h-screen">
              <DialogHeader>
                <DialogTitle>Full-screen View</DialogTitle>
                <DialogDescription>
                  This dialog takes up the entire screen
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-auto py-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Card {i}</CardTitle>
                        <CardDescription>
                          Example content in fullscreen mode
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded flex items-center justify-center">
                          <ImageIcon className="h-12 w-12 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline"
                  onClick={() => setFullScreenOpen(false)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Close Fullscreen
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Alert Dialogs */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Alert Dialogs</h3>
        <p className="text-muted-foreground mb-6">
          Non-dismissible dialogs for critical alerts
        </p>
        <div className="flex flex-wrap gap-4">
          <Dialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <AlertCircle className="mr-2 h-4 w-4" />
                Critical Alert
              </Button>
            </DialogTrigger>
            <DialogContent 
              onPointerDownOutside={(e) => e.preventDefault()}
              onEscapeKeyDown={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center text-destructive">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Critical System Error
                </DialogTitle>
                <DialogDescription>
                  An unexpected error has occurred. Please save your work and restart the application.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Error Code: SYS_CRITICAL_001<br />
                    Unable to save changes. Data may be lost if you continue.
                  </AlertDescription>
                </Alert>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold">Recommended Actions:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Save any unsaved work immediately</li>
                    <li>Close all other applications</li>
                    <li>Restart the application</li>
                    <li>Contact support if the issue persists</li>
                  </ul>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline"
                  onClick={() => setAlertDialogOpen(false)}
                >
                  Ignore Risk
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => setAlertDialogOpen(false)}
                >
                  Restart Now
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Success Alert */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Success Alert
              </Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader>
                <DialogTitle className="flex items-center text-green-600">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Success!
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Your changes have been saved successfully. You can now continue with your work.
                </p>
              </div>
              <DialogFooter>
                <Button className="w-full">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Warning Alert */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Warning Alert
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center text-yellow-600">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Warning
                </DialogTitle>
                <DialogDescription>
                  Your session will expire in 5 minutes
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Due to inactivity, your session will automatically expire. 
                    Any unsaved changes will be lost.
                  </AlertDescription>
                </Alert>
              </div>
              <DialogFooter>
                <Button variant="outline">Logout Now</Button>
                <Button>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Extend Session
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Real-world Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Examples</h3>
        <p className="text-muted-foreground mb-6">
          Complete dialog implementations for common use cases
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Profile Edit Dialog */}
          <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
            <DialogTrigger asChild>
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent size="lg">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Update your profile information and preferences
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
                    >
                      <Upload className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{formData.name}</h4>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="profile-name">Name</Label>
                    <Input 
                      id="profile-name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input 
                      id="profile-email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="profile-bio">Bio</Label>
                  <Textarea 
                    id="profile-bio" 
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Privacy Settings</h4>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profile-privacy">Profile Visibility</Label>
                        <p className="text-xs text-muted-foreground">Control who can see your profile</p>
                      </div>
                      <Select 
                        value={formData.privacy}
                        onValueChange={(value) => setFormData({...formData, privacy: value})}
                      >
                        <SelectTrigger className="w-[150px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="friends">Friends Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profile-notifications">Email Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive updates via email</p>
                      </div>
                      <Switch 
                        id="profile-notifications"
                        checked={formData.notifications}
                        onCheckedChange={(checked) => setFormData({...formData, notifications: checked})}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setProfileOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSaveProfile}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Settings Dialog */}
          <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent size="xl" className="max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <DialogDescription>
                  Manage your application preferences
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-6 py-4">
                <div className="w-48 space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Palette className="mr-2 h-4 w-4" />
                    Appearance
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    Language
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Database className="mr-2 h-4 w-4" />
                    Data & Privacy
                  </Button>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Appearance</h4>
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label>Theme</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Button 
                            variant={formData.theme === "light" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFormData({...formData, theme: "light"})}
                          >
                            <Sun className="mr-2 h-4 w-4" />
                            Light
                          </Button>
                          <Button 
                            variant={formData.theme === "dark" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFormData({...formData, theme: "dark"})}
                          >
                            <Moon className="mr-2 h-4 w-4" />
                            Dark
                          </Button>
                          <Button 
                            variant={formData.theme === "system" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFormData({...formData, theme: "system"})}
                          >
                            <Monitor className="mr-2 h-4 w-4" />
                            System
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label>Display Density</Label>
                        <Select defaultValue="comfortable">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="compact">Compact</SelectItem>
                            <SelectItem value="comfortable">Comfortable</SelectItem>
                            <SelectItem value="spacious">Spacious</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Language & Region</h4>
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label>Language</Label>
                        <Select 
                          value={formData.language}
                          onValueChange={(value) => setFormData({...formData, language: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                            <SelectItem value="ja">日本語</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label>Time Zone</Label>
                        <Select defaultValue="utc-5">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                            <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline"
                  onClick={() => setSettingsOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setSettingsOpen(false)}>
                  Save Settings
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Image Viewer Dialog */}
          <Dialog open={imageViewerOpen} onOpenChange={setImageViewerOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <ImageIcon className="mr-2 h-4 w-4" />
                Image Viewer
              </Button>
            </DialogTrigger>
            <DialogContent size="full" className="h-screen max-h-screen p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold">{images[currentImageIndex].title}</h3>
                    <Badge variant="secondary">
                      {currentImageIndex + 1} / {images.length}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <RotateCw className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                    <DialogClose asChild>
                      <Button size="icon" variant="ghost">
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>
                <div className="flex-1 bg-black relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-muted h-96 w-96 rounded flex items-center justify-center">
                      <ImageIcon className="h-24 w-24 text-muted-foreground" />
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                    disabled={currentImageIndex === 0}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={() => setCurrentImageIndex(Math.min(images.length - 1, currentImageIndex + 1))}
                    disabled={currentImageIndex === images.length - 1}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2 justify-center">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Feedback Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Feedback
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send Feedback</DialogTitle>
                <DialogDescription>
                  We'd love to hear your thoughts about our product
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>How would you rate your experience?</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button
                        key={rating}
                        size="icon"
                        variant="ghost"
                        className="hover:text-yellow-500"
                      >
                        <Star className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="feedback-type">Feedback Type</Label>
                  <Select>
                    <SelectTrigger id="feedback-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="improvement">Improvement</SelectItem>
                      <SelectItem value="compliment">Compliment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="feedback-message">Your Feedback</Label>
                  <Textarea 
                    id="feedback-message"
                    placeholder="Tell us what you think..."
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="feedback-followup" />
                  <Label 
                    htmlFor="feedback-followup" 
                    className="text-sm font-normal cursor-pointer"
                  >
                    I'd like to be contacted about my feedback
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Feedback
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}