import { createStore } from 'redux';

const store = createStore((state = {count : 0}) => {
  return state;
});

// uso il metodo getState
console.log(store.getState());