import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { type Plugin, defineConfig } from "vite"
import { vitePrerenderPlugin } from "vite-prerender-plugin"

// https://github.com/preactjs/vite-prerender-plugin/issues

function forceExitPlugin(): Plugin {
  return {
    apply: "build",
    closeBundle() {
      process.exit(0)
    },
    name: "force-exit-after-prerender"
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...vitePrerenderPlugin({
      additionalPrerenderRoutes: ["/404"],
      renderTarget: "#root"
    }),
    forceExitPlugin()
  ],
  server: {
    port: 5200
  }
})
