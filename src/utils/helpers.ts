export const cn = (classes: Array<false | null | number | string | undefined>) => {
  return classes
    .filter((item) => item !== undefined && item !== null && item !== false)
    .map((item) => String(item).trim())
    .filter((item) => item.length > 0)
    .join(" ")
}
