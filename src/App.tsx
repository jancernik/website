import { Outlet } from "react-router"

import Header from "./components/Header"
import ThemeSwitcher from "./components/ThemeSwitcher"

export default function RootLayout() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-1 focus:left-1/2 focus:z-50 focus:-translate-x-1/2 focus:border-2 focus:border-(--foreground) focus:bg-(--primary) focus:px-2 focus:py-0.5 focus:text-(--primary-foreground)"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Header />
      <Outlet />
      <ThemeSwitcher />
    </>
  )
}
