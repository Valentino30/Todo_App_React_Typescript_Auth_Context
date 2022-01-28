import { nanoid } from "nanoid";
import { useState } from "react";

import List from "../shared/List";
import Input from "../shared/Input";
import Header from "../shared/Header";

type TodoType = {
  id: string;
  name: string;
  isComplete: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodoName, setNewTodoName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          name: newTodoName,
          isComplete: false,
        },
      ]);
      setNewTodoName("");
    }
  };

  return (
    <>
      <Header as="h2">Todos</Header>
      <Input
        name="newTodo"
        value={newTodoName}
        placeholder="Add new todo"
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <List listItems={todos} />
    </>
  );
}
