import styles from './Counter.module.css';
import {Display} from './Display/Display';
import {Manage} from './Manage/Manage';
import {memo} from 'react';

export type CounterType = {
    minCount: number
    maxCount: number
    count: number
    error: boolean
    errorSettings: string | null
    hint: string | null
}

export const Counter = memo(({minCount, maxCount, count, error, errorSettings, hint}: CounterType) => {
    console.log('Counter');
    return (
        <div className={styles.counter_wrapper}>
            <Display
                maxCount={maxCount}
                count={count}
                error={error}
                errorSettings={errorSettings}
                hint={hint}
            />
            <Manage
                minCount={minCount}
                maxCount={maxCount}
                count={count}
                error={error}
                errorSettings={errorSettings}
                hint={hint}

            />
        </div>
    );
});

