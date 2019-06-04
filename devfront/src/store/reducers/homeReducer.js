const initialState = {
  loadingComingSoon: true,
  listComingSoon: [],
  countComingSoon: 0,
  listCarousel: [],
  loadingTabList: true,
  tabList: [],
};

// Action Type
export const REQUEST_COMING_SOON = 'REQUEST_COMING_SOON';
export const LOAD_COMING_SOON = 'LOAD_COMING_SOON';
const RECEIVED_COMING_SOON = 'RECEIVED_COMING_SOON';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';


export const RECEIVED_LIST_CAROUSEL = 'RECEIVED_LIST_CAROUSEL';
export const REQUEST_TAB_LIST = 'REQUEST_TAB_LIST';
export const LOAD_TAB_LIST = 'LOAD_TAB_LIST';
const RECEIVED_TAB_LIST = 'RECEIVED_TAB_LIST';


// Reducer
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TAB_LIST:
      return {
        ...state,
        loadingTabList: true,
      };
    case RECEIVED_TAB_LIST:
      return {
        ...state,
        loadingTabList: false,
        tabList: action.tabList,
      };
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
export const loadingTabList = () => ({
  type: LOAD_TAB_LIST,
});

export const receivedTabList = tabList => ({
  type: RECEIVED_TAB_LIST,
  tabList,
});

export const requestTabList = () => ({
  type: REQUEST_TAB_LIST,
});

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
