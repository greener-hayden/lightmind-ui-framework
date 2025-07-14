'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export function TooltipPreview() {
  return (
    <div className="flex items-center justify-center p-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export function TooltipVariantsPreview() {
  return (
    <TooltipProvider>
      <div className="space-y-6 p-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Variants</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Default</Button>
              </TooltipTrigger>
              <TooltipContent variant="default">
                <p>Default tooltip variant</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Inverse</Button>
              </TooltipTrigger>
              <TooltipContent variant="inverse">
                <p>Inverse tooltip variant</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="destructive">Destructive</Button>
              </TooltipTrigger>
              <TooltipContent variant="destructive">
                <p>Destructive tooltip variant</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline">Success</Badge>
              </TooltipTrigger>
              <TooltipContent variant="success">
                <p>Success tooltip variant</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary">Warning</Badge>
              </TooltipTrigger>
              <TooltipContent variant="warning">
                <p>Warning tooltip variant</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Sizes</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm">Small</Button>
              </TooltipTrigger>
              <TooltipContent size="sm">
                <p>Small tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Default</Button>
              </TooltipTrigger>
              <TooltipContent size="default">
                <p>Default tooltip size</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="lg">Large</Button>
              </TooltipTrigger>
              <TooltipContent size="lg">
                <p>Large tooltip with more content space</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Positions</h4>
          <div className="grid grid-cols-3 gap-8 w-fit mx-auto">
            <div></div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
            <div></div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
            <div></div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>

            <div></div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
            <div></div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Rich Content</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">User Profile</Button>
              </TooltipTrigger>
              <TooltipContent size="lg" className="max-w-xs">
                <div className="space-y-2">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-xs">Software Engineer</p>
                  <p className="text-xs text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Help</Button>
              </TooltipTrigger>
              <TooltipContent size="lg" className="max-w-sm">
                <div className="space-y-2">
                  <p className="font-semibold">Need Help?</p>
                  <ul className="text-xs space-y-1">
                    <li>• Press Ctrl+K to open command palette</li>
                    <li>• Press Ctrl+/ for keyboard shortcuts</li>
                    <li>• Contact support at help@company.com</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <Input placeholder="Hover for validation" />
                </div>
              </TooltipTrigger>
              <TooltipContent variant="destructive">
                <p>Password must be at least 8 characters</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Delay Options</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant="outline">No Delay</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instant tooltip (0ms delay)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={700}>
              <TooltipTrigger asChild>
                <Button variant="outline">Default Delay</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Normal tooltip (700ms delay)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={1500}>
              <TooltipTrigger asChild>
                <Button variant="outline">Long Delay</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delayed tooltip (1500ms delay)</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}