const SET_POINTS = 'SET_POINTS';
const SET_POINT_NAME = 'SET_POINT_NAME';


const defaultState = {
  items: [],
  selectedAddress: null,
}

export default function pointReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        items: action.payload.data
      }
    case SET_POINT_NAME:
      return {
        ...state,
        selectedAddress: action.payload
      }
    default:
      return state
  }
}


