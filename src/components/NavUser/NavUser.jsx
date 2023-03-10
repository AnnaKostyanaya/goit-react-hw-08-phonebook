import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../redux/auth/auth-selectors";

import { logout } from "../../redux/auth/auth-operations";

import Button from '@mui/material/Button';


const NavUser = () => {
    const {email} = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogout = ()=> {
        dispatch(logout());
    }

    return (
        <div>
            <p>{email}</p> 
            <Button variant="contained" onClick={onLogout}>Logout</Button>
        </div>
    )
}

export default NavUser;