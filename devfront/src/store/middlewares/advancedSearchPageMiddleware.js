import axios from 'axios';

import { REQUEST_CATEGORIES, REQUEST_GAMES, receivedGames, receivedCategories, loadGames, loadCategories } from 'src/store/reducers/advancedSearchPageReducer';



const advancedSearchPageMiddleware = store => next => (action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      store.dispatch(loadCategories());
      axios.get('http://api.gamehub.com/api/category/list', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('request categories', response.data);
          const categoriesDatas = response.data;        
          store.dispatch(receivedCategories(categoriesDatas));
        })
        .catch((error) => {
          console.log('request categories', error);
        });
      break;

      case REQUEST_GAMES:
      store.dispatch(loadGames());
      axios.get('http://api.gamehub.com/api/game/list', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('request games', response.data);
          const gamesDatas = response.data;
          store.dispatch(receivedGames(gamesDatas));
        })
        .catch((error) => {
          console.log('request games', error);
        });
      break;
    default:
      next(action);
  }
};

export default advancedSearchPageMiddleware;
