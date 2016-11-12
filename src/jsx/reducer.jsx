const initialState = {
  counter: 1,
  mainTabSlideIndex: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return Object.assign({}, state, { counter: state.counter + 1 });
    }
    case 'CHANGE_TAB': {
      return Object.assign({}, state, { mainTabSlideIndex: action.payload });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
