//  1. je creer mon initial state qui sera loading (chargment en arrivant sur la page)
const initialState = {
  loadingCategories: true,
  loadingGames: true,
  categoriesDatas: [],
  gamesDatas: [],
  checkedCategories: [],
};

// Action Type   3. Definition de la Const Load_Game
const LOAD_GAMES = 'LOAD_GAMES';
export const REQUEST_GAMES = 'REQUEST_GAMES';
const RECEIVED_GAMES = 'RECEIVED_GAMES';

export const REQUEST_BY_CATEGORIES = 'REQUEST_BY_CATEGORIES';

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES';
const CHECKED_CATEGORIES = 'CHECKED_CATEGORIES';


const advancedSearchPageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GAMES:
      return {
        ...state,
        loadingGames: true,
      };
    case LOAD_CATEGORIES:
      return {
        ...state,
        loadingCategories: true,
      };
    case RECEIVED_GAMES:
      return {
        ...state,
        gamesDatas: action.gamesDatas,
        loadingGames: false,
      };
    case RECEIVED_CATEGORIES:
      return {
        ...state,
        categoriesDatas: action.categoriesDatas,
        loadingCategories: false,
        checkedCategories: action.eachCatFalse,
      };
    case CHECKED_CATEGORIES:
      const newCategories = state.checkedCategories.map((category) => {
        if (category.category == action.categoryId) {
          category.status = !category.status;
          return category;
        }
        return category;
      })
      console.log(newCategories)
      return {
        ...state,
        checkedCategories: newCategories,
      };
    default:
      return state;
  }
};

// Action creator  4. Creer l'action qui va lancer ce Load_Game
export const loadGames = () => ({
  type: LOAD_GAMES,
});
export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
});
export const requestGames = () => ({
  type: REQUEST_GAMES,
});
export const receivedGames = gamesDatas => ({
  type: RECEIVED_GAMES,
  gamesDatas,
});
export const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
});
export const receivedCategories = (categoriesDatas, eachCatFalse) => ({
  type: RECEIVED_CATEGORIES,
  categoriesDatas,
  eachCatFalse,
});
export const requestByCategories = () => ({
  type: REQUEST_BY_CATEGORIES,
});
export const checkedCategories = categoryId => ({
  type: CHECKED_CATEGORIES,
  categoryId,
});

export default advancedSearchPageReducer;
