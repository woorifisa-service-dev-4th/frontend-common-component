import { createContext, useState, useContext } from "react";
import AccordionItem from "../components/ui/AccordionItem";

const AccordionContext = createContext();

// useContext로 AccordionContext를 가져옴
export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion-related components must be wrapped be <Accordion>");
  }
  return context;
}

export function AccordionProvider({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);
  const [todos, setTodos] = useState([]);

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
      {children}
    </AccordionContext.Provider>
  );
}

export { AccordionContext };