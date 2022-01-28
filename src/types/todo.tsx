export type TodoType = {
  id: string;
  name: string;
  isComplete: boolean;
};

export type TodoContextType = {
  todos: TodoType[] | [];
  addTodo: (todoName: string) => void;
  editTodo: (todoName: string, id: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (todoId: string) => void;
};

export type TodoProviderType = {
  children: React.ReactNode;
};
