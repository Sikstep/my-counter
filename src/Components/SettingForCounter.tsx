import React, { useState } from 'react';
import {SuperButton} from './SuperButton';
import {NavLink} from 'react-router-dom';

type SettingForCounterType = {
    startValue: number
    maxValue: number
    changeStartValue: (newStartValue: number) => void
    changeMaxValue: (newMaxValue: number) => void
}
export const SettingForCounter: React.FC<SettingForCounterType> = ({startValue,maxValue,changeStartValue,changeMaxValue}) => {

    return (
        <div>
            <SuperButton changeCount={}>Set</SuperButton>
        </div>
    );
};

