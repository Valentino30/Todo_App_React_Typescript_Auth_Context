type InputProps = {
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
}: InputProps) {
  return (
    <input
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
