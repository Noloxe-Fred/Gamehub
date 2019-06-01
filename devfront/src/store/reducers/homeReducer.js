const initialState = {
  loadingComingSoon: true,
  listComingSoon: [],
  test: 'test',
};

// Action Type
export const REQUEST_COMING_SOON = 'REQUEST_COMING_SOON';
export const LOAD_COMING_SOON = 'LOAD_COMING_SOON';
const RECEIVED_COMING_SOON = 'RECEIVED_COMING_SOON';

// Reducer
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_COMING_SOON:
      return {
        ...state,
        loadingComingSoon: true,
      };
    case RECEIVED_COMING_SOON:
      return {
        ...state,
        loadingComingSoon: false,
        listComingSoon: action.listComingSoon,
      };
    default:
      return state;
  }
};

// Action creator
export const requestComingSoon = () => ({
  type: REQUEST_COMING_SOON,
});

export const loadComingSoon = () => ({
  type: LOAD_COMING_SOON,
});

export const receivedComingSoon = listComingSoon => ({
  type: RECEIVED_COMING_SOON,
  listComingSoon,
});

export default homeReducer;
