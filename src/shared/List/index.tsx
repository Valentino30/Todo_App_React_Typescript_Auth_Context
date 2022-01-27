import ListItem from "../ListItem";

type ListProps = {
  listItems: {
    id: string;
    name: string;
    isComplete: boolean;
  }[];
};

export default function List({ listItems }: ListProps) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {listItems.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} />
      ))}
    </ul>
  );
}
