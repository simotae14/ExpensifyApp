import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
// recupero il metodo che seleziona le Spese
import speseSelezionate from '../selectors/expenses';

// creo un component Stateless Functional che mostra elenco delle Spese
const ExpenseList = (props) => (
  <div>
    <h1>
      Elenco Spese
    </h1>
    <div>
      { props.spese.map((spesa) => {
        return <ExpenseListItem key={spesa.id} {...spesa} />;
      }) }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    // passo solo le speseSelezionate
    spese: speseSelezionate(state.spese, state.filtri)
  };
};
// CREO IL Componente che Connette lo state con il Component Funzionale
export default connect(mapStateToProps)(ExpenseList);
