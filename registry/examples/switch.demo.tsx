"use client"

import * as React from "react"
import { 
  Switch,
  Label,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Alert,
  AlertDescription,
  Input,
  RadioGroup,
  RadioGroupItem,
} from "@lightmind/ui"
import { 
  Check,
  X,
  Moon,
  Sun,
  Bell,
  BellOff,
  Wifi,
  WifiOff,
  Volume2,
  VolumeX,
  Shield,
  ShieldOff,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Power,
  PowerOff,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Bluetooth,
  BluetoothOff,
  Plane,
  PlaneOff,
  MapPin,
  MapPinOff,
  Download,
  Upload,
  Zap,
  ZapOff,
  Mail,
  MailOpen,
  MessageSquare,
  MessageSquareOff,
  Smartphone,
  Monitor,
  Laptop,
  Save,
  Globe,
  GlobeOff,
  User,
  UserX,
  PlayCircle,
  PauseCircle,
  Info,
  Settings,
  Database,
  Cloud,
  CloudOff,
  AlertCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Activity,
  Heart,
  Star,
  Sparkles,
  Code,
  Palette,
  Music,
  Video,
  FileText,
  Archive,
  Trash2,
  RefreshCw,
  Share2,
  Printer,
  Battery,
  BatteryLow,
  ArrowRight,
  BarChart3,
  Gift
} from "lucide-react"

// Simple Separator component
const Separator = () => <div className="my-4 h-[1px] bg-border" />

