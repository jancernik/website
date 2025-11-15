import { useEffect } from "react"

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const html = document.documentElement

    if (locked) {
      html.classList.add("scroll-locked")
    } else {
      html.classList.remove("scroll-locked")
    }

    return () => {
      html.classList.remove("scroll-locked")
    }
  }, [locked])
}
