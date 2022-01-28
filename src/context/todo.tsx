import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";

import { TodoContextType, TodoProviderType, TodoType } from "../types/todo";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (name: string) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        name,
        isComplete: false,
      },
    ]);
  };

  const editTodo = (id: string, name: string) => {
    setTodos((todos) => {
      return todos.map((todo) => (todo.id === id ? { ...todo, name } : todo));
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
