import GameList from 'src/data/gameList';
import axios from 'axios';

import { 
  REQUEST,
  received,
  load,
} from 'src/store/reducers/userPagesReducer';

const user = localStorage.getItem('user');

const userPagesMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST:
      const { nameList } = action;
      // requete axios avec token (localstorage)
      store.dispatch(load(nameList));
      axios.post(`http://api.gamehub.com/api/game/list/${nameList}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user,
        },
      })
        .then((response) => {
          // console.log('next month',response.data);

          store.dispatch(received(nameList, response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      // requete temporaire en local

      store.dispatch(received(nameList, GameList));
      break;
    default:
      next(action);
  }
};

export default userPagesMiddleware;
