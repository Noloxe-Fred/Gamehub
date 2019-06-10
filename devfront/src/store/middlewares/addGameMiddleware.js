import axios from 'axios';

import {
  VERIFY_HAVE,
  SUBMIT,
  checkedVerify,
  loadVerify,
  receivedSubmit,
} from 'src/store/reducers/addGameReducer';

const addGameMiddleware = store => next => (action) => {
  switch (action.type) {
    case VERIFY_HAVE:
      store.dispatch(loadVerify());
      const { gameId } = action;
      const user = localStorage.getItem('user');
      // requete axios avec token (localstorage)
      axios.get('http://api.gamehub.com/api/user/game/verify', {
        headers: {
          'Content-Type': 'application/json',
        },
        user,
        gameId,
      })
        .then((response) => {
          console.log('Reponse verify have', response);
          const { available, status, title, content, score } = response.data;
          const alreadyHave = status === '' ? false : status;

          store.dispatch(checkedVerify(alreadyHave, available, title, content, score));
        })
        .catch((error) => {
          console.log('Erreur Connexion', error);
          store.dispatch(errorConnect('Erreur Connexion'));
        });
      break;
    case SUBMIT:
        store.dispatch(loadSubmit());
        const game = action.gameId;
        const {wichList, score, commentTitle, commentContent } = store.getState().addGameReducer;

        axios.post('http://api.gamehub.com/api/game/state/add', {
        headers: {
          'Content-Type': 'application/json',
        },
        user,
        status: wichList,
        score,
        title: commentTitle,
        content: commentContent,
      })
        .then((response) => {
          console.log('Reponse submit add', response);

          store.dispatch(receivedSubmit(true));
        })
        .catch((error) => {
          console.log('Erreur Ajout', error);
          store.dispatch(receivedSubmit(false));
        });
      break;
    default:
      next(action);
  }
};

export default addGameMiddleware;
