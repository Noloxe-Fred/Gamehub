const initialState = {
  loadingComingSoon: true,
  listComingSoon: [],
  countComingSoon: 0,
  listCarousel: [],
};

// Action Type
export const REQUEST_COMING_SOON = 'REQUEST_COMING_SOON';
export const LOAD_COMING_SOON = 'LOAD_COMING_SOON';
const RECEIVED_COMING_SOON = 'RECEIVED_COMING_SOON';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

export const RECEIVED_LIST_CAROUSEL = 'RECEIVED_LIST_CAROUSEL';

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
    case INCREASE_COUNT:
      return {
        ...state,
        countComingSoon: state.countComingSoon + 6,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        countComingSoon: state.countComingSoon - 6,
      };
    case RECEIVED_LIST_CAROUSEL:
      return {
        ...state,
        listCarousel: action.listCarousel,
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

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});
export const receivedListCarousel = listCarousel => ({
  type: RECEIVED_LIST_CAROUSEL,
  listCarousel,
});
export default homeReducer;
