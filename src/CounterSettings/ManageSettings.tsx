import React, {memo, useCallback} from 'react';
import styles from './ManageSettings.module.css';
import {Button} from '../Counter/Manage/Buttons/Button';
import {useDispatch, useSelector} from 'react-redux';
import {InitialStateType, setActiveCounterAC, setCountAC,} from '../redux/counter-reducer';
import {AppRootStateType} from '../redux/store';


export type ManagePropsType = {
    // setToLocalStorage: () => void

}
export const ManageSettings = memo((props: ManagePropsType) => {
    console.log('ManageSettings')
    let state = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    let {minCount, maxCount, count, error, errorSettings, hint, activeCounter} = state;
    const dispatch = useDispatch();

    const onClickSetHandler = useCallback(() => {
        dispatch(setActiveCounterAC(false))
        dispatch(setCountAC(minCount))
    }, [dispatch, minCount]);

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={!!(errorSettings)} name={'set'} callBack={onClickSetHandler}/>
        </div>
    );
});
