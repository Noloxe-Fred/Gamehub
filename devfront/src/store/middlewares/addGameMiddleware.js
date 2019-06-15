import axios from 'axios';

import {
  VERIFY_HAVE,
  SUBMIT,
  checkedVerify,
  loadVerify,
  loadSubmit,
  receivedSubmit,
} from 'src/store/reducers/addGameReducer';


const user = localStorage.getItem('user');

const addGameMiddleware = store => next => (action) => {
  switch (action.type) {
    case VERIFY_HAVE:
      store.dispatch(loadVerify());
      const { gameId } = action;
      console.log('Id de la requete', gameId)
      // requete axios avec token (localstorage)

      const instance = axios.create({
        baseURL: 'http://api.gamehub.com/api/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user
        },
      });
      
      instance.get(`/game/${gameId}/state`)
      .then((response) => {
          console.log('VERIFY', response.data);
          const { info, sortie } = response.data;

          const alreadyHave = info === [] ? true : false;

          store.dispatch(checkedVerify(alreadyHave, sortie));
      })
      .catch((error) => {
        console.log('Verify Have error', error);
      });

      break;
    case SUBMIT:
      store.dispatch(loadSubmit());
      const { list, gameIdSubmit } = action;
      console.log(user);
      console.log('Submit Status Add', list, gameIdSubmit)
      const instanceSubmit = axios.create({
        baseURL: 'http://api.gamehub.com/api/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user
        },
      });
      
      instanceSubmit.post(`/game/state/add`, {
        status: list,
        game: {
          id: gameIdSubmit,
        },
      })
      .then((response) => {
        console.log('Reponse submit add', response);
        store.dispatch(receivedSubmit(true));
      })
      .catch((error) => {
        console.log('Add game error', error);
      });

      // 1ere requete: ajout du jeu en bibliotheque
      // axios.post('http://api.gamehub.com/api/game/state/add', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer ' + user,
      //   },
      //   game: {
      //     id: gameId,
      //   },
      //   status: wichList,
      // })
      //   .then((response) => {
      //     console.log('Reponse submit add', response);
      //     store.dispatch(receivedSubmit(true));
      //   })
      //   .catch((error) => {
      //     console.log('Erreur Ajout Jeu', error);
      //     store.dispatch(receivedSubmit(false));
      //   });

      break;
    default:
      next(action);
  }
};

export default addGameMiddleware;
