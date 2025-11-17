import { confetti } from "@tsparticles/confetti"
import { useLocation, useNavigate } from "react-router"

const SHOW_RESUME = true
const SHOW_LINKEDIN = true

const cssVar = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name)
}

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (location.pathname !== "/") {
      navigate("/")
    } else {
      const confettiConfig = {
        colors: [cssVar("--primary"), cssVar("--foreground")],
        particleCount: 150,
        spread: 120,
        startVelocity: 60
      }

      await confetti({
        ...confettiConfig,
        angle: 40,
        origin: {
          x: -0.1,
          y: 0.5
        }
      })

      await confetti({
        ...confettiConfig,
        angle: 140,
        origin: {
          x: 1.1,
          y: 0.5
        }
      })
    }
  }

  return (
    <header className="header sticky top-0 z-40 flex w-full items-center justify-center border-b-2 bg-(--background) px-3 py-4">
      <div className="content flex w-full max-w-4xl items-center justify-between gap-3 sm:gap-8">
        <button
          className="cursor-pointer text-lg font-semibold hover:text-(--primary)"
          onClick={handleClick}
        >
          <span className="visible max-sm:hidden">Jan Cernik</span>
          <span className="visible sm:hidden">JC</span>
        </button>
        <nav className="flex items-center gap-4 sm:gap-8">
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
