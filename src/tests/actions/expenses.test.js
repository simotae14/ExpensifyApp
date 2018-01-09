import { aggiungiSpesa, rimuoviSpesa, modificaSpesa } from '../../actions/expenses';

// testo la rimozione di una spesa
test('dovrebbe settare l\'oggetto dell\'action rimuoviSpesa', () => {
  const action = rimuoviSpesa({ id: '123abc' });
  expect(action).toEqual({
    type: "RIMUOVI_SPESA",
    id: '123abc'
  });
});