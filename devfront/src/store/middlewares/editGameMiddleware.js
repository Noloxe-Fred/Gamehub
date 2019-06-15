import axios from 'axios';

import {
 REQ_US_GA_DA,
 loadRequestDatas,
 recUserGameDatas,
} from 'src/store/reducers/editGameReducer';

const user = localStorage.getItem('user');

const editGameMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQ_US_GA_DA:
      store.dispatch(loadRequestDatas());

      const { gameId } = action;
      // requete axios avec token (localstorage)
      axios.post('http://api.gamehub.com/api/game/edit', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user,
        },
        game: {
          id: gameId,
        },
      })
        .then((response) => {
          // console.log('Reponse verify have', response);
          const { status, score, title, content, scoreId, commentId } = response.data;

          store.dispatch(recUserGameDatas(status, score, title, content, scoreId, commentId ));
        })
        .catch((error) => {
          // console.log('Erreur Verification', error);
        });
      break;
    default:
      next(action);
  }
};

export default editGameMiddleware;
