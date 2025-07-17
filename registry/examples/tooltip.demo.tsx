"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, Button, Badge, Input } from "@lightmind/ui"
import { 
  HelpCircle, 
  Info, 
  AlertCircle, 
  CheckCircle2,
  Copy,
  Download,
  Share2,
  Settings,
  User,
  Mail,
  Calendar,
  Globe,
  Lock,
  Zap,
  Star,
  Heart,
  MessageSquare,
  MoreVertical,
  ChevronRight,
  ExternalLink,
  Code,
  FileText,
  Image as ImageIcon
} from "lucide-react"

export function TooltipDemo() {
  const [clickCount, setClickCount] = React.useState(0)
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <TooltipProvider delayDuration={300}>
      <div className="space-y-12">
        {/* Basic Usage */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Usage</h3>
          <p className="text-muted-foreground mb-6">Simple tooltips with text content</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a basic tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure your preferences</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get help</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip Positions */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Positions</h3>
          <p className="text-muted-foreground mb-6">Tooltips can be positioned in different directions</p>
          
          <div className="flex flex-wrap gap-8 items-center justify-center p-8 border rounded-lg">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Different Triggers */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Trigger Types</h3>
          <p className="text-muted-foreground mb-6">Different ways to trigger tooltips</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover (default)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Shown on hover</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline"
                  onClick={() => setClickCount(c => c + 1)}
                >
                  Click trigger
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clicked {clickCount} times</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Input 
                  placeholder="Focus me" 
                  className="w-40"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Shown on focus</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Custom Delay Times */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Delay Duration</h3>
          <p className="text-muted-foreground mb-6">Control when tooltips appear</p>
          
          <div className="flex flex-wrap gap-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Instant (0ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>No delay</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={500}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Medium (500ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Half second delay</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={1000}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Long (1000ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>One second delay</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Rich Content */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Rich Content</h3>
          <p className="text-muted-foreground mb-6">Tooltips with complex content</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  User Info
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-2">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                  <div className="flex items-center gap-2 text-xs">
                    <Badge variant="secondary">Pro</Badge>
                    <span>Member since 2023</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Performance
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">All systems operational</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Response time: 42ms
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center gap-2 rounded-md border px-3 py-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.8</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-2">
                  <div className="font-semibold">Customer Rating</div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-4 w-4 ${star <= 4 ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Based on 1,234 reviews
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Disabled State</h3>
          <p className="text-muted-foreground mb-6">Tooltips on disabled elements</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Button disabled variant="outline">
                    Disabled Button
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>This feature is currently unavailable</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Button disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Premium Only
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upgrade to Pro to unlock this feature</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Different UI Elements */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Various UI Elements</h3>
          <p className="text-muted-foreground mb-6">Tooltips on different types of elements</p>
          
          <div className="flex flex-wrap gap-6 items-center">
            {/* Icon buttons */}
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Links */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="#" className="text-primary underline inline-flex items-center gap-1">
                  Learn more
                  <ExternalLink className="h-3 w-3" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Opens in a new tab</p>
              </TooltipContent>
            </Tooltip>

            {/* Badges */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="cursor-help">
                  Beta
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>This feature is in beta testing</p>
              </TooltipContent>
            </Tooltip>

            {/* Images */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer">
                  <ImageIcon className="h-5 w-5 text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Profile picture</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Real-world Examples */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Examples</h3>
          <p className="text-muted-foreground mb-6">Common tooltip patterns in applications</p>
          
          <div className="space-y-6">
            {/* Help icons */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">API Key</label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Your API key is used to authenticate requests. Keep it secret!</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Truncated text */}
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="max-w-[200px] truncate cursor-help">
                    This is a very long filename that will be truncated in the UI but shown in tooltip.txt
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a very long filename that will be truncated in the UI but shown in tooltip.txt</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleCopy("This is a very long filename that will be truncated in the UI but shown in tooltip.txt", "filename")}
                  >
                    {copiedId === "filename" ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{copiedId === "filename" ? "Copied!" : "Copy filename"}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Feature explanations */}
            <div className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Two-factor authentication</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Add an extra layer of security to your account by requiring a verification code in addition to your password.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Badge variant="outline" className="text-green-600">Enabled</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email notifications</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AlertCircle className="h-4 w-4 text-yellow-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>You have 5 unread notifications. Click to view them.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Badge variant="outline">5 new</Badge>
              </div>
            </div>

            {/* Status indicators */}
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 cursor-help">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">Online</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Last seen: Just now</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 cursor-help">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span className="text-sm">Away</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Last seen: 5 minutes ago</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 cursor-help">
                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                    <span className="text-sm">Offline</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Last seen: 2 hours ago</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Tooltip Variants */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Tooltip Variants</h3>
          <p className="text-muted-foreground mb-6">Different visual styles for tooltips</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Default</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Default tooltip style</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Inverse</Button>
              </TooltipTrigger>
              <TooltipContent variant="inverse">
                <p>Inverse tooltip style</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Destructive</Button>
              </TooltipTrigger>
              <TooltipContent variant="destructive">
                <p>Warning: This action cannot be undone</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Success</Button>
              </TooltipTrigger>
              <TooltipContent variant="success">
                <p>Operation completed successfully</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Warning</Button>
              </TooltipTrigger>
              <TooltipContent variant="warning">
                <p>Please review before proceeding</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip Sizes */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Tooltip Sizes</h3>
          <p className="text-muted-foreground mb-6">Different sizes for various use cases</p>
          
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Small</Button>
              </TooltipTrigger>
              <TooltipContent size="sm">
                <p>Compact tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Default</Button>
              </TooltipTrigger>
              <TooltipContent size="default">
                <p>Standard tooltip size</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Large</Button>
              </TooltipTrigger>
              <TooltipContent size="lg">
                <p>Large tooltip with more padding</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Accessibility */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Accessibility</h3>
          <p className="text-muted-foreground mb-6">Keyboard navigation and screen reader support</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm mb-2">Try navigating with keyboard:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Press <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Tab</kbd> to focus elements</li>
                <li>• Tooltips appear on focus for keyboard users</li>
                <li>• Screen readers announce tooltip content</li>
                <li>• Press <kbd className="px-1.5 py-0.5 bg-background rounded text-xs">Escape</kbd> to dismiss tooltips</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Schedule a meeting (Ctrl+K)</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View messages (Ctrl+M)</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Globe className="mr-2 h-4 w-4" />
                    Language
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Change language (Ctrl+L)</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Complex Interactive Example */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Interactive Example</h3>
          <p className="text-muted-foreground mb-6">A more complex example with multiple tooltips</p>
          
          <div className="p-6 border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    John Doe
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="secondary" className="cursor-help">Pro</Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Pro member since January 2023</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                </div>
              </div>
              
              <div className="flex gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send message</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to favorites</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More options</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-2xl font-bold">128</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total projects created</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-2xl font-bold">24.5K</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub stars earned</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-center cursor-help">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Service availability this month</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}