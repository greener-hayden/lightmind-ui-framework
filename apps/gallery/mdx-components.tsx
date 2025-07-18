import type { MDXComponents } from 'mdx/types'
import * as MDXComponentLib from '@/lib/mdx-components/src'
import * as UIComponents from '@lightmind/ui'
import * as demos from '@/components/demos'
import { PreviewComponent } from '@/components/preview-registry'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // HTML element overrides
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-medium mb-3 mt-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-medium mb-2 mt-4">{children}</h4>,
    p: ({ children }: any) => <p className="mb-4 text-base leading-relaxed">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
    li: ({ children }: any) => <li className="text-base">{children}</li>,
    code: ({ children, ...props }: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>,
    pre: ({ children, ...props }: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 border" {...props}>{children}</pre>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-muted-foreground/20 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-border">{children}</table>
      </div>
    ),
    thead: ({ children }: any) => <thead className="bg-muted/50">{children}</thead>,
    tbody: ({ children }: any) => <tbody className="divide-y divide-border">{children}</tbody>,
    tr: ({ children }: any) => <tr>{children}</tr>,
    th: ({ children }: any) => <th className="px-4 py-2 text-left font-medium">{children}</th>,
    td: ({ children }: any) => <td className="px-4 py-2">{children}</td>,
    hr: () => <hr className="my-8 border-border" />,
    
    // Spread all MDX components from the library
    ...MDXComponentLib,
    
    // Spread all UI components
    ...UIComponents,
    
    // Spread all demo components
    ...demos,
    
    // Include preview component
    PreviewComponent,
    
    // Merge with any passed components
    ...components,
  }
}