import moment from 'moment';
import filtriReducer from '../../reducers/filters';

// Setup Case default
test('dovrebbe settare i valori default di filtri', () => {
  // recupero lo state
  const state = filtriReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    testo: '',
    ordinatoPer: 'data',
    dataInizio: moment().startOf('month'),
    dataFine: moment().endOf('month')
  });
});

// Setup Case ordinamento per Importo
test('dovrebbe settare i valori del filtro con ordinamento per Importo', () => {
  // recupero lo state
  const state = filtriReducer(undefined, { type: 'ORDINATO_PER_IMPORTO' });

  expect(state.ordinatoPer).toBe('importo');
});

// Setup Case ordinamento per Importo
test('dovrebbe settare i valori del filtro con ordinamento per Importo', () => {
  // recupero lo state
  const state = filtriReducer(undefined, { type: 'ORDINATO_PER_IMPORTO' });

  expect(state.ordinatoPer).toBe('importo');
});