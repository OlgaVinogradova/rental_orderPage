const SET_CATEGORY = 'SET_CATEGORY';
const SET_CATEGORY_ID = 'SET_CATEGORY_ID';


const initialState = {
  category: [],
  categoryId: null
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.data
      }

    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.payload
      }
    default:
      return state
  }
};

export default filters;