import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootReducerType} from '../Redux/store';
import {changeMaxValueAC, changeStartValueAC, SettingsCountType} from '../Reducers/CounterReducer';

// type SettingForCounterType = {
//     startValue: number
//     maxValue: number
//     changeStartValue: (newStartValue: number) => void
//     changeMaxValue: (newMaxValue: number) => void
//
// }
export const SettingForCounterWithRedux = () => {

    const state = useSelector<RootReducerType, SettingsCountType>(state => state.counterReducer)
    const dispatch = useDispatch()

    const [newStartValue, setNewStartValue] = useState(state.startValue);
    const [newMaxValue, setNewMaxValue] = useState(state.maxValue);
    const [currentError, setCurrentError] = useState(false);

    useEffect(() => {
        setNewMaxValue(state.maxValue)
    }, [state.maxValue])

    const newMaxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(+e.currentTarget.value);
        if (+e.currentTarget.value > newStartValue && +e.currentTarget.value >= 0 && newStartValue >= 0) {
            setCurrentError(false)
        } else {
            setCurrentError(true)
        }
    }
    const newStartOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(+e.currentTarget.value);
        if (+e.currentTarget.value < newMaxValue && +e.currentTarget.value >= 0) {
            setCurrentError(false)
        } else {
            setCurrentError(true)
        }
    }
    const onclickHandler = () => {
        dispatch(changeMaxValueAC(newMaxValue));
        dispatch(changeStartValueAC(newStartValue));

    }

    return (
        <div className={s.settingsWrapper}>
            <div className={s.inputs}>
                <div className={s.inputCount}>
                    <div>max value:</div>
                    <input type="number" value={newMaxValue} onChange={newMaxOnChangeHandler}
                           className={currentError ? s.inputError : ''}/>
                </div>
                <div className={s.inputCount}>
                    <div>start value:</div>
                    <input type="number" value={newStartValue} onChange={newStartOnChangeHandler}
                           className={currentError ? s.inputError : ''}/>
                </div>
            </div>
            <div className={s.buttonBox}>
                <NavLink to={'/counter'}><SuperButton changeCount={onclickHandler}
                                                      disabled={currentError}>Back</SuperButton></NavLink>
            </div>
        </div>
    );
};

