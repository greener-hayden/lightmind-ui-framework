"use client"

import * as React from "react"
import { Textarea, Label, Button } from "@lightmind/ui"
import { 
  Send, 
  AlertCircle, 
  Info,
  MessageSquare,
  FileText,
  User,
  Mail,
  Heart,
  Star,
  Code,
  Hash,
  AtSign,
  Bold,
  Italic,
  List,
  Link,
  Image,
  Smile
} from "lucide-react"

export function TextareaDemo() {
  const [comment, setComment] = React.useState("")
  const [bio, setBio] = React.useState("")
  const [feedback, setFeedback] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [notes, setNotes] = React.useState("")
  const [markdown, setMarkdown] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setComment("")
      setFeedback("")
    }, 2000)
  }

  const validateBio = (value: string) => {
    if (!value) {
      setErrors(prev => ({ ...prev, bio: "Bio is required" }))
    } else if (value.length < 10) {
      setErrors(prev => ({ ...prev, bio: "Bio must be at least 10 characters" }))
    } else if (value.length > 500) {
      setErrors(prev => ({ ...prev, bio: "Bio must be less than 500 characters" }))
    } else {
      setErrors(prev => ({ ...prev, bio: "" }))
    }
  }

  return (
    <div className="space-y-8">
      {/* Basic Textarea */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Basic Textarea</h3>
        <p className="text-muted-foreground mb-6">Standard textarea with various configurations</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label htmlFor="basic-textarea">Basic Textarea</Label>
            <Textarea 
              id="basic-textarea"
              placeholder="Type your message here..."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rows-textarea">Custom Rows</Label>
            <Textarea 
              id="rows-textarea"
              placeholder="This textarea has 5 rows..."
              rows={5}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="value-textarea">With Default Value</Label>
            <Textarea 
              id="value-textarea"
              defaultValue="This textarea comes with a default value that you can edit."
            />
          </div>
        </div>
      </div>

      {/* Textarea Sizes */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Textarea Sizes</h3>
        <p className="text-muted-foreground mb-6">Different size variations for various use cases</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label size="sm">Small Textarea</Label>
            <Textarea 
              size="sm"
              placeholder="Small size textarea..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>Default Textarea</Label>
            <Textarea 
              placeholder="Default size textarea..."
            />
          </div>
          
          <div className="space-y-2">
            <Label size="lg">Large Textarea</Label>
            <Textarea 
              size="lg"
              placeholder="Large size textarea..."
            />
          </div>
        </div>
      </div>

      {/* Textarea States */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Textarea States</h3>
        <p className="text-muted-foreground mb-6">Different states for various scenarios</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label>Default State</Label>
            <Textarea placeholder="Default textarea..." />
          </div>
          
          <div className="space-y-2">
            <Label>Focused State</Label>
            <Textarea placeholder="Click to see focus state..." />
          </div>
          
          <div className="space-y-2">
            <Label>Disabled State</Label>
            <Textarea 
              placeholder="This textarea is disabled..." 
              disabled 
              value="You cannot edit this content"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Read-only State</Label>
            <Textarea 
              value="This is read-only content. You can select and copy but not edit."
              readOnly
            />
          </div>
          
          <div className="space-y-2">
            <Label>Error State</Label>
            <Textarea 
              placeholder="Invalid input..." 
              className="border-destructive focus-visible:ring-destructive"
              aria-invalid="true"
              aria-describedby="error-message"
            />
            <p id="error-message" className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              This field contains an error
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Success State</Label>
            <Textarea 
              placeholder="Valid input..." 
              className="border-green-500 focus-visible:ring-green-500"
              defaultValue="This looks good!"
            />
            <p className="text-sm text-green-600">Looking good!</p>
          </div>
        </div>
      </div>

      {/* Resize Behavior */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Resize Behavior</h3>
        <p className="text-muted-foreground mb-6">Control how users can resize the textarea</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label>Vertical Resize (Default)</Label>
            <Textarea 
              resize="vertical"
              placeholder="You can resize this vertically..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>Horizontal Resize</Label>
            <Textarea 
              resize="horizontal"
              placeholder="You can resize this horizontally..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>Both Directions</Label>
            <Textarea 
              resize="both"
              placeholder="You can resize this in both directions..."
            />
          </div>
          
          <div className="space-y-2">
            <Label>No Resize</Label>
            <Textarea 
              resize="none"
              placeholder="This textarea cannot be resized..."
            />
          </div>
        </div>
      </div>

      {/* Character Count */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Character Count & Limits</h3>
        <p className="text-muted-foreground mb-6">Show character count and enforce limits</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label>With Character Count</Label>
            <Textarea 
              characterCount
              placeholder="Start typing to see character count..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>With Character Limit</Label>
            <Textarea 
              characterCount
              maxLength={100}
              placeholder="Maximum 100 characters..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Try typing more than 100 characters
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Tweet-style Limit</Label>
            <Textarea 
              characterCount
              maxLength={280}
              placeholder="What's happening?"
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Auto-resize */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Auto-resize Functionality</h3>
        <p className="text-muted-foreground mb-6">Textarea that grows with content</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label>Basic Auto-resize</Label>
            <Textarea 
              autoResize
              placeholder="This textarea will grow as you type..."
            />
            <p className="text-sm text-muted-foreground">
              The textarea automatically adjusts its height
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Auto-resize with Min/Max Rows</Label>
            <Textarea 
              autoResize
              minRows={2}
              maxRows={6}
              placeholder="Min 2 rows, max 6 rows..."
            />
            <p className="text-sm text-muted-foreground">
              Grows between 2 and 6 rows
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Auto-resize with Character Limit</Label>
            <Textarea 
              autoResize
              characterCount
              maxLength={500}
              minRows={3}
              maxRows={8}
              placeholder="Auto-resize with 500 character limit..."
            />
          </div>
        </div>
      </div>

      {/* With Helper Text */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">With Helper Text</h3>
        <p className="text-muted-foreground mb-6">Textareas with hints and descriptions</p>
        
        <div className="grid gap-4 max-w-2xl">
          <div className="space-y-2">
            <Label htmlFor="helper-textarea">Description</Label>
            <Textarea 
              id="helper-textarea"
              placeholder="Enter a detailed description..."
            />
            <p className="text-sm text-muted-foreground flex items-start gap-1">
              <Info className="h-3 w-3 mt-0.5" />
              Provide as much detail as possible
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="optional-textarea">
              Additional Notes
              <span className="text-muted-foreground text-sm font-normal ml-2">(Optional)</span>
            </Label>
            <Textarea 
              id="optional-textarea"
              placeholder="Any additional information..."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="required-textarea">
              Feedback
              <span className="text-destructive ml-1">*</span>
            </Label>
            <Textarea 
              id="required-textarea"
              placeholder="Your feedback is important to us..."
              required
              aria-required="true"
            />
            <p className="text-sm text-muted-foreground">
              Required field
            </p>
          </div>
        </div>
      </div>

      {/* Real-world Examples */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Real-world Examples</h3>
        <p className="text-muted-foreground mb-6">Common textarea patterns in applications</p>
        
        <div className="space-y-8">
          {/* Comment Box */}
          <div className="max-w-2xl">
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Comment Box
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="comment">Leave a comment</Label>
                <Textarea 
                  id="comment"
                  autoResize
                  minRows={3}
                  maxRows={10}
                  placeholder="What are your thoughts?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button type="button" variant="ghost" size="sm">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Image className="h-4 w-4" />
                  </Button>
                </div>
                <Button type="submit" disabled={!comment || isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  Post Comment
                </Button>
              </div>
            </form>
          </div>

          {/* Bio Field */}
          <div className="max-w-2xl">
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Bio
            </h4>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio"
                characterCount
                maxLength={500}
                rows={4}
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value)
                  validateBio(e.target.value)
                }}
                onBlur={() => validateBio(bio)}
                className={errors.bio ? "border-destructive focus-visible:ring-destructive" : ""}
                aria-invalid={!!errors.bio}
                aria-describedby={errors.bio ? "bio-error" : undefined}
              />
              {errors.bio && (
                <p id="bio-error" className="text-sm text-destructive">{errors.bio}</p>
              )}
              <p className="text-sm text-muted-foreground">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="max-w-2xl">
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Feedback Form
            </h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback-type">Feedback Type</Label>
                <div className="flex gap-2 mb-4">
                  <Button type="button" variant="outline" size="sm">Bug Report</Button>
                  <Button type="button" variant="outline" size="sm">Feature Request</Button>
                  <Button type="button" variant="outline" size="sm">General Feedback</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback-details">Details</Label>
                <Textarea 
                  id="feedback-details"
                  autoResize
                  minRows={4}
                  placeholder="Please provide detailed feedback..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback-email">Email (Optional)</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea 
                    id="feedback-email"
                    className="pl-10 min-h-[40px]"
                    rows={1}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </div>

          {/* Code Editor */}
          <div className="max-w-2xl">
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Code Editor
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="code-editor">Code</Label>
                <select className="text-sm border rounded px-2 py-1">
                  <option>JavaScript</option>
                  <option>TypeScript</option>
                  <option>Python</option>
                  <option>HTML</option>
                  <option>CSS</option>
                </select>
              </div>
              <Textarea 
                id="code-editor"
                className="font-mono text-sm"
                rows={10}
                placeholder="// Enter your code here..."
                style={{ tabSize: 2 }}
              />
            </div>
          </div>

          {/* Issue Description */}
          <div className="max-w-2xl">
            <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Issue Description
            </h4>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="issue-title">Title</Label>
                <input 
                  id="issue-title"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Brief description of the issue"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="issue-description">Description</Label>
                <Textarea 
                  id="issue-description"
                  autoResize
                  minRows={5}
                  characterCount
                  maxLength={2000}
                  placeholder="## Problem&#10;&#10;Describe the issue...&#10;&#10;## Steps to Reproduce&#10;&#10;1. Step one&#10;2. Step two&#10;&#10;## Expected Behavior&#10;&#10;What should happen...&#10;&#10;## Actual Behavior&#10;&#10;What actually happens..."
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">Create Issue</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Markdown Editor */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Markdown Editor</h3>
        <p className="text-muted-foreground mb-6">Textarea with markdown preview</p>
        
        <div className="max-w-4xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Write</Label>
                <div className="flex gap-1">
                  <Button type="button" variant="ghost" size="sm">
                    <Bold className="h-3 w-3" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Italic className="h-3 w-3" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <List className="h-3 w-3" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Link className="h-3 w-3" />
                  </Button>
                  <Button type="button" variant="ghost" size="sm">
                    <Code className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Textarea 
                autoResize
                minRows={10}
                placeholder="Write your markdown here..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="font-mono text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Preview</Label>
              <div className="min-h-[240px] rounded-md border bg-muted/50 p-4">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {markdown ? (
                    <p className="text-muted-foreground whitespace-pre-wrap">{markdown}</p>
                  ) : (
                    <p className="text-muted-foreground">Nothing to preview</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Integration */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Form Integration</h3>
        <p className="text-muted-foreground mb-6">Textarea in a complete form context</p>
        
        <div className="max-w-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="form-name">Name</Label>
              <input 
                id="form-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <input 
                id="form-email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="form-subject">Subject</Label>
              <input 
                id="form-subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="How can we help?"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="form-message">Message</Label>
              <Textarea 
                id="form-message"
                autoResize
                minRows={4}
                characterCount
                maxLength={1000}
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="form-attachments">Additional Information</Label>
              <Textarea 
                id="form-attachments"
                rows={3}
                placeholder="Any other details you'd like to share? (Optional)"
              />
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">Send Message</Button>
              <Button type="button" variant="outline">Save Draft</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Advanced Patterns */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Advanced Patterns</h3>
        <p className="text-muted-foreground mb-6">Complex textarea interactions</p>
        
        <div className="grid gap-6 max-w-2xl">
          <div className="space-y-2">
            <Label>With Emoji Picker</Label>
            <div className="relative">
              <Textarea 
                placeholder="Type a message..."
                className="pr-12"
              />
              <Button 
                type="button"
                variant="ghost" 
                size="sm"
                className="absolute bottom-2 right-2"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>With Mention Support</Label>
            <Textarea 
              placeholder="Type @ to mention someone..."
              className="min-h-[100px]"
            />
            <p className="text-sm text-muted-foreground">
              Use @ to mention users and # for tags
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Multi-language Support</Label>
            <Textarea 
              placeholder="支持多语言输入..."
              dir="auto"
              className="min-h-[100px]"
            />
            <p className="text-sm text-muted-foreground">
              Automatically detects text direction
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}