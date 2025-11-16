import { cn } from "../../utils/helpers"

export const buttonBaseClasses =
  "uppercase px-4.5 py-2 border-2 font-medium text-sm inline-block cursor-pointer disabled:opacity-60 disabled:cursor-progress rounded-xs"

export const buttonVariantClasses = {
  primary:
    "text-(--primary-foreground) border-(--foreground) bg-(--primary) hover:bg-(--primary-hover) active:bg-(--primary-active)",
  secondary:
    "text-(--foreground) border-(--foreground) bg-(--secondary) hover:bg-(--secondary-hover) active:bg-(--secondary-active)"
} as const

export type ButtonVariant = keyof typeof buttonVariantClasses

export function getButtonClasses(
  variant: ButtonVariant = "secondary",
  className: string = ""
): string {
  return cn([buttonBaseClasses, buttonVariantClasses[variant], className])
}
