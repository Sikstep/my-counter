import React from 'react';
import {SuperButton} from './SuperButton';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css'
import {InputMessanger} from './InputMessanger';

type SettingForCounterType = {
    startValue: number
    maxValue: number
    changeStartValue: (newStartValue: number) => void
    changeMaxValue: (newMaxValue: number) => void
}
export const SettingForCounter: React.FC<SettingForCounterType> = ({
                                                                       startValue,
                                                                       maxValue,
                                                                       changeStartValue,
                                                                       changeMaxValue
                                                                   }) => {
    let newStartValue: number | undefined;
    let newMaxValue: number | undefined;


    const setNewStartValue = (newValue: number | undefined) => {
        newStartValue = newValue;
    }
    const setNewMaxValue = (newValue: number | undefined) => {
        newMaxValue = newValue;
    }

    const onclickHandler = () => {

    }

    return (
        <div className={s.settingsWrapper}>
            <div className={s.inputs}>
                <InputMessanger maxValue={maxValue} inputName={'max value: '} newMaxValue={setNewMaxValue}/>
                <InputMessanger startValue={startValue} inputName={'start value: '} newStartValue={setNewStartValue}/>
            </div>
            <div className={s.buttonBox}>
                <NavLink to={'/counter'}><SuperButton changeCount={onclickHandler}>Set</SuperButton></NavLink>
            </div>
        </div>
    );
};

