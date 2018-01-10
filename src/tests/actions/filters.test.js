import moment from 'moment';
import { 
  setTestoFiltro, 
  ordinatoPerData, 
  ordinatoPerImporto, 
  setDataInizio, 
  setDataFine 
} from '../../actions/filters';

// Creazione dell'Azione Set Start Date
// SET_DATA_INIZIO
test('dovrebbe creare l\'oggetto action di setDataInizio', () => {
  const action = setDataInizio(moment(0));

  expect(action).toEqual({
    type: "SET_DATA_INIZIO",
    dataInizio: moment(0)
  });
});

// Creazione dell'Azione Set End Date
// SET_DATA_FINE
test('dovrebbe creare l\'oggetto action di setDataFine', () => {
  const action = setDataFine(moment(0));

  expect(action).toEqual({
    type: "SET_DATA_FINE",
    dataFine: moment(0)
  });
});

// Creazione dell'Azione Set Testo Filtro con un valore passato
// SET_TESTO_FILTRO
test('dovrebbe creare l\'oggetto action di setTestoFiltro con un valore passato', () => {
  const testo = "Un testo di ricerca";
  const action = setTestoFiltro(testo);

  expect(action).toEqual({
    type: "SET_TESTO_FILTRO",
    testo
  });
});

// Creazione dell'Azione Set Testo Filtro con valore di default
// SET_TESTO_FILTRO
test('dovrebbe creare l\'oggetto action di setTestoFiltro con il valore Default', () => {
  const action = setTestoFiltro();

  expect(action).toEqual({
    type: "SET_TESTO_FILTRO",
    testo: ''
  });
});

// Creazione dell'Azione Ordinato Per Data
// ORDINATO_PER_DATA
test('dovrebbe creare l\'oggetto action di ordinatoPerData', () => {
  expect(ordinatoPerData()).toEqual({
    type: "ORDINATO_PER_DATA"
  });
});

// Creazione dell'Azione Ordinato Per Importo
// ORDINATO_PER_IMPORTO
test('dovrebbe creare l\'oggetto action di ordinatoPerImporto', () => {
  expect(ordinatoPerImporto()).toEqual({
    type: "ORDINATO_PER_IMPORTO"
  });
});