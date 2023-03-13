import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./LoginForm.module.css";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import { getError } from "../../redux/auth/auth-selectors";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const { email, password} = state;
    const error = useSelector(getError);

    return (
    <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button variant="contained">Register</Button>
        </form>
        {(error) && <p>Login or password error. Try again.</p>}
    </>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};