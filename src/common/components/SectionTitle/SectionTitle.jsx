import React from 'react';
import styles from './SectionTitle.module.css';


const SectionTitle = (props) => {
    return (
        <div className={styles.titleWrapper}>
            <div className={styles.title}>
                <h2>{props.sectionTitle}</h2>
            </div>
            <div className={styles.line}>
            </div>
        </div>
    );
}

export default SectionTitle;
