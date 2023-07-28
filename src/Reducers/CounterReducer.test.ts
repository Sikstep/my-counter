import {changeMaxValueAC, changeStartValueAC, CounterReducer, incriseCurCountAC, resetCountAC} from './CounterReducer';


describe('CounterReducer', () => {
    let state = {
        startValue: 1,
        currentValue: 1,
        maxValue: 10,
    };

    it('should increase current counter value by 1', () => {
        const action = incriseCurCountAC();
        const newState = CounterReducer(state, action);
        expect(newState.currentValue).toEqual(state.currentValue + 1);
    });

    it('should reset counter value to start value', () => {
        state = {
            startValue: 1,
            currentValue: 10,
            maxValue: 10,
        };
        const action = resetCountAC();
        const newState = CounterReducer(state, action);
        expect(newState.currentValue).toEqual(state.startValue);
    });

    it('should change start value and reset current value', () => {
        const newStartValue = 5;
        const action = changeStartValueAC(newStartValue);
        const newState = CounterReducer(state, action);
        expect(newState.startValue).toEqual(newStartValue);
        expect(newState.currentValue).toEqual(newStartValue);
    });

    it('should change maximum value', () => {
        const newMaxValue = 15;
        const action = changeMaxValueAC(newMaxValue);
        const newState = CounterReducer(state, action);
        expect(newState.maxValue).toEqual(newMaxValue);
    });
});