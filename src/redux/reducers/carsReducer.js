const SET_CARS = 'SET_CARS';
const SET_LOADED = 'SET_LOADED';

const defaultState = {
  items: [],
  isLoaded: false
};

export default function carsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        items: action.payload.data,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };
    default:
      return state
  }
}