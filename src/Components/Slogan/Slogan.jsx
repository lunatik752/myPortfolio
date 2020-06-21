import React from 'react';
import styles from './Slogan.module.css';
import SectionTitle from "../../common/components/SectionTitle/SectionTitle";
import Button from "../../common/components/Button/Button";

const Slogan = () => {
    return (
        <div className={styles.sloganBackground}>
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <SectionTitle sectionTitle={'Let\'s work together!'}/>
                    <Button title='Нанять меня'/>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
