import React from 'react';
import s from './Skills.module.css';
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.heading}>
                    <span>Мои скиллы</span>
                </div>
                <div className={s.mySkills}>
                    <Skill skill='React'/>
                    <Skill skill='Redux'/>
                    <Skill skill='HTML'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
