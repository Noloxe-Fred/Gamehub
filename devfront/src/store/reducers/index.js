import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import navbarreducer from './navbarreducer';
import gamePageReducer from './gamePageReducer';
import userPagesReducer from './userPagesReducer';

export default combineReducers({
  homeReducer,
  navbarreducer,
  gamePageReducer,
  userPagesReducer,
});
