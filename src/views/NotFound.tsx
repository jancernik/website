import { ButtonRouterLink } from "../components/Button"

function NotFound() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4 p-6"
      id="main-content"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-(--primary)">404</h1>
        <h2 className="mt-3 text-2xl font-medium">Page Not Found</h2>
        <p className="mt-2 text-base opacity-70">{`The page you're looking for doesn't exist.`}</p>
      </div>
      <ButtonRouterLink className="mt-3" to={{ pathname: "/" }}>
        Go Home
      </ButtonRouterLink>
    </div>
  )
}

export default NotFound
