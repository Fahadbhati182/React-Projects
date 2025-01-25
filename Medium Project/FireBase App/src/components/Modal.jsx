import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, isClose, children }) => {
  return createPortal(
    <>
      {isOpen == true && (
        <>
          <div className="z-50 m-auto relative min-h-[200px] max-w-[380px] p-4 bg-white">
            <div className="flex justify-end">
              <AiOutlineClose
                className=" cursor-pointer text-3xl"
                onClick={isClose}
              />
            </div>
            {children}
          </div>
          <div
            onClick={isClose}
            className=" absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
