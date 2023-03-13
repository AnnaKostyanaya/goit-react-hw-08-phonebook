import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; 
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/contacts/contacts-selectors";
import Modal from "shared/components/Modal/Modal";
import ModalQuestion from "shared/components/Modal/ModalQuestion";
import ModalEditForm from "shared/components/Modal/ModalEditForm";
import style from '../ContactDetailPage/ContactDetailPage.module.css';

const ContactDetailPage = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [menu, setMenu] = useState("");

const location = useLocation();

const currentUser = useSelector(getCurrentUser);

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
        <>
            <Link to={location.state.from} className={style.contact_btn}>Go back</Link>
                <div>
                    <p className={style.userAbout}><span className={style.header}>name: </span>{currentUser.name}</p>
                    <p className={style.userAbout}><span className={style.header}>number: </span>{currentUser.number}</p>
                </div>
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
    </div>
);
};

export default ContactDetailPage;
