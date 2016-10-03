import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import makeRootReducer from './reducer';

const debug = process.env.NODE_ENV !== 'production';
const middlewares = [thunk];

if (debug) {
  const logger = createLogger({ duration: true });
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);

const initialState = {};

const reduxStore = createStore(makeRootReducer(), initialState, enhancer);

const store = new Revue(Vue, reduxStore, {});

export default store;
