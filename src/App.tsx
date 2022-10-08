/*
import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';

function App() {

    const MAXCOUNT = 10;
    const MINCOUNT = 0;

    let [minCount, setMinCount] = useState(0);
    let [maxCount, setMaxCount] = useState(0);

    let [count, setCount] = useState<number>(minCount);
    let [error, setError] = useState<boolean>(false);
    let [errorSettings, setErrorSettings] = useState<string | null>('');
    let [hint, setHint] = useState<string | null>('')
    let [activeCounter, setActiveCounter] = useState(false);

    useEffect(() => {
            let minCountValueAsString = localStorage.getItem('minCount');
            let maxCountValueAsString = localStorage.getItem('maxCount');

            if (minCountValueAsString && maxCountValueAsString) {
                minCount = JSON.parse(minCountValueAsString);
                maxCount = JSON.parse(maxCountValueAsString);
                setMinCount(minCount);
                setMaxCount(maxCount);
            }
        }, []
    );

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


    const updateMinCountValue = (value: number) => {
        setMinCount(value);
        if (MAXCOUNT < value || value < MINCOUNT || value >= maxCount || maxCount > MAXCOUNT || maxCount < MINCOUNT) {
            setErrorSettings('value is incorrect!');
        } else {
            setErrorSettings('');
            setError(false);
            setHint('enter values and press set');
        }

    }

    const updateMaxCountValue = (value: number) => {
        setMaxCount(value);
        if (MAXCOUNT < value || value < MINCOUNT || value <= minCount || minCount > MAXCOUNT || minCount < MINCOUNT) {
            setErrorSettings('value is incorrect!');
        } else {
            setErrorSettings('');
            setError(false)
            setHint('enter values and press set');
        }
    }


    const incrementCount = () => {
        const newCountValue = count + 1;
        if (newCountValue === maxCount) setError(true);
        else setCount(newCountValue);
    }

    const cleanCount = () => {
        setCount(minCount);
        setError(false);
    }

    return (
        <div className="App">

            {
                activeCounter
                ? <CounterSettings
                        maxCount={maxCount}
                        minCount={minCount}
                        errorSettings={errorSettings}
                        setToLocalStorage={setToLocalStorage}
                        updateMinCountValue={updateMinCountValue}
                        updateMaxCountValue={updateMaxCountValue}
                        setActiveCounter={setActiveCounter}
                    />
                    : <Counter
                        count={count}
                        incrementCount={incrementCount}
                        cleanCount={cleanCount}
                        error={error}
                        errorSettings={errorSettings}
                        hint={hint}
                        minCount={minCount}
                        maxCount={maxCount}
                        setActiveCounter={setActiveCounter}
                    />
            }
        </div>


    );
}

export default App;
*/

export {}