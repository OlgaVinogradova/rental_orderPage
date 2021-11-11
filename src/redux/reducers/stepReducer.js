const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  activePage: ''
}

const step = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        activePage: action.payload
      }

    default:
      return state
  }
};

export default step;
