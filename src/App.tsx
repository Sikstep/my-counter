import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainCounter} from './Components/MainCounter';
import {SettingForCounter} from './Components/SettingForCounter';

type SettingsCountType = {
    startInitValue: number
    maxInitValue: number
    startValue: number
    maxValue: number
}

export function App() {
    const InitialState: SettingsCountType = {
        startInitValue: 0,
        maxInitValue: 5,
        startValue: 0,
        maxValue: 5,

    }

    const [settingsCount, setSettingsCount] = useState<SettingsCountType>(InitialState);
    const [error, setError] = useState(false);

    const incriseCountHandler = () => {

        setSettingsCount({...settingsCount, startValue: settingsCount.startValue + 1})
    }
    const resetCountHandler = () => {
        setSettingsCount({...settingsCount, startValue: InitialState.startValue})
    }
    const changeStartValueHandler = (newStartValue: number) => {
        setSettingsCount({...settingsCount, startValue: newStartValue})
    }
    const changeMaxValueHandler = (newMaxValue: number) => {
        setSettingsCount({...settingsCount, startValue: newMaxValue})
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/counter'}/>}/>
                    <Route path={'/counter'}
                           element={<MainCounter
                               count={settingsCount.startValue}
                               maxValue={settingsCount.maxValue}
                               error={error}
                               incCount={incriseCountHandler}
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



