import gameList from 'src/data/gameList';

import {
  REQUEST_TAB_LIST,
  REQUEST_COMING_SOON,
  loadComingSoon,
  receivedComingSoon,
  loadingTabList,
  receivedTabList,
} from 'src/store/reducers/homeReducer';

const homeMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_COMING_SOON:
      store.dispatch(loadComingSoon());
      // requete axios en attente!
      store.dispatch(receivedComingSoon(gameList));
      break;
    case REQUEST_TAB_LIST:
      store.dispatch(loadingTabList());
      // requete axios en attente!
      store.dispatch(receivedTabList(gameList));
      break;
    default:
      next(action);
  }

};

export default homeMiddleware;
