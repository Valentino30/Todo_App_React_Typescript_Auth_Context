import { useState } from "react";

import List from "../shared/List";
import Input from "../shared/Input";
import Header from "../shared/Header";

import { useTodo } from "../context/todo";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const { todos, addTodo } = useTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(todoName);
      setTodoName("");
    }
  };

  return (
    <>
      <Header as="h2">Todos</Header>
      <Input
        name="newTodo"
        value={todoName}
        placeholder="Add new todo"
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <List listItems={todos} />
    </>
  );
}
