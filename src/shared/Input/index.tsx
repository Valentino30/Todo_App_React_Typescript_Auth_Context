type InputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string | undefined;
};

export default function Input({
  value,
  placeholder,
  handleChange,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
