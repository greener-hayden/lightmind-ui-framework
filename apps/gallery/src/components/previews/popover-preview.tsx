'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverClose,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverFooter,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Calendar, 
  Settings, 
  HelpCircle, 
  User, 
  Bell, 
  Info,
  ChevronDown,
  Search,
  Filter,
  Download,
  Share,
  Edit,
  Trash2,
  Check,
  X
} from 'lucide-react'

export function PopoverPreview() {
  return (
    <div className="flex items-center justify-center p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Quick Actions</PopoverTitle>
            <PopoverDescription>
              Choose an action to perform
            </PopoverDescription>
          </PopoverHeader>
          <div className="space-y-2">
            <Button className="w-full justify-start" variant="ghost" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Item
            </Button>
            <Button className="w-full justify-start" variant="ghost" size="sm">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button className="w-full justify-start" variant="ghost" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function PopoverVariantsPreview() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-8 p-6">
      {/* Size Variants */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Size Variants</h4>
        <div className="flex flex-wrap gap-4 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">Small</Button>
            </PopoverTrigger>
            <PopoverContent size="sm">
              <div className="space-y-2">
                <h4 className="font-medium">Small Popover</h4>
                <p className="text-sm text-muted-foreground">
                  Compact content area
                </p>
                <Button size="sm" className="w-full">Action</Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Default</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Default Size</PopoverTitle>
                <PopoverDescription>
                  Standard popover width with comfortable spacing
                </PopoverDescription>
              </PopoverHeader>
              <div className="space-y-3">
                <Input placeholder="Enter some text..." />
                <div className="flex space-x-2">
                  <Button size="sm">Save</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">Large</Button>
            </PopoverTrigger>
            <PopoverContent size="lg">
              <PopoverHeader>
                <PopoverTitle>Large Popover</PopoverTitle>
                <PopoverDescription>
                  More space for complex content and forms
                </PopoverDescription>
              </PopoverHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
                <Input placeholder="Email address" />
                <textarea 
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Message..."
                  rows={3}
                />
                <PopoverFooter>
                  <Button size="sm" variant="outline">Cancel</Button>
                  <Button size="sm">Submit</Button>
                </PopoverFooter>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Auto Width</Button>
            </PopoverTrigger>
            <PopoverContent size="auto">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Quick actions:</span>
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Share className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Style Variants */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Style Variants</h4>
        <div className="flex flex-wrap gap-4 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Default</Button>
            </PopoverTrigger>
            <PopoverContent variant="default">
              <PopoverHeader>
                <PopoverTitle>Default Style</PopoverTitle>
                <PopoverDescription>Standard popover appearance</PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">This is the default popover style.</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Card Style</Button>
            </PopoverTrigger>
            <PopoverContent variant="card">
              <PopoverHeader>
                <PopoverTitle>Card Style</PopoverTitle>
                <PopoverDescription>Enhanced card appearance with shadow</PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">This popover uses the card variant.</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>Accent</Button>
            </PopoverTrigger>
            <PopoverContent variant="accent">
              <PopoverHeader>
                <PopoverTitle>Accent Style</PopoverTitle>
                <PopoverDescription>Highlighted appearance</PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">This popover uses the accent variant.</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="destructive">Destructive</Button>
            </PopoverTrigger>
            <PopoverContent variant="destructive">
              <PopoverHeader>
                <PopoverTitle>Destructive Action</PopoverTitle>
                <PopoverDescription>Warning style for dangerous actions</PopoverDescription>
              </PopoverHeader>
              <p className="text-sm">This action cannot be undone.</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Badge variant="outline" className="cursor-pointer">
                <Info className="mr-1 h-3 w-3" />
                Info
              </Badge>
            </PopoverTrigger>
            <PopoverContent variant="info">
              <PopoverHeader>
                <PopoverTitle>Information</PopoverTitle>
              </PopoverHeader>
              <p className="text-sm">Additional details and context.</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Badge variant="secondary" className="cursor-pointer">
                <Check className="mr-1 h-3 w-3" />
                Success
              </Badge>
            </PopoverTrigger>
            <PopoverContent variant="success">
              <PopoverHeader>
                <PopoverTitle>Success</PopoverTitle>
              </PopoverHeader>
              <p className="text-sm">Operation completed successfully!</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Positioning */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Positioning</h4>
        <div className="grid grid-cols-3 gap-8 w-fit mx-auto">
          <div></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Popover positioned on top</p>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
          <div></div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Popover positioned on left</p>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
          <div></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Popover positioned on right</p>
              <PopoverArrow />
            </PopoverContent>
          </Popover>

          <div></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Popover positioned on bottom</p>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
          <div></div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Interactive Examples</h4>
        <div className="flex flex-wrap gap-4 items-start">
          {/* Date Picker Mock */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-60 justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                {selectedDate || "Pick a date"}
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Select Date</h4>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                        <div key={day} className="font-medium text-muted-foreground p-2">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                        <button
                          key={date}
                          className="p-2 hover:bg-accent rounded-sm text-sm"
                          onClick={() => setSelectedDate(`2024-01-${date.toString().padStart(2, '0')}`)}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Today</Button>
                    <PopoverClose asChild>
                      <Button size="sm">Done</Button>
                    </PopoverClose>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* User Profile */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="w-fit">
                <User className="mr-2 h-4 w-4" />
                John Doe
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <div className="border-t pt-2 space-y-1">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
                    Sign out
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Search with Filters */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search with filters..." 
                  className="pl-10 pr-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                >
                  <Filter className="h-3 w-3" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-80">
              <PopoverHeader>
                <PopoverTitle>Search Filters</PopoverTitle>
                <PopoverDescription>Refine your search results</PopoverDescription>
              </PopoverHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <div className="space-y-1">
                    {['All', 'Documents', 'Images', 'Videos'].map((category) => (
                      <label key={category} className="flex items-center space-x-2 text-sm">
                        <input type="radio" name="category" value={category} />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="From" type="date" />
                    <Input placeholder="To" type="date" />
                  </div>
                </div>
                <PopoverFooter>
                  <Button variant="outline" size="sm">Reset</Button>
                  <PopoverClose asChild>
                    <Button size="sm">Apply Filters</Button>
                  </PopoverClose>
                </PopoverFooter>
              </div>
            </PopoverContent>
          </Popover>

          {/* Settings Panel */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </PopoverTrigger>
            <PopoverContent size="lg" showClose>
              <PopoverHeader>
                <PopoverTitle>Quick Settings</PopoverTitle>
                <PopoverDescription>
                  Adjust your preferences
                </PopoverDescription>
              </PopoverHeader>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Notifications</label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <Bell className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Dark Mode</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Auto Save</label>
                    <input type="checkbox" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Language</label>
                  <select className="w-full p-2 border rounded-md text-sm">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <PopoverFooter>
                  <Button variant="outline" size="sm">Reset</Button>
                  <Button size="sm">Save</Button>
                </PopoverFooter>
              </div>
            </PopoverContent>
          </Popover>

          {/* Help Information */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent variant="info" size="lg">
              <PopoverHeader>
                <PopoverTitle>Keyboard Shortcuts</PopoverTitle>
                <PopoverDescription>Quick access to common actions</PopoverDescription>
              </PopoverHeader>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>New Item</span>
                  <Badge variant="secondary">Ctrl + N</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Search</span>
                  <Badge variant="secondary">Ctrl + K</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Save</span>
                  <Badge variant="secondary">Ctrl + S</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Help</span>
                  <Badge variant="secondary">F1</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Toggle Sidebar</span>
                  <Badge variant="secondary">Ctrl + B</Badge>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Confirmation Dialog */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </PopoverTrigger>
            <PopoverContent variant="destructive">
              <PopoverHeader>
                <PopoverTitle>Delete Item</PopoverTitle>
                <PopoverDescription>
                  Are you sure you want to delete this item?
                </PopoverDescription>
              </PopoverHeader>
              <p className="text-sm mb-4">This action cannot be undone.</p>
              <PopoverFooter>
                <PopoverClose asChild>
                  <Button variant="outline" size="sm">
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </PopoverClose>
                <Button variant="destructive" size="sm">
                  <Check className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}