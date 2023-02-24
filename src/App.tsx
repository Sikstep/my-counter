import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {SuperButton} from './Components/SuperButton';
import {InputMessanger} from './Components/InputMessanger';



function App() {

    const startValue = 0;
    const maxValue = 5;

    const [counter, setCounter] = useState<number>(startValue);
    const [messages, setMessages] = useState<string[]>([]);
    const incCount = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }

    const resetCount = () => {
        setCounter(0)
    }

    const mappedMessages = messages.map((el, index) => {
        return (
            <li key={index+1}>{el}</li>
        )
    })

    const onClickDeleteHandler = () => {
        if (messages.length !== 0) {
            setMessages(messages.slice(0, messages.length - 1))
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
