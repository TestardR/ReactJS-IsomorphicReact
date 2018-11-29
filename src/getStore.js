import { createStore, combineReducers, applyMiddleware } from 'redux';
import { identity } from 'lodash';

export default function(defaultState = { test: 'Banana' }) {
  const store = createStore(identity, defaultState);
  return store;
}
