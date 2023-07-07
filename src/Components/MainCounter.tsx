import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css';
import {SuperButton} from './SuperButton';

type MainCounterType = {
    count: number
    maxValue: number
    error: boolean
    incCount: () => void
    someError: (error: boolean) => void
    resetCount: () => void

}
export const MainCounter: React.FC<MainCounterType> = ({
                                                           incCount,
                                                           someError,
                                                           count,
                                                           resetCount,
                                                           maxValue,
                                                           error

                                                       }) => {
    const incCountHandler = () => {
        if (count < maxValue) {
            incCount()
        } else {
            someError(true)
        }
    }

    return (
        <>
            <h2 className={s.h2Class}>
                {count}
            </h2>
            <div className={s.buttonBox}>
                <SuperButton changeCount={incCountHandler}>Inc</SuperButton>
                <SuperButton changeCount={() => resetCount()}>Reset</SuperButton>
                <NavLink to={'/settings'}>
                    <button>Set</button>
                </NavLink>
            </div>
        </>
    );
};

