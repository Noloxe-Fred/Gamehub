//  1. je creer mon initial state qui sera loading (chargment en arrivant sur la page)
const initialState = {
  loadingGaming: true,
  loadingComment: false,
  headerDatas: [],
  descDatas: [],
  commentsDatas: [],
  errorRequest: false,
};

// Action Type   3. Definition de la Const Load_Game
const LOAD_GAME = 'LOAD_GAME';
const LOAD_COMMENT = 'LOAD_COMMENT';
export const REQUEST_GAME = 'REQUEST_GAME';
export const REQUEST_COMMENT = 'REQUEST_COMMENT';
const RECEIVED_GAME = 'RECEIVED_GAME';
const RECEIVED_COMMENT = 'RECEIVED_COMMENT';


const ERROR_REQUEST = 'ERROR_REQUEST';
const RESET_ERROR = 'RESET_ERROR';

// Reducer  2. Creation de l'etat Load_Game qui passera de loading true à loading false une fois la page du jeu chargé
const gamePageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GAME:
      return {
        ...state,
        loadingGaming: true,
      };
    case LOAD_COMMENT:
      return {
        ...state,
        loadingComment: true,
      };
      // Lorsque l'action Received_Game est prete retourner les GameDatas
    case RECEIVED_GAME:
      return {
        ...state,
        gameDatas: action.gameDatas,
        background: action.background,
        loadingGaming: false,
      };
    case RECEIVED_COMMENT:
      return {
        ...state,
        commentsDatas: action.comments,
        loadingComment: false,
      };
    case ERROR_REQUEST:
      return {
        ...state,
        errorRequest: true,
      };
    case RESET_ERROR:
      return {
        ...state,
        errorRequest: false,
      };
    default:
      return state;
  }
};

// Action creator  4. Creer l'action qui va lancer ce Load_Game
export const loadGame = () => ({
  type: LOAD_GAME,
});

export const loadComment = () => ({
  type: LOAD_COMMENT,
});

export const requestGame = gameId => ({
  type: REQUEST_GAME,
  gameId,
});

export const requestComment = gameId => ({
  type: REQUEST_COMMENT,
  gameId,
});

export const receivedGame = (gameDatas, background) => ({
  type: RECEIVED_GAME,
  gameDatas,
  background,
});

export const receivedComments = comments => ({
  type: RECEIVED_COMMENT,
  comments,
});

export const errorRequest = () => ({
  type: ERROR_REQUEST,
});

export const resetError = () => ({
  type: RESET_ERROR,
});

export default gamePageReducer;
