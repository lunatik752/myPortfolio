import React from 'react';
import styles from './Main.module.scss';
import photo from '../../assets/image/IMG_20200404_140331.jpg'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <p>Привет!</p>
                    <div className={styles.name}>
                        <p>Меня зовут</p>
                        <span>Максим</span><span>Белый</span>
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
