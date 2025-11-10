import { type AnchorHTMLAttributes } from "react";
import { getButtonClasses, type ButtonVariant } from "./buttonStyles";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

function ButtonLink({
  className = "",
  variant = "secondary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClasses(variant, className)} {...props}>
      {children}
    </a>
  );
}

export default ButtonLink;
