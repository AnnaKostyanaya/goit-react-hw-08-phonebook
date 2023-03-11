import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react"; 
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllContacts, getCurrentUser } from "../../redux/contacts/contacts-selectors";
import Modal from "shared/components/Modal/Modal";
import ModalQuestion from "shared/components/Modal/ModalQuestion";
import ModalEditForm from "shared/components/Modal/ModalEditForm";
import style from '../ContactDetailPage/ContactDetailPage.module.css';

const ContactDetailPage = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [menu, setMenu] = useState("");
const [changeName, setchangeName] = useState(null);

const location = useLocation();
const { id } = useParams();
const contacts = useSelector(getAllContacts);
const contactDetail = contacts.filter(contact => contact.id === id);

const currentUser = useSelector(getCurrentUser);

useEffect(() => {
    setchangeName(currentUser); 
}, [currentUser]);

const buttonDeleteClickHandler =() => {
    setIsModalOpen(!isModalOpen);
    setMenu("delete");
}

const buttonEditClickHandler =() => {
    setIsModalOpen(!isModalOpen);
    setMenu("edit");
}


return (
    <div className={style.container}>
    {contactDetail && (
        <>
            <Link to={location.state.from} className={style.contact_btn}>Go back</Link>
            {(changeName === null) ? ( 
                <div>
                    <p className={style.userAbout}><span className={style.header}>name: </span>{contactDetail[0].name}</p>
                    <p className={style.userAbout}><span className={style.header}>number: </span>{contactDetail[0].number}</p>
                </div>
            ) : (
                <div>
                    <p className={style.userAbout}><span className={style.header}>name: </span>{currentUser.name}</p>
                    <p className={style.userAbout}><span className={style.header}>number: </span>{currentUser.number}</p>
                </div>
            )}
            <button type="button" onClick={buttonDeleteClickHandler} className={style.btn} >Delete user</button>
            {(isModalOpen && menu === "delete") && 
            <Modal toggleModal={buttonDeleteClickHandler} >
                <ModalQuestion toggleModal={buttonDeleteClickHandler} />
            </Modal>}
            <button type="button" onClick={buttonEditClickHandler} className={style.btn} >Edit user</button>
            {(isModalOpen && menu === "edit") && 
            <Modal toggleModal={buttonEditClickHandler}>
                <ModalEditForm toggleModal={buttonEditClickHandler}/>
            </Modal>}
        </>
    )}
    </div>
);
};

export default ContactDetailPage;