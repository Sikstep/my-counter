import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from './SuperButton';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css'
import {InputMessanger} from './InputMessanger';

type SettingForCounterType = {
    startValue: string
    maxValue: string
    changeStartValue: (newStartValue: string) => void
    changeMaxValue: (newMaxValue: string) => void
    error: (error: boolean) => void
}
export const SettingForCounter: React.FC<SettingForCounterType> = ({
                                                                       startValue,
                                                                       maxValue,
                                                                       changeStartValue,
                                                                       changeMaxValue,
                                                                       error
                                                                   }) => {

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);
    const [currentError, setCurrentError] = useState(false);

    const newMaxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewMaxValue(e.currentTarget.value);
        if (e.currentTarget.value > newStartValue && e.currentTarget.value >= '0') {
            setCurrentError(false)
        } else {
            setCurrentError(true)
        }
    }
    const newStartOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewStartValue(e.currentTarget.value);
        if (e.currentTarget.value < newMaxValue && e.currentTarget.value >= '0') {
            setCurrentError(false)
        } else {
            setCurrentError(true)
        }
    }
    const onclickHandler = () => {
            changeMaxValue(newMaxValue);
            changeStartValue(newStartValue);
    }

    return (
        <div className={s.settingsWrapper}>
            <div className={s.inputs}>
                <div className={s.input}>
                    <div>max value:</div>
                    <input type="number" value={newMaxValue} onChange={newMaxOnChangeHandler} />
                </div>
                <div className={s.input}>
                    <div>start value:</div>
                    <input type="number" value={newStartValue} onChange={newStartOnChangeHandler}/>
                </div>
            </div>
            <div className={s.buttonBox}>
                <NavLink to={'/counter'}><SuperButton changeCount={onclickHandler} disabled={currentError}>Set</SuperButton></NavLink>
            </div>
        </div>
    );
};

