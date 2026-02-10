import "./styles/app.css"

import { StrictMode } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

import App from "./App.tsx"
import Home from "./views/Home"
import NotFound from "./views/NotFound.tsx"

function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  )
}

if (typeof window !== "undefined") {
  import("react-dom/client").then(({ createRoot, hydrateRoot }) => {
    const root = document.getElementById("root")!

    if (import.meta.env.DEV) {
      createRoot(root).render(
        <StrictMode>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </StrictMode>
      )
    } else {
      hydrateRoot(
        root,
        <StrictMode>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </StrictMode>
      )
    }
  })
}

export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server")
  const { StaticRouter } = await import("react-router")
  const { parseLinks } = await import("vite-prerender-plugin/parse")

  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>
  )

  const links = parseLinks(html)

  return { html, links: new Set(links) }
}
