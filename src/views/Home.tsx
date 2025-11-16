import ContactForm from "../components/ContactForm"
import Image from "../components/Image"
import Project from "../components/Project"
import Section from "../components/Section"

function Home() {
  return (
    <main className="flex w-full flex-col items-center px-4 pt-12 pb-24" id="main-content">
      <div className="w-full max-w-4xl space-y-16">
        <section className="space-y-12 py-4 text-center md:py-8">
          <div className="flex justify-center">
            <Image
              alt="Jan Cernik"
              className="h-50 w-50 md:h-60 md:w-60"
              src="/images/profile.jpg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl">
              {`Hi, I'm `}
              <span className="text-(--primary)">Jan Cernik</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et repellat error,
              non sint maxime aspernatur voluptas! Nostrum, qui. Sequi tenetur numquam in velit
              error voluptatum ipsa nam facere molestiae.
            </p>
          </div>
        </section>
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
                src: "/images/revelo-1.jpg"
              },
              {
                alt: "Revelo Screenshot 2",
                caption: "Detail view of an image in a collection",
                src: "/images/revelo-2.jpg"
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
          <div className="flex flex-col items-center gap-6">
            <p className="text-center leading-relaxed opacity-80">
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
