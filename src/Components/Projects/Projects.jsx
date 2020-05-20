import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle/SectionTitle";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <SectionTitle sectionTitle={'Projects'}/>
                <div className={styles.myProjects}>
                    <ProjectItem title='TodoList'/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
