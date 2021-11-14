const SELECTED_FULL_TANK = 'SELECTED_FULL_TANK';
const SELECTED_NEED_CHAIR = 'SELECTED_NEED_CHAIR';
const SELECTED_WHEEL = 'SELECTED_WHEEL';

const defaultState = {
  fullTank: false,
  needChildChair: false,
  rightWheel: false,
};

const addServices = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_FULL_TANK:
      return {
        ...state,
        fullTank: action.payload
      }
    case SELECTED_NEED_CHAIR:
      return {
        ...state,
        needChildChair: action.payload
      }
    case SELECTED_WHEEL:
      return {
        ...state,
        rightWheel: action.payload
      }
    default:
      return state
  }
};

export default addServices
