/* eslint no-param-reassign: 0 */

import { combineReducers } from 'redux';
import app from 'app/reducer';

export const makeRootReducer = asyncReducers =>
  combineReducers({
    app,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
  return reducer;
};

export default makeRootReducer;
