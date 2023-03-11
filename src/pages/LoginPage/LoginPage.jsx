import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {login} from "../../redux/auth/auth-operations";
import {isUserLogin} from "../../redux/auth/auth-selectors";

import LoginForm from "../../components/LoginForm/LoginForm";
import style from "../LoginPage/LoginPage.module.css";
const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    }

    if(isLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <div>
            <h1 className={style.header}>Login page</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage;