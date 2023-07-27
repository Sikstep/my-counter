import React, { useState } from "react";
import styles from "./AppV2.module.css";

type SettingsProps = {
    min: number;
    max: number;
    onSave: (min: number, max: number) => void;
};
const Settings: React.FC<SettingsProps> = ({ min, max, onSave }) => {
    const [newMin, setNewMin] = useState(min);
    const [newMax, setNewMax] = useState(max);

    const handleSaveClick = () => {
        onSave(newMin, newMax);
    };

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>
            <label>
                Minimum value:
                <input
                    type="number"
                    value={newMin}
                    onChange={(e) => setNewMin(parseInt(e.target.value))}
                />
            </label>
            <br />
            <label>
                Maximum value:
                <input
                    type="number"
                    value={newMax}
                    onChange={(e) => setNewMax(parseInt(e.target.value))}
                />
            </label>
            <br />
            <button className={styles.saveButton} onClick={handleSaveClick}>
                Save
            </button>
        </div>
    );
};

type CounterProps = {
    min: number;
    max: number;
    initialCount: number;
};
const Counter: React.FC<CounterProps> = ({ min, max, initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const incrementCount = () => {
        setCount((prevCount) => (prevCount + 1 <= max ? prevCount + 1 : prevCount));
    };

    const resetCount = () => {
        setCount(min);
    };

    return (
        <div className={styles.counterContainer}>
            <div className={styles.counter}>
                <h1>Count: {count}</h1>
                <button className={styles.incrementButton} onClick={incrementCount}>
                    Increment
                </button>
                <button className={styles.resetButton} onClick={resetCount}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default function AppV2() {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);

    const handleSettingsSave = (newMin: number, newMax: number) => {
        setMin(newMin);
        setMax(newMax);
        setInitialCount(newMin);
    };

    const [initialCount, setInitialCount] = useState<number>(min);

    return (
        <div className={styles.appContainer}>
            <Counter min={min} max={max} initialCount={initialCount} />
            <Settings min={min} max={max} onSave={handleSettingsSave} />
        </div>
    );
}