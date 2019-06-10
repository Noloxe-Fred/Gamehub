import axios from 'axios';

import {
  VERIFY_HAVE,
  SUBMIT,
  checkedVerify,
  loadVerify,
  loadSubmit,
  receivedSubmit,
} from 'src/store/reducers/addGameReducer';

const addGameMiddleware = store => next => (action) => {
  switch (action.type) {
    case VERIFY_HAVE:
      store.dispatch(loadVerify());
      const { gameId } = action;
      const user = localStorage.getItem('user');
      // requete axios avec token (localstorage)
      axios.get('http://api.gamehub.com/api/user/game/info_verify', {
        headers: {
          'Content-Type': 'application/json',
        },
        game: {
          id: gameId,
        },
      })
        .then((response) => {
          console.log('Reponse verify have', response);
          const { status } = response.data;
          const alreadyHave = status === '' ? false : true;

          store.dispatch(checkedVerify(alreadyHave));
        })
        .catch((error) => {
          console.log('Erreur Verification', error);
        });
      break;
    case SUBMIT:
      store.dispatch(loadSubmit());
      const { wichList } = action;

      // 1ere requete: ajout du jeu en bibliotheque
      axios.post('http://api.gamehub.com/api/game/state/add', {
        headers: {
          'Content-Type': 'application/json',
        },
        user,
        game: {
          id: gameId,
        },
        status: wichList,
      })
        .then((response) => {
          console.log('Reponse submit add', response);
          store.dispatch(receivedSubmit(true));
        })
        .catch((error) => {
          console.log('Erreur Ajout Jeu', error);
          store.dispatch(receivedSubmit(false));
        });

      break;
    default:
      next(action);
  }
};

export default addGameMiddleware;
