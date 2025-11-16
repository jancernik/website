import { forwardRef, type ReactNode } from "react"

import { type ButtonVariant, getButtonClasses } from "./buttonStyles"

interface Props {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: "button" | "reset" | "submit"
  variant?: ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className = "", disabled, onClick, type, variant = "secondary" },
  ref
) {
  return (
    <button
      className={getButtonClasses(variant, className)}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  )
})

export default Button
