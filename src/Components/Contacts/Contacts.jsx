import React from 'react';
import styles from './Contacts.module.css';
import SectionTitle from "../../common/components/SectionTitle/SectionTitle";
import Button from "../../common/components/Button/Button";
import {Field, reduxForm} from "redux-form";
import axios from "axios";
import {Fade} from "react-reveal";

const Contacts = () => {
    const onSubmit = (formData) => {
        axios.post('https://lunatik752-smtp-nodejs-server.herokuapp.com/sendMessage',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            })
            .then((res) => {
                alert('Ваше письмо отправелно. В ближайшее время я свяжусь с вами!')
            });
    }

    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.container}>
                <Fade clear>
                    <SectionTitle sectionTitle={'Contact'}/>
                    <ContactsReduxForm onSubmit={onSubmit}/>
                </Fade>
            </div>
        </div>
    );
}

const ContactsForm = (props) => {
    return (
        <Fade clear>
            <form className={styles.contactsForm} onSubmit={props.handleSubmit}>
                <Field placeholder="Name" name='name' component='input' autocomplete='off'/>
                <Field placeholder="E-mail" name='email' component='input' autocomplete='off'/>
                <Field placeholder="Your message" name='message' component='textarea'/>
                <Button title='Отправить'/>
            </form>
        </Fade>
    );
}

const ContactsReduxForm = reduxForm({
    form: 'contact'
})(ContactsForm)


export default Contacts;
