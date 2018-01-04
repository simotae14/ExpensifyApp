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
  aggiungiSpesa({ descrizione: "Bolletta Acqua", importo: 4500 })
);
// aggiungiSpesa -> Bolletta Gas
store.dispatch(
  aggiungiSpesa({ descrizione: "Bolletta Gas", creataAlle: 1000 })
);
// aggiungiSpesa -> Bolletta Acqua
store.dispatch(
  aggiungiSpesa({ descrizione: "Affitto", importo: 109500 })
);

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