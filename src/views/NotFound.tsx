import { ButtonRouterLink } from "../components/Button"

function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl font-semibold">Page Not Found</h2>
      <ButtonRouterLink className="mt-2" to={{ pathname: "/" }}>
        Go Home
      </ButtonRouterLink>
    </div>
  )
}

export default NotFound
