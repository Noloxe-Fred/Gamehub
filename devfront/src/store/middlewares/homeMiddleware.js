import gameList from 'src/data/gameList';

import {
  REQUEST_COMING_SOON,
  loadComingSoon,
  receivedComingSoon,
} from 'src/store/reducers/homeReducer';

const homeMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_COMING_SOON:
      store.dispatch(loadComingSoon());
      // requete axios en attente!
      store.dispatch(receivedComingSoon(gameList));
      break;
    default:
      next(action);
  }

};

export default homeMiddleware;
