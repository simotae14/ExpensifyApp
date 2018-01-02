import React from 'react';
import { connect } from 'react-redux';

// creo un component Stateless Functional che mostra elenco delle Spese
const ExpenseList = (props) => (
  <div>
    <h1>
      Elenco Spese
    </h1>
    { props.filtri.testo }
    { props.spese.length }
  </div>
);

const mapStateToProps = (state) => {
  return {
    spese: state.spese,
    filtri: state.filtri
  };
};
// CREO IL Componente che Connette lo state con il Component Funzionale
export default connect(mapStateToProps)(ExpenseList);
