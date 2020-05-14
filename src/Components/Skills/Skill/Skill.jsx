import React from 'react';
import styles from './Skill.module.css';
import redux from "../../../assets/icons/redux.svg";

function Skill(props) {
    return (
        <div className={styles.skillWrapper}>
            <div className={styles.skill}>
                <div className={styles.iconBox}>
                    <img className={styles.icon} src={props.icon} alt='icon'/>
                </div>
                <div className={styles.title}>
                    <h3>{props.skill}</h3>
                </div>
            </div>
            <div className={styles.description}>
                <p> Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default Skill;
