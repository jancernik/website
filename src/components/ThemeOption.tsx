interface Props {
  isActive: boolean
  isPreviewing?: boolean
  onMouseEnter?: (themeName: string) => void
  onMouseLeave?: () => void
  onOptionClick: (themeName: string) => void
  themeName: string
}

function ThemeOption({
  isActive,
  isPreviewing,
  onMouseEnter,
  onMouseLeave,
  onOptionClick,
  themeName
}: Props) {
  return (
    <button
      aria-pressed={isActive}
      className={`theme-option w-full cursor-pointer border-b-2 border-(--foreground) px-3 py-2.5 text-sm font-medium uppercase last:border-b-0 ${
        isActive
          ? "bg-(--primary-hover) text-(--primary-foreground)"
          : isPreviewing
            ? "bg-(--secondary-hover) text-(--foreground)"
            : "bg-(--secondary) text-(--foreground)"
      }`}
      data-theme-name={themeName}
      onClick={() => onOptionClick(themeName)}
      onMouseEnter={() => onMouseEnter?.(themeName)}
      onMouseLeave={onMouseLeave}
      tabIndex={-1}
      type="button"
    >
      {themeName}
    </button>
  )
}

export default ThemeOption
