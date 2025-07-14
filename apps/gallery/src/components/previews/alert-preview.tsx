'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle, CheckCircle, Info, XCircle, Lightbulb, Download, Users, Bell, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function AlertPreview() {
  return (
    <div className="space-y-4 p-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Your API key will expire in 7 days. Consider renewing it to avoid service interruption.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again to continue.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertVariantsPreview() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([])

  const handleDismiss = (alertId: string) => {
    setDismissedAlerts(prev => [...prev, alertId])
  }

  const resetAlerts = () => {
    setDismissedAlerts([])
  }

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Variants</h4>
        <div className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert with neutral styling.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Here's some helpful information for you to know.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Operation completed successfully!
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please be careful with this action.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Sizes</h4>
        <div className="space-y-3">
          <Alert size="sm" variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Small Alert</AlertTitle>
            <AlertDescription>
              This is a compact alert for inline notifications.
            </AlertDescription>
          </Alert>

          <Alert size="default" variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is the standard alert size for most use cases.
            </AlertDescription>
          </Alert>

          <Alert size="lg" variant="success">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Large Alert</AlertTitle>
            <AlertDescription>
              This is a spacious alert for important announcements or detailed information that needs more visual weight.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Dismissible Alerts</h4>
          <Button onClick={resetAlerts} variant="outline" size="sm">
            Reset All
          </Button>
        </div>
        <div className="space-y-3">
          {!dismissedAlerts.includes('dismissible-info') && (
            <Alert 
              variant="info" 
              dismissible 
              onDismiss={() => handleDismiss('dismissible-info')}
            >
              <Bell className="h-4 w-4" />
              <AlertTitle>New Feature Available</AlertTitle>
              <AlertDescription>
                We've added dark mode support. Check it out in your settings!
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.includes('dismissible-warning') && (
            <Alert 
              variant="warning" 
              dismissible 
              onDismiss={() => handleDismiss('dismissible-warning')}
            >
              <Shield className="h-4 w-4" />
              <AlertTitle>Security Update</AlertTitle>
              <AlertDescription>
                A security update is available. We recommend updating as soon as possible.
              </AlertDescription>
            </Alert>
          )}

          {!dismissedAlerts.includes('dismissible-success') && (
            <Alert 
              variant="success" 
              dismissible 
              onDismiss={() => handleDismiss('dismissible-success')}
            >
              <Download className="h-4 w-4" />
              <AlertTitle>Download Complete</AlertTitle>
              <AlertDescription>
                Your file has been downloaded successfully to your Downloads folder.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Rich Content Examples</h4>
        <div className="space-y-3">
          <Alert variant="info">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                You can use keyboard shortcuts to navigate faster:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><kbd className="px-1 py-0.5 text-xs bg-muted rounded">Ctrl + K</kbd> - Open command palette</li>
                <li><kbd className="px-1 py-0.5 text-xs bg-muted rounded">Ctrl + /</kbd> - Show keyboard shortcuts</li>
                <li><kbd className="px-1 py-0.5 text-xs bg-muted rounded">Esc</kbd> - Close modals</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <Users className="h-4 w-4" />
            <AlertTitle>Team Collaboration</AlertTitle>
            <AlertDescription>
              <p className="mb-3">
                You're about to share this project with your team. This will give them:
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  View Permissions
                </Button>
                <Button size="sm">
                  Continue Sharing
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <Zap className="h-4 w-4" />
            <AlertTitle>Performance Improved</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Your app is now <strong>35% faster</strong> thanks to our latest optimizations.
              </p>
              <p className="text-xs opacity-75">
                Updated: 2 minutes ago
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Without Icons</h4>
        <div className="space-y-3">
          <Alert variant="info">
            <AlertTitle>System Maintenance</AlertTitle>
            <AlertDescription>
              Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM UTC.
            </AlertDescription>
          </Alert>

          <Alert variant="warning" size="sm">
            <AlertDescription>
              Remember to save your work before closing the application.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}