import { Link, type LinkProps } from "react-router"

import { type ButtonVariant, getButtonClasses } from "./buttonStyles"

interface ButtonRouterLinkProps extends LinkProps {
  variant?: ButtonVariant
}

function ButtonRouterLink({
  className = "",
  variant = "secondary",
  ...props
}: ButtonRouterLinkProps) {
  return <Link className={getButtonClasses(variant, className)} {...props} />
}

export default ButtonRouterLink
