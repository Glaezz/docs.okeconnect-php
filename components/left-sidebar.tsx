"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LeftSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex flex-col bg-background py-4 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="px-3">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Getting Started</h2>
        <div className="space-y-1">
          <Link
            href="/introduction"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/introduction")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Introduction
          </Link>
          <Link
            href="/installation"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/installation")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Installation
          </Link>  
        </div>
      </div>

      <div className="px-3 py-2">
        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">Installation</h2>
        <div className="space-y-1">
          <Link
            href="/installation/laravel"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/installation/laravel")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Laravel
          </Link>
          <Link
            href="/installation/php"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/installation/php")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            PHP Native
          </Link>  
        </div>
      </div>

      <div className="px-3 py-2">
        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">Core Function</h2>
        <div className="space-y-1">
          <Link
            href="/core/get-balance"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/core/get-balance") 
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Get Balance
          </Link>
          <Link
            href="/core/create-transaction"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/core/create-transaction")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Create Transaction
          </Link> 
          <Link
            href="/core/get-transaction"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/core/get-transaction")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Get Transaction Status
          </Link> 
          <Link
            href="/core/callback-handler"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/core/callback-handler")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Callback Handler
          </Link>  
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">Development</h2>
        <div className="space-y-1">
          <Link
            href="/development/testing"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/development/testing") 
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Testing
          </Link>
          <Link
            href="/development/example"
            className={`block rounded-md px-4 py-2 text-sm font-medium ${
              isActive("/development/example")
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Example
          </Link>  
        </div>
      </div>
    </div>

  )
}
