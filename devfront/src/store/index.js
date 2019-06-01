import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import navbarMiddleware from './middlewares/navbarMiddleware';

const appliedMiddlewares = applyMiddleware(navbarMiddleware);

/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(appliedMiddlewares, devTools);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
