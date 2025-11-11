import { Outlet } from "react-router"
import Header from "./components/Header"
import ThemeSwitcher from "./components/ThemeSwitcher"

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ThemeSwitcher />
    </>
  )
}
