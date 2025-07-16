"use client"

import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@lightmind/ui"
import { 
  AlertCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Terminal,
  Zap,
  Bell,
  Shield,
  Rocket,
  Heart,
  Star,
  Sparkles,
  Activity,
  Coffee,
  Download,
  AlertOctagon,
  XCircle,
  ShieldCheck,
  BellRing,
  MessageSquare,
  ArrowRight
} from "lucide-react"
import { Button } from "@lightmind/ui"

export function AlertDemo() {
  const [dismissedAlerts, setDismissedAlerts] = React.useState<Set<string>>(new Set())
  
  const handleDismiss = (alertId: string) => {
    setDismissedAlerts(prev => new Set(prev).add(alertId))
  }

  const resetDismissed = () => {
    setDismissedAlerts(new Set())
  }

  return (
    <div className="space-y-8">
      {/* Alert Variants */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Alert Variants</h3>
        <p className="text-muted-foreground mb-6">
          Five distinct visual styles for different types of messages
        </p>
        <div className="space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert with neutral styling for general information.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertOctagon className="h-4 w-4" />
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>
              This alert indicates a destructive action or critical error that requires attention.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>
              This alert warns users about potentially problematic situations or actions.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>
              This alert confirms successful operations or positive outcomes.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>
              This alert provides helpful information or tips to the user.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Alert Sizes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Alert Sizes</h3>
        <p className="text-muted-foreground mb-6">
          Three size options for different contexts
        </p>
        <div className="space-y-4">
          <Alert size="sm" variant="info">
            <Info className="h-3 w-3" />
            <AlertTitle>Small Alert</AlertTitle>
            <AlertDescription>
              Compact alert for constrained spaces.
            </AlertDescription>
          </Alert>

          <Alert size="default" variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Default Size Alert</AlertTitle>
            <AlertDescription>
              Standard alert size suitable for most use cases.
            </AlertDescription>
          </Alert>

          <Alert size="lg" variant="warning">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Large Alert</AlertTitle>
            <AlertDescription>
              Larger alert with more prominent text for important messages.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Title Only Alerts */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Title Only Alerts</h3>
        <p className="text-muted-foreground mb-6">
          Simple alerts with just a title for brief messages
        </p>
        <div className="space-y-4">
          <Alert>
            <Rocket className="h-4 w-4" />
            <AlertTitle>Your deployment is now live!</AlertTitle>
          </Alert>

          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Payment failed - please try again</AlertTitle>
          </Alert>

          <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Changes saved successfully</AlertTitle>
          </Alert>
        </div>
      </div>

      {/* Custom Icons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Custom Icons</h3>
        <p className="text-muted-foreground mb-6">
          Alerts with different icons to match your content
        </p>
        <div className="space-y-4">
          <Alert>
            <Zap className="h-4 w-4" />
            <AlertTitle>Performance Update</AlertTitle>
            <AlertDescription>
              Your app is now 50% faster after the latest optimization.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Bell className="h-4 w-4" />
            <AlertTitle>New Notifications</AlertTitle>
            <AlertDescription>
              You have 3 unread messages in your inbox.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <Shield className="h-4 w-4" />
            <AlertTitle>Security Status</AlertTitle>
            <AlertDescription>
              All systems are secure and running normally.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <Coffee className="h-4 w-4" />
            <AlertTitle>Maintenance Mode</AlertTitle>
            <AlertDescription>
              The system will be down for maintenance from 2-4 AM.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Alerts with Actions */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Alerts with Actions</h3>
        <p className="text-muted-foreground mb-6">
          Include actionable buttons within alerts
        </p>
        <div className="space-y-4">
          <Alert>
            <Download className="h-4 w-4" />
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              <span className="block mb-2">
                A new version of the application is available. Download now to get the latest features.
              </span>
              <div className="flex gap-2">
                <Button size="sm">Download Update</Button>
                <Button size="sm" variant="outline">Learn More</Button>
              </div>
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Subscription Expiring</AlertTitle>
            <AlertDescription>
              <span className="block mb-2">
                Your subscription will expire in 7 days. Renew now to avoid service interruption.
              </span>
              <div className="flex gap-2">
                <Button size="sm" variant="default">
                  Renew Subscription
                </Button>
                <Button size="sm" variant="ghost">
                  Remind Me Later
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>New Feature</AlertTitle>
            <AlertDescription>
              <span className="block mb-2">
                Try our new AI-powered search feature for faster results.
              </span>
              <Button size="sm" variant="outline">
                Try it now
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Dismissible Alerts</h3>
        <p className="text-muted-foreground mb-6">
          Alerts that users can dismiss when no longer needed
        </p>
        {dismissedAlerts.size > 0 && (
          <Button onClick={resetDismissed} variant="outline" size="sm" className="mb-4">
            Reset dismissed alerts
          </Button>
        )}
        <div className="space-y-4">
          {!dismissedAlerts.has('promo') && (
            <Alert dismissible onDismiss={() => handleDismiss('promo')}>
              <Star className="h-4 w-4" />
              <AlertTitle>Special Offer</AlertTitle>
              <AlertDescription>
                Get 20% off your first purchase with code WELCOME20
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.has('tip') && (
            <Alert variant="info" dismissible onDismiss={() => handleDismiss('tip')}>
              <Activity className="h-4 w-4" />
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>
                Press Ctrl+K to open the command palette for quick navigation
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.has('welcome') && (
            <Alert variant="success" dismissible onDismiss={() => handleDismiss('welcome')}>
              <Heart className="h-4 w-4" />
              <AlertTitle>Welcome!</AlertTitle>
              <AlertDescription>
                Thanks for joining us. Check your email for a welcome gift.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Complex Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Complex Examples</h3>
        <p className="text-muted-foreground mb-6">
          Real-world alert patterns and use cases
        </p>
        <div className="space-y-4">
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Security Alert</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>We noticed a new login from an unrecognized device:</p>
                <div className="text-sm bg-muted rounded p-2">
                  <div>Device: Chrome on Windows</div>
                  <div>Location: New York, USA</div>
                  <div>Time: 2 minutes ago</div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="default">Yes, it was me</Button>
                  <Button size="sm" variant="destructive">Not me</Button>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <MessageSquare className="h-4 w-4" />
            <AlertTitle>Survey Request</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>Help us improve! How would you rate your experience?</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button key={rating} size="sm" variant="outline">
                      <Star className="h-3 w-3" />
                    </Button>
                  ))}
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <Alert variant="warning" dismissible>
            <BellRing className="h-4 w-4" />
            <AlertTitle>Scheduled Maintenance</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>Our services will be temporarily unavailable due to scheduled maintenance:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Date: Sunday, March 24, 2024</li>
                  <li>Time: 2:00 AM - 4:00 AM EST</li>
                  <li>Affected Services: API, Dashboard, Reports</li>
                </ul>
                <p className="text-sm pt-2">
                  We apologize for any inconvenience. For urgent matters, please contact support.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}