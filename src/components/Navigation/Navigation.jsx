import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FcContacts } from 'react-icons/fc';
import { IconContext } from "react-icons";

import NavAuth from "../NavAuth/NavAuth";
import NavUser from "../NavUser/NavUser";
import { isUserLogin } from "../../redux/auth/auth-selectors";

import style from "../Navigation/Navigation.module.css";

const Navigation = () => {
    const isLogin = useSelector(isUserLogin);
return (
<nav className={style.nav}>
    <ul className={style.list}>
        <li className={style.listItem}>
            <IconContext.Provider value={{ size: "2em" }}>
            <NavLink to="/contacts">
                    <FcContacts />
            </NavLink>
            </IconContext.Provider>
        </li>
        <li className={style.listItem}>
            <NavLink to="/">Home</NavLink>
        </li>
        <li className={style.listItem}>
            {!isLogin && <NavAuth />}
            {isLogin && <NavUser />}
        </li>
    </ul>
</nav>
);
};

export default Navigation;