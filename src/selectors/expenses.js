import moment from 'moment';

// CREO IL METODO CHE FILTRA LE MIE SPESE
// Recupero le spese visibili
export default (
  spese,
  { testo, ordinatoPer, dataInizio, dataFine }
) => {
  // uso il filter sulle spese per filtrare in base ai parametri settati
  return spese.filter(spesa => {
    // creo var moment del creatoAlle
    const creataAlleMoment = moment(spesa.creataAlle);
    const dataInizioMatch = dataInizio ? dataInizio.isSameOrBefore(creataAlleMoment, 'day') : true;
    const dataFineMatch = dataFine ? dataFine.isSameOrAfter(creataAlleMoment, 'day') : true;

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