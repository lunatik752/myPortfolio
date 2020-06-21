import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <a href='' className={styles.link}>Главная</a>
            <a href='' className={styles.link}>Скиллы</a>
            <a href='' className={styles.link}>Проекты</a>
            <a href='' className={styles.link}>Контакты</a>
        </div>
    );
}

export default NavBar;
