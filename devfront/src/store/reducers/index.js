import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import navbarreducer from './navbarreducer';
import gamePageReducer from './gamePageReducer';
import userPagesReducer from './userPagesReducer';
import addGameReducer from './addGameReducer';
import advancedSearchPageReducer from './advancedSearchPageReducer';
import editGameRed from './editGameReducer';

export default combineReducers({
  homeReducer,
  navbarreducer,
  gamePageReducer,
  userPagesReducer,
  addGameReducer,
  advancedSearchPageReducer,
  editGameRed,
});
