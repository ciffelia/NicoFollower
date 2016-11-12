const initialState = {
  counter: 1
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return Object.assign({}, state, { counter: state.counter + 1 });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
