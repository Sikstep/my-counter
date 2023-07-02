import React from 'react';
import {SuperButton} from './SuperButton';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css'

type SettingForCounterType = {
    startValue: number
    maxValue: number
    changeStartValue: (newStartValue: number) => void
    changeMaxValue: (newMaxValue: number) => void
}
export const SettingForCounter: React.FC<SettingForCounterType> = ({startValue,maxValue,changeStartValue,changeMaxValue}) => {

    const onclickHandler = () => {

    }

    return (
        <div className={s.buttonBox}>
            <NavLink to={'/counter'}><SuperButton changeCount={onclickHandler}>Set</SuperButton></NavLink>
        </div>
    );
};

