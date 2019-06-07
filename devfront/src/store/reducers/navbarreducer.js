const initialState = {
  connect: false,
  loadingConnect: false,
  errorConnect: false,
  openConnect: false,
  connectPseudo: '',
  connectPassword: '',
  subfirstname: '',
  sublastname: '',
  subpseudo: '',
  subemail: '',
  subpassword: '',
  subconfirmpassword: '',
  confirmSubscribe: 'noSubscribtion',
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

export const SUBSCRIBE = 'SUBSCRIBE';

export const CHANGE_INPUT = 'CHANGE_INPUT';
const SET_INPUT = 'SET_INPUT';

// Reducer
const navbarreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_CONNECT:
      return {
        ...state,
        loadingConnect: true,
      }
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
        errorConnect: true,
      };
    case OPEN_MODAL_CONNECT:
      return {
        ...state,
        openConnect: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openConnect: false,
      };
    case RECEIVED_SUBSCRIBE:
      return {
        ...state,
        confirmSubscribe: action.result,
      };
    case END_CONFIRM_SUBSCRIBE:
      return {
        ...state,
        confirmSubscribe: 'noSubscribtion',
        connectPseudo: action.email,
      };
    case SET_INPUT:
      const { name, value } = action;
      return {
        ...state,
        [name]: value,
      };
    case RECEIVED_DISCONNECT:
      return {
        initialState,
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

export const errorConnect = () => ({
  type: ERROR_CONNECT,
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

export default navbarreducer;
