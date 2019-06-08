import GameList from 'src/data/gameList';

import { 
  REQUEST,
  received,
  load,
} from 'src/store/reducers/userPagesReducer';
 
const navbarMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST:
      const { nameList } = action;
      // requete axios avec token (localstorage)
      store.dispatch(load(nameList));
      store.dispatch(received(nameList, GameList));
      break;
    default:
      next(action);
  }
};

export default navbarMiddleware;
