const SET_CARS = 'SET_CARS';
const SET_LOADED = 'SET_LOADED';
const SELECTED_CAR = 'SELECTED_CAR';

const defaultState = {
  cars: [],
  isLoaded: false,
  items: []
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

      // const newItems = {
      //   [action.payload]: !state.items[action.payload] ? [action.payload]
      //     : [action.payload],
      // };
      // return {
      //   ...state,
      //   items: newItems,
      // };
    }
    default:
      return state
  }
}