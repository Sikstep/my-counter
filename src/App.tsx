import React, {useState} from 'react';
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

export function App() {

    const [settingsCount, setSettingsCount] = useState<SettingsCountType>({
        startValue: 0,
        currentValue: 0,
        maxValue: 5,
    });

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
                               startValue={settingsCount.startValue}
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



