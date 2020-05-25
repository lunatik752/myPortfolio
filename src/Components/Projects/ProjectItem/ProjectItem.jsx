import React from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = (props) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.image} style={props.style}>
                <div className={styles.buttonWatch}>
                    <button>Смотреть</button>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.projectTitle}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.shortDescription}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
