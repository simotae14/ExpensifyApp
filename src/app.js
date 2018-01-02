import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { aggiungiSpesa } from './actions/expenses';
import { setTestoFiltro } from './actions/filters';
import getSpeseVisibili from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// aggiungiSpesa -> Bolletta Acqua
store.dispatch(
  aggiungiSpesa({ descrizione: "Bolletta Acqua" })
);
// aggiungiSpesa -> Bolletta Gas
store.dispatch(
  aggiungiSpesa({ descrizione: "Bolletta Gas" })
);
// setTestoFiltro -> bolletta (2 elementi) -> acqua (1 elemento)
// store.dispatch(setTestoFiltro('bolletta'));
// // const getSpeseVisibili -> stampo a video solo quelle visibili
// const state = store.getState();
// const speseVisibili = getSpeseVisibili(state.spese, state.filtri);
// console.log(speseVisibili);

store.dispatch(setTestoFiltro('acqua'));
const state = store.getState();
const speseVisibili = getSpeseVisibili(state.spese, state.filtri);
console.log(speseVisibili);

// renderizzare il Component
ReactDOM.render(<AppRouter />, document.getElementById('app'));