import GameList from 'src/data/gameList';
import axios from 'axios';

/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

import { 
  REQUEST,
  REQ_USER_GAME_DATAS,
  received,
  load,
  recUserGameDatas,
  loadReqUsGaDa,
} from 'src/store/reducers/userPagesReducer';


const userPagesMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST: {
      const { nameList } = action;

      const user = localStorage.getItem('user');
      // requete axios avec token (localstorage)
      store.dispatch(load(nameList));

      const instanceRequest = axios.create({
        baseURL: 'http://api.gamehub.com/api/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user
        },
      });
      
      instanceRequest.get(`/game/list/${nameList}`)
        .then((response) => {
          console.log('Request Lists',response.data);

          store.dispatch(received(nameList, response.data));
        })
        .catch((error) => {
          console.log('Verify Have error', error);
        });

      // requete temporaire en local

      // store.dispatch(received(nameList, GameList));
      break;
    }
    default:
      next(action);
  }
};

export default userPagesMiddleware;
