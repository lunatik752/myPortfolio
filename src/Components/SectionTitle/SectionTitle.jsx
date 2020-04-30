import React from 'react';
import styles from './SectionTitle.module.css';


const SectionTitle = (props) => {
    return (
        <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
                {props.sectionTitle}
            </h2>
            <div className={styles.line}>
            </div>
        </div>
    );
}

export default SectionTitle;
