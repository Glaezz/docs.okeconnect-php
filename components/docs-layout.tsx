"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Menu, Search } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center px-4 md:px-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0 fixed">
              <LeftSidebar />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
              <path d="M12 3v6" />
            </svg>
            <span>glaezz/okeconnect-php</span>
          </Link>
          {/* <nav className="hidden md:flex md:gap-2 md:ml-4">
            <Link
              href="/docs"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/docs") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Docs
            </Link>
            <Link
              href="/components"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/components") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/blocks") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Blocks
            </Link>
            <Link
              href="/charts"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/charts") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Charts
            </Link>
            <Link
              href="/themes"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/themes") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Themes
            </Link>
            <Link
              href="/colors"
              className={`px-3 py-2 text-sm font-medium ${pathname.includes("/colors") ? "text-foreground" : "text-muted-foreground"}`}
            >
              Colors
            </Link>
          </nav> */}
          <div className="ml-auto flex items-center gap-2">
            {/* <div className="hidden md:flex">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-64 rounded-md bg-background pl-8 md:w-80 lg:w-96"
                />
              </div>
            </div> */}
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden border-r md:block w-64 shrink-0">
          <div className="h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
            <LeftSidebar />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl py-6 md:py-10">{children}</div>
        </main>

        {/* Right Sidebar - Hidden on mobile */}
        {/* <div className="hidden lg:block w-64 shrink-0 border-l overflow-hidden">
          <div className="h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
            <RightSidebar />
          </div>
        </div> */}
      </div>
    </div>
  )
}
