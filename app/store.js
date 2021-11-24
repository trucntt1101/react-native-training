import languageReducer from './reducers/languageReducer';
import { createStore, combineReducers } from 'redux';
import accountReducer from './reducers/accountReducer';
export const store = createStore(
  combineReducers({
    language: languageReducer,
    account: accountReducer,
  })
);
