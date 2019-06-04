import gameList from 'src/data/gameList'; // temporaire en attendant l'API

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

      // axios.get('http://127.0.0.1:8001/api/game/list', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then((response) => {
      //     console.log(response.data);

          // store.dispatch(receivedComingSoon(response.data));
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
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
