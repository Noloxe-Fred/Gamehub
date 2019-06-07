const initialState = {
  listsDatas: [
    { listAdd: [], loadAdd: true },
    { listWant: [], loadWant: true },
    { listWish: [], loadWish: true },
  ],
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

// Reducer
const userPagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        listsDatas: [ { [action.nameLoading]: true }, ...listsDatas]
      };
    case RECEIVED:
      const newListsDatas = state.listsDatas.map(list => { 
        if (list[action.NameList]) {
          list = {[action.Namelist]: action.list, [action.nameLoading]: false}
        }
      });
      return {
        ...state,
        listsDatas: newListsDatas,
      };
    default:
      return state;
  }
};

// Action creator
export const request = (nameList, nameLoading) => ({
  type: REQUEST,
  nameList,
  nameLoading,
});

export const load = nameLoading => ({
  type: LOAD,
  nameLoading,
});

export const received = (nameList, nameLoading, list) => ({
  type: RECEIVED,
  nameList,
  nameLoading,
  list,
});

export default userPagesReducer;
