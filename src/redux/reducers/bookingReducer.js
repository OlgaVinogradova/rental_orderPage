
const SET_CITY_BOOKING = 'SET_CITY_BOOKING';
const SET_POINT_BOOKING = 'SET_POINT_BOOKING';
const SET_TAB_NAME_BOOKING = 'SET_TAB_NAME_BOOKING';


const defaultState = {
  cityName: null,
  pointAddress: [],
  tabName: 'tabName',
}

export default function bookingReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CITY_BOOKING:
      return {
        ...state,
        cityName: action.payload
      }

    case SET_POINT_BOOKING:
      return {
        ...state,
        pointAddress: action.payload
      }

    case SET_TAB_NAME_BOOKING:
      return {
        ...state,
        tabName: action.payload
      }

    default:
      return state
  }
}
