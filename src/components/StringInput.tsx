interface Props {
  autoComplete?: string
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type: "email" | "password" | "text"
  value: string
}

function StringInput({
  autoComplete,
  disabled,
  name,
  onChange,
  placeholder,
  required,
  type,
  value
}: Props) {
  return (
    <input
      autoComplete={autoComplete}
      className="w-full rounded-xs border-2 border-(--foreground) bg-(--background) px-3 py-2 text-base focus:border-(--primary) disabled:opacity-60"
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
