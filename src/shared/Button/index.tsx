type ButtonProps = {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export default function Button({ handleClick, children }: ButtonProps) {
  return <button onClick={handleClick}>{children}</button>;
}
