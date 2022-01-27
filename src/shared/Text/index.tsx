type TextProps = {
  children: string;
  withLink?: boolean;
  linkComponent?: React.ReactNode;
};

export default function Text({ children, withLink, linkComponent }: TextProps) {
  if (withLink) {
    return (
      <p>
        {children} <span>{linkComponent}</span>
      </p>
    );
  }

  return <p>{children}</p>;
}
