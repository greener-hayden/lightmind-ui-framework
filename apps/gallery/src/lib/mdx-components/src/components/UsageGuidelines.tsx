'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lightmind/ui'
import { CheckCircle2, AlertCircle, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

interface UsageGuidelinesProps {
  dos?: string[]
  donts?: string[]
  accessibility?: string[]
  className?: string
}

export function UsageGuidelines({
  dos = [],
  donts = [],
  accessibility = [],
  className
}: UsageGuidelinesProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {dos.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-green-700 dark:text-green-300">
              ✓ Do's
            </CardTitle>
            <CardDescription>
              Best practices for using this component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {donts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-red-700 dark:text-red-300">
              ✗ Don'ts
            </CardTitle>
            <CardDescription>
              Common mistakes to avoid
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {accessibility.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Accessibility</CardTitle>
            <CardDescription>
              Guidelines for making this component accessible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {accessibility.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default UsageGuidelines