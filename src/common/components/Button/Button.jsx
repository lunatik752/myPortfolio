import React from "react";
import styles from './Button.module.scss';


const Button = (props) => {
    return (
        <>
            <button className={styles.buttonSubmit}>{props.title}</button>
        </>
    )
}


export default Button;