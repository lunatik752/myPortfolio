import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import SectionTitle from "../../common/components/SectionTitle/SectionTitle";
import redux from '../../assets/icons/redux.svg'
import git from '../../assets/icons/git.svg'
import javascript from '../../assets/icons/js.svg'
import react from '../../assets/icons/react.svg'
import css from '../../assets/icons/css3.svg'
import html from '../../assets/icons/html.svg'
import {Fade} from "react-reveal";


const Skills = () => {
    return (
        <div className={styles.skills} id={'skills'}>
            <div className={styles.container}>
                <Fade clear>
                    <SectionTitle sectionTitle={'Skills'}/>
                    <div className={styles.mySkills}>
                        <Skill skill='React' icon={react}/>
                        <Skill skill='Redux' icon={redux}/>
                        <Skill skill='js' icon={javascript}/>
                        <Skill skill='HTML' icon={html}/>
                        <Skill skill='CSS' icon={css}/>
                        <Skill skill='git' icon={git}/>
                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default Skills;

