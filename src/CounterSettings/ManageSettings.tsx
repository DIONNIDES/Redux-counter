import React from 'react';
import styles from './ManageSettings.module.css';
import {Button} from '../Counter/Manage/Buttons/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveCounterAC, setCountAC, StateType} from '../redux/counter-reducer';
import {AppRootStateType} from '../redux/store';


export type ManagePropsType = {
    // setToLocalStorage: () => void

}
export const ManageSettings = (props: ManagePropsType) => {

    let state = useSelector<AppRootStateType, StateType>(state => state.counter);
    let {minCount,maxCount, count, error, errorSettings, hint, activeCounter} = state;
    const dispatch = useDispatch();

    const onClickSetHandler = () => {
        // props.setToLocalStorage();
        dispatch(setActiveCounterAC(false))
        dispatch(setCountAC(minCount))
    }

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={!!(errorSettings)} name={'set'} callBack={onClickSetHandler}/>
        </div>
    );
};
