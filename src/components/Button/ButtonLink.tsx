import { type AnchorHTMLAttributes } from "react"

import { type ButtonVariant, getButtonClasses } from "./buttonStyles"

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
}

function ButtonLink({
  children,
  className = "",
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClasses(variant, className)} {...props}>
      {children}
    </a>
  )
}

export default ButtonLink
