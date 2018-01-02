import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

// vediamo come il valore di store viene automaticamente refreshiato dal connect
setTimeout(() => {
  store.dispatch(setTestoFiltro('affitto'));
}, 3000);

const state = store.getState();
const speseVisibili = getSpeseVisibili(state.spese, state.filtri);
console.log(speseVisibili);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// renderizzare il Component
ReactDOM.render(jsx, document.getElementById('app'));