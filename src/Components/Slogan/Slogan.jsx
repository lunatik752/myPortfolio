import React from 'react';
import styles from './Slogan.module.css';
import SectionTitle from "../../common/components/SectionTitle/SectionTitle";

function Slogan() {
    return (
        <div className={styles.sloganBackground}>
        <div className={styles.slogan}>
            <div className={styles.container}>
                    <SectionTitle sectionTitle={'Let\'s work together!'}/>
                <div className={styles.sloganButton}>
                    <button>Нанять меня</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Slogan;