export function SwitchDemo() {
  // State for controlled examples
  const [switchStates, setSwitchStates] = React.useState({
    basic: false,
    darkMode: false,
    notifications: true,
    autoSave: true,
    publicProfile: false,
  })

  // State for settings panel
  const [activeTab, setActiveTab] = React.useState("general")
  const [settings, setSettings] = React.useState({
    general: {
      darkMode: false,
      sounds: true,
      animations: true,
      autoUpdate: true,
    },
    privacy: {
      publicProfile: false,
      showActivity: true,
      allowMessages: true,
      dataCollection: false,
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      desktop: true,
    },
    features: {
      beta: false,
      experimental: false,
      analytics: true,
      telemetry: false,
    }
  })

  // State for device settings
  const [deviceSettings, setDeviceSettings] = React.useState({
    wifi: true,
    bluetooth: false,
    location: true,
    airplane: false,
    doNotDisturb: false,
    powerSaving: false,
  })

  // State for accessibility
  const [accessibilitySettings, setAccessibilitySettings] = React.useState({
    screenReader: false,
    highContrast: false,
    reduceMotion: false,
    largeText: false,
  })

  const handleSettingChange = (category: string, setting: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }))
  }

  return (
    <div className="space-y-8">
      {/* Basic Switches */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Switches</h3>
        <p className="text-muted-foreground mb-6">
          Simple toggle switches for binary states
        </p>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sizes</CardTitle>
              <CardDescription>Available switch sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center space-x-2">
                  <Switch id="size-sm" size="sm" />
                  <Label htmlFor="size-sm" className="text-sm">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="size-default" />
                  <Label htmlFor="size-default">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="size-lg" size="lg" />
                  <Label htmlFor="size-lg" className="text-lg">Large</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Variants</CardTitle>
              <CardDescription>Different visual styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="variant-default">Default variant</Label>
                <Switch id="variant-default" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="variant-destructive">Destructive variant</Label>
                <Switch id="variant-destructive" variant="destructive" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="variant-success">Success variant</Label>
                <Switch id="variant-success" variant="success" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">States</CardTitle>
              <CardDescription>Different switch states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="state-off">Off state</Label>
                <Switch id="state-off" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="state-on">On state</Label>
                <Switch id="state-on" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="state-disabled-off" className="opacity-50">Disabled (off)</Label>
                <Switch id="state-disabled-off" disabled />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="state-disabled-on" className="opacity-50">Disabled (on)</Label>
                <Switch id="state-disabled-on" disabled defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Switches with Icons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Switches with Icons</h3>
        <p className="text-muted-foreground mb-6">
          Enhanced visual feedback with icons
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Common Controls</CardTitle>
              <CardDescription>Frequently used toggles with icons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-dark" className="flex items-center gap-2">
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </Label>
                <Switch 
                  id="icon-dark"
                  checkedIcon={<Moon className="h-3 w-3" />}
                  uncheckedIcon={<Sun className="h-3 w-3" />}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Label>
                <Switch 
                  id="icon-notifications"
                  checkedIcon={<Bell className="h-3 w-3" />}
                  uncheckedIcon={<BellOff className="h-3 w-3" />}
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-wifi" className="flex items-center gap-2">
                  <Wifi className="h-4 w-4" />
                  Wi-Fi
                </Label>
                <Switch 
                  id="icon-wifi"
                  checkedIcon={<Wifi className="h-3 w-3" />}
                  uncheckedIcon={<WifiOff className="h-3 w-3" />}
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-sound" className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Sound
                </Label>
                <Switch 
                  id="icon-sound"
                  checkedIcon={<Volume2 className="h-3 w-3" />}
                  uncheckedIcon={<VolumeX className="h-3 w-3" />}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Security & Privacy</CardTitle>
              <CardDescription>Privacy controls with status icons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-shield" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security Shield
                </Label>
                <Switch 
                  id="icon-shield"
                  variant="success"
                  checkedIcon={<Shield className="h-3 w-3" />}
                  uncheckedIcon={<ShieldOff className="h-3 w-3" />}
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-privacy" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Profile Visibility
                </Label>
                <Switch 
                  id="icon-privacy"
                  checkedIcon={<Eye className="h-3 w-3" />}
                  uncheckedIcon={<EyeOff className="h-3 w-3" />}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-lock" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Account Lock
                </Label>
                <Switch 
                  id="icon-lock"
                  variant="destructive"
                  checkedIcon={<Lock className="h-3 w-3" />}
                  uncheckedIcon={<Unlock className="h-3 w-3" />}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="icon-check" className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified
                </Label>
                <Switch 
                  id="icon-check"
                  size="sm"
                  variant="success"
                  checkedIcon={<Check className="h-2 w-2" />}
                  uncheckedIcon={<X className="h-2 w-2" />}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Switches with Descriptions */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">With Descriptions</h3>
        <p className="text-muted-foreground mb-6">
          Switches with labels and additional context
        </p>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="desc-1" className="font-medium">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Notifications
                  </span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates about your account activity and important announcements
                </p>
              </div>
              <Switch id="desc-1" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="desc-2" className="font-medium">
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Two-Factor Authentication
                  </span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security by requiring a verification code in addition to your password
                </p>
              </div>
              <Switch id="desc-2" variant="success" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="desc-3" className="font-medium">
                  <span className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Auto-save
                  </span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save your work every 5 minutes to prevent data loss
                </p>
              </div>
              <Switch id="desc-3" />
            </div>

            <Separator />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="desc-4" className="font-medium">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Beta Features
                  </span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get early access to new features before they're released to everyone
                </p>
                <Alert className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Beta features may be unstable and could change without notice
                  </AlertDescription>
                </Alert>
              </div>
              <Switch id="desc-4" variant="destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controlled vs Uncontrolled */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Controlled vs Uncontrolled</h3>
        <p className="text-muted-foreground mb-6">
          Examples of controlled and uncontrolled switch implementations
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Uncontrolled</CardTitle>
              <CardDescription>Using defaultChecked prop</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="uncontrolled-1">Push notifications</Label>
                <Switch id="uncontrolled-1" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="uncontrolled-2">Auto-play videos</Label>
                <Switch id="uncontrolled-2" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="uncontrolled-3">Location services</Label>
                <Switch id="uncontrolled-3" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Controlled</CardTitle>
              <CardDescription>Using checked prop and state</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="controlled-1">
                  Dark mode {switchStates.darkMode && <Badge className="ml-2">Active</Badge>}
                </Label>
                <Switch 
                  id="controlled-1"
                  checked={switchStates.darkMode}
                  onCheckedChange={(checked) => 
                    setSwitchStates(prev => ({ ...prev, darkMode: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="controlled-2">
                  Notifications {switchStates.notifications && <Badge variant="secondary" className="ml-2">On</Badge>}
                </Label>
                <Switch 
                  id="controlled-2"
                  checked={switchStates.notifications}
                  onCheckedChange={(checked) => 
                    setSwitchStates(prev => ({ ...prev, notifications: checked }))
                  }
                />
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                State: {JSON.stringify({ darkMode: switchStates.darkMode, notifications: switchStates.notifications })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Real-World Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-World Examples</h3>
        <p className="text-muted-foreground mb-6">
          Common switch patterns used in applications
        </p>
        
        {/* Settings Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
              <CardDescription>Configure your app preferences</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Simple tab implementation */}
              <div className="w-full">
                <div className="flex space-x-1 border-b mb-4">
                  {["general", "privacy", "notifications", "features"].map((tab) => (
                    <button
                      key={tab}
                      className={cn(
                        "px-4 py-2 text-sm font-medium capitalize transition-colors",
                        activeTab === tab
                          ? "border-b-2 border-primary text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                {/* Tab content */}
                {activeTab === "general" && (
                  <div className="space-y-4">
                    {Object.entries(settings.general).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor={`general-${key}`} className="text-sm font-medium">
                            {key === 'darkMode' && 'Dark Mode'}
                            {key === 'sounds' && 'Sound Effects'}
                            {key === 'animations' && 'Animations'}
                            {key === 'autoUpdate' && 'Auto-Update'}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {key === 'darkMode' && 'Use dark theme throughout the app'}
                            {key === 'sounds' && 'Play sounds for actions and notifications'}
                            {key === 'animations' && 'Enable smooth transitions and effects'}
                            {key === 'autoUpdate' && 'Automatically download and install updates'}
                          </p>
                        </div>
                        <Switch 
                          id={`general-${key}`}
                          checked={value}
                          onCheckedChange={(checked) => handleSettingChange('general', key, checked)}
                          size="sm"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div className="space-y-4">
                    {Object.entries(settings.privacy).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor={`privacy-${key}`} className="text-sm font-medium">
                            {key === 'publicProfile' && 'Public Profile'}
                            {key === 'showActivity' && 'Show Activity Status'}
                            {key === 'allowMessages' && 'Allow Direct Messages'}
                            {key === 'dataCollection' && 'Analytics & Diagnostics'}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {key === 'publicProfile' && 'Let others find and view your profile'}
                            {key === 'showActivity' && 'Show when you\'re online or active'}
                            {key === 'allowMessages' && 'Receive messages from other users'}
                            {key === 'dataCollection' && 'Help improve the app by sharing usage data'}
                          </p>
                        </div>
                        <Switch 
                          id={`privacy-${key}`}
                          checked={value}
                          onCheckedChange={(checked) => handleSettingChange('privacy', key, checked)}
                          size="sm"
                          variant={key === 'dataCollection' && !value ? 'destructive' : 'default'}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-4">
                    {Object.entries(settings.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <Label htmlFor={`notif-${key}`} className="flex items-center gap-2">
                          {key === 'email' && <Mail className="h-4 w-4" />}
                          {key === 'push' && <Smartphone className="h-4 w-4" />}
                          {key === 'sms' && <MessageSquare className="h-4 w-4" />}
                          {key === 'desktop' && <Monitor className="h-4 w-4" />}
                          <span className="capitalize">
                            {key === 'sms' ? 'SMS' : key} Notifications
                          </span>
                        </Label>
                        <Switch 
                          id={`notif-${key}`}
                          checked={value}
                          onCheckedChange={(checked) => handleSettingChange('notifications', key, checked)}
                          checkedIcon={<Bell className="h-3 w-3" />}
                          uncheckedIcon={<BellOff className="h-3 w-3" />}
                        />
                      </div>
                    ))}
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        You can customize which types of notifications you receive in each category
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="space-y-4">
                    {Object.entries(settings.features).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor={`feature-${key}`} className="text-sm font-medium flex items-center gap-2">
                            {key === 'beta' && <Sparkles className="h-4 w-4 text-purple-500" />}
                            {key === 'experimental' && <Zap className="h-4 w-4 text-yellow-500" />}
                            {key === 'analytics' && <Activity className="h-4 w-4 text-blue-500" />}
                            {key === 'telemetry' && <Database className="h-4 w-4 text-green-500" />}
                            <span>
                              {key === 'beta' && 'Beta Features'}
                              {key === 'experimental' && 'Experimental Mode'}
                              {key === 'analytics' && 'Usage Analytics'}
                              {key === 'telemetry' && 'Performance Telemetry'}
                            </span>
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {key === 'beta' && 'Try new features before they\'re released'}
                            {key === 'experimental' && 'Enable cutting-edge experimental features'}
                            {key === 'analytics' && 'Help us understand how you use the app'}
                            {key === 'telemetry' && 'Share performance data to improve stability'}
                          </p>
                        </div>
                        <Switch 
                          id={`feature-${key}`}
                          checked={value}
                          onCheckedChange={(checked) => handleSettingChange('features', key, checked)}
                          size="sm"
                          variant={key === 'experimental' ? 'destructive' : 'default'}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          {/* Device Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Settings</CardTitle>
              <CardDescription>Toggle device settings and connections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(deviceSettings).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Switch 
                      id={`device-${key}`}
                      checked={value}
                      onCheckedChange={(checked) => 
                        setDeviceSettings(prev => ({ ...prev, [key]: checked }))
                      }
                      size="lg"
                      checkedIcon={
                        key === 'wifi' ? <Wifi className="h-3 w-3" /> :
                        key === 'bluetooth' ? <Bluetooth className="h-3 w-3" /> :
                        key === 'location' ? <MapPin className="h-3 w-3" /> :
                        key === 'airplane' ? <Plane className="h-3 w-3" /> :
                        key === 'doNotDisturb' ? <BellOff className="h-3 w-3" /> :
                        <BatteryLow className="h-3 w-3" />
                      }
                      uncheckedIcon={
                        key === 'wifi' ? <WifiOff className="h-3 w-3" /> :
                        key === 'bluetooth' ? <BluetoothOff className="h-3 w-3" /> :
                        key === 'location' ? <MapPinOff className="h-3 w-3" /> :
                        key === 'airplane' ? <PlaneOff className="h-3 w-3" /> :
                        key === 'doNotDisturb' ? <Bell className="h-3 w-3" /> :
                        <Battery className="h-3 w-3" />
                      }
                      variant={key === 'powerSaving' && value ? 'destructive' : 'default'}
                    />
                    <Label htmlFor={`device-${key}`} className="text-sm text-center">
                      {key === 'wifi' && 'Wi-Fi'}
                      {key === 'bluetooth' && 'Bluetooth'}
                      {key === 'location' && 'Location'}
                      {key === 'airplane' && 'Airplane Mode'}
                      {key === 'doNotDisturb' && 'Do Not Disturb'}
                      {key === 'powerSaving' && 'Power Saving'}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <CardTitle>Feature Availability</CardTitle>
              <CardDescription>Manage feature flags for your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Payment Processing</p>
                      <p className="text-sm text-muted-foreground">Accept credit card payments</p>
                    </div>
                  </div>
                  <Switch defaultChecked variant="success" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium">Maintenance Mode</p>
                      <p className="text-sm text-muted-foreground">Show maintenance page to users</p>
                    </div>
                  </div>
                  <Switch variant="destructive" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">AI Features</p>
                      <p className="text-sm text-muted-foreground">Enable AI-powered suggestions</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg">
                      <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">Legacy API</p>
                      <p className="text-sm text-muted-foreground">Deprecated - will be removed soon</p>
                    </div>
                  </div>
                  <Switch disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Integration */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Integration</h3>
        <p className="text-muted-foreground mb-6">
          Using switches within forms with validation
        </p>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Create New Project</CardTitle>
            <CardDescription>Configure your project settings</CardDescription>
          </CardHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            alert('Form submitted! Check console for values')
            console.log('Form values:', switchStates)
          }}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="My Awesome Project" required />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Project Settings</h4>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="form-public">Public Repository</Label>
                    <p className="text-xs text-muted-foreground">
                      Anyone can see this repository
                    </p>
                  </div>
                  <Switch 
                    id="form-public"
                    checked={switchStates.publicProfile}
                    onCheckedChange={(checked) => 
                      setSwitchStates(prev => ({ ...prev, publicProfile: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="form-autosave">Auto-save</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically save changes as you work
                    </p>
                  </div>
                  <Switch 
                    id="form-autosave"
                    checked={switchStates.autoSave}
                    onCheckedChange={(checked) => 
                      setSwitchStates(prev => ({ ...prev, autoSave: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="form-basic">Initialize with README</Label>
                    <p className="text-xs text-muted-foreground">
                      Add a README file to your repository
                    </p>
                  </div>
                  <Switch 
                    id="form-basic"
                    checked={switchStates.basic}
                    onCheckedChange={(checked) => 
                      setSwitchStates(prev => ({ ...prev, basic: checked }))
                    }
                  />
                </div>
              </div>

              <Separator />

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  You can change these settings at any time in your project configuration.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="ghost">Cancel</Button>
              <Button type="submit">
                Create Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Preferences Example */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Preferences Panel</h3>
        <p className="text-muted-foreground mb-6">
          Complex preference management with multiple switch groups
        </p>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Email Preferences</CardTitle>
            <CardDescription>Choose which emails you'd like to receive</CardDescription>
          </CardHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            alert('Preferences saved!')
          }}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Content Types</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="news" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        News & Updates
                      </Label>
                      <Switch id="news" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="tutorials" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Tutorials & Guides
                      </Label>
                      <Switch id="tutorials" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="offers" className="flex items-center gap-2">
                        <Gift className="h-4 w-4" />
                        Special Offers
                      </Label>
                      <Switch id="offers" defaultChecked />
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

      {/* Accessibility */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Accessibility</h3>
        <p className="text-muted-foreground mb-6">
          Switch components are built with accessibility in mind
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Accessibility Features</CardTitle>
            <CardDescription>Enhance user experience for all users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Keyboard Support:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• <kbd>Tab</kbd> - Navigate between switches</li>
                  <li>• <kbd>Space</kbd> - Toggle switch state</li>
                  <li>• <kbd>Enter</kbd> - Submit form (when in a form)</li>
                </ul>
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Accessibility Settings</h4>
              {Object.entries(accessibilitySettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor={`a11y-${key}`} className="text-sm font-medium">
                      {key === 'screenReader' && 'Screen Reader Support'}
                      {key === 'highContrast' && 'High Contrast Mode'}
                      {key === 'reduceMotion' && 'Reduce Motion'}
                      {key === 'largeText' && 'Large Text'}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      {key === 'screenReader' && 'Optimize for screen reader users'}
                      {key === 'highContrast' && 'Increase color contrast for better visibility'}
                      {key === 'reduceMotion' && 'Minimize animations and transitions'}
                      {key === 'largeText' && 'Increase text size throughout the app'}
                    </p>
                  </div>
                  <Switch 
                    id={`a11y-${key}`}
                    checked={value}
                    onCheckedChange={(checked) => 
                      setAccessibilitySettings(prev => ({ ...prev, [key]: checked }))
                    }
                    aria-label={`Toggle ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  />
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="text-sm font-medium">ARIA Attributes</h4>
              <p className="text-sm text-muted-foreground">
                All switches include proper ARIA labels and states for assistive technologies
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="aria-example">With aria-label</Label>
                  <Switch 
                    id="aria-example" 
                    aria-label="Toggle example feature"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="aria-described">With description</Label>
                  <Switch 
                    id="aria-described" 
                    aria-describedby="switch-description"
                  />
                </div>
                <p id="switch-description" className="text-sm text-muted-foreground">
                  This switch has additional context via aria-describedby
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Helper function for class names
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ')
}