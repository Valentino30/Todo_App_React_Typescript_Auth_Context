type FormProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

export default function Form({ children, handleSubmit }: FormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {children}
    </form>
  );
}
