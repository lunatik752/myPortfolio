import React from 'react';
import styles from './Projects.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';
import SectionTitle from '../../common/components/SectionTitle/SectionTitle';
import socialNetwork from '../../assets/image/social-network.jpg'
import todoList from '../../assets/image/todolist.jpg'
import counter from '../../assets/image/counter.jpg'

const  Projects = () =>  {

   const social = {
       backgroundImage: `url(${socialNetwork})`,
   }
   const todo = {
       backgroundImage: `url(${todoList})`,
   }
   const count = {
       backgroundImage: `url(${counter})`,
   }


    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <SectionTitle sectionTitle={'Projects'}/>
                <div className={styles.myProjects}>
                    <ProjectItem
                        style={todo}
                        title='TodoList'
                    description={' проета Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета'}/>
                    <ProjectItem
                        style={social}
                        title='Social network'
                        description={'Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета проета Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета проета Краткое описание проета Краткое описание проета Краткое описание проета Краткое описание проета'}/>
                    <ProjectItem
                        style={count}
                        title='Counter'
                        description={'Краткое описание проета Краткое описание проета  Краткое описание проета Краткое описание проета Краткое описание проета'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
