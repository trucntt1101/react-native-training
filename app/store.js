import languageReducer from './reducers/languageReducer';
import { createStore, combineReducers } from 'redux';
export const store = createStore(
  combineReducers({
    language: languageReducer,
  })
);
