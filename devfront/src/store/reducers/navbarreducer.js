const initialState = {
  connect: false,
  loadingConnect: false,
  errorConnect: '',
  openConnect: false,
  connectPseudo: '',
  connectPassword: '',
  checkRemember: false,
  openSubscribe: false,
  subfirstname: '',
  sublastname: '',
  subpseudo: '',
  subemail: '',
  subpassword: '',
  subconfirmpassword: '',
  confirmSubscribe: 'noSubscribtion',
  inputSearch: '',
  searchList: [],
  loadSearch: true,
  redirectSearch: false,
};

// Action Type
const OPEN_MODAL_CONNECT = 'OPEN_MODAL_CONNECT';
const CLOSE_MODAL = 'CLOSE_MODAL';
const RECEIVED_SUBSCRIBE = 'RECEIVED_SUBSCRIBE_OK';
const END_CONFIRM_SUBSCRIBE = 'END_CONFIRM_SUBSCRIBE';

const LOADING_CONNECT = 'LOADING_CONNECT';
const RECEIVED_CONNECT = 'RECEIVED_CONNECT';
const ERROR_CONNECT = 'ERROR_CONNECT';
export const CONNECT_SAVED_USER = 'CONNECT_SAVED_USER';
export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';
const RECEIVED_DISCONNECT = 'RECEIVED_DISCONNECT';
const CHECK_REMEMBER = 'CHECK_REMEMBER';

const OPEN_MODAL_SUB = 'OPEN_MODAL_SUB';
const CLOSE_MODAL_SUB = 'CLOSE_MODAL_SUB';
export const SUBSCRIBE = 'SUBSCRIBE';

export const CHANGE_INPUT = 'CHANGE_INPUT';
const SET_INPUT = 'SET_INPUT';

const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
const RECEIVED_SEARCH = 'RECEIVED_SEARCH';
const LOAD_SEARCH = 'LOAD_SEARCH';
const CANCEL_REDIRECT = 'CANCEL_REDIRECT';

// Reducer
const navbarreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_CONNECT:
      return {
        ...state,
        loadingConnect: true,
      };
    case RECEIVED_CONNECT:
      return {
        ...state,
        connect: true,
        loadingConnect: false,
        openConnect: false,
      };
    case ERROR_CONNECT:
      return {
        ...state,
        connect: false,
        loadingConnect: false,
        openConnect: true,
        errorConnect: action.errorMessage,
      };
    case OPEN_MODAL_CONNECT:
      return {
        ...state,
        openConnect: true,
        openSubscribe: false,
      };
    case CHECK_REMEMBER:
      return {
        ...state,
        checkRemember: !state.checkRemember,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openConnect: false,
      };
    case OPEN_MODAL_SUB:
      return {
        ...state,
        openSubscribe: true,
      };
    case CLOSE_MODAL_SUB:
      return {
        ...state,
        openSubscribe: false,
      };
    case RECEIVED_SUBSCRIBE:
      return {
        ...state,
        confirmSubscribe: action.result,
        connectPseudo: action.email,
      };
    case END_CONFIRM_SUBSCRIBE:
      return {
        ...state,
        confirmSubscribe: 'noSubscribtion',
      };
    case SET_INPUT:
      const { name, value } = action;
      return {
        ...state,
        [name]: value,
      };
    case RECEIVED_DISCONNECT:
      // sessionStorage.setItem('disconnect', true);
      return {
        initialState,
      };
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.value,
      };
    case RECEIVED_SEARCH:
      return {
        ...state,
        searchList: action.list,
        loadSearch: false,
      };
    case LOAD_SEARCH:
      return {
        ...state,
        loadSearch: true,
        redirectSearch: true,
      };
    case CANCEL_REDIRECT:
      return {
        ...state,
        redirectSearch: false,
      };
    default:
      return state;
  }
};

// Action creator
// export const actionFunction = param => ({
//   type: ACTION,
//   param: param,
// });

export const connectUser = () => ({
  type: CONNECT,
});

export const checkRemember = () => ({
  type: CHECK_REMEMBER,
});

export const connectSavedUser = () => ({
  type: CONNECT_SAVED_USER,
});

export const loadingConnection = () => ({
  type: LOADING_CONNECT,
});

export const openModalConnect = () => ({
  type: OPEN_MODAL_CONNECT,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openModSub = () => ({
  type: OPEN_MODAL_SUB,
});

export const closeModSub = () => ({
  type: CLOSE_MODAL_SUB,
});

export const subscribeUser = () => ({
  type: SUBSCRIBE,
});

export const endConfirmSubscribe = () => ({
  type: END_CONFIRM_SUBSCRIBE,
});

export const receivedSubscribe = (result, email) => ({
  type: RECEIVED_SUBSCRIBE,
  result,
  email,
});

export const receivedConnect = () => ({
  type: RECEIVED_CONNECT,
});

export const errorConnect = errorMessage => ({
  type: ERROR_CONNECT,
  errorMessage,
});

export const setInput = (value, name) => ({
  type: SET_INPUT,
  value,
  name,
});

export const receivedDisconnect = () => ({
  type: RECEIVED_DISCONNECT,
});

export const disconnectUser = () => ({
  type: DISCONNECT,
});

export const changeInput = value => ({
  type: CHANGE_INPUT_SEARCH,
  value,
});

export const submitSearch = () => ({
  type: SUBMIT_SEARCH,
});

export const receivedSubmit = list => ({
  type: RECEIVED_SEARCH,
  list,
});

export const loadSearch = () => ({
  type: LOAD_SEARCH,
});

export const cancelRedirect = () => ({
  type: CANCEL_REDIRECT,
});

export default navbarreducer;
