import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.sloganText}>
                    <span>LET'S WORK TOGETHER!</span>
                </div>
                <div className={styles.sloganButton}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
