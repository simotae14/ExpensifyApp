import uuid from "uuid";

// AGGIUNGI_SPESA
export const aggiungiSpesa = ({
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
export const rimuoviSpesa = ({ id } = {}) => ({
  type: "RIMUOVI_SPESA",
  id
});

// MODIFICA_SPESA
export const modificaSpesa = (id, aggiornamenti) => ({
  type: "MODIFICA_SPESA",
  id,
  aggiornamenti
});