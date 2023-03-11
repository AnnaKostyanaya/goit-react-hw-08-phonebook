import React from 'react';
import style from '../ContactElement/ContactElement.module.css';
import PropTypes from 'prop-types';
import { FcPhone } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom"; 

const ContactElement = ({ state, contact: { id, name, number } }) => (
    <li className={style.contact__item}> 
            <IconContext.Provider value={{ size: "3em" }}>
                <div>
                    <FcPhone className={style.swing} />
                </div>
            </IconContext.Provider>
            <p className={style.contact__text}>{name}</p>
            <p className={style.contact__tel}>{number}</p>
            <Link to={id} state={state} className={style.contact_btn}>
                Change
            </Link>
    </li>
);

export default ContactElement;

ContactElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
}).isRequired,
};

