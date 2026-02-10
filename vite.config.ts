import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { vitePrerenderPlugin } from "vite-prerender-plugin"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      additionalPrerenderRoutes: ["/404"],
      renderTarget: "#root"
    })
  ],
  server: {
    port: 5200
  }
})
