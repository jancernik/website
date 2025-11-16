import { type ReactNode } from "react"

import { cn } from "../utils/helpers"

interface Props {
  children: ReactNode
  className?: string
  title: string
}

function Section({ children, className, title }: Props) {
  return (
    <section className={cn(["space-y-4", className])}>
      <h3 className="border-b-2 border-(--foreground) pb-3 text-2xl font-bold">{title}</h3>
      <div className="w-full space-y-3 leading-relaxed">{children}</div>
    </section>
  )
}

export default Section
