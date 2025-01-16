import { createContext, useContext, useReducer } from "react";

// 할 일 데이터를 제공하는 Context
export const TodoContext = createContext();

// 할 일 상태 변경 로직을 제공하는 Context(useReducer 코드)
export const TodoDispatchContext = createContext();

const todoData = [
  {
    id: "1",
    title: "Test 1",
    summary: "Testing 1",
    category: "TODO",
    date: "2025-01-01",
  },
  {
    id: "2",
    title: "Test 2",
    summary: "Testing 2",
    category: "PROGRESS",
    date: "2025-01-02",
  },
];

// TodoContext와 TodoDispatchContext를 wrap한 컴포넌트
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, { data: todoData, category: "ALL" });

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
export const useTodosDispatch = () => useContext(TodoDispatchContext);

const reducer = (todos, action) => {
  const { data, category } = todos;
  switch (action.type) {
    case "ADD":
      const { newTodo } = action;
      return {
        data: [...data, newTodo].sort((a, b) => new Date(a.date) - new Date(b.date)),
        category,
      };

    case "UPDATE":
      const { updateTodo } = action;
      const updatedTodos = data
        .map((todo) => (todo.id === updateTodo.id ? { ...updateTodo } : todo))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      return { data: updatedTodos, category };

    case "DELETE":
      const { id } = action;
      const deletedTodos = data.filter((todo) => todo.id !== id);
      return { data: deletedTodos, category };

    case "FILTER":
      return { data, category: action.selectedCategory };
  }
};
