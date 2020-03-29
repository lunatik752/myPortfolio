import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contactsTitle}>
                    <span>Контакты</span>
                </div>
                    <form className={styles.contactsForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea> </textarea>
                    </form>
                <div className={styles.contactsButton}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
