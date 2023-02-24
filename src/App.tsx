import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {SuperButton} from './Components/SuperButton';
import {InputMessanger} from './Components/InputMessanger';

export type MessagesType = {
    id: string
    message: string
}

function App() {

    const startValue = 0;
    const maxValue = 5;

    const [counter, setCounter] = useState<number>(startValue);
    const [messages, setMessages] = useState<MessagesType[]>([]);
    const incCount = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }

    const resetCount = () => {
        setCounter(0)
    }

    const mappedMessages = messages.map(el => {
        return (
            <li key={el.id}>{el.message}</li>
        )
    })

    const onClickDeleteHandler = () => {
        if (messages.length === 0) {
            return
        } else {
            let lastMess = []
            setMessages([])
        }
    }

    return (
        <div className="App">
            <div className={s.wrapper}>
                <div className={counter === maxValue ? `${s.maxCount} ${s.counterBox}` : s.counterBox}>{counter}</div>
                <div className={s.buttonBox}>
                    <SuperButton changeCount={incCount} disabled={counter === maxValue}>inc</SuperButton>
                    <SuperButton changeCount={resetCount} disabled={counter === startValue}>reset</SuperButton>
                </div>
            </div>
            <InputMessanger setMessage={setMessages} message={messages}/>
            <button onClick={onClickDeleteHandler}>Delete last message</button>
            <ul>
                {mappedMessages}
            </ul>
        </div>
    );
}

export default App;
