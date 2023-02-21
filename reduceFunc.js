/*Reduce function action dispatch hole kebol call hoy
REDUX er reducer function application er action guluke amader logic onuzayi reduce kore ekti updated single value return kore
reduce function ti pure function hote hoy
reduce function ekti object return kore
 */
const actions = [

    { type: 'inc', payload: 1 },
    { type: 'inc', payload: 1 },
    { type: 'inc', payload: 1 },
    { type: 'dec', payload: 1 },
]
const reducer = (state, action) => {
    // state=initialState
    // state hocce result or previous result
    // action hocce actions array er protiti object

    if (action.type === 'inc') {
        return {
            ...state,
            value: state.value + action.payload

        }
    }
    else if (action.type === 'dec') {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state
    }
}
const initialState = {
    value: 0
}
// initialState ti reducer function er state er moddhe pawa jabe
const value = actions.reduce(reducer, initialState)
console.log(value);
