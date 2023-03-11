import { useMemo } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

import styles from "./TextField.module.css";

const TextField = ({label, handleChange, ...props}) => {
    const id = useMemo(()=> nanoid(), []);

    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input className={styles.field} id={id} onChange={handleChange} {...props} />
        </div>
    )
}

export default TextField;

TextField.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};
