//  1. je creer mon initial state qui sera loading (chargment en arrivant sur la page)
const initialState = {
  loading: true,
  headerDatas: [],
  descDatas: [],
  commentsDatas: [],
};

// Action Type   3. Definition de la Const Load_Game
const LOAD_GAME = 'LOAD_GAME';
export const REQUEST_GAME = 'REQUEST_GAME';
const RECEIVED_GAME = 'RECEIVED_GAME';

// Reducer  2. Creation de l'etat Load_Game qui passera de loading true à loading false une fois la page du jeu chargé
const gamePageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GAME:
      return {
        ...state,
        loading: true,
      };
      // Lorsque l'action Received_Game est prete retourner les GameDatas
    case RECEIVED_GAME:
      return {
        ...state,
        gameDatas: action.gameDatas,
        commentsDatas: action.commentsDatas,
        background: action.background,
        loading: false,
      };
    default:
      return state;
  }
};

// Action creator  4. Creer l'action qui va lancer ce Load_Game
export const loadGame = () => ({
  type: LOAD_GAME,
});
export const requestGame = gameId => ({
 type: REQUEST_GAME,
  gameId,
});
export const receivedGame = (gameDatas, commentsDatas, background) => ({
  type: RECEIVED_GAME,
  gameDatas,
  commentsDatas,
  background,
});

export default gamePageReducer;
