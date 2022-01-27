type HeaderProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
};

export default function Header({ as, children }: HeaderProps) {
  const HeaderElement = as || "h1";
  return <HeaderElement>{children}</HeaderElement>;
}
