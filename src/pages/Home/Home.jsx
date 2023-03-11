import { FcContacts } from 'react-icons/fc';
import { IconContext } from "react-icons";

import style from "../Home/Home.module.css";

const Home = () => {

    
    return (
    <div className={style.chapter}>
        <p className={style.text}>Create your own contact book!</p>
        <IconContext.Provider value={{ size: "10em" }}>
            <div className={style.icon}>
                <FcContacts />
            </div>
        </IconContext.Provider>
    </div>
)};

export default Home;
