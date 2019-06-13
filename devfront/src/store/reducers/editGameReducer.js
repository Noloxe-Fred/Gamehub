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
export const REQUEST_US_GA_DA = 'REQUEST_US_GA_DA';
const REC_USER_GAME_DATAS = 'REC_USER_GAME_DATAS';

const SET_INPUT = 'SET_INPUT';
const RECEIVED_SUBMIT = 'RECEIVED_SUBMIT';

const RECEIVED_DELETE = 'RECEIVED_DELETE';

export const DELETE_DATAS = 'DELETE_DATAS';
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
    case REQ_USER_GAME_DATAS:
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
    case RECEIVED_DELETE:
      return {
        ...state,
        deletedGame: false,
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
  type: REQUEST_US_GA_DA,
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

export const deleteData = name => ({
  type: DELETE_DATA,
  name,
});

export const receivedDelete = value => ({
  type: RECEIVED_DELETE,
  value,
});

export const resetDeletedGame () => ({
  type: RESET_DELETED_GAME,
});



export default reducer;
