const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
  category: null,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }

    default:
      return state
  }
};

export default category;
