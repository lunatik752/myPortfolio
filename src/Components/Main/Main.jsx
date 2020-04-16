import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут <label>Максим </label><span>Белый</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                <img src='https://lh3.googleusercontent.com/OLJoYlE8bbSKXkjJkVv_sJdm_RkmuKaBNDijcs-bQGfilp1GP8Kc39Lnl4uABcdERYuwvjMPovR3xDRkV8Q4c5ChqGX_-JczIAkTagdcyfZOiXzPaQ2Yyg0hDmGb2sOuSrQNyAl2kKzD40SW9y0gvH3Kx4jOw5qZAEXPJzRPUmme_E_okKPidKXwA6_Sbx19CRQWkFJdIb6bTa8yvsF14HVHJsPa89V63ACRJHxUUt5_dsPGlHc7FgiyhO_JpwlDm5j0xDWgMj-e1sZcXFrnl9_9WJogDcr0WsKzYmQOSv1fmcSSc7f0aQVX8T7OGEQn_LvhzbSE_GkAdoaNpqQrT_fzT1VvugK-pJ7h1Wbe-b2jRk3szDBgUG4IcBFKjPLQEz2b2jKxTl7hpMGrCZSposlGcp8bdaQ3j6fPCwfNhR8yHQOolTpVk550nhki_F5kYgevPkW_UyFPzhrjmziAg7sRVPzlA1tu52I2gUZvSw9un_jVVDhovIO6EdRcuRGYg6qWCkqmyXmcf35iOF9GI6M18royy9j8ZO9Mds2p-JEEQ4GV13j07OplT3YGOKrcc2Liq2Zn4jovrvBdQhgmvVVnQaDQa3pT4cOPEvFpS4nkb5hC9FUaXN_b3QJjbk8FEl5CnWLmhMYalKMwX0Pjp3jA9vvVKzEaRDt8Q01t0RAaBiQJkUpNWk-yIB13=w728-h961-no' alt='myPhoto'/>
                </div>
            </div>
        </div>
    );
}

export default Main;
