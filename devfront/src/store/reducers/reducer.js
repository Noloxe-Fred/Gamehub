const initialState = {

};

// Action Type
const ACTION = 'ACTION';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

// Action creator
export const actionFunction = param => ({
  type: ACTION,
  param: param,
});

export default reducer;
