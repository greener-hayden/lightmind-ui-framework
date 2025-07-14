'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function TextareaPreview() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <div className="space-y-2">
        <Label htmlFor="basic-textarea">Your message</Label>
        <Textarea 
          id="basic-textarea"
          placeholder="Type your message here..." 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled-textarea">Disabled</Label>
        <Textarea 
          id="disabled-textarea"
          disabled 
          placeholder="This textarea is disabled" 
        />
      </div>
    </div>
  )
}

export function TextareaVariantsPreview() {
  const [autoResizeValue, setAutoResizeValue] = useState('')
  const [charCountValue, setCharCountValue] = useState('')
  const [formValue, setFormValue] = useState('')

  return (
    <div className="space-y-8 w-full max-w-2xl mx-auto">
      {/* Size Variants */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Size Variants</h4>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="small">Small</Label>
            <Textarea 
              id="small"
              size="sm" 
              placeholder="Small textarea..." 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="default">Default</Label>
            <Textarea 
              id="default"
              size="default" 
              placeholder="Default textarea..." 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large">Large</Label>
            <Textarea 
              id="large"
              size="lg" 
              placeholder="Large textarea..." 
            />
          </div>
        </div>
      </div>

      {/* Resize Variants */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Resize Variants</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="resize-none">None</Label>
            <Textarea 
              id="resize-none"
              resize="none" 
              placeholder="Cannot resize..." 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-vertical">Vertical</Label>
            <Textarea 
              id="resize-vertical"
              resize="vertical" 
              placeholder="Resize vertically..." 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-horizontal">Horizontal</Label>
            <Textarea 
              id="resize-horizontal"
              resize="horizontal" 
              placeholder="Resize horizontally..." 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resize-both">Both</Label>
            <Textarea 
              id="resize-both"
              resize="both" 
              placeholder="Resize both ways..." 
            />
          </div>
        </div>
      </div>

      {/* Auto-resize Feature */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Auto-resize</h4>
        <div className="space-y-2">
          <Label htmlFor="auto-resize">Auto-expanding textarea</Label>
          <Textarea 
            id="auto-resize"
            autoResize
            minRows={2}
            maxRows={8}
            placeholder="Start typing and watch me grow..."
            value={autoResizeValue}
            onChange={(e) => setAutoResizeValue(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            Min 2 rows, max 8 rows. Try typing multiple lines!
          </p>
        </div>
      </div>

      {/* Character Count */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Character Count</h4>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="char-count">With character counter</Label>
            <Textarea 
              id="char-count"
              characterCount
              placeholder="Type something..."
              value={charCountValue}
              onChange={(e) => setCharCountValue(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="char-limit">With character limit (100)</Label>
            <Textarea 
              id="char-limit"
              characterCount
              maxLength={100}
              placeholder="Maximum 100 characters..."
            />
          </div>
        </div>
      </div>

      {/* Form Integration */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Form Integration</h4>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            alert(`Form submitted with: "${formValue}"`)
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="form-textarea">Feedback</Label>
            <Textarea 
              id="form-textarea"
              name="feedback"
              required
              placeholder="Please provide your feedback..."
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              characterCount
              maxLength={500}
            />
            <p className="text-sm text-muted-foreground">
              Required field. Maximum 500 characters.
            </p>
          </div>
          <Button type="submit">Submit Feedback</Button>
        </form>
      </div>

      {/* Advanced Examples */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Advanced Examples</h4>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="auto-char">Auto-resize + Character count</Label>
            <Textarea 
              id="auto-char"
              autoResize
              characterCount
              maxLength={200}
              minRows={1}
              maxRows={5}
              placeholder="Auto-expanding with character limit..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly">Read-only</Label>
            <Textarea 
              id="readonly"
              readOnly
              value="This is a read-only textarea with some preset content. You cannot edit this text, but you can select and copy it."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="validation">With validation state</Label>
            <Textarea 
              id="validation"
              className="border-destructive focus-visible:ring-destructive"
              placeholder="This textarea shows an error state..."
            />
            <p className="text-sm text-destructive">
              Please provide a valid description.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Test */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Performance Test</h4>
        <div className="space-y-2">
          <Label htmlFor="performance">Large content handling</Label>
          <Textarea 
            id="performance"
            autoResize
            minRows={3}
            maxRows={10}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <p className="text-sm text-muted-foreground">
            Pre-filled with large content to test auto-resize performance.
          </p>
        </div>
      </div>
    </div>
  )
}