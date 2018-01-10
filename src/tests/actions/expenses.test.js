import { aggiungiSpesa, modificaSpesa, rimuoviSpesa  } from '../../actions/expenses';

// testo la rimozione di una spesa
test('dovrebbe settare l\'oggetto action di rimuoviSpesa', () => {
  const action = rimuoviSpesa({ id: '123abc' });
  expect(action).toEqual({
    type: "RIMUOVI_SPESA",
    id: '123abc'
  });
});

// testo la modifica di una spesa
test('dovrebbe settare l\'oggetto action di modificaSpesa', () => {
  const spesaModificata = {
    note: 'Nuovo valore della nota'
  };
  const action = modificaSpesa('123abc', spesaModificata);
  expect(action).toEqual({
    type: "MODIFICA_SPESA",
    id: '123abc',
    aggiornamenti: {
      note: 'Nuovo valore della nota'
    }
  });
});

// testo la creazione di una spesa passandogli valori
test('dovrebbe settare l\'oggetto action di aggiungiSpesa con valori forniti', () => {
  const spesaNuova = {
    descrizione: 'Affitto',
    importo: 109500,
    creataAlle:1000,
    note: 'Questo è l\'affitto del mese scorso'
  };
  const action = aggiungiSpesa(spesaNuova);
  expect(action).toEqual({
    type: "AGGIUNGI_SPESA",
    spesa: {
      ...spesaNuova,
      id: expect.any(String)
    }
  });
});

// testo la creazione di una spesa coi valori di default
test('dovrebbe settare l\'oggetto action di aggiungiSpesa con valori di default', () => {
  const action = aggiungiSpesa();
  expect(action).toEqual({
    type: "AGGIUNGI_SPESA",
    spesa: {
      id: expect.any(String),
      descrizione: "",
      note: "",
      importo: 0,
      creataAlle: 0
    }
  });
});