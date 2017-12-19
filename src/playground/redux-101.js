import { createStore } from 'redux';

const store = createStore((state = {count : 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());  
});

// Azioni per aumentare il Counter
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

// Azioni per resettare il Counter
store.dispatch({
  type: 'DECREMENT'
});

// Azioni per resettare il Counter
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

// setto il valore di count
store.dispatch({
  type: 'SET',
  count: 101
})