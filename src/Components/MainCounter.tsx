import React from 'react';
import s from '../App.module.css';
import {SettingForCounter} from './SettingForCounter';
import {SuperButton} from './SuperButton';

type MainCounterType = {
    startValue: number
    count: number
    setCount: (count: number) => void
}
export const MainCounter: React.FC<MainCounterType> = ({count, setCount}) => {
    const IncrimentHandler = () => {
        setCount(++count);
    }

    const ResetHandler = () => {
        setCount(0);
    }

    return (
        <>
            <h2 className={s.h2Class}>
                {count}
            </h2>
            <div className={s.buttonBox}>
                <SuperButton changeCount={}/>
                <SuperButton changeCount={}/>
                <SettingForCounter/>
            </div>
        </>
    );
};

