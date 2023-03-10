import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export const  Modal = ({ toggleModal, children }) => {

useEffect(() => {
window.addEventListener('keydown', handleKeyDown);

return () => { window.removeEventListener('keydown', handleKeyDown)}
});

const handleKeyDown = event => {
if (event.code === 'Escape') {
    toggleModal();
}
};

const handleBackdropClick = event => {
if (event.currentTarget === event.target) {
    toggleModal();
}
};


return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
    <div className="Modal__content">
        {children}
    </div>
    </div>,
    modalRoot,
);
}

export default Modal;