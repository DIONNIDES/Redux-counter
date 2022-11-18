import {AppRootStateType} from '../redux/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('CounterState');
        if (!serializedState){
            return undefined
        }
        return JSON.parse((serializedState))
    }catch (error) {
        return undefined
    }
};


export const saveState = (state:AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('CounterState', serializedState)
    } catch (error){

    }
}