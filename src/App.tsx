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
    const [error, setError] = useState(false);

    const incriseCurCountHandler = () => {

        setSettingsCount({...settingsCount, currentValue: settingsCount.currentValue + 1})
    }
    const resetCountHandler = () => {
        setSettingsCount({...settingsCount, currentValue: settingsCount.startValue})
    }
    const changeStartValueHandler = (newStartValue: number) => {
        console.log(newStartValue)
        setSettingsCount({...settingsCount, startValue: newStartValue})
    }
    const changeMaxValueHandler = (newMaxValue: number) => {
        console.log(newMaxValue)
        setSettingsCount({...settingsCount, maxValue: newMaxValue})
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/counter'}/>}/>
                    <Route path={'/counter'}
                           element={<MainCounter
                               startValue={settingsCount.startValue}
                               maxValue={settingsCount.maxValue}
                               currentValue={settingsCount.currentValue}
                               error={error}
                               incCount={incriseCurCountHandler}
                               resetCount={resetCountHandler}
                               someError={setError}
                           />}/>
                    <Route path={'/settings'} element={<SettingForCounter
                        startValue={settingsCount.startValue}
                        maxValue={settingsCount.maxValue}
                        changeStartValue={changeStartValueHandler}
                        changeMaxValue={changeMaxValueHandler}
                        error={setError}
                    />}/>
                </Routes>
            </div>
        </div>
    );
}



