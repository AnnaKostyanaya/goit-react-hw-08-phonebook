import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { getError, getIsLoading } from "redux/contacts/contacts-selectors";

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import style from '../ContactBook/ContactBook.module.css';

const ContactBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

return (
  <div className={style.container}>
    <h2 className={style.main_title}>Add contact:</h2>
    <ContactForm />
    <h2 className={style.title}>Contacts</h2>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />
  </div>
);
}

export default ContactBook;

