import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {signup} from "../../redux/auth/auth-operations";
import {isUserLogin} from "../../redux/auth/auth-selectors";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

import style from "../RegisterPage/RegisterPage.module.css";

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleSignup = (data) => {
        dispatch(signup(data));
    }

    if(isLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <div>
            <h1 className={style.header}>Register page</h1>
            <RegisterForm onSubmit={handleSignup} />
        </div>
    )
}

export default RegisterPage;