import moment from 'moment';
import getSpeseVisibili from '../../selectors/expenses';

// creo un mock delle spese
const speseTest = [{
  id: '1',
  descrizione: 'Gomme',
  note: '',
  importo: 195,
  creataAlle: 0
}, {
  id: '2',
  descrizione: 'Affitto',
  note: '',
  importo: 109500,
  creataAlle: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  descrizione: 'Carta di Credito',
  note: '',
  importo: 4500,
  creataAlle: moment(0).add(4, 'days').valueOf()
}];

// TESTO IL FILTRO IN BASE AD UN VALORE DI TESTO INSERITO
test('dovrebbe filtrare in base ad un valore testuale', () => {
  // creo il filtro col testo
  const filtriTest = {
    testo: 't',
    // ed i valori default
    ordinatoPer: 'data',
    dataInizio: undefined,
    dataFine: undefined
  };

  const risultato = getSpeseVisibili(speseTest, filtriTest);

  expect(risultato).toEqual([
    speseTest[2],
    speseTest[1]
  ]);
});

// TESTO IL FILTRO IN BASE AD UNA DATA DI INIZIO
test('dovrebbe filtrare in base ad una Data di Inizio', () => {
  // creo il filtro con la data Inizio
  const filtriTest = {
    testo: '',
    ordinatoPer: 'data',
    dataInizio: moment(0),
    dataFine: undefined
  };

  const risultato = getSpeseVisibili(speseTest, filtriTest);

  expect(risultato).toEqual([
    speseTest[2],
    speseTest[0]
  ]);
});

// TESTO IL FILTRO IN BASE AD UNA DATA DI FINE
test('dovrebbe filtrare in base ad una Data di Fine', () => {
  // creo il filtro con la data Fine
  const filtriTest = {
    testo: '',
    ordinatoPer: 'data',
    dataInizio: undefined,
    dataFine: moment(0).add(2, 'days')
  };

  const risultato = getSpeseVisibili(speseTest, filtriTest);

  expect(risultato).toEqual([
    speseTest[0],
    speseTest[1]
  ]);
});

// TESTO IL FILTRO IN BASE ALL'ORDINAMENTO PER DATA
test('dovrebbe ordinare in base alla Data', () => {
  // creo il filtro con la data Fine
  const filtriTest = {
    testo: '',
    ordinatoPer: 'data',
    dataInizio: undefined,
    dataFine: undefined
  };

  const risultato = getSpeseVisibili(speseTest, filtriTest);

  expect(risultato).toEqual([
    speseTest[2],
    speseTest[0],
    speseTest[1]
  ]);
});

// TESTO IL FILTRO IN BASE ALL'ORDINAMENTO PER IMPORTO
test('dovrebbe ordinare in base all\'Importo', () => {
  // creo il filtro con la data Fine
  const filtriTest = {
    testo: '',
    ordinatoPer: 'importo',
    dataInizio: undefined,
    dataFine: undefined
  };

  const risultato = getSpeseVisibili(speseTest, filtriTest);

  expect(risultato).toEqual([
    speseTest[1],
    speseTest[2],
    speseTest[0]
  ]);
});