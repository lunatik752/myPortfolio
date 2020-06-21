import React from 'react';
import styles from './Header.module.css';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavBar/>
            </div>

        </div>
    );
}

export default Header;
