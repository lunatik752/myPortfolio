import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTitle}>
                    <span>Максим Белый</span>
                </div>
                <div className={styles.myLinks}>
                    <div className={styles.link}>
                        <span>f</span>
                    </div>
                    <div className={styles.link}>
                        <span>vc</span>
                    </div>
                    <div className={styles.link}>
                        <span>in</span>
                    </div>
                    <div className={styles.link}>
                        <span>GitHub</span>
                    </div>

                </div>
                <div className={styles.copyright}>
                    <span>© 2020 Все права защищены </span>
                </div>
            </div>

        </div>
    );
}

export default Footer;
