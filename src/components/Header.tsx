import { ButtonLink } from "./Button";
import { Link } from "react-router";

const linkedinUrl = "https://www.linkedin.com/in/jan-cernik";
const githubUrl = "https://github.com/jancernik";
const cvUrl = "https://cv.jancernik.com";

function Header() {
  return (
    <header className="header p-4 border-b-2 flex items-center justify-center w-full">
      <div className="content gap-3 flex w-full max-w-5xl justify-between items-center">
        <Link to="/" className="mr-auto">
          <h1 className="text-3xl font-medium text-(--primary)">Jan Cernik</h1>
        </Link>
        <ButtonLink href={linkedinUrl}>LinkedIn</ButtonLink>
        <ButtonLink href={cvUrl}>CV</ButtonLink>
        <ButtonLink target="_blank" href={githubUrl}>
          GitHub
        </ButtonLink>
      </div>
    </header>
  );
}

export default Header;
