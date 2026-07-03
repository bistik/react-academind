import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-16">
      {children}
      <form method="dialog" className="flex">
        <button className="px-1 py-2 mt-8 bg-stone-700 text-stone-100 mx-auto">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
