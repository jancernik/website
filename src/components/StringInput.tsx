interface Props {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  name: string;
  type: "text" | "email" | "password";
  disabled?: boolean;
  required?: boolean;
}

function StringInput({
  onChange,
  placeholder,
  name,
  disabled,
  required,
  type,
  value,
}: Props) {
  return (
    <input
      type={type}
      name={name}
      disabled={disabled}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border-2 focus-within:outline-1 w-full disabled:opacity-60 leading-none font-size outline-(--foreground)"
    />
  );
}

export default StringInput;
