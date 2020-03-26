import React from 'react';
import s from './Skill.module.css';

function Skill(props) {
    return (
        <div className={s.skillWrapper}>
            <div className={s.skill}>
                <div className={s.logo}>
                </div>
                <div className={s.title}>
                    <span>{props.skill}</span>
                </div>
            </div>
            <div className={s.description}>
                <p> Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default Skill;
