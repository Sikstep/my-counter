import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css';
import {SuperButton} from './SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from '../Redux/store';
import {incriseCurCountAC, resetCountAC, SettingsCountType} from '../Reducers/CounterReducer';

// type MainCounterType = {
//     maxValue: number
//     currentValue: number
//     incCount: () => void
//
//     resetCount: () => void
//
// }
export const MainCounterWithRedux = () => {
    const state = useSelector<RootReducerType, SettingsCountType>(state => state.counterReducer)
    const dispatch = useDispatch();
    const incCountHandler = () => {
        if (state.currentValue < state.maxValue) {
            dispatch(incriseCurCountAC())
        }
    }

    return (
        <>
            <h2 className={state.currentValue >= state.maxValue ? s.h2Class_error : s.h2Class}>
                {state.currentValue}
            </h2>
            <div className={s.buttonBox}>
                <SuperButton changeCount={incCountHandler} disabled={state.currentValue >= state.maxValue}>Inc</SuperButton>
                <SuperButton changeCount={() => dispatch(resetCountAC())}>Reset</SuperButton>
                <NavLink to={'/settings'}>
                    <button>Set</button>
                </NavLink>
            </div>
        </>
    );
};

