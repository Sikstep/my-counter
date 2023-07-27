import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css';
import {SuperButton} from './SuperButton';

type MainCounterType = {
    maxValue: number
    currentValue: number
    incCount: () => void

    resetCount: () => void

}
export const MainCounter: React.FC<MainCounterType> = ({
                                                           incCount,
                                                           resetCount,
                                                           maxValue,
                                                           currentValue,


                                                       }) => {

    const incCountHandler = () => {
        if (currentValue < maxValue) {
            incCount()
        }
    }

    return (
        <>
            <h2 className={currentValue >= maxValue ? s.h2Class_error : s.h2Class}>
                {currentValue}
            </h2>
            <div className={s.buttonBox}>
                <SuperButton changeCount={incCountHandler} disabled={currentValue >= maxValue}>Inc</SuperButton>
                <SuperButton changeCount={() => resetCount()}>Reset</SuperButton>
                <NavLink to={'/settings'}>
                    <button>Set</button>
                </NavLink>
            </div>
        </>
    );
};

