import { createStore } from 'redux';

// Action generators - funzioni che restituiscono oggetti azione
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. i Reducers sono FUNZIONI PURE
// 2. NON CAMBIARE MAI LO STATE I L'ACTION

const countReducer = (state = {count : 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());  
});

// Azioni per aumentare il Counter
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));


// uso generator
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// setto il valore di count
store.dispatch(setCount({ count: -100 }));