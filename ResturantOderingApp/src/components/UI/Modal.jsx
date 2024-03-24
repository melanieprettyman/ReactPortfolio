import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

//Custom Modal component. {Children} is JSX code for the modal
//On close is passed into Modal for when the esc is pressed out context is correctly updated
export default function Modal({ children, open, className = '' , onClose}) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current; //lock in the val of ref

    if (open) {
      modal.showModal();
    }

    //closing dialog when open is false,  use clean up fn (execute when this effect is about to run again)
    return () => modal.close();

  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}