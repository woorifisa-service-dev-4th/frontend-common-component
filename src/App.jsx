import DefaultLayout from "./layouts/DefaultLayout";
import Modal from "./components/ui/Modal";
import Form from "./components/Form";
import { ModalProvider } from "./contexts/ModalContext";

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

        <section className="max-w-xl m-4 mx-auto justify-center items-center flex">
          <ModalProvider>
            <Modal>
              <Modal.Open>
                <button className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[248px] h-12 relative gap-2.5 px-5 py-3.5 rounded-lg bg-black border border-black text-white">
                  OPEN MODAL
                </button>
              </Modal.Open>
              <Modal.Content>
                <Form />
              </Modal.Content>
            </Modal>
          </ModalProvider>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
