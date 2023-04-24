import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css';
import {SettingForCounter} from './SettingForCounter';
import {SuperButton} from './SuperButton';

type MainCounterType = {
    count: number
    incCount: () => void
    someError: boolean
    resetCount: () => void
    maxValue: number
    changeStartValue: (newStartValue: number) => void
    changeMaxValue: (newMaxValue: number) => void
}
export const MainCounter: React.FC<MainCounterType> = ({
                                                           incCount,
                                                           someError,
                                                           count,
                                                           resetCount,
                                                           maxValue,
                                                           changeMaxValue,
                                                           changeStartValue
                                                       }) => {

    return (
        <>
            <h2 className={s.h2Class}>
                {count}
            </h2>
            <div className={s.buttonBox}>
                <SuperButton changeCount={() => incCount()}>Inc</SuperButton>
                <SuperButton changeCount={() => resetCount()}>Reset</SuperButton>
                <NavLink to={'/settings'}>
                    <SettingForCounter startValue={count} maxValue={maxValue} changeStartValue={changeStartValue}
                                       changeMaxValue={changeMaxValue}/>
                </NavLink>
            </div>
        </>
    );
};

