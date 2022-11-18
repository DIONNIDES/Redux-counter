import React, {memo, useCallback} from 'react';
import styles from './DisplaySettings.module.css';
import {SuperInput} from './SuperInput/SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {setErrorAC, setErrorSettingsAC, setMaxCountAC, setMinCountAC, InitialStateType} from '../redux/counter-reducer';

export type DisplayPropsType = {}


export const DisplaySettings = memo((props: DisplayPropsType) => {
    console.log('DisplaySettings');

    const MAXCOUNT = 10;
    const MINCOUNT = 0;
    const INCORRECT_VALUE = 'value is incorrect!';
    let state = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    let {minCount, maxCount, errorSettings,} = state;
    const dispatch = useDispatch();

    const updateMinCountValue = useCallback((value: number) => {
        dispatch(setMinCountAC(value))
        if (MAXCOUNT < value || value < MINCOUNT || value >= maxCount || maxCount > MAXCOUNT || maxCount < MINCOUNT) {
            dispatch(setErrorSettingsAC(INCORRECT_VALUE))
        } else {
            dispatch(setErrorSettingsAC(null));
            dispatch(setErrorAC(false))
        }

    }, [dispatch, maxCount]);

    const updateMaxCountValue = useCallback((value: number) => {
        dispatch(setMaxCountAC(value))
        if (MAXCOUNT < value || value < MINCOUNT || value <= minCount || minCount > MAXCOUNT || minCount < MINCOUNT) {
            dispatch(setErrorSettingsAC(INCORRECT_VALUE))
        } else {
            dispatch(setErrorSettingsAC(null));
            dispatch(setErrorAC(false))
        }
    }, [dispatch, minCount]);

    let finalClassName = errorSettings ? styles.error_input : ''

    return (
        <div className={styles.display_wrapper}>
            <SuperInput countLimit={maxCount} callback={updateMaxCountValue}
                        finalClassName={finalClassName}/>
            <SuperInput countLimit={minCount} callback={updateMinCountValue}
                        finalClassName={finalClassName}/>
        </div>
    );
});
