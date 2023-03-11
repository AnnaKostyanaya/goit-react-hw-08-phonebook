import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteContacts } from "redux/contacts/contacts-operations";
import PropTypes from 'prop-types';
import style from "./ModalQuestion.module.css";

const ModalQuestion = ( { toggleModal } ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const confirmButtonHandler = () => {
        dispatch(deleteContacts(id));
        navigate("/contacts");
    }


return (
    <>
        <p className={style.text} >Are you sure?</p>
        <ul className={style.list} >
            <li>
                <button className={style.btn} type="button" onClick={() => confirmButtonHandler()}>Confirm</button>
            </li>
            <li>
                <button className={style.btn} type="button" onClick={() => toggleModal()}>Cancel</button>
            </li>
        </ul>
    </>
)};

export default ModalQuestion;

ModalQuestion.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};