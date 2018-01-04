import React from 'react';
import { connect } from 'react-redux';
import { setTestoFiltro, ordinatoPerData, ordinatoPerImporto } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input 
      type="text" 
      value={props.filtri.testo} 
      onChange={(e) => {
        props.dispatch(setTestoFiltro(e.target.value));
      }}
    />
    <select
      value={props.filtri.ordinatoPer}
      onChange={(e) => {
        if (e.target.value === 'data') {
          props.dispatch(ordinatoPerData());
        } else if (e.target.value === 'importo') {
          props.dispatch(ordinatoPerImporto());
        }
      }}
    >
      <option value="data">Data</option>
      <option value="importo">Importo</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filtri: state.filtri
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);