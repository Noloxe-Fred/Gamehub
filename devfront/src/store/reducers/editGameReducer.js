const initialState = {
  openModal: false,
  statusId: '',
  scoreId: '',
  score: '',
  commentId: '',
  title: '',
  content: '',
  loadRequestDatas: true,
  typeSubScore: '',
  typeSubComment: '',
  loadSubmit: {
    score: false,
    comment: false,
    deletedGame: false,
    deletedComment: false,
    changeList: false,
  },
  receivedSubmit: {
    score: false,
    comment: false,
    deletedComment: false,
    deletedGame: false,
    changeList: false,
  },
};

// Action Type
const LOAD_REQUEST_DATAS = 'LOAD_REQUEST_DATAS';
export const REQ_US_GA_DA = 'REQ_US_GA_DA';
const REC_US_GA_DA = 'REC_US_GA_DA';

const SET_INPUT = 'SET_INPUT';

// const RECEIVED_DELETE = 'RECEIVED_DELETE';

export const DELETE_DATAS = 'DELETE_DATAS';
export const DELETE_GAME = 'DELETE_GAME';

const RESET = 'RESET';

export const ON_SUBMIT_SCORE = 'ON_SUBMIT_SCORE';
export const ON_SUBMIT_COMMENT = 'ON_SUBMIT_COMMENT';

const LOAD_SUBMIT = 'LOAD_SUBMIT';
const RECEIVED_SUBMIT = 'RECEIVED_SUBMIT';

export const CHANGE_LIST = 'CHANGE_LIST';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Reducer
const editGameRed = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        loadSubmit: {...state.loadSubmit, deletedGame: false,}
      };
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
    case REC_US_GA_DA:
      return {
        ...state,
        typeSubScore: action.typeSubScore,
        typeSubComment: action.typeSubComment,
        scoreId: action.scoreId,
        score: action.score,
        commentId: action.commentId,
        title: action.title,
        content: action.content,
        loadRequestDatas: false,
        statusId: action.statusId,
      };
    case LOAD_SUBMIT:
      return {
        ...state,
        loadSubmit: { ...state.loadSubmit, [action.name]: true }
      };
    case RECEIVED_SUBMIT:
      return {
        ...state,
        receivedSubmit: { ...state.receivedSubmit, [action.name]: action.value },
        loadSubmit: { ...state.loadSubmit, [action.name]: false }
      };
    case RESET:
      return {
        initialState,
      };
    default:
      return initialState;
  }
};

// Action creator
export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const setInput = (name, value) => ({
  type: SET_INPUT,
  name,
  value,
});

export const loadRequestDatas = () => ({
  type: LOAD_REQUEST_DATAS,
});

export const reqUserGameDatas = gameId => ({
  type: REQ_US_GA_DA,
  gameId,
});

export const recUserGamesDatas = (score, title, content, scoreId, commentId, typeSubScore, typeSubComment, statusId) => ({
  type: REC_US_GA_DA,
  score,
  title,
  content,
  scoreId,
  commentId,
  typeSubScore,
  typeSubComment,
  statusId,
});

export const onSubmitScore = gameId => ({
  type: ON_SUBMIT_SCORE,
  gameId,
});

export const onSubmitComment = gameId => ({
  type: ON_SUBMIT_COMMENT,
  gameId,
});

export const loadSubmit = name => ({
  type: LOAD_SUBMIT,
  name,
});

export const receivedSubmit = (name, value) => ({
  type: RECEIVED_SUBMIT,
  name,
  value,
});

export const deleteDatas = (name, id) => ({
  type: DELETE_DATAS,
  name,
  id,
});

// export const receivedDelete = (name, value) => ({
//   type: RECEIVED_DELETE,
//   name,
//   value,
// });

export const reset = () => ({
  type: RESET,
});

export const changeList = (nameList, id) => ({
  type: CHANGE_LIST,
  nameList,
  id,
});

export default editGameRed;
