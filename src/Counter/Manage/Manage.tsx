import React, {memo, useCallback} from 'react';
import styles from './Manage.module.css'
import {Button} from './Buttons/Button';
import {useDispatch} from 'react-redux';
import {setActiveCounterAC, setCountAC, setErrorAC, setMaxCountAC, setMinCountAC} from '../../redux/counter-reducer';


export type ManagePropsType = {
    minCount:number
    maxCount:number
    count:number
    error:boolean
    errorSettings:string|null
    hint:string|null
}
export const Manage = memo(({minCount, maxCount, count, error, errorSettings, hint}: ManagePropsType) => {
    console.log('Manage');
    const dispatch = useDispatch();

    let income = 'INC';
    let reset = 'reset';
    let set = 'set';

    const incrementCount = useCallback(() => {

        const newCountValue = count + 1;
        if (newCountValue === maxCount) {
            dispatch(setCountAC(newCountValue))
            dispatch(setErrorAC(true));

        } else {
            dispatch(setCountAC(newCountValue));
        }
    }, [dispatch, count]);

    const cleanCount = useCallback(() => {
        dispatch(setCountAC(minCount))
        dispatch(setErrorAC(false))
    }, [dispatch, minCount]);


    const setActiveCounter = useCallback(() => {
        dispatch(setMinCountAC(minCount))
        dispatch(setCountAC(minCount))
        dispatch(setMaxCountAC(maxCount))
        dispatch(setActiveCounterAC(true))
    }, [dispatch, minCount, maxCount]);

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={!!(error || errorSettings || hint)} name={income}
                    callBack={incrementCount}/>
            <Button disabled={!!(errorSettings || hint)} name={reset}
                    callBack={cleanCount}/>
            <Button disabled={!!(errorSettings || hint)} name={set}
                    callBack={setActiveCounter}/>
        </div>
    );
});
