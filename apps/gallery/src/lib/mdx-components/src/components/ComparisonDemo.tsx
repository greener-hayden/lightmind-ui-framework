'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@lightmind/ui'
import { cn } from '@/lib/utils'

interface ComparisonItem {
  name: string
  description?: string
  component: React.ReactNode
  code?: string
  pros?: string[]
  cons?: string[]
  recommended?: boolean
}

interface ComparisonDemoProps {
  title?: string
  description?: string
  comparisons: ComparisonItem[]
  className?: string
  layout?: 'side-by-side' | 'tabs' | 'carousel'
  showCode?: boolean
  showProsAndCons?: boolean
}

export function ComparisonDemo({
  title = "Comparison",
  description = "Compare different approaches and implementations",
  comparisons,
  className,
  layout = 'side-by-side',
  showCode = true,
  showProsAndCons = true
}: ComparisonDemoProps) {
  const [activeTab, setActiveTab] = useState(0)

  const renderSideBySide = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {comparisons.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
            {item.recommended && (
              <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                Recommended
              </div>
            )}
          </div>
          
          {item.description && (
            <p className="text-xs text-muted-foreground">{item.description}</p>
          )}
          
          <div className="p-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/20">
            <div className="flex items-center justify-center">
              {item.component}
            </div>
          </div>
          
          {showProsAndCons && (item.pros || item.cons) && (
            <div className="space-y-2">
              {item.pros && (
                <div className="space-y-1">
                  <div className="text-xs font-medium text-green-700">Pros:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {item.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start gap-1">
                        <span className="text-green-600 mt-0.5">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.cons && (
                <div className="space-y-1">
                  <div className="text-xs font-medium text-red-700">Cons:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {item.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-start gap-1">
                        <span className="text-red-600 mt-0.5">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          {showCode && item.code && (
            <div className="space-y-2">
              <div className="text-xs font-medium text-muted-foreground">Code:</div>
              <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                <code>{item.code}</code>
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  const renderTabs = () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {comparisons.map((item, index) => (
          <Button
            key={index}
            variant={activeTab === index ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab(index)}
            className="relative"
          >
            {item.name}
            {item.recommended && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
            )}
          </Button>
        ))}
      </div>
      
      <div className="space-y-4">
        {comparisons[activeTab] && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-foreground">
                {comparisons[activeTab].name}
              </h4>
              {comparisons[activeTab].recommended && (
                <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                  Recommended
                </div>
              )}
            </div>
            
            {comparisons[activeTab].description && (
              <p className="text-xs text-muted-foreground">
                {comparisons[activeTab].description}
              </p>
            )}
            
            <div className="p-6 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/20">
              <div className="flex items-center justify-center">
                {comparisons[activeTab].component}
              </div>
            </div>
            
            {showProsAndCons && (comparisons[activeTab].pros || comparisons[activeTab].cons) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {comparisons[activeTab].pros && (
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-green-700">Pros:</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {comparisons[activeTab].pros!.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start gap-1">
                          <span className="text-green-600 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {comparisons[activeTab].cons && (
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-red-700">Cons:</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {comparisons[activeTab].cons!.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start gap-1">
                          <span className="text-red-600 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {showCode && comparisons[activeTab].code && (
              <div className="space-y-2">
                <div className="text-xs font-medium text-muted-foreground">Code:</div>
                <pre className="bg-muted p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{comparisons[activeTab].code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {layout === 'side-by-side' && renderSideBySide()}
        {layout === 'tabs' && renderTabs()}
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Comparison Summary</h4>
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <div className="font-medium text-foreground">{item.name}</div>
                {item.recommended && (
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded">
                    Recommended
                  </div>
                )}
                {item.description && (
                  <div className="text-muted-foreground">- {item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ComparisonDemo