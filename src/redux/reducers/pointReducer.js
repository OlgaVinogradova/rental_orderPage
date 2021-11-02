import axios from "axios";
import { key } from "../../api/key";
import { setPoints } from "../actions/point";

const SET_POINTS = 'SET_POINTS';
const SET_POINT_NAME = 'SET_POINT_NAME';


const defaultState = {
  items: [],
  pointAddress: null,
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
        pointAddress: action.payload
      }
    default:
      return state
  }
}

export const getPoints = () => (dispatch) => {
  axios.get('https://api-factory.simbirsoft1.com/api/db/point?cityId=60d6e4d32aed9a0b9b84fa82', key).then(({ data }) => {
    dispatch(setPoints(data))
  });
}

