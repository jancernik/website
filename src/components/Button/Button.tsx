import { getButtonClasses, type ButtonVariant } from "./buttonStyles"
import type { ReactNode } from "react"

interface Props {
  onClick?: () => void
  variant?: ButtonVariant
  children: ReactNode
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
}

export function Button({
  onClick,
  type,
  disabled,
  variant = "secondary",
  className = "",
  children
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={getButtonClasses(variant, className)}
    >
      {children}
    </button>
  )
}

export default Button
