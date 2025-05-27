"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  attribute?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => {},
})

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = true,
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    if (!enableSystem) {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
    }
  }, [theme, enableSystem])

  useEffect(() => {
    const root = window.document.documentElement

    function add(name: string) {
      root.classList.add(name)
    }

    function remove(name: string) {
      root.classList.remove(name)
    }

    if (attribute === "class") {
      remove("light")
      remove("dark")
      if (theme === "system") {
        add(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      } else if (theme) {
        add(theme)
      }
    }
  }, [theme, attribute])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
