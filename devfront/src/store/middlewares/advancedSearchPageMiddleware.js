import axios from 'axios';

import { 
  REQUEST_CATEGORIES,
  REQUEST_GAMES,
  REQUEST_BY_CATEGORIES,
  receivedGames,
  receivedCategories,
  loadGames,
  loadCategories,
} from 'src/store/reducers/advancedSearchPageReducer';

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
          const eachCatFalse = response.data.map(({ id }) => ({ category: id, status: false }));

          store.dispatch(receivedCategories(categoriesDatas, eachCatFalse));
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
    case REQUEST_BY_CATEGORIES:
      store.dispatch(loadGames());
      const filter = store.getState().advancedSearchPageReducer.checkedCategories.filter(category => {
        if(category.status == true) {return category.category}
      });
      const categories = filter.map(category => category.category);
      if (categories.length > 0) {
        axios.post('http://api.gamehub.com/api/category/search', {
          headers: {
            'Content-Type': 'application/json',
          },
          id: categories,
        })
          .then((response) => {
            console.log('request games by categories', response.data);
            const gamesDatas = response.data;
            store.dispatch(receivedGames(gamesDatas));
          })
          .catch((error) => {
            console.log('request games by categories', error);
          });
      }
      else {
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
      }
      break;
    default:
      next(action);
  }
};

export default advancedSearchPageMiddleware;
