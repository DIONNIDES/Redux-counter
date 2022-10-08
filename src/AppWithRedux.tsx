import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {
    setCountAC,
    setErrorAC,
    setErrorSettingsAC,
    setHintAC,
    setMaxCountAC,
    setMinCountAC,
    StateType
} from './redux/counter-reducer';

function AppWithRedux() {


/*    let [minCount, setMinCount] = useState(0);
    let [maxCount, setMaxCount] = useState(0);

    let [count, setCount] = useState<number>(minCount);
    let [error, setError] = useState<boolean>(false);
    let [errorSettings, setErrorSettings] = useState<string | null>('');
    let [hint, setHint] = useState<string | null>('')
    let [activeCounter, setActiveCounter] = useState(false);*/

    let state = useSelector<AppRootStateType, StateType>(state => state.counter);
    const dispatch = useDispatch();

    let {minCount,maxCount, count, error, errorSettings, hint, activeCounter} = state

/*    useEffect(() => {
            let minCountValueAsString = localStorage.getItem('minCount');
            let maxCountValueAsString = localStorage.getItem('maxCount');

            if (minCountValueAsString && maxCountValueAsString) {
                minCount = JSON.parse(minCountValueAsString);
                maxCount = JSON.parse(maxCountValueAsString);
                setMinCount(minCount);
                setMaxCount(maxCount);
            }
        }, []
    );*/

/*
    const setToLocalStorage = () => {

        if (minCount < MINCOUNT || minCount > MAXCOUNT || minCount >= maxCount || maxCount < MINCOUNT || maxCount > MAXCOUNT) {
            setError(true);
        } else {
            localStorage.setItem('minCount', JSON.stringify(minCount));
            localStorage.setItem('maxCount', JSON.stringify(maxCount))
            setCount(minCount);
            setError(false);
            setHint('');
        }
    }
*/





    return (
        <div className="App">

            {
                activeCounter
                ? <CounterSettings/>
                    : <Counter/>
            }
        </div>


    );
}

export default AppWithRedux;
