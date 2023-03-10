import React from 'react';
import style from '../ContactElement/ContactElement.module.css';
import PropTypes from 'prop-types';
import { FcPhone } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom"; 

const ContactElement = ({ state, onDeleteContact, contact: { id, name, number } }) => (
    <li className={style.contact__item}> 
        <Link to={id} state={state}>
            <IconContext.Provider value={{ size: "3em" }}>
                <div>
                    <FcPhone className={style.swing} />
                </div>
            </IconContext.Provider>
            <p className={style.contact__text}>{name}</p>
            <p className={style.contact__tel}>{number}</p>
            <button
                type="button"
                className={style.contact__btn}
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </Link>
    </li>
);

export default ContactElement;

ContactElement.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
}).isRequired,
};

