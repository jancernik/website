import { Link } from "react-router"

const SHOW_RESUME = true
const SHOW_LINKEDIN = true

function Header() {
  return (
    <header className="header sticky top-0 z-40 flex w-full items-center justify-center border-b-2 bg-(--background) px-6 py-4">
      <div className="content flex w-full max-w-4xl items-center justify-between gap-8">
        <Link className="text-lg font-semibold hover:text-(--primary)" to="/">
          Jan Cernik
        </Link>
        <nav className="flex items-center gap-8">
          {SHOW_RESUME && (
            <a
              className="text-base font-medium hover:text-(--primary)"
              href="https://resume.jancernik.com"
            >
              Resume
            </a>
          )}
          {SHOW_LINKEDIN && (
            <a
              className="text-base font-medium hover:text-(--primary)"
              href="https://www.linkedin.com/in/jan-cernik"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          )}
          <a
            className="text-base font-medium hover:text-(--primary)"
            href="https://github.com/jancernik"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
