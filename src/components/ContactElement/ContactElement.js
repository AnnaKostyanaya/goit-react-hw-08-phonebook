import React from 'react';
import style from '../ContactElement/ContactElement.module.css';
import PropTypes from 'prop-types';
// import { FcPhone } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import {setCurrentUser } from "../../redux/contacts/contacts-slice";

import { HiOutlinePhone } from 'react-icons/hi';

const ContactElement = ({ state, contact: { id, name, number } }) => {

const dispatch = useDispatch();

const handleClickBtn = ({ contact }) => {
    dispatch(setCurrentUser({id, name, number})); 
};

return (
    <li className={style.contact__item}> 
            <IconContext.Provider value={{ size: "2em", color: "rgba(224, 62, 13, 0.612)"}}>
                <div>
                    <HiOutlinePhone className={style.swing}/>
                    {/* <FcPhone className={style.swing} /> */}
                </div>
            </IconContext.Provider>
            <p className={style.contact__text}>{name}</p>
            <p className={style.contact__tel}>{number}</p>
            <Link to={id} state={state} >
                <button className={style.contact_btn} onClick={handleClickBtn} >Change</button>
            </Link>
    </li>
);
}

export default ContactElement;

ContactElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
}).isRequired,
    state: PropTypes.object.isRequired,
};

