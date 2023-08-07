import React, {ChangeEvent, useState} from 'react';
import s from '../App.module.css'
import {useSelector} from 'react-redux';
import {RootReducerType} from '../Redux/store';
import {SettingsCountType} from '../Reducers/CounterReducer';
//
// type InputCountType = {
//     startValue?: number
//     maxValue?: number
//     inputName: string
//     newStartValue?: (newValue: number | undefined) => void
//     newMaxValue?: (newValue: number | undefined) => void
// }

export const InputMessangerWithRedux = () => {
    const state = useSelector<RootReducerType, SettingsCountType>(state => state.counterReducer)

    const [inputValue, setInputValue] = useState<number | undefined>(state.startValue ? state.startValue : state.maxValue);



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) || '0') {
        setInputValue(Number(e.currentTarget.value))
        }

    }
    const onBlurHandler = () => {
        if (startValue && newStartValue) {
            newStartValue(inputValue)
        }
        if (maxValue && newMaxValue) {
            newMaxValue(inputValue)
        }
    }

    return (
        <div className={s.input}>
            <div>{inputName}</div>
            <input type={'number'} value={inputValue}
                   onChange={onChangeHandler} onBlur={onBlurHandler}/>
        </div>
    );
};

