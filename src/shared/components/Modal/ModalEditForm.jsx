import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeContactDetail } from "redux/contacts/contacts-operations";
import { getAllContacts } from "redux/contacts/contacts-selectors";

const ModalEditForm = ({ toggleModal }) => {

const { id } = useParams();
const allContacts = useSelector(getAllContacts);
const contactDetail = allContacts.filter(contact => contact.id === id);

const [name, setName] = useState(contactDetail[0].name);
const [number, setNumber] = useState(contactDetail[0].number);

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
    } else { 
    dispatch(changeContactDetail({ id, name, number }));
    }
    clearForm(controlName);
};

const clearForm = (name) => {
    if (onCheckName(name)) {
        setName("");
    } else {
        toggleModal();
    }
}

const onCheckName = (name) => {
    if (!allContacts) {
        return;
    }
    const normalizeName = name.toLowerCase();
    const checkname = allContacts.filter(contact =>
        contact.name.toLowerCase() === normalizeName
    );
    if (checkname.length !== 0) {
        return true;
    } else {
        return false;
    }
    }
    

return (
    <>
    <form onSubmit={handleSubmit} >
        <label >Name
            <input 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name} 
            />
        </label>
        <label >Number
            <input 
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
            />
        </label>
    <button variant="contained" type="submit">Save changes</button>
    </form>
    <button variant="contained" type="button" onClick={() => toggleModal()}>Cancel</button>
    </>
);
}

export default ModalEditForm;