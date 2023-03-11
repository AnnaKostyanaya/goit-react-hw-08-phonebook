import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./LoginForm.module.css";
import PropTypes from 'prop-types';

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const { email, password} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button variant="contained">Register</Button>
        </form>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};