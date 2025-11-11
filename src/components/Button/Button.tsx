import type { ReactNode } from "react"

import { type ButtonVariant, getButtonClasses } from "./buttonStyles"

interface Props {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: "button" | "reset" | "submit"
  variant?: ButtonVariant
}

export function Button({
  children,
  className = "",
  disabled,
  onClick,
  type,
  variant = "secondary"
}: Props) {
  return (
    <button
      className={getButtonClasses(variant, className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
