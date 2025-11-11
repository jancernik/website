interface Props {
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type: "email" | "password" | "text"
  value: string
}

function StringInput({ disabled, name, onChange, placeholder, required, type, value }: Props) {
  return (
    <input
      className="font-size w-full border-2 p-2 leading-none outline-(--foreground) focus-within:outline-1 disabled:opacity-60"
      disabled={disabled}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  )
}

export default StringInput
