type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export default function Button({ handleClick, children }: ButtonProps) {
  return <button onClick={(e) => handleClick(e)}>{children}</button>;
}
