import gameList from 'src/data/gameList';
import axios from 'axios';
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

      axios.get('http://127.0.0.1:8001/api/game/list', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    })
      break;
    default:
      next(action);
  }

};

export default homeMiddleware;
