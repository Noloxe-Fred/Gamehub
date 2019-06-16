const initialState = {
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
  },
  receivedSubmit: {
    score: false,
    comment: false,
    deletedComment: false,
    deletedGame: false,
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

const RESET_DELETED = 'RESET_DELETED';

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
    case REC_US_GA_DA:
      return {
        ...state,
        scoreId: action.scoreId,
        score: action.score,
        commentId: action.commentId,
        title: action.title,
        content: action.content,
        loadRequestData: false,
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
    // case RECEIVED_DELETE:
    //   return {
    //     ...state,
    //     receivedDelete: { ...state.receivedDelete, [action.name]: false },
    //     loadSubmit: { ...state.loadSubmit, [action.name]: false },
    //   };
    case RESET_DELETED:
      return {
        ...state,
        receivedSubmit: { ...state.receivedDelete, [action.name]: false },
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

export const reqUserGameDatas = gameId => ({
  type: REQ_US_GA_DA,
  gameId,
});

export const recUserGamesDatas = (score, title, content, scoreId, commentId, typeSubScore, typeSubComment) => ({
  type: REC_US_GA_DA,
  score,
  title,
  content,
  scoreId,
  commentId,
  typeSubScore,
  typeSubComment,
});

export const onSubmitScore = gameId => ({
  type: ON_SUBMIT_SCORE,
  gameId,
});

export const onSubmitComment = (title, comment, gameId) => ({
  type: ON_SUBMIT_COMMENT,
  title,
  comment,
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

export const deleteDatas = (type, id) => ({
  type: DELETE_DATAS,
  type,
  id,
});

// export const receivedDelete = (name, value) => ({
//   type: RECEIVED_DELETE,
//   name,
//   value,
// });

export const resetDeleted = name => ({
  type: RESET_DELETED,
  name,
});

export default editGameRed;
