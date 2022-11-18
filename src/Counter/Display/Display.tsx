import React, {memo} from 'react';
import styles from './Display.module.css';

export type DisplayPropsType = {
    maxCount: number
    count: number
    error: boolean
    errorSettings: string | null
    hint: string | null
}


export const Display = memo(({maxCount, count, error, errorSettings, hint}: DisplayPropsType) => {
    console.log('Display');

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
});
