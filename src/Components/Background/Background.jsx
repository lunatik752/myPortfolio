import React from 'react';
import styles from './Background.module.css';
import img from '../../assets/image/bg1.jpg'


const Background = () => {
    return (
        <div className={styles.backgroundWrapper}>
            <img className={styles.background} src={img} alt=""/>
        </div>
    );
}

export default Background;
