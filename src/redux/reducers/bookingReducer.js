
const defaultState = {
  cityName: [],
  pointAdress: [],
}

export default function bookingReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_CITY_BOOKING':
      return {
        ...state,
        cityName: action.payload
      }

    case 'SET_POINT_BOOKING':
      return {
        ...state,
        pointAdress: action.payload
      }

    default:
      return state
  }
}
