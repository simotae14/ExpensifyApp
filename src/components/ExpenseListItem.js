import React from 'react';
import { Link } from 'react-router-dom';

// creo un component Stateless Functional che mostra elenco delle Spese
const ExpenseListItem = ({ id, descrizione, importo, creataAlle }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {descrizione}
      </h3>  
    </Link>
    <p>
      {importo} - {creataAlle}
    </p>
  </div>
);

export default ExpenseListItem;