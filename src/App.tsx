import React, {useReducer, useState} from 'react';
import './App.css';
import s from './App.module.css';
import {SuperButton} from './Components/SuperButton';
import {InputMessanger} from './Components/InputMessanger';

function App() {

    const startValue = 0;
    const maxValue = 5;


    return (
        <div className="App">
            <div className={s.wrapper}>
            </div>
        </div>
    );
}

export default App;
