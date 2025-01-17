import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { TodoDispatchContext } from "@/contexts/TodoContext";
import IconButton from "../ui/IconButton";
import Modal from "../ui/Modal";
import TodoForm from "./TodoForm";

const TodoItem = ({ todo }) => {
  const [openModal, open] = useState(false);

  const dispatch = useContext(TodoDispatchContext);

  return (
    <li className="flex gap-4 justify-between py-4 px-4 bg-gray-700 rounded-md">
      <div>
        <div>
          <p
            className="mt-2 text-base text-gray-200"
            dangerouslySetInnerHTML={{ __html: todo.summary }}
          ></p>
          <p className="mt-2 text-base text-gray-400">{todo.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Modal>
          <Modal.Open>
            <IconButton icon={"✏️"} onClick={() => open(true)} />
          </Modal.Open>
          <Modal.Content>
            <TodoForm todo={todo}>TODO 수정</TodoForm>
          </Modal.Content>
        </Modal>
        <IconButton icon={"🗑"} onClick={() => dispatch({ type: "DELETE", id: todo.id })} />
      </div>
    </li>
  );
};
export default TodoItem;
