import React from 'react';
import ContactElement from '../ContactElement';
import style from '../ContactList/ContactList.module.css';
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom"; 

import { useSelector, useDispatch } from "react-redux";
// import { deleteContacts } from "../../redux/contacts/contacts-slice";
import { deleteContacts } from "redux/contacts/contacts-operations";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";


const ContactList = () => {
const location = useLocation();
const filteredContacts = useSelector(getFilteredContacts);

const dispatch = useDispatch();
const deleteContact = (id) => {
    dispatch(deleteContacts(id));
};


return (
    <ul className={style.contactlist}>
        {filteredContacts.map(contact => (
            <ContactElement state={{ from: location}} key={nanoid()} id={contact.id} contact={contact} onDeleteContact={deleteContact}/>
        ))}
    </ul>
);
}

export default ContactList;
