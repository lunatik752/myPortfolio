import React from 'react';
import styles from './Footer.module.css';
import Link from "./Link/Link";
import vk from '../../assets/icons/vk.svg'
import telegram from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTitle}>
                    <span>Максим Белый</span>
                </div>
                <div className={styles.myLinks}>
                    <Link icon={telegram}/>
                    <Link icon={vk}/>
                    <Link icon={linkedin}/>
                    <Link icon={github}/>
                </div>
                <div className={styles.copyright}>
                    <span>© 2020 Все права защищены </span>
                </div>
            </div>

        </div>
    );
}

export default Footer;
