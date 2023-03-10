import { NavLink } from "react-router-dom";

import style from "../NavAuth/NavAuth.module.css";

const NavAuth = () => {
    return (<div className={style.navauthDiv}>
                <NavLink className={style.navauthLink} to="/register">Register</NavLink> 
                {/* <span className={style.divider}>|</span>   */}
                <NavLink className={style.navauthLink} to="/login">Login</NavLink>
            </div>)
}

export default NavAuth;