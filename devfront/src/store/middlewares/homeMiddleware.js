import gameList from 'src/data/gameList'; // temporaire en attendant l'API
import axios from 'axios';

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

      axios.get('http://api.gamehub.com/api/game/list/nextmonth', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('next month',response.data);

          store.dispatch(receivedComingSoon(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

        // requete temporaire pour local
        //store.dispatch(receivedComingSoon(gameList));

      break;
    case REQUEST_LAST_RELEASED:
      store.dispatch(loadLastReleased());
      // requete axios en attente!
      axios.get('http://api.gamehub.com/api/game/list/lastmonth', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('last month', response.data);

          store.dispatch(receivedLastReleased(response.data));
        })
        .catch((error) => {
          console.log(error);
          
        });

      // requete test local
      // store.dispatch(receivedLastReleased(gameList));

      break;
    case REQUEST_RANDOM:
      store.dispatch(loadRandom());
      // requete axios en attente!
      axios.get('http://api.gamehub.com/api/game/list/random', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('random list', response.data);

          store.dispatch(receivedRandom(response.data));
        })
        .catch((error) => {
          console.log(error);
          
        });

      // requete test local
      // store.dispatch(receivedRandom(gameList));
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
