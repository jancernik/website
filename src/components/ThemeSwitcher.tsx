import { type KeyboardEvent, useEffect, useRef, useState } from "react"

import { Button } from "./Button"
import ThemeOption from "./ThemeOption"

type ThemeCategory = "dark" | "light" | "system"

const DARK_THEMES = [
  "classic",
  "kiwi",
  "ocean",
  "candy",
  "forest",
  "night",
  "slate",
  "copper",
  "black"
] as const

const LIGHT_THEMES = [
  "sunset",
  "lime",
  "arctic",
  "sepia",
  "mint",
  "sakura",
  "dawn",
  "lavender",
  "white"
] as const

const DEFAULT_DARK_THEME = "classic"
const DEFAULT_LIGHT_THEME = "sunset"

const isBrowser = typeof window !== "undefined"

function getInitialTheme(): string {
  if (!isBrowser) return DEFAULT_DARK_THEME
  const mode = getSavedMode()
  if (mode === "system") {
    const systemPref = getSystemPreference()
    return getSavedTheme(systemPref)
  }

  return getSavedTheme(mode)
}

function getSavedMode(): ThemeCategory {
  if (!isBrowser) return "system"
  const saved = localStorage.getItem("theme-mode") as ThemeCategory
  return saved || "system"
}

function getSavedTheme(category: "dark" | "light"): string {
  if (!isBrowser) return category === "dark" ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME
  const saved = localStorage.getItem(`theme-${category}`)
  return saved || (category === "dark" ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME)
}

