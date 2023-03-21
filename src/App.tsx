import React, {useReducer, useState} from 'react';
import './App.css';
import s from './App.module.css';
import {SuperButton} from './Components/SuperButton';
import {InputMessanger} from './Components/InputMessanger';


type State = {
    count: number
}

type Action = { type: 'INC' } | { type: 'RESET' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'INC':
            return {count: state.count + 1}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}

function App() {

    const startValue = 0;
    const maxValue = 5;

    // const [counter, setCounter] = useState<number>(startValue);

    const [messages, setMessages] = useState<string[]>([]);

    const [state, dispatch] = useReducer(reducer, {count: 0})


    const mappedMessages = messages.map((el, index) => {
        return (
            <li key={index + 1}>{el}</li>
        )
    })

    const onClickDeleteHandler = () => {
        if (messages.length !== 0) {
            setMessages(messages.slice(0, messages.length - 1))
        }
    }

    function incCount() {
        dispatch({type:'INC'})
    }

    function resetCount() {
        dispatch({type:"RESET"})
    }

    return (
        <div className="App">
            <div className={s.wrapper}>
                <div className={state.count === maxValue ? `${s.maxCount} ${s.counterBox}` : s.counterBox}>{state.count}</div>
                <div className={s.buttonBox}>
                    <SuperButton changeCount={incCount} disabled={state.count === maxValue}>inc</SuperButton>
                    <SuperButton changeCount={resetCount} disabled={state.count === startValue}>reset</SuperButton>
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
