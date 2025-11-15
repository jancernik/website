import Image from "./Image"
import { type Props as ImageProps } from "./Image"

interface Props {
  children: string
  images?: Array<ImageProps>
  links?: Array<{
    href: string
    text: string
  }>
  name: string
  tags?: Array<string>
}

function Project({ children, images, links, name, tags }: Props) {
  return (
    <div className="space-y-6 border-2 border-(--foreground) p-6">
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-(--primary)">{name}</h4>
        <p className="leading-relaxed">{children}</p>
        <div className="flex flex-wrap gap-3">
          {tags?.map((tag) => (
            <span className="border-2 border-(--foreground) px-3 py-1 text-sm font-medium" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {images?.map((image, index) => (
          <Image caption={image.alt} enableDetail={true} key={index} {...image} />
        ))}
      </div>
      <div className="flex gap-6">
        {links?.map((link, index) => (
          <a
            className="font-medium hover:text-(--primary)"
            href={link.href}
            key={index}
            rel="noreferrer"
            target="_blank"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
