const initialState = {
  loadVerifyHave: true,
  alreadyHave: false,
  available: '',
  wichList: '', //'have' or 'want' | 'waiting' if not available
  verifyCheckWich: false,
  loadSubmit: '',
  receivedSubmit: '',
  openPopover: false,
};

// Action Type
export const VERIFY_HAVE = 'VERIFY_HAVE';
const LOAD_VERIFY = 'LOAD_VERIFY';
const CHECKED_VERIFY = 'CHECKED_VERIFY';

const WICH_LIST = 'WICH_LIST';
// const VERIFY_CHECK_WICH = 'VERIFY_CHECK_WICH';

export const SUBMIT = 'SUBMIT';
const RECEIVED_SUBMIT = 'RECEIVED_SUBMIT';
const LOAD_SUBMIT = 'LOAD_SUBMIT';

// Reducer
const addGameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_VERIFY:
      return {
        ...state,
        loadVerifyHave: true,
      };
    case CHECKED_VERIFY:
      return {
        ...state,
        alreadyHave: action.alreadyHave,
        available: action.available,
        loadVerifyHave: false,
      };
    case WICH_LIST:
      return {
        ...state,
        wichList: action.wichList,
        verifyCheckWich: true,
      };
    case LOAD_SUBMIT:
      return {
        ...state,
        loadSubmit: true,
      };
    case RECEIVED_SUBMIT:
      return {
        ...state,
        receivedSubmit: action.status,
        loadSubmit: false,
      };
    default:
      return state;
  }
};

// Action creator
export const verifyHave = gameId => ({
  type: VERIFY_HAVE,
  gameId,
});

export const loadVerify = () => ({
  type: LOAD_VERIFY,
});

export const checkedVerify = (alreadyHave, available, title, content, score) => ({
  type: CHECKED_VERIFY,
  alreadyHave,
  available,
  title,
  content,
  score,
});

export const selectWichList = nameList => ({
  type: WICH_LIST,
  nameList,
});

export const loadSubmit = () => ({
  type: LOAD_SUBMIT,
});

export const submitForm = (gameId, type) => ({
  type: SUBMIT,
  gameId,
  type,
});

export const receivedSubmit = status => ({
  type: RECEIVED_SUBMIT,
  status,
});

export default addGameReducer;
