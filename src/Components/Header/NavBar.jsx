import React from 'react';
import styles from './NavBar.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link  activeClass="active" to="" spy={true} smooth={true}  duration={500}
                  className={styles.link} onClick={()=> scroll.scrollToTop()}>Main</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true}  duration={500}
                  className={styles.link}>Skills</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true}  duration={500}
                  className={styles.link}>Projects</Link>
            <Link activeClass="active" to="contacts" spy={true} smooth={true}  duration={500}
                  className={styles.link}>Contacts</Link>
        </div>
    );
}

export default NavBar;
