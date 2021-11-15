const SET_RATE_TYPE = 'SET_RATE_TYPE';
const SELECTED_RATE_TYPE = 'SELECTED_RATE_TYPE';


const defaultState = {
  selectedRate: null,
  rate: [],
};

const rateTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RATE_TYPE:
      return {
        ...state,
        rate: action.payload.data
      }
    case SELECTED_RATE_TYPE:
      return {
        ...state,
        selectedRate: action.payload
      }

    default:
      return state
  }
};

export default rateTypeReducer
