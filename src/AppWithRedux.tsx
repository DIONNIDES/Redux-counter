import React from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';
import {useAppSelector} from './redux/store';
import {InitialStateType} from './redux/counter-reducer';


const AppWithRedux = () => {
    console.log('AppWithRedux');

    let state = useAppSelector<InitialStateType>(state => state.counter);
    let {minCount, maxCount, count, error, errorSettings, hint, activeCounter} = state

    return (
        <div className="App">

            {
                activeCounter
                    ? <CounterSettings/>
                    : <Counter
                        minCount={minCount}
                        maxCount={maxCount}
                        count={count}
                        error={error}
                        errorSettings={errorSettings}
                        hint={hint}

                    />
            }
        </div>


    );
}

export default AppWithRedux;




