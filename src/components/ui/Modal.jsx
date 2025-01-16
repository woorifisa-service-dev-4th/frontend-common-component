import React, { cloneElement, useState } from "react";
import { createPortal } from "react-dom";
import { useModalState, useModalDispatch } from "../../contexts/ModalContext";

const Modal = ({ children }) => {
  return <>{children}</>;
};

Modal.Open = ({ children }) => {
  const { openModal } = useModalDispatch();
  return cloneElement(children, {
    onClick: openModal,
  });
};

Modal.Content = ({ children }) => {
  const isOpen = useModalState();
  const { closeModal } = useModalDispatch();

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={closeModal}
        data-cy="modal-backdrop"
        className="fixed top-0 left-0 w-full h-full backdrop-blur-md z-1"
      ></div>
      <div className="fixed z-10 w-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div>{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
