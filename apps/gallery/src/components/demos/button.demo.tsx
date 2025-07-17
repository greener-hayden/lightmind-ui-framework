"use client"

import * as React from "react"
import { Button } from "@lightmind/ui"
import { cn } from "@/lib/utils"
import { 
  ChevronRight, 
  Download, 
  Mail, 
  Loader2, 
  Plus, 
  Trash2, 
  Heart,
  Share2,
  Settings,
  Check,
  X,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Copy,
  Save,
  RefreshCw,
  LogOut,
  Upload,
  Search,
  Filter,
  Edit,
  MoreHorizontal
} from "lucide-react"

export function ButtonDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [loadingStates, setLoadingStates] = React.useState({
    save: false,
    upload: false,
    refresh: false,
  })

  const handleLoadingClick = (action: keyof typeof loadingStates) => {
    setLoadingStates(prev => ({ ...prev, [action]: true }))
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [action]: false }))
    }, 2000)
  }

  return (
    <div className="space-y-8">
      {/* Variants Section */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Button Variants</h3>
        <p className="text-muted-foreground mb-6">
          Six distinct visual styles for different use cases
        </p>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes Section */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Button Sizes</h3>
        <p className="text-muted-foreground mb-6">
          Four size options including icon-only buttons
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* With Icons Section */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Buttons with Icons</h3>
        <p className="text-muted-foreground mb-6">
          Combine icons with text for enhanced visual communication
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Login with Email
            </Button>
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline">
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">
              <Plus className="mr-2 h-3 w-3" />
              Add Item
            </Button>
            <Button size="sm" variant="ghost">
              <Share2 className="mr-2 h-3 w-3" />
              Share
            </Button>
            <Button size="sm" variant="outline">
              <Settings className="mr-2 h-3 w-3" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Icon Only Buttons */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Icon Buttons</h3>
        <p className="text-muted-foreground mb-6">
          Compact buttons for toolbars and space-constrained interfaces
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Loading States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Loading States</h3>
        <p className="text-muted-foreground mb-6">
          Show loading indicators for async operations
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => handleLoadingClick('save')}
              disabled={loadingStates.save}
            >
              {loadingStates.save && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loadingStates.save ? "Saving..." : "Save Changes"}
            </Button>
            <Button 
              variant="secondary"
              onClick={() => handleLoadingClick('upload')}
              disabled={loadingStates.upload}
            >
              {loadingStates.upload ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Upload className="mr-2 h-4 w-4" />
              )}
              {loadingStates.upload ? "Uploading..." : "Upload File"}
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleLoadingClick('refresh')}
              disabled={loadingStates.refresh}
            >
              <RefreshCw className={cn(
                "mr-2 h-4 w-4",
                loadingStates.refresh && "animate-spin"
              )} />
              {loadingStates.refresh ? "Refreshing..." : "Refresh"}
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
            <Button variant="secondary" size="sm" disabled>
              <Loader2 className="mr-2 h-3 w-3 animate-spin" />
              Processing
            </Button>
            <Button size="icon" disabled>
              <Loader2 className="h-4 w-4 animate-spin" />
            </Button>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Disabled States</h3>
        <p className="text-muted-foreground mb-6">
          Disabled buttons for unavailable actions
        </p>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="link" disabled>Link</Button>
        </div>
      </div>

      {/* Button Groups */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Button Groups</h3>
        <p className="text-muted-foreground mb-6">
          Common button combinations and patterns
        </p>
        <div className="space-y-4">
          {/* Dialog Actions */}
          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>

          {/* Destructive Confirmation */}
          <div className="flex gap-2">
            <Button variant="ghost">Cancel</Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Item
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <Button variant="outline">Back</Button>
            <Button>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Form Actions */}
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <X className="mr-2 h-3 w-3" />
              Reset
            </Button>
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-3 w-3" />
              Save Draft
            </Button>
            <Button size="sm">
              <Check className="mr-2 h-3 w-3" />
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Special Use Cases */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Special Use Cases</h3>
        <p className="text-muted-foreground mb-6">
          Buttons for specific contexts and actions
        </p>
        <div className="space-y-4">
          {/* External Links */}
          <div className="flex flex-wrap gap-4">
            <Button variant="link" asChild>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                View Documentation
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Status Indicators */}
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              <Check className="mr-2 h-4 w-4" />
              Approved
            </Button>
            <Button variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-50">
              <AlertCircle className="mr-2 h-4 w-4" />
              Pending Review
            </Button>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              <X className="mr-2 h-4 w-4" />
              Rejected
            </Button>
          </div>

          {/* Utility Actions */}
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="sm">
              <Copy className="mr-2 h-3 w-3" />
              Copy to Clipboard
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-3 w-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

