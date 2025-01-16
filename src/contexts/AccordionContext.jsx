import { createContext, useState, useContext } from "react";
import AccordionItem from "../components/ui/AccordionItem";

const AccordionContext = createContext();

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    content: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    content: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    content: "커피를 마신다.",
    category: "DONE",
  },
];

// useContext로 AccordionContext를 가져옴
export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion-related components must be wrapped be <Accordion>");
  }
  return context;
}

export default function AccordionProvider({ className }) {
  const [openItemId, setOpenItemId] = useState();
  const [todos, setTodos] = useState(dummyTodos);

  // id를 인자로 받아 토글하는 기능 함수
  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
    todos,
    setTodos,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {todos.map((todo) => (
          <AccordionItem key={todo.id} id={todo.id} title={todo.title}>
            {todo.content}
          </AccordionItem>
        ))}
      </ul>
    </AccordionContext.Provider>
  );
}
