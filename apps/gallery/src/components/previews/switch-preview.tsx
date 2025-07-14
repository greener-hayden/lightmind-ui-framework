'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff,
  Bell,
  BellOff,
  Check,
  X
} from 'lucide-react'

export function SwitchPreview() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Push Notifications</Label>
      </div>
    </div>
  )
}

export function SwitchVariantsPreview() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [sound, setSound] = useState(false)
  const [wifi, setWifi] = useState(true)
  const [formSettings, setFormSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    autoSave: true,
    darkTheme: false,
  })

  return (
    <div className="space-y-8 w-full max-w-2xl mx-auto">
      {/* Size Variants */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Size Variants</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Switch id="small" size="sm" defaultChecked />
            <Label htmlFor="small" size="sm">Small</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="default" size="default" defaultChecked />
            <Label htmlFor="default">Default</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="large" size="lg" defaultChecked />
            <Label htmlFor="large" size="lg">Large</Label>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Color Variants</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Switch id="default-color" variant="default" defaultChecked />
            <Label htmlFor="default-color">Default</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="destructive-color" variant="destructive" defaultChecked />
            <Label htmlFor="destructive-color">Destructive</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="success-color" variant="success" defaultChecked />
            <Label htmlFor="success-color">Success</Label>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">With Icons</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Switch 
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
              checkedIcon={<Sun size={10} />}
              uncheckedIcon={<Moon size={10} />}
            />
            <Label htmlFor="dark-mode">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Switch 
              id="sound-toggle"
              checked={sound}
              onCheckedChange={setSound}
              checkedIcon={<Volume2 size={10} />}
              uncheckedIcon={<VolumeX size={10} />}
            />
            <Label htmlFor="sound-toggle">
              Sound {sound ? 'On' : 'Off'}
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch 
              id="wifi-toggle"
              checked={wifi}
              onCheckedChange={setWifi}
              checkedIcon={<Wifi size={10} />}
              uncheckedIcon={<WifiOff size={10} />}
              variant={wifi ? 'success' : 'destructive'}
            />
            <Label htmlFor="wifi-toggle">
              WiFi {wifi ? 'Connected' : 'Disconnected'}
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch 
              id="notifications-toggle"
              size="lg"
              checked={notifications}
              onCheckedChange={setNotifications}
              checkedIcon={<Bell size={12} />}
              uncheckedIcon={<BellOff size={12} />}
            />
            <Label htmlFor="notifications-toggle" size="lg">
              Notifications {notifications ? 'Enabled' : 'Disabled'}
            </Label>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">States</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Switch id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Switch id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Disabled Checked
            </Label>
          </div>
        </div>
      </div>

      {/* Form Integration */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Form Integration</h4>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about your account activity
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={formSettings.emailNotifications}
                onCheckedChange={(checked) =>
                  setFormSettings(prev => ({ ...prev, emailNotifications: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get push notifications on your device
                </p>
              </div>
              <Switch
                id="push-notifications"
                checked={formSettings.pushNotifications}
                onCheckedChange={(checked) =>
                  setFormSettings(prev => ({ ...prev, pushNotifications: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-save">Auto Save</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save your work
                </p>
              </div>
              <Switch
                id="auto-save"
                checked={formSettings.autoSave}
                onCheckedChange={(checked) =>
                  setFormSettings(prev => ({ ...prev, autoSave: checked }))
                }
                variant="success"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-theme">Dark Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Switch to dark theme
                </p>
              </div>
              <Switch
                id="dark-theme"
                checked={formSettings.darkTheme}
                onCheckedChange={(checked) =>
                  setFormSettings(prev => ({ ...prev, darkTheme: checked }))
                }
                checkedIcon={<Moon size={10} />}
                uncheckedIcon={<Sun size={10} />}
              />
            </div>

            <div className="pt-4 border-t">
              <Button 
                onClick={() => {
                  alert(`Settings saved: ${JSON.stringify(formSettings, null, 2)}`)
                }}
              >
                Save Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Examples */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Advanced Examples</h4>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Feature Toggles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="feature-a">Experimental Feature A</Label>
                <Switch 
                  id="feature-a" 
                  size="sm"
                  checkedIcon={<Check size={8} />}
                  uncheckedIcon={<X size={8} />}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="feature-b">Beta Feature B</Label>
                <Switch 
                  id="feature-b" 
                  size="sm"
                  variant="destructive"
                  checkedIcon={<Check size={8} />}
                  uncheckedIcon={<X size={8} />}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="feature-c">Preview Feature C</Label>
                <Switch 
                  id="feature-c" 
                  size="sm"
                  variant="success"
                  checkedIcon={<Check size={8} />}
                  uncheckedIcon={<X size={8} />}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="high-contrast">High Contrast</Label>
                  <p className="text-xs text-muted-foreground">Increase contrast for better visibility</p>
                </div>
                <Switch id="high-contrast" size="sm" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduce-motion">Reduce Motion</Label>
                  <p className="text-xs text-muted-foreground">Minimize animations and transitions</p>
                </div>
                <Switch id="reduce-motion" size="sm" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="large-text">Large Text</Label>
                  <p className="text-xs text-muted-foreground">Increase text size throughout the app</p>
                </div>
                <Switch id="large-text" size="sm" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}