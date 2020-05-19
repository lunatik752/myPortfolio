import React from 'react';
import styles from './Link.module.css';

function Link(props) {
    return (
        <div className={styles.linkWrapper}>
            <a href="">
                <img src={props.icon} alt=""/>
            </a>
        </div>
    );
}

export default Link;
