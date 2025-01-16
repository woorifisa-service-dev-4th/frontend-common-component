import React, { createContext, useContext, useState } from "react";

// State와 Dispatch Context 생성
const ModalStateContext = createContext();
const ModalDispatchContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalStateContext.Provider value={isOpen}>
      <ModalDispatchContext.Provider value={{ openModal, closeModal }}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

// 상태를 사용하는 Hook
export const useModalState = () => {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error("useModalState must be used within a ModalProvider");
  }
  return context;
};

// 상태 변경 함수를 사용하는 Hook
export const useModalDispatch = () => {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error("useModalDispatch must be used within a ModalProvider");
  }
  return context;
};
