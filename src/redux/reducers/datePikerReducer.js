const SET_DATE_START = 'SET_DATE_START';
const SET_DATE_END = 'SET_DATE_END';

const defaultState = {
  dateStart: false,
  dateEnd: false,
};

const datePikerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATE_START:
      return {
        ...state,
        dateStart: action.payload
      }
    case SET_DATE_END:
      return {
        ...state,
        dateEnd: action.payload
      }
    default:
      return state
  }
};

export default datePikerReducer
