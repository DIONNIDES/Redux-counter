import {counterReducer} from './counter-reducer';
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {loadState, saveState} from '../utills/localStorage';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter: counterReducer,
})
//создаем переменную, в которую будет сохраняться стейт из localStorage
const  persistedState = loadState();
// создаём store и помещаем туда помимо rootReducer еще и насш сохраненный стейт из localStorage
export const store = legacy_createStore(rootReducer,persistedState, applyMiddleware(thunk))

store.subscribe(()=>{
   saveState({
       counter: store.getState().counter
   })
})

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store