import "./styles/app.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import App from "./App.tsx"
import Home from "./views/Home"
import NotFound from "./views/NotFound.tsx"

const router = createBrowserRouter([
  {
    children: [
      { Component: Home, index: true },
      { Component: NotFound, path: "*" }
    ],
    Component: App
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
