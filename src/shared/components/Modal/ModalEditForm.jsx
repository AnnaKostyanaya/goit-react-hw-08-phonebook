import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { changeContactDetail } from "redux/contacts/contacts-operations";
import { getCurrentUser, getAllContacts } from "redux/contacts/contacts-selectors";
import PropTypes from 'prop-types';
import style from "./ModalEditForm.module.css";

const ModalEditForm = ({ toggleModal }) => {

const { id } = useParams();
const currentUser = useSelector(getCurrentUser);
const allContacts = useSelector(getAllContacts);

const [name, setName] = useState(currentUser.name);
const [number, setNumber] = useState(currentUser.number);

const dispatch = useDispatch();

const handleChange = event => {
    const {name, value} = event.currentTarget;
    switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;
        
        default:
            return;
    }
};

const handleSubmit = event => {
    const controlName = event.currentTarget.name.value;
    event.preventDefault();
    if (onCheckName(controlName)) {
        alert(`${controlName} is already in contacts`);
        setName("");
    } else { 
        dispatch(changeContactDetail({ id, name, number }));
        toggleModal();
        setName("");
        setNumber("");
    }
};


const onCheckName = (name) => {
    if (!allContacts) {
        return;
    }
    const normalizeName = name.toLowerCase();
    const normalizeCurrentUserName = currentUser.name.toLowerCase();
    
    const deleteCurrentName = allContacts
        .filter(contact => contact.name.toLowerCase() !== normalizeCurrentUserName)
        .map(contact => contact.name)

    const checkname = deleteCurrentName.filter(name => name.toLowerCase() === normalizeName);

    if (checkname.length !== 0) {
        return true;
    } else {
        return false;
    }
}

return (
    <>
    <form onSubmit={handleSubmit} >
        <label className={style.wrapper}>Name
            <input className={style.field}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name} 
            />
        </label>
        <label className={style.wrapper}>Number
            <input className={style.field}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
            />
        </label>
    <button className={style.btn} type="submit">Save changes</button>
    </form>
    <button className={style.cancel_btn} type="button" onClick={() => toggleModal()}>Cancel</button>
    </>
);
}

export default ModalEditForm;

ModalEditForm.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};