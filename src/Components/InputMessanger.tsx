import React, {ChangeEvent, useState} from 'react';
import {MessagesType} from '../App';
import {v1} from 'uuid';

type InputMessangerType = {
    setMessage: (messages: MessagesType[]) => void
    message: MessagesType[]
}

export const InputMessanger: React.FC<InputMessangerType> = ({setMessage, message}) => {
    const [inputValue, setInputValue] = useState('');

    const onClickSentHandler = () => {
        if (inputValue.trim() === '') {
            return
        } else {
            setMessage([{id: v1(), message: inputValue.trim()},...message])
        }
    }

    const onClickClearHandler = () => {
        setInputValue('')
    }



    return (
        <div>
            <div><input value={inputValue}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}/>
                <button onClick={onClickSentHandler}>send</button>
                <button onClick={onClickClearHandler}>clear</button>
            </div>

        </div>
    );
};

