import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import homeMiddleware from './middlewares/homeMiddleware';
import navbarMiddleware from './middlewares/navbarMiddleware';
import gamePageMiddleware from './middlewares/gamePageMiddleware';
import userPagesMiddleware from './middlewares/userPagesMiddleware';
import addGameMiddleware from './middlewares/addGameMiddleware';
import advancedSearchPageMiddleware from './middlewares/advancedSearchPageMiddleware';

const appliedMiddlewares = applyMiddleware(
  navbarMiddleware,
  homeMiddleware,
  gamePageMiddleware,
  userPagesMiddleware,
  addGameMiddleware,
  advancedSearchPageMiddleware,
);


/* eslint-disable no-underscore-dangle */
 const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

 const enhancers = compose(appliedMiddlewares, devTools);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
