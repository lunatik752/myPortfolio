import React from 'react';
import styles from './Main.module.css';

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
                    <img
                        src='https://lh3.googleusercontent.com/KdFFxEowRnpZP5XPLANMwaSkRwjsitwaSJGDf5MENIBpcJ72ceCMCl_wl1Gm8Fl42LgK-MWf9b-KmKG2MUNIxEnyG8CLYTd0AzJh_jIuZukrRJHlLeyEyemKKQQx0mWQQdd682EaZhmcXchCGS0J3sKuSLlwIsXZnM4JhObutCkBlz3ns-TjGgFr6dYfBRcX4O8D4Zr5EqthKo5nNgasSo-pUKRBvZNxZkCoa-DRnw3gUicpDRgWqMpTBu1eSAwYg_JJs-smqOQdnONb3H-CbUHMFgoa8YhyL1xVW7xbZEBcyWgp-ym8qmNHRWvKQAfbY-m4uCtOMTvHM4hwFpcM0fdWxQ0JTD2Em-KzmZRNrfb5s068ZX4Fxb51U31dpYgvdEnd-_bd3WVQIYf4ihvzOpdh9L3Q6Oj-KnNEQtzheGwUcl9a3Vgz1hoW4ePtRAd6Uw0mt-D5hPZQeR8LVdKwccF0_5TfCq0WS7JHQW8cy9Lra_0TErsjQf7hlOeROh-5bNyxcaEs_eu99x9d1isO84xhppW1g2VLgWkqUp1eH7V70sb-iQ1e76iezHsCcROWq6KOTW3bK4-IgHDup_Pyw37ilHU126C7ciXWR7yZ6LmL85gnJdYF5SlhrzdQWSUIL9KKRUEF4nHEvb2vD5s51iXg7dYuPfiKCAS8xczk0yJRrZbdtOLsFA3hjasH=w689-h909-no'
                        alt='myPhoto'/>
                </div>
            </div>
        </div>
    );
}

export default Main;
