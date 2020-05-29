import React from 'react';
import styles from './Contacts.module.css';
import SectionTitle from "../../common/components/SectionTitle/SectionTitle";
import Button from "../../common/components/Button/Button";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <SectionTitle sectionTitle={'Contact'}/>
                <form className={styles.contactsForm}>
                    <input placeholder="Name" type="text"/>
                    <input placeholder="E-mail" type="text"/>
                    <textarea placeholder="Your message">
                        </textarea>
                    <Button title='Отправить'/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
