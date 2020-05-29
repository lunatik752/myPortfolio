import React from 'react';
import styles from './Footer.module.css';
import Link from "./Link/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'







function Footer() {

    const vk = <FontAwesomeIcon icon={faVk}/>;
    const github = <FontAwesomeIcon icon={faGithub}/>;
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn}/>;
    const telegram = <FontAwesomeIcon icon={faTelegramPlane}/>;

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTitle}>
                    <h2>Максим Белый</h2>
                </div>
                <div className={styles.myLinks}>
                    <Link icon={telegram}/>
                    <Link icon={vk}/>
                    <Link icon={linkedin}/>
                    <Link icon={github}/>
                </div>
                <div className={styles.copyright}>
                    <p>© 2020 Все права защищены </p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
