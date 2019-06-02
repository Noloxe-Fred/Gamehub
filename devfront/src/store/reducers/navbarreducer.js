const initialState = {
  connect: false,
  connectPseudo: '',
  connectPassword: '',
  subfirstname: '',
  sublastname: '',
  subemail: '',
  subpassword: '',
  subconfirmpassword: '',
};

// Action Type
const ACTION = 'ACTION';
const RECEIVED_CONNECT = 'RECEIVED_CONNECT';
const RECEIVED_SUBSCRIBE = 'RECEIVED_SUBSCRIBE';
export const CONNECT = 'CONNECT';
export const SUBSCRIBE = 'SUBSCRIBE';
export const CHANGE_INPUT = 'CHANGE_INPUT';
const SET_INPUT = 'SET_INPUT';

// Reducer
const navbarreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_CONNECT:
      return {
        ...state,
        token: action.token,
      };
    case RECEIVED_SUBSCRIBE:
      return {
        ...state,
        token: action.token,
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

export const subscribeUser = () => ({
  type: SUBSCRIBE,
});

export const receivedSubscribe = token => ({
  type: RECEIVED_SUBSCRIBE,
  token,
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
