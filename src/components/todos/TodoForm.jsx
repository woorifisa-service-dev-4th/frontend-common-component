import React, { useEffect, useState, useRef } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useTodosDispatch } from "../../contexts/TodoContext";

const TodoForm = ({ onClose, children, todo }) => {
  const isNewTodo = () => children === "TODO 등록";

  const TODAY_DATE = new Date().toISOString().split("T")[0];

  const [title, setTitle] = useState(isNewTodo() ? "" : todo.title);
  const [summary, setSummary] = useState(isNewTodo() ? "" : todo.summary);
  const [category, setCategory] = useState(isNewTodo() ? "TODO" : todo.category);
  const [date, setDate] = useState(isNewTodo() ? TODAY_DATE : todo.date);

  const dispatch = useTodosDispatch();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef, onClose]);

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const addTodoHandler = () => {
    const formattedSummary = summary.replace(/\n/g, '<br>');
    dispatch({
      type: "ADD",
      newTodo: { id: generateUUID(), title, summary:formattedSummary, category, date },
    });
    onClose();
  };

  const updateTodoHandler = () => {
    dispatch({ type: "UPDATE", updateTodo: { id: todo.id, title, summary, category, date } });
    onClose();
  };

  return (
    <div className="mx-auto p-6 bg-gray-800 rounded-lg shadow-lg" ref={modalRef}>
      <h3 className="text-3xl text-center mb-10 text-red-200">{children}</h3>
      <form className="my-2">
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="title">
            TITLE
          </label>
          <input
            className="w-full p-2 border-[1px] mb-5 border-gray-300 bg-gray-200 text-gray-900 rounded"
            type="text"
            placeholder="할 일을 입력하세요"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="summary">
            SUMMARY
          </label>
          <textarea
            className="w-full p-2 border-[1px] mb-5 border-gray-300 bg-gray-200 text-gray-900 rounded"
            placeholder="할 일에 대한 상세 설명을 입력하세요"
            id="summary"
            rows="5"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="category">
            CATEGORY
          </label>
          <select
            className="w-full p-2 border-[1px] mb-5 border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="TODO">{TODO_CATEGORY_ICON.TODO} TO DO</option>
            <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} ON PROGRESS</option>
            <option value="DONE">{TODO_CATEGORY_ICON.DONE} DONE</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="date">
            DUE DATE
          </label>
          <div>
            <label htmlFor="datePicker"></label>
            <input
              className="w-full p-2 border-[1px] mb-5 border-gray-300 bg-gray-200 text-gray-900 rounded"
              type="date"
              id="datePicker"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button className="text-xl text-white" type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-6 py-3 text-xl text-red-200"
            type="button"
            onClick={isNewTodo() ? addTodoHandler : updateTodoHandler}
          >
            {isNewTodo() ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
