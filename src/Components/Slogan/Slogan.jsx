import React from 'react';
import styles from './Slogan.module.css';
import SectionTitle from "../SectionTitle/SectionTitle";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                    <SectionTitle sectionTitle={'LET\'S WORK TOGETHER!'}/>
                <div className={styles.sloganButton}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
