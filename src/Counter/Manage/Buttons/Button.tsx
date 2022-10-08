import React from 'react';
import styles from './Button.module.css';

export type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled:boolean
    error?:boolean

}

export const Button = (props: ButtonPropsType) => {

    // const onClickHandler = () => {
    //     props.callBack()
    // }

    return (
        <button
            className={props.error ? styles.error_button :styles.button_wrapper}
                disabled={props.disabled}
                onClick={props.callBack}>{props.name}</button>
    );
};
