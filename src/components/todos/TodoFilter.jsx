import React from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useTodos, useTodosDispatch } from "@/contexts/TodoContext";

const TodoFilter = () => {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  return (
    <select
      className="p-2.5 ml-10 text-gray-100 bg-gray-800 rounded"
      data-cy="todo-filter"
      value={todos.category}
      onChange={(event) => dispatch({ type: "FILTER", selectedCategory: event.target.value })}
    >
      <option value="ALL">ALL</option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} TO DO</option>
      <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} ON PROGRESS</option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
    </select>
  );
};
export default TodoFilter;
