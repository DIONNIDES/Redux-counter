import React from 'react';
import styles from './../Counter/Counter.module.css'
import {ManageSettings} from './ManageSettings';
import {DisplaySettings} from './DisplaySettings';

export type CounterType = {
}

export const CounterSettings = (props: CounterType) => {

    return (
        <div className={styles.counter_wrapper}>
            <DisplaySettings/>
            <ManageSettings
                // setToLocalStorage={props.setToLocalStorage}
            />
        </div>
    );
};