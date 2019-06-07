const initialState = {
  loadingComingSoon: true,
  listComingSoon: [],
  countComingSoon: 0,
  loadingTabList: true,
  tabList: [],
  loadingLastReleased: true,
  lastReleasedList: [],
  randomList: [],
  loadingRandom: true,
  displayInput: true,
};

// Action Type
export const REQUEST_COMING_SOON = 'REQUEST_COMING_SOON';
export const LOAD_COMING_SOON = 'LOAD_COMING_SOON';
const RECEIVED_COMING_SOON = 'RECEIVED_COMING_SOON';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

export const REQUEST_TAB_LIST = 'REQUEST_TAB_LIST';
export const LOAD_TAB_LIST = 'LOAD_TAB_LIST';
const RECEIVED_TAB_LIST = 'RECEIVED_TAB_LIST';

export const REQUEST_LAST_RELEASED = 'REQUEST_LAST_RELEASED';
const LOAD_LAST_RELEASED = 'LOAD_LAST_RELEASED';
const RECEIVED_LAST_RELEASED = 'RECEIVED_LAST_RELEASED';

export const REQUEST_RANDOM = 'REQUEST_RANDOM';
const LOAD_RANDOM = 'LOAD_RANDOM';
const RECEIVED_RANDOM = 'RECEIVED_RANDOM';

const DISPLAY_INPUT = 'DISPLAY_INPUT';


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
    case RECEIVED_LAST_RELEASED:
      return {
        ...state,
        lastReleasedList: action.lastReleased,
        loadingLastReleased: false,
      };
    case LOAD_LAST_RELEASED:
      return {
        ...state,
        loadingLastReleased: true,
      };
    case RECEIVED_RANDOM:
      return {
        ...state,
        randomList: action.random,
        loadingRandom: false,
      };
    case LOAD_RANDOM:
      return {
        ...state,
        loadingRandom: true,
      };
    case DISPLAY_INPUT:
      return {
        ...state,
        displayInput: action.bool,
      };
    default:
      return state;
  }
};


// Action creator (qui passeront tous dans le middleware ) 

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

export const receivedLastReleased = lastReleased => ({
  type: RECEIVED_LAST_RELEASED,
  lastReleased,
});
export const requestLastReleased = () => ({
  type: REQUEST_LAST_RELEASED,
});
export const loadLastReleased = () => ({
  type: LOAD_LAST_RELEASED,
});

export const receivedRandom = random => ({
  type: RECEIVED_RANDOM,
  random,
});
export const requestRandom = () => ({
  type: REQUEST_RANDOM,
});
export const loadRandom = () => ({
  type: LOAD_RANDOM,
});

export const displayInputInNavbar = bool => ({
 type: DISPLAY_INPUT,
 bool,
});

export default homeReducer;
