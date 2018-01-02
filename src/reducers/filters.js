const filtriReducerDefaultState = {
  testo: "",
  ordinatoPer: "data",
  dataInizio: undefined,
  dataFine: undefined
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
        dataInizio: action.dataFine
      };
    // caso default
    default:
      return state;
  }
};