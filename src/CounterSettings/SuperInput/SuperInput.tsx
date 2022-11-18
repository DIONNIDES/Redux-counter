import styles from '../DisplaySettings.module.css';
import React, {ChangeEvent, memo} from 'react';

type SuperInputPropsType = {
    countLimit: number
    callback: (value: number) => void
    finalClassName: string
}

export const SuperInput: React.FC<SuperInputPropsType> = memo(({countLimit, callback, finalClassName}) => {
    console.log('SuperInput');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }
    return (
        <div className={styles.display_field}>
            <p>max value: </p>  <input value={countLimit} onChange={onChangeHandler} type={'number'}
                                       className={finalClassName}/>
        </div>
    );
});
