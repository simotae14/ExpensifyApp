import { createStore, combineReducers} from 'redux';
import speseReducer from '../reducers/expenses';
import filtriReducer from '../reducers/filters';

export default () => {
// creazione dello STORE
  const store = createStore(
    combineReducers({
      spese: speseReducer,
      filtri: filtriReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
