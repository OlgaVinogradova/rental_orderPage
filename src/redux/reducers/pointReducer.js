import axios from "axios";
import { key } from "../../api/key";
import { setPoints } from "../actions/point";

const SET_POINTS = 'SET_POINTS'

const defaultState = {
  items: [],
}

export default function pointReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        items: action.payload.data
      }
    default:
      return state
  }
}

export const getPoints = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api-factory.simbirsoft1.com/api/db/point', key)
    dispatch(setPoints(response.data))
  }
}

