import axios from "axios";
import { key } from "../../api/key";
import { setCitys } from "../actions/city";

const SET_CITYS = 'SET_CITYS'

const defaultState = {
  items: [],
  isFetching: true,
}

export default function cityReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CITYS:
      return {
        ...state,
        items: action.payload.data
      }
    default:
      return state
  }
}

export const getCitys = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api-factory.simbirsoft1.com/api/db/city', key)
    dispatch(setCitys(response.data))
  }
}
