const initialState = {
  status: '',
  score: '',
  title: '',
  content: '',
  loadRequestDatas: true,
  typeSubScore: 'add',
  typeSubComment: 'add',
  loadSubmitScore: false,
  loadSubmitComment: false,
  deletedGame: false,
};

// Action Type
const LOAD_REQUEST_DATAS = 'LOAD_REQUEST_DATAS';
export const REQ_US_GA_DA = 'REQ_US_GA_DA';
const REC_USER_GAME_DATAS = 'REC_USER_GAME_DATAS';

const SET_INPUT = 'SET_INPUT';
const RECEIVED_SUBMIT = 'RECEIVED_SUBMIT';

const RECEIVED_DELETE = 'RECEIVED_DELETE';

export const DELETE_DATAS = 'DELETE_DATAS';
export const DELETE_GAME = 'DELETE_GAME';
const LOAD_DELETE_GAME = 'LOAD_DELETE_GAME';

const RESET_DELETED_GAME = 'RESET_DELETED_GAME';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.inputName]: action.value
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
        score: action.score,
        title: action.title,
        content: action.content,
        loadRequestData: false,
      };
    case RECEIVED_SUBMIT:
      return {
        ...state,
        [action.name]: value,
      };
    case LOAD_DELETE_GAME:
      return {
        ...state,
        loadDeleteGame: true,
      };
    case RECEIVED_DELETE:
      return {
        ...state,
        deletedGame: false,
        loadDeletegame: false,
      };
    case RESET_DELETED_GAME:
      return {
        ...state,
        deletedGame: false,
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

export const recUserGamesDatas = (status, score, title, content) => ({
  type: REC_USER_GAME_DATAS,
  status,
  score,
  title,
  content,
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



export default reducer;
