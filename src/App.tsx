import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {Route, Switch} from 'react-router-dom';
import {MainCounter} from './Components/MainCounter';

function App() {

    const startValue = 0;
    const maxValue = 5;

    const [count, setCount] = useState<number>(startValue);


    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <MainCounter startValue={startValue} count={count} setCount={setCount}/>
            </div>
        </div>
    );
}

export default App;
