import type { MDXComponents } from 'mdx/types'
import { 
  Button, 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Badge,
  Input,
  Label,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Alert,
  AlertDescription,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
  AccessMatrix,
  StatCard
} from '@lightmind/ui'
import { Copy, Check, Eye, Code, ExternalLink, Github } from 'lucide-react'

// Custom components for MDX
function CodeBlock({ children, ...props }: any) {
  return (
    <div className="relative group">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto border">
        <code className="text-sm font-mono" {...props}>
          {children}
        </code>
      </pre>
    </div>
  )
}

function InlineCode({ children, ...props }: any) {
  return (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  )
}

function ComponentPreview({ children, ...props }: any) {
  return (
    <div className="p-8 bg-muted/30 rounded-lg border my-6 flex items-center justify-center gap-4 flex-wrap">
      {children}
    </div>
  )
}

function ApiTable({ data }: { data: Array<{ name: string; type: string; default?: string; description: string; required?: boolean }> }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((prop, index) => (
            <TableRow key={index}>
              <TableCell className="font-mono">
                {prop.name}
                {prop.required && <Badge variant="destructive" className="ml-2 text-xs">required</Badge>}
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">{prop.type}</TableCell>
              <TableCell className="font-mono text-sm">{prop.default || '-'}</TableCell>
              <TableCell className="text-sm">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function DosList({ items }: { items: string[] }) {
  return (
    <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
      <CardHeader>
        <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
          <Check className="w-5 h-5" />
          Do's
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function DontsList({ items }: { items: string[] }) {
  return (
    <Card className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
      <CardHeader>
        <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Don'ts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ExternalLink className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // HTML element overrides
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-2 mt-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mb-2 mt-4">{children}</h4>,
    p: ({ children }) => <p className="mb-4 text-base leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
    li: ({ children }) => <li className="text-base">{children}</li>,
    code: InlineCode,
    pre: CodeBlock,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-muted-foreground/20 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <Table>{children}</Table>
      </div>
    ),
    thead: ({ children }) => <TableHeader>{children}</TableHeader>,
    tbody: ({ children }) => <TableBody>{children}</TableBody>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    th: ({ children }) => <TableHead>{children}</TableHead>,
    td: ({ children }) => <TableCell>{children}</TableCell>,
    
    // LightMind UI Components
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Badge,
    Input,
    Label,
    Checkbox,
    RadioGroup,
    RadioGroupItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Switch,
    Textarea,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Popover,
    PopoverContent,
    PopoverTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Alert,
    AlertDescription,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Separator,
    AccessMatrix,
    StatCard,
    
    // Custom MDX components
    ComponentPreview,
    ApiTable,
    DosList,
    DontsList,
    
    // Icons
    Copy,
    Check,
    Eye,
    Code,
    ExternalLink,
    Github,
    
    ...components,
  }
}