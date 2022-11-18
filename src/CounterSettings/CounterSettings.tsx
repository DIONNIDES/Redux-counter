import React, {memo} from 'react';
import styles from './../Counter/Counter.module.css'
import {ManageSettings} from './ManageSettings';
import {DisplaySettings} from './DisplaySettings';

export type CounterType = {}

export const CounterSettings = memo((props: CounterType) => {
    console.log('CounterSettings');
    return (
        <div className={styles.counter_wrapper}>
            <DisplaySettings/>
            <ManageSettings
                // setToLocalStorage={props.setToLocalStorage}
            />
        </div>
    );
});