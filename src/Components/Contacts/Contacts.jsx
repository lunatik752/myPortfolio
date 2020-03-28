import React from 'react';
import s from './Contacts.module.css';

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <div className={s.contactsTitle}>
                    <span>Рассматриваю варианты удаленной работы</span>
                </div>
                <div className={s.myContacts}>
                    <span>address: Minsk</span>
                    <span>mail: myMail.gmail.com</span>
                    <span>other info</span>
                </div>
                <div className={s.contactsButton}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
