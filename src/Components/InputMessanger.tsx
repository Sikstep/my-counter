import React, {ChangeEvent, useState} from 'react';

type InputMessangerType = {
    setMessage: (messages: string[]) => void
    message: string[]
}

export const InputMessanger: React.FC<InputMessangerType> = ({setMessage, message}) => {
    const [inputValue, setInputValue] = useState('');

    const onClickSentHandler = () => {
        if (inputValue.trim() === '') {
            return
        } else {
            setMessage([inputValue.trim(), ...message])
            setInputValue('')

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

