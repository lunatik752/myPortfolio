import React from 'react';
import s from './Slogan.module.css';

function Slogan() {
    return (
        <div className={s.slogan}>
            <div className={s.container}>
                <div className={s.sloganText}>
                    <span>Рассматриваю варианты удаленной работы</span>
                </div>
                <div className={s.sloganButton}>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
