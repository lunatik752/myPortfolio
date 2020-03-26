import React from 'react';
import s from './Header.module.css';
import NavBar from "./NavBar";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavBar/>
            </div>

        </div>
    );
}

export default Header;
