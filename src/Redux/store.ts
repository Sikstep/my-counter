import {combineReducers, legacy_createStore} from 'redux';
import {CounterReducer} from '../Reducers/CounterReducer';

let RootReducer = combineReducers({
    counterReducer: CounterReducer
})


export let store = legacy_createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;