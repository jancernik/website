import { type ImgHTMLAttributes, type MouseEvent, useState } from "react"
import { createPortal } from "react-dom"
import { LQIP } from "virtual:lqip"

import { useScrollLock } from "../hooks/useScrollLock"
import { cn } from "../utils/helpers"
import { Button } from "./Button"

const baseContainerClasses =
  "flex items-center justify-center border-2 border-(--foreground) bg-(--secondary) rounded-xs"

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  caption?: string
  enableDetail?: boolean
}

function Image({ caption, className, enableDetail = false, height, src, width, ...props }: Props) {
  const [imageDetailVisible, setImageDetailVisibility] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useScrollLock(imageDetailVisible)

  const handleImageClick = () => {
    if (!enableDetail) return
    setImageDetailVisibility(true)
  }

  const handleOverlayClick = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) return
    setImageDetailVisibility(false)
  }

  const handleButtonClick = () => {
    setImageDetailVisibility(false)
  }

  const filename = src?.toString().split("/").pop() ?? ""
  const lqip = LQIP[filename]
  const placeholderStyle = lqip
    ? { backgroundImage: `url(${lqip})`, backgroundSize: "cover", backgroundPosition: "center" }
    : undefined

  return (
    <>
      <div
        className={cn([baseContainerClasses, enableDetail && "cursor-pointer", className])}
        style={placeholderStyle}
      >
        <img
          {...props}
          height={height}
          src={src}
          width={width}
          className={cn([
            "h-full w-full object-cover transition-opacity duration-500",
            !loaded && "opacity-0"
          ])}
          onClick={handleImageClick}
          onLoad={() => setLoaded(true)}
        />
      </div>
      {imageDetailVisible &&
        createPortal(
          <div
            className="fixed inset-0 top-0 right-0 z-100 flex w-screen cursor-pointer items-center justify-center p-4 backdrop-brightness-25 sm:backdrop-brightness-40"
            onClick={handleOverlayClick}
          >
            <div
              className={cn([baseContainerClasses, "w-full max-w-6xl cursor-auto flex-col"])}
              style={{
                ...(width && height ? { aspectRatio: `${width} / ${height}` } : undefined),
                ...placeholderStyle
              }}
            >
              <div className="min-h-0 flex-1">
                <DetailImage {...props} height={height} src={src} width={width} />
              </div>
              <div className="flex w-full flex-row items-center justify-between border-t-2">
                <span className="w-full border-r-2 px-3 py-2 italic">{caption}</span>
                <Button className="border-x-0 border-y-0" onClick={handleButtonClick}>
                  Close
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

function DetailImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      {...props}
      className={cn([
        "h-full w-full object-cover transition-opacity duration-500",
        !loaded && "opacity-0"
      ])}
      onLoad={() => setLoaded(true)}
    />
  )
}

export default Image
