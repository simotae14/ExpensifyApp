import { createStore, combineReducers } from "redux";

import uuid from "uuid";

// AGGIUNGI_SPESA
const aggiungiSpesa = ({
  descrizione = "",
  note = "",
  importo = 0,
  creataAlle = 0
} = {}) => ({
  type: "AGGIUNGI_SPESA",
  spesa: {
    id: uuid(),
    descrizione,
    note,
    importo,
    creataAlle
  }
});

// RIMUOVI_SPESA
const rimuoviSpesa = ({ id } = {}) => ({
  type: "RIMUOVI_SPESA",
  id
});

// MODIFICA_SPESA
const modificaSpesa = (id, aggiornamenti) => ({
  type: "MODIFICA_SPESA",
  id,
  aggiornamenti
});

// SET_TESTO_FILTRO
const setTestoFiltro = (testo = "") => ({
  type: "SET_TESTO_FILTRO",
  testo
});

// ORDINATO_PER_DATA
const ordinatoPerData = () => ({
  type: "ORDINATO_PER_DATA"
});

// ORDINATO_PER_IMPORTO
const ordinatoPerImporto = () => ({
  type: "ORDINATO_PER_IMPORTO"
});

// SET_DATA_INIZIO
const setDataInizio = dataInizio => ({
  type: "SET_DATA_INIZIO",
  dataInizio
});

// SET_END_DATE
const setDataFine = dataFine => ({
  type: "SET_DATA_FINE",
  dataFine
});

const speseReducerDefaultState = [];

// Reducer per Spese
const speseReducer = (state = speseReducerDefaultState, action) => {
  // creo lo switch per le varie Actions
  switch (action.type) {
    // caso di aggiunta spesa
    case "AGGIUNGI_SPESA":
      return [...state, action.spesa];
    // caso di rimozione spesa
    case "RIMUOVI_SPESA":
      return state.filter(({ id }) => id !== action.id);
    // caso default ritorna lo state invariato
    case "MODIFICA_SPESA":
      return state.map(spesa => {
        if (spesa.id === action.id) {
          return {
            ...spesa,
            ...action.aggiornamenti
          };
        } else {
          return spesa;
        }
      });
    default:
      return state;
  }
};

const filtriReducerDefaultState = {
  testo: "",
  ordinatoPer: "data",
  dataInizio: undefined,
  dataFine: undefined
};

// Reducer per Filters
const filtriReducer = (state = filtriReducerDefaultState, action) => {
  // creo lo switch per le varie Actions
  switch (action.type) {
    // caso modifica testo filtro
    case "SET_TESTO_FILTRO":
      return {
        ...state,
        testo: action.testo
      };
    // caso ordinato per importo
    case "ORDINATO_PER_IMPORTO":
      return {
        ...state,
        ordinatoPer: "importo"
      };
    // caso ordinato per data
    case "ORDINATO_PER_DATA":
      return {
        ...state,
        ordinatoPer: "data"
      };
    // caso imposta data inizio
    case "SET_DATA_INIZIO":
      return {
        ...state,
        dataInizio: action.dataInizio
      };
    // caso imposta data fine
    case "SET_DATA_FINE":
      return {
        ...state,
        dataInizio: action.dataFine
      };
    // caso default
    default:
      return state;
  }
};

// CREO IL METODO CHE FILTRA LE MIE SPESE
// Recupero le spese visibili
const getSpeseVisibili = (
  spese,
  { testo, ordinatoPer, dataInizio, dataFine }
) => {
  // uso il filter sulle spese per filtrare in base ai parametri settati
  return spese.filter(spesa => {
    // istanzio i booleani che si occupano dei vari filtri per attivarli
    // il filter seleziona solo gli elementi che soddisfano condizione, ovvero che se il filtro ha dataInizio le spese
    // devono avere pty creataAlle >= a quel filtro
    const dataInizioMatch =
      typeof dataInizio !== "number" || spesa.creataAlle >= dataInizio;
    // il filter seleziona solo gli elementi che soddisfano condizione, ovvero che se il filtro ha dataInizio le spese
    // devono avere pty creataAlle >= a quel filtro
    const dataFineMatch =
      typeof dataFine !== "number" || spesa.creataAlle <= dataFine;
    // il filter seleziona solo gli elementi che soddisano la condizione, ovvero in sto caso se il testo passato è incluso
    // nella descrizione della spesa
    const testoMatch = spesa.descrizione.toLowerCase().includes(testo.toLowerCase());

    return dataInizioMatch && dataFineMatch && testoMatch;
  }).sort((a, b) => {
    // se ordino per data
    if(ordinatoPer === 'data') {
      return a.creataAlle < b.creataAlle ? 1 : -1;
    // se ordino per importo
    } else if(ordinatoPer === 'importo') {
      return a.importo < b.importo ? 1 : -1;
    }
  });
};

// creazione dello STORE
const store = createStore(
  combineReducers({
    spese: speseReducer,
    filtri: filtriReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  // recupero le spese visibili
  const speseVisibili = getSpeseVisibili(state.spese, state.filtri);
  console.log(speseVisibili);
});

// invoco il metodo addExpense
const spesaUno = store.dispatch(
  aggiungiSpesa({ descrizione: "Affitto", importo: 100, creataAlle: 1000 })
);
const spesaDue = store.dispatch(
  aggiungiSpesa({ descrizione: "Caffé", importo: 300, creataAlle: -21000 })
);

// store.dispatch(rimuoviSpesa({ id: spesaUno.spesa.id }));

// // modifico la seconda spesa
// store.dispatch(modificaSpesa(spesaDue.spesa.id, { importo: 500 }));

// modifico il testo del filtro di ricerca
// store.dispatch(setTestoFiltro('ff'));
// // modifico il testo del filtro di ricerca
// store.dispatch(setTestoFiltro());

// // modifico ordinamento per importo
store.dispatch(ordinatoPerImporto());
// // modifico ordinamento per data
// store.dispatch(ordinatoPerData());

// // setto la data di Inizio
// store.dispatch(setDataInizio(0));
// store.dispatch(setDataInizio());

// // setto la data di Fine
// store.dispatch(setDataFine(1250));

// oggetto di cui vogliamo tenere traccia
const demoState = {
  spese: [
    {
      id: "jakljkljkaldjk",
      descrizione: "January Rent",
      note: "This was the final payment for that address",
      importo: 54500,
      creataAlle: 0
    }
  ],
  // filters cui do un nome e un valore
  // posso settare anche un range
  filtri: {
    testo: "affitto",
    ordinatoPer: "importo", // per data o importo
    dataInizio: undefined,
    dataFine: undefined
  }
};

// const utente = {
//   nome: 'Jen',
//   eta: 24
// };

// console.log(
//   {
//     eta: 27,
//     ...utente,
//     luogo: 'Philadelphia'
//   }
// );
