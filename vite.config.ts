import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { type Plugin, defineConfig } from "vite"
import { vitePrerenderPlugin } from "vite-prerender-plugin"
import { lqipPlugin } from "./plugins/lqip"

// https://github.com/preactjs/vite-prerender-plugin/issues

function forceExitPlugin(): Plugin {
  return {
    apply: "build",
    closeBundle() {
      process.exit(0)
    },
    name: "force-exit-after-prerender"
  } as unknown as Plugin
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lqipPlugin(),
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