function getSystemPreference(): "dark" | "light" {
  if (!isBrowser) return "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getThemeCategory(theme: string): "dark" | "light" {
  return (DARK_THEMES as readonly string[]).includes(theme) ? "dark" : "light"
}

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme)
  const [isOpen, setIsOpen] = useState(false)
  const [previewTheme, setPreviewTheme] = useState<null | string>(null)
  const [mode, setMode] = useState<ThemeCategory>(getSavedMode)

  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const activeTheme = previewTheme || currentTheme
  const themesToDisplay =
    mode === "system"
      ? getSystemPreference() === "dark"
        ? DARK_THEMES
        : LIGHT_THEMES
      : mode === "dark"
        ? DARK_THEMES
        : LIGHT_THEMES

  useEffect(() => {
    const category = getThemeCategory(currentTheme)
    localStorage.setItem(`theme-${category}`, currentTheme)
    localStorage.setItem("theme-mode", mode)
  }, [currentTheme, mode])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme)

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="${getComputedStyle(
          document.documentElement
        ).getPropertyValue("--background")}"/>
        <path d="M 61.5 25 V 54.4 Q 61.5 58 60.5 60.9 Q 59.5 63.8 57.5 65.8 Q 55.5 67.8 52.6 68.8 Q 49.7 69.8 46 69.8 Q 42.4 69.8 39.6 69.1 Q 36.8 68.4 34.2 66.9 L 37.7 62.3 Q 39.7 63.6 41.6 64.1 Q 43.5 64.6 45.6 64.6 Q 48.3 64.6 50.3 63.2 Q 52.3 61.8 52.3 58.7 V 31.9 H 43.5 V 25 Z"
        fill="${getComputedStyle(document.documentElement).getPropertyValue("--foreground")}"
        transform="translate(50, 50) scale(1.25) translate(-47.5, -47.5)"/>
      </svg>
    `

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement
    if (favicon) {
      favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`
    }
  }, [activeTheme])

  useEffect(() => {
    if (mode !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      const systemPref = e.matches ? "dark" : "light"
      const newTheme = getSavedTheme(systemPref)
      setCurrentTheme(newTheme)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [mode])

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      dropdownRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (previewTheme && isOpen) {
      const themeButton = document.querySelector(
        `[data-theme-name="${previewTheme}"]`
      ) as HTMLElement
      if (themeButton) {
        themeButton.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }
  }, [previewTheme, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setPreviewTheme(null)
      }
    }

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        setPreviewTheme(null)
        setTimeout(() => buttonRef.current?.focus(), 0)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleModeSwitch = (newMode: ThemeCategory) => {
    setMode(newMode)
    setPreviewTheme(null)

    if (newMode === "system") {
      const systemPref = getSystemPreference()
      const savedTheme = getSavedTheme(systemPref)
      setCurrentTheme(savedTheme)
    } else {
      const savedTheme = getSavedTheme(newMode)
      setCurrentTheme(savedTheme)
    }
  }

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName)
    setPreviewTheme(null)
    setMode(getThemeCategory(themeName))
    setIsOpen(false)
    setTimeout(() => buttonRef.current?.focus(), 0)
  }

  const handlePreview = (themeName: string) => {
    setPreviewTheme(themeName)
  }

  const handlePreviewEnd = () => {
    setPreviewTheme(null)
  }

  const handleDropdownKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const themes = Array.from(themesToDisplay)
    const referenceTheme = previewTheme || currentTheme
    const currentIndex = (themes as readonly string[]).indexOf(referenceTheme)

    switch (e.key) {
      case "Tab":
        setIsOpen(false)
        setPreviewTheme(null)
        break
      case "ArrowDown":
        e.preventDefault()
        if (currentIndex < themes.length - 1) {
          const nextTheme = themes[currentIndex + 1]
          setPreviewTheme(nextTheme)
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (currentIndex > 0) {
          const prevTheme = themes[currentIndex - 1]
          setPreviewTheme(prevTheme)
        }
        break
      case "Home":
        e.preventDefault()
        setPreviewTheme(themes[0])
        break
      case "End":
        e.preventDefault()
        setPreviewTheme(themes[themes.length - 1])
        break
      // case "ArrowLeft":
      //   e.preventDefault()
      //   if (mode === "dark") handleModeSwitch("system")
      //   else if (mode === "light") handleModeSwitch("dark")
      //   else if (mode === "system") handleModeSwitch("light")
      //   break
      // case "ArrowRight":
      //   e.preventDefault()
      //   if (mode === "dark") handleModeSwitch("light")
      //   else if (mode === "light") handleModeSwitch("system")
      //   else if (mode === "system") handleModeSwitch("dark")
      //   break
      case "Enter":
      case " ":
        e.preventDefault()
        if (previewTheme) {
          handleThemeChange(previewTheme)
        }
        break
    }
  }

  return (
    <div className="theme-switcher fixed right-4 bottom-4 z-50 min-w-30" ref={containerRef}>
      <Button
        className={isOpen ? "w-full bg-(--secondary-active)" : "w-full"}
        onClick={handleToggle}
        ref={buttonRef}
      >
        Theme
      </Button>
      {isOpen && (
        <div
          className="dropdown absolute bottom-full mb-2 w-full bg-(--background)"
          onKeyDown={handleDropdownKeyDown}
          ref={dropdownRef}
          role="dialog"
          tabIndex={-1}
        >
          <div className="tabs mb-6 hidden flex-col border-2 border-(--foreground)" role="tablist">
            <button
              aria-pressed={mode === "dark"}
              className={`flex-1 cursor-pointer px-4.5 py-2 text-sm font-medium uppercase ${
                mode === "dark"
                  ? "bg-(--primary-hover) text-(--primary-foreground)"
                  : "bg-(--secondary) text-(--foreground) hover:bg-(--secondary-hover)"
              }`}
              onClick={() => handleModeSwitch("dark")}
              role="tab"
              tabIndex={-1}
            >
              dark
            </button>
            <button
              aria-pressed={mode === "light"}
              className={`flex-1 cursor-pointer border-t-2 border-(--foreground) px-4.5 py-2 text-sm font-medium uppercase ${
                mode === "light"
                  ? "bg-(--primary-hover) text-(--primary-foreground)"
                  : "bg-(--secondary) text-(--foreground) hover:bg-(--secondary-hover)"
              }`}
              onClick={() => handleModeSwitch("light")}
              role="tab"
              tabIndex={-1}
            >
              light
            </button>
            <button
              aria-pressed={mode === "system"}
              className={`flex-1 cursor-pointer border-t-2 border-(--foreground) px-4.5 py-2 text-sm font-medium uppercase ${
                mode === "system"
                  ? "bg-(--primary-hover) text-(--primary-foreground)"
                  : "bg-(--secondary) text-(--foreground) hover:bg-(--secondary-hover)"
              }`}
              onClick={() => handleModeSwitch("system")}
              role="tab"
              tabIndex={-1}
            >
              system
            </button>
          </div>
          <div
            className="theme-list max-h-120 overflow-y-auto rounded-xs border-2 border-(--foreground)"
            id="theme-list"
          >
            {themesToDisplay.map((theme) => (
              <ThemeOption
                isActive={theme === currentTheme}
                isPreviewing={theme === previewTheme}
                key={theme}
                onMouseEnter={handlePreview}
                onMouseLeave={handlePreviewEnd}
                onOptionClick={handleThemeChange}
                themeName={theme}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
