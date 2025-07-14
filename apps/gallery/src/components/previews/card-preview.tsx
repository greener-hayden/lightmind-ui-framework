'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CardPreview() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            A simple card component with header, content, and footer areas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is the main content area of the card. You can put any content here.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export function CardVariantsPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Simple Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Basic card with minimal content.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Featured Card</CardTitle>
          <CardDescription>With description and footer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">More detailed card with additional elements.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </Card>

      <Card className="bg-muted">
        <CardHeader>
          <CardTitle>Highlighted Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Card with custom background styling.</p>
        </CardContent>
      </Card>
    </div>
  )
}