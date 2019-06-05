const initialState = {
  connect: false,
  loadingConnect: false,
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
const ACTION = 'ACTION';
const LOADING_CONNECT = 'LOADING_CONNECT'
const RECEIVED_CONNECT = 'RECEIVED_CONNECT';
const OPEN_MODAL_CONNECT = 'OPEN_MODAL_CONNECT';
const CLOSE_MODAL = 'CLOSE_MODAL';
const RECEIVED_SUBSCRIBE = 'RECEIVED_SUBSCRIBE_OK';
const END_CONFIRM_SUBSCRIBE = 'END_CONFIRM_SUBSCRIBE';

export const CONNECT = 'CONNECT';
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
        token: action.token,
        loadingConnect: false,
        openConnect: false,
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
      };
    case SET_INPUT:
      const { name, value } = action;
      return {
        ...state,
        [name]: value,
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

export const receivedSubscribe = result => ({
  type: RECEIVED_SUBSCRIBE,
  result,
});

export const receivedConnect = token => ({
  type: RECEIVED_CONNECT,
  token,
});

export const setInput = (value, name) => ({
  type: SET_INPUT,
  value,
  name,
});

export default navbarreducer;
