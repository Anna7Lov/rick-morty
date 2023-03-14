import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, GlobalAppState } from './rootReducer';
import type { } from 'redux-thunk/extend-redux';

const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

export const store:
Store<GlobalAppState> = createStore(rootReducer, applyMiddleware(thunk, logger));

export type AppDispatch = typeof store.dispatch;
