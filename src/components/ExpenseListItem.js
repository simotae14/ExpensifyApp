import React from 'react';

// creo un component Stateless Functional che mostra elenco delle Spese
const ExpenseListItem = ({ descrizione, importo, creataAlle }) => (
  <div>
    <h3>
      {descrizione}
    </h3>
    <p>
      {importo} - {creataAlle}
    </p>
  </div>
);

export default ExpenseListItem;