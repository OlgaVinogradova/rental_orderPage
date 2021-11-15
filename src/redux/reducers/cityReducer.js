const SET_CITYS = 'SET_CITYS';
const SET_CITY_NAME = 'SET_CITY_NAME';

const defaultState = {
  items: [],
  cityName: null,
}

export default function cityReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CITYS:
      return {
        ...state,
        items: action.payload.data
      }
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload
      }
    default:
      return state
  }
}
