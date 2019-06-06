import gameList from 'src/data/gameList'; // temporaire en attendant l'API

import {
  REQUEST_TAB_LIST,
  REQUEST_COMING_SOON,
  REQUEST_LAST_RELEASED,
  REQUEST_RANDOM,
  loadComingSoon,
  receivedComingSoon,
  loadingTabList,
  receivedTabList,
  loadLastReleased,
  receivedLastReleased,
  loadRandom,
  receivedRandom,
} from 'src/store/reducers/homeReducer';

const homeMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_COMING_SOON:
      store.dispatch(loadComingSoon());

      axios.get('http://api.gamehub.com/api/game/list', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data);

          store.dispatch(receivedComingSoon(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
        store.dispatch(receivedComingSoon(gameList));

      break;
    case REQUEST_TAB_LIST:
      store.dispatch(loadingTabList());
      // requete axios en attente!
      store.dispatch(receivedTabList(gameList));
      break;
    case REQUEST_LAST_RELEASED:
      store.dispatch(loadLastReleased());
      // requete axios en attente!
      store.dispatch(receivedLastReleased(gameList));
      break;
    case REQUEST_RANDOM:
      store.dispatch(loadRandom());
      // requete axios en attente!
      store.dispatch(receivedRandom(gameList));
      break;
    default:
      next(action);
  }

};

export default homeMiddleware;
