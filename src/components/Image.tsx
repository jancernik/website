import { type ImgHTMLAttributes, type MouseEvent, useState } from "react"
import { createPortal } from "react-dom"

import { useScrollLock } from "../hooks/useScrollLock"
import { cn } from "../utils/helpers"
import { Button } from "./Button"

const baseContainerClasses =
  "flex items-center justify-center border-2 border-(--foreground) bg-(--secondary)"
const baseImageClasses = "w-full h-full object-cover"

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  caption?: string
  enableDetail?: boolean
}

function Image({ caption, className, enableDetail = false, ...props }: Props) {
  const [imageDetailVisible, setImageDetailVisibility] = useState(false)

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

  return (
    <>
      <div className={cn([baseContainerClasses, enableDetail && "cursor-pointer", className])}>
        <img {...props} className={baseImageClasses} onClick={handleImageClick} />
      </div>
      {imageDetailVisible &&
        createPortal(
          <div
            className="fixed inset-0 top-0 right-0 z-100 flex w-screen cursor-pointer items-center justify-center p-4 backdrop-brightness-45"
            onClick={handleOverlayClick}
          >
            <div className={cn([baseContainerClasses, "max-w-6xl cursor-auto flex-col"])}>
              <img {...props} className={baseImageClasses} />
              <div className="flex w-full flex-row items-center justify-between border-t-2">
                <span className="px-3 italic">{caption}</span>
                <Button className="border-y-0 border-r-0" onClick={handleButtonClick}>
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

export default Image
