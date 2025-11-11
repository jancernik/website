import "./styles/app.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import App from "./App.tsx"
import Home from "./views/Home"
import NotFound from "./views/NotFound.tsx"
// import Contact from "./views/Contact";

const router = createBrowserRouter([
  {
    children: [
      { Component: Home, index: true }
      // { path: "contact", Component: Contact },
    ],
    Component: App,
    ErrorBoundary: NotFound
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
