import React from 'react';
import s from './Projects.module.css';
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.container}>
        <div className={s.heading}>
          <span>Мои проекты</span>
        </div>
        <div className={s.myProjects}>
          <ProjectItem/>
          <ProjectItem/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
