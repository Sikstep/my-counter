import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {SuperButton} from './Components/SuperButton';


function App() {
    const [counter, setCounter] = useState<number>(0);

    const incCount = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }

    }

    const resetCount = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <div className={s.wrapper}>
                <div className={counter === 5 ? `${s.maxCount} ${s.counterBox}` : s.counterBox}>{counter}</div>
                <div className={s.buttonBox}>
                    <SuperButton changeCount={incCount} disabled={counter === 5}>inc</SuperButton>
                    <SuperButton changeCount={resetCount} disabled={counter === 0}>reset</SuperButton>
                </div>
            </div>
        </div>
    );
}

export default App;
