import React from 'react';
import styles from './Counter.module.css';
import {Display} from './Display/Display';
import {Manage} from './Manage/Manage';

export type CounterType = {
}

export const Counter = (props: CounterType) => {
    return (
        <div className={styles.counter_wrapper}>
            <Display/>
            <Manage/>
        </div>
    );
};

