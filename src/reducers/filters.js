import moment from 'moment';

const filtriReducerDefaultState = {
  testo: "",
  ordinatoPer: "data",
  dataInizio: moment().startOf('month'),
  dataFine: moment().endOf('month')
};

// Reducer per Filters
export default (state = filtriReducerDefaultState, action) => {
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
        dataFine: action.dataFine
      };
    // caso default
    default:
      return state;
  }
};