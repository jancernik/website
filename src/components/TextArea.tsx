interface Props {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}

function TextArea({
  onChange,
  placeholder,
  name,
  disabled,
  required,
  rows,
  value,
}: Props) {
  return (
    <textarea
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border-2 resize-none w-full disabled:opacity-60 focus-within:outline-1 leading-none font-size outline-(--foreground)"
    />
  );
}

export default TextArea;
