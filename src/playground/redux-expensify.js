import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

// AGGIUNGI_SPESA
const aggiungiSpesa = (
    { 
      descrizione = '', 
      note = '', 
      quantita = 0, 
      creataAlle = 0 
    } = {}
  ) => ({
  type: 'AGGIUNGI_SPESA',
  spesa: {
    id: uuid(),
    descrizione,
    note,
    quantita,
    creataAlle
  }
});

// RIMUOVI_SPESA
const rimuoviSpesa = ({ id } = {}) => ({
  type: 'RIMUOVI_SPESA',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const speseReducerDefaultState = [];

// Reducer per Spese
const speseReducer = (state = speseReducerDefaultState, action) => {
  // creo lo switch per le varie Actions
  switch (action.type) {
    // caso di aggiunta spesa
    case 'AGGIUNGI_SPESA':
      return [ 
        ...state, 
        action.spesa
      ];
    // caso di rimozione spesa
    case 'RIMUOVI_SPESA':
      return state.filter(({ id }) => id !== action.id);
    // caso default ritorna lo state invariato
    default:
      return state;
  }
};


const filtriReducerDefaultState = {
  testo: '',
  ordinatoPer: 'data',
  dataInizio: undefined,
  dataFine: undefined
};

// Reducer per Filters
const filtriReducer = (state = filtriReducerDefaultState, action) => {
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
    spese: speseReducer,
    filtri: filtriReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// invoco il metodo addExpense
const spesaUno = store.dispatch(aggiungiSpesa({ descrizione: 'Affitto', quantita: 100}));
const spesaDue = store.dispatch(aggiungiSpesa({ descrizione: 'Caffé', quantita: 300}));

store.dispatch(rimuoviSpesa({ id: spesaUno.spesa.id }));


// oggetto di cui vogliamo tenere traccia
const demoState = {
  spese: [{
    id: 'jakljkljkaldjk',
    descrizione: 'January Rent',
    note: 'This was the final payment for that address',
    quantita: 54500,
    creataAlle: 0
  }],
  // filters cui do un nome e un valore
  // posso settare anche un range
  filtri: {
    testo: 'affitto',
    ordinatoPer: 'quantita', // per date o amount
    dataInizio: undefined,
    dataFine: undefined
  }
};