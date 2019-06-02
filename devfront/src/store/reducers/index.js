import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import navbarreducer from './navbarreducer';

export default combineReducers({
  homeReducer,
	navbarreducer,
});
