type InputProps = {
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  name: string;
};

export default function Input({
  name,
  value,
  placeholder,
  handleChange,
  handleKeyDown,
}: InputProps) {
  return (
    <input
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
}
