interface Props {
  autoComplete?: string
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  rows?: number
  value: string
}

function TextArea({
  autoComplete,
  disabled,
  name,
  onChange,
  placeholder,
  required,
  rows,
  value
}: Props) {
  return (
    <textarea
      autoComplete={autoComplete}
      className="w-full resize-none rounded-xs border-2 border-(--foreground) bg-(--background) px-3 py-2 text-base leading-normal focus:border-(--primary) disabled:opacity-60"
      disabled={disabled}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      rows={rows}
      value={value}
    />
  )
}

export default TextArea
