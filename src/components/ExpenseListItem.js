import React from 'react';
import { connect } from 'react-redux';
import { rimuoviSpesa } from '../actions/expenses';

// creo un component Stateless Functional che mostra elenco delle Spese
const ExpenseListItem = ({ dispatch, id, descrizione, importo, creataAlle }) => (
  <div>
    <h3>
      {descrizione}
    </h3>
    <p>
      {importo} - {creataAlle}
    </p>
    <button onClick={() => {
      dispatch(rimuoviSpesa({ id }));
    }} >Rimuovi</button>
  </div>
);

export default connect()(ExpenseListItem);