import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { modificaSpesa, rimuoviSpesa } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        spesa={props.spesa}
        onSubmit={(spesa)=> {
          // Faccio il Dispatch dell'azione per aggiungere una spesa
          props.dispatch(modificaSpesa(props.spesa.id, spesa))
          // Redirect alla pagina dasboard
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(rimuoviSpesa({ id: props.spesa.id }));
        // Redirect alla pagina dasboard
        props.history.push('/');
      }} >Rimuovi</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    spesa: state.spese.find((spesa) =>  spesa.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);