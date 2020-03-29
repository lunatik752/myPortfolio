import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <span>Мои скиллы</span>
                </div>
                <div className={styles.mySkills}>
                    <Skill skill='React'/>
                    <Skill skill='Redux'/>
                    <Skill skill='HTML'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
