const initialState = {
  listAdd: { list: [], load: true, title: 'Je les ai' },
  listWant: { list: [], load: true, title: 'Je les veux' },
  listWish: { list: [], load: true, title: 'Je les attends' },
  displayedProfile: false,
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

const DISPLAY_PROFILE = 'DISPLAY_PROFILE';

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

export default userPagesReducer;
