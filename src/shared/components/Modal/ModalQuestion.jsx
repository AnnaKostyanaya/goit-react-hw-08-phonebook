import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteContacts } from "redux/contacts/contacts-operations";

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
        <p>Are you sure?</p>
        <ul>
            <li>
                <button type="button" onClick={() => confirmButtonHandler()}>Confirm</button>
            </li>
            <li>
                <button type="button" onClick={() => toggleModal()}>Cancel</button>
            </li>
        </ul>
    </>
)};

export default ModalQuestion;