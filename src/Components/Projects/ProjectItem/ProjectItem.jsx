import React from 'react';
import styles from './ProjectItem.module.css';

function ProjectItem() {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.project}>
                <div className={styles.buttonWatch}>
                    <button>Смотреть</button>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.projectTitle}>
                    <p>Название проекта</p>
                </div>
                <div className={styles.shortDescription}>
                    <p>Краткое описание проета</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
