import React from 'react';
import styles from './Link.module.css';

function Link(props) {
    return (
        <div className={styles.linkWrapper}>
            <a href="">{props.icon}</a>
        </div>
    );
}

export default Link;
