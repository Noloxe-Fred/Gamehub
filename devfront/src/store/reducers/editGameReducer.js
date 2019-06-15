const initialState = {
  status: '',
  scoreId: '',
  score: false,
  commentid: '',
  title: false,
  content: false,
  loadRequestDatas: true,
  typeSubScore: 'add',
  typeSubComment: 'add',
  loadSubmit: {
    score: false,
    comment: false,
    deletedGame: false,
  },
  receivedSubmit: {
    userDatas: false,
    score: false,
    deleteScore: false,
    comment: false,
    deleteComment: false,
    deletedGame: false,
  },
};

// Action Type
const LOAD_REQUEST_DATAS = 'LOAD_REQUEST_DATAS';
export const REQ_US_GA_DA = 'REQ_US_GA_DA';
const REC_USER_GAME_DATAS = 'REC_USER_GAME_DATAS';

const SET_INPUT = 'SET_INPUT';

const RECEIVED_DELETE = 'RECEIVED_DELETE';

export const DELETE_DATAS = 'DELETE_DATAS';
export const DELETE_GAME = 'DELETE_GAME';
const LOAD_DELETE_GAME = 'LOAD_DELETE_GAME';
const RESET_DELETED_GAME = 'RESET_DELETED_GAME';

export const ON_SUBMIT_SCORE = 'ON_SUBMIT_SCORE';
export const ON_SUBMIT_COMMENT = 'ON_SUBMIT_COMMENT';

const LOAD_SUBMIT = 'LOAD_SUBMIT';
const RECEIVED_SUBMIT = 'RECEIVED_SUBMIT';

// Reducer
const editGameRed = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOAD_REQUEST_DATAS:
      return {
        ...state,
        loadRequestDatas: true,
      };
    case REQ_US_GA_DA:
      return {
        ...state,
        status: action.status,
        scoreId: action.scoreId,
        score: action.score,
        commentId: action.commentId,
        title: action.title,
        content: action.content,
        loadRequestData: false,
      };
    case RECEIVED_SUBMIT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOAD_DELETE_GAME:
      return {
        ...state,
        receivedSubmit: { ...state.receivedDelete, deletedGame: true },
      };
    case RECEIVED_DELETE:
      return {
        ...state,
        receivedSubmit: { ...state.receivedDelete, deletedGame: false },
        loadDeletegame: false,
      };
    case RESET_DELETED_GAME:
      return {
        ...state,
        receivedSubmit: { ...state.receivedDelete, deletedGame: false },
      };
    default:
      return state;
  }
};

// Action creator
export const setInput = (name, value) => ({
  type: SET_INPUT,
  name,
  value,
});

export const loadRequestDatas = () => ({
  type: LOAD_REQUEST_DATAS,
});

export const reqUserGameDatas = id => ({
  type: REQ_US_GA_DA,
  id,
});

export const recUserGamesDatas = (status, score, title, content, scoreId, commentId) => ({
  type: REC_USER_GAME_DATAS,
  status,
  score,
  title,
  content,
  scoreId,
  commentId,
});

export const onSubmitScore = (value, type, gameId) => ({
  type: ON_SUBMIT_SCORE,
  value,
  type,
  gameId,
});

export const loadSubmit = name => ({
  type: LOAD_SUBMIT,
  name,
});

export const onSubmitComment = (title, comment, type, gameId) => ({
  type: ON_SUBMIT_COMMENT,
  title,
  comment,
  type,
  gameId,
});

export const receivedSubmit = (name, value) => ({
  type: RECEIVED_SUBMIT,
  name,
  value,
});

export const deleteDatas = name => ({
  type: DELETE_DATAS,
  name,
});

export const loadDeleteGame = () => ({
  type: LOAD_DELETE_GAME,
});

export const deleteGame = id => ({
  type: DELETE_GAME,
  id,
});

export const receivedDelete = value => ({
  type: RECEIVED_DELETE,
  value,
});

export const resetDeletedGame = () => ({
  type: RESET_DELETED_GAME,
});

export default editGameRed;
