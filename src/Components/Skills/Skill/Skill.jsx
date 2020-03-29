import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skillWrapper}>
            <div className={styles.skill}>
                <div className={styles.logo}>
                </div>
                <div className={styles.title}>
                    <span>{props.skill}</span>
                </div>
            </div>
            <div className={styles.description}>
                <p> Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default Skill;
