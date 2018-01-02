// SET_TESTO_FILTRO
export const setTestoFiltro = (testo = "") => ({
  type: "SET_TESTO_FILTRO",
  testo
});

// ORDINATO_PER_DATA
export const ordinatoPerData = () => ({
  type: "ORDINATO_PER_DATA"
});

// ORDINATO_PER_IMPORTO
export const ordinatoPerImporto = () => ({
  type: "ORDINATO_PER_IMPORTO"
});

// SET_DATA_INIZIO
export const setDataInizio = dataInizio => ({
  type: "SET_DATA_INIZIO",
  dataInizio
});

// SET_END_DATE
export const setDataFine = dataFine => ({
  type: "SET_DATA_FINE",
  dataFine
});