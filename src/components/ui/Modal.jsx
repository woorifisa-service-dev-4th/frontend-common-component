import React, { useState, cloneElement, Children } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {Children.map(children, (child) => {
        if (child.type === Modal.Open) {
          return cloneElement(child, { openModal });
        }

        if (child.type === Modal.Content && isOpen) {
          return createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* 배경 */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={closeModal}
              ></div>

              {/* 모달 콘텐츠 */}
              <div className="fixed z-10 w-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {cloneElement(child, { closeModal })}
              </div>
            </div>,
            document.body
          );
        }

        return null;
      })}
    </>
  );
};

Modal.Open = ({ children, openModal }) => {
  return cloneElement(children, { onClick: openModal });
};

Modal.Content = ({ children, closeModal }) => {
  return <>{cloneElement(children, { onClose: closeModal })}</>;
};

export default Modal;
