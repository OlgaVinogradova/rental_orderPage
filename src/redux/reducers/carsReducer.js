const SET_CARS = 'SET_CARS';
const SET_LOADED = 'SET_LOADED';
const SELECTED_CAR = 'SELECTED_CAR';
const CAR_COLOR = 'CAR_COLOR';
const SELECTED_COLOR = 'SELECTED_COLOR';

const defaultState = {
  cars: [],
  isLoaded: false,
  items: [],
  activeCarColor: [],
  colorName: null,
};

export default function carsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        cars: action.payload.data,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };
    case SELECTED_CAR: {
      return {
        ...state,
        items: action.payload
      };
    };
    case CAR_COLOR: {
      return {
        ...state,
        activeCarColor: action.payload
      };
    }
    case SELECTED_COLOR: {
      return {
        ...state,
        colorName: action.payload
      };
    }
    default:
      return state
  }
}