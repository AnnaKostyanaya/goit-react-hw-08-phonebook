import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./RegisterForm.module.css";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";
import { getError } from "../../redux/auth/auth-selectors";

const RegisterForm = ({onSubmit}) => {

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password} = state;
    const error = useSelector(getError);

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField value={name} handleChange={handleChange} {...fields.name} />
                <TextField value={email} handleChange={handleChange} {...fields.email} />
                <TextField value={password} handleChange={handleChange} {...fields.password} />
                <Button>Register</Button>
            </form>
            {(error) && <p>A user with such data exists. Try again.</p>}
        </>
    )
}

export default RegisterForm;

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};