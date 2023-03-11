import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../redux/auth/auth-selectors";

import { logout } from "../../redux/auth/auth-operations";

import style from '../NavUser/NavUser.module.css';


const NavUser = () => {
    const {email} = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogout = ()=> {
        dispatch(logout());
    }

    return (
        <div>
            <p className={style.name}>{email}</p> 
            <button className={style.btn} onClick={onLogout}>Logout</button>
        </div>
    )
}

export default NavUser;