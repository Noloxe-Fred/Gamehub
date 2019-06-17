import GameList from 'src/data/gameList';
import axios from 'axios';

/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

import { 
  REQUEST,
  REQUEST_PROFILE,
  received,
  load,
  loadProfile,
  receivedProfile,
} from 'src/store/reducers/userPagesReducer';

const userPagesMiddleware = store => next => (action) => {

  const user = localStorage.getItem('user');

  const instance = axios.create({
    baseURL: 'http://api.gamehub.com/api/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+user
    },
  });

  switch (action.type) {
    case REQUEST: {
      const { nameList } = action;


      // requete axios avec token (localstorage)
      store.dispatch(load(nameList));
      
      instance.get(`/game/list/${nameList}`)
        .then((response) => {
          console.log('Request Lists', response.data);

          store.dispatch(received(nameList, response.data));
        })
        .catch((error) => {
          console.log('Verify Have error', error);
        });

      // requete temporaire en local

      // store.dispatch(received(nameList, GameList));
      break;
    }
    case REQUEST_PROFILE:
      store.dispatch(loadProfile());

      instance.post('/user/profil')
        .then((response) => {
          store.dispatch(receivedProfile(response.data));
        })
        .catch((error) => {
          console.log('Request Profile error', error);
        });

      break;
    default:
      next(action);
  }
};

export default userPagesMiddleware;
