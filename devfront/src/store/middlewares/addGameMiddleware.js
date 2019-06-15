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
          console.log('VERIFY', gameId, response.data);
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
      break;
    default:
      next(action);
  }
};

export default addGameMiddleware;
