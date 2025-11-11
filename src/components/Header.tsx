import { Link } from "react-router"

import { ButtonLink } from "./Button"

const linkedinUrl = "https://www.linkedin.com/in/jan-cernik"
const githubUrl = "https://github.com/jancernik"
const cvUrl = "https://cv.jancernik.com"

function Header() {
  return (
    <header className="header flex w-full items-center justify-center border-b-2 p-4">
      <div className="content flex w-full max-w-5xl items-center justify-between gap-3">
        <Link className="mr-auto" to="/">
          <h1 className="text-3xl font-medium text-(--primary)">Jan Cernik</h1>
        </Link>
        <ButtonLink href={linkedinUrl}>LinkedIn</ButtonLink>
        <ButtonLink href={cvUrl}>CV</ButtonLink>
        <ButtonLink href={githubUrl} target="_blank">
          GitHub
        </ButtonLink>
      </div>
    </header>
  )
}

export default Header
