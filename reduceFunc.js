const actions = [

    { type: 'inc', payload: 1 },
    { type: 'inc', payload: 1 },
    { type: 'inc', payload: 1 },
    { type: 'dec', payload: 1 },
]
const reducer = (state, action) => {
    if (action.type === 'inc') {
        return {
            ...state,
            payload: state.payload + 1

        }
    }
    else if (action.type === 'dec') {
        return {
            ...state,
            payload: state.payload - 1

        }
    } else {
        return state
    }
}
const initialState = {
    value: 0
}
const value = actions.reduce(reducer, initialState.value)