const { createStore } = require('redux');

const count = { value: 0 };

const reducer = (state = count, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value:  state.value - 1 };
    return state;
};

const store = createStore(reducer);

console.log(store.getState().value);

store.dispatch({ type: 'UP' });

console.log(store.getState().value);
/*
    UP, DOWN

*/