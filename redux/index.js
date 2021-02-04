import redux, { createStore } from 'redux';

// Create action creators for having the count "increment" and "decrement"
export function increment() {
    return {
        type: "INCREMET",
    }
}
export function decrement() {
    return {
        type: "DECREMET",
    }
}

// Create a reducer to handle your increment and decrement actions
export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT" :
            return count + 1;
        case "DECREMENT" :
            return count - 1;
        default:
            return count;
    }
}

// Create a new Redux store
const store = createStore(reducer);

// Set up the subscribe function so we can more easily see the changes to the Redux state as they happen
store.subscribe(() => {
    console.log(store.getState())
})

// Export the store as a default export
export default store;
