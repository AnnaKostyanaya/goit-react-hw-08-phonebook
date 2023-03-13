import styles from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({children, type}) =>{
    return <button type={type} className={styles.btn}>{children}</button>
}

export default Button;

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
};