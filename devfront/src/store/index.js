import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import homeMiddleware from './middlewares/homeMiddleware';

const appliedMiddlewares = applyMiddleware(homeMiddleware);

/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(appliedMiddlewares, devTools);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
