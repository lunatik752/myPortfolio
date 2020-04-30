import React from 'react';
import styles from './Main.module.css';
import photo from '../../assets/image/IMG_20200404_140331.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <p>Привет!</p>
                    <div className={styles.name}>
                        <span>Меня зовут </span><span>Максим Белый</span>
                    </div>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <img className={styles.myPhoto}
                        src={photo}
                        alt='myPhoto'/>
                </div>
            </div>
        </div>
    );
}

export default Main;
