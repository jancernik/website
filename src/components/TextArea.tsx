interface Props {
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  rows?: number
  value: string
}

function TextArea({ disabled, name, onChange, placeholder, required, rows, value }: Props) {
  return (
    <textarea
      className="font-size w-full resize-none border-2 p-2 leading-none outline-(--foreground) focus-within:outline-1 disabled:opacity-60"
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
