import styles from '../DisplaySettings.module.css';
import React, {ChangeEvent} from 'react';

type SuperInputPropsType = {
    countLimit:number
    callback:(value:number)=>void
    finalClassName:string
}

export const SuperInput:React.FC<SuperInputPropsType> = ({countLimit,callback, finalClassName}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        callback(Number(e.currentTarget.value))
    }
    return (
        <div className={styles.display_field}>
            <p>max value: </p>  <input value={countLimit} onChange={onChangeHandler} type={'number'}
                                       className={finalClassName}/>
        </div>
    );
};
