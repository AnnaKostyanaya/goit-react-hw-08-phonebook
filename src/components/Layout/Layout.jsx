import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import style from "../Layout/Layout.module.css";

const Layout = () => {
return (
<>
    <header className={style.header}>
        <Navigation className={style.nav} />
    </header>
    <main className={style.main}>
        <Suspense>
            <Outlet />
        </Suspense>
    </main>
</>
);
};

export default Layout;