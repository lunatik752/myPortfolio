import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Мои проекты</span>
        </div>
        <div className={styles.myProjects}>
          <ProjectItem/>
          <ProjectItem/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
