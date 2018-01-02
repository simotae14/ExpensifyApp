import { createStore, combineReducers} from 'redux';
import speseReducer from '../reducers/expenses';
import filtriReducer from '../reducers/filters';

export default () => {
// creazione dello STORE
  const store = createStore(
    combineReducers({
      spese: speseReducer,
      filtri: filtriReducer
    })
  );

  return store;
}
