import React, { useState } from "react";
import "./styles.css";

type CounterProps = {};
const Counter: React.FC<CounterProps> = () => {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className="counterContainer">
            <div className="counter">
                <h1>Count: {count}</h1>
                <button className="incrementButton" onClick={incrementCount}>
                    Increment
                </button>
                <button className="resetButton" onClick={resetCount}>
                    Reset
                </button>
            </div>
            <div className="settings">
                <h2>Settings</h2>
                <label>
                    Minimum value:
                    <input type="number" defaultValue={0} />
                </label>
                <br />
                <label>
                    Maximum value:
                    <input type="number" defaultValue={100} />
                </label>
                <br />
                <button className="saveButton">Save</button>
            </div>
        </div>
    );
};

type AppProps = {};
const AppV2: React.FC<AppProps> = () => {
    return (
        <div className="appContainer">
            <Counter />
        </div>
    );
};

export default AppV2;