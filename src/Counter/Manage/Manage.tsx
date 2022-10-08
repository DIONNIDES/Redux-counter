import React from 'react';
import styles from './Manage.module.css'
import {Button} from './Buttons/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
    setActiveCounterAC, setCountAC,
    setErrorAC,
    setErrorSettingsAC,
    setHintAC, setMaxCountAC,
    setMinCountAC, StateType
} from '../../redux/counter-reducer';
import {AppRootStateType} from '../../redux/store';


export type ManagePropsType = {
}
export const Manage = (props: ManagePropsType) => {

    const dispatch = useDispatch();
    let state = useSelector<AppRootStateType, StateType>(state => state.counter)
    let {minCount,maxCount, count, error, errorSettings, hint, activeCounter} = state

    let income = 'INC';
    let reset = 'reset';
    let set = 'set';

    const incrementCount = () => {

        const newCountValue = count + 1;
        if (newCountValue === maxCount) {
            dispatch(setCountAC(newCountValue))
            dispatch(setErrorAC(true));

        }
        else {
            dispatch(setCountAC(newCountValue));}
    }

    const cleanCount = () => {
        dispatch(setCountAC(minCount))
        dispatch(setErrorAC(false))
    }


    const setActiveCounter = () => {
        dispatch(setMinCountAC(minCount))
        dispatch(setCountAC(minCount))
        dispatch(setMaxCountAC(maxCount))
        dispatch(setActiveCounterAC(true))
    }

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
};
