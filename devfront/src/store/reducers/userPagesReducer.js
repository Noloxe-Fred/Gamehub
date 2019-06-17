const initialState = {
  have: { list: [], load: true, title: 'Je les ai' },
  want: { list: [], load: true, title: 'Je les veux' },
  waiting: { list: [], load: true, title: 'Je les attends' },
  displayedProfile: false,
  fullList: false,
  userGameDatas: [],
  loadUsGaDa: true,
  userProfile: [],
  loadProfile: true,
};

// Action Type
export const REQUEST = 'REQUEST';
// export const REQUEST_ADD = 'REQUEST_ADD';
// export const REQUEST_WANT = 'REQUEST_WANT';
// export const REQUEST_WISH = 'REQUEST_WISH';

const LOAD = 'LOAD';
// const LOAD_ADD = 'LOAD_ADD';
// const LOAD_WANT = 'LOAD_WANT';
// const LOAD_WISH = 'LOAD_WISH';

const RECEIVED = 'RECEIVED';
// const RECEIVED_ADD = 'RECEIVED_ADD';
// const RECEIVED_WANT = 'RECEIVED_WANT';
// const RECEIVED_WISH = 'RECEIVED_WISH';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
const LOAD_PROFILE = 'LOAD_PROFILE';
const RECEIVED_PROFILE = 'RECEIVED_PROFILE';

const DISPLAY_FULL_LIST = 'DISPLAY_FULL_LIST';

const DISPLAY_PROFILE = 'DISPLAY_PROFILE';

export const REQ_USER_GAME_DATAS = 'REQ_USER_GAME_DATAS';
const REC_USER_GAME_DATAS = 'REC_USER_GAME_DATAS';
const LOAD_US_GA_DA = 'LOAD_US_GA_DA';

// Reducer
const userPagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      const list = action.nameList;
      return {
        ...state,
        [list]: {...state[list], load: true },
      };
    case RECEIVED:
      const { nameList, gameList } = action;
      return {
        ...state,
        [nameList]: { ...state[nameList], list: gameList, load: false },
      };
    case DISPLAY_PROFILE:
      return {
        ...state,
        displayedProfile: !state.displayedProfile,
      };
    case DISPLAY_FULL_LIST:
      return {
        ...state,
        fullList: action.choice,
      };
    case REC_USER_GAME_DATAS:
      return {
        ...state,
        userGameDatas: action.datas,
        loadUsGaDa: false,
      };
    case LOAD_US_GA_DA:
      return {
        ...state,
        loasUsGaDa: true,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        loadProfile: true,
      };
    case RECEIVED_PROFILE:
      return {
        ...state,
        userProfile: action.userDatas,
        loadProfile: false,
      };
    default:
      return state;
  }
};

// Action creator
export const request = nameList => ({
  type: REQUEST,
  nameList,
});

export const load = nameList => ({
  type: LOAD,
  nameList,
});

export const received = (nameList, gameList) => ({
  type: RECEIVED,
  nameList,
  gameList,
});

export const displayProfile = () => ({
  type: DISPLAY_PROFILE,
});

export const displayFullList = choice => ({
  type: DISPLAY_FULL_LIST,
  choice,
});

export const reqUserGameDatas = id => ({
  type: REQ_USER_GAME_DATAS,
  id,
});

export const recUserGameDatas = datas => ({
  type: REC_USER_GAME_DATAS,
  datas,
});

export const loadUsGaDa = () => ({
  type: LOAD_US_GA_DA,
});

export const requestProfile = () => ({
  type: REQUEST_PROFILE,
});

export const loadProfile = () => ({
  type: LOAD_PROFILE,
});

export const receivedProfile = userDatas => ({
  type: RECEIVED_PROFILE,
  userDatas,
});

export default userPagesReducer;
