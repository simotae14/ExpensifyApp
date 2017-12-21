import { createStore, combineReducers } from 'redux';

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