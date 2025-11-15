import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  title: string
}

function Section({ children, title }: Props) {
  return (
    <section className="space-y-4">
      <h3 className="border-b-2 border-(--foreground) pb-3 text-2xl font-bold">{title}</h3>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </section>
  )
}

export default Section
