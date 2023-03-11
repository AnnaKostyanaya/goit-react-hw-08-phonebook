import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from "./Modal.module.css";
import PropTypes from 'prop-types';

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
    <div className={style.modal__backdrop} onClick={handleBackdropClick}>
    <div className={style.modal__content}>
        {children}
    </div>
    </div>,
    modalRoot,
);
}

export default Modal;

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
};
