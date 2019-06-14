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
      const user = localStorage.getItem('user');
      const { gameId } = action;
      console.log('Id de la requete', gameId)
      // requete axios avec token (localstorage)
      const instance = axios.create({
        baseURL: 'http://api.gamehub.com/api/',
        timeout: 1000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user
        }
      });
      
      instance.post('/game/state')
      .then(response => {
          console.log(response.data);
      })


      // axios.post('http://api.gamehub.com/api/game/state', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer ' + user,
      //   },
      //   id: 5,
      // })
      //   .then((response) => {
      //     // console.log('Reponse verify have', response);
      //     const { status, available } = response.data;
      //     const alreadyHave = status === '' ? false : true;

      //     store.dispatch(checkedVerify(alreadyHave, available));
      //   })
      //   .catch((error) => {
      //     console.log('Erreur Verification', error);
      //   });
      break;
    case SUBMIT:
      store.dispatch(loadSubmit());
      const { wichList } = action;

      // 1ere requete: ajout du jeu en bibliotheque
      axios.post('http://api.gamehub.com/api/game/state/add', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user,
        },
        game: {
          id: gameId,
        },
        status: {
          status: wichList,
        },
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
