import React, {useState} from 'react';
import './App.css';
import s from './App.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainCounter} from './Components/MainCounter';
import {SettingForCounter} from './Components/SettingForCounter';

type SettingsCountType = {
    startValue: number
    maxValue: number
}

export function App() {
    const InitialState: SettingsCountType = {
        startValue: 0,
        maxValue: 0
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
                               incCount={incriseCountHandler}
                               someError={error}
                               resetCount={resetCountHandler}
                               maxValue={settingsCount.maxValue}
                               changeStartValue={changeStartValueHandler}
                               changeMaxValue={changeMaxValueHandler}/>}/>
                    <Route path={'/settings'} element={<SettingForCounter
                        startValue={settingsCount.startValue}
                        maxValue={settingsCount.maxValue}
                        changeStartValue={changeStartValueHandler}
                        changeMaxValue={changeMaxValueHandler}/>}/>
                </Routes>
            </div>
        </div>
    );
}



