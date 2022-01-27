import List from "../shared/List";
import Header from "../shared/Header";

type TodoListProps = {
  listItems: {
    id: string;
    name: string;
    isComplete: boolean;
  }[];
};

export default function TodoList({ listItems }: TodoListProps) {
  return (
    <>
      <Header as="h2">Todos</Header>
      <List listItems={listItems} />
    </>
  );
}
