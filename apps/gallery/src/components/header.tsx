'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Github, ExternalLink } from 'lucide-react'
import { StyleSwitcher } from './style-switcher'

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage and system preference
    const stored = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (stored === 'dark' || (!stored && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer">
            <span className="text-primary">LightMind</span> UI
          </Link>
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
          <Link
            href="/examples"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Examples
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <StyleSwitcher />
          <a
            href="https://github.com/HaydenGreener/lightmind-ui-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}