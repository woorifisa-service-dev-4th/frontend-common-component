import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import TodoHeader from "./components/todos/TodoHeader";
import TodoBody from "./components/todos/TodoBody";
import Modal from "./components/ui/Modal";
import WelcomeTooltip from "./components/WelcomeTooltip";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/todos/TodoForm";
import TodoFilter from "./components/todos/TodoFilter";
import AccordionProvider from "./contexts/AccordionContext";
import AccordionItem from "./components/ui/AccordionItem";

function App() {
  return (
    <>
      <DefaultLayout>
        <header>
          <h1 className="pt-8 mx-auto text-red-200 max-w-max text-7xl">
            <img
              className="ml-4"
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
              alt="Thought Balloon"
              width="75"
              height="75"
            />
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png"
              alt="Seal"
              width="75"
              height="75"
            />
          </h1>
        </header>

        <section className="max-w-xl m-4 mx-auto">
          <TodoProvider>
            <TodoHeader>
              <Modal>
                <Modal.Open>
                  <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer">
                    사용법
                  </button>
                </Modal.Open>
                <Modal.Content>
                  <WelcomeTooltip />
                </Modal.Content>
              </Modal>
              <Modal>
                <Modal.Open>
                  <button className="px-6 py-2 mr-20 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer">
                    ADD TODO
                  </button>
                </Modal.Open>
                <Modal.Content>
                  <TodoForm>TODO 등록</TodoForm>
                </Modal.Content>
              </Modal>
              <TodoFilter />
            </TodoHeader>
            <TodoBody />
          </TodoProvider>
          <AccordionProvider>
            <AccordionItem />
          </AccordionProvider>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
