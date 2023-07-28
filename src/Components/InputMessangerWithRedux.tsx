import React, {ChangeEvent, useState} from 'react';
import s from '../App.module.css'
//
// type InputCountType = {
//     startValue?: number
//     maxValue?: number
//     inputName: string
//     newStartValue?: (newValue: number | undefined) => void
//     newMaxValue?: (newValue: number | undefined) => void
// }

export const InputMessanger: React.FC<InputCountType> = ({startValue, maxValue, inputName, newStartValue, newMaxValue}) => {

    const [inputValue, setInputValue] = useState<number | undefined>(startValue ? startValue : maxValue);



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

