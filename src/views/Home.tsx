import ContactForm from "../components/ContactForm"
import Image from "../components/Image"
import Project from "../components/Project"
import Section from "../components/Section"

function Home() {
  return (
    <main
      className="flex w-full flex-col items-center px-4 pt-8 pb-18 sm:pt-12 sm:pb-24"
      id="main-content"
    >
      <div className="w-full max-w-4xl space-y-16">
        <section className="space-y-12 py-4 text-center md:py-8">
          <div className="flex justify-center">
            <Image
              alt="Jan Cernik"
              className="h-50 w-50 md:h-60 md:w-60"
              height={830}
              src="/images/profile.jpg"
              width={830}
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl">
              {`Hi, I'm `}
              <span className="text-(--primary)">Jan Cernik</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              Web developer, tech enthusiast and hardware tinkerer.
              <br />I like to learn by building real things, from web interfaces and backends to
              servers and the hardware they run on.
            </p>
          </div>
        </section>
        <Section title="About me">
          <p>
            I started with Arduino and small electronics projects as a kid, gradually moving from
            basic circuits and microcontroller code to applications that live in the browser and on
            servers. That path eventually led me to working on full web stacks and infrastructure,
            until software became the main thing I work on.
          </p>
          <p>
            Today I focus on web development and running my own services on Linux, Proxmox and
            Docker, while still using electronics for personal projects, especially for home
            automation.That includes custom switches and sensors, self-hosted services and a few
            experiments that connect the physical side of my setup with the software I write.
          </p>
        </Section>

        <Section title="Featured Projects">
          <Project
            images={[
              {
                alt: "Revelo Screenshot 1",
                caption: "Infinite masonry layout in the homepage",
                height: 1080,
                src: "/images/revelo-1.jpg",
                width: 1920
              },
              {
                alt: "Revelo Screenshot 2",
                caption: "Detail view of an image in a collection",
                height: 1080,
                src: "/images/revelo-2.jpg",
                width: 1920
              }
            ]}
            links={[
              { href: "https://revelo.app", text: "View Live" },
              { href: "https://github.com/jancernik/revelo", text: "View Code" }
            ]}
            name="Revelo"
            tags={["Vue", "Express", "GSAP"]}
          >
            A photography gallery I built to give the pictures I take a better home than the usual
            platforms. It has a custom infinite scrolling masonry layout, an admin dashboard, and
            AI-powered search to quickly find images by concept.
          </Project>
          <Project
            images={[
              {
                alt: "Makros Screenshot 1",
                caption: "Main view with the daily plan and foods library side by side",
                height: 1080,
                src: "/images/makros-1.jpg",
                width: 1920
              },
              {
                alt: "Makros Screenshot 2",
                caption: "Food edit form",
                height: 1080,
                src: "/images/makros-2.jpg",
                width: 1920
              }
            ]}
            links={[
              { href: "https://demo.makros.cuasar.cc", text: "View Demo" },
              { href: "https://github.com/jancernik/makros", text: "View Code" }
            ]}
            name="Makros"
            tags={["Next.js", "TanStack Table", "Tailwind CSS"]}
          >
            A self-hosted macro and nutrition tracker I built after my spreadsheet setup got too
            complex. Optimistic UI keeps every interaction instant, with changes syncing to the
            database in the background.
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
