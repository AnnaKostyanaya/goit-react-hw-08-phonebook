import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteContacts } from "redux/contacts/contacts-operations";

const modalRoot = document.querySelector('#modal-root');

export const  Modal = ({ toggleModal }) => {

const dispatch = useDispatch();
const navigate = useNavigate();
const { id } = useParams();


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

const confirmButtonHandler = () => {
    dispatch(deleteContacts(id));
    navigate("/contacts");
}


return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
    <div className="Modal__content">
        <p>Are you sure?</p>
        <ul>
            <li>
                <button type="button" onClick={confirmButtonHandler}>Confirm</button>
            </li>
            <li>
                <button type="button" onClick={() => toggleModal()}>Cancel</button>
            </li>
        </ul>
    </div>
    </div>,
    modalRoot,
);
}

export default Modal;