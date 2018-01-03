import React from 'react';
import { connect } from 'react-redux';
import { setTestoFiltro } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filtri.testo} onChange={(e) => {
      props.dispatch(setTestoFiltro(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filtri: state.filtri
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);