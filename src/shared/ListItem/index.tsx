import CheckBox from "../CheckBox";

type ListItemProps = {
  listItem: {
    id: string;
    name: string;
    isComplete: boolean;
  };
};

export default function ListItem({ listItem }: ListItemProps) {
  return (
    <div style={{ display: "flex" }}>
      <CheckBox checked={listItem.isComplete} />
      <li key={listItem.id}>{listItem.name}</li>
    </div>
  );
}
