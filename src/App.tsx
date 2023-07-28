import React, {useEffect, useState} from 'react';
import './App.css';
import s from './App.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainCounter} from './Components/MainCounter';
import {SettingForCounter} from './Components/SettingForCounter';

type SettingsCountType = {
    startValue: number
    currentValue: number
    maxValue: number
}

const stateKey = 'STATE_KEY'
const saveLocalStorage = (key: string, data: SettingsCountType) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const getlocalStorage = (key: string) => {
    let data = localStorage.getItem(key)
    if (!data) return
    return JSON.parse(data)
}

export function App() {

    const initialState = {
        startValue: 0,
        currentValue: 0,
        maxValue: 5,
    }

    const [settingsCount, setSettingsCount] = useState<SettingsCountType>(
        getlocalStorage(stateKey) || initialState
    );

    useEffect(() => {
        saveLocalStorage(stateKey, settingsCount)
    }, [settingsCount])

    const incriseCurCountHandler = () => {
        setSettingsCount(prevState => ({...prevState, currentValue: settingsCount.currentValue + 1}))
    }
    const resetCountHandler = () => {
        setSettingsCount(prevState => ({...prevState, currentValue: settingsCount.startValue}))
    }
    const changeStartValueHandler = (newStartValue: number) => {
        // console.log('inputStartValue - ' + newStartValue)
        setSettingsCount(prevState => ({...prevState, startValue: newStartValue}))
        setSettingsCount(prevState => ({...prevState, currentValue: newStartValue}))
    }
    const changeMaxValueHandler = (newMaxValue: number) => {
        // console.log('inputMaxValue - ' +newMaxValue)

        setSettingsCount(prevState => ({...prevState, maxValue: newMaxValue}))
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/settings'}/>}/>
                    <Route path={'/counter'}
                           element={<MainCounter
                               maxValue={settingsCount.maxValue}
                               currentValue={settingsCount.currentValue}
                               incCount={incriseCurCountHandler}
                               resetCount={resetCountHandler}

                           />}/>
                    <Route path={'/settings'} element={<SettingForCounter
                        startValue={settingsCount.startValue}
                        maxValue={settingsCount.maxValue}
                        changeStartValue={changeStartValueHandler}
                        changeMaxValue={changeMaxValueHandler}

                    />}/>
                </Routes>
            </div>
        </div>
    );
}



