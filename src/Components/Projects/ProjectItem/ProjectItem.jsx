import React from 'react';
import s from './ProjectItem.module.css';

function ProjectItem(props) {
    return (
        <div className={s.projectWrapper}>
            <div className={s.project}>
                <div className={s.buttonWatch}>
                    <button>Смотреть</button>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.title}>
                    <p>Название проекта</p>
                </div>
                <div className={s.shortDescription}>
                    <p>Краткое описание проета</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
