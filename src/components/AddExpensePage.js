import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { aggiungiSpesa } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>
      Aggiungi Spesa
    </h1>
    <ExpenseForm
      onSubmit={(spesa) => {
        props.dispatch(aggiungiSpesa(spesa));
        // aggiungo il Redirect alla dashboard
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);