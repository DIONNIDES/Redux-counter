const SET_MIN_COUNT = 'SET_MIN_COUNT';
const SET_MAX_COUNT = 'SET_MAX_COUNT';
const SET_COUNT = 'SET_COUNT';
const SET_ERROR = 'SET_ERROR';
const SET_ERROR_SETTINGS = 'SET_ERROR_SETTINGS';
const SET_HINT = 'SET_HINT';
const SET_ACTIVE_COUNTER = 'SET_ACTIVE_COUNTER';

type setMinCountACType = ReturnType<typeof setMinCountAC>;
type setMaxCountACType = ReturnType<typeof setMaxCountAC>;
type setCountACType = ReturnType<typeof setCountAC>;
type setErrorACType = ReturnType<typeof setErrorAC>;
type setErrorSettingsACType = ReturnType<typeof setErrorSettingsAC>;
type setHintACType = ReturnType<typeof setHintAC>;
type setActiveCounterACType = ReturnType<typeof setActiveCounterAC>;

type AllActionsType =
    setMinCountACType
    | setMaxCountACType
    | setCountACType
    | setErrorACType
    | setErrorSettingsACType
    | setHintACType
    | setActiveCounterACType

export type InitialStateType = typeof initialState;

let initialState = {
    minCount: 0,
    maxCount: 0,
    count: 0,
    error: false,
    errorSettings: null,
    hint: null,
    activeCounter: false,
};

export const counterReducer = (state: InitialStateType = initialState, action: AllActionsType) => {
    switch (action.type) {
        case SET_MIN_COUNT: {
            return {...state, minCount: action.payload.minCount}
        }
        case SET_MAX_COUNT: {
            return {...state, maxCount: action.payload.maxCount}
        }
        case SET_COUNT: {
            return {...state, count: action.payload.count}
        }
        case SET_ERROR: {
            return {...state, error: action.payload.error}
        }
        case SET_ERROR_SETTINGS: {
            return {...state, errorSettings: action.payload.errorSettings}
        }
        case SET_HINT: {
            return {...state, hint: action.payload.hint}
        }
        case SET_ACTIVE_COUNTER: {
            return {...state, activeCounter: action.payload.status}
        }
        default:{
            return state
        }
    }
}

export const setMinCountAC = (minCount: number) => {
    return {
        type: SET_MIN_COUNT,
        payload: {
            minCount
        }
    } as const
}

export const setMaxCountAC = (maxCount: number) => {
    return {
        type: SET_MAX_COUNT,
        payload: {
            maxCount
        }
    } as const
}

export const setCountAC = (count: number) => {
    return {
        type: SET_COUNT,
        payload: {
            count
        }
    } as const
}

export const setErrorAC = (error: boolean) => {
    return {
        type: SET_ERROR,
        payload: {
            error
        }
    } as const
}

export const setErrorSettingsAC = (errorSettings: string | null) => {
    return {
        type: SET_ERROR_SETTINGS,
        payload: {
            errorSettings
        }
    } as const
}

export const setHintAC = (hint: string | null) => {
    return {
        type: SET_HINT,
        payload: {
            hint
        }
    } as const
}

export const setActiveCounterAC = (status: boolean) => {
    return {
        type: SET_ACTIVE_COUNTER,
        payload: {
            status
        }
    } as const
}

// export const getCountLimitsTC = ():AppThunk => (dispatch) => {
//     let stateFromLocalStorage:InitialStateType = loadState();
//     dispatch(setMinCountAC(stateFromLocalStorage));
//     dispatch(setMaxCountAC(stateFromLocalStorage.maxCount));
// }