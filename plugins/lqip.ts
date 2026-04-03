import { readdir } from "fs/promises"
import { join } from "path"
import sharp from "sharp"
import type { Plugin, ResolvedConfig } from "vite"

const VIRTUAL_ID = "virtual:lqip"
const RESOLVED_ID = "\0virtual:lqip"

export function lqipPlugin(): Plugin {
  let lqipData: Record<string, string> = {}

  async function generate(publicDir: string) {
    const imagesDir = join(publicDir, "images")
    let files: string[]
    try {
      files = await readdir(imagesDir)
    } catch {
      return
    }
    const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    const entries = await Promise.all(
      images.map(async (file) => {
        const buffer = await sharp(join(imagesDir, file))
          .resize(10)
          .blur()
          .jpeg({ quality: 50 })
          .toBuffer()
        return [file, `data:image/jpeg;base64,${buffer.toString("base64")}`] as const
      })
    )
    lqipData = Object.fromEntries(entries)
  }

  return {
    name: "vite-plugin-lqip",
    async configResolved(config: ResolvedConfig) {
      await generate(config.publicDir)
    },
    resolveId(id: string) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id: string) {
      if (id === RESOLVED_ID) {
        return `export const LQIP = ${JSON.stringify(lqipData)}`
      }
    }
  }
}
