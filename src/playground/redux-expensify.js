import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = () => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid()
  }
});

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [];

// Reducer per Expenses
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  // creo lo switch per le varie Actions
  switch (action.type) {
    // caso default ritorna lo state invariato
    default:
      return state;
  }
};


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Reducer per Filters
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  // creo lo switch per le varie Actions
  switch (action.type) {
    // caso default
    default:
      return state;
  }
}

// creazione dello STORE
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

// oggetto di cui vogliamo tenere traccia
const demoState = {
  expenses: [{
    id: 'jakljkljkaldjk',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  // filters cui do un nome e un valore
  // posso settare anche un range
  filters: {
    text: 'rent',
    sortBy: 'amount', // per date o amount
    startDate: undefined,
    endDate: undefined
  }
};