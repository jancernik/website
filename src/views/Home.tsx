import ContactForm from "../components/ContactForm"
import Project from "../components/Project"
import Section from "../components/Section"

function Home() {
  return (
    <main className="flex w-full flex-col items-center px-4 pt-12 pb-24" id="main-content">
      <div className="w-full max-w-4xl space-y-16">
        <Section title="Lorem ipsum">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique maxime asperiores
            perspiciatis ipsa, excepturi delectus, et alias optio doloribus sit sed accusantium
            ipsam repudiandae nam veritatis enim a adipisci ullam!
          </p>
        </Section>

        <Section title="Featured Project">
          <Project
            images={[
              {
                alt: "Revelo Screenshot 1",
                caption: "Infinite masonry layout in the homepage",
                src: "/src/images/revelo-1.png"
              },
              {
                alt: "Revelo Screenshot 2",
                caption: "Detail view of an image in a collection",
                src: "/src/images/revelo-2.png"
              }
            ]}
            links={[
              { href: "https://revelo.app", text: "View Live" },
              { href: "https://github.com/jancernik/revelo", text: "View Code" }
            ]}
            name="Revelo"
            tags={["Vue", "Express", "GSAP"]}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique maxime asperiores
            perspiciatis ipsa, excepturi delectus, et alias optio doloribus sit sed accusantium
            ipsam repudiandae nam veritatis enim a adipisci ullam!
          </Project>
        </Section>

        <Section className="flex flex-col items-center" title="Get in touch">
          <div className="flex flex-col items-center">
            <p className="pb-4 opacity-80">
              {`Have a question or want to work together? I'd love to hear from you.`}
            </p>
            <ContactForm />
          </div>
        </Section>
      </div>
    </main>
  )
}

export default Home
