'use client'

import { useState } from 'react'
import { Moon, Sun, Github, ExternalLink } from 'lucide-react'

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">
            <span className="text-primary">LightMind</span> UI
          </h2>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built on</span>
            <a 
              href="https://ui.shadcn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              shadcn/ui
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <a
            href="/examples"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Examples
          </a>
          <a
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://github.com/yourusername/lightmind-ui-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
      </div>
    </header>
  )
}