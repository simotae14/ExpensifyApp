// CREO IL METODO CHE FILTRA LE MIE SPESE
// Recupero le spese visibili
export default (
  spese,
  { testo, ordinatoPer, dataInizio, dataFine }
) => {
  // uso il filter sulle spese per filtrare in base ai parametri settati
  return spese.filter(spesa => {
    // istanzio i booleani che si occupano dei vari filtri per attivarli
    // il filter seleziona solo gli elementi che soddisfano condizione, ovvero che se il filtro ha dataInizio le spese
    // devono avere pty creataAlle >= a quel filtro
    const dataInizioMatch =
      typeof dataInizio !== "number" || spesa.creataAlle >= dataInizio;
    // il filter seleziona solo gli elementi che soddisfano condizione, ovvero che se il filtro ha dataInizio le spese
    // devono avere pty creataAlle >= a quel filtro
    const dataFineMatch =
      typeof dataFine !== "number" || spesa.creataAlle <= dataFine;
    // il filter seleziona solo gli elementi che soddisano la condizione, ovvero in sto caso se il testo passato è incluso
    // nella descrizione della spesa
    const testoMatch = spesa.descrizione.toLowerCase().includes(testo.toLowerCase());

    return dataInizioMatch && dataFineMatch && testoMatch;
  }).sort((a, b) => {
    // se ordino per data
    if(ordinatoPer === 'data') {
      return a.creataAlle < b.creataAlle ? 1 : -1;
    // se ordino per importo
    } else if(ordinatoPer === 'importo') {
      return a.importo < b.importo ? 1 : -1;
    }
  });
};