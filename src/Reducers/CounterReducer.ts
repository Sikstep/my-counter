
export type SettingsCountType = {
    startValue: number
    currentValue: number
    maxValue: number
}
type ActionsType = incriseCurCountType | resetCountType | changeStartValueType


let initState: SettingsCountType = {
    startValue: 0,
    currentValue: 0,
    maxValue: 0
}
export const CounterReducer = (state = initState , action: ActionsType): SettingsCountType => {
 switch (action.type) {
     case `INCRISE_CURR_COUNT`: {
         return {...state, currentValue: state.currentValue + 1}
     }
     case 'RESET_COUNT': {
         return {...state, currentValue: state.startValue}
     }
     case 'CHANGE_START_VALUE': {
         return {...state, startValue: action.payload, currentValue: action.payload}
     }
     default:
         return state
 }

}

type incriseCurCountType = ReturnType<typeof incriseCurCountAC>
type resetCountType = ReturnType<typeof resetCountAC>
type changeStartValueType = ReturnType<typeof changeStartValueAC>
const incriseCurCountAC = () => {
    return {
        type: 'INCRISE_CURR_COUNT'
    } as const
}

const resetCountAC = () => {
    return {
        type: 'RESET_COUNT'
    } as const
}

const changeStartValueAC = (newStartValue: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: newStartValue
    } as const
}

const changeMaxValueAC = (newMaxValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: newMaxValue
    } as const
}