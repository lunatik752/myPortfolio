import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import SectionTitle from "../SectionTitle/SectionTitle";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <SectionTitle sectionTitle={'Мои скилы'}/>
                <div className={styles.mySkills}>
                    <Skill skill='React'/>
                    <Skill skill='Redux'/>
                    <Skill skill='HTML'/>
                    <Skill skill='CSS'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
