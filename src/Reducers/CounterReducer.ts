
export type SettingsCountType = {
    startValue: number
    currentValue: number
    maxValue: number
}
type ActionsType = incriseCurCountType | resetCountType | changeStartValueType | changeMaxValueType


let initState: SettingsCountType = {
    startValue: 0,
    currentValue: 0,
    maxValue: 5
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
     case 'CHANGE_MAX_VALUE': {
         return {...state, maxValue: action.payload}
     }
     default:
         return state
 }

}

type incriseCurCountType = ReturnType<typeof incriseCurCountAC>
type resetCountType = ReturnType<typeof resetCountAC>
type changeStartValueType = ReturnType<typeof changeStartValueAC>
type changeMaxValueType = ReturnType<typeof changeMaxValueAC>
export const incriseCurCountAC = () => {
    return {
        type: 'INCRISE_CURR_COUNT'
    } as const
}

export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT'
    } as const
}

export const changeStartValueAC = (newStartValue: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: newStartValue
    } as const
}

export const changeMaxValueAC = (newMaxValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: newMaxValue
    } as const
}