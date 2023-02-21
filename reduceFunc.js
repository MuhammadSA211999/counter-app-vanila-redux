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
            value: state.value + 1

        }
    }
    else if (action.type === 'dec') {
        return {
            ...state,
            value: state.value - 1

        }
    } else {
        return state
    }
}
const initialState = {
    value: 0
}
const value = actions.reduce(reducer, initialState)
console.log(value);
