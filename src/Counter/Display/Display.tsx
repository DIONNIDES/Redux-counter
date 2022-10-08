import React from 'react';
import styles from './Display.module.css';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {StateType} from '../../redux/counter-reducer';

export type DisplayPropsType = {
}


export const Display = (props: DisplayPropsType) => {

    let state = useSelector<AppRootStateType, StateType>(state => state.counter);
    let {minCount,maxCount, count, error, errorSettings, hint, activeCounter} = state;

    return (
        <div className={error || errorSettings ? styles.error_display : styles.display_wrapper}>

            {
                errorSettings
                    ? <div className={styles.error_message}>{errorSettings}</div>
                    : hint ? <div
                        className={styles.error_message}>{hint}</div> : count <= maxCount ? count : maxCount
            }
        </div>
    );
};
