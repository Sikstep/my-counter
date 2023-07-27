import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import s from '../App.module.css';
import {SuperButton} from './SuperButton';

type MainCounterType = {
    startValue: number
    maxValue: number
    currentValue: number
    error: boolean
    incCount: () => void
    someError: (error: boolean) => void
    resetCount: () => void

}
export const MainCounter: React.FC<MainCounterType> = ({
                                                           incCount,
                                                           someError,
                                                           startValue,
                                                           resetCount,
                                                           maxValue,
                                                           currentValue,
                                                           error

                                                       }) => {
    useEffect(() => {
        if (currentValue >= maxValue) {
            someError(true);
        } else if (error) {
            someError(false);
        }
    }, [currentValue, maxValue, someError, error, startValue]);
    const incCountHandler = () => {
        if (currentValue < maxValue) {
            incCount()
        } else {
            someError(true)
        }
    }

    return (
        <>
            <h2 className={s.h2Class}>
                {currentValue}
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

