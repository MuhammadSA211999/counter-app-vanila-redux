const initialState = {
    value: 0
}
// counter reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state
    }
}
// create store
const store = Redux.createStore(counterReducer)
const render = () => {
    const state = store.getState()
    counE.innerText = state.value.toString()
}
//catch the dom element 
// const inE = document.getElementById('increment')
const deE = document.getElementById('increment')
const counE = document.getElementById('counter')

inE.addEventListener('click', () => {
    store.dispatch({
        type: 'in'
    })
})
deE.addEventListener('click', () => {
    store.dispatch({
        type: 'de'
    })
})