import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import navbarreducer from './navbarreducer';
import gameReducer from './gamePageReducer';

export default combineReducers({
  homeReducer,
  navbarreducer,
  gameReducer,
});
