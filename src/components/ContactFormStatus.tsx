import { cn } from "../utils/helpers"

export type FormStatus = "error" | "idle" | "loading" | "success"
type Props = { status: FormStatus }

const baseContainerClasses =
  "my-8 flex h-full flex-col items-center justify-center space-y-2 rounded border-2 p-6 text-center"

export default function ContactFormStatus({ status }: Props) {
  switch (status) {
    case "idle":
      return null
    case "loading":
      return null
    case "success":
      return (
        <div className={cn([baseContainerClasses, "border-(--primary)"])}>
          <p className="text-xl font-medium text-(--primary)">{`Message sent!`}</p>
          <p className="text-base">{`I'll get back to you as soon as possible.`}</p>
        </div>
      )
    case "error":
      return (
        <div className={cn([baseContainerClasses, "border-(--foreground)"])}>
          <p className="text-xl font-medium">{`Sorry, there was an error!`}</p>
          <p className="text-base">{`Try emailing me directly instead:`}</p>
          <a
            className="text-base font-medium text-(--primary) hover:underline"
            href="mailto:jancernik12@gmail.com"
          >
            jancernik12@gmail.com
          </a>
        </div>
      )
    default:
      return null
  }
}
