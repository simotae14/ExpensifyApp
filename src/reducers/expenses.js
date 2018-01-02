const speseReducerDefaultState = [];

// Reducer per Spese
export default (state = speseReducerDefaultState, action) => {
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